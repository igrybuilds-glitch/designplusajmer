import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ArrowRight, Loader2, ShieldCheck, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { submitConsultationInquiry } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';
import { isValidIndianMobile, normalizeIndianMobile, PHONE_ERROR_MESSAGE } from '../lib/phone';

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
  const [phoneError, setPhoneError] = useState('');

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

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (value.trim() && !isValidIndianMobile(value)) {
      setPhoneError(PHONE_ERROR_MESSAGE);
    } else {
      setPhoneError('');
    }
  };

  // Book consultation — just name + mobile, no verification codes.
  const handleBookConsultation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentRequired) return;
    if (!formData.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!isValidIndianMobile(formData.phone)) {
      setPhoneError(PHONE_ERROR_MESSAGE);
      return;
    }

    setSubmitting(true);
    try {
      await submitConsultationInquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: normalizeIndianMobile(formData.phone),
        projectType: formData.service,
        location: formData.location,
        message: formData.notes,
        userId: user?.uid
      });

      setBookingRef('DP-' + Math.random().toString(36).slice(2, 8).toUpperCase());
      setSubmitted(true);
    } catch (err: any) {
      alert(err.message || 'Booking failed. Please try again.');
    } finally {
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
                Talk Directly to the Studio
              </span>
              <h3 id="consultation-modal-title" className="font-editorial text-2xl sm:text-3xl text-stone-950 font-bold">
                Book Site Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Fill in your name and mobile number — our team will call you within 24 hours to schedule.
              </p>
            </div>

            <form onSubmit={handleBookConsultation} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Sharma"
                  className="w-full px-3 py-3 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  placeholder="10-digit mobile, e.g. 98290 12345"
                  className={`w-full px-3 py-3 bg-white border text-stone-900 text-sm focus:outline-hidden ${
                    phoneError ? 'border-red-500 focus:border-red-600' : 'border-stone-300 focus:border-stone-800'
                  }`}
                />
                {phoneError && (
                  <p className="text-xs text-red-600 mt-1 font-medium">{phoneError}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    What Do You Need?
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-3 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  >
                    <option value="Residential Architecture">Home Design</option>
                    <option value="Commercial Architecture">Commercial Building</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Structural Design">Structural Design</option>
                    <option value="2D Floor Planning">2D Floor Plan / Vastu</option>
                    <option value="3D Elevation Design">3D Elevation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3 py-3 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Tell Us About Your Plot (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Plot size, floors, timeline..."
                  className="w-full px-3 py-3 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              {/* Short consent (DPDP Act) */}
              <label className="flex items-start gap-2 cursor-pointer p-3 rounded-xl bg-stone-100 border border-stone-300 text-xs text-stone-700">
                <input
                  type="checkbox"
                  required
                  checked={consentRequired}
                  onChange={(e) => setConsentRequired(e.target.checked)}
                  className="mt-0.5 rounded-xs text-[#B86B38] focus:ring-[#B86B38]"
                />
                <span>
                  <ShieldCheck className="w-3.5 h-3.5 inline text-[#B86B38] mr-1" />
                  I agree Design Plus may call/message me about this booking. <Link to="/privacy-policy" target="_blank" className="text-[#B86B38] underline font-medium">Privacy Policy</Link>
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting || !consentRequired}
                  className="w-full bg-[#B86B38] hover:bg-[#a55d31] disabled:opacity-50 text-white py-4 text-sm tracking-wider uppercase font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4" />
                      <span>Book My Consultation</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-1 text-center">
                <p className="text-xs text-stone-500">
                  Prefer to talk now? Call the studio:{' '}
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                    className="text-stone-900 font-semibold underline decoration-stone-400 inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
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
              Done! We'll Call You Soon
            </h3>
            <div className="p-3 bg-stone-100 border border-stone-200 rounded-lg max-w-xs mx-auto text-xs font-mono text-stone-800">
              Booking Reference: <strong className="text-[#B86B38]">{bookingRef}</strong>
            </div>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you, {formData.name}. Our team will call you on {normalizeIndianMobile(formData.phone)} within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="bg-stone-900 text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
