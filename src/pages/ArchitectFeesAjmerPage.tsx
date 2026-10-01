import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  PhoneCall, 
  Compass, 
  Scale, 
  Building2, 
  Home, 
  Layers,
  HelpCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface ArchitectFeesAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function ArchitectFeesAjmerPage({ onOpenConsultation }: ArchitectFeesAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingModels = [
    {
      title: 'Per Square Foot (Sq.Ft.) Rate',
      range: '₹35 – ₹85 / sq.ft.',
      idealFor: 'Residential villas, bungalows, and independent houses with defined built-up area.',
      description: 'The most popular and predictable fee model in Rajasthan. Fees scale directly with your total proposed built-up square footage across all floors.',
      inclusions: [
        '2D Architectural Floor Plans & Furniture Layouts',
        '3D Exterior Front Elevation Modeling',
        'Chartered Structural RCC Engineering Blueprints',
        'Statutory ADA Sanction Drawings'
      ]
    },
    {
      title: 'Percentage of Construction Cost',
      range: '4% – 7% of Total Cost',
      idealFor: 'Turnkey projects, luxury estates, and commercial developments with comprehensive site PMC.',
      description: 'The standard Council of Architecture (COA) benchmark. Fees reflect total material + civil labor cost, aligning studio incentives with meticulous execution.',
      inclusions: [
        'Complete End-to-End Architectural Direction',
        'Bill of Quantities (BOQ) & Contractor Tendering',
        'Periodic On-Site Chartered Engineering Audits',
        'Interior Joinery & MEP Reticulation Design'
      ]
    },
    {
      title: 'Fixed Lump-Sum Milestone Package',
      range: 'Custom Structured Fee',
      idealFor: 'Plot feasibility, floor plan revisions, standalone structural audits, or elevation redesigns.',
      description: 'Fixed pricing tailored to specific bounded scopes. Ideal for clients who already have civil contractors and only require specialized chartered drawings.',
      inclusions: [
        'Defined Deliverables Milestone Schedule',
        'Fixed Fee with Zero Scope Creep',
        'Direct Video / Studio Consultations',
        'Chartered Stability Audit Certification'
      ]
    }
  ];

  const typologyRates = [
    {
      typology: 'Bespoke Residential Villas & Haveli Homes',
      rate: '₹40 – ₹85 / sq.ft.',
      percentage: '4.5% – 6.5%',
      deliverables: 'Passive courtyard layout, solar orientation, 3D elevations, RCC schedules, electrical/plumbing conduits, ADA filing set.'
    },
    {
      typology: 'Commercial Plazas & High-Street Retail',
      rate: '₹35 – ₹70 / sq.ft.',
      percentage: '3.5% – 5.5%',
      deliverables: 'High-visibility facades, large-span column grids, egress circulation, parking byelaws, fire NOC coordination.'
    },
    {
      typology: 'Interior Architecture & Bespoke Joinery',
      rate: '₹50 – ₹120 / sq.ft.',
      percentage: '6.0% – 10.0%',
      deliverables: 'Reflected ceiling plans, 2700K lighting design, custom teak millwork, marble palette schedules, vendor coordination.'
    },
    {
      typology: 'Chartered Structural Engineering (Standalone)',
      rate: '₹12 – ₹25 / sq.ft.',
      percentage: '1.0% – 1.8%',
      deliverables: 'STAAD.Pro 3D finite element modeling, foundation design tailored to SBC soil tests, bar bending schedules (BBS), stability certificate.'
    }
  ];

  const costFactors = [
    {
      title: 'Scope of Deliverables',
      detail: 'A basic municipal blueprint costs substantially less than a comprehensive working set with electrical layouts, plumbing schematics, joinery details, and structural steel reinforcement schedules.'
    },
    {
      title: 'Structural Geometry & Soil Mechanics',
      detail: 'Building on hard metamorphic schist in Civil Lines requires different engineering than loose sandy loam or lake-proximate high-water tables near Ana Sagar, affecting foundation calculations.'
    },
    {
      title: 'Site Supervision Frequency',
      detail: 'Pure drafting consultancy involves office-based reviews, whereas full Project Management Consultancy (PMC) includes daily on-site rebar inspections, pour supervision, and contractor billing audits.'
    },
    {
      title: 'Material & Craft Specialization',
      detail: 'Integrating hand-carved Dholpur sandstone, double-height cantilevered slabs, and passive thermal courtyards demands deeper architectural modeling than repetitive rectangular construction.'
    }
  ];

  const faqs = [
    {
      question: 'How much does an architect charge in Ajmer for house planning?',
      answer: 'In Ajmer, architectural fees for residential house planning typically range between ₹35 and ₹85 per square foot of built-up area for comprehensive design (including 2D floor plans, 3D elevation, structural RCC framing, and municipal sanction drawings). For a standard 2,000 sq.ft. residence, total architectural design fees generally range from ₹70,000 to ₹1,70,000 depending on complexity.'
    },
    {
      question: 'What is typically included in an architectural fee package in Ajmer?',
      answer: 'At Design Plus, a comprehensive architectural package includes: (1) Cardinal site orientation & Vastu zoning, (2) Dimensioned 2D working floor plans, (3) Photorealistic 3D exterior front and side elevations, (4) Chartered Structural Engineering drawings (column, beam, and slab reinforcement), (5) Electrical, plumbing, and drainage layouts, and (6) Official Ajmer Development Authority (ADA) sanction submission blueprints.'
    },
    {
      question: 'Do architectural fees include municipal approval (ADA) sanction drawings?',
      answer: 'Yes. At Design Plus, municipal building approval drawings conforming to Ajmer Development Authority (ADA) byelaws, setback regulations, and ground coverage ratios are integrated directly into our core architectural deliverables package.'
    },
    {
      question: 'Is structural engineering charged separately from architectural design?',
      answer: 'With typical design studios, structural calculations must be outsourced to a third-party engineer at extra cost. At Design Plus, Chartered Structural Engineering is directed in-house by Er. Sudhir Soni (M.E. Structure, FIV), meaning your architectural geometry and structural engineering are unified seamlessly in a single comprehensive fee.'
    },
    {
      question: 'Why should I hire an architect instead of taking a "free plan" from a contractor?',
      answer: 'Contractors offering "free plans" often lack structural engineering qualifications. Without mathematical load modeling, contractors routinely over-design steel and concrete to compensate for uncertainty—wasting ₹2,00,000 to ₹5,00,000 in excess materials—or under-design, creating permanent deflection and cracking risks. Professional architectural planning saves far more in construction efficiency and resale value than its fee.'
    },
    {
      question: 'When are architectural fee payments made during the project lifecycle?',
      answer: 'Fees are divided into clear, milestone-linked installments: typically 20% on concept confirmation, 30% upon approval of 2D floor plans & 3D elevations, 30% upon delivery of structural execution drawings, and the final 20% upon delivery of the comprehensive working drawing package and statutory files.'
    }
  ];

  // Schema.org Structured Data
  const feesArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://designplusajmer.co.in/architect-fees-ajmer#article',
    headline: 'Architect Fees in Ajmer: Complete 2025 Cost & Pricing Guide',
    description: 'Transparent architect fees in Ajmer guide. Compare per-sqft rates, percentage models, and structural costs for residential villas and commercial spaces.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: {
      '@type': 'Person',
      name: 'Ar. Vipul Verma',
      jobTitle: 'Principal Architect',
      url: 'https://designplusajmer.co.in/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://designplusajmer.co.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://designplusajmer.co.in/logo.png'
      }
    },
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    mainEntityOfPage: 'https://designplusajmer.co.in/architect-fees-ajmer'
  };

  const feesFAQSchema = {
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
    <main id="architect-fees-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Architect Fees in Ajmer (2026 Guide) | Design Plus"
        description="Transparent architect fees in Ajmer guide. Compare per-sqft rates, percentage models, and structural costs for residential villas and commercial spaces."
        keywords="architect fees in ajmer, how much does an architect charge in ajmer, architect cost per sq ft ajmer, house planning charges ajmer, architectural fees rajasthan, chartered engineer rates ajmer"
        canonical="https://designplusajmer.co.in/architect-fees-ajmer"
        schema={[feesArticleSchema, feesFAQSchema]}
      />

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Architect Fees in Ajmer</span>
        </nav>
      </div>

      {/* HERO SECTION (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-amber-800" />
            <span>Transparent Architectural Pricing · Rajasthan 2025 Guide</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Architect Fees in Ajmer: Transparent Pricing &amp; Cost Guide
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            A definitive, transparent breakdown of architectural fees, per-square-foot rates, percentage models, and chartered structural engineering costs for residential villas and commercial complexes in Ajmer and central Rajasthan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Get Detailed Fee Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Discuss Scope: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* THREE PRIMARY FEE STRUCTURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Pricing Models Explained
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            The 3 Standard Architectural Fee Models in India
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Professional architecture practices structure compensation based on project scale, risk, and technical involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pricingModels.map((model) => (
            <div 
              key={model.title}
              className="p-6 sm:p-8 bg-white border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-amber-800 font-semibold">
                  Standard Model
                </div>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  {model.title}
                </h3>
                <div className="font-mono text-xl font-bold text-stone-900 bg-stone-50 p-3 border border-stone-200">
                  {model.range}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {model.description}
                </p>
                <div className="text-[11px] font-mono text-stone-500">
                  <strong>Best suited for:</strong> {model.idealFor}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-100 mt-6 space-y-2">
                <div className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                  Typical Inclusions:
                </div>
                <ul className="text-xs text-stone-700 space-y-1.5">
                  {model.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-2">
                      <span className="text-[#C86635] font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RATES BY PROJECT TYPOLOGY TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Typology Breakdown
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Architect Fees by Building Typology in Ajmer
          </h2>
        </div>

        <div className="overflow-x-auto border border-stone-200 bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4 sm:p-5">Building Typology</th>
                <th className="p-4 sm:p-5">Per Sq.Ft. Range</th>
                <th className="p-4 sm:p-5 hidden sm:table-cell">% Cost Model</th>
                <th className="p-4 sm:p-5">Key Architectural Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
              {typologyRates.map((t) => (
                <tr key={t.typology} className="hover:bg-stone-50/70 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-stone-950">
                    {t.typology}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-amber-900 font-semibold whitespace-nowrap">
                    {t.rate}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-stone-600 hidden sm:table-cell whitespace-nowrap">
                    {t.percentage}
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-stone-600">
                    {t.deliverables}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-500 font-mono mt-3">
          * Note: Indicative rates based on central Rajasthan market benchmarks (Ajmer, Jaipur, Pushkar). Exact quotations depend on site topography, soil conditions, and specific deliverable requirements.
        </p>
      </section>

      {/* WHAT INFLUENCES ARCHITECT FEES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-8 sm:p-14 border border-stone-800">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
              Cost Variables
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              4 Primary Factors That Determine Your Architectural Fee
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              No two plots in Ajmer are identical. Our studio assesses multiple technical variables before issuing a formal engagement proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {costFactors.map((factor, idx) => (
              <div key={factor.title} className="p-6 bg-stone-900/60 border border-stone-800 space-y-2">
                <div className="text-amber-500 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial text-xl text-white font-medium">
                  {factor.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {factor.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECT VS CONTRACTOR COST COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Financial Reality Check
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Architect Fees vs. Contractor "Free Blueprints": The Real Cost Comparison
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 bg-red-50/40 border border-red-200 space-y-4">
            <div className="flex items-center gap-2 text-red-800 font-mono text-xs uppercase tracking-wider font-bold">
              <span>The "Free Plan" Contractor Route</span>
            </div>
            <h3 className="font-editorial text-2xl text-stone-950 font-medium">
              Hidden Costs &amp; Permanent Structural Liabilities
            </h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span><strong>Unchecked Over-Reinforcement:</strong> Lacking mathematical calculations, contractors over-order steel by 15%–20%, costing ₹1,50,000 to ₹3,50,000 in unnecessary steel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span><strong>No Climate Orientation:</strong> Rooms lack solar path optimization, leading to perpetually hot west-facing bedrooms and lifelong high electricity bills.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold shrink-0">✕</span>
                <span><strong>Zero Municipal Sanction Guarantee:</strong> Un-engineered layouts frequently violate ADA setbacks, leading to municipal demolition notices or costly penalties.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-emerald-50/40 border border-emerald-200 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs uppercase tracking-wider font-bold">
              <span>The Chartered Architect Route (Design Plus)</span>
            </div>
            <h3 className="font-editorial text-2xl text-stone-950 font-medium">
              Engineered Efficiency &amp; 20%+ Resale Premium
            </h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold shrink-0">✓</span>
                <span><strong>Mathematically Optimized RCC:</strong> Er. Sudhir Soni’s finite element calculations ensure optimum steel placement—saving far more than our fee in concrete and rebar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold shrink-0">✓</span>
                <span><strong>Passive Cooling Courtyards:</strong> Intelligent room zoning, cross-ventilation, and stone thermal mass reduce AC power demand by up to 30%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold shrink-0">✓</span>
                <span><strong>100% ADA Sanction Record:</strong> Fully compliant municipal blueprints with official Chartered Structural Stability Certification.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY DESIGN PLUS FEES DELIVER VALUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="p-8 sm:p-12 bg-white border border-stone-200 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635] font-semibold">
              The Design Plus Standard
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
              Why Design Plus Architectural Fees Deliver Maximum Return
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Unlike single-discipline drafting shops, Design Plus unites Chartered Structural Engineering rigor with refined spatial architecture under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-stone-100">
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">20+ Years</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Chartered Practice</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Led by Er. Sudhir Soni (FIV, Chartered Engineer), guaranteeing legal stability across Rajasthan.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Zero Failures</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">IS 456 Structural Integrity</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                900+ executed structures without a single structural failure, crack dispute, or subgrade settlement.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Single Source</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Architecture + Structure</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Zero friction between designer and engineer. All elevation openings are structurally validated in-house.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Transparent</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Milestone Linked</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Clear contract deliverables. Payments are linked to verified drawing releases with zero hidden extras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-OPTIMIZED FAQ SECTION (Long-Tail Search Intent) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Common Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Frequently Asked Questions on Architect Fees in Ajmer
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Clear answers to help you budget for architectural and structural engineering services in central Rajasthan.
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

      {/* FINAL CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Accurate Plot-Specific Quotation
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Request a Formal Fee Proposal for Your Plot
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Share your plot dimensions, sector/colony in Ajmer, and intended floor requirements. Our team will prepare a transparent, itemized architectural proposal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Get Fee Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Explore Disciplines</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Related guides &amp; services — internal SEO links */}
        <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/blog/cost-of-building-a-house-in-ajmer-2026/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  House construction cost in Ajmer (2026 guide)
                </Link>
              </li>
              <li>
                <Link to="/blog/interior-design-cost-per-sqft-ajmer/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Interior design cost per sq ft in Ajmer
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
