import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Compass,
  Ruler,
  Building2,
  ShieldCheck,
  Layers,
  PenTool,
  ClipboardCheck
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface HouseDesignAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function HouseDesignAjmerPage({ onOpenConsultation }: HouseDesignAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openHinglishIndex, setOpenHinglishIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);
  const toggleHinglish = (index: number) => setOpenHinglishIndex(openHinglishIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/house-design-ajmer/';

  const designStages = [
    {
      stage: '01 · Site Study & Brief',
      deliverables: 'Plot measurement, orientation and sun-path study, neighbouring-building context, ADA/Nagar Nigam byelaw check, and your written requirement brief.',
      timeline: 'Week 1'
    },
    {
      stage: '02 · Concept Layouts',
      deliverables: 'Two to three floor-plan options for every level with furniture placement, area statements, and Vastu zoning locked before detailing.',
      timeline: 'Weeks 1–2'
    },
    {
      stage: '03 · 3D Elevation & Facade',
      deliverables: 'Photorealistic front elevation renders, material and colour palette, facade lighting intent — revised until you approve the look.',
      timeline: 'Weeks 2–3'
    },
    {
      stage: '04 · Chartered Structural Engineering',
      deliverables: 'RCC column-beam-slab framing, foundation design matched to your soil test, and bar bending schedules by Er. Sudhir Soni.',
      timeline: 'Weeks 3–5'
    },
    {
      stage: '05 · MEP & Sanction Set',
      deliverables: 'Electrical, plumbing and drainage layouts plus the complete ADA or Nagar Nigam sanction drawing dossier with certificates.',
      timeline: 'Weeks 5–6'
    }
  ];

  const whatWeDesign = [
    {
      icon: Home,
      title: 'Independent Houses & Villas',
      text: 'Single and multi-storey family homes for Ajmer plots — from compact 900 sq ft urban plots to large corner villas — planned around your family\u2019s daily routine, not a template.'
    },
    {
      icon: Compass,
      title: 'Vastu-Aligned Planning',
      text: 'Entrance placement, room zoning by cardinal direction, kitchen and master-bedroom positioning — Vastu integrated at concept stage, never patched on afterwards.'
    },
    {
      icon: Building2,
      title: 'Duplex & Multi-Generation Homes',
      text: 'Independent floors for joint families with separate entries, privacy between generations, and shared courtyards that keep the household together.'
    },
    {
      icon: Layers,
      title: 'Farmhouses & Weekend Homes',
      text: 'Designs for plots towards Pushkar Road and the Aravalli foothills — landscape-first layouts, verandas, and passive cooling for Ajmer\u2019s summers.'
    },
    {
      icon: PenTool,
      title: 'Floor Plan Redesign',
      text: 'Rework an existing or contractor-drawn plan into a properly engineered, Vastu-checked, sanction-ready drawing set without losing what you liked.'
    },
    {
      icon: ShieldCheck,
      title: 'Structural Safety by Default',
      text: 'Every plan is engineered by our in-house chartered structural team, so the drawing your contractor builds from is already load-checked and soil-matched.'
    }
  ];

  const faqs = [
    {
      question: 'Can Design Plus design a Vastu-compliant house in Ajmer?',
      answer: 'Yes. Vastu zoning is built into our concept stage: entrance orientation, room placement by direction, kitchen and master-bedroom positions, and plot-facing analysis. We reconcile Vastu with ADA setback and FAR rules, so your plan is both Shastra-aligned and sanctionable — read more on our Vastu home design page.'
    },
    {
      question: 'What plot sizes do you design houses for in Ajmer?',
      answer: 'We design for plots of all sizes across Ajmer — from 30×30 ft urban plots in established colonies to 5,000+ sq ft corner plots in Vaishali Nagar and farmhouse land towards Pushkar Road. Small plots get vertical, light-well planning; large plots get courtyard and landscape-driven layouts.'
    },
    {
      question: 'Do you design houses outside Ajmer city?',
      answer: 'Yes. Our studio regularly designs for Pushkar, Kishangarh, Beawar, Nasirabad and surrounding villages. Site visits, soil-test coordination and supervision visits are scheduled for outstation projects, and sanction filing is arranged with the relevant local authority.'
    },
    {
      question: 'I already have a plan from a contractor. Can you still help?',
      answer: 'Yes — this is one of our most common engagements. We audit the existing plan for structural feasibility, ADA byelaw compliance and Vastu alignment, then rebuild it as a proper engineered drawing set. Flaws are flagged in writing before we quote, so you know exactly what changes and why.'
    },
    {
      question: 'Is soil testing part of house design in Ajmer?',
      answer: 'Soil testing is strongly recommended and we arrange it through trusted labs in Ajmer. Ajmer\u2019s ground varies from hard Aravalli schist in Civil Lines to softer strata near Ana Sagar — the foundation design, and therefore the safety and cost of your structure, depends directly on the soil bearing capacity report.'
    },
    {
      question: 'How many design revisions do I get?',
      answer: 'Concept stage includes two full layout revision rounds after the initial options, and the 3D elevation stage includes two facade revision rounds. Revisions beyond that, or changes after structural drawings are frozen, are quoted separately — the discipline keeps projects on schedule and within budget.'
    },
    {
      question: '100 गज के प्लॉट पर 3BHK का नक्शा कैसे बनेगा?',
      answer: '100 गज (लगभग 900 sq ft) के प्लॉट पर 3BHK का नक्शा आमतौर पर G+1 या G+2 में बनता है — ground floor पर living-dining, kitchen और एक bedroom, upper floor पर दो bedroom और terrace. Setback और FAR के नियमों के हिसाब से exact layout ADA byelaws के मुताबिक बनाया जाता है। हम site visit के बाद ही final layout देते हैं।'
    },
    {
      question: 'What is the best house plan for a 20x60 east-facing plot?',
      answer: 'On a 20x60 ft east-facing plot (roughly 133 sq yards), the classic layout puts the entrance on the 20-ft east face, living and parking at the front, bedrooms in the middle for privacy, and kitchen and utilities towards the west. We design it with morning-sun capture in the living spaces and Vastu zoning reconciled with ADA setback rules — the facing dictates orientation, not the plan template.'
    },
    {
      question: 'What drawings does an architect give for a house plan in Ajmer?',
      answer: 'A complete house-plan set includes 2D floor plans for every level with furniture layouts, a photorealistic 3D front elevation, working drawings (sections, door-window schedules, electrical and plumbing layouts), chartered structural RCC drawings with bar bending schedules, and the ADA or Nagar Nigam sanction drawing dossier. If someone offers only a \u201cfloor plan\u201d, that is a sketch — not a design.'
    },
    {
      question: 'Is a Vastu-compliant plan required for ADA building plan approval?',
      answer: 'No. ADA and Nagar Nigam check setbacks, ground coverage, FAR, height and parking — Vastu is not part of the statutory checklist. That said, a Vastu-aligned plan is fully sanctionable as long as the orientation and zoning respect the byelaws, which is exactly how we design them: Vastu inside the rules, not against them.'
    }
  ];

  const hinglishFaqs = [
    {
      question: 'Ghar ka naksha Ajmer mein banwane par kitna kharcha aata hai?',
      answer: 'Ajmer mein complete house design (2D floor plans, 3D elevation, chartered structural drawings, ADA sanction drawings) aam taur par ₹35–₹85 per sq ft built-up area mein hota hai. Sirf naksha (floor plan) aur poora working-drawing set — dono ke rate alag hote hain. Site visit ke baad hum likhit quotation dete hain.'
    },
    {
      question: 'Naksha pass karwana zaroori hai kya Ajmer mein?',
      answer: 'Haan. ADA limits ke andar (Vaishali Nagar, Panchsheel Nagar, Foy Sagar Road ke colonies) ADA sanction, aur purane shehar mein Nagar Nigam ki permission bina construction shuru nahi karni chahiye. Bina sanction ke kaam par stop-work notice, jurmana aur completion stage par compounding charges lag sakte hain.'
    },
    {
      question: '100 gaj ka naksha aur 200 gaj ka naksha — design mein kya farak hota hai?',
      answer: '100 gaj (900 sq ft) par design vertical hota hai — G+1/G+2 mein 3BHK, light-well planning ke saath. 200 gaj (1800 sq ft) par horizontal luxury milti hai — courtyard, double-height living, duplex options. Dono mein ADA setback aur FAR rules alag-alag apply hote hain, isliye plot size ke hisaab se hi naksha banta hai.'
    }
  ];

  const allFaqs = [...faqs, ...hinglishFaqs];

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
    name: 'House Design in Ajmer',
    serviceType: 'Residential Architectural Design — Floor Plans, 3D Elevations, Structural Engineering & Sanction Drawings',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' }
    ],
    description: 'Custom house design in Ajmer: architect-drawn floor plans, Vastu-aligned layouts, photorealistic 3D elevations, chartered RCC structural engineering and ADA/Nagar Nigam sanction drawings.'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: allFaqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'House Design in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="house-design-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="House Design in Ajmer | Custom Home Architects | Design Plus"
        description="Custom house design in Ajmer — architect-drawn floor plans, Vastu-aligned layouts, 3D elevations, chartered structural engineering & ADA sanction drawings. Vaishali Nagar, Foy Sagar Road, Civil Lines."
        keywords="house design in ajmer, home design ajmer, residential architect ajmer, house plan ajmer, house plan architect ajmer, ghar ka naksha ajmer, makaan ka naksha ajmer, 100 gaj ka naksha, villa design ajmer, duplex house design ajmer rajasthan"
        image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
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
          <span className="text-amber-900 font-medium">House Design in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5" />
            <span>Residential Architecture · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            House Design in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus Architects, Ajmer, design custom houses across the city — from Vaishali Nagar villas to family homes near Ana Sagar — with architect-drawn floor plans, Vastu-aligned layouts, 3D elevations and chartered structural engineering by Er. Sudhir Soni. Our typical range for complete house design in Ajmer runs ₹35–85 per sq ft of built-up area.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get House Design Quote</span>
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
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
            alt="Custom-designed modern house in Ajmer with architect-planned facade"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Architect-Designed Residence · Ajmer, Rajasthan
          </div>
        </div>
      </section>

      {/* What the service covers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            Scope of Service
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            What Our House Design Service in Ajmer Covers
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            From the first site visit to the final sanction drawing, one studio owns your home\u2019s design. Here is everything a Design Plus house design engagement includes for Ajmer plots.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whatWeDesign.map((item) => (
            <div key={item.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <item.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{item.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.text}</p>
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
                House Design Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What does a house design service in Ajmer include?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A complete house design service in Ajmer includes site analysis, architect-drawn floor plans for every level, furniture layouts, a photorealistic 3D front elevation, chartered structural RCC drawings, electrical and plumbing layouts, and the ADA or Nagar Nigam sanction drawing set. Design Plus also coordinates Vastu orientation, so nothing needs redrawing after approval.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How much does house design cost per sq ft in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                In Ajmer, complete house design typically ranges from ₹35 to ₹85 per square foot of built-up area, depending on scope and complexity. A design-only package with floor plans and elevations sits at the lower end, while a full working-drawing set with chartered structural engineering, MEP layouts and ADA filing drawings sits at the upper end.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How long does it take to design a house in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A typical Ajmer residence takes four to six weeks from site measurement to sanction-ready drawings: one week for concept layouts, one to two weeks for 3D elevations and revisions, and two weeks for chartered structural drawings plus the ADA sanction set. Complex multi-storey villas on Aravalli rocky plots, or plots needing plot amalgamation, can take longer.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Do I need ADA building plan approval for a house in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes. Any new residential construction within Ajmer Development Authority limits — including Vaishali Nagar, Panchsheel Nagar and colonies along Foy Sagar Road — requires ADA sanction before work begins. Areas under Ajmer Nagar Nigam need its permission instead. Building without sanction risks stop-work notices, penalties and compounding fees at completion stage.
              </p>
            </div>

            {/* Design stages table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                The Design Sequence
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Five Stages of House Design at Our Ajmer Studio
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Stage</th>
                      <th className="text-left p-4 font-semibold">What You Receive</th>
                      <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {designStages.map((row) => (
                      <tr key={row.stage} className="border-t border-stone-200 odd:bg-white even:bg-stone-50">
                        <td className="p-4 font-semibold text-stone-900 whitespace-nowrap">{row.stage}</td>
                        <td className="p-4 text-stone-700">{row.deliverables}</td>
                        <td className="p-4 text-stone-700 whitespace-nowrap">{row.timeline}</td>
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
                <span>House Design Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                House Design FAQs — Ajmer
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
                  Custom Home Design
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Design Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your plot size and location in Ajmer — receive honest advice on what your plot can hold, a realistic design timeline, and a written quotation.
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
                  <Link to="/structural-consultancy-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Structural Consultancy in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/property-valuation" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Property Valuation in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/chartered-engineer-certificates" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Chartered Engineer Certificates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/architect-in-jaipur" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Architect in Jaipur</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hinglish FAQ block */}
          <div className="lg:col-span-8 mt-2">
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <ClipboardCheck className="w-4 h-4" />
                <span>Sawaal-Jawaab · Aapki Bhasha Mein</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Ghar ka Naksha — Aksar Puche Jaane Wale Sawaal
              </h2>
              <div className="space-y-3">
                {hinglishFaqs.map((faq, index) => {
                  const isOpen = openHinglishIndex === index;
                  return (
                    <div key={faq.question} className="bg-white border border-stone-200">
                      <button
                        type="button"
                        onClick={() => toggleHinglish(index)}
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Your Plot. Your Home. Properly Designed.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Design Your Ajmer Home the Right Way
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Tell us your plot dimensions and requirements — we will tell you what is genuinely buildable on it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My House Design</span>
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

export default HouseDesignAjmerPage;
