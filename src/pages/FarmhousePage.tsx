import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TreePine, 
  Droplets, 
  Sun, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  PhoneCall, 
  Compass, 
  Maximize2, 
  Building2, 
  Home, 
  Wrench, 
  Sparkles,
  Zap,
  MapPin,
  Fence,
  Mountain
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface FarmhousePageProps {
  onOpenConsultation?: () => void;
}

export function FarmhousePage({ onOpenConsultation }: FarmhousePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Estate Master Planning Components
  const estatePillars = [
    {
      title: 'Landscape & Master Planning',
      icon: TreePine,
      description: 'Zoning the property into private residential sanctuaries, working organic orchards (Amla, Ber, Guava, Date palms), landscaped gardens, peripheral windbreaks, and scenic walking trails.'
    },
    {
      title: 'Water Bodies & Stepwells (Baori)',
      icon: Droplets,
      description: 'Integrating vernacular water bodies, biophilic infinity plunge pools, lotus ponds, and stepped reflection tanks that provide micro-climate evaporative cooling to adjacent verandahs.'
    },
    {
      title: 'Detached Guest Pavilions & Verandahs',
      icon: Home,
      description: 'Designing semi-open pavilions (Baradaris), shaded Otas, outdoor fire pits, and standalone guest suites offering visiting family complete privacy while framing views of the Aravalli hills.'
    },
    {
      title: 'Staff Quarters & Service Hubs',
      icon: Building2,
      description: 'Strategically positioned caretaker residences, driver dormitories, tractor and agricultural implement sheds, and separate service delivery lanes ensuring the main estate remains pristine.'
    },
    {
      title: 'Equestrian Stables & Farm Outbuildings',
      icon: Fence,
      description: 'Custom-designed horse stables, dairy shelters, hydroponic poly-houses, apiaries, and composting yards engineered for effortless maintenance, hygiene, and natural ventilation.'
    },
    {
      title: 'Chartered Structural Frameworks',
      icon: Layers,
      description: 'Large-span column-free living halls, expansive cantilevered stone verandahs, and double-height glass facades calculated under IS 456 concrete and IS 800 steel specifications.'
    }
  ];

  // Rajasthan Climate & Off-Grid Technical Considerations
  const climateSolutions = [
    {
      title: 'Arid Passive Cooling & Thermal Mass',
      icon: Sun,
      description: 'Harnessing traditional courtyard (Haveli Aangan) micro-climates, double-skinned stone cavity walls (using locally quarried Dholpur or Jodhpur sandstone), deep shading Jharokhas, and high-performance cross-ventilation shafts that lower interior temperatures by 6°C to 10°C without mechanical air conditioning.'
    },
    {
      title: 'Water Autonomy: Rainwater & Tankas',
      icon: Droplets,
      description: 'Rajasthan rural estates require self-sufficiency. We engineer multi-stage groundwater filtration, dedicated borewell management, underground reinforced rainwater storage reservoirs (Tankas) exceeding 100,000 liters, and bio-swales that recharge dry aquifers.'
    },
    {
      title: 'Off-Grid Solar Power & Battery Storage',
      icon: Zap,
      description: 'Complete energy independence through ground-mounted and rooftop Solar PV arrays, hybrid battery energy storage systems (BESS), solar-powered agricultural borewell pumps, and automated silent diesel genset integration for seamless continuous power.'
    },
    {
      title: 'Eco Sanitation & Phytorid STP Systems',
      icon: Layers,
      description: 'Zero municipal dependence. We implement engineered dual-chamber septic systems and root-zone phytorid reed-bed Sewage Treatment Plants (STP) that purify 100% of estate greywater and blackwater for automated drip irrigation across orchards and lawns.'
    },
    {
      title: 'Perimeter Security & Gated Access',
      icon: ShieldCheck,
      description: 'Reinforced masonry boundary walls with stone coping, dense thorny biological fencing (Bougainvillea and Karonda), motorized entry gates, solar-powered CCTV conduit perimeters, and guardhouses with unobstructed sightlines.'
    },
    {
      title: 'Soil Adaptation & Aravalli Foundation Detailing',
      icon: Mountain,
      description: 'From rocky outcrops in Pushkar and Foy Sagar to sandy loam across Srinagar and Nasirabad highway, our chartered structural engineers design customized isolated or raft foundations to prevent differential settlement and foundation cracks.'
    }
  ];

  // Contractor vs Chartered Studio Comparison
  const contractorComparison = [
    {
      dimension: 'Structural Safety & Spans',
      contractor: 'Relies on unscientific thumb-rules. Incapable of calculating 25-foot open living spans, resulting in sagging beams, bulky columns, and ceiling cracks.',
      studio: 'Engineered by Er. Sudhir Soni (M.E. Structure, CE, FIV). Computerized STAAD.Pro finite element analysis enables dramatic column-free glass vistas and cantilevered verandahs.'
    },
    {
      dimension: 'Climate & Thermal Comfort',
      contractor: 'Builds thin 9-inch brick boxes with unshaded windows that turn into solar ovens under peak 46°C Rajasthan summer heat.',
      studio: 'Contextual bioclimatic architecture by Ar. Vipul Verma. Deep verandahs, thermal mass walls, and orientation shielding reduce summer HVAC cooling costs by up to 40%.'
    },
    {
      dimension: 'Statutory Byelaws & 90-A Conversion',
      contractor: 'Zero understanding of Rajasthan Tenancy Act Section 90-A, agricultural land limits, or ADA building setback bylaws, risking demolition notices.',
      studio: 'Full statutory navigation. We guide land-use conversion feasibility, municipal ADA approvals, and environmental compliance from inception.'
    },
    {
      dimension: 'Off-Grid Utilities & MEP Engineering',
      contractor: 'Ad-hoc plumbing and wiring. Raw sewage dumping, erratic water pressure, and inadequate electrical load balancing.',
      studio: 'Integrated MEP coordination by licensed building engineers: solar microgrids, zero-discharge phytorid STPs, and hydro-pneumatic pressurized water networks.'
    }
  ];

  const faqs = [
    {
      question: 'What is the cost of building a luxury farmhouse near Ajmer or Pushkar?',
      answer: 'The construction cost for a high-end farmhouse in the Ajmer-Pushkar region typically ranges from ₹2,200 to ₹3,800 per square foot of built-up area for the main villa, depending on the choice of indigenous natural stone (Jodhpur, Dholpur, Makrana marble), double-glazing, and interior detailing. In addition, rural estate development—including perimeter boundary walls, borewell drilling, rainwater Tanka, solar microgrid, landscaping, and driveway paving—typically represents ₹25 to ₹60 lakhs depending on land acreage.'
    },
    {
      question: 'What permissions and land conversion are needed for farmhouse construction in Rajasthan?',
      answer: 'Under the Rajasthan Tenancy Act and state revenue regulations, residential farmhouses on agricultural land are subject to specific built-up limits (typically up to 500 sq. meters or 10% of total agricultural holding for bona fide agricultural use without commercial conversion). For larger private estates, resorts, or second homes, land-use conversion under Section 90-A through the Ajmer Development Authority (ADA) or District Collector is required. Design Plus prepares all architectural layout plans, structural stability certificates, and setback drawings required for statutory approval.'
    },
    {
      question: 'How much land is typically needed to develop a private farmhouse estate?',
      answer: 'While a compact leisure weekend villa can be comfortably built on a 1/2-acre (approx. 2,000 to 2,400 sq. yards) parcel, a true self-sustaining farmhouse estate with an organic orchard, guest pavilion, swimming pool, staff quarters, and dedicated solar yard generally requires between 1 to 5 acres (approx. 4,000 to 20,000 sq. meters). We customize the master plan to the exact contours and boundary geometries of your land.'
    },
    {
      question: 'Can you design a farmhouse on agricultural land in Rajasthan?',
      answer: 'Yes. We routinely design bespoke farmhouses on agricultural holdings across Ajmer, Pushkar, Kishangarh, and Bhilwara. We ensure the footprint strictly complies with Rajasthan state agricultural land guidelines, or navigate Section 90-A conversion where a larger built footprint, swimming pool, or commercial eco-tourism resort status is desired.'
    },
    {
      question: 'How do you handle water scarcity and electrical outages in remote rural locations?',
      answer: 'We engineer complete off-grid autonomy from Day 1. For water, we conduct geological hydro-surveys to locate optimal borewell sites, install multi-stage sand filters, and build massive underground rainwater harvesting tanks (Tankas). For power, we design grid-tied or hybrid Solar PV arrays with lithium battery backups and automated emergency generator transfer switches, guaranteeing uninterrupted comfort regardless of rural grid load-shedding.'
    },
    {
      question: 'How long does it take from initial architectural design to handover of a farmhouse?',
      answer: 'A comprehensive farmhouse master plan—including topographic survey, architectural blueprints, 3D renderings, and structural engineering—is completed in 6 to 10 weeks. Physical on-site construction of a luxury rural estate in the Ajmer region typically requires 10 to 16 months, depending on the scale of landscaping, water bodies, and custom masonry detailing.'
    }
  ];

  // Schema.org Structured Data
  const farmhouseServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.designplusajmer.co.in/farmhouse#service',
    name: 'Luxury Farmhouse Design & Estate Architecture in Ajmer',
    serviceType: 'Farmhouse Architecture, Master Planning & Rural Estate Engineering',
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
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Bhilwara' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' }
    ],
    description: 'Bespoke farmhouse design in Ajmer & Rajasthan. Luxury estate master planning, passive cooling, off-grid water autonomy, and chartered structural engineering.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      description: 'Comprehensive rural estate master planning and architectural engineering packages starting from ₹35/sq.ft.'
    }
  };

  const farmhouseFAQSchema = {
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
    <main id="farmhouse-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Farmhouse Design in Ajmer | Luxury Farmhouse Architect"
        description="Bespoke farmhouse design in Ajmer & Rajasthan. Luxury estate master planning, passive cooling, off-grid water autonomy, and chartered structural engineering."
        keywords="farmhouse design ajmer, farmhouse architect rajasthan, luxury farmhouse plans, pushkar farmhouse design, rural estate architect ajmer, agricultural land farmhouse rajasthan"
        canonical="https://www.designplusajmer.co.in/farmhouse"
        schema={[farmhouseServiceSchema, farmhouseFAQSchema]}
      />

      {/* 01. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">Farmhouse Design</span>
        </nav>
      </div>

      {/* 02. EDITORIAL HERO (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <TreePine className="w-3.5 h-3.5 text-[#C86635]" />
            <span>Rural Estate Master Planning · Ajmer, Pushkar &amp; Rajasthan</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Farmhouse Design in Ajmer: Luxury Rural Estates &amp; Architecture
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            A luxury farmhouse is not merely an oversized suburban villa transplanted to the countryside—it is a self-sustaining ecological retreat. Directed by Principal Architect <strong className="text-stone-900 font-semibold">Ar. Vipul Verma</strong> and Chartered Structural Engineer <strong className="text-stone-900 font-semibold">{LEADERSHIP.name}</strong>, our studio conceptualizes holistic rural estates integrating passive cooling courtyards, organic orchards, off-grid water autonomy, and certified structural stability across the Aravalli landscapes of Rajasthan.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Design My Farmhouse</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <Compass className="w-4 h-4 text-stone-600" />
              <span>Book Site Visit &amp; Feasibility</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-stone-950 text-xs font-mono font-medium transition-colors min-h-[44px] px-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C86635]" />
              <span>Direct Line: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03. TRUST SIGNALS & ESTATE BENCHMARKS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-stone-100 border border-stone-200">
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">100,000L+</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Water Storage</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Engineered Rainwater Tankas</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">100%</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Off-Grid Ready</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Solar PV &amp; Phytorid STP</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-emerald-800 font-bold">35+ Years</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Chartered Rigor</div>
            <p className="text-[11px] text-stone-500 mt-0.5">M.E. Structural Engineering</p>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-4xl text-stone-950 font-bold">Pushkar &amp; Ajmer</div>
            <div className="text-[11px] sm:text-xs font-mono text-stone-600 uppercase tracking-wider mt-1">Regional Terrains</div>
            <p className="text-[11px] text-stone-500 mt-0.5">Aravalli Foothill Specialists</p>
          </div>
        </div>
      </section>

      {/* 04. HERO VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="relative aspect-16/9 md:aspect-21/9 bg-stone-200 overflow-hidden border border-stone-200 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85"
            alt="Luxury contemporary farmhouse estate designed in Rajasthan with stone colonnades and landscaped water pool"
            width={1800}
            height={770}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-stone-950/90 text-white p-4 max-w-lg backdrop-blur-xs border border-white/10 text-xs space-y-1">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#C86635]">Holistic Estate Master Planning</div>
            <p className="text-stone-300">
              Harmonizing private residential sanctuaries with organic orchards, detached guest pavilions, passive cooling water courtyards, and equestrian facilities.
            </p>
          </div>
        </div>
      </section>

      {/* 05. WHAT FARMHOUSE DESIGN MEANS AT DESIGN PLUS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Comprehensive Estate Scope
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Beyond a Villa: What Farmhouse Design Means at Design Plus
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
            In our practice, a farmhouse is a harmonious master-planned ecosystem. We orchestrate the entire acreage—integrating agriculture, micro-climate orientation, social entertainment, and private quarters into a cohesive architectural sanctuary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {estatePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="p-6 sm:p-8 bg-white border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900">
                      <Icon className="w-5 h-5 text-[#C86635]" />
                    </div>
                    <span className="font-mono text-xs text-stone-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-editorial text-xl text-stone-950 font-medium">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 06. RAJASTHAN CLIMATIC & OFF-GRID CONSIDERATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-6 sm:p-12 border border-stone-800">
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
              Contextual Engineering
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Rural Engineering for Rajasthan’s Arid Realities
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Designing in rural Ajmer, Pushkar, and surrounding semi-arid zones requires rigorous infrastructure planning. We solve the severe challenges of 46°C summer heat, seasonal water scarcity, and remote grid instability with engineered autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div key={sol.title} className="p-6 bg-stone-900/70 border border-stone-800 space-y-3">
                  <div className="w-9 h-9 bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-editorial text-lg text-white font-medium">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {sol.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07. TWO COMMISSIONING MODES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Engagement Pathways
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Two Ways to Commission Your Farmhouse Project
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            From pristine agricultural land to heritage country retreats needing rebirth, we provide structured architectural pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* MODE 01 */}
          <div className="p-8 sm:p-10 bg-white border-2 border-stone-950 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 bg-stone-950 text-white font-semibold">
                  Mode 01 · Raw Acreage
                </span>
                <span className="font-mono text-xs text-[#C86635] font-semibold">Ground-Up Build</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium leading-snug">
                Ground-Up Farmhouse Estate Master Planning
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Ideal for clients acquiring 1 to 10+ acres of agricultural or rural land across Ajmer, Pushkar valley, Foy Sagar, or Jaipur Highway. We develop the full vision from contour surveying to turnkey habitation.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Total Site Zoning:</strong> Boundary fencing, solar farm positioning, vehicular drop-offs, and orchard allocations.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Architectural Blueprints:</strong> Main villa, guest cottages, outdoor kitchens, shaded verandahs, and pool decks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Chartered Structural Engineering:</strong> Heavy-duty foundation calculations for rocky or sandy soil conditions under IS 456.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Full Off-Grid MEP Drawings:</strong> Rainwater Tanka detailing, solar invertor room, and phytorid STP layouts.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Deliverables</span>
                <span className="text-sm font-semibold text-stone-900">Complete Master Blueprint Package</span>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <span>Commission Master Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MODE 02 */}
          <div className="p-8 sm:p-10 bg-white border border-stone-200 flex flex-col justify-between space-y-6 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest px-3 py-1 bg-stone-100 text-stone-700 border border-stone-200 font-semibold">
                  Mode 02 · Existing Properties
                </span>
                <span className="font-mono text-xs text-stone-400">Renovation &amp; Extension</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium leading-snug">
                Farmhouse Renovation &amp; Estate Extension
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Designed for property owners who have an existing rural house, legacy ancestral farmhouse, or partially constructed shell that suffers from poor ventilation, thermal overheating, or outdated amenities.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Structural Stability Audit:</strong> On-site inspection by Er. Sudhir Soni to assess existing foundation and load-bearing walls.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Thermal Envelope Upgrades:</strong> Adding shaded deep verandahs, insulated roof overlays, and high-performance windows.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Lifestyle Modernization:</strong> Retrofitting plunge pools, modern modular kitchens, luxury bathrooms, and barbecue decks.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Off-Grid Utility Modernization:</strong> Replacing failed septic tanks with eco-friendly STPs and installing solar backup.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Deliverables</span>
                <span className="text-sm font-semibold text-stone-900">Retrofit Plan + Stability Certificate</span>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-[#C86635] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
              >
                <span>Book Renovation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 08. WHY CHARTERED FARMHOUSE DESIGN BEATS CONTRACTOR-BUILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            The Professional Standard
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Why Chartered Farmhouse Design Beats Contractor-Built Rural Villas
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Remote construction presents immense technical risks. Here is why hiring a licensed architectural and structural engineering practice protects your investment from long-term failure.
          </p>
        </div>

        <div className="space-y-4">
          {contractorComparison.map((item) => (
            <div 
              key={item.dimension}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 sm:p-6 bg-white border border-stone-200 text-xs sm:text-sm items-start"
            >
              <div className="lg:col-span-3 font-mono font-bold text-stone-950 text-xs uppercase tracking-wider">
                {item.dimension}
              </div>
              <div className="lg:col-span-4 text-stone-600 space-y-1">
                <div className="text-[10px] font-mono uppercase text-red-600 font-semibold">Contractor / Mason Built</div>
                <p className="leading-relaxed">{item.contractor}</p>
              </div>
              <div className="lg:col-span-5 text-stone-900 space-y-1">
                <div className="text-[10px] font-mono uppercase text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Design Plus Chartered Studio</span>
                </div>
                <p className="leading-relaxed font-medium">{item.studio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 09. SEO-OPTIMIZED FAQ SECTION (Long-Tail Search Intent) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Farmhouse Design &amp; Construction in Ajmer
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Answers regarding construction costs, land conversion (Section 90-A), water harvesting, and off-grid planning in Rajasthan.
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
              Bespoke Country Living
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Ready to Design Your Dream Rural Estate in Rajasthan?
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Book an initial site visit or consultation at our Rajeev Marg, Panchsheel Nagar studio in Ajmer. We will review your land coordinates, discuss ecological master planning, and outline a tailored roadmap to turn your rural acreage into an enduring family legacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Design My Farmhouse</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/vastu"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Vastu Alignment</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        {/* Related guides &amp; services — internal SEO links */}
        <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/services/residential-architecture/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Residential architecture in Ajmer
                </Link>
              </li>
              <li>
                <Link to="/locations/pushkar/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Architects in Pushkar
                </Link>
              </li>
              <li>
                <Link to="/vastu/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Vastu-compliant farmhouse design
                </Link>
              </li>
          </ul>
        </nav>
        </div>
      </section>
    </main>
  );
}

export default FarmhousePage;
