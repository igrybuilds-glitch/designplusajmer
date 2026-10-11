import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sofa,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  ChefHat,
  BedDouble,
  Briefcase,
  Lamp,
  Palette,
  ClipboardCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface InteriorDesignerAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function InteriorDesignerAjmerPage({ onOpenConsultation }: InteriorDesignerAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/interior-designer-ajmer/';

  const spaces = [
    {
      icon: Sofa,
      title: 'Living Rooms & Family Spaces',
      text: 'TV walls, seating layouts tuned to your family\u2019s habits, false ceilings with layered 2700K lighting, and storage that disappears into the architecture of homes across Ajmer.'
    },
    {
      icon: ChefHat,
      title: 'Modular Kitchens',
      text: 'Work-triangle planning, tall units, chimney and hob coordination, granite or quartz counters, and utility balconies — kitchens designed for Indian cooking loads and Ajmer\u2019s hard water.'
    },
    {
      icon: BedDouble,
      title: 'Bedrooms & Wardrobes',
      text: 'Wardrobe interiors planned drawer by drawer, headboard walls, study corners and lighting scenes — calm, private rooms that hold a surprising amount of storage.'
    },
    {
      icon: Briefcase,
      title: 'Offices & Commercial Interiors',
      text: 'Clinics, showrooms, coaching centres and offices in Ajmer — reception presence, staff workflow, client-facing finishes and branding carried through the space.'
    },
    {
      icon: Lamp,
      title: 'Lighting & False Ceilings',
      text: 'Reflected ceiling plans, cove and task lighting, fan and AC grille coordination — the layer that makes every other material in the room look more expensive.'
    },
    {
      icon: Palette,
      title: 'Material & Colour Curation',
      text: 'Marble, veneer, laminate, fabric and paint palettes selected for Ajmer\u2019s dust and heat — finishes that look rich on day one and still look rich in year five.'
    }
  ];

  const deliverables = [
    {
      item: '3D Room Views',
      covers: 'Photorealistic views of every designed room — you approve colours, materials and furniture placement before a single panel is cut.',
      stage: 'Design'
    },
    {
      item: 'Floor Plans & Furniture Layouts',
      covers: 'Dimensioned layouts showing every furniture piece, circulation clearances and door swings for each room.',
      stage: 'Design'
    },
    {
      item: 'Reflected Ceiling & Lighting Plans',
      covers: 'False-ceiling design, cove profiles, fixture positions, switch layouts and 2700K–4000K lighting scenes per room.',
      stage: 'Design'
    },
    {
      item: 'Joinery & Civil Detail Drawings',
      covers: 'Wardrobe, kitchen, TV-unit and panelling construction details with hardware schedules that carpenters execute without guesswork.',
      stage: 'Working'
    },
    {
      item: 'Electrical & Plumbing Points',
      covers: 'Socket, switch, water-inlet and drainage point layouts coordinated with the interior — planned before civil work, not chased after.',
      stage: 'Working'
    },
    {
      item: 'Material & BOQ Schedules',
      covers: 'Itemised material specifications with quantities, so vendor quotations in Ajmer\u2019s market can be compared like-for-like.',
      stage: 'Execution'
    }
  ];

  const faqs = [
    {
      question: 'What is the interior design cost per sq ft in Ajmer?',
      answer: 'In Ajmer, interior architecture typically ranges from ₹50 to ₹120 per square foot of designed area. Wardrobe-and-paint refreshes sit at the lower end; full homes with modular kitchens, false ceilings, custom joinery and designer lighting sit at the upper end. We quote room-wise after a site visit, so you see exactly where the budget goes.'
    },
    {
      question: 'Do you execute interiors or only design them in Ajmer?',
      answer: 'We do both. Design-only engagements deliver the full drawing and 3D package for your own contractor to execute. Design-plus-execution engagements have our empanelled teams build under our supervision, with milestone inspections — the route most Ajmer clients choose for kitchens and full-home interiors.'
    },
    {
      question: 'Can you design interiors for my under-construction house?',
      answer: 'Yes — and this is the ideal time. When interiors are designed while the house is still under construction, electrical points, plumbing lines, ceiling heights and wall thicknesses can be coordinated on paper. Retrofitting the same interiors after handover costs more and compromises more.'
    },
    {
      question: 'Do you design Vastu-compliant interiors in Ajmer?',
      answer: 'Yes. For clients who follow Vastu, we align room functions, bed and stove orientations, mirror and water-element placements with Vastu principles during the layout stage — coordinated with the architectural Vastu zoning already set for the home.'
    },
    {
      question: 'Which materials work best for Ajmer\u2019s climate?',
      answer: 'Ajmer\u2019s heat and dust reward low-maintenance choices: quartz over marble in kitchens, matte laminates over high-gloss in dusty zones, and solid wood or quality plywood over MDF for joinery longevity. We specify materials with local availability and serviceability in mind — a beautiful material you cannot repair locally is a liability.'
    },
    {
      question: 'How involved do I need to be during the interior project?',
      answer: 'Heavily involved at design stage — colours, materials and layouts need your sign-off — and lightly involved during execution, through milestone photo updates and scheduled site visits. Our supervision handles vendor coordination, quality checks and snag lists so the project does not consume your working days.'
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
    name: 'Interior Designer in Ajmer',
    serviceType: 'Interior Architecture & Design — 3D Room Views, Modular Kitchens, Joinery Drawings, Lighting Design',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: 'Interior designer in Ajmer: 3D room views, modular kitchens, wardrobes, false ceilings and lighting design with joinery working drawings, led by Ar. Vipul Verma.'
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
      { '@type': 'ListItem', position: 2, name: 'Interior Designer in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="interior-designer-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Interior Designer in Ajmer | Homes, Kitchens & Offices | Design Plus"
        description="Interior designer in Ajmer — 3D room designs, modular kitchens, wardrobes, false ceilings & lighting. Design + execution across Vaishali Nagar, Panchsheel Nagar & Foy Sagar Road."
        keywords="interior designer in ajmer, interior design ajmer, modular kitchen ajmer, home interiors ajmer, office interiors ajmer, wardrobe design ajmer rajasthan"
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
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
          <span className="text-amber-900 font-medium">Interior Designer in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Sofa className="w-3.5 h-3.5" />
            <span>Interior Architecture · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Interior Designer in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, design interiors for homes and commercial spaces across the city — modular kitchens, wardrobes, living rooms and offices in Vaishali Nagar, Panchsheel Nagar and along Foy Sagar Road. Ar. Vipul Verma leads every interior with 3D room views, lighting design and joinery drawings, coordinated with our structural team so no design ever compromises the building.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Interior Design Quote</span>
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
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80"
            alt="Designed modular kitchen interior in an Ajmer home by Design Plus"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Interior Architecture · Ajmer, Rajasthan
          </div>
        </div>
      </section>

      {/* Spaces we design */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Spaces We Design
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Interiors for Every Room and Every Building Type
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Residential and commercial interiors across Ajmer — each designed with 3D views first, working drawings after, so what you approve is what gets built.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spaces.map((s) => (
            <div key={s.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <s.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{s.title}</h3>
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
                Interior Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What does an interior designer in Ajmer do?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                An interior designer in Ajmer plans how your rooms look, feel and function: space layouts, furniture placement, 3D room views, false ceilings, lighting design, modular kitchens, wardrobes and material selection. At Design Plus, interiors are backed by joinery working drawings and coordinated with the building\u2019s structure — so designs are beautiful on the render and buildable on site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How much does interior design cost per sq ft in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                In Ajmer, interior architecture typically ranges from ₹50 to ₹120 per square foot of designed area. A wardrobe-and-paint refresh sits at the lower end, while a full home with modular kitchen, false ceilings, custom joinery and designer lighting sits at the upper end. Final cost depends on material choices — quartz, veneer and solid wood move budgets more than the design fee does.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How long does a home interior project take in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Design takes three to five weeks: concept, 3D room views and two revision rounds, then working drawings. Execution depends on scope — a modular kitchen takes four to six weeks, a full 3BHK interior takes ten to fourteen weeks including civil changes, joinery, painting and handover snag clearance. Vendor lead times for stone and hardware are the usual schedule risk.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Do you design modular kitchens in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes — modular kitchens are among our most requested interiors in Ajmer. We design the work triangle, tall-unit storage, chimney and hob positions, sink and dishwasher plumbing points, and lighting over counters — then issue joinery drawings with hardware schedules so the kitchen is built to millimetre accuracy and survives daily Indian cooking loads.
              </p>
            </div>

            {/* Deliverables table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                What You Receive
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Interior Design Deliverables
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
                    {deliverables.map((row) => (
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
                <span>Interior Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Interior Design FAQs — Ajmer
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
                  Interior Architecture
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Interior Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share photographs of your space or your floor plan — receive honest advice on what your interiors need and a written room-wise quotation.
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
              Designed First. Built Right.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Interiors That Feel Like They Were Always Meant to Be There
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Show us your space — we will show you what it can become.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Interior Design</span>
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

export default InteriorDesignerAjmerPage;
