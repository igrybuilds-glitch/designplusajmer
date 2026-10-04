import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  KeyRound,
  Hammer,
  ShieldCheck,
  FileCheck2,
  Building2,
  Calculator,
  Clock3,
  HardHat,
  BadgeCheck,
  ClipboardCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface TurnkeyConstructionAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function TurnkeyConstructionAjmerPage({ onOpenConsultation }: TurnkeyConstructionAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/turnkey-construction-ajmer';

  const benefits = [
    {
      icon: KeyRound,
      title: 'One Contract, Zero Finger-Pointing',
      text: 'Design, structural engineering, municipal approvals and site execution sit under a single accountable agreement. When one team owns the outcome, there is nobody to blame and nothing falls between contractors.'
    },
    {
      icon: Calculator,
      title: 'Cost Locked Before Excavation',
      text: 'Your per-square-foot rate is frozen in writing after soil testing and design freeze — before a single footing is cast. No mid-project "rate revisions", no material-bill surprises.'
    },
    {
      icon: ShieldCheck,
      title: 'Chartered Engineering on Every Pour',
      text: 'Led by Er. Sudhir Soni (Chartered Engineer, M.E. Structure), every slab, beam and foundation is supervised against IS 456 / IS 1893 calculations — the same rigor standalone contractors skip.'
    },
    {
      icon: FileCheck2,
      title: 'ADA Approvals Handled End-to-End',
      text: 'Sanction drawings, setback compliance, structural stability certificates and completion documentation for the Ajmer Development Authority are prepared in-house, not outsourced to agents.'
    },
    {
      icon: Clock3,
      title: 'Milestone-Linked Timeline',
      text: 'Foundation, framing, masonry, MEP, finishes — each phase has a committed window. You track progress against a written schedule instead of chasing a contractor on the phone.'
    },
    {
      icon: BadgeCheck,
      title: 'Defect-Liability After Handover',
      text: 'Handover includes as-built drawings, material warranties and a written defect-liability period. If something fails that should not, we return and fix it.'
    }
  ];

  const phases = [
    {
      n: '01',
      title: 'Feasibility & Cost Lock',
      text: 'Site reconnaissance, soil bearing assessment, ADA byelaw check (setbacks, FAR, ground coverage) and a transparent per-sq-ft quotation frozen in the agreement.'
    },
    {
      n: '02',
      title: 'Design & 3D Freeze',
      text: 'Vastu-aligned floor plans, photorealistic 3D elevations and interior concepts by Ar. Vipul Verma. Nothing moves to site until you approve every room on paper and in 3D.'
    },
    {
      n: '03',
      title: 'Engineering & Sanction',
      text: 'Chartered structural calculations, foundation design matched to your soil, bar bending schedules and the complete ADA sanction drawing dossier.'
    },
    {
      n: '04',
      title: 'Execution Under Supervision',
      text: 'Empanelled execution teams work under our site engineers: pre-pour rebar inspections, concrete cube testing, masonry and waterproofing audits at every milestone.'
    },
    {
      n: '05',
      title: 'MEP, Finishes & Interiors',
      text: 'Electrical, plumbing, false ceiling, flooring, modular kitchen and wardrobes, paint and fixtures — coordinated as one finishes program, not ten separate vendors.'
    },
    {
      n: '06',
      title: 'Handover & Documentation',
      text: 'Deep-cleaned, snag-free handover with as-built drawings, material warranty cards, structural stability certificate and defect-liability terms in writing.'
    }
  ];

  const costTiers = [
    {
      tier: 'Essential',
      rate: '₹1,800 – ₹2,100 / sq ft',
      desc: 'Clean contemporary finishes with standard materials: vitrified tile flooring, aluminium windows, branded sanitaryware and putty-paint finishes. Ideal for rental-oriented or first homes.'
    },
    {
      tier: 'Signature',
      rate: '₹2,200 – ₹2,600 / sq ft',
      desc: 'Our most chosen tier: granite/wooden flooring accents, UPVC windows, modular kitchen, designer false ceilings, CP fittings and elevation cladding features.'
    },
    {
      tier: 'Landmark',
      rate: '₹2,700 – ₹3,200 / sq ft',
      desc: 'Double-height volumes, imported marble, solid-teak joinery, home automation readiness, landscape and facade lighting. For forever homes and statement villas.'
    }
  ];

  const comparison = [
    {
      feature: 'Design + Engineering + Execution',
      turnkey: 'Single team, single contract',
      labour: 'You coordinate architect, engineer and contractor separately',
      pmc: 'We supervise; you hold the contractor contracts'
    },
    {
      feature: 'Cost certainty',
      turnkey: 'Per-sq-ft rate locked before excavation',
      labour: 'Bills inflate with every material price swing',
      pmc: 'Transparent, but contractor bills remain variable'
    },
    {
      feature: 'Who chases the site daily',
      turnkey: 'Our site engineers',
      labour: 'You do',
      pmc: 'Our supervisors report to you; you decide'
    },
    {
      feature: 'Best for',
      turnkey: 'NRI clients, busy professionals, first-time builders in Ajmer',
      labour: 'Experienced builders with site time to spare',
      pmc: 'Clients who already trust a contractor but want technical policing'
    }
  ];

  const faqs = [
    {
      question: 'What is the turnkey house construction cost per sq ft in Ajmer in 2026?',
      answer: 'In Ajmer, turnkey construction currently ranges from ₹1,800 per sq ft for essential specifications to ₹3,200 per sq ft for landmark-grade finishes (2026 market). A 1,500 sq ft Signature-tier home therefore lands around ₹33–39 lakh all-inclusive of design, ADA approvals, structure and finishes. Your exact rate is locked in writing after soil testing and design freeze — before excavation begins.'
    },
    {
      question: 'How long does turnkey construction take for a typical Ajmer house?',
      answer: 'A 1,200–1,800 sq ft duplex residence typically takes 8–12 months from excavation to handover: roughly 4–6 weeks for design and ADA sanction, 5–7 months for structure and masonry, and 2–3 months for finishes and interiors. Monsoon months can shift waterproofing-sensitive activities, which is why our schedule is milestone-linked rather than date-promised.'
    },
    {
      question: 'Do you handle Ajmer Development Authority (ADA) approvals in turnkey projects?',
      answer: 'Yes — sanction drawings, setback and FAR compliance, structural stability certificates and completion documentation are prepared in-house by our studio and filed with the ADA. Standalone contractors usually leave approvals to you; in our turnkey scope they are a deliverable, not an errand.'
    },
    {
      question: 'I already have a floor plan from another architect. Can you still build turnkey?',
      answer: 'Yes, after a technical audit. We review the plan for structural feasibility, ADA byelaw compliance and Vastu alignment, then have Er. Sudhir Soni engineer the structure before execution. If the plan needs corrections, we flag them in writing before quoting — we never build a flawed drawing just because it exists.'
    },
    {
      question: 'How are payments structured in a turnkey contract?',
      answer: 'Payments are milestone-linked, never time-linked: booking advance, then releases against foundation completion, plinth, slab castings, masonry, MEP rough-in, finishes and finally handover retention. Each release follows a joint site inspection, so you pay for verified progress, not promises.'
    },
    {
      question: 'What warranty do I get after handover?',
      answer: 'Every turnkey handover includes as-built drawings, material warranty cards and a written defect-liability period covering workmanship issues — waterproofing, plumbing seepage, electrical faults and finish defects. Structural elements carry the chartered stability certification issued by Er. Sudhir Soni.'
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Turnkey House Construction in Ajmer',
    serviceType: 'Turnkey Residential Construction — Design, Engineering & Execution',
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
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Beawar' },
      { '@type': 'State', name: 'Rajasthan' }
    ],
    description: 'Single-contract turnkey house construction in Ajmer: architect-led design, chartered structural engineering, ADA approvals and supervised execution with locked per-sq-ft pricing.'
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
      { '@type': 'ListItem', position: 2, name: 'Turnkey Construction in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="turnkey-construction-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Turnkey Construction in Ajmer | Design Plus"
        description="Turnkey house construction in Ajmer — single-contract design, chartered engineering, ADA approvals & supervised execution. Locked per-sq-ft pricing from ₹1,800."
        keywords="turnkey construction ajmer, home construction company ajmer, turnkey house construction cost per sq ft ajmer, turnkey contractor ajmer rajasthan"
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
        canonical={canonicalUrl}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Turnkey Construction in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <KeyRound className="w-3.5 h-3.5" />
            <span>Single-Contract Delivery · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Turnkey Construction in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Hand us the plot — receive the keys. Design Plus designs, engineers, approves and builds your
            home under one contract: architect-led plans, chartered structural supervision, ADA sanction
            handling and finishes, with your per-square-foot cost locked in writing before excavation.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Locked Turnkey Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/architect-fees-ajmer"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-500 text-stone-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>2026 Cost Guide</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt="Turnkey house construction site in Ajmer with supervised RCC framing work"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Supervised Turnkey Execution · Ajmer, Rajasthan
          </div>
        </div>
      </section>

      {/* What Turnkey Means Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                The Model
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What &ldquo;Turnkey&rdquo; Actually Covers
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Many Ajmer contractors use &ldquo;turnkey&rdquo; to mean &ldquo;we will build whatever drawing you
                give us.&rdquo; Our definition is stricter: one studio owns design intent, structural safety,
                statutory approvals and site execution — so the home you approved in 3D is the home you
                receive at handover. The scope runs from soil test to deep-cleaned keys, including modular
                kitchen, wardrobes, electrical, plumbing, waterproofing and landscape.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 bg-white border border-stone-200 space-y-2">
                  <b.icon className="w-5 h-5 text-amber-800" />
                  <h3 className="font-editorial text-lg text-stone-950 font-medium">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Cost tiers */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                2026 Ajmer Pricing
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Turnkey Cost Per Sq Ft in Ajmer
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                Rates below are all-inclusive of design, ADA sanction, structure, finishes and basic
                interiors. Final rate locks after soil testing and design freeze — these bands tell you
                which tier your budget belongs to.
              </p>
              <div className="space-y-3">
                {costTiers.map((c) => (
                  <div key={c.tier} className="p-6 bg-stone-50 border border-stone-200">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-editorial text-xl text-stone-950 font-medium">{c.tier}</h3>
                      <span className="text-sm font-semibold text-amber-800 font-sans">{c.rate}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 font-sans">
                Cost drivers that move you between tiers: foundation depth on rocky vs. sandy strata,
                double-height volumes, stone cladding extent, and interior specification level. Read the
                full breakdown in our <Link to="/architect-fees-ajmer" className="text-amber-800 underline">2026 architect fees &amp; cost guide</Link>.
              </p>
            </div>

            {/* Comparison: turnkey vs labour vs PMC */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Choose Your Contract Model
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Turnkey vs. Labour Contract vs. PMC
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Factor</th>
                      <th className="text-left p-4 font-semibold">Turnkey (Us)</th>
                      <th className="text-left p-4 font-semibold">Labour Contract</th>
                      <th className="text-left p-4 font-semibold">PMC Only</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.feature} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900">{row.feature}</td>
                        <td className="p-4 text-stone-700">{row.turnkey}</td>
                        <td className="p-4 text-stone-700">{row.labour}</td>
                        <td className="p-4 text-stone-700">{row.pmc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Process phases */}
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                The Build Sequence
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Six Phases, One Accountable Team
              </h2>
              <ol className="space-y-3">
                {phases.map((p) => (
                  <li key={p.title} className="flex gap-4 p-5 bg-white border border-stone-200">
                    <span className="font-editorial text-2xl text-amber-800 font-medium shrink-0 w-8">{p.n}</span>
                    <div>
                      <h3 className="font-editorial text-base text-stone-950 font-medium">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-1">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <Hammer className="w-4 h-4" />
                <span>Turnkey Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Turnkey Construction FAQs — Ajmer
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
                  Single-Contract Build
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Build Feasibility Call
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your plot size and location in Ajmer — receive a realistic cost band, soil-test
                  advice and an honest verdict on whether turnkey suits your budget.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Book Feasibility Call</span>
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
                  <Link to="/architect-fees-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>2026 Architect Fees Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/services/structural-design" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Engineering</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/renovation-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Home Renovation Ajmer</span>
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
              One Contract. One Team. Zero Chasing.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Build Your Ajmer Home Without the Headaches
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Tell us your plot and budget — we will tell you the truth about what is buildable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Turnkey Build</span>
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

export default TurnkeyConstructionAjmerPage;

