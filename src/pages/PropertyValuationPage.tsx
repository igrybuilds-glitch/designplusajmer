import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Landmark,
  Calculator,
  FileText,
  Scale,
  Building2,
  MapPin,
  ClipboardCheck,
  Ruler
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO } from '../data/siteData';

interface PropertyValuationPageProps {
  onOpenConsultation?: () => void;
}

export function PropertyValuationPage({ onOpenConsultation }: PropertyValuationPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openHinglishIndex, setOpenHinglishIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaqIndex(openFaqIndex === index ? null : index);
  const toggleHinglish = (index: number) => setOpenHinglishIndex(openHinglishIndex === index ? null : index);

  const canonicalUrl = 'https://www.designplusajmer.co.in/property-valuation/';

  const services = [
    {
      icon: BadgeCheck,
      title: 'Government Approved Valuers',
      text: 'Valuation reports for government, semi-government and statutory purposes, issued under the seal of Er. Sudhir Soni — Chartered Engineer (India) and Fellow of the Institution of Valuers (FIV).'
    },
    {
      icon: Landmark,
      title: 'Property Valuers for Bank Loans',
      text: 'Home loan and loan-against-property valuation reports prepared in the formats banks require — site-verified fair market value with photographs, land-rate analysis and building valuation.'
    },
    {
      icon: Calculator,
      title: 'Valuers for Home Loan in Ajmer',
      text: 'Technical appraisal for housing finance: land value from prevailing DLC/guidance rates plus depreciated building value, giving your lender the documented number it needs to sanction.'
    },
    {
      icon: Scale,
      title: 'Valuers for Capital Gain Tax',
      text: 'Fair market value certificates for capital gains computation on property sale or transfer — the documented basis your CA uses when filing.'
    },
    {
      icon: FileText,
      title: 'Valuers for Income Tax',
      text: 'Valuation certificates for income-tax proceedings, reassessment matters and wealth-documentation — with a defensible methodology stated in the report.'
    },
    {
      icon: Building2,
      title: 'Building & Land Valuers',
      text: 'Independent houses, commercial buildings and vacant plots valued with measured site verification — land and construction assessed separately, then reconciled into one fair value.'
    }
  ];

  const reportContents = [
    {
      item: 'Site Verification & Measurement',
      covers: 'Physical inspection of the property, measured plot and built-up area, construction quality assessment, age of building, and occupancy status.',
      stage: 'Visit'
    },
    {
      item: 'Land Value Analysis',
      covers: 'Prevailing market rates and Rajasthan DLC (guidance) values for the locality — from Vaishali Nagar to Vaishali Nagar Jaipur — cross-checked against recent transactions.',
      stage: 'Research'
    },
    {
      item: 'Building Valuation',
      covers: 'Replacement-cost valuation of the construction with depreciation for age and condition — the standard land-plus-depreciated-building method.',
      stage: 'Analysis'
    },
    {
      item: 'Photographs & Documentation',
      covers: 'Dated site photographs of the exterior, interiors and approach road, ownership-document verification and encumbrance observations.',
      stage: 'Evidence'
    },
    {
      item: 'Signed & Stamped Report',
      covers: 'Final valuation report with fair market value, distress/realizable values where required, signed and stamped by our approved valuer.',
      stage: 'Delivery'
    }
  ];

  const faqs = [
    {
      question: 'How much does property valuation cost in India?',
      answer: 'Published guidance puts professional valuation fees between â¹5,000 and â¹50,000, with a standard residential flat around â¹15,000. Banks add their own technical/valuation charge for home loans â commonly â¹2,000ââ¹5,000 â on top of the valuer’s fee. We confirm our quotation in writing once we know the property type and the report’s purpose.'
    },
    {
      question: 'What is the valuer’s fee for a home loan in India?',
      answer: 'For home loans the valuation charge is set by the lender’s schedule â published figures range from â¹2,000ââ¹5,000, and AU Small Finance Bank’s schedule lists â¹2,500 per property. The borrower usually bears this charge at sanction stage. We keep our own fee transparent and fixed in writing before the site visit.'
    },
    {
      question: 'How is an independent house valued — land and building separately?',
      answer: 'Yes, always separately. Land is valued from prevailing market rates and Rajasthan’s DLC (guidance) values for the locality; the building is valued on replacement cost less depreciation for age and condition. The two are then reconciled into one fair market value. Any report that skips this split is not a proper valuation.'
    },
    {
      question: 'What documents should a registered valuer provide?',
      answer: 'A proper engagement produces the signed and stamped valuation report, dated site photographs, the methodology and rate references used, and â where the valuer’s credential matters â their registration or membership proof. Our reports are issued under the seal of Er. Sudhir Soni, Chartered Engineer (India) and Fellow of the Institution of Valuers (FIV).'
    },
    {
      question: 'What is the difference between an IBBI registered valuer and an income tax valuer?',
      answer: 'An IBBI registered valuer is registered with the Insolvency and Bankruptcy Board of India and is required for valuations under company law, insolvency and similar statutory proceedings. An income-tax valuer’s certificate is prepared for tax proceedings and capital-gains computation. Tell us the purpose first â the right format depends on who will read the report.'
    },
    {
      question: 'How long does a property valuation take?',
      answer: 'Typically three to seven days, including the site visit. A straightforward residential flat in Ajmer is often turned around in three to four working days; commercial properties or portfolios take longer because the rate research and documentation review are heavier. Lender-deadline cases can be prioritised — tell us the date.'
    },
    {
      question: 'Do I need a valuer’s certificate for capital gains tax on property sale?',
      answer: 'When you sell property, your CA computes capital gains on the sale consideration â and a valuer’s fair-market-value certificate is the documented basis used for cost of acquisition or improvement claims. It is the report that stands up if the assessment is questioned. We issue these certificates with the methodology stated plainly.'
    },
    {
      question: 'Is a government approved valuer in Ajmer accepted by banks?',
      answer: 'Banks require the valuer to be qualified and their report to follow the lender’s prescribed format â site verification, photographs, land-rate analysis and fair market value. Our valuations are led by Er. Sudhir Soni, Chartered Engineer (India) and Fellow of the Institution of Valuers, and prepared in the formats banks require. We confirm acceptance with your lender before starting.'
    }
  ];

  const hinglishFaqs = [
    {
      question: 'Bank loan ke liye property valuation kaise karayein Ajmer mein?',
      answer: 'Bank aksar khud valuer bhejta hai, lekin aap independent valuation bhi karwa sakte hain. Humein call karein — registry ya patta ki copy, loan application aur property details bhejein. Hum site visit karke 3–7 din mein signed aur stamped report de dete hain, jisme fair market value, photos aur land-rate analysis hota hai.'
    },
    {
      question: 'Ajmer mein valuer ka kharcha kitna hota hai?',
      answer: 'Property type aur report ke purpose par depend karta hai. Residential flat ke liye published range lagbhag ₹5,000 se ₹15,000 tak hoti hai. Site visit se pehle hum likhit mein fixed quotation de dete hain — koi hidden charge nahi. Home loan ke liye bank ka apna technical charge alag hota hai (₹2,000–₹5,000).'
    },
    {
      question: 'Valuation report mein kya-kya likha hota hai?',
      answer: 'Report mein hota hai: measured plot aur built-up area, land value (DLC rate aur market rate ke saath), building value (age ke hisaab se depreciation ke baad), dated site photographs, fair market value aur zaroorat par distress value. Report hamare approved valuer ke signature aur stamp ke saath milti hai.'
    },
    {
      question: 'Jaipur mein bhi valuation karwate hain kya?',
      answer: 'Haan. Hamara Jaipur branch (B-225, Vaishali Nagar, Opposite Karnataka Bank) Jaipur aur aas-paas ke areas mein valuation ke liye kaam karta hai — home loan, capital gain tax aur bank purposes ke liye. Ajmer ke number par hi call karke Jaipur appointment bhi book ho jaati hai.'
    }
  ];

  const allFaqs = [...faqs, ...hinglishFaqs];

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
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
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Beawar' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:30',
        closes: '19:30'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: 'Government Approved Valuer in Ajmer — Property Valuation Services',
    serviceType: 'Property Valuation — Bank Loan Reports, Capital Gain Tax & Income Tax Certificates, Building & Land Valuation',
    provider: { '@id': `${canonicalUrl}#business` },
    areaServed: [
      { '@type': 'City', name: 'Ajmer' },
      { '@type': 'City', name: 'Jaipur' }
    ],
    description: 'Government approved valuer in Ajmer: property valuation for bank loans, home loans, capital gain tax and income tax certificates, issued under the seal of Er. Sudhir Soni, Chartered Engineer (India), FIV.'
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
      { '@type': 'ListItem', position: 2, name: 'Property Valuation in Ajmer', item: canonicalUrl }
    ]
  };

  return (
    <main id="property-valuation-page" className="pt-28 pb-20">
      <SEOHead
        title="Government Approved Valuer in Ajmer | Property Valuation for Bank Loans | Design Plus"
        description="Government approved valuer in Ajmer — property valuation for bank loans, home loans, capital gain tax & income tax certificates. Led by Er. Sudhir Soni, Chartered Engineer (India), FIV."
        keywords="government approved valuer ajmer, property valuer in ajmer, registered valuer ajmer, property valuation for bank loan, valuer for home loan ajmer, government approved valuer jaipur, valuer for capital gain tax ajmer, building valuer ajmer, land valuation jaipur"
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
          <span className="text-amber-900 font-medium">Property Valuation</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <BadgeCheck className="w-3.5 h-3.5" />
            <span>Valuation Services · Ajmer & Jaipur, Rajasthan</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Government Approved Valuer in Ajmer
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            Design Plus is Ajmer’s chartered-engineer-led valuation practice â property valuation reports for bank loans, home loans, capital gain tax and income tax purposes, issued under the seal of Er. Sudhir Soni, Chartered Engineer (India) and Fellow of the Institution of Valuers (FIV). Every report is site-verified, rate-researched and signed.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
            >
              <span>Get Valuation Quote</span>
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
            alt="Property valuation in Ajmer — residential property assessed by a government approved valuer"
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Chartered Valuation Practice · Ajmer & Jaipur, Rajasthan
          </div>
        </div>
      </section>

      {/* Valuation services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-3 mb-10 max-w-3xl">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
            What We Value
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Property Valuation Services by a Registered Valuer in Ajmer
          </h2>
          <p className="text-sm text-stone-700 leading-relaxed font-sans">
            Six valuation service lines, one standard of rigour. Each engagement starts with a physical site visit and ends with a signed, stamped report you can place before a bank, a tax authority or a court.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 bg-white border border-stone-200 space-y-2">
              <s.icon className="w-5 h-5 text-amber-800" />
              <h3 className="font-editorial text-lg text-stone-950 font-medium">{s.title}</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credential & proof block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#1A1917] text-white p-8 sm:p-12 border border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-[11px] uppercase tracking-wider text-[#C86635] font-semibold">
              Why Our Valuation Reports Carry Weight
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal leading-tight">
              A Valuation Is Only as Good as the Valuer Who Signs It
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Our valuations are led by Er. Sudhir Soni — Chartered Engineer (India), M.E. in Structural Engineering, Member of the Institution of Engineers (M.I.E.) and Fellow of the Institution of Valuers (FIV). That combination matters: he values both the land and the structure behind it, so the building component of your report is assessed by an engineer who has designed and audited structures for three decades, not guessed from the street.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Reports are prepared in the formats banks require for home loans and loans against property — with site verification, dated photographs, land-rate analysis against Rajasthan DLC values, and fair market value stated alongside realizable values where the format asks for them.
            </p>
          </div>
          <div className="lg:col-span-5 space-y-3">
            {[
              { k: 'Credential', v: 'Chartered Engineer (India) · M.I.E. · FIV (Fellow, Institution of Valuers)' },
              { k: 'Lead valuer', v: 'Er. Sudhir Soni — Approved Valuer, 30+ years in structural engineering' },
              { k: 'Method', v: 'Land (DLC/market rate) + building (replacement cost less depreciation)' },
              { k: 'Turnaround', v: 'Typically 3–7 days from site visit, priority slots for loan deadlines' },
              { k: 'Coverage', v: 'Ajmer, Pushkar, Kishangarh, Beawar · Jaipur via our Vaishali Nagar branch' }
            ].map((row) => (
              <div key={row.k} className="flex gap-4 border-b border-stone-800 pb-3">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold w-24 shrink-0 pt-0.5">{row.k}</span>
                <span className="text-xs sm:text-sm text-stone-200 leading-relaxed">{row.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAA answers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Valuation Questions, Answered
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What is property valuation for a bank loan?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                When you apply for a home loan or loan against property, the bank needs an independent, documented opinion of what the property is actually worth â that is property valuation for a bank loan. A registered valuer visits the site, verifies measurements, researches land rates, assesses the building’s condition and age, and issues a signed report stating the fair market value. The bank sanctions against that number, not against the price you agreed with the seller.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Who can be a government approved valuer in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                A government approved valuer is a valuer whose qualifications and professional standing are recognised for statutory and official purposes — typically an engineer with institutional credentials. Er. Sudhir Soni is a Chartered Engineer (India) and Fellow of the Institution of Valuers (FIV), an approved valuer who has issued valuation and certification reports across Rajasthan for decades. If your matter names a specific approving authority, tell us — we confirm our format fits it before starting.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                How much does a valuer charge for a home loan in Ajmer?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Two charges are involved. The bank’s own technical/valuation charge for a home loan is commonly â¹2,000ââ¹5,000, borne by the borrower at sanction. The valuer’s professional fee depends on the property type and the report’s purpose â published guidance puts it between â¹5,000 and â¹50,000, with a standard residential report around â¹15,000. We give you a fixed written quotation before the site visit, so there are no surprises.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Do you do property valuation in Jaipur too?
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Yes. Our Jaipur branch at B-225, Vaishali Nagar, Opposite Karnataka Bank, Jaipur 302021 handles property valuation across Jaipur — home-loan reports, capital gain tax certificates and land valuation — to the same signed-report standard as Ajmer. Call the Ajmer studio number to book a Jaipur appointment.
              </p>
            </div>

            {/* What's in the report table */}
            <div className="space-y-4 pt-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Inside Every Report
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                What Our Valuation Reports Contain
              </h2>
              <div className="overflow-x-auto border border-stone-200">
                <table className="w-full text-xs sm:text-sm font-sans min-w-[560px]">
                  <thead>
                    <tr className="bg-stone-950 text-white">
                      <th className="text-left p-4 font-semibold">Component</th>
                      <th className="text-left p-4 font-semibold">What It Covers</th>
                      <th className="text-left p-4 font-semibold">Stage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportContents.map((row) => (
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

            {/* FAQ — English */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <ClipboardCheck className="w-4 h-4" />
                <span>Valuation Questions, Answered Honestly</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Property Valuation FAQs — Ajmer & Jaipur
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

            {/* FAQ — Hinglish */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Sawaal-Jawaab · Aapki Bhasha Mein</span>
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Property Valuation — Aksar Puche Jaane Wale Sawaal
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

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="p-8 bg-white border border-stone-300 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                  Valuation Services
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Free Valuation Consultation
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Tell us the property type, its location and why you need the valuation — receive an honest read on what the report will cost and how long it will take.
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
                  <Link to="/chartered-engineer-certificates" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Chartered Engineer Certificates</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/building-plan-approval-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Building Plan Approval in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/house-design-ajmer" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>House Design in Ajmer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/architect-in-jaipur" className="flex items-center justify-between text-sm text-stone-700 hover:text-amber-800 transition-colors">
                    <span>Architect in Jaipur</span>
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
              Signed. Stamped. Site-Verified.
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Get a Valuation Report That Holds Up
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Rajeev Marg, Panchsheel Nagar studio · +91 79764 53090 · designplusajmer@gmail.com.
              Send your property details — we will tell you the fee and the timeline in writing before anything else.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <span>Start My Valuation</span>
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

export default PropertyValuationPage;
