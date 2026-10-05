import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  FileCheck2, 
  HardHat, 
  Scale, 
  Clock, 
  Building2, 
  PhoneCall, 
  Compass
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface ProjectManagementPageProps {
  onOpenConsultation?: () => void;
}

export function ProjectManagementPage({ onOpenConsultation }: ProjectManagementPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pmcCapabilities = [
    {
      icon: HardHat,
      title: 'Chartered Site Supervision',
      description: 'Daily technical oversight by licensed civil engineers. We verify formwork stability, reinforcement diameter, spacing, concrete cover blocks, and rebar bending prior to every concrete pour under IS 456 standards.'
    },
    {
      icon: Scale,
      title: 'Contractor & Vendor Management',
      description: 'Comprehensive Bill of Quantities (BOQ) preparation, competitive contractor tendering, contract formulation, and day-to-day coordination between civil, electrical, plumbing, and HVAC sub-teams.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Audits & Material Testing',
      description: 'Rigorous third-party laboratory verification: concrete cube compressive strength tests, Fe500D steel tensile elongation certification, sand silt-content audits, and water pH compatibility testing.'
    },
    {
      icon: FileCheck2,
      title: 'Billing & Measurement Book (MB) Audits',
      description: 'Forensic verification of contractor Running Account (RA) bills against actual on-site physical dimensions before recommending payment. We eliminate ghost billing, inflated quantities, and hidden charges.'
    },
    {
      icon: Clock,
      title: 'Timeline & Critical-Path Control',
      description: 'Micro-level project scheduling utilizing critical-path methodology (CPM) and milestone tracking. Bottlenecks and supply chain delays are identified and resolved weeks before they impact completion dates.'
    },
    {
      icon: Building2,
      title: 'Municipal & Byelaw Alignment',
      description: 'Ensuring absolute fidelity with Ajmer Development Authority (ADA) sanction drawings, statutory building setbacks, ground coverage regulations, and safety clearances throughout active execution.'
    }
  ];

  const deliveryPhases = [
    {
      phase: '01',
      title: 'Pre-Construction Tendering & BOQ',
      description: 'Itemized rate analysis, detailed tender documents, vendor vetting, and definitive contractor agreements with fixed timelines and milestone-linked payment schedules.'
    },
    {
      phase: '02',
      title: 'Substructure & Foundation Verification',
      description: 'Total station benchmark transfer, excavation depth audit, safe soil bearing capacity (SBC) confirmation, and foundation rebar inspection before concrete blinding.'
    },
    {
      phase: '03',
      title: 'Superstructure RCC Frame Governance',
      description: 'Column alignment, beam-slab reinforcement checks, concrete mix design compliance (M25/M30), slump testing, and automated curing period adherence.'
    },
    {
      phase: '04',
      title: 'MEP Reticulation & Concealed Services',
      description: 'Pressure testing of plumbing conduits, electrical conduit routing, HVAC duct clearance, and structural waterproofing barriers for basements and terraces.'
    },
    {
      phase: '05',
      title: 'Finishing, Stone Joinery & Snag Audits',
      description: 'Precision marble and sandstone flooring alignment, plaster plumblines, door-window frame anchoring, paint coats, and exhaustive snag-list rectification.'
    },
    {
      phase: '06',
      title: 'Final Commissioning & As-Built Handover',
      description: 'Testing of electrical distribution boards, water pressure balancing, compilation of as-built architectural drawings, and chartered structural stability certification.'
    }
  ];

  const faqs = [
    {
      question: 'What is the role of a Project Management Consultant (PMC) in construction in Ajmer?',
      answer: 'A Project Management Consultant (PMC) acts as the client’s technical fiduciary and on-ground surrogate. Rather than leaving contractor work unverified, our PMC team conducts daily technical inspections, verifies rebar placement before concrete pours, audits contractor bills against physical measurements, enforces safety standards, and ensures projects finish on schedule without budgetary inflation.'
    },
    {
      question: 'How does turnkey project execution differ from standard architectural design services?',
      answer: 'Standard architectural services provide design blueprints, 3D elevations, and structural calculations for independent contractors to execute. Turnkey project execution (and PMC) takes end-to-end responsibility: our studio directs contractor procurement, material quality testing, site engineering supervision, milestone progress tracking, and final defect-free handover under single-source accountability.'
    },
    {
      question: 'How does Design Plus prevent contractor cost overruns and material wastage on site?',
      answer: 'Cost overruns typically occur due to ambiguous contractor scopes, unverified measurement books (MBs), and unauthorized extra items. Design Plus prevents this through rigorous pre-construction BOQ formulation, contractually capped variation clauses, daily cement-steel reconciliation matrices, and forensic measurement audits before releasing any contractor milestone payments.'
    },
    {
      question: 'Can Design Plus manage independent contractors already hired by the property owner?',
      answer: 'Yes. In our pure PMC advisory capacity, we represent the owner’s commercial and engineering interests. We supervise the client’s chosen civil, plumbing, electrical, and finishing contractors, enforcing contractual milestones, quality criteria, and billing transparency without contractor conflict.'
    },
    {
      question: 'What quality tests and milestone certifications are conducted during the PMC lifecycle?',
      answer: 'We mandate field and laboratory testing including 7-day and 28-day concrete cube compressive strength tests, steel tensile yield tests under IS 1786, aggregate sieve analysis, brick water absorption tests, and hydrostatic plumbing pressure tests. Upon structural completion, Er. Sudhir Soni issues formal Chartered Structural Stability Certificates.'
    },
    {
      question: 'What is the typical fee structure for Project Management Consultancy in Rajasthan?',
      answer: 'PMC fees generally follow either a percentage-of-construction-cost model (typically 3%–6% depending on complexity and scale) or a monthly fixed milestone retainer. Given that our billing audits regularly save clients 8%–15% in eliminated contractor inflations and material wastage, professional PMC typically pays for itself.'
    }
  ];

  // Schema.org Structured Data
  const pmcServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.designplusajmer.co.in/project-management#service',
    name: 'Project Management Consultancy & Turnkey Project Execution',
    serviceType: 'Project Management Consultancy (PMC)',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      url: 'https://www.designplusajmer.co.in',
      telephone: '+91-7976453090',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rajeev Marg, Panchsheel Nagar',
        addressLocality: 'Ajmer',
        addressRegion: 'Rajasthan',
        postalCode: '305004',
        addressCountry: 'IN'
      }
    },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' }
    ],
    description: 'Chartered project management consultancy in Ajmer. Expert turnkey project execution, contractor oversight, quality audits, and zero cost-overrun governance.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Site-specific PMC and turnkey architectural execution agreements'
    }
  };

  const pmcFAQSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <main id="project-management-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="PMC & Turnkey Project Execution Ajmer | Design Plus"
        description="Chartered project management consultancy in Ajmer. Expert turnkey project execution, contractor oversight, quality audits, and zero cost-overrun governance."
        keywords="project management consultancy ajmer, turnkey project execution, construction pmc ajmer, site supervision rajasthan, chartered engineer building inspection, turnkey house construction ajmer"
        canonical="https://www.designplusajmer.co.in/project-management"
        schema={[pmcServiceSchema, pmcFAQSchema]}
      />

      {/* 01. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Project Management (PMC)</span>
        </nav>
      </div>

      {/* 02. EDITORIAL HERO (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Turnkey Architectural &amp; Civil Governance · Ajmer, Rajasthan</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Project Management Consultancy in Ajmer &amp; Turnkey Project Execution
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Bridging the high-risk void between architectural drawings and physical site construction. Led by Chartered Structural Engineer <strong className="text-stone-900 font-semibold">{LEADERSHIP.name}</strong>, our PMC practice enforces structural precision, contractor transparency, daily rebar verification, and zero cost overruns across residential estates, commercial hubs, and private villas.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Start A Project / PMC Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Direct Call: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03. TRUST SIGNALS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-stone-100 border border-stone-200">
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">20+ Yrs</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Chartered Leadership</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Er. Sudhir Soni, FIV / CE</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-emerald-800 font-bold">0%</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Structural Failures</div>
            <p className="text-[11px] text-stone-500 mt-0.5">IS 456 &amp; IS 1893 certified</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">100%</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Billing Audited</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Zero ghost measurement</p>
          </div>
        </div>
      </section>

      {/* 04. HERO VISUAL & CONTEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="relative aspect-16/9 md:aspect-21/9 bg-stone-200 overflow-hidden border border-stone-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85"
            alt="Chartered structural engineering site supervision and turnkey project management consultancy in Ajmer"
            width={1800}
            height={770}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-stone-950/90 text-white p-4 max-w-lg backdrop-blur-xs border border-white/10 text-xs space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-amber-400">On-Site Engineering Authority</div>
            <p className="text-stone-300">
              Direct verification of structural moment frames, rebar tie spacing, and formwork plumbing prior to every slab concrete pour.
            </p>
          </div>
        </div>
      </section>

      {/* 05. WHAT PMC INCLUDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Excellence In Execution
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            What Our Project Management Consultancy Includes
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            We act exclusively as the property owner’s chartered engineering fiduciary. We do not take contractor kickbacks; we protect your structural investment and capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pmcCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="p-6 sm:p-8 bg-white border border-stone-200 transition-shadow hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xs bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-stone-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-editorial text-xl text-stone-950 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 06. WHY DESIGN PLUS FOR PMC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-8 sm:p-14 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
                The Chartered Advantage
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Why Property Owners Engage Design Plus for PMC
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
                Most construction supervisors are non-technical managers who cannot interpret finite element structural drawings or calculate deflection stresses. Design Plus is directed by Chartered Structural Engineers who personally understand concrete shear, seismic joint detailing, and Rajasthan’s acute geotechnical variables.
              </p>

              <div className="pt-4 space-y-3 text-xs sm:text-sm text-stone-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Conflict of Interest:</strong> We represent the property owner exclusively, auditing contractors with complete independence.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Elimination of Bill Inflation:</strong> We measure actual site physical work before contractor payment releases.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Single-Source Accountability:</strong> Architecture, structural engineering, and site execution fully synchronized under one firm.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-stone-900/80 p-6 sm:p-8 border border-stone-800 space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block mb-1">
                  Chartered Leadership Validation
                </span>
                <div className="font-editorial text-2xl text-white font-medium">
                  {LEADERSHIP.name}
                </div>
                <div className="text-xs font-mono text-amber-400 mt-0.5">
                  {LEADERSHIP.qualification}
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-stone-300 italic leading-relaxed">
                “A building fails on site, not on the drafting board. An architectural drawing is only as enduring as the rebar placement, concrete curing, and execution integrity on the day of casting.”
              </blockquote>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <span>Consult Er. Sudhir Soni Directly</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 07. 6-PHASE DELIVERY PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Structured Execution Architecture
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            6-Phase Turnkey Delivery &amp; PMC Governance
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            From initial tender documentation to statutory completion certificates, every construction milestone adheres to our verified 6-stage engineering audit framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryPhases.map((phase) => (
            <div 
              key={phase.phase}
              className="p-6 bg-white border border-stone-200 relative group hover:border-stone-900 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-2xl font-editorial font-bold text-amber-800">
                  Phase {phase.phase}
                </div>
                <h3 className="font-editorial text-lg text-stone-950 font-semibold">
                  {phase.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08. SEO-OPTIMIZED FAQ ACCORDION (Long-Tail Search Intent) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Turnkey Project Management Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Key insights on hiring a Project Management Consultant for residential and commercial construction in Ajmer and Rajasthan.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={faq.question}
                className="bg-white border border-stone-200 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 min-h-[44px] hover:bg-stone-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-base sm:text-lg text-stone-950 font-medium leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-800' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 09. FINAL STRONG CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Protect Your Construction Investment
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Ready to Commission Chartered PMC for Your Site?
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Whether you are planning a luxury villa in Panchsheel Nagar, a commercial plaza on Ana Sagar Circular Road, or multi-story development in Rajasthan, engage our engineering team to review contractor tenders and enforce on-site quality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Book PMC Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Contact Studio Office</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Related guides &amp; services — internal SEO links */}
        <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/architect-fees-ajmer/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Architect fees in Ajmer (2026 guide)
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  All architecture & engineering services
                </Link>
              </li>
              <li>
                <Link to="/projects/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Project archive
                </Link>
              </li>
          </ul>
        </nav>
        </div>
      </section>
    </main>
  );
}
