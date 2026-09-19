import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  BookOpen, 
  MapPin, 
  Building 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { getAllProjects } from '../data/projectsData';
import { getAllBlogArticles } from '../data/blogData';

interface ServiceDetailPageProps {
  onOpenConsultation?: () => void;
}

export function ServiceDetailPage({ onOpenConsultation }: ServiceDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const allProjects = getAllProjects();
  const allArticles = getAllBlogArticles();

  // Related projects matching this service or category
  const relatedProjects = allProjects.filter((p) => {
    if (service.slug === 'residential-architecture') return p.category === 'residential';
    if (service.slug === 'commercial-architecture') return p.category === 'commercial';
    if (service.slug === 'interior-design') return p.category === 'interiors';
    if (service.slug === 'structural-design') return p.category === 'structural' || p.projectType === 'real';
    return p.scopeOfWork.some((s) => s.toLowerCase().includes(service.title.toLowerCase()));
  }).slice(0, 2);

  // Fallback to first 2 projects if none matched specifically
  const displayProjects = relatedProjects.length > 0 ? relatedProjects : allProjects.slice(0, 2);

  // Related blog articles
  const relatedArticles = allArticles.filter((a) =>
    a.relatedServices?.includes(service.slug)
  ).slice(0, 2);

  const canonicalUrl = `https://designplusajmer.in/services/${service.slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Design Plus',
      url: 'https://designplusajmer.in'
    },
    areaServed: {
      '@type': 'State',
      name: 'Rajasthan'
    },
    serviceType: service.title
  };

  return (
    <main id="service-detail-page" className="pt-28 pb-20">
      <SEOHead
        title={`${service.title} in Ajmer, Rajasthan | Design Plus Studio`}
        description={`Professional ${service.title.toLowerCase()} in Ajmer & Rajasthan. ${service.shortDescription} Led by Er. Sudhir Soni & Ar. Vipul Verma.`}
        keywords={`${service.title.toLowerCase()} ajmer, ${service.title.toLowerCase()} rajasthan, ${service.slug.replace(/-/g, ' ')}, architect in ajmer, chartered engineer ajmer`}
        image={service.heroImage}
        canonical={canonicalUrl}
        schema={serviceSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/services" className="hover:text-stone-950 transition-colors">Services &amp; Disciplines</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">{service.title}</span>
        </nav>
      </div>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Scope and Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-[0.25em] text-amber-800 font-semibold">
                Studio Discipline
              </div>
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-editorial italic">
                {service.shortDescription}
              </p>
            </div>

            <div className="relative aspect-16/10 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
              <img
                src={service.heroImage}
                alt={service.title}
                width={1200}
                height={750}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Our Methodological Scope
              </h2>
              <p>{service.fullDescription}</p>
              <p>
                In central Rajasthan, climatic extremes and distinct regional byelaws necessitate rigorous attention to detail. Our team ensures that each design responds to solar angles, soil capacity, and client longevity requirements.
              </p>
            </div>

            {/* Process Highlights */}
            <div className="p-8 bg-white border border-stone-200 space-y-4">
              <h3 className="font-editorial text-xl text-stone-950 font-semibold">
                Core Process Highlights
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                {service.processHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Across Genuine Locations */}
            <div className="p-6 bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-900 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-800" />
                <span>Regional Availability &amp; Municipal Compliance</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                This discipline is actively practiced across our established service zones in Rajasthan:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {LOCATIONS_SERVED.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="text-xs font-semibold px-3 py-1 bg-white border border-stone-200 text-stone-800 hover:border-amber-800 hover:text-amber-800 transition-colors"
                  >
                    {loc.city}, {loc.state} &rarr;
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Deliverables Box & Direct Action */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            
            <div className="p-8 bg-white border border-stone-300 shadow-sm space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                  Deliverables Specification
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  What You Receive
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 shrink-0"></span>
                    <span className="leading-snug">{d}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>Vetted by Chartered Structural Engineer</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600">
                  <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>Compliant with Municipal ADA / JDA Byelaws</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3.5 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Consultation for this Service</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="w-full block text-center border border-stone-300 hover:bg-stone-100 text-stone-900 py-3 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Direct Studio Contact
                </Link>
              </div>
            </div>

            {/* Other Services Quick Links */}
            <div className="p-6 bg-[#F5F5F0] border border-stone-200">
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
                Other Specialized Disciplines
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="text-stone-700 hover:text-stone-950 font-medium flex items-center justify-between py-1 border-b border-stone-200/60 transition-colors"
                    >
                      <span>{s.title}</span>
                      <ArrowUpRight className="w-3 h-3 text-stone-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Related Portfolio Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200 mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
            Demonstrated Projects in {service.title}
          </h3>
          <Link
            to="/projects"
            className="text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.category}/${p.slug}`}
              className="group block bg-white border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-16/10 bg-stone-200 overflow-hidden">
                <img
                  src={p.heroImage}
                  alt={p.title}
                  width={600}
                  height={375}
                  loading="lazy"
                  className="img-editorial w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                  {p.categoryLabel} · {p.location}
                </div>
                <h4 className="font-editorial text-2xl text-stone-950 group-hover:text-amber-800 transition-colors mt-1 font-medium">
                  {p.title}
                </h4>
                <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                  {p.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Journal Technical Guides */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
              Technical Journal &amp; Guides for {service.title}
            </h3>
            <Link
              to="/blog"
              className="text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 flex items-center gap-1"
            >
              <span>Explore Journal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((art) => (
              <article
                key={art.slug}
                className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={`/blog/${art.category}/${art.slug}`}
                    className="block aspect-16/10 bg-stone-200 overflow-hidden"
                  >
                    <img
                      src={art.featuredImage || art.image}
                      alt={art.title}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="img-editorial w-full h-full object-cover object-center"
                    />
                  </Link>
                  <div className="p-6 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-amber-800 font-semibold">
                      {art.category}
                    </div>
                    <h4 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium">
                      <Link to={`/blog/${art.category}/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${art.category}/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-100 transition-colors"
                  >
                    <span>Read Technical Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}
