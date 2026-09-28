import { useState } from 'react';
import { Layers } from 'lucide-react';

type TechnicalTab = 'cantilever' | 'bridges' | 'hydraulics' | 'geotechnical';

interface TechnicalDetail {
  id: TechnicalTab;
  title: string;
  code: string;
  tagline: string;
  loadType: string;
  safetyFactor: string;
  description: string;
  specs: { label: string; value: string }[];
  diagramTitle: string;
}

const TECHNICAL_DATA: Record<TechnicalTab, TechnicalDetail> = {
  cantilever: {
    id: 'cantilever',
    title: 'Post-Tensioned RCC Cantilevers & Shear Cores',
    code: 'IS 456:2000 · IS 13920:2016',
    tagline: 'Deflection-Controlled High-Span Architecture',
    loadType: 'Dead Load + Imposed Live Load (3.0 kN/m²) + Wind Pressure',
    safetyFactor: 'γf = 1.50 (Ultimate Limit State)',
    description: 'Calculated using 3D finite element structural analysis to permit 4.5-meter column-free cantilevers with minimal deflection (span/350 criteria), integrating post-tensioned high-tensile steel tendons within high-grade M35 concrete.',
    specs: [
      { label: 'Max Cantilever Projection', value: '4.80 meters' },
      { label: 'Permissible Deflection', value: '< 13.7 mm (Actual: 8.2 mm)' },
      { label: 'Concrete Grade', value: 'M35 / M40 Design Mix' },
      { label: 'Tendon Pre-Stress', value: '1860 MPa Low-Relaxation Strand' }
    ],
    diagramTitle: 'Moment Envelope & Tension Cable Trajectory'
  },
  bridges: {
    id: 'bridges',
    title: 'IRC Class 70R Multi-Span Flyovers & Viaducts',
    code: 'IRC:112-2020 · IRC:6-2017',
    tagline: 'Heavy Freight Superstructure & Pier Foundations',
    loadType: 'Tracked & Wheeled 70R Military / Freight Vehicle Dynamic Impact',
    safetyFactor: 'IRC Limit State Method (Serviceability & Ultimate)',
    description: 'Structural engineering for elevated road crossings and river bridges. Features continuous pre-stressed concrete box girders, POT-PTFE elastomeric bearings, and deep bored cast-in-situ pile groups designed for seismic and scour resistance.',
    specs: [
      { label: 'Deck Superstructure', value: 'PSC Box Girder (32m Span)' },
      { label: 'Foundation Type', value: '1200mm Bored Cast-in-Situ Piles' },
      { label: 'Bearing Type', value: 'POT-PTFE Multi-Rotational' },
      { label: 'Expansion Joint', value: 'Modular Strip Seal Joint' }
    ],
    diagramTitle: 'Cross-Sectional Stress Distribution & Bending Diagram'
  },
  hydraulics: {
    id: 'hydraulics',
    title: 'Gravity Dams, Spillways & Canal Aqueducts',
    code: 'IS 6512 · IS 11130 · IS 7335',
    tagline: 'Hydrostatic Pressure & Uplift Force Management',
    loadType: 'Reservoir Hydrostatic Pressure + Silt Load + Seismic Pseudo-Static',
    safetyFactor: 'Factor of Safety against Sliding > 1.50, Overturning > 2.00',
    description: 'Geotechnical and hydraulic design of masonry and mass-concrete gravity dams, Ogee spillways with energy dissipators, and canal cross-drainage aqueducts rated for peak monsoon flood discharge.',
    specs: [
      { label: 'Discharge Capacity', value: '1,200 m³/s Flood Flow' },
      { label: 'Uplift Pressure Relief', value: 'Foundation Drainage Gallery' },
      { label: 'Energy Dissipation', value: 'Type II Stilling Basin' },
      { label: 'Concrete / Masonry', value: 'M25 Controlled Mass Pour' }
    ],
    diagramTitle: 'Hydrostatic Pressure Triangle & Uplift Diagram'
  },
  geotechnical: {
    id: 'geotechnical',
    title: 'Borehole Stratigraphy & Safe Bearing Capacity',
    code: 'IS 1892:1979 · IS 2131 · IS 2950',
    tagline: 'Subsurface Shear Strength & Foundation Safety',
    loadType: 'Building Superstructure Dead + Live Load Reaction via Raft / Piles',
    safetyFactor: 'Factor of Safety = 3.0 against Shear Failure',
    description: 'In-house rotary core drilling, Standard Penetration Testing (SPT N-values), cohesive soil triaxial shear testing, and differential settlement analysis to determine optimum foundation depth in Rajasthan soil strata.',
    specs: [
      { label: 'Safe Bearing Capacity (SBC)', value: '180 – 450 kN/m² (Site Specific)' },
      { label: 'SPT N-Value Range', value: 'N > 30 (Dense Strata at 3.5m)' },
      { label: 'Foundation Type', value: 'Isolated Footing / Raft / Pile' },
      { label: 'Water Table Depth', value: 'Below Zone of Influence' }
    ],
    diagramTitle: 'Borehole SPT Log & Stratigraphy Cross Section'
  }
};

export function BeyondTheFacadeSection() {
  const [activeTab, setActiveTab] = useState<TechnicalTab>('cantilever');
  const currentData = TECHNICAL_DATA[activeTab];

  return (
    <section 
      id="engineering"
      className="relative bg-transparent text-[#F4F0E8] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Strip */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">05.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Structural Physics &amp; Statutory Codes</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Calculated Load Paths · IS &amp; IRC Compliance
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight uppercase text-white">
            Where design <br />
            <span className="italic font-light text-[#F4F0E8]/70">meets structural truth.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/85 font-sans max-w-2xl font-normal leading-relaxed">
            Every building is a physical calculation. Unlike surface-only stylists, Design Plus is led by chartered structural engineers who sign off on load paths, foundation mechanics, and Indian statutory code compliance from day one.
          </p>
        </div>

        {/* Technical Tabs Nav */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 font-mono text-xs">
          {(
            [
              { id: 'cantilever', label: '01 Cantilevers & Cores', code: 'IS:456' },
              { id: 'bridges', label: '02 Bridges & Viaducts', code: 'IRC:112' },
              { id: 'hydraulics', label: '03 Dams & Spillways', code: 'IS:6512' },
              { id: 'geotechnical', label: '04 Soil & Foundations', code: 'IS:1892' }
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                  isActive
                    ? 'bg-[#B86B38] border-[#B86B38] text-white shadow-lg ring-1 ring-[#B86B38]/50'
                    : 'bg-black/60 border-white/20 text-[#F4F0E8]/80 hover:border-white/40 hover:text-white'
                }`}
              >
                <span className="font-medium text-xs tracking-wider text-white">{tab.label}</span>
                <span className="text-[10px] text-white/80 tracking-widest font-semibold">{tab.code}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Engineering Spec & Vector Blueprint Display Card */}
        <div className="bg-black/75 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative text-[#F4F0E8]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Specs & Code Authority (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B86B38]">
                  <span className="w-2 h-2 rounded-full bg-[#B86B38]" />
                  <span className="font-semibold">{currentData.code}</span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal leading-snug">
                  {currentData.title}
                </h3>
                <p className="text-xs font-mono text-[#F4F0E8]/70">
                  {currentData.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#F4F0E8]/85 leading-relaxed font-sans font-normal">
                {currentData.description}
              </p>

              {/* Technical Parameter Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono border-t border-white/15">
                {currentData.specs.map((spec, idx) => (
                  <div key={idx} className="bg-black/60 p-3 rounded-xl border border-white/15">
                    <span className="text-[#F4F0E8]/60 block text-[9.5px] uppercase tracking-wider mb-0.5">
                      {spec.label}
                    </span>
                    <span className="text-white font-semibold block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Load Verification Stamp */}
              <div className="flex items-center justify-between text-[11px] font-mono bg-black/60 border border-white/15 p-3 rounded-xl text-[#F4F0E8]/90">
                <span>{currentData.loadType}</span>
                <span className="text-[#B86B38] font-semibold">{currentData.safetyFactor}</span>
              </div>

            </div>

            {/* Right Blueprint Vector Visual / Load Paths (6 Cols) */}
            <div className="lg:col-span-6 h-[320px] sm:h-[380px] bg-[#0E1B22] border border-cyan-900/60 rounded-xl p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
              
              <div className="flex items-center justify-between text-[9.5px] font-mono text-cyan-300 border-b border-cyan-900/60 pb-2">
                <span>{currentData.diagramTitle}</span>
                <span>FINITE ELEMENT ANALYSIS // CAD DRAFT</span>
              </div>

              <div className="flex-1 flex items-center justify-center p-4">
                {activeTab === 'cantilever' && (
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                    <line x1="50" y1="20" x2="50" y2="180" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="200" y1="20" x2="200" y2="180" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="350" y1="20" x2="350" y2="180" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" />

                    <rect x="70" y="30" width="30" height="150" fill="#0E1B22" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="60" y1="30" x2="110" y2="30" stroke="#38BDF8" strokeWidth="2" />
                    <line x1="60" y1="180" x2="110" y2="180" stroke="#38BDF8" strokeWidth="2" />

                    <polygon points="100,50 340,50 340,80 100,90" fill="#164E63" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />

                    <path d="M 100 85 Q 220 52 340 55" stroke="#F97316" strokeWidth="3" fill="none" />
                    
                    {[130, 170, 210, 250, 290, 330].map((x) => (
                      <g key={x}>
                        <line x1={x} y1="25" x2={x} y2="45" stroke="#E11D48" strokeWidth="1.5" />
                        <polygon points={`${x-3},40 ${x+3},40 ${x},47`} fill="#E11D48" />
                      </g>
                    ))}
                  </svg>
                )}

                {activeTab === 'bridges' && (
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                    <line x1="50" y1="150" x2="350" y2="150" stroke="#0284C7" strokeWidth="2" />
                    <rect x="80" y="90" width="40" height="60" fill="#164E63" stroke="#38BDF8" strokeWidth="2" />
                    <rect x="280" y="90" width="40" height="60" fill="#164E63" stroke="#38BDF8" strokeWidth="2" />
                    <path d="M 60 90 Q 200 60 340 90" stroke="#38BDF8" strokeWidth="4" fill="none" />
                    <line x1="60" y1="90" x2="340" y2="90" stroke="#F97316" strokeWidth="3" />
                  </svg>
                )}

                {activeTab === 'hydraulics' && (
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                    <path d="M 50 150 L 150 50 L 250 50 L 350 150 Z" fill="#164E63" stroke="#38BDF8" strokeWidth="2" />
                    <rect x="140" y="30" width="120" height="20" fill="#E11D48" />
                    <path d="M 200 50 Q 250 100 350 120" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                )}

                {activeTab === 'geotechnical' && (
                  <svg className="w-full h-full max-h-56" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                    <rect x="100" y="20" width="200" height="30" fill="#164E63" stroke="#38BDF8" strokeWidth="1" />
                    <rect x="100" y="50" width="200" height="50" fill="#0E2C3D" stroke="#38BDF8" strokeWidth="1" />
                    <rect x="100" y="100" width="200" height="80" fill="#091C29" stroke="#38BDF8" strokeWidth="1" />
                    <line x1="200" y1="20" x2="200" y2="180" stroke="#F97316" strokeWidth="2" strokeDasharray="5 5" />
                  </svg>
                )}
              </div>

              <div className="flex items-center justify-between text-[9.5px] font-mono text-cyan-300 border-t border-cyan-900/60 pt-2">
                <span>STATUS: STRESS VERIFIED</span>
                <span>FACTOR OF SAFETY: 1.50</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
