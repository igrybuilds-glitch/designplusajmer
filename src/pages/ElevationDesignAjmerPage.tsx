import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Sun,
  Paintbrush,
  Building2,
  Landmark,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface ElevationDesignAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function ElevationDesignAjmerPage({ onOpenConsultation }: ElevationDesignAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/3d-elevation-design-ajmer/';

  const styles = [
    {
      icon: Building2,
      title: 'Contemporary Minimal',
      text: 'Clean lines, flat planes, concealed rainwater spouts and restrained material pairing — suited to Ajmer\u2019s newer sectors when paired with orientation-aware shading for west-facing walls.'
    },
    {
      icon: Landmark,
      title: 'Rajasthani Sandstone Heritage',
      text: 'Dholpur and Jaisalmer stone cladding, jharokha brackets, carved cornices and jaali screens — a facade language that belongs in Ajmer and ages gracefully in its desert climate.'
    },
    {
      icon: Sparkles,
      title: 'Contemporary-Classical Fusion',
      text: 'Symmetrical massing with classical cornices and columns, softened with modern glass, wood-finish panels and warm facade lighting for evening presence.'
    },
    {
      icon: Sun,
      title: 'Climate-Responsive Facade',
      text: 'Deep sunshades, shaded balconies, double-skin jaali walls and light-reflective finishes — elevations engineered to reduce heat gain before they worry about looks.'
    }
  ];

  const deliverables = [
    {
      item: 'Photorealistic 3D Front Elevation',
      covers: 'Day and dusk renders with exact materials, colours, cladding patterns and lighting shown on your approved floor plan geometry.',
      format: 'High-resolution images'
    },
    {
      item: 'All-Side 2D Elevations',
      covers: 'Coloured side and rear elevations with dimensions, so every face of the house is resolved — not just the street-facing one.',
      format: 'Scaled drawings'
    },
    {
      item: 'Material & Colour Palette',
      covers: 'Sandstone, paint, cladding, tile and metal specifications with shade codes sourced for availability in Ajmer\u2019s market.',
      format: 'Schedule sheet'
    },
    {
      item: 'Facade Lighting Plan',
      covers: 'Fixture positions, beam angles and dusk-ambience intent so the night elevation is designed, not improvised by the electrician.',
      format: 'Marked plan'
    },
    {
      item: 'Chartered Structural Validation',
      covers: 'Load review of every projection, cantilever and stone-panel anchorage by Er. Sudhir Soni before the elevation is released for execution.',
      format: 'Review note'
    },
    {
      item: 'Contractor Working Details',
      covers: 'Dimensioned sections for jaali panels, sunshades, cornices and cladding fixings — what the mason actually builds from.',
      format: 'Construction details'
    }
  ];

  const faqs = [
    {
      question: 'How many elevation design options will I get?',
      answer: 'Every engagement includes two distinct facade concepts on your approved floor plan, each with day and dusk renders. You select one direction, after which two revision rounds refine materials, colours and detailing. The process keeps choice structured — endless options delay projects, not improve them.'
    },
    {
      question: 'How long does 3D elevation design take in Ajmer?',
      answer: 'A front-elevation design with two concepts takes roughly two weeks from approved floor plans, including one revision round. Full four-side elevations with lighting plans and contractor details add another week. Facade redesigns of existing homes take slightly longer because we first measure the built structure.'
    },
    {
      question: 'Can elevation design be done for my already-built house?',
      answer: 'Yes. We measure your existing structure, verify which walls and projections can carry new cladding loads, and design a facade around the built reality. Er. Sudhir Soni reviews every added projection and stone panel for structural capacity — no elevation is released that the building cannot safely carry.'
    },
    {
      question: 'Does elevation design consider Vastu in Ajmer?',
      answer: 'Yes, when your project carries Vastu requirements. Entrance direction, projection placements and the five-element material balance are coordinated with the Vastu zoning already set in your floor plans — the facade reinforces the plan\u2019s orientation logic rather than contradicting it.'
    },
    {
      question: 'Do you design elevations for commercial buildings in Ajmer?',
      answer: 'Yes. Showrooms, clinics, small hotels and coaching institutes along Foy Sagar Road, Beawar Road and the city centre need facades that work as signage — visibility, lighting and brand presence. Commercial elevations additionally coordinate with ADA signage and parking byelaw requirements.'
    },
    {
      question: 'Will the final house look exactly like the 3D render?',
      answer: 'The 3D is built on your exact floor-plan dimensions and uses materials available in Ajmer\u2019s market, with contractor working details issued for every feature. Material shade variation and site craftsmanship affect the final result — which is why we stay available for a site review when cladding and finishing begin.'
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
    name: '3D Elevation Design in Ajmer',
    serviceType: 'Architectural Facade & 3D Elevation Design — Photorealistic Renders, Material Palettes, Lighting Plans',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: '3D elevation design in Ajmer: photorealistic front facades, Rajasthani sandstone and contemporary styles, material schedules, facade lighting plans and chartered structural validation.'
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
      { '@type': 'ListItem', position: 2, name: '3D Elevation Design in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="elevation-design-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="3D Elevation Design in Ajmer | Front Facade Design | Design Plus"
        description="3D elevation design in Ajmer — photorealistic front facades, Rajasthani sandstone & modern styles, material palettes, lighting plans, structurally validated by chartered engineers."
        keywords="3d elevation design ajmer, front elevation design ajmer, house facade design ajmer, elevation designer ajmer, modern elevation design rajasthan, sandstone facade ajmer"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
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
          <span className="text-amber-900 font-medium">3D Elevation Design in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Facade Architecture · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            3D Elevation Design in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, create photorealistic 3D front elevations for homes across Vaishali Nagar, Foy Sagar Road and Civil Lines — modern, Rajasthani sandstone and contemporary-classical facades with stone cladding, jharokha screens and lighting plans. Every elevation is drawn to real dimensions and structurally validated by our chartered engineers before it reaches your contractor.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Elevation Design Quote</span>
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="3D elevation design of a modern house facade in Ajmer, Rajasthan"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Photorealistic Facade Visualisation · Ajmer
          </div>
        </div>
      </section>

      {/* Facade styles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Facade Directions
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Elevation Styles We Design for Ajmer Homes
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Every style below is adapted to Ajmer\u2019s desert climate and Aravalli setting — thermal comfort first, aesthetics built on top of it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {styles.map((s) => (
            <div key={s.title} className="p-6 sm:p-8 bg-white border border-stone-200 space-y-2">
              <s.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-xl text-stone-950 font-medium">{s.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.text}</p>
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
                Elevation Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is 3D elevation design for a house?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                3D elevation design is a photorealistic visualisation of your home\u2019s exterior — the front facade with exact proportions, materials, colours, stone cladding, balcony screens and lighting, modelled on your approved floor plan. It lets you see the finished house before construction begins, so cladding, window sizes and facade details are decided on paper, not corrected expensively on site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How much does 3D elevation design cost in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Elevation design is usually quoted as part of the complete house design package, which in Ajmer typically ranges from ₹35 to ₹85 per square foot of built-up area. For standalone facade redesigns of existing homes, we quote a fixed fee after reviewing your floor plan, since facade complexity — sandstone jaali work, double-height volumes, lighting — drives the effort.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Which elevation styles suit Ajmer\u2019s climate and architecture?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Ajmer homes suit facades that respect both Rajasthani heritage and the Aravalli desert climate: sandstone cladding for thermal mass, jharokha-style shaded balconies, deep sunshades over west-facing windows, and light-coloured finishes that reflect heat. Contemporary minimal facades work too, but they need orientation-aware shading — a west-facing glass box without shading overheats every summer afternoon.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Can you redesign the elevation of my existing house in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes. Facade-only redesigns are common in Ajmer\u2019s older colonies — we measure your existing structure, check which walls and projections can carry new cladding loads, and deliver a photorealistic 3D elevation with material and lighting schedules. Structural safety comes first: Er. Sudhir Soni reviews every added projection, stone panel and cantilever for load capacity before approval.
              </p>
            </div>

            {/* Deliverables table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                What You Receive
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Elevation Design Deliverables
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Deliverable</th>
                      <th className="text-left p-4 font-semibold">What It Covers</th>
                      <th className="text-left p-4 font-semibold">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliverables.map((row) => (
                      <tr key={row.item} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900">{row.item}</td>
                        <td className="p-4 text-stone-700">{row.covers}</td>
                        <td className="p-4 text-stone-700 whitespace-nowrap">{row.format}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Climate note */}
            <div className="p-6 sm:p-8 bg-amber-50/60 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sun className="w-4 h-4" />
                <span>Ajmer Climate Note</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Ajmer\u2019s summer sun hits west and south-west facades hardest from March to June. We orient major glazing away from these faces or shade it with calculated overhangs and jaali screens, and specify light-coloured, high-thermal-mass finishes — so your elevation looks striking without turning the rooms behind it into ovens.
              </p>
            </div>

            {/* FAQ */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <Paintbrush className="w-4 h-4" />
                <span>Elevation Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Elevation Design FAQs — Ajmer
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
                  Facade Architecture
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Elevation Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Send us your floor plan or plot photographs — receive honest feedback on facade possibilities and a written quotation for your Ajmer property.
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
              See Your Home Before It Is Built
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Give Your Ajmer Home a Facade It Deserves
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Share your floor plan — we will show you what your home can look like.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Elevation Design</span>
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

export default ElevationDesignAjmerPage;
