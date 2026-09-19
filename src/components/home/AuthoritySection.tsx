import { ShieldCheck, Award, GraduationCap, Building } from 'lucide-react';
import { LEADERSHIP, TEAM_MEMBERS } from '../../data/siteData';

export function AuthoritySection() {
  return (
    <section id="authority-trust" className="py-20 bg-[#161616] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.25em] text-amber-500 font-semibold mb-2">
            03 / Institutional Credentials & Rigor
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            Certified Chartered Engineering meets contemporary architectural vision.
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-4 leading-relaxed">
            Unlike drafting shops or uncredentialed design studios, Design Plus operates under the registered seal of a Chartered Engineer and postgraduate technical specialists in structures, building power systems, and urban planning.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xs bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-medium text-stone-100">
              Chartered Engineer
            </h3>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Institution of Engineers (India)
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Empowered to audit, calculate, and endorse structural stability documentation for municipal authority clearances and high-load safety standards.
            </p>
          </div>

          <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xs bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-medium text-stone-100">
              FIV & M.I.E. Fellow
            </h3>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Institution of Valuers
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Er. Sudhir Soni holds Fellow status (FIV) and corporate membership (M.I.E.), ensuring asset valuation accuracy and structural peer reviews.
            </p>
          </div>

          <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xs bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-medium text-stone-100">
              International Theory
            </h3>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              B.Arch · M.H.S. (Belgium)
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Ar. Vipul Verma incorporates European post-graduate study in Human Settlements (Belgium) with indigenous Rajasthani climate adaptation.
            </p>
          </div>

          <div className="p-6 bg-stone-900/60 border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded-xs bg-amber-950/60 border border-amber-800/40 text-amber-400 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-xl font-medium text-stone-100">
              Integrated Team
            </h3>
            <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">
              Structure, Power & Planning
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              In-house M.Tech Structure, M.Tech Electrical Power Systems, and M.Plan specialists eliminate multidisciplinary friction during execution.
            </p>
          </div>

        </div>

        {/* Verified Team Roster Summary */}
        <div className="p-8 bg-[#1B1B1B] border border-stone-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-800">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-1">
                Studio Leadership Profile
              </div>
              <h4 className="font-editorial text-2xl text-stone-100">
                {LEADERSHIP.name}
              </h4>
              <div className="text-xs text-amber-400 font-sans tracking-wide mt-0.5">
                {LEADERSHIP.qualification}
              </div>
            </div>

            <div className="text-xs text-stone-400 max-w-lg leading-relaxed">
              {LEADERSHIP.bio}
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="space-y-1">
                <div className="font-semibold text-stone-200">{member.name}</div>
                <div className="text-[11px] text-amber-500">{member.qualification}</div>
                <div className="text-[11px] text-stone-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
