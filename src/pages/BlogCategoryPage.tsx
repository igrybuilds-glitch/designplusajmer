import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Calendar, Clock, User, Tag, ChevronRight, Building, Compass, MapPin } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { 
  getBlogCategory, 
  getBlogArticlesByCategory, 
  getBlogCategories 
} from '../data/blogData';
import { SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { getAllProjects } from '../data/projectsData';

interface BlogCategoryPageProps {
  onOpenConsultation?: () => void;
}

export function BlogCategoryPage({ onOpenConsultation }: BlogCategoryPageProps) {
  const { category: categoryParam } = useParams<{ category: string }>();
  const location = useLocation();
  const pathParts = (location?.pathname || '').split('/').filter(Boolean);
  const derivedSlug = categoryParam || (pathParts[0] === 'blog' ? pathParts[1] : '');
  const categoryMeta = getBlogCategory(derivedSlug || '');

  if (!categoryMeta) {
    return <Navigate to="/blog" replace />;
  }

  const categoryArticles = getBlogArticlesByCategory(categoryMeta.slug);
  const allCategories = getBlogCategories();
  const allProjects = getAllProjects();

  // Featured article is either the first or one with a high read count
  const featuredArticle = categoryArticles[0];
  const latestArticles = categoryArticles.slice(1);

  // Resolve related services, projects, and locations
  const relatedServicesData = SERVICES.filter((s) => 
    categoryMeta.relatedServices.includes(s.slug)
  );

  const relatedProjectsData = allProjects.filter((p) => 
    categoryMeta.relatedProjects.includes(p.slug)
  );

  const relatedLocationsData = LOCATIONS_SERVED.filter((l) => 
    categoryMeta.relatedLocations.includes(l.slug)
  );

  const canonicalUrl = `https://designplusajmer.in/blog/${categoryMeta.slug}`;

  const categorySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryMeta.metaTitle,
    description: categoryMeta.metaDescription,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryArticles.map((art, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://designplusajmer.in/blog/${art.category}/${art.slug}`,
        name: art.title
      }))
    }
  };

  return (
    <main id="blog-category-page" className="pt-28 pb-20">
      <SEOHead
        title={categoryMeta.metaTitle}
        description={categoryMeta.metaDescription}
        canonical={canonicalUrl}
        schema={categorySchema}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/blog" className="hover:text-stone-950 transition-colors">Journal</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">{categoryMeta.name}</span>
        </nav>
      </div>

      {/* Category Header & Editorial Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-amber-800 font-semibold">
            <span>Studio Journal &amp; Monograph</span>
            <span>/</span>
            <span>Taxonomy</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-tight">
            {categoryMeta.h1}
          </h1>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans pt-1">
            {categoryMeta.introduction}
          </p>

          <div className="p-6 bg-stone-100 border border-stone-200 mt-4">
            <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-1">
              Editorial Doctrine
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed italic font-editorial">
              &ldquo;{categoryMeta.editorialNote}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="border-y border-stone-200 py-3 flex items-center justify-between gap-4 overflow-x-auto">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold shrink-0">
            Journal Topics:
          </span>
          <div className="flex items-center gap-2">
            <Link
              to="/blog"
              className="text-xs uppercase tracking-wider px-3 py-1.5 font-semibold text-stone-600 hover:text-stone-950 bg-stone-50 hover:bg-stone-100 transition-colors shrink-0"
            >
              All Topics
            </Link>
            {allCategories.map((cat) => {
              const isActive = cat.slug === categoryMeta.slug;
              return (
                <Link
                  key={cat.slug}
                  to={`/blog/${cat.slug}`}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 font-semibold transition-colors shrink-0 ${
                    isActive
                      ? 'bg-stone-950 text-[#FBFBF9]'
                      : 'text-stone-600 hover:text-stone-950 bg-stone-50 hover:bg-stone-100'
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Article in Category */}
      {featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-4">
            Featured in {categoryMeta.name}
          </div>
          <article className="group bg-white border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto bg-stone-200 overflow-hidden">
              <img
                src={featuredArticle.featuredImage}
                alt={featuredArticle.title}
                width={1200}
                height={750}
                loading="lazy"
                className="img-editorial w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-stone-950/85 text-white text-[10px] uppercase tracking-wider px-3 py-1 font-sans">
                {featuredArticle.subcategory || categoryMeta.name}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    {featuredArticle.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                  <Link to={`/blog/${categoryMeta.slug}/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>{featuredArticle.author}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/blog/${categoryMeta.slug}/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-950 hover:text-amber-800 transition-colors"
                >
                  <span>Read Complete Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Latest Articles in Category */}
      {latestArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold mb-6">
            Additional Essays in {categoryMeta.name}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <Link 
                    to={`/blog/${categoryMeta.slug}/${article.slug}`} 
                    className="relative aspect-16/10 bg-stone-200 overflow-hidden block"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="img-editorial w-full h-full object-cover object-center"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 font-sans">
                      {article.subcategory || categoryMeta.name}
                    </div>
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {article.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                      <Link to={`/blog/${categoryMeta.slug}/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-stone-400" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${categoryMeta.slug}/${article.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-100 transition-colors"
                  >
                    <span>Read Essay</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Editorial Cross-Architecture Linking: Related Services, Projects & Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Related Architectural Disciplines */}
          <div className="p-6 bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Related Services</span>
            </div>
            <h4 className="font-editorial text-xl text-stone-950 font-medium">
              Disciplines Relevant to {categoryMeta.name}
            </h4>
            <ul className="space-y-2.5 pt-2">
              {relatedServicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="group flex items-start justify-between text-xs text-stone-700 hover:text-amber-800 transition-colors"
                  >
                    <div>
                      <span className="font-medium text-stone-900 group-hover:text-amber-800">{svc.title}</span>
                      <span className="block text-[11px] text-stone-500 line-clamp-1">{svc.shortDescription}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-stone-400 group-hover:text-amber-800 mt-0.5 ml-2" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Case Studies & Projects */}
          <div className="p-6 bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Related Case Studies</span>
            </div>
            <h4 className="font-editorial text-xl text-stone-950 font-medium">
              Demonstrated Architectural Works
            </h4>
            <ul className="space-y-2.5 pt-2">
              {relatedProjectsData.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    to={`/projects/${proj.category}/${proj.slug}`}
                    className="group flex items-start justify-between text-xs text-stone-700 hover:text-amber-800 transition-colors"
                  >
                    <div>
                      <span className="font-medium text-stone-900 group-hover:text-amber-800">{proj.title}</span>
                      <span className="block text-[11px] text-stone-500">{proj.categoryLabel} · {proj.location}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-stone-400 group-hover:text-amber-800 mt-0.5 ml-2" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Regional Locations */}
          <div className="p-6 bg-white border border-stone-200 space-y-4">
            <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Regional Service Context</span>
            </div>
            <h4 className="font-editorial text-xl text-stone-950 font-medium">
              Regional Practice Hubs
            </h4>
            <ul className="space-y-2.5 pt-2">
              {relatedLocationsData.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="group flex items-start justify-between text-xs text-stone-700 hover:text-amber-800 transition-colors"
                  >
                    <div>
                      <span className="font-medium text-stone-900 group-hover:text-amber-800">{loc.city}, {loc.state}</span>
                      <span className="block text-[11px] text-stone-500 line-clamp-1">{loc.tagline}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-stone-400 group-hover:text-amber-800 mt-0.5 ml-2" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-10 bg-stone-900 text-[#FBFBF9] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
              Architectural Advisory
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-100 font-normal">
              Discuss Your {categoryMeta.name} Commission
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Engage with our chartered structural engineers and principal architects to examine plot feasibility, setback calculations, and spatial strategy.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="bg-amber-800 hover:bg-amber-700 text-white px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2"
            >
              <span>Schedule Review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 px-5 py-3 text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Studio Inquiry
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
