import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar, User, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { BLOG_CATEGORIES, getAllBlogArticles, getFeaturedBlogArticles } from '../data/blogData';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const allArticles = getAllBlogArticles();
  const featuredArticles = getFeaturedBlogArticles();
  const primaryFeatured = featuredArticles[0];

  const filteredArticles = selectedCategory === 'all'
    ? allArticles
    : allArticles.filter((a) => a.category === selectedCategory);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Design Plus Architectural Journal',
    description: 'Essays and technical guides on structural engineering, Haveli courtyard passive cooling, and ADA building byelaws in Ajmer and Rajasthan.',
    url: 'https://designplusajmer.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://designplusajmer.in'
    }
  };

  return (
    <main id="blog-page" className="pt-28 pb-20">
      <SEOHead
        title="Journal & Architectural Insights | Design Plus Ajmer"
        description="Essays and technical guides on structural engineering, Haveli courtyard passive cooling, and ADA building byelaws in Ajmer and Rajasthan."
        canonical="https://designplusajmer.in/blog"
        schema={blogSchema}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          <span className="text-amber-900 font-medium">Journal &amp; Essays</span>
        </nav>
      </div>

      {/* Hero Header via Reusable Component */}
      <EditorialHero 
        subtitle={
          <>
            <Layers className="w-3.5 h-3.5 text-amber-800" />
            <span>Studio Journal &amp; Technical Monograph</span>
          </>
        }
        title="Perspectives on Structure, Climate & Urban Form"
        description="Technical papers, regulatory guides, and design reflections from our chartered engineers and architects on building durability, Rajasthan climate physics, and municipal standards."
      />

      {/* Category Identity Cards Grid (Direct links to /blog/:category) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
          Explore Dedicated Topic Archives
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BLOG_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/blog/${cat.slug}`}
              className="group p-5 bg-white border border-stone-200 hover:border-stone-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold flex items-center justify-between">
                  <span>Category</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 transition-colors" />
                </div>
                <h2 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium">
                  {cat.name}
                </h2>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {cat.introduction}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center text-[11px] font-semibold text-stone-900 group-hover:text-amber-800 transition-colors">
                <span>View {cat.name} Archive</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Primary Featured Article Banner */}
      {primaryFeatured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
            Featured Lead Monograph
          </div>
          <article className="group bg-white border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xs hover:shadow-md transition-shadow">
            <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto bg-stone-200 overflow-hidden">
              <img
                src={primaryFeatured.featuredImage || primaryFeatured.image}
                alt={primaryFeatured.title}
                width={1200}
                height={750}
                loading="lazy"
                className="img-editorial w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-stone-950/85 text-white text-[10px] uppercase tracking-wider px-3 py-1 font-sans">
                {primaryFeatured.category}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    {primaryFeatured.publishedAt || primaryFeatured.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {primaryFeatured.readTime}
                  </span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                  <Link to={`/blog/${primaryFeatured.category}/${primaryFeatured.slug}`}>
                    {primaryFeatured.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                  {primaryFeatured.excerpt}
                </p>

                <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>{primaryFeatured.author}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to={`/blog/${primaryFeatured.category}/${primaryFeatured.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-950 hover:text-amber-800 transition-colors"
                >
                  <span>Read Complete Monograph</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 font-medium mr-2">Filter Articles:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-stone-950 text-[#FBFBF9]'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Articles ({allArticles.length})
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 ${
                  selectedCategory === cat.slug
                    ? 'bg-stone-950 text-[#FBFBF9]'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <article
              key={post.slug}
              className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <Link 
                  to={`/blog/${post.category}/${post.slug}`} 
                  className="relative aspect-16/10 bg-stone-200 overflow-hidden block"
                >
                  <img
                    src={post.featuredImage || post.image}
                    alt={post.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[10px] uppercase tracking-wider px-2.5 py-1 font-sans">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-stone-400" />
                      {post.publishedAt || post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 transition-colors font-medium leading-snug">
                    <Link to={`/blog/${post.category}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-stone-400" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/blog/${post.category}/${post.slug}`}
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

    </main>
  );
}
