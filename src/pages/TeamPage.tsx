import { Link } from 'react-router-dom';
import { ShieldCheck, Award, GraduationCap, Building, ArrowUpRight, Phone, Mail, CheckCircle2, Ruler, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { LEADERSHIP, TEAM_MEMBERS, BUSINESS_INFO } from '../data/siteData';

interface TeamPageProps {
  onOpenConsultation?: () => void;
}

export function TeamPage({ onOpenConsultation }: TeamPageProps) {
  const teamSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Leadership & Engineering Team | Design Plus',
    url: 'https://designplusajmer.co.in/team',
    description: 'Meet the team behind Design Plus Architects & Engineers in Ajmer, Rajasthan: Er. Sudhir Soni, Ar. Vipul Verma, Er. Ankit Soni, Er. Shikha Soni, and Er. Amit Soni.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Engineers',
      founder: {
        '@type': 'Person',
        name: 'Er. Sudhir Soni',
        jobTitle: 'Founder & Principal Structural Engineer',
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
          honorificSuffix: 'M.Tech (Structure)'
        },
        {
          '@type': 'Person',
          name: 'Er. Shikha Soni',
          jobTitle: 'Electrical Power Systems Engineer',
          honorificSuffix: 'M.Tech (Electrical Power System)'
        },
        {
          '@type': 'Person',
          name: 'Er. Amit Soni',
          jobTitle: 'Urban & Infrastructure Planner',
          honorificSuffix: 'M.Plan'
        }
      ]
    }
  };

  const partnerPhotos: Record<string, string> = {
    'Er. Sudhir Soni': '/images/team/sudhir-soni.jpg',
    'Ar. Vipul Verma': '/images/team/vipul-verma.jpg',
    'Er. Ankit Soni': '/images/team/ankit-soni.jpg',
    'Er. Shikha Soni': '/images/team/shikha-soni.jpg',
    'Er. Amit Soni': '/images/team/amit-soni.jpg'
  };

  return (
    <main id="team-page" className="pt-28 pb-20 bg-[#F5F2EB] text-[#1A1917] min-h-screen">
      <SEOHead
        title="Our Team | Design Plus Architects Ajmer"
        description="Meet the Design Plus leadership: Er. Sudhir Soni (Chartered Engineer), Ar. Vipul Verma (Principal Architect), and our M.Tech / M.Plan engineering team in Ajmer."
        keywords="Er Sudhir Soni, Ar Vipul Verma, Er Ankit Soni, Er Shikha Soni, Er Amit Soni, architects team ajmer, structural engineers rajasthan"
        canonical="https://designplusajmer.co.in/team"
        schema={teamSchema}
      />

      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-500 uppercase tracking-widest border-b border-stone-300 pb-3 mb-6">
          <Link to="/" className="hover:text-stone-900 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#C86635]">Practice Team</span>
        </div>

        <div className="max-w-4xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.24em] text-[#C86635] block font-semibold">
            THE MINDS &amp; CREDENTIALS
          </span>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.96] tracking-tight uppercase text-stone-950">
            Principals, Engineers &amp; Planners.
          </h1>
          <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed max-w-2xl font-light">
            Founded in 2004, Design Plus is anchored by chartered structural engineering rigor, European-honed spatial philosophy, electrical power networks, and urban master planning.
          </p>
        </div>
      </div>

      {/* Founder Profile Monograph: Er. Sudhir Soni */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-28">
        <div className="bg-[#141412] text-stone-100 p-8 sm:p-12 lg:p-16 border border-stone-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background technical grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, #EDE9E0 1px, transparent 1px), linear-gradient(to bottom, #EDE9E0 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            {/* Portrait Frame */}
            <div className="lg:col-span-4 space-y-6">
              <div className="aspect-[4/5] w-full overflow-hidden bg-black border border-white/15 relative">
                <img
                  src={partnerPhotos['Er. Sudhir Soni']}
                  alt={LEADERSHIP.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110"
                />
                <div className="absolute top-3 left-3 bg-[#C86635] text-white px-2.5 py-1 text-[9.5px] font-mono tracking-widest uppercase">
                  FOUNDER &amp; PRINCIPAL
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono text-stone-400">
                <div className="text-white font-semibold tracking-wider text-sm">{LEADERSHIP.name}</div>
                <div className="text-[#C86635] text-[11px]">{LEADERSHIP.role}</div>
                <div className="bg-white/5 p-2.5 border border-white/10 text-[10.5px] leading-relaxed">
                  {LEADERSHIP.qualification}
                </div>
              </div>
            </div>

            {/* Biographical & Statutory Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono">
                <span className="bg-[#C86635]/15 text-[#C86635] px-3 py-1 border border-[#C86635]/30 uppercase tracking-wider">
                  CHARTERED ENGINEER (INDIA)
                </span>
                <span className="bg-white/5 text-stone-300 px-3 py-1 border border-white/10 uppercase tracking-wider">
                  FELLOW, INSTITUTION OF VALUERS (FIV)
                </span>
                <span className="bg-white/5 text-stone-300 px-3 py-1 border border-white/10 uppercase tracking-wider">
                  MEMBER, INSTITUTION OF ENGINEERS (M.I.E.)
                </span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal leading-snug">
                Pioneering chartered structural integrity and mathematical precision across Rajasthan.
              </h2>

              <p className="text-sm text-stone-300 font-sans leading-relaxed font-light">
                Er. Sudhir Soni holds a Master’s Degree in Structural Engineering (M.E. Structure) and brings over two decades of technical authority to civil infrastructure, high-rise frameworks, and residential estates. As a Chartered Engineer and Fellow of the Institution of Valuers (FIV), his signatures validate structural stability certifications, post-tensioned slab designs, and municipal compliance files for the Ajmer Development Authority (ADA) and Rajasthan Public Works Department (PWD).
              </p>

              <p className="text-sm text-stone-400 font-sans leading-relaxed font-light">
                His leadership guarantees that every design born within the studio is subjected to rigorous finite-element modeling, earthquake-resistant checks (IS 1893:2016), and soil-strata foundation calculations before a single brick is laid.
              </p>

              {/* Statutory Strengths Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-white font-semibold">STRUCTURAL CODES</div>
                  <div className="text-stone-400 text-[11px]">IS 456, IS 1893, IS 13920, IRC 112</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-semibold">INFRASTRUCTURE</div>
                  <div className="text-stone-400 text-[11px]">Highways, Bridges, Dams, Sluices</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white font-semibold">VALUATION</div>
                  <div className="text-stone-400 text-[11px]">Govt Approved Chartered Valuer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multidisciplinary Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border-b border-stone-300 pb-4 mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-stone-600 font-semibold block">
            CORE PRACTICE SPECIALISTS
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-stone-950 font-normal uppercase mt-1">
            Multidisciplinary Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member, idx) => {
            const photo = partnerPhotos[member.name] || partnerPhotos['Er. Sudhir Soni'];
            return (
              <div 
                key={member.name}
                className="bg-white border border-stone-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-stone-100 relative">
                  <img
                    src={photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#11110F] text-white px-2.5 py-1 text-[9.5px] font-mono tracking-widest uppercase">
                    SPECIALIST // 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#C86635] font-semibold">
                      {member.role}
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-stone-600 bg-stone-100 px-2.5 py-1.5 border border-stone-200 inline-block">
                      {member.qualification}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed font-light">
                    {member.bio}
                  </p>

                  <div className="pt-4 border-t border-stone-200 text-xs font-mono text-stone-600">
                    <span className="text-stone-900 block font-semibold text-[10px] uppercase tracking-wider mb-1">
                      CORE SPECIALIZATION:
                    </span>
                    <span>{member.specialization}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interdisciplinary Collaboration Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#EDE9E0] p-8 sm:p-12 border border-stone-300 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
              Commission the Practice for Your Next Landmark
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-sans font-light">
              From bespoke private residences in Ajmer to state infrastructure viaducts and regional masterplans across Rajasthan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-colors inline-flex items-center gap-2"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[1].raw}`}
              className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.18em] font-medium transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 94614 65610</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
