import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  Building, 
  Compass, 
  BookOpen, 
  HelpCircle 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { LOCATIONS_SERVED, SERVICES } from '../data/siteData';
import { getAllProjects } from '../data/projectsData';
import { getAllBlogArticles } from '../data/blogData';

interface LocationDetailPageProps {
  onOpenConsultation?: () => void;
}

// Localized FAQs specific to genuine service area regulations, soil, and climate
const LOCATION_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  ajmer: [
    {
      q: 'What are the setback and ground coverage requirements under the Ajmer Development Authority (ADA)?',
      a: 'ADA setback regulations depend strictly on plot dimensions and abutting road width. Typically, front setbacks range from 3 meters on standard residential plots to 6+ meters along major arterial roads like Ana Sagar Circular Road and Jaipur Road. Permissible FAR varies between 1.33 to 2.0 depending on residential or commercial zoning.'
    },
    {
      q: 'Does Er. Sudhir Soni provide certified Structural Stability Certificates for ADA municipal approvals?',
      a: 'Yes. As a certified Chartered Engineer (M.I.E., FIV) and structural consultant with over 20+ years of practice and 900+ projects, Er. Sudhir Soni provides official structural calculations, soil load tests, and stability vetting required for multi-story residential and commercial ADA sanction files.'
    },
    {
      q: 'How does Design Plus address foundation engineering on rocky Aravalli terrain in Ajmer?',
      a: 'Much of Ajmer sits on weathered granite and quartzite ridges. We conduct specific core-drilling soil bearing tests to calculate whether stepped isolated pad footings, combined strap footings, or anchored rock plinths are required to avoid differential settlement and excessive excavation costs.'
    }
  ],
  jaipur: [
    {
      q: 'How does your team handle Jaipur Development Authority (JDA) approvals for high-value villas and plazas?',
      a: 'We coordinate complete JDA drawing dossiers—including architectural floor plans, fire egress schemes according to NBC 2016, rainwater harvesting calculations, and certified structural stability certificates for sanction in Vaishali Nagar, Jagatpura, and C-Scheme.'
    },
    {
      q: 'Can Design Plus incorporate regional Pink Sandstone and Dholpur stone into contemporary elevations?',
      a: 'Absolutely. We specialize in contemporary tectonic applications of indigenous stone—using fluted Dholpur cladding, rainscreen ventilated facade brackets, and precision-cut jali screens rather than dated cosmetic moldings.'
    }
  ],
  pushkar: [
    {
      q: 'What architectural and climatic considerations apply to private retreats in Pushkar?',
      a: 'Pushkar experiences intense arid summer temperatures and sandy soil profiles. We utilize internal haveli-inspired courtyards for passive micro-climate cooling, deep cantilevered porticos for thermal shade, and raft foundation matrices engineered for low-bearing sandy loam.'
    },
    {
      q: 'Are there heritage height restrictions in Pushkar?',
      a: 'Yes, properties within designated heritage zones or proximate to Pushkar Lake and prominent temple precincts carry height limits (typically G+1 or G+2) and strict facade aesthetic mandates to protect the sacred historic skyline.'
    }
  ],
  udaipur: [
    {
      q: 'How do you engineer foundations for hillside villas on Udaipur’s steep contours?',
      a: 'Hillside building in Udaipur requires stepped contour foundations, gravity retaining walls, and sub-surface hydrostatic drainage channels to prevent water hydrostatic pressure build-up against basement and ground-retaining walls during monsoon deluges.'
    },
    {
      q: 'What are the environmental and lake catchment setbacks enforced in Udaipur?',
      a: 'Properties within the catchment zones of Lake Pichola, Fateh Sagar, and Badi Lake are subject to stringent ecological buffer zones. We engineer closed-loop sewage treatment systems (STPs) and zero-runoff rainwater recharge reservoirs to satisfy UIT and environmental court stipulations.'
    }
  ]
};

export function LocationDetailPage({ onOpenConsultation }: LocationDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS_SERVED.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const allProjects = getAllProjects();
  const allArticles = getAllBlogArticles();

  // Filter projects by this city/slug
  const cityProjects = allProjects.filter((p) =>
    p.city.toLowerCase().includes(location.city.toLowerCase()) ||
    p.location.toLowerCase().includes(location.city.toLowerCase()) ||
    p.slug.includes(location.slug)
  );

  // Filter blog articles relevant to this location
  const cityArticles = allArticles.filter((a) =>
    a.relatedLocations?.includes(location.slug) ||
    a.category === location.slug ||
    a.title.toLowerCase().includes(location.city.toLowerCase())
  );

  // Relevant services available in this location
  const relevantServices = SERVICES.slice(0, 4);

  // Localized FAQs
  const localFaqs = LOCATION_FAQS[location.slug] || LOCATION_FAQS.ajmer;

  const canonicalUrl = `https://designplusajmer.in/locations/${location.slug}`;

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Design Plus - Architects & Structural Engineers ${location.city}`,
    description: `${location.city} architectural design, residential villas, commercial planning, and chartered structural engineering by Design Plus.`,
    url: canonicalUrl,
    image: location.heroImage,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: 'Rajasthan',
      addressCountry: 'IN'
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://designplusajmer.in'
    }
  };

  return (
    <main id="location-detail-page" className="pt-28 pb-20">
      <SEOHead
        title={`Architects & Structural Engineers in ${location.city}, Rajasthan | Design Plus`}
        description={`${location.city} architectural design, residential villas, commercial planning, and chartered structural engineering by Design Plus.`}
        image={location.heroImage}
        canonical={canonicalUrl}
        schema={locationSchema}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/locations" className="hover:text-stone-950 transition-colors">Regional Locations</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">{location.city}, Rajasthan</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-3 max-w-4xl">
          <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.city}, {location.state} Practice Hub</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            Architectural &amp; Structural Engineering in {location.city}
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            {location.tagline} — {location.description}
          </p>
        </div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative aspect-16/8 bg-stone-200 overflow-hidden border border-stone-200 shadow-xs">
          <img
            src={location.heroImage}
            alt={`${location.city} architectural landscape`}
            width={1600}
            height={800}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 bg-stone-950/85 text-white text-xs px-3 py-1 font-sans">
            Regional Context: {location.city}, Rajasthan
          </div>
        </div>
      </section>

      {/* Content Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-10">
            
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Context &amp; Geography
              </div>
              <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Climatic Context &amp; Tectonic Adaptation in {location.city}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {location.architecturalContext}
              </p>
            </div>

            {/* Municipal Regulations Card */}
            <div className="p-8 bg-stone-50 border border-stone-200 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-900 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
                <span>Municipal Standards &amp; Regulatory Alignment</span>
              </div>
              <h3 className="font-editorial text-xl text-stone-950 font-semibold">
                Building Approvals &amp; Chartered Engineering Compliance
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                {location.localRegulations}
              </p>
              <p className="text-xs text-stone-500 pt-1">
                Chartered Engineer Er. Sudhir Soni provides official structural stability certifications, soil bearing verifications, and compliance drawing sets recognized by local authorities.
              </p>
            </div>

            {/* Available Services in City */}
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
                Available Disciplines
              </div>
              <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                Comprehensive Architectural Services for {location.city}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {relevantServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/services/${svc.slug}`}
                    className="p-4 bg-white border border-stone-200 hover:border-stone-400 transition-colors group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-amber-800 font-semibold uppercase tracking-wider mb-1">
                        <span>Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 transition-colors" />
                      </div>
                      <h4 className="font-editorial text-lg text-stone-950 font-medium group-hover:text-amber-800">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                        {svc.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Regional Practice Highlights */}
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                Practice Highlights in {location.city}
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                {location.serviceHighlights.map((sh) => (
                  <li key={sh} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{sh}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Localized FAQ Section */}
            <div className="space-y-6 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-800 font-semibold">
                <HelpCircle className="w-4 h-4" />
                <span>Localized Regulatory &amp; Technical FAQs</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                Frequently Asked Questions for {location.city}
              </h3>
              <div className="space-y-4">
                {localFaqs.map((faq, idx) => (
                  <div key={idx} className="p-6 bg-white border border-stone-200 space-y-2">
                    <h4 className="font-editorial text-lg text-stone-950 font-medium">
                      {faq.q}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="p-8 bg-white border border-stone-300 shadow-sm space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold block mb-1">
                  Plan in {location.city}
                </span>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Site Feasibility Review
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Have our chartered engineering and architectural team evaluate your plot dimensions, FAR potential, and setback requirements for {location.city}.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book {location.city} Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center border border-stone-200"
                >
                  General Inquiry
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Relevant Projects In This Region */}
      {cityProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
              Demonstrated Projects In &amp; Around {location.city}
            </h3>
            <Link
              to="/projects"
              className="text-xs uppercase tracking-wider font-semibold text-amber-800 hover:underline flex items-center gap-1"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cityProjects.map((proj) => (
              <Link
                key={proj.slug}
                to={`/projects/${proj.category}/${proj.slug}`}
                className="group block bg-white border border-stone-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-16/10 bg-stone-200 overflow-hidden">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                    {proj.categoryLabel} · {proj.location}
                  </div>
                  <h4 className="font-editorial text-2xl text-stone-950 group-hover:text-amber-800 transition-colors mt-1 font-medium">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2">
                    {proj.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Relevant Blog Articles for This Region */}
      {cityArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
              Regional Journal &amp; Technical Guides for {location.city}
            </h3>
            <Link
              to="/blog"
              className="text-xs uppercase tracking-wider font-semibold text-amber-800 hover:underline flex items-center gap-1"
            >
              <span>Explore Journal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={`/blog/${article.category}/${article.slug}`}
                    className="block aspect-16/10 bg-stone-200 overflow-hidden"
                  >
                    <img
                      src={article.featuredImage || article.image}
                      alt={article.title}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="img-editorial w-full h-full object-cover object-center"
                    />
                  </Link>
                  <div className="p-5 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-amber-800 font-semibold">
                      {article.category}
                    </div>
                    <h4 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium">
                      <Link to={`/blog/${article.category}/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    to={`/blog/${article.category}/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-100 transition-colors"
                  >
                    <span>Read Guide</span>
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
