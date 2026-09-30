import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LEADERSHIP, TEAM_MEMBERS } from '../../data/siteData';

export function LeadershipTeamSection() {
  const allPartners = [LEADERSHIP, ...TEAM_MEMBERS];

  const partnerPhotos: Record<string, string> = {
    'Er. Sudhir Soni': '/images/team/sudhir-soni.jpg',
    'Ar. Vipul Verma': '/images/team/vipul-verma.jpg',
    'Er. Ankit Soni': '/images/team/ankit-soni.jpg',
    'Er. Shikha Soni': '/images/team/shikha-soni.jpg',
    'Er. Amit Soni': '/images/team/amit-soni.jpg'
  };

  return (
    <section 
      id="leadership" 
      aria-label="Practice Leadership and Key Partners"
      className="relative bg-transparent text-[#F4F0E8] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">06.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Leadership &amp; Partners</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Chartered Engineers &amp; Principal Architects
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-3xl">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight uppercase text-white" style={{ textWrap: 'balance' }}>
              The minds behind <br />
              <span className="italic font-light text-[#F4F0E8]/70">the calculations.</span>
            </h2>
          </div>

          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-medium text-[#B86B38] hover:text-[#c47745] transition-colors"
          >
            <span>View Full Studio Roster</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Partner Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {allPartners.map((partner, idx) => {
            const photo = partnerPhotos[partner.name] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85';
            const isFounder = idx === 0;

            return (
              <div 
                key={partner.name}
                className={`bg-black/70 backdrop-blur-md border rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl ${
                  isFounder 
                    ? 'border-[#B86B38] md:col-span-2 lg:col-span-1 ring-2 ring-[#B86B38]/40' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Portrait Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={photo}
                    alt={partner.name}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                  <div className="absolute top-3 left-3 text-white text-[10px] font-mono tracking-wider drop-shadow-sm bg-black/70 px-2.5 py-1 rounded border border-white/15">
                    {isFounder ? 'Founder & CEO' : `Partner 0${idx + 1}`}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between text-[#F4F0E8]">
                  <div className="space-y-1.5">
                    <h3 className="font-editorial text-2xl text-white font-normal">
                      {partner.name}
                    </h3>
                    <div className="text-xs font-mono text-[#B86B38] tracking-wide font-medium">
                      {partner.role}
                    </div>
                    <div className="text-[11px] font-mono text-[#F4F0E8]/70">
                      {partner.qualification}
                    </div>
                  </div>

                  <p className="text-xs text-[#F4F0E8]/80 font-sans font-normal leading-relaxed">
                    {partner.bio}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#F4F0E8]/80">
                    <span className="text-[10px] text-[#F4F0E8]/60 uppercase">
                      {partner.specialization || 'Structural & Spatial'}
                    </span>
                    <Link
                      to="/team"
                      className="text-[#B86B38] hover:text-[#c47745] font-medium transition-colors inline-flex items-center gap-1"
                      aria-label={`View credentials for ${partner.name}`}
                    >
                      <span>Credentials</span>
                      <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
