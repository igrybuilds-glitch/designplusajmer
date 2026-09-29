import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  PhoneCall, 
  Sun, 
  Wind, 
  Flame, 
  Droplets, 
  Mountain, 
  ShieldCheck, 
  Layers, 
  Maximize2, 
  FileCheck2, 
  Building2, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface VastuPageProps {
  onOpenConsultation?: () => void;
}

export function VastuPage({ onOpenConsultation }: VastuPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // The 5 Elemental Quadrants & Heliotropic Microclimate Principles
  const directionalZones = [
    {
      direction: 'Ishanya (North-East)',
      element: 'Water & Ether (Jal / Akasha)',
      icon: Droplets,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
      description: 'The supreme sacred sector of clarity and ambient morning UV light. Reserved for prayer sanctuaries (Puja Ghar), light-filled study libraries, manicured water bodies, or subterranean rainwater sumps. Maintained with minimal structural dead-weight.'
    },
    {
      direction: 'Agni (South-East)',
      element: 'Fire (Tejas)',
      icon: Flame,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'The primordial fire sector. Ideal for modern kitchen layouts where the cooking hob faces East to welcome early sanitizing sunlight. Electrical distributions, solar invertor hubs, and geysers are channeled here, safe from water drainage.'
    },
    {
      direction: 'Nairutya (South-West)',
      element: 'Earth (Prithvi)',
      icon: Mountain,
      color: 'text-stone-800 bg-stone-100 border-stone-300',
      description: 'The quadrant of supreme stability, grounding, and high physical mass. Specially engineered as the Master Bedroom suite. In Rajasthan’s harsh climate, thick masonry walls here act as critical thermal buffers against blistering afternoon solar heat.'
    },
    {
      direction: 'Vayu (North-West)',
      element: 'Air (Vayu)',
      icon: Wind,
      color: 'text-teal-700 bg-teal-50 border-teal-200',
      description: 'The zone of dynamic circulation and movement. Perfectly suited for guest bedrooms, children’s suites, utility pantries, vehicle parking bays, and cross-ventilation shafts that capture Ajmer’s cooling evening desert breezes.'
    },
    {
      direction: 'Brahmasthan (Core Center)',
      element: 'Cosmic Space (Akasha)',
      icon: Sun,
      color: 'text-amber-800 bg-amber-50/80 border-amber-300',
      description: 'The geometric focal hub of the residence. Designed as an open-to-sky central courtyard (Aangan) or double-height circulation foyer. Free of heavy structural columns, this zone drives natural stack-effect cooling throughout the home.'
    }
  ];

  // Common Rajasthan Vastu Dilemmas Solved
  const rajasthanConcerns = [
    {
      title: 'South & West Facing Plots Debunked',
      myth: 'Myth: South-facing plots bring negative energy or financial distress.',
      solution: 'Scientific Reality: Every cardinal direction possesses auspicious entry zones (Padas). In Vedic Vastu, entries placed in Vitatha (South 4th Pada) or Grihakshat provide prosperity. Architecturally, a South-facing plot in Ajmer allows living spaces to be oriented toward serene northern daylight, naturally reducing air-conditioning loads by up to 30%.'
    },
    {
      title: 'Kitchen & Master Bedroom Realignment',
      myth: 'Dilemma: Structural columns or boundary setbacks conflicting with the SE kitchen or SW master suite.',
      solution: 'Integrated Co-Design: We reconcile fire (SE) and earth (SW) zones with local prevailing wind patterns (SW to NE in Ajmer). Fumes never travel through private living quarters, while the heavy SW master suite anchors building structural center-of-mass for superior earthquake stability.'
    },
    {
      title: 'Staircase Placement & Clockwise Ascent',
      myth: 'Dilemma: Heavy staircases in the center or North causing structural imbalance and energetic stagnation.',
      solution: 'Mass Optimization: A staircase represents significant structural dead load. We position staircases along South or West peripheral walls with a strictly clockwise rise. This satisfies Vastu heavy-mass principles while providing a protective thermal barrier against western summer radiation.'
    },
    {
      title: 'Irregular, Narrow & Tapered Urban Plots',
      myth: 'Dilemma: Non-rectangular plots (Gaumukhi, Shermukhi, acute angles) causing anxiety and wasted land.',
      solution: 'Orthogonal Framing: In congested Ajmer localities (Panchsheel, Vaishali, Old City), we carve an exact orthogonal 9x9 Vastu grid within the irregular envelope. The angular offsets are converted into landscaped light wells, ventilation courtyards, or utility buffers without losing usable carpet area.'
    }
  ];

  // Comparison Matrix: Design Plus vs Standalone Consultants
  const comparisonPoints = [
    {
      feature: 'Structural Engineering Integrity',
      standalone: 'Zero engineering literacy. Often demands cutting load-bearing beams or shifting columns, endangering structural safety.',
      designPlus: 'Directed by Er. Sudhir Soni (M.E. Structure, CE, FIV). Every Vastu alignment is co-calculated with IS 456 & IS 1893 seismic column grids.'
    },
    {
      feature: 'Modern Architectural Aesthetics',
      standalone: 'Forces boxy, disconnected rooms, dark corridors, and outdated awkward floor layouts.',
      designPlus: 'Led by Ar. Vipul Verma (B.Arch, M.H.S. Belgium). Clean open-plan living, double-height volumes, and sophisticated biophilic lighting.'
    },
    {
      feature: 'Remediation Methodology',
      standalone: 'Promotes superstition, costly brass spirals, mirrors, or destructive brick-and-mortar demolition.',
      designPlus: 'Non-destructive architectural balancing: functional furniture realignment, elemental zoning, and micro-shifts to non-structural drywall.'
    },
    {
      feature: 'Statutory ADA Municipal Approvals',
      standalone: 'Ignores Ajmer Development Authority (ADA) building bylaws, setback rules, and vehicle parking mandates.',
      designPlus: 'Complete statutory alignment. All plans comply with ADA municipal bylaws, fire setbacks, and FAR regulations.'
    },
    {
      feature: 'Accountability & Coordination',
      standalone: 'Third-party consultant creates conflict between architect and builder; accepts zero legal liability.',
      designPlus: 'Single unified multidisciplinary practice. Architecture, Vastu, and structural engineering under one accountable roof.'
    }
  ];

  const faqs = [
    {
      question: 'Can Vastu principles be followed on a small or narrow plot in Ajmer?',
      answer: 'Yes, absolutely. High-density urban plots (such as 20x45 ft or 25x50 ft in Ajmer localities like Panchsheel or Adarsh Nagar) can achieve exceptional Vastu compliance. Rather than compromising functional room sizes, we apply internal Padavinyasa micro-zoning. By centering an open light-well or skylight over the Brahmasthan and organizing wet areas (toilets) in the neutral Vayu (NW) quadrant, small homes attain energetic balance and abundant natural light.'
    },
    {
      question: 'Does designing a Vastu-compliant house increase construction costs?',
      answer: 'No. When Vastu principles are incorporated from the conceptual drafting stage, they do not add to your construction budget. Because Vastu naturally aligns with passive solar architecture—maximizing morning light in the East and shielding against western solar heat—a Vastu-compliant home reduces long-term electrical cooling bills and eliminates the expensive corrective renovations caused by post-construction consultant opinions.'
    },
    {
      question: 'Do you review and audit existing house plans for Vastu compliance?',
      answer: 'Yes. We offer our Vastu Planning Review service for clients who have existing builder floor plans, unapproved contractor drafts, or newly purchased villas. We run a degree-accurate compass analysis, evaluate room zoning and door placements, and provide practical non-destructive remedies that require zero structural demolition.'
    },
    {
      question: 'Is a South-facing plot considered unlucky or inauspicious according to Vastu Shastra?',
      answer: 'No, this is a widespread misconception. Vedic Vastu texts (Brihat Samhita and Manasara) clearly define auspicious entrance sectors (such as Vitatha and Grihakshat) along the Southern boundary. In Rajasthan’s hot semi-arid climate, a South-facing plot is often advantageous: it allows family living areas, study rooms, and courtyards to face the tranquil, glare-free Northern sky, yielding a dramatically cooler interior.'
    },
    {
      question: 'How does Design Plus balance traditional Vastu with modern minimalist architecture?',
      answer: 'We treat Vastu as a science of spatial heliotropism, airflow, and planetary ergonomics rather than rigid dogma. Ar. Vipul Verma harmonizes ancient spatial mandates with contemporary open-plan layouts, floor-to-ceiling double-glazed windows, cantilevered overhangs, and refined materiality, ensuring your home feels sophisticated, airy, and deeply grounded.'
    },
    {
      question: 'Do you provide structural engineering drawings along with Vastu house plans?',
      answer: 'Yes. This is the hallmark of Design Plus. Unlike standalone Vastu consultants who have no engineering background, our practice is anchored by Er. Sudhir Soni, Chartered Structural Engineer. Every Vastu floor plan is accompanied by computerized STAAD.Pro structural load analysis, IS 456 foundation schedules, and ductile earthquake detailing.'
    }
  ];

  // Schema.org Structured Data
  const vastuServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://designplusajmer.in/vastu#service',
    name: 'Vastu-Compliant House Design & Architectural Planning in Ajmer',
    serviceType: 'Vastu Architectural Design & Floor Plan Audit',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      url: 'https://designplusajmer.in',
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
    description: 'Chartered Vastu architect in Ajmer. Scientific Vastu compliant house design, modern floor plans, and layout audits without compromising structural safety.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Comprehensive Vastu house plan and plan review packages starting from ₹25/sq.ft.'
    }
  };

  const vastuFAQSchema = {
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
    <main id="vastu-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Vastu Architect in Ajmer | Vastu Compliant House Plans"
        description="Chartered Vastu architect in Ajmer. Scientific Vastu compliant house design, modern floor plans, and layout audits without compromising structural safety."
        keywords="vastu compliant house design ajmer, vastu architect ajmer, vastu house plan, vastu floor plan ajmer, vastu audit rajasthan, chartered engineer vastu ajmer"
        canonical="https://designplusajmer.in/vastu"
        schema={[vastuServiceSchema, vastuFAQSchema]}
      />

      {/* 01. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">Vastu Design</span>
        </nav>
      </div>

      {/* 02. EDITORIAL HERO (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-[#C86635]" />
            <span>Scientific Vastu Shastra &amp; Chartered Architecture · Ajmer, Rajasthan</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Vastu-Compliant House Design in Ajmer: Chartered Architectural Planning
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Bridging ancient Vedic orientation principles with modern climate-responsive architecture and certified structural safety. At Design Plus, our Vastu house plans are co-developed by Principal Architect <strong className="text-stone-900 font-semibold">Ar. Vipul Verma</strong> and Chartered Structural Engineer <strong className="text-stone-900 font-semibold">{LEADERSHIP.name}</strong>—delivering harmonious energy flow without ever sacrificing IS-code engineering or contemporary spatial luxury.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Get Vastu-Compliant Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Call Studio: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03. TRUST SIGNALS & SCIENTIFIC PRINCIPLES BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-stone-100 border border-stone-200">
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">100%</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">IS-Code Safety</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Zero structural compromise</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">9x9 Grid</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Padavinyasa Mandala</div>
            <p className="text-[11px] text-stone-500 mt-0.5">True compass triangulation</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-emerald-800 font-bold">2 Modes</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">New Builds &amp; Audits</div>
            <p className="text-[11px] text-stone-500 mt-0.5">For raw plots &amp; floor plans</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">48+</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">5-Star Reviews</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Verified clients across Ajmer</p>
          </div>
        </div>
      </section>

      {/* 04. HERO IMAGE / CONTEXT VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="relative aspect-16/9 md:aspect-21/9 bg-stone-200 overflow-hidden border border-stone-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary Vastu-compliant luxury villa design in Ajmer with sunlit central courtyard"
            width={1800}
            height={770}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-stone-950/90 text-white p-4 max-w-lg backdrop-blur-xs border border-white/10 text-xs space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#C86635]">Scientific Heliotropism</div>
            <p className="text-stone-300">
              Harmonizing the 5 natural elements (Pancha Mahabhuta) with Ajmer’s unique solar path, thermal dynamics, and ductile RCC structural engineering.
            </p>
          </div>
        </div>
      </section>

      {/* 05. WHAT VASTU MEANS AT DESIGN PLUS (SCIENTIFIC PHILOSOPHY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Spatial Philosophy
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            What Vastu-Compliant Design Means at Design Plus
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
            We reject superstition, fear-based marketing, and unscientific charms. In our studio, Vastu Shastra is respected for what it truly is: India’s ancient science of biophilic architecture, solar declination, magnetic alignment, and climatic passive cooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {directionalZones.map((zone) => {
            const Icon = zone.icon;
            return (
              <div 
                key={zone.direction}
                className="p-6 sm:p-8 bg-white border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold border ${zone.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{zone.element}</span>
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl text-stone-950 font-medium">
                    {zone.direction}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* IS-Code Structural Co-Engineering Card */}
          <div className="p-6 sm:p-8 bg-stone-900 text-stone-100 border border-stone-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-semibold border text-amber-300 bg-stone-800 border-amber-500/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>IS 456 &amp; IS 1893</span>
                </span>
              </div>
              <h3 className="font-editorial text-xl text-white font-medium">
                Zero Structural Compromise
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Unlike uncertified consultants who prescribe breaking columns or puncturing beams, our chartered engineers align column grids concurrently with Vastu symmetry. You obtain total energetic harmony without compromising earthquake resilience.
              </p>
            </div>
            <div className="pt-4 border-t border-stone-800 text-[11px] font-mono text-stone-400">
              Dual Oversight: Architecture + Engineering
            </div>
          </div>
        </div>
      </section>

      {/* 06. TWO SERVICE MODES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Engagement Pathways
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Two Ways to Commission Vastu Architectural Services
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Whether starting with a vacant plot or seeking professional verification for an existing layout, we provide clear, rigorous commissioning options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MODE A */}
          <div className="p-8 sm:p-10 bg-white border border-stone-200 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 bg-stone-100 text-stone-700 border border-stone-200 font-semibold">
                  Mode 01 · Verification &amp; Remediation
                </span>
                <span className="font-mono text-xs text-stone-400">Existing Plans</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium leading-snug">
                Vastu Audit &amp; Plan Review
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ideal for homeowners who have purchased a builder floor, received drafts from an independent contractor, or possess blueprints requiring expert appraisal before commencing excavation.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Compass Degree Audit:</strong> Exact satellite-verified orientation analysis down to the true degree of declination.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Brahmasthan &amp; Pada Inspection:</strong> Checking core clearance, entrance Padas, kitchen, and sanitary zoning.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Non-Destructive Solutions:</strong> Micro-shifting partitions, door swings, and furniture without touching RCC columns.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Itemized Audit Report:</strong> Comprehensive 12-point evaluation scorecard with redline CAD overlay.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Review Deliverable</span>
                <span className="text-sm font-semibold text-stone-900">Annotated CAD + Remediation PDF</span>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-[#C86635] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <span>Commission Plan Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MODE B */}
          <div className="p-8 sm:p-10 bg-white border-2 border-stone-950 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 bg-stone-950 text-white font-semibold">
                  Mode 02 · Turnkey Architecture
                </span>
                <span className="font-mono text-xs text-[#C86635] font-semibold">Raw Plots &amp; Villas</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium leading-snug">
                Vastu-Integrated New Build Design
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                A seamless, holistic design experience from bare earth to final construction. We sculpt your custom villa, bungalow, or commercial building around sacred geometries, luxury aesthetics, and structural physics.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Site Topography &amp; Sun-Path:</strong> Micro-climate modeling tailored to Ajmer’s dry desert daylight cycle.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Custom Architectural Blueprints:</strong> Vastu-zoned master suites, light-wells, puja sanctuaries, and modern open living.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Full Structural Engineering:</strong> IS 456 ductile reinforcement schedules and STAAD.Pro column-beam layouts.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>3D Luxury Elevations &amp; ADA Drawings:</strong> Complete municipal sanction drawings for hassle-free approvals.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Full Blueprint Package</span>
                <span className="text-sm font-semibold text-stone-900">Architecture + Structure + Vastu</span>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <span>Start Custom House Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 07. COMMON RAJASTHAN VASTU CONCERNS ADDRESSED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Regional Context
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Solving Common Vastu Dilemmas for Rajasthan Plots
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            From plot orientations in urban subdivisions to narrow city alleys, we address real-world geographic constraints with engineering intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {rajasthanConcerns.map((item) => (
            <div key={item.title} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-4">
              <h3 className="font-editorial text-xl text-stone-950 font-medium">
                {item.title}
              </h3>
              <div className="p-3 bg-stone-50 border-l-2 border-stone-400 text-xs text-stone-600 italic">
                {item.myth}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 08. WHY CHARTERED VASTU INTEGRATION BEATS STANDALONE CONSULTANTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-6 sm:p-12 border border-stone-800">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
              The Professional Advantage
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Why Chartered Vastu Integration Beats Standalone Consultants
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              When you hire a standalone Vastu practitioner, you create a costly triangle of conflict between the consultant, the architect, and the contractor. Here is why choosing a licensed architecture and structural studio protects both your peace of mind and your capital.
            </p>
          </div>

          <div className="space-y-4">
            {comparisonPoints.map((pt) => (
              <div 
                key={pt.feature}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 sm:p-6 bg-stone-900/70 border border-stone-800 text-xs sm:text-sm items-start"
              >
                <div className="lg:col-span-3 font-mono font-bold text-amber-400 text-xs uppercase tracking-wider">
                  {pt.feature}
                </div>
                <div className="lg:col-span-4 text-stone-400 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-red-400 font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Standalone Consultant</span>
                  </div>
                  <p className="leading-relaxed">{pt.standalone}</p>
                </div>
                <div className="lg:col-span-5 text-stone-100 space-y-1">
                  <div className="text-[10px] font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Design Plus Studio</span>
                  </div>
                  <p className="leading-relaxed text-stone-200">{pt.designPlus}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Direct consultation with <strong className="text-white">Ar. Vipul Verma</strong> &amp; <strong className="text-white">{LEADERSHIP.name}</strong>.
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Book Studio Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 09. SEO-OPTIMIZED FAQ SECTION (High-Intent Search Queries) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Vastu-Compliant House Planning &amp; Architecture
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Answers to common questions regarding plot facings, cost implications, plan audits, and structural safety.
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

      {/* 10. FINAL CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Scientific Spatial Alignment
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Ready to Design Your Vastu-Compliant Sanctuary?
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Bring your plot dimensions or existing blueprints to our Rajeev Marg, Panchsheel Nagar studio. Experience the peace of mind that comes from certified architecture, complete Vastu harmony, and chartered structural engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Get Vastu-Compliant Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/structural-drawing-ajmer"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Structural Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Related guides &amp; services — internal SEO links */}
        <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/blog/vaastu-compliant-home-plans-ajmer/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Vaastu-compliant home plans guide
                </Link>
              </li>
              <li>
                <Link to="/services/residential-architecture/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Residential architecture in Ajmer
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

export default VastuPage;
