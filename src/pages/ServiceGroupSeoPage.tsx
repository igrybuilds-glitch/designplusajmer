import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare, ArrowLeft, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import servicesExtraData from '../data/services-extra.json';

interface ExtraServiceItem {
  category: string;
  imageUrl: string;
  name: string;
  price?: string;
}

interface ServiceGroupSeoPageProps {
  onOpenConsultation?: () => void;
}

const SERVICE_GROUP_MAP: Record<string, { title: string; original: string; description: string }> = {
  'design-architecture-services-ajmer': {
    title: 'Design & Architecture Services in Ajmer, Rajasthan',
    original: 'Design & Architecture Services',
    description: 'Expert design & architecture services in Ajmer, Rajasthan by Design Plus. Residential villa planning, interior design, 3D visualization, and turnkey project execution.'
  },
  'valuation-services-ajmer': {
    title: 'Valuation Services in Ajmer, Rajasthan',
    original: 'Valuation Services',
    description: 'Certified building valuers, factory property assessors, plant & machinery appraisers, and wealth levy valuation services in Ajmer, Rajasthan.'
  },
  'survey-services-ajmer': {
    title: 'Survey Services in Ajmer, Rajasthan',
    original: 'Survey Services',
    description: 'Professional cadastral surveyors, RTK topographical mapping, real estate appraisers, and river surveyors in Ajmer, Rajasthan with high precision accuracy.'
  },
  'engineering-consultancy-ajmer': {
    title: 'Engineering Consultancy in Ajmer, Rajasthan',
    original: 'Engineering Consultancy',
    description: 'Chartered structural design and engineering consultancy services in Ajmer, Rajasthan, industrial steel structures, and resort architecture.'
  }
};

export function ServiceGroupSeoPage({ onOpenConsultation }: ServiceGroupSeoPageProps) {
  const { groupSlug } = useParams<{ groupSlug?: string }>();
  const groupInfo = SERVICE_GROUP_MAP[groupSlug || ''] || SERVICE_GROUP_MAP['design-architecture-services-ajmer'];

  const services = servicesExtraData as ExtraServiceItem[];
  const groupServices = useMemo(() => {
    return services.filter(s => s.category.toLowerCase() === groupInfo.original.toLowerCase());
  }, [services, groupInfo.original]);

  const relatedGroups = Object.entries(SERVICE_GROUP_MAP)
    .filter(([slug]) => slug !== groupSlug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'CollectionPage'],
    name: `${groupInfo.title} | Design Plus Ajmer`,
    description: groupInfo.description,
    url: `https://www.designplusajmer.co.in/services/group/${groupSlug}`,
    areaServed: {
      '@type': 'State',
      name: 'Rajasthan, India'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ajmer',
      addressRegion: 'Rajasthan',
      postalCode: '305004',
      addressCountry: 'IN'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: groupServices.map((srv, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Service',
          name: srv.name,
          image: srv.imageUrl,
          offers: {
            '@type': 'Offer',
            price: srv.price || 'Price on request',
            priceCurrency: 'INR'
          }
        }
      }))
    }
  };

  return (
    <main id="service-group-seo-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-28 pb-20">
      <SEOHead
        title={`${groupInfo.title} | Design Plus Ajmer`}
        description={groupInfo.description}
        keywords={`${groupInfo.title.toLowerCase()}, structural consultants ajmer, design plus services`}
        canonical={`https://www.designplusajmer.co.in/services/group/${groupSlug}`}
        schema={schema}
      />

      {/* Breadcrumb & Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/services" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#141414]/5 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#141414]">
            <span className="w-2 h-2 rounded-full bg-[#C86635]" />
            <span>CHARTERED PRACTICE · AJMER &amp; RAJASTHAN</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase text-[#141414]">
            {groupInfo.title}
          </h1>

          <p className="text-base sm:text-lg text-[#141414]/85 font-sans font-light leading-relaxed">
            Welcome to Design Plus. For rigorous {groupInfo.title.toLowerCase()}, clients across Rajasthan rely on our chartered engineers and principal architects. We deliver comprehensive professional expertise, technical precision, and complete regulatory compliance for residential, commercial, and industrial developments in Ajmer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="btn-secondary">
              Contact Studio
            </Link>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-t border-[#141414]/10 pt-10 pb-6 mb-8 flex items-center justify-between">
          <h2 className="font-editorial text-2xl sm:text-3xl uppercase tracking-wide text-[#141414]">
            Available {groupInfo.original} ({groupServices.length} Listings)
          </h2>
          <span className="text-xs font-mono uppercase text-[#141414]/60">AJMER PRACTICE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groupServices.map((srv, idx) => {
            const hasPrice = srv.price && srv.price.trim() !== '' && srv.price.toLowerCase() !== 'request for price';
            const priceDisplay = hasPrice ? srv.price : 'Price on request';
            const whatsappUrl = `https://wa.me/917976453090?text=${encodeURIComponent(
              `Hi, I am interested in inquiring about "${srv.name}" (${srv.category}) from your ${groupInfo.title} page. Please share availability and scheduling details.`
            )}`;

            return (
              <div
                key={`${srv.name}-${idx}`}
                className="bg-white rounded-2xl p-5 border border-[#141414]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#faf8f5] overflow-hidden shrink-0 border border-[#141414]/10">
                    <img
                      src={srv.imageUrl}
                      alt={srv.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C86635] font-semibold">
                      {srv.category}
                    </span>
                    <h3 className="font-sans font-medium text-sm text-[#141414] line-clamp-2 leading-snug">
                      {srv.name}
                    </h3>
                    <div className="text-xs font-bold text-[#141414] pt-1">
                      {priceDisplay}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#141414]/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-[#141414]/50">Design Plus Certified</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#141414] hover:bg-[#C86635] text-white px-4 py-2 rounded-full text-xs font-sans font-medium transition-colors"
                    aria-label={`Enquire about ${srv.name} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Enquiry</span>
                    <ArrowUpRight className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Linking & Related Groups */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#141414]/10">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C86635]">Related Service Categories</span>
            <h2 className="font-editorial text-3xl text-[#141414]">Explore Other Professional Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedGroups.map(([slug, info]) => (
              <Link
                key={slug}
                to={`/services/group/${slug}`}
                className="group bg-white p-5 rounded-2xl border border-[#141414]/10 hover:border-[#C86635] transition-all space-y-2 block"
              >
                <div className="text-[10px] font-mono uppercase text-[#C86635]">Ajmer Practice</div>
                <div className="font-sans font-medium text-sm text-[#141414] group-hover:text-[#C86635] transition-colors">
                  {info.title}
                </div>
                <div className="text-xs text-[#141414]/60 line-clamp-2">
                  {info.description}
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between bg-white p-8 rounded-3xl border border-[#141414]/10">
            <div className="space-y-1">
              <h3 className="font-editorial text-2xl text-[#141414]">Ready to Commission a Project in Ajmer?</h3>
              <p className="text-xs sm:text-sm text-[#141414]/70">Contact our principal engineers and architects for technical consultations and proposals.</p>
            </div>
            <div className="flex items-center gap-3 pt-4 sm:pt-0">
              <Link to="/contact" className="btn-primary">
                Contact Studio
              </Link>
              <Link to="/services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
