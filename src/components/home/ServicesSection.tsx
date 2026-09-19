import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Home, Building2, LayoutGrid, PenTool, Box, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../../data/siteData';

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Home,
  Building2,
  LayoutGrid,
  PenTool,
  Box,
  ShieldCheck
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#FBFBF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-200 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
              06 / Specialized Practice
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal">
              Architectural & Engineering Services
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-stone-600 max-w-sm">
            Every service is handled in-house, preventing disconnects between planning sketches and structural execution.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Compass;
            return (
              <div
                key={s.slug}
                className="group border border-stone-200 bg-white p-8 flex flex-col justify-between hover:border-stone-400 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xs bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-stone-950 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-stone-400">0{idx + 1}</span>
                  </div>

                  <h3 className="font-editorial text-2xl text-stone-950 font-semibold group-hover:text-amber-800 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {s.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium mb-1">
                      Key Deliverables:
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1">
                      {s.deliverables.slice(0, 2).map((d) => (
                        <li key={d} className="flex items-start gap-1.5">
                          <span className="text-amber-700 font-bold">•</span>
                          <span className="line-clamp-1">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-100 transition-colors"
                  >
                    <span>Read Service Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
