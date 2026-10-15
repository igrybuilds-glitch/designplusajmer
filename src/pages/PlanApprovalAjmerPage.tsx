import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileCheck2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  FileText,
  Stamp,
  Landmark,
  AlertTriangle,
  ClipboardList,
  ShieldCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface PlanApprovalAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function PlanApprovalAjmerPage({ onOpenConsultation }: PlanApprovalAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/building-plan-approval-ajmer/';

  const documents = [
    {
      document: 'Sanction Drawings (Site Plan, Floor Plans, Elevations, Sections)',
      purpose: 'Show setbacks, FAR, ground coverage and heights comply with ADA byelaws.',
      providedBy: 'Design Plus studio'
    },
    {
      document: 'Ownership Proof (Registry / Patta / Allotment Letter)',
      purpose: 'Establish the applicant\u2019s legal title to the plot.',
      providedBy: 'Plot owner'
    },
    {
      document: 'Structural Stability Certificate',
      purpose: 'Chartered engineer\u2019s certification that the proposed structure is safe.',
      providedBy: 'Er. Sudhir Soni, Design Plus'
    },
    {
      document: 'Soil Test Report (for G+2 and above)',
      purpose: 'Foundation design basis; required for multi-storey sanction in Ajmer.',
      providedBy: 'Testing lab (we coordinate)'
    },
    {
      document: 'Affidavits & Application Forms',
      purpose: 'Statutory declarations and the ADA/Nagar Nigam application formats.',
      providedBy: 'Design Plus prepares; owner signs'
    },
    {
      document: 'NOCs (as applicable)',
      purpose: 'Fire, airport authority or heritage-zone NOCs for applicable plots and heights.',
      providedBy: 'Case-dependent; we advise'
    }
  ];

  const steps = [
    {
      n: '01',
      title: 'Byelaw & Title Check',
      text: 'We verify your plot\u2019s jurisdiction (ADA vs Nagar Nigam), applicable setbacks, FAR and ground coverage, and flag any title or zoning issues before drawings begin.'
    },
    {
      n: '02',
      title: 'Sanction Drawing Preparation',
      text: 'Our studio drafts the full sanction set — site plan, floor plans, elevations, sections — dimensioned exactly to byelaw requirements, with the structural stability certificate from Er. Sudhir Soni.'
    },
    {
      n: '03',
      title: 'Filing & Fee Submission',
      text: 'We compile the dossier with your ownership documents, affidavits and forms, and file it with the ADA or Nagar Nigam along with the applicable scrutiny fees.'
    },
    {
      n: '04',
      title: 'Query Resolution',
      text: 'If the sanctioning officer raises queries or objections, we revise drawings and respond in writing — this is where most self-filed applications stall, and where our experience counts.'
    },
    {
      n: '05',
      title: 'Sanction & Commencement',
      text: 'On approval, you receive the sanctioned drawings and commencement permission. We keep a certified set for your construction stage and completion-certificate filing later.'
    }
  ];

  const coverage = [
    {
      icon: Landmark,
      title: 'ADA Jurisdiction',
      text: 'Vaishali Nagar, Panchsheel Nagar, Chandravardai Nagar, colonies along Foy Sagar Road, Beawar Road and Kishangarh Road — sanction drawings, FAR calculations and stability certificates filed with the Ajmer Development Authority.'
    },
    {
      icon: FileText,
      title: 'Nagar Nigam Jurisdiction',
      text: 'Older city areas under Ajmer Municipal Corporation — permission drawings and documentation prepared to Nagar Nigam formats and submitted with owner authorisation.'
    },
    {
      icon: Stamp,
      title: 'Completion Certificates',
      text: 'After construction, we prepare as-built documentation and apply for completion / occupancy certification — the step that regularises your building for resale, loans and utilities.'
    },
    {
      icon: ShieldCheck,
      title: 'Regularisation of Deviations',
      text: 'For constructions with byelaw deviations, we assess compounding options honestly — what can be regularised, what it costs, and what cannot be fixed — before you spend on filing.'
    }
  ];

  const faqs = [
    {
      question: 'Which authority approves building plans in Ajmer?',
      answer: 'It depends on your plot\u2019s location. Plots in ADA-notified areas — Vaishali Nagar, Panchsheel Nagar, Foy Sagar Road colonies and newer sectors — need Ajmer Development Authority sanction. Plots in the older city fall under Ajmer Nagar Nigam. We verify jurisdiction from your plot documents before preparing the drawing set.'
    },
    {
      question: 'What documents are needed for building plan approval in Ajmer?',
      answer: 'The core dossier is: sanction drawings (site plan, floor plans, elevations, sections), ownership proof (registry/patta/allotment), structural stability certificate from a chartered engineer, affidavits and application forms, and a soil test report for G+2 and above. NOCs apply case-wise. We prepare the technical documents; you provide ownership papers and signatures.'
    },
    {
      question: 'How long does ADA plan approval take in Ajmer?',
      answer: 'A clean residential filing typically takes four to eight weeks from submission to sanction, depending on the authority\u2019s scrutiny queue and whether queries arise. Drawings that violate setbacks or FAR get stuck in objection cycles — which is why our sanction sets are byelaw-checked before filing, not corrected after objections.'
    },
    {
      question: 'What happens if I build without approval in Ajmer?',
      answer: 'Unauthorised construction risks stop-work notices, penalties, and compounding charges at the completion stage. Worse, banks hesitate to finance unsanctioned buildings and resale becomes difficult. Sanction before construction is always cheaper and faster than regularisation after it.'
    },
    {
      question: 'Can you get approval for a plan designed by someone else?',
      answer: 'Yes, after a technical audit. We check the plan against ADA/Nagar Nigam byelaws, correct setbacks, FAR and dimensioning issues, add the structural stability certificate, and file. If the plan cannot comply, we tell you upfront rather than filing a doomed application.'
    },
    {
      question: 'Do you handle approval for commercial buildings in Ajmer?',
      answer: 'Yes. Commercial sanction involves additional layers — parking calculations, fire NOC coordination for applicable occupancies, signage provisions and sometimes traffic NOCs on arterial roads like Foy Sagar Road. Our studio prepares the full commercial dossier and manages the query cycle with the authority.'
    },
    {
      question: 'अजमेर में नक्शा पास करवाने में कितना समय लगता है?',
      answer: 'नक्शा पास (building plan approval) का समय ADA या Nagar Nigam की scrutiny queue पर depend करता है — clean residential filing आमतौर पर 4–8 हफ्तों में sanction हो जाती है। Setback या FAR में गड़बड़ी वाली drawings objection cycles में फँसकर महीनों लगाती हैं। इसलिए हम drawings को byelaw-checked करके file करते हैं, objection के बाद ठीक नहीं करते।'
    },
    {
      question: 'What is the affidavit of architect / non-deviation affidavit for plan approval?',
      answer: 'Rajasthan\u2019s building approval procedure requires statutory affidavits — including an affidavit from the architect and a non-deviation affidavit from the owner/builder — declaring the construction will follow the sanctioned drawings. They are part of the filing dossier we prepare; you sign, we draft them in the authority\u2019s prescribed format.'
    },
    {
      question: 'Is a Vastu-compliant plan required for ADA building plan approval?',
      answer: 'No. ADA and Nagar Nigam scrutiny checks setbacks, ground coverage, FAR, height and parking — Vastu is not on the statutory checklist. A Vastu-aligned plan is fully sanctionable as long as orientations and zoning respect the byelaws, which is how we design them: Vastu within the rules, never against them.'
    },
    {
      question: 'How is \u201cnaksha pass\u201d different from a completion certificate?',
      answer: '\u201cNaksha pass\u201d is the approval to build — sanctioned drawings issued by ADA or Nagar Nigam before construction starts. A completion certificate is issued after construction, confirming the building was built per the sanctioned drawings, and is certified by an architect or chartered engineer. We handle both ends: the sanction filing and the chartered engineer completion certification.'
    }
  ];

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
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
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Beawar' }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Building Plan Approval in Ajmer',
    serviceType: 'Statutory Sanction Filing — ADA & Nagar Nigam Approval Drawings, Stability Certificates, Completion Documentation',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: 'Building plan approval in Ajmer: ADA and Nagar Nigam sanction drawings, setback and FAR compliance, chartered structural stability certificates and completion documentation.'
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
      { '@type': 'ListItem', position: 2, name: 'Building Plan Approval in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="building-plan-approval-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Building Plan Approval in Ajmer | ADA Sanction Filing | Design Plus"
        description="Building plan approval in Ajmer — ADA & Nagar Nigam sanction drawings, setback/FAR compliance, chartered stability certificates, query resolution & completion certificates."
        keywords="building plan approval ajmer, naksha pass ajmer, ada approval ajmer, house plan sanction ajmer, nagar nigam building permission ajmer, sanction drawing ajmer, completion certificate ajmer"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
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
          <span className="text-amber-900 font-medium">Building Plan Approval in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Statutory Sanction · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Building Plan Approval in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, prepare and file complete building plan approval dossiers for the Ajmer Development Authority and Ajmer Nagar Nigam — sanction drawings, setback and FAR calculations, structural stability certificates and all statutory forms. Our studio\u2019s sanction sets are drawn by the same team that designs your home, so approvals move without the drawing errors that stall Ajmer filings.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Approval Filing Quote</span>
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Sanctioned residential construction underway in Ajmer after ADA building plan approval"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Sanctioned Construction · Ajmer, Rajasthan
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Approval Coverage
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Sanction Filing Across Ajmer\u2019s Jurisdictions
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Ajmer\u2019s building permissions split between two authorities. We handle both — plus what comes after sanction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coverage.map((c) => (
            <div key={c.title} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-2">
              <c.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-xl text-stone-950 font-medium">{c.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PAA answers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Approval Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Which authority approves building plans in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                It depends on your plot\u2019s location. Plots in ADA-notified areas — Vaishali Nagar, Panchsheel Nagar, colonies along Foy Sagar Road and newer sectors — require Ajmer Development Authority sanction. Plots in the older city need Ajmer Nagar Nigam permission. A plot\u2019s jurisdiction is confirmed from its allotment or registry documents, which we verify before drawing a single line.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What documents are needed for building plan approval in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                The core dossier includes sanction drawings (site plan, floor plans, elevations, sections), ownership proof (registry, patta or allotment letter), a structural stability certificate from a chartered engineer, statutory affidavits and application forms, and a soil test report for G+2 and above. Fire and other NOCs apply case-wise. We prepare the technical documents; you provide ownership papers and signatures.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How long does ADA plan approval take in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A clean residential filing typically takes four to eight weeks from submission to sanction, depending on the authority\u2019s scrutiny queue and whether queries arise. Drawings with setback or FAR violations get trapped in objection cycles that stretch for months — which is why our sanction sets are byelaw-checked before filing rather than corrected after objections.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What happens if I build without approval in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Unauthorised construction invites stop-work notices, penalties and compounding charges when you seek completion certification. Banks are reluctant to finance unsanctioned buildings, and resale or rental agreements get complicated. Getting sanctioned before excavation is always faster and cheaper than regularising deviations after the structure stands.
              </p>
            </div>

            {/* Document checklist table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Filing Checklist
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Building Plan Approval Document Checklist — Ajmer
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Document</th>
                      <th className="text-left p-4 font-semibold">Purpose</th>
                      <th className="text-left p-4 font-semibold">Provided By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((row) => (
                      <tr key={row.document} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900">{row.document}</td>
                        <td className="p-4 text-stone-700">{row.purpose}</td>
                        <td className="p-4 text-stone-700 whitespace-nowrap">{row.providedBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Process steps */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                The Filing Sequence
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Five Steps From Plot Papers to Sanction
              </h2>
              <ol className="space-y-3">
                {steps.map((s) => (
                  <li key={s.title} className="flex gap-4 p-5 bg-white border border-stone-200">
                    <span className="font-editorial text-2xl text-amber-800 font-medium shrink-0 w-8">{s.n}</span>
                    <div>
                      <h3 className="font-editorial text-base text-stone-950 font-medium">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Warning note */}
            <div className="p-6 sm:p-8 bg-red-50/50 border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-red-900 font-mono text-xs uppercase tracking-wider font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>Honest Warning</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Agents who promise \u201Cguaranteed sanction in 7 days\u201D usually mean filing incomplete drawings that the ADA rejects — then charge you again for re-filing. Sanction timelines belong to the authority, not to any agent. What a competent studio guarantees is a byelaw-clean first filing, so the authority\u2019s clock starts on drawings that deserve approval.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <ClipboardList className="w-4 h-4" />
                <span>Approval Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Building Plan Approval FAQs — Ajmer
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
                  Statutory Sanction
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Approval Assessment
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your plot documents — we will confirm the correct authority, applicable byelaws, and give you a written filing quotation.
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
                  <Link to="/house-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>House Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/3d-elevation-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>3D Elevation Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/interior-designer-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Interior Designer in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/vastu-home-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Vastu Home Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/structural-consultancy-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Consultancy in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/property-valuation" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Property Valuation in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/chartered-engineer-certificates" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Chartered Engineer Certificates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/architect-in-jaipur" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Architect in Jaipur</span>
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
              Sanctioned Before the First Brick
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Get Your Ajmer Building Plan Approved Without the Runaround
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Send your plot papers — we will map the fastest legitimate route to sanction.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Approval Filing</span>
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

export default PlanApprovalAjmerPage;
