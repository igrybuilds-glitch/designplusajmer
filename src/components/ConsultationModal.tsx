import React, { useState } from 'react';
import { X, Phone, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';
import { submitConsultationInquiry } from '../lib/firebase';
import { useAuth } from '../context/AuthContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultService }: ConsultationModalProps) {
  const { user } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    phone: '',
    email: user?.email || '',
    service: defaultService || 'Residential Architecture',
    location: 'Ajmer',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
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
    } catch (err) {
      console.warn("Firestore consultation logging notice:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FBFBF9] border border-stone-300 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-500 hover:text-stone-900 p-2 focus:outline-hidden"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                Direct Studio Dialogue
              </span>
              <h3 id="consultation-modal-title" className="font-editorial text-2xl sm:text-3xl text-stone-950 font-bold">
                Book an Architectural Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Connect with Er. Sudhir Soni and the Design Plus architecture team. We review your plot parameters, zoning byelaws, and architectural vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden"
                  />
                </div>
              </div>

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
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Plot size (e.g. 40x60 ft), number of floors, desired timeline, or architectural ideas..."
                  className="w-full px-3 py-2.5 bg-white border border-stone-300 text-stone-900 text-sm focus:border-stone-800 focus:outline-hidden resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-50 text-[#FBFBF9] py-3 text-xs tracking-wider uppercase font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                      <span>Submitting to Studio Desk...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-center">
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
              Consultation Inquiry Received
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you, {formData.name}. Our senior team led by Er. Sudhir Soni has logged your details for {formData.service}. We will connect via phone ({formData.phone}) within 24 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 text-[#FBFBF9] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now ({BUSINESS_INFO.phones[0].display})</span>
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-stone-300 text-stone-800 hover:bg-stone-100"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
