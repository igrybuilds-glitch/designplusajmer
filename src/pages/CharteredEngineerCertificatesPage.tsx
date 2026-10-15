import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stamp,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  FileCheck,
  Building2,
  Landmark,
  PenTool,
  ClipboardCheck,
  Ruler
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface CharteredEngineerCertificatesPageProps {
  onOpenConsultation?: () => void;
}

export function CharteredEngineerCertificatesPage({ onOpenConsultation }: CharteredEngineerCertificatesPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/chartered-engineer-certificates/';

  const certificates = [
    {
      icon: ShieldCheck,
      title: 'Structural Stability Certificates',
      text: 'Certified assessment of a building’s structural soundness for ADA, Nagar Nigam, banks and insurance â signed and stamped by our chartered engineer after physical inspection.'
    },
    {
      icon: FileCheck,
      title: 'Building Completion Certificates',
      text: 'Chartered engineer completion certification confirming the structure was built per the sanctioned drawings and approved structural design — required before occupancy in many cases.'
    },
    {
      icon: PenTool,
      title: 'Chartered Engineer Stamp on Structural Drawings',
      text: 'Stamping and certification of RCC structural drawings, foundation designs and bar bending schedules for plan approval filings and bank technical appraisal.'
    },
    {
      icon: Landmark,
      title: 'Bank Loan Technical Certificates',
      text: 'Chartered engineer reports for home loans and construction finance — stage-wise certification, cost estimates and progress verification in the formats lenders require.'
    },
    {
      icon: Building2,
      title: 'Structural Safety Audits',
      text: 'Condition surveys of ageing or distressed buildings in Ajmer and Jaipur, with written findings on cracks, settlement, load capacity and the remedial measures needed.'
    },
    {
      icon: Ruler,
      title: 'Supervision & Vetting Certificates',
      text: 'Third-party vetting of structural designs and stage supervision certification for institutional, commercial and infrastructure projects across Rajasthan.'
    }
  ];

  const certificateContents = [
    {
      item: 'Structural Stability Certificate',
      covers: 'Issued after site inspection and record review; states the building is structurally stable for its intended use. Required by ADA/Nagar Nigam for G+2 and above, and by banks before disbursing construction finance.',
      stage: 'Inspection'
    },
    {
      item: 'Building Completion Certificate',
      covers: 'Confirms construction matches the sanctioned drawings and approved structural design. Produced at the end of construction, supported by stage photographs and as-built checks.',
      stage: 'Completion'
    },
    {
      item: 'Chartered Engineer Stamp',
      covers: 'Stamp and signature on structural drawings â RCC framing, foundations, retaining structures â certifying they were prepared under a chartered engineer’s direction and conform to IS codes.',
      stage: 'Design'
    },
    {
      item: 'Bank Technical Appraisal',
      covers: 'Stage-wise certificates for home loans: foundation, plinth, slab and finishing stages verified on site, with cost-incurred estimates the bank releases funds against.',
      stage: 'Finance'
    },
    {
      item: 'Structural Audit Report',
      covers: 'Written assessment of cracks, corrosion, settlement and load-path concerns in existing buildings, with prioritised repair recommendations and residual-life opinion.',
      stage: 'Audit'
    }
  ];

  const faqs = [
    {
      question: 'What is a chartered engineer certificate and when is it required?',
      answer: 'A chartered engineer certificate is a formal document signed and stamped by a Chartered Engineer (India) — a professionally recognised engineer — certifying a technical fact. You need one for structural stability certification in building plan approvals, building completion certification, bank technical appraisals for construction loans, and structural audits. In Rajasthan, ADA and Nagar Nigam filings for G+2 and above routinely require one.'
    },
    {
      question: 'Is an architect’s certificate valid as a building completion certificate?',
      answer: 'It depends on the authority and the purpose. GST law accepts completion certificates from a registered architect, an IE(I) chartered engineer or a licensed surveyor, and many municipal filings accept either. The safest route is a certificate from a chartered structural engineer, which no authority questions. We issue both architect’s and chartered engineer’s completion certification â tell us who will receive it and we choose the right format.'
    },
    {
      question: 'Is an income tax valuer certificate compulsory for new house construction?',
      answer: 'There is no blanket rule making it compulsory for every new house. Banks sometimes require a chartered engineer or valuer certificate at stages of a construction loan, and income-tax proceedings may ask for one to establish cost of construction. If your CA or bank has asked for it, we prepare it — signed by our chartered engineer and Fellow of the Institution of Valuers.'
    },
    {
      question: 'What is a structural stability certificate and who issues it?',
      answer: 'A structural stability certificate states, after inspection, that a building is structurally sound for its intended use and occupancy. It is issued by a chartered or licensed structural engineer â in our practice by Er. Sudhir Soni, Chartered Engineer (India), M.E. (Structural), M.I.E. Rajasthan’s building approval procedures list a “Certificate for structural stability by Structural Engineer” among the standard documents, and banks ask for one before disbursing construction finance.'
    },
    {
      question: 'Can a civil engineer stamp structural drawings in India?',
      answer: 'Only engineers with the right professional standing can stamp structural drawings — in practice, a Chartered Engineer (India) or an engineer registered with the relevant authority. A general civil engineering degree alone is not stamping authority. Our structural drawings are prepared under Er. Sudhir Soni, Chartered Engineer (India), and carry his stamp and certification.'
    },
    {
      question: 'Where can I get a chartered engineer stamp in Ajmer or Jaipur?',
      answer: 'At our Ajmer studio on Rajeev Marg, Panchsheel Nagar â bring your drawings, structural design notes or the authority’s requirement letter, and we verify, certify and stamp after inspection or design review. Jaipur clients are served from our Vaishali Nagar branch (B-225, Opposite Karnataka Bank). Certification is never issued sight-unseen; the stamp follows verification.'
    },
    {
      question: 'How long does it take to get a structural stability certificate in Ajmer?',
      answer: 'A straightforward residential stability certificate typically takes three to five working days: site inspection, document review and report preparation. Complex or distressed buildings take longer because the assessment — crack mapping, load-path review, sometimes core or NDT testing — is deeper. We tell you the timeline after the first inspection.'
    },
    {
      question: 'What documents do I need for a chartered engineer certificate?',
      answer: 'Bring whatever exists: sanctioned building drawings, the structural design drawings if available, ownership proof (registry or patta), and the authority or bank letter stating what is required. Where drawings are missing, we measure and document the building ourselves. The certificate format is then matched to whoever asked for it — ADA, the bank or the tax authority.'
    }
  ];

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${canonicalUrl}#business`,
    name: 'Design Plus',
    url: 'https://www.designplusajmer.co.in',
    telephone: '+91-7976453090',
    email: 'designplusajmer@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rajeev Marg, Panchsheel Nagar',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305004',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Beawar' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Chartered Engineer Certificates in Ajmer — Stability & Completion Certification',
    serviceType: 'Chartered Engineering Certification — Structural Stability Certificates, Completion Certificates, Drawing Stamps, Bank Technical Appraisal',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Jaipur' }
    ],
    description: 'Chartered engineer certificates in Ajmer: structural stability certificates, building completion certificates and stamped structural drawings by Er. Sudhir Soni, Chartered Engineer (India), M.I.E.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.designplusajmer.co.in/' },
      { '@type': 'ListItem', position: 2, name: 'Chartered Engineer Certificates', item: canonicalUrl }
    ]
  };

  return (
    <main id="chartered-engineer-certificates-page" className="pt-28 pb-20">
      <SEOHead
        title="Chartered Engineer Certificates in Ajmer | Stability & Completion Certificates | Design Plus"
        description="Chartered engineer in Ajmer — structural stability certificates, building completion certificates, stamped structural drawings & bank technical appraisals by Er. Sudhir Soni, Chartered Engineer (India)."
        keywords="chartered engineer ajmer, chartered engineer certificate ajmer, chartered engineer stamp ajmer, structural stability certificate ajmer, building completion certificate architect ajmer, chartered engineer in jaipur"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
        canonical={canonicalUrl}
        schema={[professionalServiceSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/services" className="hover:text-stone-950 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Chartered Engineer Certificates</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Stamp className="w-3.5 h-3.5" />
            <span>Chartered Engineering · Ajmer & Jaipur, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Chartered Engineer Certificates in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Structural stability certificates, building completion certificates, stamped structural drawings and bank technical appraisals — issued by Er. Sudhir Soni, Chartered Engineer (India), M.E. (Structural Engineering), M.I.E., with three decades of structural practice across Rajasthan. The stamp follows verification, never before it.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Certificate Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-500 text-stone-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>{BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
            alt="Chartered engineer reviewing stamped structural drawings for certification in Ajmer"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Chartered Engineering Certification · Ajmer & Jaipur, Rajasthan
          </div>
        </div>
      </section>

      {/* Certificate types grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            What We Certify
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Chartered Engineer Certificates We Issue in Ajmer
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Six certification lines, one rule: no certificate is issued sight-unseen. Inspection or design review comes first; the stamp and signature follow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((c) => (
            <div key={c.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <c.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{c.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credential & proof block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] uppercase tracking-wider text-[#C86635] font-semibold">
              Why Our Stamp Is Accepted
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal leading-tight">
              Three Decades of Structural Practice Behind Every Signature
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Er. Sudhir Soni — Chartered Engineer (India), M.E. in Structural Engineering, Member of the Institution of Engineers (M.I.E.) and Fellow of the Institution of Valuers (FIV) — has designed, audited and certified structures across Rajasthan since 2006. Authorities and banks accept his certification because the practice behind it is a working structural consultancy, not a rubber stamp: RCC design per IS codes, seismic detailing, foundation engineering and site-verified inspections.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              If you need a chartered engineer in Jaipur, the same certification is issued through our Vaishali Nagar branch at B-225, Opposite Karnataka Bank, Jaipur 302021.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              { k: 'Authority', v: 'Er. Sudhir Soni — Chartered Engineer (India), M.E. Structure, M.I.E., FIV' },
              { k: 'Codes', v: 'IS 456, IS 1893 and applicable Bureau of Indian Standards structural codes' },
              { k: 'Formats', v: 'ADA/Nagar Nigam sanction formats, bank technical-appraisal formats' },
              { k: 'Turnaround', v: 'Typically 3–5 working days after inspection for standard certificates' },
              { k: 'Coverage', v: 'Ajmer, Pushkar, Kishangarh, Beawar · Jaipur via Vaishali Nagar branch' }
            ].map((row) => (
              <div key={row.k} className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold w-24 shrink-0 pt-0.5">{row.k}</span>
                <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAA answers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Certification Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is a chartered engineer certificate?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A chartered engineer certificate is a formal technical document signed and stamped by a Chartered Engineer (India), certifying a fact about a structure — its stability, its completion per sanctioned drawings, or the soundness of its structural design. Authorities, banks and tax offices treat it as expert evidence. In Ajmer, you will most often need one for ADA or Nagar Nigam plan approval of G+2 and above, for building completion, and for construction-loan stage appraisals.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is a structural stability certificate in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A structural stability certificate states, after physical inspection and record review, that a building is structurally sound for its intended use and occupancy. Rajasthan’s building-approval procedures list a “Certificate for structural stability by Structural Engineer” among the standard documents, and banks require one before disbursing construction finance. It is issued by a chartered or licensed structural engineer â here, by Er. Sudhir Soni, Chartered Engineer (India).
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Is an architect’s certificate valid as a completion certificate?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Often yes â GST law accepts completion certificates from a registered architect, an IE(I) chartered engineer or a licensed surveyor, and many municipal filings accept either an architect’s or an engineer’s certificate. But the authority or bank receiving your certificate decides. We issue both formats; tell us who asked for it and we prepare the one they will accept without a second visit.
              </p>
            </div>

            {/* Certificate types table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Certificate Formats
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Chartered Engineer Certificate Types & When You Need Them
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Certificate</th>
                      <th className="text-left p-4 font-semibold">When It Is Required</th>
                      <th className="text-left p-4 font-semibold">Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificateContents.map((row) => (
                      <tr key={row.item} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900">{row.item}</td>
                        <td className="p-4 text-stone-700">{row.covers}</td>
                        <td className="p-4 text-stone-700 whitespace-nowrap">{row.stage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <ClipboardCheck className="w-4 h-4" />
                <span>Certification Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Chartered Engineer FAQs — Ajmer & Jaipur
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={faq.question} className="bg-white border border-stone-200">
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
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="p-8 bg-white border border-stone-300 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                  Chartered Certification
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Certification Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Send the authority or bank letter stating what you need — receive an honest read on the right certificate format, fee and timeline.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center border border-stone-200 min-h-[44px]"
                >
                  General Inquiry
                </Link>
              </div>
              <div className="pt-4 border-t border-stone-200">
                <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-3">
                  Related Services
                </div>
                <div className="space-y-2">
                  <Link to="/property-valuation" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Property Valuation in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/building-plan-approval-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Building Plan Approval in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/structural-consultancy-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Consultancy in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/architect-in-jaipur" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Architect in Jaipur</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/house-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>House Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Inspected First. Stamped After.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Get the Certificate Your Authority Will Accept
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Bring the requirement letter — we will match the right certificate to it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Certification</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Contact Studio</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CharteredEngineerCertificatesPage;
