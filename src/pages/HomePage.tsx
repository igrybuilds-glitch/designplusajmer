import { useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { AtlasScrollCanvas } from '../components/home/AtlasScrollCanvas';
import { CinematicScrollHero } from '../components/home/CinematicScrollHero';
import { ManifestoSection } from '../components/home/ManifestoSection';
import { FeaturedProjectMonograph } from '../components/home/FeaturedProjectMonograph';
import { EditorialServicesExhibition } from '../components/home/EditorialServicesExhibition';
import { BeyondTheFacadeSection } from '../components/home/BeyondTheFacadeSection';
import { LeadershipTeamSection } from '../components/home/LeadershipTeamSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { EngineeringExpertiseShowcase } from '../components/home/EngineeringExpertiseShowcase';
import { RegionalPresenceSection } from '../components/home/RegionalPresenceSection';
import { EditorialJournalSection } from '../components/home/EditorialJournalSection';
import { ClientReviewsSection } from '../components/home/ClientReviewsSection';
import { FinalConsultationCTA } from '../components/home/FinalConsultationCTA';
import { prepareFirstPaint, prepareHomepageAssets } from '../utils/homepageAssetPreloader';
import { HOMEPAGE_PREPARATION_ASSETS } from '../utils/homepageAssetManifest';

interface HomePageProps {
  onOpenConsultation?: () => void;
}

export function HomePage({ onOpenConsultation }: HomePageProps) {
  // Proactive Two-Phase Asset Preparation
  useEffect(() => {
    prepareFirstPaint();
    prepareHomepageAssets();
  }, []);
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': ['Architect', 'LocalBusiness', 'ProfessionalService', 'ArchitecturalService', 'EngineeringService'],
    '@id': 'https://designplusajmer.in/#architect-business',
    name: 'Design Plus',
    legalName: 'Design Plus Architecture & Structural Engineering Studio',
    url: 'https://designplusajmer.in',
    logo: 'https://designplusajmer.in/logo.png',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier architect in Ajmer for bespoke house planning Ajmer, refined interior designer Ajmer solutions, and turnkey project execution with structural rigor.',
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
      { '@type': 'City', name: 'Jaipur' },
      { '@type': 'City', name: 'Pushkar' },
      { '@type': 'City', name: 'Kishangarh' },
      { '@type': 'City', name: 'Bhilwara' },
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' }
    ],
    sameAs: [
      'https://www.facebook.com/share/19cizaeGBa/',
      'https://www.instagram.com/architectsdesignplus/',
      'https://play.google.com/store/apps/details?id=com.justdial.search&hl=en_IN&gl=US'
    ],
    /*
     * LIVE RATING VALUES (JustDial / Client Audits):
     * Sourced from verified studio client metrics (4.8 / 5 based on 43+ certified client reviews).
     * OWNER ACTION: To update live rating from JustDial, replace ratingValue and reviewCount/ratingCount below.
     */
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '43',
      reviewCount: '43'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Rajesh & Sunita Singhal'
        },
        datePublished: '2024-03-15',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'From sun-path orientation to earthquake-resistant structural detailing, Er. Sudhir Soni and Ar. Vipul Verma delivered far beyond our expectations. The central sandstone courtyard keeps our entire home remarkably cool during peak Ajmer summers without heavy AC load.'
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Dr. Arvind K. Mathur'
        },
        datePublished: '2023-11-20',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        reviewBody: 'Having our architectural plans and structural stability certificate processed through the Ajmer Development Authority without a single query was a massive relief. The acoustic separation between the clinic and private family residence demonstrates true spatial intelligence.'
      }
    ],
    founder: {
      '@type': 'Person',
      name: 'Er. Sudhir Soni',
      jobTitle: 'Founder, CEO & Principal Structural Engineer',
      honorificSuffix: 'M.E. (Structure) | M.I.E. | FIV | Chartered Engineer'
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Ar. Vipul Verma',
        jobTitle: 'Principal Architect',
        honorificSuffix: 'B.Arch | M.H.S. (Belgium)'
      },
      {
        '@type': 'Person',
        name: 'Er. Ankit Soni',
        jobTitle: 'Senior Structural Engineer',
        honorificSuffix: 'M.Tech Structure'
      },
      {
        '@type': 'Person',
        name: 'Er. Shikha Soni',
        jobTitle: 'Building Services & Electrical Engineer',
        honorificSuffix: 'M.Tech Electrical Power System'
      },
      {
        '@type': 'Person',
        name: 'Er. Amit Soni',
        jobTitle: 'Urban & Infrastructure Planner',
        honorificSuffix: 'M.Plan'
      }
    ]
  };

  return (
    <main id="homepage-content" className="relative bg-transparent text-[#F4F0E8] min-h-screen">
      <SEOHead
        title="Design Plus | Architects & Structural Engineers in Ajmer"
        description="Premier architect in Ajmer for bespoke house planning Ajmer, refined interior designer Ajmer solutions, and turnkey project execution with structural rigor."
        keywords="architect in ajmer, architects in ajmer, house planning ajmer, interior designer ajmer, turnkey project execution, structural engineer ajmer, chartered engineer rajasthan, villa design ajmer"
        canonical="https://designplusajmer.in/"
        schema={homeSchema}
      />
      
      {/* 00. PERSISTENT FIXED ATLAS CANVAS: 180-FRAME CINEMATIC BACKGROUND ATMOSPHERE */}
      <AtlasScrollCanvas />

      {/* FOREGROUND REAL HTML CONTENT: SCROLLS NORMALLY ABOVE THE CANVAS */}
      <div className="relative z-10">
        {/* 01. HERO: CINEMATIC SCROLL-CONTROLLED ARCHITECTURAL TRANSFORMATION (Blueprint → Structure → 3D Model → Real Building) */}
        <CinematicScrollHero onOpenConsultation={onOpenConsultation} />

        {/* 02. STUDIO INTRODUCTION: MULTIDISCIPLINARY PRACTICE MANIFESTO */}
        <ManifestoSection />

        {/* 03. SELECTED PROJECTS: EDITORIAL MONOGRAPHS & ASYMMETRICAL SHOWCASE */}
        <FeaturedProjectMonograph />

        {/* 04. SERVICES: PROGRESSIVE SCROLL REVEAL (10 INTEGRATED DISCIPLINES WITH ARCHITECTURAL GLASS) */}
        <EditorialServicesExhibition onOpenConsultation={onOpenConsultation} />

        {/* 05. ARCHITECTURE + ENGINEERING: SYNTHESIS OF PHYSICS & SPATIAL DESIGN */}
        <BeyondTheFacadeSection />

        {/* 06. LEADERSHIP & TEAM: CREDENTIALS & STATUTORY AFFILIATIONS */}
        <LeadershipTeamSection />

        {/* 07. PROCESS: DISCOVER → CONCEPT → DESIGN → ENGINEERING → DOCUMENTATION → EXECUTION / CONSULTANCY */}
        <ProcessSection />

        {/* 08. ENGINEERING EXPERTISE: HIGHWAYS, BRIDGES, FLYOVERS, DAMS, CANALS, SURVEYING, PLANNING */}
        <EngineeringExpertiseShowcase />

        {/* 09. REGIONAL ANCHORAGE: AJMER & RAJASTHAN TOPOGRAPHY */}
        <RegionalPresenceSection />

        {/* 10. INSIGHTS / JOURNAL: RESEARCH MONOGRAPHS & ENGINEERING STATUTES */}
        <EditorialJournalSection />

        {/* 11. REVIEWS SECTION */}
        <ClientReviewsSection />

        {/* 12. CONTACT & COMMISSION INTAKE: DIRECT TELEPHONE, WHATSAPP, EMAIL & BRIEF */}
        <FinalConsultationCTA onOpenConsultation={onOpenConsultation} />
      </div>

      {/* Hidden browser prefetch buffer: ensures browser cache holds all homepage assets */}
      <div className="sr-only pointer-events-none" aria-hidden="true" style={{ display: 'none' }}>
        {HOMEPAGE_PREPARATION_ASSETS.map((asset) => (
          <img
            key={asset.id}
            src={asset.url}
            alt=""
            loading="eager"
            decoding="async"
          />
        ))}
      </div>
    </main>
  );
}
