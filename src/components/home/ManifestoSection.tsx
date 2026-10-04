import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Compass, Ruler, ShieldCheck, Layers, CornerDownRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface DisciplineItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  standards: string;
  coordinates: string;
  image: string;
  tag: string;
  stats: { label: string; value: string };
  pos: { top: string; left: string };
}

const DISCIPLINES: DisciplineItem[] = [
  {
    id: 'architecture',
    number: '01',
    name: 'ARCHITECTURE',
    subtitle: 'Contextual Form & Bioclimatic Spaces',
    description: 'Contemporary Rajasthani vernacular, climate-responsive courtyards, thermal mass sandstone screens, and bespoke private estates engineered for arid microclimates.',
    standards: 'COA REG. · ECBC COMPLIANT',
    coordinates: 'LAT 26.4499° N · LON 74.6399° E',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'SPATIAL VOLUMES',
    stats: { label: 'Principal', value: 'Ar. Vipul Verma (Belgium)' },
    pos: { top: '14%', left: '8%' }
  },
  {
    id: 'structural',
    number: '02',
    name: 'STRUCTURAL ENGINEERING',
    subtitle: 'Chartered Physics & High-Span Dynamics',
    description: 'Post-tensioned RCC slabs, ductile earthquake-resistant frames, seismic shear cores, and column-free cantilevered spaces calculated from fundamental mechanics.',
    standards: 'IS 456 · IS 1893:2016 · IS 13920',
    coordinates: 'SEISMIC ZONE II/III · γf = 1.50',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80',
    tag: 'LOAD PATHS',
    stats: { label: 'Principal', value: 'Er. Sudhir Soni (M.E. Structure)' },
    pos: { top: '56%', left: '68%' }
  },
  {
    id: 'infrastructure',
    number: '03',
    name: 'INFRASTRUCTURE & BRIDGES',
    subtitle: 'Heavy Civil & Transit Corridors',
    description: 'Multi-span pre-stressed box girder flyovers, railway overbridges (ROBs), highway geometrics, and irrigation check dams engineered across Rajasthan topography.',
    standards: 'IRC:112 · IRC:6 · IS 6512',
    coordinates: 'CLASS 70R FREIGHT RATED',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    tag: 'CIVIL SCALE',
    stats: { label: 'Expertise', value: 'Bridges & Highway Engineering' },
    pos: { top: '22%', left: '72%' }
  },
  {
    id: 'interiors',
    number: '04',
    name: 'INTERIOR ARCHITECTURE',
    subtitle: 'Acoustic Millwork & Material Honesty',
    description: 'Bespoke architectural joinery, indirect luminous coves, natural lime plaster finishes, and tactile stone monoliths designed for tactile and visual harmony.',
    standards: 'LUX LEVEL · ACOUSTIC NC-35',
    coordinates: 'CUSTOM JOINERY SPEC',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    tag: 'MILLWORK',
    stats: { label: 'Execution', value: 'Turnkey Millwork & Lighting' },
    pos: { top: '70%', left: '12%' }
  },
  {
    id: 'mep',
    number: '05',
    name: 'MEP & SERVICES',
    subtitle: 'Solar, HVAC & Hydraulic Networks',
    description: 'Net-zero solar photovoltaic integration, Variable Refrigerant Flow (VRF) climate control, rainwater harvesting recharge wells, and hydro-pneumatic plumbing.',
    standards: 'NBC 2016 · LEED GOLD READY',
    coordinates: 'WATER & ENERGY BALANCE',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80',
    tag: 'BUILDING PHYSICS',
    stats: { label: 'Efficiency', value: 'Net-Zero Solar & MEP' },
    pos: { top: '42%', left: '85%' }
  },
  {
    id: 'survey',
    number: '06',
    name: 'GEOTECHNICAL & SURVEY',
    subtitle: 'Subsurface Strata & Total Station',
    description: 'In-house geotechnical borehole core drilling, Standard Penetration Testing (SPT), safe bearing capacity (SBC) calculations, and electronic digital leveling.',
    standards: 'IS 1892 · IS 2131 · DGPS RTK',
    coordinates: 'SBC 180–450 kN/m²',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    tag: 'SUB-STRATA',
    stats: { label: 'Apparatus', value: 'DGPS & SPT Borehole Unit' },
    pos: { top: '38%', left: '4%' }
  },
  {
    id: 'consultancy',
    number: '07',
    name: 'STATUTORY CONSULTANCY',
    subtitle: 'Chartered Valuation & Stability Audits',
    description: 'Chartered Engineer certifications, high-rise structural stability audits, bank asset valuations, and government municipal clearance representation across Rajasthan.',
    standards: 'CHARTERED ENG. · FIV FELLOW',
    coordinates: 'GOVT. & BANK APPROVED',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    tag: 'COMPLIANCE',
    stats: { label: 'Affiliation', value: 'Chartered Engineer & FIV' },
    pos: { top: '36%', left: '78%' }
  }
];

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplineItem>(DISCIPLINES[0]);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleSelectDiscipline = useCallback((item: DisciplineItem) => {
    setSelectedDiscipline(item);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="manifesto" 
      aria-label="Practice Manifesto — One Studio, Many Disciplines"
      className="relative bg-transparent text-[#F4F0E8] overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      {/* Pinned Cinematic Presentation Stage (Height-calibrated) */}
      <div 
        ref={stickyRef}
        className="relative w-full min-h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-12 select-none"
      >
        
        {/* =====================================================================
            1. TOP BAR: CHAPTER INDEX & STATUTORY BENCHMARKS
        ===================================================================== */}
        <header className="relative z-30 flex items-center justify-between border-b border-white/20 pb-3 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-3">
            <span className="text-[#B86B38] font-bold">02 //</span>
            <span className="uppercase tracking-[0.24em] font-semibold text-[#F4F0E8]">
              ARCHITECTS & ENGINEERS. UNDER ONE ROOF.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-wider text-[#F4F0E8]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B86B38]" />
              EST. 2006 · AJMER, RAJASTHAN
            </span>
            <span className="text-white/30">|</span>
            <span>DESIGN + ENGINEERING, TOGETHER</span>
            <span className="text-white/30">|</span>
            <span className="font-semibold text-white">IS 456 · IS 1893 · IRC 112</span>
          </div>
        </header>

        {/* =====================================================================
            2. CENTRAL EDITORIAL STAGE
        ===================================================================== */}
        <div className="relative flex-1 flex flex-col items-center justify-center my-4 sm:my-6 overflow-hidden">
          
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 pointer-events-none" aria-hidden="true" />

          {/* Central Monumental Headline */}
          <div className="manifesto-title-main relative z-20 text-center max-w-4xl px-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#B86B38] mb-2 sm:mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>WHAT WE DO</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight uppercase text-[#F4F0E8]">
              ARCHITECTS &amp; ENGINEERS. <br />
              <span className="italic font-light text-[#F4F0E8]/70">UNDER ONE ROOF.</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-[#F4F0E8]/90 font-serif max-w-2xl mx-auto leading-relaxed">
              We design your home or building AND make sure it stands strong. One team handles everything — from the first drawing to the final construction.
            </p>

            {/* Quick Interactive Discipline Selector Tabs */}
            <div className="mt-5 sm:mt-6 relative z-40 flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 max-w-3xl mx-auto p-1.5 sm:p-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)] pointer-events-auto">
              {DISCIPLINES.map((d) => {
                const isCurrent = selectedDiscipline.id === d.id;

                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleSelectDiscipline(d)}
                    className={`group relative rounded-full px-3 sm:px-3.5 py-1.5 text-xs font-sans font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none active:scale-90 ${
                      isCurrent
                        ? 'bg-[#B86B38] text-white shadow-md ring-2 ring-[#B86B38]/50 scale-[1.04]'
                        : 'bg-white/10 hover:bg-white/20 text-[#F4F0E8] border border-white/15'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                        isCurrent ? 'bg-white/30 text-white' : 'bg-white/20 text-[#F4F0E8]'
                      }`}
                    >
                      {d.number}
                    </span>
                    <span className="font-sans font-semibold uppercase tracking-wider text-[11px]">
                      {d.name.split(' ')[0]}
                    </span>
                    {isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================================
              3. FLOATING DISCIPLINE SATELLITES
          =================================================================== */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {DISCIPLINES.map((disc, idx) => {
              const isSelected = selectedDiscipline.id === disc.id;
              return (
                <div
                  key={disc.id}
                  style={{ top: disc.pos.top, left: disc.pos.left }}
                  className={`disc-card-${idx} absolute pointer-events-auto transition-transform duration-300 z-20 ${
                    isSelected ? 'scale-105 z-30' : 'hover:scale-102'
                  }`}
                >
                  <div
                    onClick={() => handleSelectDiscipline(disc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelectDiscipline(disc)}
                    className={`p-3 w-56 xl:w-64 border transition-all cursor-pointer backdrop-blur-md text-left rounded-xl ${
                      isSelected
                        ? 'bg-black/85 border-[#B86B38] shadow-xl ring-1 ring-[#B86B38]/50 text-white'
                        : 'bg-black/60 border-white/20 shadow-md hover:border-white/40 text-[#F4F0E8]/90'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#F4F0E8]/60 pb-1.5 border-b border-white/10">
                      <span className="text-[#B86B38] font-bold">{disc.number} //</span>
                      <span className="uppercase tracking-widest">{disc.tag}</span>
                    </div>

                    <div className="pt-2">
                      <h4 className="font-editorial text-sm font-semibold uppercase text-white tracking-tight leading-snug">
                        {disc.name}
                      </h4>
                      <p className="text-[11px] font-mono text-[#F4F0E8]/70 truncate mt-0.5">
                        {disc.subtitle}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#F4F0E8]/60">
                      <span className="truncate max-w-[140px]">{disc.standards}</span>
                      <ArrowUpRight className={`w-3 h-3 text-[#B86B38] transition-transform ${isSelected ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===================================================================
              4. ACTIVE DISCIPLINE DETAIL DRAWER / VIGNETTE INSPECTOR
          =================================================================== */}
          <div className="relative z-20 mt-6 sm:mt-8 w-full max-w-4xl mx-auto bg-black/75 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-2xl rounded-2xl text-[#F4F0E8]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-4 relative overflow-hidden bg-black border border-white/20 aspect-[4/3] group rounded-xl">
                <img
                  src={selectedDiscipline.image}
                  alt={`${selectedDiscipline.name} Architectural Monograph`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2 left-2 text-[9px] font-mono text-white bg-black/70 px-2 py-0.5 uppercase tracking-wider rounded">
                  SPEC {selectedDiscipline.number}
                </div>
                <div className="absolute bottom-2 inset-x-2 text-[10px] font-mono text-[#F4F0E8]/90 truncate">
                  {selectedDiscipline.coordinates}
                </div>
              </div>

              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#B86B38] border-b border-white/15 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{selectedDiscipline.number}</span>
                    <span className="uppercase tracking-widest text-white font-semibold">{selectedDiscipline.name}</span>
                  </div>
                  <span className="text-[11px] text-[#F4F0E8]/70">{selectedDiscipline.standards}</span>
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal leading-snug">
                  {selectedDiscipline.subtitle}
                </h3>

                <p className="text-xs sm:text-sm text-[#F4F0E8]/85 leading-relaxed font-sans">
                  {selectedDiscipline.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/15 text-xs font-mono">
                  <div className="text-[#F4F0E8]/85">
                    <span className="text-[#F4F0E8]/60 uppercase tracking-wider">{selectedDiscipline.stats.label}: </span>
                    <strong className="text-white font-medium">{selectedDiscipline.stats.value}</strong>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.16em] font-semibold text-white hover:text-[#B86B38] transition-colors"
                  >
                    <span>View Engineering Specifications</span>
                    <CornerDownRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* =====================================================================
            5. BOTTOM FOUNDATION
        ===================================================================== */}
        <footer className="manifesto-foundation-bar relative z-30 border-t border-white/20 pt-4 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center text-xs font-mono text-[#F4F0E8]/85">
            
            <div className="md:col-span-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B86B38] shrink-0" />
              <div>
                <span className="font-semibold text-white block">DUAL PRACTICE LEADERSHIP</span>
                <span className="text-[11px] text-[#F4F0E8]/70 block">
                  Er. Sudhir Soni (Structural) &amp; Ar. Vipul Verma (Architecture)
                </span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-[#F4F0E8]/80">
              <span className="flex items-center gap-1 text-white font-medium">
                <Check className="w-3.5 h-3.5 text-[#B86B38]" />
                20+ Years Zero Failures
              </span>
              <span>·</span>
              <span>Institution of Engineers (India)</span>
              <span>·</span>
              <span>Council of Architecture</span>
              <span>·</span>
              <span>Fellow, FIV</span>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-white hover:text-[#B86B38] transition-colors"
              >
                <span>Full Studio Monograph</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </footer>

      </div>
    </section>
  );
}
