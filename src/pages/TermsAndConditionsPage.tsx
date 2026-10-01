import { Link } from 'react-router-dom';
import { FileText, IndianRupee, Palette, Clock, XCircle, Scale, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';

export function TermsAndConditionsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions | Design Plus Ajmer',
    description: 'Terms and conditions governing architectural, structural engineering and interior design services by Design Plus Studio, Ajmer, Rajasthan.',
    url: 'https://designplusajmer.co.in/terms-and-conditions'
  };

  return (
    <main id="terms-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-28 pb-20">
      <SEOHead
        title="Terms & Conditions | Design Plus Ajmer"
        description="Terms and conditions for architectural design, structural engineering and interior design services by Design Plus Studio, Ajmer, Rajasthan."
        keywords="design plus terms, architect terms conditions ajmer, design service agreement rajasthan"
        canonical="https://designplusajmer.co.in/terms-and-conditions"
        schema={schema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <EditorialHero
        subtitle="Service Agreement"
        title="Terms & Conditions"
        description="The terms governing our architectural, structural engineering, interior design and project management services. By engaging Design Plus, you agree to the terms below."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-stone-800 font-sans leading-relaxed">

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold">
            <FileText className="w-5 h-5 text-[#C86635]" />
            <span>In short</span>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            Design Plus ("we", "our", "us") provides professional architecture, structural engineering, interior design and project management services from Ajmer, Rajasthan. Every engagement is confirmed in writing with scope, fees and timelines before work begins. The summary below is a plain-language overview — the numbered sections carry the full terms.
          </p>
          <div className="pt-2 border-t border-stone-200 text-xs font-mono text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Last updated: September 2026</span>
            <a href="tel:+917976453090" className="text-[#C86635] font-bold hover:underline">+91-7976453090</a>
          </div>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">1. Scope of Services</h2>
          <p className="text-sm sm:text-base text-stone-700">
            Our services include architectural design, 2D floor planning, 3D elevation design, structural engineering and RCC detailing, interior design, Vastu-compliant planning, farmhouse design, turnkey construction, modular kitchens, home renovation, hotel and resort architecture, project management consultancy, and municipal (ADA) approval drawings. The exact scope, deliverables and exclusions for your project are defined in the written proposal or work order you approve before we begin. Anything not listed in that proposal is out of scope unless agreed in writing.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-[#C86635]">
            <IndianRupee className="w-5 h-5" />
            <h2 className="font-editorial text-2xl text-stone-950 font-medium">2. Fees &amp; Payment</h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            Fees are quoted per square foot or as a fixed project fee, as stated in your proposal — our published fee ranges for Ajmer are indicative and final pricing depends on project scope, complexity and site conditions. A booking advance is required to start work; stage-wise payments follow the schedule in your proposal. Drawings and deliverables for a stage are released on receipt of that stage's payment. All prices are in Indian Rupees (INR) and exclusive of government taxes and statutory approval fees, which are borne by the client.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-[#C86635]">
            <Palette className="w-5 h-5" />
            <h2 className="font-editorial text-2xl text-stone-950 font-medium">3. Intellectual Property</h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            All designs, drawings, 3D views, calculations and documents we produce remain the intellectual property of Design Plus until full payment for the project is received. On full payment, you receive a licence to use the deliverables for the single project and site they were prepared for. Our work may not be resold, reused on another site, or passed to another professional for execution without our written consent. We may photograph completed projects and use them in our portfolio unless you request otherwise in writing.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">4. Client Responsibilities</h2>
          <p className="text-sm sm:text-base text-stone-700">
            You are responsible for providing accurate site documents (ownership papers, site dimensions, soil or survey reports where required), timely decisions and feedback at each design stage, and for obtaining statutory approvals where our scope excludes them. Delays in providing information or approvals extend project timelines accordingly. Designs are prepared for the site and requirements you disclose — undisclosed site conditions or requirement changes after approval may need a revised proposal.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-[#C86635]">
            <Clock className="w-5 h-5" />
            <h2 className="font-editorial text-2xl text-stone-950 font-medium">5. Timelines &amp; Revisions</h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            Timelines stated in your proposal are estimates based on normal working conditions and prompt client feedback. Each proposal includes a defined number of revision rounds per stage; additional revisions or scope changes are billed as extra work. Approval of a design stage in writing is final — changes requested after stage approval are treated as new work.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-[#C86635]">
            <XCircle className="w-5 h-5" />
            <h2 className="font-editorial text-2xl text-stone-950 font-medium">6. Cancellation &amp; Refunds</h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            Either party may terminate the engagement with written notice. On termination you pay for all work completed up to the termination date, plus any committed third-party costs. The booking advance covers initial design effort and is non-refundable once concept work has begun. Completed and delivered stages are non-refundable. Refunds, where applicable, are processed to the original payment method within 15 working days.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-[#C86635]">
            <Scale className="w-5 h-5" />
            <h2 className="font-editorial text-2xl text-stone-950 font-medium">7. Liability &amp; Governing Law</h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700">
            Our liability for any claim arising from our services is limited to the total fees paid for the project stage giving rise to the claim. We are not liable for delays or costs caused by client-supplied information, statutory authority decisions, contractor execution, or force majeure events. Structural designs are prepared per applicable Indian Standards (IS 456, IS 1893 and related codes); execution must follow our drawings and specifications — deviations during construction without our written approval void our certification for the affected work. These terms are governed by the laws of India, with jurisdiction at Ajmer, Rajasthan.
          </p>
        </div>

        <div className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-stone-300 shadow-xs">
          <h2 className="font-editorial text-2xl text-stone-950 font-medium">8. Contact</h2>
          <p className="text-sm sm:text-base text-stone-700">
            Questions about these terms: Design Plus, Rajeev Marg, Panchsheel Nagar, Ajmer, Rajasthan 305004 — <a href="tel:+917976453090" className="text-[#C86635] font-semibold hover:underline">+91-7976453090</a>, <a href="tel:+919461465610" className="text-[#C86635] font-semibold hover:underline">+91-9461465610</a>, <a href="mailto:designplusajmer@gmail.com" className="text-[#C86635] font-semibold hover:underline">designplusajmer@gmail.com</a>.
          </p>
          <p className="text-xs text-stone-500">
            Related: <Link to="/privacy-policy" className="text-[#C86635] hover:underline">Privacy Policy &amp; DPDP Act Compliance</Link>
          </p>
        </div>

      </section>
    </main>
  );
}
