import { Link } from 'react-router-dom';
import { ShieldCheck, Award, GraduationCap, Building, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { LEADERSHIP, TEAM_MEMBERS, BUSINESS_INFO } from '../data/siteData';

interface AboutPageProps {
  onOpenConsultation?: () => void;
}

export function AboutPage({ onOpenConsultation }: AboutPageProps) {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Design Plus',
    url: 'https://designplusajmer.in/about',
    description: 'Learn about Design Plus, led by Chartered Engineer Er. Sudhir Soni and Principal Architect Ar. Vipul Verma.',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      founder: {
        '@type': 'Person',
        name: 'Er. Sudhir Soni',
        jobTitle: 'CEO & Principal Structural Engineer'
      }
    }
  };

  return (
    <main id="about-page" className="pt-28 pb-20">
      <SEOHead
        title="About Design Plus | Architects & Structural Engineers Ajmer"
        description="Meet Er. Sudhir Soni (Chartered Engineer) and Ar. Vipul Verma (Principal Architect). Over 20+ years of engineering heritage and 900+ bespoke projects in Rajasthan."
        keywords="about design plus, Er Sudhir Soni, Ar Vipul Verma, architects ajmer history, chartered engineer credentials, structural consultant rajasthan"
        canonical="https://designplusajmer.in/about"
        schema={aboutSchema}
      />

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle="About The Studio"
        title="An interdisciplinary studio uniting Chartered Structural Engineering with architectural craft."
        description="Based in Ajmer, Design Plus was established on the principle that enduring buildings emerge from an inseparable union of structural safety, environmental context, and spatial clarity."
        backgroundImageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Design Plus architectural drafting and structural calculations studio"
      />

      {/* Leadership Profile: Er. Sudhir Soni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#141414] text-stone-100 p-8 sm:p-12 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                Principal & Founder
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-white font-medium">
                {LEADERSHIP.name}
              </h2>
              <div className="text-xs text-amber-300 font-sans tracking-wide leading-relaxed">
                {LEADERSHIP.qualification}
              </div>

              <div className="pt-4 border-t border-stone-800 space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Chartered Engineer (India)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Fellow, Institution of Valuers (FIV)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-400" />
                  <span>Member, Institution of Engineers (M.I.E.)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
              <p>
                {LEADERSHIP.bio}
              </p>
              <p className="text-stone-400 text-sm">
                With a Master’s Degree in Structural Engineering (M.E. Structure) and decades of field immersion, Er. Sudhir Soni has overseen structural calculations, soil load assessments, and foundation engineering across residential, commercial, and industrial facilities in Rajasthan.
              </p>
              <p className="text-stone-400 text-sm">
                His leadership provides clients with the rare assurance that every architectural plan drafted at Design Plus is mathematically vetted to meet seismic, wind, and municipal safety codes before breaking ground.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Multidisciplinary Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 pb-4 border-b border-stone-200">
          <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
            Practice Specialists
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-normal">
            Core Professional Team
          </h2>
          <p className="text-sm text-stone-600 mt-1 max-w-xl">
            A balanced interdisciplinary collective covering architectural philosophy, structural mechanics, electrical power networks, and urban zoning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="p-8 bg-white border border-stone-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                    {member.role}
                  </span>
                  <GraduationCap className="w-4 h-4 text-stone-400" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                  {member.name}
                </h3>
                <div className="text-xs text-stone-500 font-mono">
                  {member.qualification}
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 text-xs text-stone-500">
                <span className="font-medium text-stone-800">Core Focus: </span>
                {member.specialization}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Studio Location & Contact Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 bg-[#F5F5F0] border border-stone-300 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              Visit The Ajmer Studio
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
              Schedule an in-person review of your site.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Bring your plot dimensions, municipal notices, or architectural references.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-colors flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <Link
              to="/contact"
              className="border border-stone-300 bg-white hover:bg-stone-100 text-stone-900 px-6 py-3 text-xs tracking-wider uppercase font-semibold transition-colors"
            >
              Contact Directory
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
