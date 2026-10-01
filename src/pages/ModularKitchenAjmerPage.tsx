import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  ChefHat,
  Ruler,
  Layers,
  Sparkles,
  ShieldCheck,
  Timer
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ModularKitchenAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function ModularKitchenAjmerPage({ onOpenConsultation }: ModularKitchenAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);

  const canonicalUrl = 'https://designplusajmer.co.in/modular-kitchen-ajmer';

  const layouts = [
    {
      icon: Ruler,
      title: 'L-Shaped Kitchens',
      text: 'The workhorse for Ajmer apartments and 10x12 ft kitchen rooms. Hob and sink on adjacent walls keep the work triangle under 6 metres — ideal for Vaishali Nagar and Panchsheel flats.'
    },
    {
      icon: Layers,
      title: 'U-Shaped Kitchens',
      text: 'Maximum counter for larger villa kitchens. Three-wall wrapping fits a tall pantry unit, double sink and full appliance wall without crowding circulation.'
    },
    {
      icon: ChefHat,
      title: 'Parallel / Galley Kitchens',
      text: 'For narrow 7–8 ft wide kitchen slots common in older Ajmer homes. Wet zone one side, dry zone the other, with a 4-ft clear walkway between.'
    },
    {
      icon: Sparkles,
      title: 'Island Kitchens',
      text: 'For open-plan luxury villas. The island doubles as breakfast counter and hides the hob-chimney run, keeping the living view clean and smoke-free.'
    }
  ];

  const materials = [
    {
      title: 'Carcass: BWP Plywood, Always',
      text: 'We build carcasses from boiling-water-proof (BWP) grade plywood — never MDF or particle board in wet zones. In Ajmer\u2019s hard-water belt, this is the difference between a kitchen that lasts 15 years and one that swells in 3.'
    },
    {
      title: 'Shutters: Acrylic, PU, Laminate or Membrane',
      text: 'High-gloss acrylic for show kitchens, PU-duco for matte luxury, laminate for value, membrane for routed shaker profiles. Every option is sampled physically before you freeze — never chosen from a catalogue photo.'
    },
    {
      title: 'Countertops: Granite or Quartz',
      text: 'Black galaxy or Kashmir granite for heat-proof Indian cooking; quartz for seamless modern looks. 20mm thickness with drip grooves, sealed against haldi and oil staining.'
    },
    {
      title: 'Hardware: Soft-Close, Tandem & Tall Units',
      text: 'Branded tandem drawers, soft-close hinges, tall pantry pull-outs and corner magic-units. Hardware is where cheap kitchens reveal themselves — we never downgrade it silently.'
    }
  ];

  const faqs = [
    {
      question: 'What is the modular kitchen cost per sq ft in Ajmer in 2026?',
      answer: 'In Ajmer, modular kitchens range from roughly ₹1,400 per sq ft for laminate-finish BWP kitchens to ₹2,200+ per sq ft for acrylic/PU finishes with branded tandem hardware and quartz counters. A standard 10x10 ft L-shaped kitchen therefore lands around ₹1.5–2.4 lakh. We quote per-module with a line-item BOQ — you see exactly what the carcass, shutters, hardware and countertop each cost.'
    },
    {
      question: 'Is BWP plywood really necessary, or is HDHMR enough?',
      answer: 'For the sink and hob zones, BWP plywood is non-negotiable in our specification — HDHMR swells with prolonged water exposure, and Ajmer\u2019s hard water accelerates the damage. We use HDHMR only for dry tall-unit shutters where it performs well and saves cost. Any vendor offering an all-HDHMR kitchen at a suspicious discount is cutting the carcass where you cannot see it.'
    },
    {
      question: 'How long does a modular kitchen take from design to installation?',
      answer: 'Typically 4–6 weeks: one week for measurement and 3D design iterations, 2–3 weeks for precision fabrication, and 4–6 days for on-site installation and alignment. Civil work (tiling, plumbing points, electrical) must be finished before installation day — we coordinate that sequence in writing.'
    },
    {
      question: 'Are chimney, hob and appliances included in your quote?',
      answer: 'Our kitchen quote covers carcass, shutters, countertop, hardware, sink and faucet. Chimney, hob, built-in oven and refrigerator are quoted separately at dealer price with our installation coordination — this keeps appliance brands your choice, not our margin.'
    },
    {
      question: 'What warranty do you offer on modular kitchens?',
      answer: 'Five years on carcass and hardware function, covering hinge, channel and tandem mechanism failures, plus one year on shutter finish and alignment. Warranty terms are written into the work order — not promised verbally.'
    }
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Modular Kitchen Design & Installation in Ajmer',
    serviceType: 'Modular Kitchen — 3D Design, Fabrication & Turnkey Installation',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      url: 'https://designplusajmer.co.in',
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
      { '@type': 'State', name: 'Rajasthan' }
    ],
    description: 'Architect-designed modular kitchens in Ajmer: BWP plywood carcasses, acrylic/PU/laminate shutters, quartz or granite counters and branded hardware with transparent per-sq-ft pricing.'
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
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://designplusajmer.co.in/' },
      { '@type': 'ListItem', position: 2, name: 'Modular Kitchen in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="modular-kitchen-ajmer-page" className="pt-28 pb-20">
      <SEOHead
        title="Modular Kitchen in Ajmer | Design Plus Interiors"
        description="Modular kitchen in Ajmer — BWP plywood, acrylic/PU shutters, quartz counters & branded hardware. Transparent per-sq-ft pricing, 3D design first."
        keywords="modular kitchen ajmer, modular kitchen cost in ajmer, modular kitchen design ajmer, kitchen interior designer ajmer"
        image="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
        canonical={canonicalUrl}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/services/interior-design" className="hover:text-stone-950 transition-colors">Interior Design</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Modular Kitchen in Ajmer</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <ChefHat className="w-3.5 h-3.5" />
            <span>Interior Studio · Ajmer, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Modular Kitchen in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Architect-designed — not dealer-designed. We plan your kitchen around how you actually cook:
            tadka smoke paths, masala storage reach, hard-water durability. BWP plywood carcasses, honest
            material sampling and a line-item BOQ, from roughly ₹1,400 per sq ft.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Kitchen 3D Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services/interior-design"
              className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-500 text-stone-800 px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Full Interior Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80"
            alt="Modern modular kitchen design in Ajmer with island counter and tall storage units"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Architect-Designed Modular Kitchen · Ajmer
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">

            {/* Layouts */}
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Planned Around Your Plan
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Layouts Matched to Ajmer Homes
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                We never force a catalogue layout onto your kitchen. The plan starts from your room
                dimensions, plumbing points and cooking habits — then the layout follows.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {layouts.map((l) => (
                <div key={l.title} className="p-6 bg-white border border-stone-200 space-y-2">
                  <l.icon className="w-5 h-5 text-amber-800" />
                  <h3 className="font-editorial text-lg text-stone-950 font-medium">{l.title}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{l.text}</p>
                </div>
              ))}
            </div>

            {/* Materials */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Material Specification
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What Goes Inside Your Kitchen
              </h2>
              <div className="space-y-3">
                {materials.map((m) => (
                  <div key={m.title} className="p-6 bg-stone-50 border border-stone-200">
                    <h3 className="font-editorial text-lg text-stone-950 font-medium mb-1">{m.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency note */}
            <div className="p-8 bg-[#1A1917] text-white border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C86635] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Pricing Stand</span>
              </div>
              <h3 className="font-editorial text-2xl text-white font-medium">
                Quoted Per Module. Verified Per Piece.
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Ajmer dealers advertise headline rates like ₹1,400 per sq ft, then recover margin in
                hardware downgrades and carcass swaps you never see. Our BOQ lists every module, hinge
                brand and sheet grade separately — and our site team verifies the delivered material
                against the BOQ before installation begins. If a cheaper quote beats us, ask the vendor
                to show you the carcass grade in writing.
              </p>
            </div>

            {/* Process strip */}
            <div className="space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                From Measurement to First Tadka
              </h2>
              <ol className="space-y-3">
                {[
                  { t: 'Site measurement & cooking brief', d: 'We measure to the millimetre and map your appliance list, storage needs and Vastu preferences (many Ajmer families want the hob facing east).' },
                  { t: '3D design iterations', d: 'Photorealistic 3D views of your actual kitchen — revise shutters, handles and lighting until it feels right.' },
                  { t: 'Material freeze & BOQ sign-off', d: 'Physical samples signed by you; line-item BOQ locked. No substitutions without written approval.' },
                  { t: 'Precision fabrication', d: '2–3 weeks of factory cutting, edge-banding and hardware fitting to CNC tolerances.' },
                  { t: 'Installation & alignment', d: '4–6 days on site: levelling, granite fixing, sink and faucet plumbing, shutter alignment and deep clean.' }
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
                <Timer className="w-4 h-4" />
                <span>Cost, Material &amp; Timeline Questions</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Modular Kitchen FAQs — Ajmer
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
                  Kitchen Design
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free 3D Kitchen Concept
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Share your kitchen dimensions on WhatsApp or book a studio visit — receive a
                  photorealistic 3D concept with a line-item BOQ before you commit a rupee.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <span>Book Design Session</span>
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
                  <Link to="/services/interior-design" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Full Home Interiors</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/renovation-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Home Renovation Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/turnkey-construction-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Turnkey Construction</span>
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
              3D Before You Commit
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              See Your Kitchen Before It Exists
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Bring your kitchen measurements — leave with a 3D design and an honest BOQ.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Kitchen Design</span>
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

export default ModularKitchenAjmerPage;
