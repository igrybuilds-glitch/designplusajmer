import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Home, Building2, LayoutGrid, PenTool, Box, ShieldCheck, MessageSquare, ShoppingBag } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { SERVICES } from '../data/siteData';
import { ServicePurchaseFlow } from '../components/services/ServicePurchaseFlow';
import { PurchasableService } from '../data/purchasableServices';
import servicesExtraData from '../data/services-extra.json';

interface ExtraServiceItem {
  category: string;
  imageUrl: string;
  name: string;
  price?: string;
}

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

const EXTRA_GROUPS = [
  'Design & Architecture Services',
  'Valuation Services',
  'Survey Services',
  'Engineering Consultancy'
];

export function ServicesPage({ onOpenConsultation }: ServicesPageProps) {
  const [filterMode, setFilterMode] = useState<'all' | 'buy-now' | 'engineering'>('all');
  const [isPurchaseFlowOpen, setIsPurchaseFlowOpen] = useState<boolean>(false);
  const [activePurchaseServiceId, setActivePurchaseServiceId] = useState<string>('2d-floor-plan');
  const [activeCustomService, setActiveCustomService] = useState<PurchasableService | undefined>(undefined);
  const [activeExtraGroup, setActiveExtraGroup] = useState<string>('All Groups');

  const extraServices = servicesExtraData as ExtraServiceItem[];

  const handleBuyNow = (servicePackageId?: string) => {
    if (servicePackageId) {
      setActivePurchaseServiceId(servicePackageId);
    }
    setActiveCustomService(undefined);
    setIsPurchaseFlowOpen(true);
  };

  const handleExtraBuyNow = (srv: ExtraServiceItem, idx: number) => {
    const slug = srv.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || `service-${idx}`;
    setActiveCustomService({
      id: `extra-${idx}-${slug}`,
      slug: `extra-${slug}`,
      name: srv.name,
      category: 'Small Technical Services',
      tagline: srv.category,
      description: `${srv.name} (${srv.category}) — executed by the Design Plus studio team, Ajmer. Share your site details and preferred schedule; we confirm scope and timeline before execution.`,
      price: null,
      pricingLabel: srv.price && srv.price.trim() !== '' ? srv.price.trim() : 'Price on request',
      unitLabel: 'per service engagement',
      deliveryTimeline: 'Scheduled on confirmation',
      purchaseEnabled: true,
      ctaLabel: 'Buy Now',
      secondaryCtaLabel: 'WhatsApp Enquiry',
      formType: 'standard',
      whatsIncluded: [
        'Studio-certified service execution',
        'Direct coordination with the Design Plus team',
        'Written scope confirmation before work begins'
      ],
      whatWeNeed: [
        'Site / project location',
        'Preferred date / schedule',
        'Scope details or reference photos'
      ],
      recommendedFor: 'Clients across Ajmer & Rajasthan needing this specialized technical service.'
    });
    setIsPurchaseFlowOpen(true);
  };

  const displayedServices = SERVICES.filter(s => {
    if (filterMode === 'buy-now') return s.purchaseEnabled === true;
    if (filterMode === 'engineering') return s.purchaseEnabled === false;
    return true;
  });

  const filteredExtraServices = useMemo(() => {
    if (activeExtraGroup === 'All Groups') return extraServices;
    return extraServices.filter(s => s.category.toLowerCase() === activeExtraGroup.toLowerCase());
  }, [extraServices, activeExtraGroup]);

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
        url: `https://www.designplusajmer.co.in/services/${service.slug}`
      }
    }))
  };

  return (
    <main id="services-page" className="pt-28 pb-20 bg-[#faf8f5] text-[#141414]">
      <SEOHead
        title="Architecture & Structural Services | Design Plus"
        description="Explore our integrated services: Residential villa design, commercial architecture, 3D elevation rendering, 2D floor plans, and structural calculations."
        keywords="architectural services ajmer, structural design rajasthan, 3d elevation rendering, 2d floor planning, interior architecture ajmer, building approval drawings"
        canonical="https://www.designplusajmer.co.in/services"
        schema={servicesSchema}
      />

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle="Services & Capabilities"
        title="Integrated Architectural & Structural Disciplines"
        description="Every building stage—from municipal setback planning and structural RCC schedules to interior joinery and photorealistic elevations—is directed by our in-house engineering and architectural team."
      />

      {/* Discipline & Commercial Scope Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            <button
              onClick={() => setFilterMode('all')}
              className={`shrink-0 px-3 py-1.5 transition-all uppercase tracking-wider whitespace-nowrap ${
                filterMode === 'all'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              All Studio Disciplines ({SERVICES.length})
            </button>
            <button
              onClick={() => setFilterMode('buy-now')}
              className={`shrink-0 px-3 py-1.5 transition-all uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 ${
                filterMode === 'buy-now'
                  ? 'bg-[#C86635] text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              <span>Standardized Packages (Buy Now)</span>
            </button>
            <button
              onClick={() => setFilterMode('engineering')}
              className={`shrink-0 px-3 py-1.5 transition-all uppercase tracking-wider whitespace-nowrap ${
                filterMode === 'engineering'
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              Custom &amp; Infrastructure (Proposal)
            </button>
          </div>

          <div className="text-[11px] text-stone-500 font-mono hidden md:block">
            {filterMode === 'all' && 'Direct execution drawings & chartered engineering audits'}
            {filterMode === 'buy-now' && 'Instant online commissioning for residential blueprints & consultations'}
            {filterMode === 'engineering' && 'Complex infrastructure, highways, bridges, and statutory master planning'}
          </div>
        </div>
      </div>

      {/* Services Comprehensive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="space-y-12">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.iconName] || Compass;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="service-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12 bg-white border border-stone-200 transition-shadow hover:shadow-lg"
              >
                {/* Visual */}
                <div className={`service-visual-col lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-16/10 bg-stone-100 overflow-hidden border border-stone-200">
                    <img
                      src={service.heroImage || service.imageSrc}
                      alt={service.title}
                      width={900}
                      height={560}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.failed) {
                          target.dataset.failed = 'true';
                          target.style.display = 'none';
                          const visualCol = target.closest<HTMLElement>('.service-visual-col');
                          if (visualCol) {
                            visualCol.style.display = 'none';
                          } else if (target.parentElement) {
                            target.parentElement.style.display = 'none';
                          }
                          const card = target.closest<HTMLElement>('.service-card');
                          if (card) {
                            const contentCol = card.querySelector<HTMLElement>('.service-content-col');
                            if (contentCol) {
                              contentCol.classList.remove('lg:col-span-6');
                              contentCol.classList.add('lg:col-span-12');
                            }
                          }
                        }
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[11px] uppercase tracking-wider px-2.5 py-1 font-mono">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`service-content-col lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
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

                  {/* Deliverables List */}
                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-stone-700 pt-2 border-t border-stone-100">
                      {service.deliverables.map((deliv: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C86635] shrink-0" />
                          <span className="truncate">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Conditional Render: Buy Now button vs Request a Proposal */}
                  {service.purchaseEnabled && service.packageId ? (
                    <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block">
                          Standardized Commission:
                        </span>
                        <span className="text-lg font-editorial font-bold text-stone-950">
                          {service.pricingLabel || '₹5,000 onwards'}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleBuyNow(service.packageId)}
                          className="inline-flex items-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <span>Commission Service Now</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <Link
                          to={`/services/${service.slug}`}
                          className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-950 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="pt-3 border-t border-stone-100 space-y-3">
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-2">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400">
                            Engineering Appraisal:
                          </span>
                          <span className="text-xs font-mono text-stone-700 font-medium">
                            Custom Technical Scope · Site-Specific Requirements
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-600 bg-stone-100 px-2 py-0.5 border border-stone-200 hidden sm:inline-block">
                          Proposal / Technical Tender
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={onOpenConsultation}
                          className="inline-flex items-center gap-1.5 bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                        >
                          <span>Request a Proposal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          onClick={onOpenConsultation}
                          className="inline-flex items-center gap-1.5 border border-stone-300 hover:border-stone-800 text-stone-800 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                        >
                          <span>Discuss Project</span>
                        </button>

                        <Link
                          to={`/services/${service.slug}`}
                          className="text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors inline-flex items-center gap-1 ml-auto"
                        >
                          <span>Technical Specifications</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ADDITIONAL 30 LISTINGS FROM SERVICES-EXTRA.JSON UNDER 4 GROUPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border-t border-stone-300 pt-16 pb-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C86635]">
                <span className="w-2 h-2 rounded-full bg-[#C86635]" />
                <span>COMPREHENSIVE DIRECTORY</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-stone-950 font-normal uppercase">
                Specialized Studio Services &amp; Listings (30)
              </h2>
              <p className="text-sm text-stone-600 font-light max-w-2xl leading-relaxed">
                Explore our specialized technical listings categorized into Design &amp; Architecture, Valuation, Survey, and Engineering Consultancy. Enquire directly via WhatsApp for immediate scheduling.
              </p>
            </div>

            {/* Group Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveExtraGroup('All Groups')}
                className={`rounded-full px-4 py-2 text-xs font-sans font-medium transition-all cursor-pointer ${
                  activeExtraGroup === 'All Groups'
                    ? 'bg-stone-950 text-white shadow-sm'
                    : 'bg-white text-stone-700 border border-stone-300 hover:border-[#C86635]'
                }`}
              >
                All Groups ({extraServices.length})
              </button>
              {EXTRA_GROUPS.map(grp => {
                const count = extraServices.filter(s => s.category.toLowerCase() === grp.toLowerCase()).length;
                const isSelected = activeExtraGroup.toLowerCase() === grp.toLowerCase();
                return (
                  <button
                    key={grp}
                    type="button"
                    onClick={() => setActiveExtraGroup(grp)}
                    className={`rounded-full px-4 py-2 text-xs font-sans font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-stone-950 text-white shadow-sm'
                        : 'bg-white text-stone-700 border border-stone-300 hover:border-[#C86635]'
                    }`}
                  >
                    {grp} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Service Rows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {filteredExtraServices.map((srv, idx) => {
              const hasPrice = srv.price && srv.price.trim() !== '' && srv.price.toLowerCase() !== 'request for price';
              const priceDisplay = hasPrice ? srv.price : 'Price on request';
              const whatsappUrl = `https://wa.me/917976453090?text=${encodeURIComponent(
                `Hi, I am interested in inquiring about the service "${srv.name}" (${srv.category}). Please share availability and pricing details.`
              )}`;

              return (
                <div
                  key={`${srv.name}-${idx}`}
                  className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
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
                      <h3 className="font-sans font-medium text-sm text-stone-950 line-clamp-2 leading-snug">
                        {srv.name}
                      </h3>
                      <div className="text-xs font-bold text-stone-900 pt-1">
                        {priceDisplay}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-[10px] font-mono uppercase text-stone-400">Design Plus Certified</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleExtraBuyNow(srv, idx)}
                        className="inline-flex items-center gap-1.5 bg-[#C86635] hover:bg-[#b5582a] text-white px-4 py-2 rounded-full text-xs font-sans font-medium transition-colors cursor-pointer"
                        aria-label={`Buy ${srv.name} now`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Buy Now</span>
                      </button>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-stone-950 hover:bg-[#C86635] text-white px-4 py-2 rounded-full text-xs font-sans font-medium transition-colors"
                        aria-label={`Enquire about ${srv.name} on WhatsApp`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp Enquiry</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

      {/* Reusable Refined Service Purchase Flow Modal */}
      <ServicePurchaseFlow
        isOpen={isPurchaseFlowOpen}
        onClose={() => { setIsPurchaseFlowOpen(false); setActiveCustomService(undefined); }}
        initialServiceId={activePurchaseServiceId}
        customService={activeCustomService}
        onOpenConsultation={onOpenConsultation}
      />

    </main>
  );
}
