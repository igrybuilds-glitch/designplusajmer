import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { LOCATIONS_SERVED } from '../data/siteData';

export function LocationsPage() {
  const locationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Regional Practice Locations in Rajasthan | Design Plus',
    itemListElement: LOCATIONS_SERVED.map((loc, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'Place',
        name: `${loc.city}, ${loc.state}`,
        url: `https://designplusajmer.in/locations/${loc.slug}`,
        description: loc.description
      }
    }))
  };

  return (
    <main id="locations-page" className="pt-28 pb-20">
      <SEOHead
        title="Locations Served in Rajasthan | Design Plus Architects & Engineers"
        description="Explore Design Plus architectural and structural engineering services across Ajmer, Jaipur, Pushkar, and Udaipur. Municipal byelaws, soil adaptation, and climate design."
        canonical="https://designplusajmer.in/locations"
        schema={locationsSchema}
      />

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle="Regional Footprint"
        title="Architectural Practice Across Central & Southern Rajasthan"
        description="Headquartered in Ajmer, our architectural and structural engineering projects extend to desert sanctuary homes in Pushkar, metropolitan estates in Jaipur, and hillside villas in Udaipur."
      />

      {/* Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {LOCATIONS_SERVED.map((loc) => (
            <article
              key={loc.slug}
              className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="relative aspect-16/10 bg-stone-200 overflow-hidden">
                  <img
                    src={loc.heroImage}
                    alt={`${loc.city} architecture by Design Plus`}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/85 text-white text-[11px] uppercase tracking-wider px-3 py-1 font-sans">
                    {loc.city}, {loc.state}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{loc.tagline}</span>
                  </div>

                  <h2 className="font-editorial text-3xl text-stone-950 font-medium group-hover:text-amber-800 transition-colors">
                    <Link to={`/locations/${loc.slug}`}>
                      {loc.city} Studio Practice
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {loc.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-2">
                      Regional Practice Highlights:
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1.5">
                      {loc.serviceHighlights.slice(0, 2).map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <span className="text-amber-800 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  to={`/locations/${loc.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-4 border-t border-stone-100 transition-colors"
                >
                  <span>Explore {loc.city} Regulations & Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
