import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Home,
  Building2,
  Compass,
  Layers,
  ShieldCheck,
  PenTool,
  ClipboardCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface ArchitectInJaipurPageProps {
  onOpenConsultation?: () => void;
}

export function ArchitectInJaipurPage({ onOpenConsultation }: ArchitectInJaipurPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/architect-in-jaipur/';

  const services = [
    {
      icon: Home,
      title: 'Residential Architecture',
      text: 'Custom houses, villas and duplex homes for Jaipur plots â from compact urban plots to farmhouses on the Ajmer Road corridor â planned around your family’s routine, not a template.'
    },
    {
      icon: PenTool,
      title: 'House Plans & 3D Elevations',
      text: 'Architect-drawn 2D floor plans, photorealistic 3D front elevations, working drawings and chartered structural design — the full drawing set your contractor builds from.'
    },
    {
      icon: ShieldCheck,
      title: 'JDA Building Plan Approval',
      text: 'Sanction drawings and liaison for Jaipur Development Authority approvals, prepared against Rajasthan’s byelaws so filings pass scrutiny without objection cycles.'
    },
    {
      icon: Compass,
      title: 'Vastu-Aligned Home Design',
      text: 'Entrance orientation, room zoning and kitchen/bedroom placement integrated at concept stage, reconciled with JDA setback and FAR rules so plans stay both Shastra-aligned and sanctionable.'
    },
    {
      icon: Building2,
      title: 'Commercial & Institutional',
      text: 'Offices, clinics, showrooms and institutional buildings — architecture and structural engineering under one roof, with the same discipline we have practised in Ajmer since 2006.'
    },
    {
      icon: Layers,
      title: 'Interiors & Turnkey Execution',
      text: 'Interior architecture for homes and offices, and turnkey construction with project management — so design, structure and finishing stay under one accountable studio.'
    }
  ];

  const whatWeDeliver = [
    {
      item: 'Architect-Drawn Floor Plans',
      covers: '2D plans for every level with furniture layouts, area statements and Vastu zoning locked at concept stage.',
      stage: 'Design'
    },
    {
      item: '3D Elevation & Facade Design',
      covers: 'Photorealistic front elevation renders with material and colour palette — revised until you approve the look.',
      stage: 'Design'
    },
    {
      item: 'Chartered Structural Drawings',
      covers: 'RCC column-beam-slab framing, foundation design matched to soil conditions, and bar bending schedules by Er. Sudhir Soni, Chartered Engineer (India).',
      stage: 'Engineering'
    },
    {
      item: 'JDA Sanction Drawing Set',
      covers: 'Site plan, floor plans, elevations and sections in the Jaipur Development Authority format, with statutory affidavits and certificates.',
      stage: 'Approval'
    },
    {
      item: 'Property Valuation & CE Certificates',
      covers: 'Government-approved valuer reports for bank loans and capital gains, plus chartered engineer stability and completion certificates — from the same studio.',
      stage: 'Statutory'
    }
  ];

  const faqs = [
    {
      question: 'Who is a good architect in Jaipur for a residential project?',
      answer: 'A good architect in Jaipur combines local byelaw knowledge (JDA setbacks, FAR, height rules) with genuine structural engineering — so your drawings pass sanction and your building stands safe. Design Plus brings its Ajmer practice (since 2006) to Jaipur through its Vaishali Nagar branch: architect-drawn plans, 3D elevations, chartered structural design by Er. Sudhir Soni and JDA sanction filing under one roof.'
    },
    {
      question: 'How do I get building plan approval in Jaipur?',
      answer: 'Residential and commercial construction in Jaipur needs Jaipur Development Authority (JDA) sanction before work begins. The filing includes sanction drawings (site plan, floor plans, elevations, sections), ownership proof, statutory affidavits and a structural stability certificate from a chartered engineer. We prepare the complete dossier and handle the liaison — most delays come from byelaw violations in the drawings, which our sets are checked against before filing.'
    },
    {
      question: 'Do you design duplex houses in Jaipur?',
      answer: 'Yes — duplex homes for joint families are among our most requested Jaipur commissions. We plan independent floors with separate entries, privacy between generations and shared courtyards, on plots across Vaishali Nagar, Mansarovar, Jagatpura and the Ajmer Road corridor. Every duplex design carries chartered structural drawings, since multi-storey homes need engineered RCC framing.'
    },
    {
      question: 'How much does an architect charge in Jaipur for house design?',
      answer: 'Across Rajasthan, complete house design typically ranges from ₹35 to ₹85 per square foot of built-up area, depending on scope — design-only packages at the lower end, full working-drawing sets with chartered structural engineering and JDA sanction drawings at the upper end. We quote in writing after a site visit and requirement discussion, never as a blind per-square-foot promise.'
    },
    {
      question: 'Do you take projects outside Jaipur city?',
      answer: 'Yes. From our Vaishali Nagar branch we serve Jaipur, and our Ajmer studio covers the Jaipur–Ajmer corridor including Kishangarh, Dudu and the farmhouse belt along Ajmer Road. Site visits, soil-test coordination and supervision visits are scheduled for outstation projects.'
    },
    {
      question: 'Can you do property valuation and chartered engineer certificates in Jaipur?',
      answer: 'Yes — both are core to the same studio. Our government approved valuer service issues bank-loan valuation reports and capital gain tax certificates in Jaipur, and our chartered engineer issues structural stability and completion certificates. Both are led by Er. Sudhir Soni, Chartered Engineer (India) and Fellow of the Institution of Valuers (FIV).'
    },
    {
      question: 'What drawings does an architect give for a house in Jaipur?',
      answer: 'A complete set: 2D floor plans for every level with furniture layouts, a photorealistic 3D front elevation, working drawings (sections, door-window schedules, electrical and plumbing layouts), chartered structural RCC drawings with bar bending schedules, and the JDA sanction drawing dossier. If someone offers you only a “floor plan”, that is not a complete design.'
    },
    {
      question: 'How long does it take to design and approve a house in Jaipur?',
      answer: 'Design takes four to six weeks from site measurement to sanction-ready drawings; JDA approval then depends on the authority’s scrutiny queue â a clean filing moves in weeks, while drawings with setback or FAR violations get trapped in objection cycles. Our sanction sets are byelaw-checked before filing, which is the honest way to keep the timeline short.'
    }
  ];

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['Architect', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${canonicalUrl}#business`,
    name: 'Design Plus',
    url: 'https://www.designplusajmer.co.in',
    telephone: '+91-7976453090',
    email: 'designplusajmer@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'B-225, Vaishali Nagar, Opposite Karnataka Bank',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      postalCode: '302021',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Kishangarh' }
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
    name: 'Architect in Jaipur — Residential, Commercial & JDA Approval Services',
    serviceType: 'Architectural Services in Jaipur — House Plans, 3D Elevations, JDA Plan Approval, Chartered Structural Engineering, Property Valuation',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Jaipur' }
    ],
    description: 'Architect in Jaipur: house plans, 3D elevations, JDA building plan approval, chartered structural engineering, property valuation and chartered engineer certificates from the Vaishali Nagar branch of Design Plus.'
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
      { '@type': 'ListItem', position: 2, name: 'Architect in Jaipur', item: canonicalUrl }
    ]
  };

  return (
    <main id="architect-in-jaipur-page" className="pt-28 pb-20">
      <SEOHead
        title="Architect in Jaipur | House Plans, 3D Elevations & JDA Approval | Design Plus"
        description="Architect in Jaipur — house plans, duplex designs, 3D elevations, JDA building plan approval, chartered structural engineering & valuation. Vaishali Nagar branch of Design Plus, Ajmer's studio since 2006."
        keywords="architect in jaipur, architects in jaipur, residential architect jaipur, duplex house architect jaipur, building plan approval jaipur, chartered engineer in jaipur, property valuer in jaipur"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
        canonical={canonicalUrl}
        schema={[professionalServiceSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/locations" className="hover:text-stone-950 transition-colors">Locations</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Architect in Jaipur</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Jaipur Branch · Vaishali Nagar, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Architect in Jaipur
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus â Ajmer’s architecture and chartered structural engineering studio since 2006 â now serves Jaipur from its Vaishali Nagar branch. Architect-drawn house plans, duplex designs, 3D elevations, JDA building plan approval, chartered structural engineering, property valuation and chartered engineer certificates, all from one studio.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Jaipur Quote</span>
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

      {/* Branch address strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-stone-200 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-amber-800 shrink-0 mt-1" />
            <div>
              <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
                Jaipur Branch
              </div>
              <p className="font-editorial text-lg sm:text-xl text-stone-950">
                B-225, Vaishali Nagar, Opposite Karnataka Bank, Jaipur, Rajasthan 302021
              </p>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Ajmer HQ: Design Plus, Rajeev Marg, Panchsheel Nagar, Ajmer, Rajasthan 305004 · +91 79764 53090 / +91 94614 65610 · Mon–Sat 09:30–19:30
              </p>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phones[0].raw}`}
            className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Jaipur Branch</span>
          </a>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Architect-designed residential construction in Jaipur by Design Plus"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Architecture & Chartered Engineering · Jaipur, Rajasthan
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Services in Jaipur
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            What Our Jaipur Branch Delivers
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            The full Ajmer studio’s capability, available in Jaipur â architecture, chartered structural engineering, statutory certification and interiors, without splitting your project across vendors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <s.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{s.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Design Plus in Jaipur */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] uppercase tracking-wider text-[#C86635] font-semibold">
              Why Jaipur Clients Choose Design Plus
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal leading-tight">
              An Architect and a Chartered Engineer, Not Just a Draftsman
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Most Jaipur “architects” sell you drawings. We give you a building: architect-drawn plans by Ar. Vipul Verma, chartered RCC structural design by Er. Sudhir Soni (Chartered Engineer (India), M.I.E., FIV), JDA sanction filing, and â uniquely â government-approved valuer reports and chartered engineer certificates from the same studio when your bank or authority asks for them.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Twenty years of practice in Ajmer’s demanding conditions â 46Â°C summers, Aravalli rock, seismic detailing â travels with us to Jaipur. Passive cooling, Vastu-aligned planning and honest construction advice are in every Jaipur design we sign.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              { k: 'Studio', v: 'Design Plus — architecture & chartered structural engineering, Ajmer since 2006' },
              { k: 'Jaipur branch', v: 'B-225, Vaishali Nagar, Opposite Karnataka Bank, Jaipur, Rajasthan 302021' },
              { k: 'Leadership', v: 'Ar. Vipul Verma (Principal Architect) · Er. Sudhir Soni (Chartered Engineer, FIV)' },
              { k: 'Approvals', v: 'JDA sanction drawings & liaison; ADA/Nagar Nigam for corridor projects' },
              { k: 'Hours', v: 'Mon–Sat 09:30–19:30 · +91 79764 53090 · designplusajmer@gmail.com' }
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
                Jaipur Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What does an architect in Jaipur do for a residential project?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                An architect in Jaipur takes your plot and requirements and turns them into a buildable, sanctionable home: measured site study, 2D floor plans with furniture layouts, photorealistic 3D elevations, working drawings, chartered structural RCC design and the JDA sanction drawing set. At Design Plus, the same engagement can add interior design, a government-approved valuer report for your home loan, and chartered engineer certificates — one studio, one accountable signature.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How do I get building plan approval in Jaipur?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Construction in Jaipur requires Jaipur Development Authority (JDA) sanction before work begins. Your architect prepares the sanction drawings â site plan, floor plans, elevations, sections â plus ownership proof, statutory affidavits and a structural stability certificate from a chartered engineer. Filings fail on setback, FAR and height violations; our drawings are checked against Rajasthan’s byelaws before filing, so approval moves through scrutiny instead of bouncing in objection cycles.
              </p>
            </div>

            {/* Deliverables table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                What You Receive
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Jaipur Project Deliverables
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Deliverable</th>
                      <th className="text-left p-4 font-semibold">What It Covers</th>
                      <th className="text-left p-4 font-semibold">Stage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whatWeDeliver.map((row) => (
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
                <span>Jaipur Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Architect in Jaipur — FAQs
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
                  Jaipur Branch
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Jaipur Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your Jaipur plot size and location — receive honest advice on what it can hold, a realistic timeline, and a written quotation.
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
                  <Link to="/chartered-engineer-certificates" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Chartered Engineer Certificates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/house-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>House Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/building-plan-approval-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Building Plan Approval in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/interior-designer-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Interior Designer in Ajmer</span>
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
              Ajmer’s Studio, Now in Jaipur
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Design Your Jaipur Home the Right Way
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              B-225, Vaishali Nagar, Opposite Karnataka Bank, Jaipur, Rajasthan 302021 · +91 79764 53090 · designplusajmer@gmail.com.
              Tell us your plot dimensions — we will tell you what is genuinely buildable on it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Jaipur Project</span>
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

export default ArchitectInJaipurPage;
