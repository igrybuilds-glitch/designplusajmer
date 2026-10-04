import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Hammer,
  ScanSearch,
  LayoutTemplate,
  Paintbrush,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface RenovationAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function RenovationAjmerPage({ onOpenConsultation }: RenovationAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/renovation-ajmer';

  const architectNeeded = [
    {
      title: 'Removing or shifting walls',
      text: 'In Ajmer\u2019s older load-bearing homes (pre-2000), many \u201cwalls\u201d carry slabs. We verify with drawings or a site investigation before any demolition — a wrongly removed wall is a structural failure, not a design choice.'
    },
    {
      title: 'Adding a floor or room',
      text: 'Vertical expansion needs a foundation capacity check and ADA height/FAR compliance. Er. Sudhir Soni certifies whether your footing can take the load or needs strengthening first.'
    },
    {
      title: 'Homes older than 25–30 years',
      text: 'Chuna-plastered, lime-mortar homes in the old city hide corroded reinforcement and settled foundations. A structural audit before cosmetic spending saves you from painting over a failing frame.'
    },
    {
      title: 'Persistent seepage or cracks',
      text: 'Diagonal wall cracks, terrace ponding and bathroom seepage are symptoms. We diagnose the cause (settlement, waterproofing failure, plumbing) and fix the source — not just the stain.'
    },
    {
      title: 'Facade and elevation makeover',
      text: 'Stone cladding, jharokha frames and modern elevations add dead load to old facades. We detail anchoring systems so your new face never becomes a falling hazard.'
    },
    {
      title: 'Full interior re-planning',
      text: 'Converting a 3BHK layout, merging kitchen-dining or adding attached baths needs MEP re-routing — drainage slopes, shaft positions and beam depths all constrain what is possible.'
    }
  ];

  const services = [
    {
      icon: ScanSearch,
      title: 'Structural Audit & Strengthening',
      text: 'Rebound-hammer testing, crack mapping, foundation assessment and a written health report. Where needed: jacketing, micro-concrete repairs and beam-column strengthening.'
    },
    {
      icon: LayoutTemplate,
      title: 'Space Re-planning',
      text: 'Vastu-sensitive re-zoning of existing footprints — better light, better ventilation, zero wasted corridors — drawn as sanction-ready working plans.'
    },
    {
      icon: Paintbrush,
      title: 'Facade & Elevation Renewal',
      text: 'Contemporary stone, texture and lighting makeovers engineered for old structures, with anchored cladding systems and waterproofing integration.'
    },
    {
      icon: Wrench,
      title: 'MEP & Waterproofing Overhaul',
      text: 'Rewiring, CPVC plumbing re-runs, bathroom waterproofing with flood testing, and terrace treatments built for Ajmer\u2019s monsoon bursts.'
    }
  ];

  const faqs = [
    {
      question: 'Do I really need an architect for a home renovation in Ajmer?',
      answer: 'For cosmetic refreshes — paint, polish, soft furnishings — no. But the moment you touch walls, slabs, plumbing cores, facades or add a floor, you need one. Most renovation disasters we are called to fix began as \u201Cjust a contractor job\u201D where a load-bearing wall was cut or drainage was re-routed against slope. An architect\u2019s fee on a renovation is a fraction of the cost of fixing a structural mistake.'
    },
    {
      question: 'What does home renovation cost per sq ft in Ajmer?',
      answer: 'Cosmetic renovation (paint, flooring overlay, kitchen/bath fixtures) runs roughly ₹800–1,200 per sq ft. Deep renovation with re-planning, MEP overhaul and structural repairs runs ₹1,400–2,000 per sq ft. Heritage or luxury-grade work goes higher. We quote after a site audit — a phone-quote for renovation is guesswork, because no two old buildings hide the same surprises.'
    },
    {
      question: 'Can we keep living in the house during renovation?',
      answer: 'Often, yes — with phased execution. We sequence work floor-by-floor or zone-by-zone, with dust barriers, protected circulation paths and water/electricity maintained in the living zone. Full structural work (like slab repairs) may need a 2–3 week temporary shift; we flag this in the program before you commit.'
    },
    {
      question: 'My house is 35 years old. Is it safe to renovate or should I rebuild?',
      answer: 'That is exactly what our structural audit answers. We test concrete strength, map reinforcement corrosion, check foundation settlement and then give you a written verdict: renovate, strengthen-then-renovate, or rebuild. Roughly half the old-city homes we audit are sound enough to renovate beautifully — but we never guess; we test.'
    },
    {
      question: 'Do renovations need ADA approval in Ajmer?',
      answer: 'Internal cosmetic work does not. But any change to the building envelope — added floor, extended footprint, facade projection changes or usage change — needs ADA sanction. We prepare the approval drawings as part of the renovation scope wherever the byelaws trigger.'
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Home Renovation & Remodeling in Ajmer',
    serviceType: 'Architect-Led Home Renovation — Structural Audit, Re-planning & Execution',
    provider: {
      '@type': 'ProfessionalService',
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
      }
    },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Beawar' },
      { '@type': 'State', name: 'Rajasthan' }
    ],
    description: 'Architect-led home renovation in Ajmer: structural safety audit first, then re-planning, facade renewal, MEP overhaul and dust-controlled phased execution.'
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
      { '@type': 'ListItem', position: 2, name: 'Home Renovation in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="renovation-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Home Renovation in Ajmer | Design Plus"
        description="Home renovation in Ajmer — architect-led remodeling with structural safety audit, transparent per-sq-ft costs & dust-controlled phased execution."
        keywords="home renovation ajmer, house renovation cost ajmer, architect for home renovation ajmer, old house renovation rajasthan"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
        canonical={canonicalUrl}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Home Renovation in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5" />
            <span>Architect-Led Remodeling · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Home Renovation in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Renovation done right starts with what you cannot see. We audit your structure first —
            then re-plan, re-face and re-fit your home with an architect\u2019s drawings and an
            engineer\u2019s sign-off, executed in dust-controlled phases while you live around the work.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Book Structural Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/modular-kitchen-ajmer"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-500 text-stone-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
           >
              <span>Kitchen Renovation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
            alt="Structural renovation work in progress on an Ajmer residence with supervised framing"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Supervised Structural Renovation · Ajmer
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">

            {/* When architect needed */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Know Before You Break
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                When a Renovation Needs an Architect
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Paint and polish need a good contractor. Everything below changes how your building
                stands, drains, breathes or complies — that needs an architect and, often, a chartered
                engineer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {architectNeeded.map((a) => (
                <div key={a.title} className="p-6 bg-white border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-800 shrink-0" />
                    <h3 className="font-editorial text-base text-stone-950 font-medium">{a.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{a.text}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Scope of Work
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What Our Renovation Scope Covers
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="p-6 bg-stone-50 border border-stone-200 space-y-2">
                    <s.icon className="w-5 h-5 text-amber-800" />
                    <h3 className="font-editorial text-lg text-stone-950 font-medium">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Audit First. Design Second. Dust Last.
              </h2>
              <ol className="space-y-3">
                {[
                  { t: 'Structural & condition audit', d: 'Rebound-hammer tests, crack mapping, seepage tracing and a written health report with photographs. You know exactly what is sound and what is not — before spending.' },
                  { t: 'Design & BOQ freeze', d: 'Re-planned layouts, 3D views of key spaces, material samples and a line-item BOQ. Phasing plan agreed in writing if you stay in the home.' },
                  { t: 'Phased, dust-controlled execution', d: 'Zone-by-zone work with dust barriers and protected services. Structural repairs first, then MEP, then finishes — never the reverse.' },
                  { t: 'Snag-free handover', d: 'Joint inspection room by room, defect list closed, warranties handed over. Your old home, re-engineered.' }
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4 p-5 bg-white border border-stone-200">
                    <span className="font-editorial text-2xl text-amber-800 font-medium shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-editorial text-base text-stone-950 font-medium">{s.t}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <Hammer className="w-4 h-4" />
                <span>Renovation Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Home Renovation FAQs — Ajmer
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
                  Start With Facts
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Structural Audit Visit
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  A half-day site visit: concrete strength tests, crack and seepage mapping, and a
                  written verdict on renovate vs. strengthen vs. rebuild — before you spend on finishes.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Book Audit Visit</span>
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
                  <Link to="/services/structural-design" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Engineering</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/services/interior-design" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Interior Design</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/modular-kitchen-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Modular Kitchen Ajmer</span>
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
              Test Before You Invest
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Know Your Home\u2019s Health Before You Renovate
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              One audit visit can save you lakhs in wrong-first spending.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Book Structural Audit</span>
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

export default RenovationAjmerPage;
