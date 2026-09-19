import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ChevronRight, 
  Building, 
  Compass, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { 
  getBlogArticle, 
  getBlogArticleBySlug, 
  getBlogCategory, 
  getBlogArticlesByCategory 
} from '../data/blogData';
import { SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { getAllProjects } from '../data/projectsData';

interface BlogDetailPageProps {
  onOpenConsultation?: () => void;
}

export function BlogDetailPage({ onOpenConsultation }: BlogDetailPageProps) {
  const { category: routeCategory, slug: routeSlug } = useParams<{ 
    category?: string; 
    slug?: string; 
  }>();

  // If both category and slug exist, lookup strictly. If only slug or param is provided, fallback to slug lookup.
  const targetSlug = routeSlug || routeCategory || '';
  const post = (routeCategory && routeSlug) 
    ? getBlogArticle(routeCategory, routeSlug) 
    : getBlogArticleBySlug(targetSlug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Canonical redirect check: if the URL category doesn't match the article's true category, redirect cleanly
  if (routeCategory && routeCategory !== post.category) {
    return <Navigate to={`/blog/${post.category}/${post.slug}`} replace />;
  }

  const categoryMeta = getBlogCategory(post.category);
  const categoryArticles = getBlogArticlesByCategory(post.category).filter(
    (a) => a.slug !== post.slug
  );

  const allProjects = getAllProjects();

  // Resolve related services, projects, and locations
  const relatedServicesData = SERVICES.filter((s) => 
    post.relatedServices?.includes(s.slug)
  );

  const relatedProjectsData = allProjects.filter((p) => 
    post.relatedProjects?.includes(p.slug)
  );

  const relatedLocationsData = LOCATIONS_SERVED.filter((l) => 
    post.relatedLocations?.includes(l.slug)
  );

  const canonicalUrl = `https://designplusajmer.in/blog/${post.category}/${post.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.featuredImage || post.image],
    datePublished: post.publishedAt || post.date,
    dateModified: post.updatedAt || post.publishedAt || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Er. Sudhir Soni'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://designplusajmer.in'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  return (
    <main id="blog-detail-page" className="pt-28 pb-20">
      <SEOHead
        title={post.metaTitle || `${post.title} | Design Plus`}
        description={post.metaDescription || post.excerpt}
        image={post.featuredImage || post.image}
        canonical={canonicalUrl}
        schema={articleSchema}
      />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link to="/blog" className="hover:text-stone-950 transition-colors">Journal</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <Link 
            to={`/blog/${post.category}`} 
            className="hover:text-stone-950 transition-colors capitalize font-medium text-amber-900"
          >
            {categoryMeta?.name || post.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-stone-800 line-clamp-1 max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <Link
              to={`/blog/${post.category}`}
              className="text-[11px] uppercase tracking-[0.25em] text-amber-800 font-semibold hover:underline"
            >
              {categoryMeta?.name || post.category}
            </Link>
            {post.subcategory && (
              <>
                <span className="text-stone-300">/</span>
                <span className="text-[11px] uppercase tracking-wider text-stone-500">
                  {post.subcategory}
                </span>
              </>
            )}
          </div>

          <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2 border-y border-stone-200 py-3">
            <span className="flex items-center gap-1.5 font-medium text-stone-800">
              <User className="w-3.5 h-3.5 text-stone-400" />
              {post.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              {post.publishedAt || post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Hero Visual */}
        <div className="relative aspect-16/9 bg-stone-200 overflow-hidden border border-stone-200 mb-10 shadow-xs">
          <img
            src={post.featuredImage || post.image}
            alt={post.title}
            width={1200}
            height={675}
            priority-load="true"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-sans">
          {post.content.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-stone-200 flex items-center flex-wrap gap-2">
            <Tag className="w-3.5 h-3.5 text-stone-400 mr-1" />
            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold mr-2">Taxonomy:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-stone-100 text-stone-700 px-3 py-1 font-sans border border-stone-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Box */}
        <div className="mt-12 p-8 bg-[#F5F5F0] border border-stone-300 space-y-3">
          <div className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-800" />
            <span>Practice Authorship &amp; Engineering Credentials</span>
          </div>
          <h3 className="font-editorial text-2xl text-stone-950 font-medium">
            {post.author}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
            Directing structural calculation protocols and regional architectural form at Design Plus (Ajmer, Rajasthan). Providing certified stability audits, municipal byelaw alignments, and climate-responsive architecture.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Consult with Senior Practice Principals</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Internal Cross-Linking: Related Services, Projects & Locations */}
        <div className="mt-12 pt-8 border-t border-stone-200 space-y-8">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
            Contextual Studio Architecture
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related Services */}
            {relatedServicesData.length > 0 && (
              <div className="p-5 bg-white border border-stone-200 space-y-3">
                <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Related Service</span>
                </div>
                <ul className="space-y-2">
                  {relatedServicesData.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        to={`/services/${svc.slug}`}
                        className="text-xs font-medium text-stone-900 hover:text-amber-800 transition-colors block"
                      >
                        {svc.title} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Projects */}
            {relatedProjectsData.length > 0 && (
              <div className="p-5 bg-white border border-stone-200 space-y-3">
                <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs uppercase tracking-wider">
                  <Building className="w-3.5 h-3.5" />
                  <span>Related Case Study</span>
                </div>
                <ul className="space-y-2">
                  {relatedProjectsData.map((proj) => (
                    <li key={proj.slug}>
                      <Link
                        to={`/projects/${proj.category}/${proj.slug}`}
                        className="text-xs font-medium text-stone-900 hover:text-amber-800 transition-colors block"
                      >
                        {proj.title} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Locations */}
            {relatedLocationsData.length > 0 && (
              <div className="p-5 bg-white border border-stone-200 space-y-3">
                <div className="flex items-center gap-1.5 text-amber-800 font-semibold text-xs uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Regional Practice</span>
                </div>
                <ul className="space-y-2">
                  {relatedLocationsData.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        to={`/locations/${loc.slug}`}
                        className="text-xs font-medium text-stone-900 hover:text-amber-800 transition-colors block"
                      >
                        {loc.city}, {loc.state} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </article>

      {/* Related Category Articles */}
      {categoryArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
              More in {categoryMeta?.name || post.category}
            </h2>
            <Link
              to={`/blog/${post.category}`}
              className="text-xs uppercase tracking-wider font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
            >
              <span>View All {categoryMeta?.name} Essays</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.slice(0, 3).map((item) => (
              <article
                key={item.slug}
                className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <Link 
                    to={`/blog/${item.category}/${item.slug}`} 
                    className="relative aspect-16/10 bg-stone-200 overflow-hidden block"
                  >
                    <img
                      src={item.featuredImage || item.image}
                      alt={item.title}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="img-editorial w-full h-full object-cover object-center"
                    />
                  </Link>
                  <div className="p-6 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-amber-800 font-semibold">
                      {item.subcategory || item.category}
                    </div>
                    <h3 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                      <Link to={`/blog/${item.category}/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${item.category}/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-amber-800 pt-3 border-t border-stone-100 transition-colors"
                  >
                    <span>Read Article</span>
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
