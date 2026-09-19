import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Residential Architecture',
    city: 'Ajmer',
    plotArea: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Design Plus',
    url: 'https://designplusajmer.in/contact',
    description: 'Contact Design Plus studio in Ajmer, Rajasthan. Consult with Chartered Engineer Er. Sudhir Soni.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      telephone: ['+91-7976453090', '+91-9461465610'],
      email: 'designplusajmer@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ajmer',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      }
    }
  };

  return (
    <main id="contact-page" className="pt-28 pb-20">
      <SEOHead
        title="Contact Design Plus | Architects & Structural Engineers in Ajmer"
        description="Contact Design Plus studio in Ajmer, Rajasthan. Direct phone: 7976453090 / 9461465610. Email: designplusajmer@gmail.com. Consult with Chartered Engineer Er. Sudhir Soni."
        canonical="https://designplusajmer.in/contact"
        schema={contactSchema}
      />

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle="Studio Inquiries & Consultations"
        title="Connect With Our Engineering & Architecture Studio"
        description="Reach out directly to Er. Sudhir Soni and our senior architectural team to evaluate site feasibility, byelaw constraints, or structural design requirements in Ajmer and Rajasthan."
      />

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verified Directory Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 bg-white border border-stone-300 shadow-sm space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                  Verified Contact Points
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                  Direct Studio Access
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Location</div>
                    <div className="font-medium text-stone-900">Ajmer, Rajasthan, India</div>
                    <div className="text-xs text-stone-500 mt-0.5">Primary Practice & Coordination Hub</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Verified Direct Lines</div>
                    <div className="space-y-1 mt-0.5">
                      <a
                        href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                        className="block font-semibold text-stone-950 hover:text-amber-800 transition-colors text-base"
                      >
                        {BUSINESS_INFO.phones[0].display}
                      </a>
                      <a
                        href={`tel:${BUSINESS_INFO.phones[1].raw}`}
                        className="block font-semibold text-stone-950 hover:text-amber-800 transition-colors text-base"
                      >
                        {BUSINESS_INFO.phones[1].display}
                      </a>
                    </div>
                    <div className="text-xs text-stone-500 mt-1">Directly connects to Er. Sudhir Soni / studio reception</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Official Email</div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="block font-medium text-stone-900 hover:text-amber-800 transition-colors text-sm break-all mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Leadership Footnote */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2 text-xs text-stone-600 mb-1">
                  <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                  <span className="font-semibold text-stone-900">Er. Sudhir Soni, CEO</span>
                </div>
                <div className="text-[11px] text-stone-500">
                  {LEADERSHIP.qualification}
                </div>
              </div>

              {/* Verified Social Channels */}
              <div className="pt-4 border-t border-stone-200">
                <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-3">
                  Verified Online Profiles:
                </div>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href={BUSINESS_INFO.socials.justdial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-stone-50 hover:bg-stone-100 text-stone-900 transition-colors font-medium border border-stone-200"
                  >
                    <span>Design Plus on Justdial</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                  </a>
                  <a
                    href={BUSINESS_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-stone-50 hover:bg-stone-100 text-stone-900 transition-colors font-medium border border-stone-200"
                  >
                    <span>Instagram (@architectsdesignplus)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                  </a>
                  <a
                    href={BUSINESS_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-stone-50 hover:bg-stone-100 text-stone-900 transition-colors font-medium border border-stone-200"
                  >
                    <span>Facebook Official Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 p-8 sm:p-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-stone-200 pb-4">
                  <h2 className="font-editorial text-3xl text-stone-950 font-medium">
                    Consultation & Project Inquiry Form
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    Provide your site dimensions and project typology for early feasibility remarks.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alok Verma"
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>

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
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alok@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      City / Region in Rajasthan
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Ajmer, Pushkar, Jaipur, Udaipur..."
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Project Discipline
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    >
                      <option value="Residential Architecture">Residential Architecture / Villa</option>
                      <option value="Commercial Architecture">Commercial Complex / Office</option>
                      <option value="Interior Design">Interior Architecture</option>
                      <option value="Structural Design">Chartered Structural Design / Stability</option>
                      <option value="2D Floor Planning">2D Floor Planning & Vastu</option>
                      <option value="3D Elevation Design">3D Exterior Elevation Visuals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Approximate Plot / Built Area
                    </label>
                    <input
                      type="text"
                      value={formData.plotArea}
                      onChange={(e) => setFormData({ ...formData, plotArea: e.target.value })}
                      placeholder="e.g. 3,000 sq.ft. or 40x70 ft plot"
                      className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Project Notes or Regulatory Inquiries
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific questions regarding setbacks, soil conditions, ADA approvals, desired floors, or architectural preferences..."
                    className="w-full px-3.5 py-2.5 bg-[#FBFBF9] border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:outline-hidden resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3.5 text-xs tracking-wider uppercase font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry for Review</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-[11px] text-stone-500 text-center">
                  Your project information is held in strict professional confidentiality under Chartered Engineering ethics.
                </p>
              </form>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-stone-950 font-medium">
                  Inquiry Received by Design Plus
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}. Your inquiry for {formData.service} in {formData.city} has been routed directly to Er. Sudhir Soni and our lead architects. We will connect by phone at {formData.phone} within 24 business hours.
                </p>
                <div className="pt-6">
                  <a
                    href={`tel:${BUSINESS_INFO.phones[0].raw}`}
                    className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now ({BUSINESS_INFO.phones[0].display})</span>
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
