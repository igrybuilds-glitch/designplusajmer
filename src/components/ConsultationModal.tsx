import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, CheckCircle2, ArrowRight, Loader2, ShieldCheck, Lock, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { submitConsultationInquiry } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  itemId?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService, itemId = 'house-planning-consultation' }: ConsultationModalProps) {
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [consentRequired, setConsentRequired] = useState(false);
  const [consentOptional, setConsentOptional] = useState(false);

  // Email OTP States
  const [otpStep, setOtpStep] = useState<'input' | 'verify' | 'verified'>('input');
  const [otpCode, setOtpCode] = useState('');
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    phone: '',
    email: user?.email || '',
    service: defaultService || 'Residential Architecture',
    location: 'Ajmer',
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  // 1. Send Email OTP
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address first.');
      return;
    }

    setOtpSending(true);
    setOtpMessage('');
    try {
      const res = await fetch('/api/payment/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send OTP');

      setOtpStep('verify');
      setOtpMessage(data.message || 'OTP sent successfully.');
      if (data.testModeOtpHint) {
        console.info(`[Test Mode OTP Hint]: ${data.testModeOtpHint}`);
      }
    } catch (err: any) {
      alert(err.message || 'Error sending OTP');
    } finally {
      setOtpSending(false);
    }
  };

  // 2. Verify Email OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || otpCode.length < 6) {
      alert('Please enter the 6-digit verification code.');
      return;
    }

    setOtpVerifying(true);
    try {
      const res = await fetch('/api/payment/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: otpCode })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Invalid OTP');

      setOtpStep('verified');
      setOtpMessage('Email verified successfully!');
    } catch (err: any) {
      alert(err.message || 'OTP verification failed');
    } finally {
      setOtpVerifying(false);
    }
  };

  // 3. Initiate Razorpay Checkout Payment & Booking
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentRequired) return;
    if (otpStep !== 'verified') {
      alert('Please verify your email via OTP before proceeding to payment.');
      return;
    }

    setSubmitting(true);
    try {
      // Create secure order on server (server looks up price from price book)
      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemId,
          email: formData.email,
          customerName: formData.name,
          phone: formData.phone
        })
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || 'Failed to create payment order');

      // Load Razorpay checkout script dynamically if not present
      if (!(window as any).Razorpay) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      const options = {
        key: orderData.keyId,
        amount: orderData.amount * 100, // paise
        currency: orderData.currency || 'INR',
        name: 'Design Plus',
        description: orderData.itemDescription || 'Architectural Consultation & Booking',
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#B86B38'
        },
        handler: async (response: any) => {
          try {
            // Verify payment signature server-side
            const verifyRes = await fetch('/api/payment/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                itemId,
                email: formData.email
              })
            });
            const verifyData = await verifyRes.json();
            if (!verifyRes.ok) throw new Error(verifyData.error || 'Payment signature verification failed');

            setBookingRef(verifyData.bookingReference || 'DP-BK-984210');

            // Log submission to Firestore / database
            try {
              await submitConsultationInquiry({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                projectType: formData.service,
                location: formData.location,
                message: formData.notes,
                userId: user?.uid
              });
            } catch (fsErr) {
              console.warn('Firestore log notice:', fsErr);
            }

            setSubmitted(true);
          } catch (verifyErr: any) {
            alert(`Payment verification error: ${verifyErr.message}`);
          }
        },
        modal: {
          ondismiss: () => {
            setSubmitting(false);
          }
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: any) {
      alert(err.message || 'Payment initiation failed');
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FBFBF9] border border-stone-300 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 p-2 focus:outline-hidden cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-[#B86B38] font-semibold block mb-1">
                Direct Studio Dialogue &middot; Test Mode Secure Checkout
              </span>
              <h3 id="consultation-modal-title" className="font-editorial text-2xl sm:text-3xl text-stone-950 font-bold">
                Book Site Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Connect with Er. Sudhir Soni and the Design Plus architecture team. Secure your consultation slot with instant Razorpay payment.
              </p>
            </div>

            <form onSubmit={handleProceedToPayment} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 98290XXXXX"
                    className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Email Address (OTP Verification) *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      disabled={otpStep === 'verified'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rajesh@gmail.com"
                      className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden disabled:bg-stone-100"
                    />
                    {otpStep !== 'verified' && (
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpSending}
                        className="bg-stone-900 text-white px-3 py-2 text-xs font-mono uppercase shrink-0 hover:bg-stone-800 cursor-pointer disabled:opacity-50"
                      >
                        {otpSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Send OTP'}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* OTP Input Step */}
              {otpStep === 'verify' && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-2">
                  <div className="text-xs text-amber-900 font-medium flex items-center justify-between">
                    <span>Enter 6-digit verification code sent to {formData.email}:</span>
                    {otpMessage && <span className="text-[10px] text-amber-700">{otpMessage}</span>}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="123456"
                      className="w-full px-3 py-2 bg-white border border-amber-300 text-stone-900 text-sm font-mono tracking-widest focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={otpVerifying}
                      className="bg-[#B86B38] text-white px-4 py-2 text-xs font-mono uppercase shrink-0 hover:bg-[#a55d31] cursor-pointer disabled:opacity-50"
                    >
                      {otpVerifying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Verify Code'}
                    </button>
                  </div>
                </div>
              )}

              {otpStep === 'verified' && (
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email successfully verified via 6-digit secure server OTP. Ready for payment.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  >
                    <option value="Residential Architecture">Residential Architecture</option>
                    <option value="Commercial Architecture">Commercial Architecture</option>
                    <option value="Interior Design">Interior Architecture</option>
                    <option value="Structural Design">Chartered Structural Design</option>
                    <option value="2D Floor Planning">2D Floor Planning & Vastu</option>
                    <option value="3D Elevation Design">3D Elevation Visualizations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Location in Rajasthan
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Panchsheel Nagar, Ajmer"
                    className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Plot Details or Project Scope
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Plot size (e.g. 40x60 ft), number of floors, desired timeline..."
                  className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              {/* DPDP Act Granular Consent Section */}
              <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-300 space-y-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-1.5 font-semibold text-stone-900 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#B86B38]" />
                  <span>Data Protection Notice (DPDP Act, India)</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-[11px]">
                  <strong>Data Collected:</strong> Name, phone, email, and project details. <strong>Purpose:</strong> To schedule consultation and coordinate with studio desk. Call <a href="tel:+917976453090" className="text-[#B86B38] font-bold">+91-7976453090</a>. Read our <Link to="/privacy-policy" target="_blank" className="text-[#B86B38] underline font-medium">Privacy Policy</Link>.
                </p>

                <div className="space-y-1.5 pt-1 border-t border-stone-200">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={consentRequired}
                      onChange={(e) => setConsentRequired(e.target.checked)}
                      className="mt-0.5 rounded-xs text-[#B86B38] focus:ring-[#B86B38]"
                    />
                    <span className="text-stone-900 font-medium">
                      <strong>(Required)</strong> I consent to Design Plus contacting me regarding this consultation booking.
                    </span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || !consentRequired || otpStep !== 'verified'}
                  className="w-full bg-[#B86B38] hover:bg-[#a55d31] disabled:opacity-50 text-white py-3.5 text-xs tracking-wider uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Opening Secure Razorpay Checkout...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Pay ₹1,500 &amp; Book Consultation</span>
                    </>
                  )}
                </button>
                {otpStep !== 'verified' && (
                  <p className="text-[11px] text-amber-800 text-center mt-1.5 font-medium">
                    * Please enter your email and verify via 6-digit OTP above to unlock secure payment.
                  </p>
                )}
              </div>

              <div className="pt-1 text-center">
                <p className="text-xs text-stone-500">
                  Or call the studio directly:{' '}
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                    className="text-stone-900 font-semibold underline decoration-stone-400"
                  >
                    {BUSINESS_INFO.phones[0].display}
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-editorial text-2xl text-stone-950 font-bold">
              Consultation Booked Successfully
            </h3>
            <div className="p-3 bg-stone-100 border border-stone-200 rounded-lg max-w-xs mx-auto text-xs font-mono text-stone-800">
              Booking Reference: <strong className="text-[#B86B38]">{bookingRef}</strong>
            </div>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you, {formData.name}. Payment verified via secure server signature. Our senior team led by Er. Sudhir Soni will coordinate with you at ({formData.phone}) within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="bg-stone-900 text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
