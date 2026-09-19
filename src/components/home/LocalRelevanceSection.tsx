import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { LOCATIONS_SERVED } from '../../data/siteData';

export function LocalRelevanceSection() {
  return (
    <section id="local-relevance" className="py-24 bg-[#F5F5F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-300 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
              11 / Regional Architectural Footprint
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal">
              Active Practice Across Rajasthan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-sm">
            Rooted in Ajmer with projects spanning the Aravalli belt, desert heritage enclaves, and metropolitan corridors.
          </p>
        </div>

        {/* 4 Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS_SERVED.map((loc) => (
            <div
              key={loc.slug}
              className="group bg-[#FBFBF9] border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-stone-400 transition-colors"
            >
              <div>
                <div className="relative aspect-16/10 bg-stone-200 overflow-hidden">
                  <img
                    src={loc.heroImage}
                    alt={`${loc.city} Architecture and Structural Engineering by Design Plus`}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 font-sans">
                    {loc.city}, {loc.state}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.tagline}</span>
                  </div>

                  <h3 className="font-editorial text-2xl text-stone-950 font-medium group-hover:text-amber-800 transition-colors">
                    {loc.city}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-200 transition-colors"
                >
                  <span>Explore {loc.city} Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
