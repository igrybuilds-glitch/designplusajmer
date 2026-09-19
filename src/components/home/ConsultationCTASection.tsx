import React, { useState } from 'react';
import { Phone, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/siteData';

export function ConsultationCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: 'Residential Architecture',
    city: 'Ajmer',
    plotSize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation-cta" className="py-24 bg-[#141414] text-stone-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct Outreach */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
              13 / Direct Studio Dialogue
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-white">
              Initiate your architectural or structural commission.
            </h2>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed">
              Whether you possess a vacant plot in Ajmer, require comprehensive working drawings, or seek Chartered Structural Stability vetting for municipal sanctions, our principals are ready to advise.
            </p>

            {/* Direct Phone & Email Connect */}
            <div className="pt-4 space-y-4 border-t border-stone-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-400">Direct Principal Line</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                    <a
                      href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                      className="text-sm sm:text-base text-white hover:text-amber-400 font-medium transition-colors"
                    >
                      {BUSINESS_INFO.phones[0].display}
                    </a>
                    <span className="text-stone-600">/</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phones[1].raw}`}
                      className="text-sm sm:text-base text-white hover:text-amber-400 font-medium transition-colors"
                    >
                      {BUSINESS_INFO.phones[1].display}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-400">Studio Correspondence</div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm sm:text-base text-white hover:text-amber-400 font-medium transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Card */}
          <div className="lg:col-span-6 bg-[#1D1D1D] border border-stone-800 p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-stone-800">
                  <h3 className="font-editorial text-2xl text-white font-medium">
                    Request Project Callback
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Receive direct preliminary feedback on plot feasibility and byelaws within 24 hours.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Vikramaditya Singh"
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:border-amber-400 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 98290XXXXX"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      City / Region
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Ajmer, Pushkar, Jaipur..."
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Typology
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:border-amber-400 focus:outline-hidden"
                    >
                      <option value="Residential Architecture">Residential Villa</option>
                      <option value="Commercial Architecture">Commercial Plaza</option>
                      <option value="Interior Design">Interior Architecture</option>
                      <option value="Structural Design">Structural Stability / RCC</option>
                      <option value="2D Floor Planning">2D Planning & Vastu</option>
                      <option value="3D Elevation Design">3D Elevations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Plot Dimensions (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.plotSize}
                      onChange={(e) => setForm({ ...form, plotSize: e.target.value })}
                      placeholder="e.g. 30x50 ft / 250 sq.yd."
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-stone-100 text-sm focus:border-amber-400 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-500 text-stone-950 py-3 text-xs tracking-wider uppercase font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Confirm Consultation Request</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-700 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-editorial text-2xl text-white font-medium">
                  Request Logged
                </h3>
                <p className="text-xs text-stone-300 max-w-xs mx-auto leading-relaxed">
                  Thank you, {form.name}. Our principal engineers have noted your interest in {form.projectType} in {form.city}. We will call you at {form.phone} shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Or Call {BUSINESS_INFO.phones[0].display}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
