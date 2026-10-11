import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HardHat,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Building2,
  ClipboardCheck,
  ShieldCheck,
  Ruler,
  FileCheck2,
  Activity
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface StructuralConsultancyAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function StructuralConsultancyAjmerPage({ onOpenConsultation }: StructuralConsultancyAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/structural-consultancy-ajmer/';

  const services = [
    {
      service: 'RCC Framed Structure Design',
      includes: 'Column-beam-slab framing, load calculations per IS 456 / IS 1893, foundation design matched to soil bearing capacity.',
      whenNeeded: 'Every new G+1 and above building in Ajmer; mandatory for ADA sanction.'
    },
    {
      service: 'Foundation Engineering',
      includes: 'Footing design for Aravalli rocky strata, sandy loam and high-water-table zones near Ana Sagar; pile and raft options where needed.',
      whenNeeded: 'Plots with rocky, filled or waterlogged ground; multi-storey construction.'
    },
    {
      service: 'Structural Audit of Existing Buildings',
      includes: 'Visual inspection, crack mapping, rebar corrosion assessment, load-capacity evaluation and a written audit report with remedies.',
      whenNeeded: 'Buying an old property, adding floors, or visible distress like cracks and seepage.'
    },
    {
      service: 'Stability Certificates for ADA Filing',
      includes: 'Chartered engineer\u2019s certification of structural safety for sanction, completion and regularisation dossiers.',
      whenNeeded: 'ADA/Nagar Nigam plan approval and completion-certificate applications.'
    },
    {
      service: 'Retrofitting & Strengthening Design',
      includes: 'Jacketing, FRP wrapping and section-enlargement designs for distressed or under-designed structures.',
      whenNeeded: 'Old buildings showing deflection, settlement or inadequate original design.'
    },
    {
      service: 'Third-Party Structural Vetting',
      includes: 'Independent review of another engineer\u2019s drawings — steel quantities, detailing and code compliance checked line by line.',
      whenNeeded: 'Before committing to a contractor\u2019s drawings or a high-value construction contract.'
    }
  ];

  const expertise = [
    {
      icon: Building2,
      title: 'Residential RCC Structures',
      text: 'Houses, duplexes and apartment blocks engineered for Ajmer\u2019s soils — optimised steel placement that saves material without compromising safety.'
    },
    {
      icon: Ruler,
      title: 'Commercial & Long-Span Structures',
      text: 'Showrooms, halls and commercial blocks with large column-free spans, designed for the loads they will actually carry over decades.'
    },
    {
      icon: Activity,
      title: 'Seismic Detailing (IS 1893)',
      text: 'Ajmer falls in a moderate seismic zone — ductile detailing, proper lap lengths and confinement reinforcement are designed in, not assumed.'
    },
    {
      icon: FileCheck2,
      title: 'Chartered Certification',
      text: 'Er. Sudhir Soni (M.E. Structure, Chartered Engineer, FIV) signs every design — the certification ADA and Nagar Nigam filings legally require.'
    }
  ];

  const faqs = [
    {
      question: 'What does a structural consultant do in Ajmer?',
      answer: 'A structural consultant designs the load-bearing skeleton of your building — foundations, columns, beams and slabs — calculated to IS codes for your soil, height and usage. In Ajmer this also means stability certificates for ADA sanction, structural audits of existing buildings, and retrofitting designs. Design Plus offers all of these in-house under Er. Sudhir Soni.'
    },
    {
      question: 'When do I need a structural engineer for my house in Ajmer?',
      answer: 'For any G+1 or taller construction, for houses on rocky or filled ground, when adding floors to an existing building, and whenever ADA sanction requires a stability certificate — which is standard. Even single-storey homes on Ajmer\u2019s variable soils benefit: proper footing design prevents the settlement cracks that plague under-engineered houses.'
    },
    {
      question: 'How much does structural design cost per sq ft in Ajmer?',
      answer: 'In Ajmer, standalone chartered structural design typically ranges from ₹12 to ₹25 per square foot of built-up area, depending on building height, soil complexity and drawing detail. Structural audits and stability certificates are quoted per assignment after a site visit. When bundled with our architectural design, structural engineering is integrated into the single project fee.'
    },
    {
      question: 'What is a structural stability certificate for ADA approval?',
      answer: 'It is a chartered engineer\u2019s written certification that the proposed (or existing) structure complies with safety codes and can bear its design loads. The ADA and Nagar Nigam require it with sanction and completion filings. Only a registered chartered engineer — like Er. Sudhir Soni at Design Plus — can legally issue it.'
    },
    {
      question: 'Can you audit a building I am planning to buy in Ajmer?',
      answer: 'Yes. Pre-purchase structural audits are one of our most valuable services: we inspect foundations, framing, cracks, seepage and alterations, review any available drawings, and give you a written report on the building\u2019s condition and remaining life. It has saved several clients from buying structurally compromised properties.'
    },
    {
      question: 'My house has cracks. Do I need a structural audit?',
      answer: 'Hairline plaster cracks are usually cosmetic, but diagonal cracks at wall corners, cracks widening over months, or cracks with seepage deserve professional assessment. We map and measure the cracking, determine whether it is settlement, thermal or structural, and prescribe remedies — from monitoring to retrofitting — in a written report.'
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
    name: 'Structural Consultancy in Ajmer',
    serviceType: 'Chartered Structural Engineering — RCC Design, Foundation Engineering, Structural Audits & Stability Certificates',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: 'Structural consultancy in Ajmer by Er. Sudhir Soni, Chartered Engineer: RCC framing design, foundation engineering for Aravalli soils, structural audits and ADA stability certificates.'
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
      { '@type': 'ListItem', position: 2, name: 'Structural Consultancy in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="structural-consultancy-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Structural Consultancy in Ajmer | Chartered Engineer | Design Plus"
        description="Structural consultancy in Ajmer — chartered RCC design, foundation engineering for Aravalli soils, structural audits, retrofitting & ADA stability certificates by Er. Sudhir Soni."
        keywords="structural consultant ajmer, structural engineer ajmer, chartered engineer ajmer, rcc design ajmer, structural audit ajmer, stability certificate ajmer, foundation design rajasthan"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
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
          <span className="text-amber-900 font-medium">Structural Consultancy in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <HardHat className="w-3.5 h-3.5" />
            <span>Chartered Structural Engineering · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Structural Consultancy in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, offer chartered structural consultancy led by Er. Sudhir Soni — M.E. Structure, Chartered Engineer — covering RCC framing design, foundation engineering for Aravalli rocky and sandy soils, structural audits of existing buildings, and stability certificates for ADA filings. Typical consultancy for standalone structural design in Ajmer ranges from ₹12 to ₹25 per square foot.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Structural Consultancy Quote</span>
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
            alt="RCC structural framing under chartered engineering supervision in Ajmer"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Chartered Structural Engineering · Ajmer
          </div>
        </div>
      </section>

      {/* Expertise cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Engineering Discipline
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Chartered Engineering, Not Guesswork
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Every structural engagement at Design Plus is directed by Er. Sudhir Soni — M.E. (Structural Engineering), M.I.E., FIV, Chartered Engineer — with over three decades of engineering leadership across Rajasthan.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {expertise.map((e) => (
            <div key={e.title} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-2">
              <e.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-xl text-stone-950 font-medium">{e.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{e.text}</p>
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
                Structural Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What does a structural consultant do in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A structural consultant designs the load-bearing skeleton of your building — foundations, columns, beams and slabs — calculated to IS codes for your soil, height and usage. In Ajmer this also means stability certificates for ADA sanction, structural audits of existing buildings, and retrofitting designs for distressed structures. Design Plus offers all of these in-house under Er. Sudhir Soni.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                When do I need a structural engineer for my house in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                You need one for any G+1 or taller construction, for houses on rocky or filled ground, when adding floors to an existing building, and whenever ADA sanction requires a stability certificate — which is standard practice. Even single-storey homes on Ajmer\u2019s variable soils benefit: proper footing design prevents the settlement cracks that plague under-engineered houses across the city.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How much does structural design cost per sq ft in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                In Ajmer, standalone chartered structural design typically ranges from ₹12 to ₹25 per square foot of built-up area, depending on building height, soil complexity and drawing detail. Structural audits and stability certificates are quoted per assignment after a site visit. When bundled with our architectural design, structural engineering is integrated into the single project fee.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is a structural stability certificate for ADA approval?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                It is a chartered engineer\u2019s written certification that a proposed or existing structure complies with safety codes and can safely bear its design loads. The ADA and Nagar Nigam require it with sanction and completion filings. Only a registered chartered engineer — such as Er. Sudhir Soni at Design Plus — can legally issue it, which is why in-house chartered capability matters.
              </p>
            </div>

            {/* Services table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Consultancy Scope
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Structural Consultancy Services — Ajmer
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Service</th>
                      <th className="text-left p-4 font-semibold">What It Includes</th>
                      <th className="text-left p-4 font-semibold">When You Need It</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((row) => (
                      <tr key={row.service} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900">{row.service}</td>
                        <td className="p-4 text-stone-700">{row.includes}</td>
                        <td className="p-4 text-stone-700">{row.whenNeeded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Soil note */}
            <div className="p-6 sm:p-8 bg-[#141414] text-stone-100 border border-stone-800 space-y-2">
              <div className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold">
                Ajmer Soil Reality
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Ajmer\u2019s ground is not one ground: hard metamorphic schist under Civil Lines and the Aravalli foothills, mixed rocky-sandy strata across newer sectors, and high water tables near Ana Sagar. Foundation design that ignores this — the standard contractor shortcut — is the root cause of most settlement cracks we are called to audit. Every Design Plus foundation starts from the soil test, never from habit.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Structural Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Structural Consultancy FAQs — Ajmer
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
                  Chartered Engineering
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Structural Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Describe your project or building concern — receive honest engineering advice and a written consultancy quotation.
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
                  <Link to="/building-plan-approval-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Building Plan Approval in Ajmer</span>
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
              Calculated. Certified. Supervised.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Engineer Your Ajmer Project With a Chartered Hand
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Bring your drawings, your soil report, or just your concern — we will give you an engineer\u2019s answer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start Structural Consultancy</span>
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

export default StructuralConsultancyAjmerPage;
