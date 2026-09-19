import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Home, Building2, LayoutGrid, PenTool, Box, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { SERVICES } from '../data/siteData';

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Home,
  Building2,
  LayoutGrid,
  PenTool,
  Box,
  ShieldCheck
};

interface ServicesPageProps {
  onOpenConsultation?: () => void;
}

export function ServicesPage({ onOpenConsultation }: ServicesPageProps) {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Architectural & Structural Services by Design Plus',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        url: `https://designplusajmer.in/services/${service.slug}`
      }
    }))
  };

  return (
    <main id="services-page" className="pt-28 pb-20">
      <SEOHead
        title="Architectural & Structural Services | Design Plus Studio Ajmer"
        description="Explore our integrated services: Residential villa design, commercial architecture, 3D elevation rendering, 2D floor plans, and structural calculations."
        keywords="architectural services ajmer, structural design rajasthan, 3d elevation rendering, 2d floor planning, interior architecture ajmer, building approval drawings"
        canonical="https://designplusajmer.in/services"
        schema={servicesSchema}
      />

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle="Services & Capabilities"
        title="Integrated Architectural & Structural Disciplines"
        description="Every building stage—from municipal setback planning and structural RCC schedules to interior joinery and photorealistic elevations—is directed by our in-house engineering and architectural team."
      />

      {/* Services Comprehensive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Compass;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 bg-white border border-stone-200 transition-shadow hover:shadow-lg`}
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-16/10 bg-stone-200 overflow-hidden border border-stone-200">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      width={900}
                      height={560}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[11px] uppercase tracking-wider px-2.5 py-1 font-mono">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xs bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-medium">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                      Standard Deliverables:
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="text-amber-800 font-bold">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-[#FBFBF9] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Dedicated Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-semibold uppercase tracking-wider text-stone-800 hover:text-amber-800 transition-colors"
                    >
                      Inquire on this Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] text-stone-100 p-10 sm:p-12 border border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
              Require a Custom Combined Service Package?
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Most clients engage us for turnkey architectural planning coupled with Chartered Structural calculations and 3D elevations. Connect to discuss your exact project scope.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="bg-amber-600 hover:bg-amber-500 text-stone-950 px-6 py-3 text-xs tracking-wider uppercase font-bold transition-colors shrink-0"
          >
            Discuss Project Scope
          </button>
        </div>
      </section>

    </main>
  );
}
