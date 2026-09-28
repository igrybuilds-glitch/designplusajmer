import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Ruler, Layers, Eye, Compass, Cpu } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Commissions' },
  { id: 'residential', label: 'Residential Villas' },
  { id: 'commercial', label: 'Commercial & Retail' },
  { id: 'structural', label: 'Chartered Structural' },
  { id: 'infrastructure', label: 'Infrastructure & Bridges' },
  { id: 'interiors', label: 'Interiors' }
];

export function FeaturedProjectMonograph() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [blueprintMode, setBlueprintMode] = useState<boolean>(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS.slice(0, 6);
    }
    const matches = PROJECTS.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));
    return matches.length > 0 ? matches.slice(0, 6) : PROJECTS.slice(0, 6);
  }, [activeFilter]);

  const heroProject = filteredProjects[0] || PROJECTS[0];
  const secondaryProjects = filteredProjects.slice(1, 5);

  return (
    <section 
      id="selected-monographs" 
      aria-label="Selected Architectural Monographs"
      className="relative bg-transparent text-[#F4F0E8] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Masthead */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">03 //</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Project Archive &amp; Monographs</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            <span>AJMER · JAIPUR · KISHANGARH · PUSHKAR</span>
            <span className="text-white/30">|</span>
            <span>2004 – 2026 ARCHIVE</span>
          </div>
        </div>

        {/* Headline & Filter Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.96] tracking-tight uppercase text-white" style={{ textWrap: 'balance' }}>
              Selected <br />
              <span className="italic font-light text-[#F4F0E8]/70">built commissions.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F4F0E8]/85 font-serif leading-relaxed">
              Every commission is an intersection of spatial poetry and structural load calculations. Browse residential estates, institutional masterplans, and public infrastructure engineered across Rajasthan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-1 border-b border-white/20 pb-1">
              {FILTER_OPTIONS.map((opt) => {
                const isSelected = activeFilter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setActiveFilter(opt.id)}
                    className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-hidden ${
                      isSelected 
                        ? 'text-[#B86B38] font-semibold border-b-2 border-[#B86B38]' 
                        : 'text-[#F4F0E8]/70 hover:text-white'
                    }`}
                    aria-pressed={isSelected}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-[#B86B38] hover:text-[#c47745] transition-colors shrink-0"
            >
              <span>Full 900+ Archive</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* =====================================================================
            1. FULL-WIDTH HERO MONOGRAPH WITH INTERACTIVE CAD / PHOTO TOGGLE
        ===================================================================== */}
        {heroProject && (
          <div className="mb-14 sm:mb-20">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black/75 backdrop-blur-md shadow-2xl">
              
              {/* Monograph Top Control Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/15 bg-black/90 text-xs font-mono text-[#F4F0E8]/80">
                <div className="flex items-center gap-3">
                  <span className="text-[#B86B38] font-bold">PLATE 01 //</span>
                  <span className="uppercase font-semibold tracking-wider text-white">{heroProject.title}</span>
                  <span className="hidden md:inline-block text-white/30">·</span>
                  <span className="hidden md:inline-block uppercase text-[#F4F0E8]/70">{heroProject.category}</span>
                </div>

                {/* Blueprint / Built Reality Mode Toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#F4F0E8]/60 hidden sm:inline">VIEW MODE:</span>
                  <button
                    type="button"
                    onClick={() => setBlueprintMode(false)}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider cursor-pointer border transition-colors rounded ${
                      !blueprintMode
                        ? 'bg-[#B86B38] text-white border-[#B86B38]'
                        : 'bg-black/60 text-[#F4F0E8]/80 border-white/20 hover:border-white/40'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Built Monolith
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBlueprintMode(true)}
                    className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider cursor-pointer border transition-colors rounded ${
                      blueprintMode
                        ? 'bg-[#0E2C3D] text-[#64B5F6] border-[#64B5F6]/50'
                        : 'bg-black/60 text-[#F4F0E8]/80 border-white/20 hover:border-white/40'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <Cpu className="w-3 h-3" />
                      CAD Blueprint
                    </span>
                  </button>
                </div>
              </div>

              {/* Monograph Image Viewport */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-black">
                
                <img
                  src={heroProject.heroImage || heroProject.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'}
                  alt={heroProject.title}
                  loading="eager"
                  decoding="async"
                  className={`w-full h-full object-cover object-center transition-all duration-700 ${
                    blueprintMode 
                      ? 'filter invert contrast-125 saturate-50 opacity-40 mix-blend-screen' 
                      : 'filter grayscale-[10%] opacity-90'
                  }`}
                />

                {blueprintMode && (
                  <div className="absolute inset-0 pointer-events-none bg-[#091C29]/85 flex flex-col justify-between p-6 sm:p-10 font-mono text-[#64B5F6]">
                    <div className="flex justify-between items-start text-xs border-b border-[#64B5F6]/30 pb-3">
                      <div>
                        <div>DESIGN PLUS ARCHITECTS &amp; ENGINEERS</div>
                        <div className="text-[10px] text-[#90CAF9]">STRUCTURAL DRAWING REF: DP/STR/2023-A01</div>
                      </div>
                      <div className="text-right">
                        <div>IS 456:2000 COMPLIANT</div>
                        <div className="text-[10px] text-[#90CAF9]">SEISMIC ZONE II DUCTILITY</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 py-8 border-y border-[#64B5F6]/20 text-[11px]">
                      <div>
                        <div className="text-[#90CAF9] text-[9px] uppercase">Grid X1-X4</div>
                        <div>7.20m Span RCC</div>
                      </div>
                      <div>
                        <div className="text-[#90CAF9] text-[9px] uppercase">Post-Tension Tendons</div>
                        <div>1860 MPa High-Tensile</div>
                      </div>
                      <div>
                        <div className="text-[#90CAF9] text-[9px] uppercase">Design Mix</div>
                        <div>M35 Controlled RCC</div>
                      </div>
                      <div>
                        <div className="text-[#90CAF9] text-[9px] uppercase">Deflection Safety</div>
                        <div>L/350 Permissible</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end text-xs pt-3 border-t border-[#64B5F6]/30">
                      <div>SCALE: 1:100 @ A1 · DRAWN BY PRINCIPAL STRUCTURAL ENG.</div>
                      <div>APPROVED BY: ER. SUDHIR SONI (M.E. STRUCTURE)</div>
                    </div>
                  </div>
                )}

                {!blueprintMode && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                )}

                {/* Bottom Architectural Story Content */}
                <div className="absolute bottom-6 sm:bottom-10 inset-x-6 sm:inset-x-10 z-10 space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#F4F0E8]/80">
                    <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded border border-white/15">
                      <MapPin className="w-3.5 h-3.5 text-[#B86B38]" />
                      {heroProject.location}
                    </span>
                    <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded border border-white/15">
                      <Calendar className="w-3.5 h-3.5 text-[#B86B38]" />
                      {heroProject.year}
                    </span>
                    <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded border border-white/15">
                      <Ruler className="w-3.5 h-3.5 text-[#B86B38]" />
                      {heroProject.builtUpArea}
                    </span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
                    {heroProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F4F0E8]/85 font-sans font-light max-w-2xl line-clamp-2 leading-relaxed">
                    {heroProject.brief}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to={`/projects/${heroProject.id}`}
                      className="inline-flex items-center gap-2 bg-[#B86B38] hover:bg-[#a65d37] text-white px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-wider transition-colors rounded-full shadow-lg"
                    >
                      <span>Explore Monograph</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            2. SECONDARY GRID OF BUILT COMMISSIONS (4 MONOGRAPHS)
        ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryProjects.map((proj, idx) => (
            <Link
              key={proj.id}
              to={`/projects/${proj.id}`}
              className="group relative bg-black/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:border-[#B86B38] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                <img
                  src={proj.heroImage || proj.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-white border border-white/15">
                  PLATE 0{idx + 2}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#B86B38]">
                    <span>{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-normal text-white group-hover:text-[#B86B38] transition-colors leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[#F4F0E8]/70 font-sans line-clamp-2">
                    {proj.brief}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono text-[#F4F0E8]/80">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#B86B38]" />
                    {proj.location}
                  </span>
                  <span className="text-[#B86B38] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
