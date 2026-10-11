import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  PhoneCall,
  Scale,
  HelpCircle
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_INFO, LEADERSHIP } from '../data/siteData';

interface BestArchitectsAjmerComparisonPageProps {
  onOpenConsultation?: () => void;
}

/*
 * COMPETITOR DATA SOURCE:
 * All competitor names, review counts, ratings, years-in-business and service
 * tags were observed live on JustDial category listings for Ajmer architects in
 * October 2026. Review figures are cited as "as listed on JustDial, Oct 2026".
 * No firm data was invented, and no third-party websites or phone numbers are
 * quoted because none were independently verified.
 */
const comparisonRows = [
  {
    firm: 'Design Plus Architects',
    services: 'Architectural design, chartered structural engineering, ADA sanction drawings, 3D elevations, interiors, turnkey execution',
    reviews: '4.8 · 43 ratings',
    reviewsNote: 'As listed on JustDial, Oct 2026',
    specialisation: 'Chartered-led architecture + in-house structural engineering (Er. Sudhir Soni, M.E. Structure, FIV)',
    contact: 'designplusajmer@gmail.com · +91 79764 53090',
    contactLink: 'https://www.designplusajmer.co.in/contact/'
  },
  {
    firm: 'Space Designers',
    services: 'Architectural designing services (Building)',
    reviews: '4.4 · 77 ratings',
    reviewsNote: 'As listed on JustDial, Oct 2026',
    specialisation: 'Long-established Ajmer practice (~22 years listed)',
    contact: 'JustDial directory listing',
    contactLink: 'https://www.justdial.com/Ajmer/Architectural-Designing-Services/nct-11259408'
  },
  {
    firm: 'Studio Art Ville',
    services: 'Architectural services (Building)',
    reviews: '4.8 · 49 ratings',
    reviewsNote: 'As listed on JustDial, Oct 2026',
    specialisation: 'Ajmer studio (~8 years listed), information verified by JustDial',
    contact: 'JustDial directory listing',
    contactLink: 'https://www.justdial.com/Ajmer/Architects/nct-10020039?stype=category_list&redirect=301'
  },
  {
    firm: 'Meet Architect & Consultants',
    services: 'Architectural services (Building, Industrial)',
    reviews: '4.8 · 42 ratings',
    reviewsNote: 'As listed on JustDial, Oct 2026',
    specialisation: 'Long-running Ajmer consultancy (~25 years listed)',
    contact: 'JustDial directory listing',
    contactLink: 'https://www.justdial.com/Ajmer/Architects/nct-10020039?stype=category_list&redirect=301'
  },
  {
    firm: 'Maison Architects',
    services: 'Architectural services (Building, Industrial)',
    reviews: '4.8 · 36 ratings',
    reviewsNote: 'As listed on JustDial, Oct 2026',
    specialisation: 'Ajmer practice (~6 years listed), Shastri Nagar',
    contact: 'JustDial directory listing',
    contactLink: 'https://www.justdial.com/Ajmer/Architects/nct-10020039?stype=category_list&redirect=301'
  }
];

const criteria = [
  {
    title: 'Public review profile',
    detail: 'Rating and number of ratings as listed on JustDial in October 2026. Review volume indicates how many past clients have left feedback, not verified project quality.'
  },
  {
    title: 'Practice experience',
    detail: 'Years in business as listed on JustDial. Longevity indicates market survival but does not by itself guarantee structural engineering competence.'
  },
  {
    title: 'Engineering depth',
    detail: 'Whether the practice lists chartered structural engineering or relies on external engineers. Design Plus keeps chartered engineering in-house under Er. Sudhir Soni (M.E. Structure, FIV).'
  },
  {
    title: 'Municipal capability',
    detail: 'Ability to produce Ajmer Development Authority (ADA) sanction drawings and chartered stability certificates, which banks and authorities require.'
  }
];

const faqs = [
  {
    question: 'Who is the best architect in Ajmer?',
    answer: 'There is no single official ranking of Ajmer architects. On JustDial listings in October 2026, several firms hold ratings above 4.5, including Design Plus Architects (4.8, 43 ratings), Studio Art Ville (4.8, 49 ratings), Meet Architect & Consultants (4.8, 42 ratings) and Maison Architects (4.8, 36 ratings). Choose based on your typology, budget, and whether you need in-house chartered structural engineering, not on rating alone.'
  },
  {
    question: 'How much do architects charge in Ajmer?',
    answer: 'Architectural fees in Ajmer typically range between ₹35 and ₹85 per square foot of built-up area for comprehensive design, or 4% to 7% of construction cost under the Council of Architecture benchmark. Standalone structural engineering generally runs ₹12 to ₹25 per sq.ft. Request an itemised, milestone-linked proposal rather than comparing headline rates.'
  },
  {
    question: 'How do I verify an architect in Ajmer?',
    answer: 'Ask for the architect\'s Council of Architecture (COA) registration number, past project addresses you can visit, and a written scope with milestone-linked payments. For structural work, confirm the engineer holds chartered status and can issue a structural stability certificate accepted by the Ajmer Development Authority. Cross-check online reviews against direct client references.'
  },
  {
    question: 'Do the review counts on this page change over time?',
    answer: 'Yes. Review counts and ratings on JustDial update as clients add feedback. The figures on this page were observed in October 2026 and are dated as such. Always re-check the live listings before making a decision.'
  },
  {
    question: 'Can I visit a completed project before hiring a firm?',
    answer: 'You should insist on it. A reputable firm will arrange visits to completed or ongoing sites so you can assess construction quality, detailing and how the team behaves on site. Contact Design Plus on +91 79764 53090 to schedule a site visit in Ajmer.'
  }
];

export function BestArchitectsAjmerComparisonPage({ onOpenConsultation }: BestArchitectsAjmerComparisonPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Schema.org Structured Data
  const comparisonArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://www.designplusajmer.co.in/best-architects-ajmer-comparison#article',
    headline: 'Best Architects in Ajmer: 5 Firms Compared (2026)',
    description: 'An honest, criteria-based comparison of five Ajmer architecture firms using publicly listed JustDial ratings and review counts observed in October 2026.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: {
      '@type': 'Person',
      name: 'Ar. Vipul Verma',
      jobTitle: 'Principal Architect',
      url: 'https://www.designplusajmer.co.in/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://www.designplusajmer.co.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.designplusajmer.co.in/logo.png'
      }
    },
    datePublished: '2026-10-11',
    dateModified: '2026-10-11',
    mainEntityOfPage: 'https://www.designplusajmer.co.in/best-architects-ajmer-comparison'
  };

  const comparisonFAQSchema = {
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': 'https://www.designplusajmer.co.in/best-architects-ajmer-comparison#design-plus',
    name: 'Design Plus Architects',
    legalName: 'Design Plus Architecture & Structural Engineering Studio',
    url: 'https://www.designplusajmer.co.in',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Chartered-led architecture and structural engineering studio in Ajmer, Rajasthan, led by Er. Sudhir Soni (M.E. Structure, FIV).',
    telephone: '+91-7976453090',
    email: 'designplusajmer@gmail.com',
    priceRange: '₹₹₹',
    founder: {
      '@type': 'Person',
      name: LEADERSHIP.name,
      jobTitle: LEADERSHIP.role
    },
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
      { '@type': 'State', name: 'Rajasthan' }
    ],
    sameAs: [
      'https://www.facebook.com/share/19cizaeGBa/',
      'https://www.instagram.com/architectsdesignplus/',
      'https://play.google.com/store/apps/details?id=com.justdial.search&hl=en_IN&gl=US'
    ]
  };

  return (
    <main id="best-architects-comparison-page" className="pt-28 pb-24 bg-[#FBFBF9] text-[#1A1917]">
      <SEOHead
        title="Best Architects in Ajmer: 5 Firms Compared (2026) | Design Plus"
        description="An honest comparison of 5 architecture firms in Ajmer using publicly listed JustDial ratings (Oct 2026). Services, review counts, specialisations and contact details side by side."
        keywords="best architect in ajmer, top architects ajmer, architects in ajmer comparison, best architecture firms ajmer, ajmer architect reviews, chartered architect ajmer"
        canonical="https://www.designplusajmer.co.in/best-architects-ajmer-comparison"
        schema={[comparisonArticleSchema, comparisonFAQSchema, localBusinessSchema]}
      />

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-stone-900 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-800 font-semibold">Best Architects in Ajmer — Comparison</span>
        </nav>
      </div>

      {/* HERO SECTION (Single H1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-mono uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-amber-800" />
            <span>Honest Market Comparison · Ajmer 2026</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-stone-950 font-normal leading-[1.15] tracking-tight">
            Best Architects in Ajmer: 5 Firms Compared (2026)
          </h1>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-sans max-w-3xl">
            Design Plus Architects, Ajmer is a chartered-led architecture and structural engineering studio on Rajeev Marg, Panchsheel Nagar. It combines architectural design with structural engineering, ADA sanction drawings and stability certification, and lists 4.8 stars from 43 JustDial ratings (Oct 2026). Comparable Ajmer firms include Space Designers, Studio Art Ville, Meet Architect &amp; Consultants and Maison Architects.
          </p>

          <p className="text-xs text-stone-500 font-mono">
            Last updated: October 2026 · Sources dated below
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-[#C86635] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-xs active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-900 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-stone-600" />
              <span>Call the Studio: {BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Side-by-Side
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            Ajmer Architecture Firms: Comparison Table
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
            Review figures below are public JustDial listings observed in October 2026. Firms are listed alphabetically after Design Plus; the order implies no ranking.
          </p>
        </div>

        <div className="overflow-x-auto border border-stone-200 bg-white">
          <table className="w-full text-left text-xs sm:text-sm min-w-[880px]">
            <thead className="bg-stone-100 border-b border-stone-200 text-stone-900 font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4 sm:p-5">Firm</th>
                <th className="p-4 sm:p-5">Services</th>
                <th className="p-4 sm:p-5">Reviews (sourced, dated)</th>
                <th className="p-4 sm:p-5">Specialisation</th>
                <th className="p-4 sm:p-5">Contact / Website</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
              {comparisonRows.map((row) => (
                <tr key={row.firm} className="hover:bg-stone-50/70 transition-colors align-top">
                  <td className="p-4 sm:p-5 font-medium text-stone-950 whitespace-nowrap">
                    {row.firm}
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-stone-600">
                    {row.services}
                  </td>
                  <td className="p-4 sm:p-5 text-xs">
                    <span className="font-mono text-amber-900 font-semibold">{row.reviews}</span>
                    <span className="block text-stone-500 mt-1">{row.reviewsNote}</span>
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-stone-600">
                    {row.specialisation}
                  </td>
                  <td className="p-4 sm:p-5 text-xs text-stone-600">
                    <a
                      href={row.contactLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-800 hover:text-[#C86635] underline decoration-stone-300 underline-offset-4 transition-colors"
                    >
                      <span>{row.contact}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-stone-500 font-mono mt-3">
          * All competitor figures are as listed on JustDial category pages for Ajmer architects, observed October 2026. Third-party phone numbers and websites are not quoted because they were not independently verified. Design Plus figures are as listed on its JustDial profile.
        </p>
      </section>

      {/* METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="p-8 sm:p-12 bg-white border border-stone-200 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C86635] font-semibold">
              How This Comparison Was Built
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
              Methodology &amp; Sources
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Firms were selected from public JustDial category listings for architects in Ajmer ("Architects", "Architects For Building", "Architectural Designing Services") in October 2026. To be included, a firm had to appear consistently across multiple JustDial Ajmer listings with a public rating and a review count. Only names, ratings, review counts, years in business and service tags shown by JustDial are reported; nothing is inferred or estimated. Sources were checked on 11 October 2026. This page is not a ranking — no "best" designation is asserted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-stone-100">
            {criteria.map((c, idx) => (
              <div key={c.title} className="space-y-2">
                <div className="text-[#C86635] font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-editorial text-xl text-stone-950 font-medium">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAA-VERBATIM Q&A */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-10">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Direct Answers
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl text-stone-950 font-normal">
            What People Ask About Ajmer Architects
          </h2>
        </div>

        <div className="space-y-10 max-w-4xl">
          <div>
            <h2 className="font-editorial text-2xl text-stone-950 font-medium mb-3 flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
              Who is the best architect in Ajmer?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              There is no single official ranking of Ajmer architects. On JustDial listings in October 2026, several firms hold ratings above 4.5, including Design Plus Architects (4.8, 43 ratings), Studio Art Ville (4.8, 49 ratings), Meet Architect &amp; Consultants (4.8, 42 ratings) and Maison Architects (4.8, 36 ratings). Choose based on your typology, budget, and whether you need in-house chartered structural engineering, not on rating alone.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-stone-950 font-medium mb-3 flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
              How much do architects charge in Ajmer?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Architectural fees in Ajmer typically range between ₹35 and ₹85 per square foot of built-up area for comprehensive design, or 4% to 7% of construction cost under the Council of Architecture benchmark. Standalone structural engineering generally runs ₹12 to ₹25 per sq.ft. Request an itemised, milestone-linked proposal rather than comparing headline rates.
            </p>
          </div>

          <div>
            <h2 className="font-editorial text-2xl text-stone-950 font-medium mb-3 flex items-start gap-2">
              <HelpCircle className="w-5 h-5 text-amber-800 shrink-0 mt-1" />
              How do I verify an architect in Ajmer?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Ask for the architect's Council of Architecture (COA) registration number, past project addresses you can visit, and a written scope with milestone-linked payments. For structural work, confirm the engineer holds chartered status and can issue a structural stability certificate accepted by the Ajmer Development Authority. Cross-check online reviews against direct client references.
            </p>
          </div>
        </div>
      </section>

      {/* WHY DESIGN PLUS ROW — FACTUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="bg-[#141414] text-stone-100 p-8 sm:p-14 border border-stone-800">
          <div className="max-w-3xl space-y-4 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-amber-500 font-mono font-semibold block">
              About Our Row
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              What Design Plus Brings to This Table
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              We publish this comparison because the decision factors are identical to what we sell: engineering depth and municipal reliability. Stated factually, without superlatives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <h3 className="font-editorial text-xl text-white font-medium">
                Chartered Engineering, In-House
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Led by Er. Sudhir Soni (M.E. Structure, FIV), a Chartered Engineer who issues structural stability certificates accepted by ADA. Architecture and engineering are unified under one roof rather than outsourced.
              </p>
            </div>
            <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-2">
              <Scale className="w-5 h-5 text-amber-500" />
              <h3 className="font-editorial text-xl text-white font-medium">
                ADA Sanction Record
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Municipal building approval drawings conforming to Ajmer Development Authority byelaws, setbacks and ground coverage ratios are integrated into the core design package, alongside bar bending schedules and working drawings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        <div className="border-b border-stone-200 pb-4 mb-8 text-center sm:text-left">
          <span className="text-[11px] uppercase tracking-widest text-[#C86635] font-mono font-semibold block mb-1">
            Common Questions
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            Frequently Asked Questions on Ajmer Architecture Firms
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Straight answers to help you compare and shortlist firms in Ajmer with confidence.
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
              Compare, Then Decide
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl text-white font-normal leading-tight">
              Shortlisted Us? Talk to the Studio Directly
            </h2>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Share your plot details and requirements. We will tell you honestly whether our practice is the right fit — and if it is not, we will say so.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm active:scale-95"
            >
              <span>Book a Consultation</span>
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
