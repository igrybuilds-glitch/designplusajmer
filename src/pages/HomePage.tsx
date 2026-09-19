import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { SelectedProjectsSection } from '../components/home/SelectedProjectsSection';
import { AuthoritySection } from '../components/home/AuthoritySection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { TypologiesSection } from '../components/home/TypologiesSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { CaseStudySection } from '../components/home/CaseStudySection';
import { WhyDesignPlusSection } from '../components/home/WhyDesignPlusSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { LocalRelevanceSection } from '../components/home/LocalRelevanceSection';
import { FAQSection } from '../components/home/FAQSection';
import { ConsultationCTASection } from '../components/home/ConsultationCTASection';

interface HomePageProps {
  onOpenConsultation?: () => void;
}

export function HomePage({ onOpenConsultation }: HomePageProps) {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Design Plus',
    url: 'https://designplusajmer.in',
    logo: 'https://designplusajmer.in/logo.png',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Premier architectural and chartered structural engineering practice in Ajmer, Rajasthan. Led by Er. Sudhir Soni (Chartered Engineer, M.E. Structure).',
    telephone: ['+91-7976453090', '+91-9461465610'],
    email: 'designplusajmer@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN'
    },
    founder: {
      '@type': 'Person',
      name: 'Er. Sudhir Soni',
      jobTitle: 'CEO & Principal Structural Engineer'
    }
  };

  return (
    <main id="homepage-content">
      <SEOHead
        title="Design Plus | Architects & Chartered Structural Engineers Ajmer"
        description="Premier architectural and chartered structural engineering studio in Ajmer, Rajasthan led by Er. Sudhir Soni. 20+ years of experience & 900+ bespoke projects."
        keywords="architects in ajmer, structural engineer ajmer, chartered engineer rajasthan, house plan ajmer, 3d elevation design, ADA building approval, residential villa architect ajmer"
        canonical="https://designplusajmer.in/"
        schema={homeSchema}
      />
      
      {/* 01 HERO */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 02 SELECTED PROJECTS */}
      <SelectedProjectsSection />

      {/* 03 AUTHORITY / TRUST */}
      <AuthoritySection />

      {/* 04 ABOUT DESIGN PLUS */}
      <AboutPreviewSection />

      {/* 05 ARCHITECTURAL TYPOLOGIES */}
      <TypologiesSection />

      {/* 06 SERVICES */}
      <ServicesSection />

      {/* 07 HOW WE WORK (PROCESS) */}
      <ProcessSection />

      {/* 08 PROJECT STORY / CASE STUDY */}
      <CaseStudySection />

      {/* 09 WHY DESIGN PLUS */}
      <WhyDesignPlusSection />

      {/* 10 TESTIMONIALS / CLIENT TRUST */}
      <TestimonialsSection />

      {/* 11 LOCAL / SERVICE AREA RELEVANCE */}
      <LocalRelevanceSection />

      {/* 12 FAQ */}
      <FAQSection />

      {/* 13 CONSULTATION CTA */}
      <ConsultationCTASection />
    </main>
  );
}
