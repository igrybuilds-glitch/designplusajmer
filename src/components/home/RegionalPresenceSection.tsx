import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const REGIONAL_NODES = [
  {
    title: 'Aravalli Quartzite & Geotechnical Realities',
    focus: 'GEOLOGICAL ENGINEERING',
    description: 'The ancient metamorphic quartzite strata of the Aravalli range presents high bearing capacity alongside fissured schist bands requiring site-specific foundation calculations and differential settlement prevention.',
    code: 'SEISMIC ZONE II/III · IS 1893'
  },
  {
    title: 'Statutory ADA & Municipal Master Planning',
    focus: 'REGULATORY COMPLIANCE',
    description: 'Comprehensive navigation of the Ajmer Development Authority (ADA) 2033 Master Plan, Rajasthan Urban Improvement Trust (UIT) bylaws, Fire NOCs, and State environmental clearances for private and commercial schemes.',
    code: 'BYELAW 2020 · ADA SANCTIONED'
  },
  {
    title: 'Arid Zone Climatology & Micro-Courtyards',
    focus: 'PASSIVE THERMAL DESIGN',
    description: 'Designing for Rajasthan’s extreme diurnal temperature swings (-2°C winter nights to 46°C peak summer) through recessed fenestrations, traditional stone jali louvers, and shaded central courtyards.',
    code: 'ECBC ARID CODE · 46°C PEAK'
  },
  {
    title: 'Regional Materiality & Stone Craft',
    focus: 'LOCAL RESOURCE EXTRACTION',
    description: 'Direct procurement connections with Kishangarh marble processing, Kota stone quarries, and Rajasthani stone carvers allow us to detail custom rain-screens, jali panels, and textured wall masonry.',
    code: 'DHOLPUR · KOTA · MAKRANA'
  }
];

export function RegionalPresenceSection() {
  return (
    <section 
      id="regional-authority" 
      className="relative bg-transparent text-[#F4F0E8] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">09.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Regional Anchorage &amp; Topography</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Ajmer · Jaipur · Pushkar · Kishangarh
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight uppercase text-white" style={{ textWrap: 'balance' }}>
            Rooted in Rajasthan&apos;s <br />
            <span className="italic font-light text-[#F4F0E8]/70">soil, stone, and climate.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/85 font-sans max-w-2xl font-normal leading-relaxed">
            Architecture cannot be imported wholesale. Our practices are forged specifically for Rajasthan&apos;s Aravalli topography, municipal zoning codes, and intense summer thermal conditions.
          </p>
        </div>

        {/* 4 Regional Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REGIONAL_NODES.map((node, idx) => (
            <div 
              key={idx}
              className="bg-black/70 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl space-y-3 relative group hover:border-[#B86B38] transition-all shadow-xl"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#B86B38]">
                <span className="font-bold">NODE 0{idx + 1} //</span>
                <span className="uppercase tracking-widest">{node.focus}</span>
              </div>

              <h3 className="font-editorial text-2xl text-white group-hover:text-[#B86B38] transition-colors leading-snug">
                {node.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F4F0E8]/80 font-sans font-light leading-relaxed">
                {node.description}
              </p>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-[#F4F0E8]/60">
                <span>{node.code}</span>
                <span className="text-[#B86B38]">RAJASTHAN PRACTICE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-black/75 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B86B38] font-semibold">SITE VISITATION &amp; SURVEYS</span>
            <h3 className="font-editorial text-2xl text-white">Need an on-site evaluation in Ajmer or surrounding districts?</h3>
          </div>
          <Link
            to="/locations"
            className="btn-primary bg-[#B86B38] hover:bg-[#a65d37] text-white px-6 py-3 text-xs font-semibold tracking-wider shrink-0"
          >
            <span>Explore Service Corridors</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
