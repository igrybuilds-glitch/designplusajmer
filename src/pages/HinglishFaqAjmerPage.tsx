import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  MessageCircle,
  Compass,
  Home
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface HinglishFaqAjmerPageProps {
  onOpenConsultation?: () => void;
}

export function HinglishFaqAjmerPage({ onOpenConsultation }: HinglishFaqAjmerPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Ajmer mein best architect kaun hai?',
      answer: 'Design Plus Architects, Ajmer mein architecture aur chartered structural engineering dono ek hi studio se milti hai — Er. Sudhir Soni (chartered engineer) aur Ar. Vipul Verma (principal architect) ke netritva mein. Sahi architect wohi hota hai jiska portfolio aapki site ko suit kare, drawings certified hon, aur fees milestone-wise transparent ho. Studio visit ke baad hi decide karein.'
    },
    {
      question: 'Ajmer mein ghar banane ka kharch kitna hai?',
      answer: 'Ajmer mein ghar banane ka kharch size, soil aur finishing par depend karta hai. Design Plus Architects, Ajmer mein pehle site survey aur requirement ke baad detailed drawings aur BOQ deta hai, jisse contractor-wise clear budget banta hai. Exact kharch estimate sirf site visit ke baad milta hai — bina drawing liye diya gaya figure hamesha approximate hi hota hai.'
    },
    {
      question: 'Architect fees Ajmer mein kya hoti hai?',
      answer: 'Ajmer mein architect fees ₹35 se ₹85 per square foot (built-up area) ke beech hoti hai — design ke scope, floor count aur structural complexity ke hisaab se. Design Plus Architects, Ajmer mein 2D floor plans, 3D elevation, chartered structural drawings aur ADA sanction drawings included rakhte hain, isliye final quote site visit ke baad hi fix hoti hai.'
    },
    {
      question: 'Naksha pass karane mein kitna time lagta hai Ajmer mein?',
      answer: 'Naksha pass (building plan approval) ka time ADA ya Nagar Nigam ki processing par depend karta hai — timeline koi nahi de sakta. Design Plus Architects, Ajmer ke byelaws, setbacks aur ground coverage rules ke mutabik complete sanction drawings taiyaar karta hai, jisse rejection aur correction ke chances kam hote hain. Time hamesha authority ki queue par depend karta hai.'
    },
    {
      question: 'Kya soil testing zaroori hai ghar banane se pehle?',
      answer: 'Haan, soil testing ghar banane se pehle zaroori hai — ye foundation ka design decide karta hai. Design Plus Architects, Ajmer mein soil bearing capacity (SBC) ke hisaab se RCC foundation design karta hai, taaki settlement ya crack ka risk na ho. Bina soil test ke bana foundation andaza hota hai, aur chartered engineer certified drawings nahi de sakta.'
    },
    {
      question: 'Vastu ke hisaab se ghar ka design kya hota hai?',
      answer: 'Vastu ke hisaab se design mein main entrance, kitchen, master bedroom aur pooja room ki direction Vastu zones (jaise kitchen Agni zone mein) ke mutabik rakhi jaati hai. Design Plus Architects, Ajmer mein traditional Vastu orientation ko modern cross-ventilation aur sun-path planning ke saath milata hai — taaki ghar Vastu-sangat bhi ho aur garmi mein thanda bhi rahe.'
    },
    {
      question: '3D elevation banwane ka kya fayda hai?',
      answer: '3D elevation se aapko ghar banne se PEHLE hi final look, facade proportions, window sizing aur material combination dikh jaate hain. Design Plus Architects, Ajmer mein photorealistic 3D front aur side elevations deta hai, jisse construction ke dauraan costly design changes kam hote hain aur contractor ko clear visual reference milta hai.'
    },
    {
      question: 'Duplex ghar ka design Ajmer mein kitne ka padta hai?',
      answer: 'Duplex ghar ka design cost built-up area, facade detailing aur structural scope par depend karta hai — Ajmer mein architectural design ₹35–₹85 per sq.ft. ke range mein hota hai. Design Plus Architects ka residential design package (2D plans, 3D elevation, structural drawings) 3 se 6 hafton mein taiyaar hota hai. Exact quote site visit ke baad milti hai.'
    },
    {
      question: 'Structural engineer aur architect mein kya farak hai?',
      answer: 'Architect ghar ka overall design, space planning, elevation aur client requirement ko shape deta hai. Structural engineer us design ko math se safe banata hai — column-beam sizes, foundation depth aur steel quantity calculate karke. Design Plus Architects, Ajmer mein dono disciplines ek hi studio mein hain, isliye design aur structure mein koi mismatch nahi hota.'
    },
    {
      question: 'Building plan approval ke liye kaun se documents chahiye Ajmer mein?',
      answer: 'Ajmer mein building plan approval ke liye aam taur par ye documents chahiye: plot ka registry/patta ya khatauni, ID aur address proof, site dimensions ke saath sanction drawings (architect se), aur kabhi-kabhi NOC (jaise road-widening ya heritage zone mein). Design Plus Architects, ADA/Nagar Nigam ke format ke mutabik complete sanction set taiyaar karta hai taaki approval process smooth chale.'
    }
  ];

  // Schema.org Structured Data — FAQPage with all 10 Q&As
  const hinglishFAQSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://www.designplusajmer.co.in/hinglish-faq-ajmer#faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  // Schema.org Structured Data — LocalBusiness with real NAP
  const hinglishBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'ArchitecturalService', 'EngineeringService', 'LocalBusiness'],
    '@id': 'https://www.designplusajmer.co.in/hinglish-faq-ajmer#business',
    name: 'Design Plus Architects and Structural Consultants',
    url: 'https://www.designplusajmer.co.in',
    logo: 'https://www.designplusajmer.co.in/logo.png',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Architecture and chartered structural engineering studio in Ajmer, Rajasthan — residential design, 3D elevations, Vastu planning and ADA sanction drawings.',
    telephone: ['+91-7976453090', '+91-9461465610'],
    email: 'designplusajmer@gmail.com',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rajeev Marg, Panchsheel Nagar',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305004',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.4499,
      longitude: 74.6399
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30'
      }
    ],
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Beawar' },
      { '@type': 'State', name: 'Rajasthan' }
    ],
    sameAs: [
      'https://www.facebook.com/share/19cizaeGBa/',
      'https://www.instagram.com/architectsdesignplus/'
    ]
  };

  const voiceTopics = [
    {
      title: 'Fees & Cost',
      detail: 'Architect fees, duplex design cost, ghar banane ka budget estimate — sab transparent.',
      icon: MessageCircle
    },
    {
      title: 'Approval & Process',
      detail: 'Naksha pass ka time, building plan approval documents, ADA/Nagar Nigam process.',
      icon: Home
    },
    {
      title: 'Design & Engineering',
      detail: '3D elevation ke fayde, Vastu planning, soil testing, architect vs structural engineer.',
      icon: Compass
    }
  ];

  return (
    <main id="hinglish-faq-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Ajmer Me Best Architect Kaun Hai? Fees, Naksha, Vastu — Hinglish Guide (2026)"
        description="Spoken-Hinglish guide to architects in Ajmer: design fees, naksha pass, soil testing, Vastu planning and 3D elevations — answered in simple Hinglish."
        keywords="ajmer mein best architect kaun hai, architect fees ajmer, naksha pass ajmer, vastu design ajmer, duplex design cost ajmer, building plan approval documents ajmer, soil testing ghar, 3d elevation fayda"
        canonical="https://www.designplusajmer.co.in/hinglish-faq-ajmer"
        schema={[hinglishFAQSchema, hinglishBusinessSchema]}
      />

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Hinglish FAQ — Ajmer</span>
        </nav>
      </div>

      {/* HERO SECTION (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-amber-800" />
            <span>Voice Search Guide · Bolkar Puche Gaye Sawal · October 2026</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Ajmer Me Best Architect Kaun Hai? Fees, Naksha, Vastu — Hinglish Guide (2026)
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Phone par bolkar puche jaane wale sabse common sawal — architect fees, naksha pass, soil testing, Vastu design aur 3D elevation — simple Hinglish me seedhe jawab. Bina heavy English, bina jargon.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Apna Sawal Puchhein</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Call Karein: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHAT THIS PAGE COVERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Page Overview
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Yahan Aapko Kya Answers Milenge
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Neeche ke 10 sawal Google par sabse zyada bolkar ya likhkar puche jaate hain — fees se lekar approval tak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {voiceTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="p-6 sm:p-8 bg-white border border-stone-200 hover:shadow-md transition-shadow"
              >
                <Icon className="w-6 h-6 text-amber-800 mb-4" />
                <h3 className="font-editorial text-xl text-stone-950 font-medium mb-2">
                  {topic.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {topic.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN SPOKEN-HINGLISH FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            10 Sabse Common Sawal
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Hinglish Me Seedhe Jawab
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Har sawal par tap karein — jawab bilkul waise, jaise studio me baithkar puchte.
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
                    <span className="text-[#C86635] font-mono text-xs font-bold mr-2">{index + 1}.</span>
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

      {/* WHY TRUST NOTE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="p-8 sm:p-12 bg-white border border-stone-200 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635] font-semibold">
              Design Plus Ka Tareeka
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
              Fees Ke Pehle Site Visit — Isi Order Me Kaam Hota Hai
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Design Plus Architects, Ajmer me koi bhi final quote bina site dekhe nahi deta. Pehle site dimensions, soil condition aur aapki requirements samjhte hain, phir milestone-wise transparent proposal banta hai — koi hidden charge nahi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-stone-100">
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Site Visit</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Step 01</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Plot ki actual dimensions, orientation aur soil condition ka physical survey.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">2D + 3D Design</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Step 02</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Vastu-aligned floor plans aur photorealistic 3D elevations aapki approval ke liye.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Structural + Sanction</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Step 03</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Chartered engineer ke RCC drawings aur ADA format me sanction drawings.
              </p>
            </div>
            <div>
              <div className="font-editorial text-xl font-bold text-stone-950">Supervision</div>
              <div className="text-xs font-mono text-stone-500 uppercase mt-0.5">Step 04</div>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Construction ke dauraan site inspections aur milestone-wise verified payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CONSULTATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 lg:p-16 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635]">
              Free Initial Discussion
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Apne Plot Ke Baare Me Baat Karein
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Plot ka size aur location batayein — hum samjhayenge ki aapke budget me kya design aur structure best rahega. Pehli discussion simple Hinglish me, koi pressure nahi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Consultation Book Karein</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-stone-700 hover:border-stone-400 text-stone-200 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related guides & services — internal SEO links */}
          <nav aria-label="Related guides and services" className="mt-10 pt-6 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Related Guides &amp; Services</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
              <li>
                <Link to="/architect-fees-ajmer" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  Architect fees in Ajmer (detailed guide)
                </Link>
              </li>
              <li>
                <Link to="/blog/cost-of-building-a-house-in-ajmer-2026/" className="text-stone-400 hover:text-[#C86635] underline decoration-stone-700 underline-offset-4 transition-colors">
                  House construction cost in Ajmer (2026 guide)
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
