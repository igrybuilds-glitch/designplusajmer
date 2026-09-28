import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, UserCheck, Phone, Mail, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { BUSINESS_INFO } from '../data/siteData';

export function PrivacyPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy & DPDP Act Compliance | Design Plus Ajmer',
    description: 'Privacy Policy of Design Plus Architecture & Structural Engineering Studio in Ajmer, Rajasthan, outlining compliance with the Digital Personal Data Protection (DPDP) Act, India.',
    url: 'https://designplusajmer.in/privacy-policy'
  };

  return (
    <main id="privacy-policy-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-28 pb-20">
      <SEOHead
        title="Privacy Policy & DPDP Act Compliance | Design Plus Ajmer"
        description="Privacy policy and personal data protection disclosures for Design Plus Studio in Ajmer, Rajasthan, in compliance with the DPDP Act, India."
        keywords="privacy policy design plus, dpdp act compliance ajmer, data protection studio rajasthan"
        canonical="https://designplusajmer.in/privacy-policy"
        schema={schema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <EditorialHero
        subtitle="Data Protection & Compliance"
        title="Privacy Policy & DPDP Act Compliance"
        description="Design Plus ('we', 'our', or 'us') is committed to protecting your personal data in strict compliance with the Digital Personal Data Protection (DPDP) Act, 2023 of India."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-stone-800 font-sans leading-relaxed">
        
        {/* Notice Summary Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold">
            <ShieldCheck className="w-5 h-5 text-[#C86635]" />
            <span>DPDP Act Notice &amp; Summary</span>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            We collect personal data solely for architectural and structural enquiry callbacks, site inspections, and professional communication. You retain full rights over your data, including the right to access, correct, erase, or withdraw your consent at any time.
          </p>
          <div className="pt-2 border-t border-stone-200 text-xs font-mono text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Grievance Officer: Er. Sudhir Soni</span>
            <a href="tel:+917976453090" className="text-[#C86635] font-bold hover:underline">+91-7976453090</a>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">1. What Personal Data We Collect</h2>
          <p className="text-sm sm:text-base text-stone-700">
            When you submit an enquiry, book a consultation, or interact with our catalog, we collect only necessary personal data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-700">
            <li><strong>Full Name:</strong> To identify and address you correctly.</li>
            <li><strong>Phone Number:</strong> For callback coordination, WhatsApp communication, and site visit scheduling.</li>
            <li><strong>Email Address (Optional):</strong> For sending architectural proposals, CAD drafts, or structural reports.</li>
            <li><strong>Project Details &amp; Location:</strong> Plot dimensions, location (e.g. Ajmer, Jaipur), and specific service requirements.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">2. Purpose of Collection &amp; Lawful Basis</h2>
          <p className="text-sm sm:text-base text-stone-700">
            All data collection is based on your explicit, granular consent under Section 6 of the DPDP Act. We process your data for the following lawful purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-700">
            <li>Responding to architectural and structural engineering enquiries.</li>
            <li>Scheduling site inspections, total station surveys, and geotechnical tests.</li>
            <li>Delivering project management, municipal approval liaison, and construction updates.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">3. Data Storage, Security &amp; Retention</h2>
          <p className="text-sm sm:text-base text-stone-700">
            Your personal data is stored securely in encrypted databases (Google Firebase Firestore with strict IAM security rules). We retain personal data only as long as necessary to fulfill the purpose of your enquiry or as required by applicable Indian civil engineering and construction record-keeping standards.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">4. Your Rights Under the DPDP Act</h2>
          <p className="text-sm sm:text-base text-stone-700">
            As a data principal, you have the following enforceable rights:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-stone-700">
            <li><strong>Right to Access:</strong> Request a summary of personal data we hold about you.</li>
            <li><strong>Right to Correction &amp; Erasure:</strong> Request updates to inaccurate data or complete deletion of your records.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time without detriment to prior lawful processing.</li>
            <li><strong>Right of Grievance Redressal:</strong> Raise complaints regarding data handling directly with our Grievance Officer or the Data Protection Board of India (DPBI).</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">5. How to Withdraw Consent or Exercise Rights</h2>
          <p className="text-sm sm:text-base text-stone-700">
            To withdraw your consent, request data erasure, or exercise any privacy rights, you can contact us instantly via:
          </p>
          <div className="p-4 bg-[#faf8f5] rounded-2xl border border-stone-200 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C86635]" />
              <span><strong>Phone / WhatsApp:</strong> +91-7976453090 / +91-9461465610</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C86635]" />
              <span><strong>Email:</strong> {BUSINESS_INFO.email}</span>
            </div>
            <div className="text-xs text-stone-500 pt-1">
              Requests are processed within 48 hours by our studio grievance cell.
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
