import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Sun,
  DoorOpen,
  BedDouble,
  ChefHat,
  Home,
  ClipboardCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface VastuHomeAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function VastuHomeAjmerPage({ onOpenConsultation }: VastuHomeAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/vastu-home-design-ajmer/';

  const zoning = [
    {
      direction: 'North-East (Ishan)',
      idealUse: 'Entrance, pooja room, living room',
      notes: 'Kept light, open and clutter-free; the most auspicious zone for the main entrance and prayer space.'
    },
    {
      direction: 'South-East (Agneya)',
      idealUse: 'Kitchen',
      notes: 'Fire element zone — the kitchen and its cooking platform belong here; avoids the north-east kitchen defect.'
    },
    {
      direction: 'South-West (Nairutya)',
      idealUse: 'Master bedroom, heavy storage',
      notes: 'Heaviest, tallest zone of the house; the master bedroom here gives stability, with overhead tanks avoided.'
    },
    {
      direction: 'North-West (Vayavya)',
      idealUse: 'Guest bedroom, children\u2019s room',
      notes: 'Air element zone — suited to guest rooms and daughters\u2019 bedrooms; good for attached toilets.'
    },
    {
      direction: 'Centre (Brahmasthan)',
      idealUse: 'Open courtyard / circulation',
      notes: 'Kept free of heavy construction, toilets and staircases; our plans centre living space around it.'
    }
  ];

  const principles = [
    {
      icon: DoorOpen,
      title: 'Plot-Facing & Entrance Analysis',
      text: 'We study your plot\u2019s orientation — east, west, north or south facing — and place the entrance in the Vastu-appropriate pada of that face, balancing Shastra guidance with the street reality of Ajmer\u2019s colonies.'
    },
    {
      icon: Compass,
      title: 'Room Zoning by Direction',
      text: 'Kitchen in the south-east, master bedroom in the south-west, pooja in the north-east — the five-element logic is laid out at concept stage, before a single wall position is frozen.'
    },
    {
      icon: ChefHat,
      title: 'Kitchen & Bedroom Positioning',
      text: 'Cooking platform facing east, bed headboards to the south or west, mirrors and water elements placed per directional rules — detailed in the interior stage, not left to chance.'
    },
    {
      icon: BedDouble,
      title: 'Vastu + Structure, Reconciled',
      text: 'A Vastu-perfect plan that violates ADA setbacks or defies structural logic is useless. Er. Sudhir Soni engineers the Vastu zoning into a buildable, sanctionable, safe structure.'
    },
    {
      icon: Sun,
      title: 'Sun-Path Alignment',
      text: 'Classical Vastu\u2019s directional wisdom overlaps remarkably with climate science — morning light in living spaces, heavy mass to the south-west. We design for both traditions at once.'
    },
    {
      icon: Home,
      title: 'Vastu Correction for Existing Homes',
      text: 'For already-built Ajmer houses, we audit directional defects and propose practical corrections — re-zoning rooms, shifting entrances, mirror and colour remedies — without unnecessary demolition.'
    }
  ];

  const faqs = [
    {
      question: 'Is Vastu really important when building a house in Ajmer?',
      answer: 'For many Ajmer families it is non-negotiable — and practically, Vastu\u2019s directional logic (morning light in living areas, kitchens away from the prayer zone, heavy mass to the south-west) produces genuinely comfortable homes. We treat Vastu as a design input alongside structure, byelaws and climate, never as an afterthought.'
    },
    {
      question: 'My plot faces west. Can it still be Vastu-compliant?',
      answer: 'Yes. Every plot facing has Vastu-appropriate entrance padas and zoning solutions — west-facing plots are extremely common in Ajmer\u2019s grid colonies. We place the entrance in the correct pada of the west face and zone rooms around it. No plot facing is \u201Cbad\u201D; only poorly zoned plans are.'
    },
    {
      question: 'Do Vastu homes cost more to build in Ajmer?',
      answer: 'No. Vastu compliance is a planning decision, not a material one — it costs nothing extra when integrated at the concept stage. It only becomes expensive when applied after construction, as demolition and re-zoning. That is why we lock Vastu zoning before structural drawings begin.'
    },
    {
      question: 'Can you fix Vastu defects in my existing Ajmer home?',
      answer: 'In most cases, yes. We audit the home\u2019s directional layout, identify defects (kitchen in the north-east, entrance in an inauspicious pada, toilets in the Brahmasthan), and propose corrections ordered by impact — room re-zoning first, then entrance shifts, then non-structural remedies. Demolition is the last resort, not the first suggestion.'
    },
    {
      question: 'Does Vastu affect ADA building plan approval in Ajmer?',
      answer: 'No — the ADA and Nagar Nigam approve on setbacks, FAR, ground coverage and structural safety, not Vastu. But the two must be reconciled in one plan: a Vastu entrance that violates the front setback will not be sanctioned. Our studio designs the Vastu zoning inside the byelaw envelope from day one.'
    },
    {
      question: 'Do you consult a Vastu expert or do it in-house?',
      answer: 'Our architects apply Vastu principles in-house as part of the design process, coordinated with structure and byelaws. If your family follows a specific Vastu consultant or pandit, we work with them directly — their directional requirements become inputs to the plan, and we reconcile any conflicts with buildability in writing.'
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
    name: 'Vastu Home Design in Ajmer',
    serviceType: 'Vastu-Compliant Residential Architecture — Directional Zoning, Entrance Analysis, Shastra-Aligned Plans',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: 'Vastu home design in Ajmer: Shastra-aligned house plans with directional room zoning, entrance analysis and Vastu defect correction, reconciled with ADA byelaws and structural engineering.'
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
      { '@type': 'ListItem', position: 2, name: 'Vastu Home Design in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="vastu-home-design-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Vastu Home Design in Ajmer | Shastra-Aligned House Plans | Design Plus"
        description="Vastu home design in Ajmer — Shastra-aligned house plans with directional zoning, entrance analysis & Vastu defect correction, reconciled with ADA byelaws & structural engineering."
        keywords="vastu home design ajmer, vastu compliant house plan ajmer, vastu architect ajmer, vastu house plan rajasthan, vastu consultation ajmer, east facing house plan ajmer"
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
          <span className="text-amber-900 font-medium">Vastu Home Design in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Vastu Shastra Architecture · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Vastu Home Design in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, integrate Vastu Shastra into modern home design from the very first sketch — plot-facing analysis, entrance placement, room zoning by direction, and kitchen and master-bedroom positioning per Vastu principles. Homes near Ana Sagar, in Vaishali Nagar and across Ajmer get plans that satisfy both Vastu and ADA byelaws, engineered structurally by Er. Sudhir Soni.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Vastu Home Design Quote</span>
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
            alt="Vastu-aligned architectural house plan drafted for an Ajmer home"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Vastu-Zoned Architectural Planning · Ajmer
          </div>
        </div>
      </section>

      {/* Vastu principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            How We Apply Vastu
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Vastu as a Design Discipline, Not a Checklist
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            For Ajmer families who build by Shastra, Vastu is settled at the concept stage — where it costs nothing — and carried through structure, interiors and sanction drawings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <p.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{p.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{p.text}</p>
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
                Vastu Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is Vastu-compliant home design?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Vastu-compliant home design plans a house according to Vastu Shastra\u2019s directional principles: the entrance in an auspicious pada of the plot face, rooms zoned by the five elements — kitchen south-east, master bedroom south-west, pooja north-east — and the central Brahmasthan kept open. At Design Plus, this zoning is drawn into the architectural plan from the first sketch, reconciled with ADA byelaws and structural logic.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Can Vastu principles work with modern architecture in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes — Vastu governs orientation and zoning, not style. A contemporary minimalist facade in Vaishali Nagar can be fully Vastu-compliant if its entrance pada, room directions and element placements follow Shastra. Modern construction actually helps: RCC framing gives the planning freedom that load-bearing walls never allowed, so Vastu zoning and modern aesthetics coexist comfortably.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Which direction should my house face in Ajmer for Vastu?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                East and north facings are traditionally preferred, but every facing — including the very common west and south facings in Ajmer\u2019s grid colonies — has Vastu-correct entrance padas and workable zoning. What matters is not the facing but the plan: entrance placement within the face, and room zoning around it. We analyse your specific plot rather than applying a generic rule.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Do you correct Vastu defects in existing Ajmer homes?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes. We audit your home\u2019s directional layout against Vastu principles, identify defects — kitchen in the north-east, entrance in an inauspicious pada, toilets over the Brahmasthan — and propose corrections in order of impact: room re-zoning first, entrance adjustments next, then non-structural remedies like mirrors, colours and pyramids. Demolition is recommended only when nothing else resolves a major defect.
              </p>
            </div>

            {/* Directional zoning table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Directional Reference
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Vastu Room Zoning by Direction
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Direction (Zone)</th>
                      <th className="text-left p-4 font-semibold">Ideal Room Placement</th>
                      <th className="text-left p-4 font-semibold">Design Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zoning.map((row) => (
                      <tr key={row.direction} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900 whitespace-nowrap">{row.direction}</td>
                        <td className="p-4 text-stone-700">{row.idealUse}</td>
                        <td className="p-4 text-stone-700">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-stone-500 font-sans">
                Reference zoning only — final placement depends on your plot\u2019s facing, dimensions and ADA setback envelope, resolved in your custom plan.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <Sun className="w-4 h-4" />
                <span>Vastu Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Vastu Home Design FAQs — Ajmer
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
                  Vastu Shastra Architecture
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Vastu Design Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your plot facing and dimensions — receive an honest assessment of its Vastu potential and a written design quotation.
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
                  <Link to="/building-plan-approval-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Building Plan Approval in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/structural-consultancy-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Consultancy in Ajmer</span>
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
              Shastra-Aligned. Structurally Sound. Sanctionable.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Build Your Vastu Home in Ajmer Without Compromise
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Tell us your plot facing — we will show you its Vastu-aligned potential.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Vastu Home Design</span>
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

export default VastuHomeAjmerPage;
