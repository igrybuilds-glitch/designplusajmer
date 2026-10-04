import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  PhoneCall, 
  Compass, 
  FileText, 
  Cpu, 
  HardHat, 
  Building2, 
  Scale
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface StructuralDrawingAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function StructuralDrawingAjmerPage({ onOpenConsultation }: StructuralDrawingAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const deliverables = [
    {
      icon: Layers,
      title: 'Foundation & Footing Layouts',
      description: 'Engineered for site-specific Safe Bearing Capacity (SBC). Includes isolated footings, combined footings, raft foundations, boundary strap beams, and subterranean waterproofing tie details.'
    },
    {
      icon: Building2,
      title: 'Column Reinforcement & Schedules',
      description: 'Precise column grid dimensions, vertical longitudinal bar diameters (Fe500D), lateral tie pitch spacing, confinement zones under IS 13920, and column lap-zone locations.'
    },
    {
      icon: Cpu,
      title: 'Plinth, Floor Beam & Slab Detailing',
      description: 'Moment-distribution layouts, top reinforcement over supports, bottom span reinforcement, crank-bar detailing, two-way/one-way slab schedules, and sunken slab plumbing drops.'
    },
    {
      icon: FileText,
      title: 'Bar Bending Schedules (BBS)',
      description: 'Itemized BBS tables listing exact bar mark, diameter, cutting length, bend angles, and total rebar weight in metric tonnes. Eliminates contractor theft and cuts site scrap wastage by 12%–18%.'
    },
    {
      icon: HardHat,
      title: 'Structural Steel & Connection Details',
      description: 'Fabrication blueprints for structural steel portals, industrial trusses, mezzanine floors, canopy cantilevers, base plate anchoring, and welded/bolted gusset plate connections under IS 800.'
    },
    {
      icon: ShieldCheck,
      title: 'Staircase, Sump & Retaining Wall Blueprints',
      description: 'Detailed structural framing for dog-legged and cantilever staircases, underground water sump tanks, overhead RCC tanks (OHSR), and earth-retaining basement walls.'
    }
  ];

  const isCodes = [
    {
      code: 'IS 456 : 2000',
      title: 'Plain and Reinforced Concrete Code of Practice',
      application: 'The foundational Indian standard governing concrete grades (M20 to M40), minimum rebar ratios, clear cover distances, shear reinforcement, and deflection limits.'
    },
    {
      code: 'IS 1893 (Part 1) : 2016',
      title: 'Criteria for Earthquake Resistant Design of Structures',
      application: 'Seismic hazard analysis for Rajasthan (Seismic Zone II/III). Establishes design horizontal seismic coefficients, response reduction factors, and story drift limitations.'
    },
    {
      code: 'IS 13920 : 2016',
      title: 'Ductile Design & Detailing of RCC Under Seismic Forces',
      application: 'Mandatory special confinement rebar detailing in column-beam junctions, minimum 135° seismic hooks, cross-ties, and hoop spacing to prevent brittle shear failure.'
    },
    {
      code: 'SP 34 : 1987',
      title: 'Handbook on Concrete Reinforcement and Detailing',
      application: 'Standardized national guidelines for rebar curtailment, lap lengths, anchorage development lengths (Ld), bend radii, and clean drafting legibility for on-site masons.'
    },
    {
      code: 'IS 800 : 2007',
      title: 'General Construction in Steel — Code of Practice',
      application: 'Limit state design method for structural steel framing, member bucking limits, tension/compression capacity, and high-strength friction grip (HSFG) bolted joints.'
    },
    {
      code: 'IS 875 (Parts 1–3)',
      title: 'Code of Practice for Design Loads (Dead, Imposed & Wind)',
      application: 'Calculates dead masonry self-weights, live occupancy floor loads, and regional high-velocity wind loads (up to 47 m/s) common across semi-arid Rajasthan terrains.'
    }
  ];

  const targetAudiences = [
    {
      audience: 'Civil & Building Contractors',
      benefit: 'Eliminate on-site guesswork. Clear, dimensioned rebar schedules prevent bending errors, reduce contractor liability, and speed up RCC slab casting cycles.'
    },
    {
      audience: 'Architects & Design Studios',
      benefit: 'Outsource complex structural physics to a licensed Chartered Engineer. We validate your bold architectural cantilevers, large glass spans, and open floor layouts.'
    },
    {
      audience: 'Real Estate Builders & Developers',
      benefit: 'Value engineering. STAAD.Pro finite element modeling optimizes steel consumption per square foot, saving lakhs in raw materials on multi-story developments.'
    },
    {
      audience: 'Private Villa & Home Owners',
      benefit: 'Protect life and capital. Guaranteed seismic resilience, certified ADA municipal compliance, and an official Chartered Structural Stability Certificate.'
    }
  ];

  const faqs = [
    {
      question: 'What is included in structural drawing services in Ajmer?',
      answer: 'Our structural drawing service includes a complete execution blueprint package: (1) Foundation & footing layout with excavation details, (2) Plinth beam & tie-beam reinforcement, (3) Column grid layout, cross-sections & vertical bar schedules, (4) Roof slab & beam schedules for all floors, (5) Detailed Bar Bending Schedules (BBS), (6) Staircase & overhead tank reinforcement, and (7) Chartered Structural Stability Certificate signed by Er. Sudhir Soni (M.E. Structure, FIV).'
    },
    {
      question: 'What is the difference between architectural drawings and structural drawings?',
      answer: 'Architectural drawings define the building’s aesthetics, room dimensions, door/window positions, elevations, and functional circulation. Structural drawings define the skeleton and physical safety: the thickness of concrete, the exact grade of steel, foundation depths, column rebar counts, beam stirrup spacing, and load-transfer mechanics necessary to resist gravity and earthquake forces.'
    },
    {
      question: 'What is a Bar Bending Schedule (BBS) and how does it save construction costs?',
      answer: 'A Bar Bending Schedule (BBS) is an itemized engineering table that lists every single steel bar in the building—its diameter, cut length, bend angle, and hook detail. By providing exact cutting lengths before fabrication, BBS eliminates wasteful rebar cutting, prevents on-site contractor theft, and allows exact steel ordering, saving homeowners 10%–18% on their total steel bill.'
    },
    {
      question: 'How much do structural drawings cost in Ajmer?',
      answer: 'Standalone structural engineering drawings in Ajmer generally range from ₹12 to ₹25 per square foot of built-up area for residential villas, and ₹15 to ₹30 per square foot for commercial or multi-story structures. When commissioned alongside our integrated architectural design package, structural calculations and drawings are bundled at significant value.'
    },
    {
      question: 'What Indian Standard (IS) codes are followed for RCC and seismic detailing?',
      answer: 'All our structural blueprints are drafted strictly under Bureau of Indian Standards (BIS) codes: IS 456:2000 for concrete, IS 1893:2016 for seismic loads, IS 13920:2016 for ductile earthquake detailing, SP 34 for rebar reinforcement standards, and IS 800:2007 for structural steel.'
    },
    {
      question: 'Does Design Plus provide Chartered Engineer Stability Certificates for ADA municipal approval?',
      answer: 'Yes. Led by Er. Sudhir Soni, who is a licensed Chartered Engineer (CE) and Fellow of the Institution of Valuers (FIV), Design Plus issues certified Structural Stability Undertakings and Certificates recognized by the Ajmer Development Authority (ADA), JDA, and statutory municipal corporations across Rajasthan.'
    }
  ];

  // Schema.org Structured Data
  const structuralServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.designplusajmer.co.in/structural-drawing-ajmer#service',
    name: 'Structural Drawing & RCC Detailing Services in Ajmer',
    serviceType: 'Chartered Structural Engineering & Detailing',
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
      { '@type': 'City', name: 'Bhilwara' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' }
    ],
    description: 'Chartered structural drawing in Ajmer. Expert RCC detailing services, steel connection drawings, and Bar Bending Schedules (BBS) under IS 456 and IS 13920.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Engineering blueprint packages starting from ₹12/sq.ft.'
    }
  };

  const structuralFAQSchema = {
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
    <main id="structural-drawing-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Structural Drawing in Ajmer | RCC & Steel Detailing"
        description="Chartered structural drawing in Ajmer. Expert RCC detailing services, steel connection drawings, and Bar Bending Schedules (BBS) under IS 456 and IS 13920."
        keywords="structural drawing ajmer, rcc detailing services, steel detailing, bar bending schedule ajmer, structural blueprint ajmer, chartered structural engineer rajasthan"
        canonical="https://www.designplusajmer.co.in/structural-drawing-ajmer"
        schema={[structuralServiceSchema, structuralFAQSchema]}
      />

      {/* 01. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Structural Drawing &amp; Detailing</span>
        </nav>
      </div>

      {/* 02. EDITORIAL HERO (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-amber-800" />
            <span>Chartered Structural Engineering Blueprints · Ajmer, Rajasthan</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Structural Drawing Services in Ajmer: Chartered RCC &amp; Steel Detailing
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Mathematical structural integrity transformed into clean, execution-ready blueprints. Directed by Chartered Structural Engineer <strong className="text-stone-900 font-semibold">{LEADERSHIP.name}</strong>, our studio delivers computerized STAAD.Pro load calculations, IS 13920 ductile seismic detailing, and precision Bar Bending Schedules (BBS) for contractors, architects, and property developers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Request Structural Blueprints</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Direct Line: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03. TRUST SIGNALS & ENGINEERING STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-stone-100 border border-stone-200">
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">IS 456 / 13920</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Ductile Detailing</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Full seismic compliance</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">STAAD.Pro</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">3D FEM Modeling</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Finite element analysis</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-emerald-800 font-bold">0% Failures</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">900+ Built Works</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Over 20+ years practice</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">12%–18%</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Steel Rebar Saved</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Via exact BBS schedules</p>
          </div>
        </div>
      </section>

      {/* 04. HERO VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="relative aspect-16/9 md:aspect-21/9 bg-stone-200 overflow-hidden border border-stone-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1800&q=85"
            alt="Chartered structural engineer reviewing concrete reinforcement and RCC structural drawings in Ajmer"
            width={1800}
            height={770}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-stone-950/90 text-white p-4 max-w-lg backdrop-blur-xs border border-white/10 text-xs space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-amber-400">Engineering Rigor In Drafting</div>
            <p className="text-stone-300">
              Clear rebar cut-lengths, lap locations, shear links, and column framing schedules eliminate contractor guesswork on site.
            </p>
          </div>
        </div>
      </section>

      {/* 05. WHAT DELIVERABLES INCLUDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Complete Blueprint Set
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            What Our Structural Drawing Deliverables Include
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Every drawing set is drafted to national drafting standards (SP 34) ensuring foolproof comprehension for site engineers and bar-benders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {deliverables.map((item, idx) => {
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

      {/* 06. IS CODE COMPLIANCE SPECIFICATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-8 sm:p-14 border border-stone-800">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
              Bureau of Indian Standards
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Strict Adherence to Indian Standard (IS) Codes
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              We never cut corners with rules-of-thumb. Every structural beam, column, and foundation slab is calculated against codal load combinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isCodes.map((c) => (
              <div key={c.code} className="p-6 bg-stone-900/60 border border-stone-800 space-y-2">
                <div className="font-mono text-xs font-bold text-amber-400">
                  {c.code}
                </div>
                <h3 className="font-editorial text-lg text-white font-medium">
                  {c.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {c.application}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. WHO NEEDS THIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Industry Stakeholders
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Who Relies on Our Structural Detailing Services?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {targetAudiences.map((aud) => (
            <div key={aud.audience} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-[#C86635] font-mono text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{aud.audience}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {aud.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. WHY CHARTERED DETAILING MATTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="p-8 sm:p-12 bg-white border border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
                Chartered Engineer Authority
              </span>
              <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
                Why Chartered Detailing is Your Building’s Best Insurance
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A non-engineered drawing drafted by an uncertified draftsman leaves your building vulnerable to seismic fractures, honeycombing, and excessive deflection. Er. Sudhir Soni brings over 3 decades of structural engineering scholarship (M.E. Structure), ensuring that your building is mathematically sound, cost-efficient, and approved by the Ajmer Development Authority without delay.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-stone-700">
                <span className="bg-stone-100 px-3 py-1 border border-stone-200">✓ M.E. (Structure) Honors</span>
                <span className="bg-stone-100 px-3 py-1 border border-stone-200">✓ Chartered Engineer (CE)</span>
                <span className="bg-stone-100 px-3 py-1 border border-stone-200">✓ Fellow, Institution of Valuers (FIV)</span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-stone-50 p-6 border border-stone-200 text-center space-y-4">
              <div className="font-editorial text-3xl font-bold text-stone-950">900+</div>
              <div className="text-xs font-mono uppercase text-stone-600 tracking-wider">Structures Standing Tall</div>
              <p className="text-xs text-stone-500">
                Residential villas, high-rises, commercial plazas, and highway bridges designed without a single structural failure.
              </p>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <span>Consult Er. Sudhir Soni</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 09. SEO-OPTIMIZED FAQ SECTION (Long-Tail Search Intent) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Structural Drawings &amp; RCC Detailing in Ajmer
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Common questions regarding structural blueprints, BBS schedules, fees, and municipal compliances in Rajasthan.
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

      {/* 10. FINAL CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Zero Structural Guesswork
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Ready to Commission Chartered Structural Drawings?
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Send your architectural floor plans or CAD files. Our engineering division will run 3D finite element load simulations and deliver comprehensive, execution-ready RCC blueprints.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Get Structural Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/project-management"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>View Site PMC Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Related guides &amp; services — internal SEO links */}
        <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/services/structural-design/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Structural design services
                </Link>
              </li>
              <li>
                <Link to="/blog/how-to-plan-your-dream-home-in-ajmer/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  How to plan your dream home in Ajmer
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Book a Consultation
                </Link>
              </li>
          </ul>
        </nav>
        </div>
      </section>
    </main>
  );
}
