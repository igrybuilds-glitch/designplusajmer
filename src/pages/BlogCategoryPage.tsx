import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowRight, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogApi } from '../content/blog/api';

interface BlogCategoryPageProps {
  onOpenConsultation?: () => void;
}

export function BlogCategoryPage({ onOpenConsultation }: BlogCategoryPageProps) {
  const { category: paramCategory, slug } = useParams<{ category?: string; slug?: string }>();
  const location = useLocation();
  const pathCategory = location.pathname.split('/').filter(Boolean).pop();
  const activeSlug = paramCategory || slug || pathCategory || '';

  const category = BlogApi.getCategoryBySlug(activeSlug);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const articles = BlogApi.getArticlesByCategory(category.slug);
  const allCategories = BlogApi.getAllCategories().filter(c => c.slug !== category.slug);

  const categorySchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} | Design Plus Journal Archive`,
    description: category.description,
    url: `https://designplusajmer.in/blog/category/${category.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Engineers',
      url: 'https://designplusajmer.in'
    }
  };

  return (
    <main id="blog-category-archive" className="pt-28 pb-24 bg-[#F5F2EB] text-[#1A1917]">
      <SEOHead
        title={category.metaTitle || `${category.name} | Design Plus Archive`}
        description={category.metaDescription || category.description}
        canonical={`https://designplusajmer.in/blog/category/${category.slug}`}
        schema={categorySchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#6E665B] mb-8">
          <Link to="/" className="hover:text-[#1A1917] transition-colors">Home</Link>
          <span className="text-[#1A1917]/25">/</span>
          <Link to="/blog" className="hover:text-[#1A1917] transition-colors">Journal</Link>
          <span className="text-[#1A1917]/25">/</span>
          <span className="text-[#C86635] font-semibold uppercase">{category.shortName}</span>
        </nav>

        {/* Category Header */}
        <div className="border-b border-[#1A1917]/10 pb-10 mb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#C86635] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C86635]" />
              <span>DISCIPLINE ARCHIVE · {articles.length} ARTICLES</span>
              {category.statutoryFocus && (
                <>
                  <span className="text-[#1A1917]/25">·</span>
                  <span className="text-[#6E665B]">{category.statutoryFocus}</span>
                </>
              )}
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal uppercase leading-[0.95] text-[#1A1917]">
              {category.name}
            </h1>

            <p className="text-base sm:text-lg text-[#4A453E] leading-relaxed font-serif font-light">
              {category.description}
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group bg-white/75 backdrop-blur-sm border border-[#1A1917]/10 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                    <img 
                      src={article.featuredImage.src} 
                      alt={article.featuredImage.alt}
                      loading="lazy"
                      className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                    {article.isPillar && (
                      <div className="absolute top-2.5 left-2.5 bg-[#F5F2EB]/95 px-2 py-0.5 text-[9px] font-mono tracking-widest text-[#1A1917] uppercase">
                        ★ PILLAR
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.publishedAt}</span>
                  </div>

                  <h2 className="font-editorial text-2xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-[#4A453E] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E665B]">{article.author.name}</span>
                  <Link 
                    to={`/blog/${article.slug}`} 
                    className="text-[#C86635] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white/60 p-12 text-center space-y-4 mb-20 border border-[#1A1917]/10">
            <BookOpen className="w-8 h-8 text-[#C86635] mx-auto" />
            <h3 className="font-editorial text-2xl uppercase text-[#1A1917]">Articles In Preparation</h3>
            <p className="text-xs font-mono text-[#6E665B] max-w-md mx-auto">
              Our engineering and architectural principals are currently drafting research monographs for this discipline. Check back shortly.
            </p>
          </div>
        )}

        {/* Other Categories Jump Bar */}
        <section className="border-t border-[#1A1917]/10 pt-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E665B] mb-6">
            Other Topical Categories
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {allCategories.slice(0, 4).map(cat => (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}`}
                className="p-4 bg-white/60 hover:bg-white border border-[#1A1917]/10 hover:border-[#C86635] transition-all flex flex-col justify-between"
              >
                <span className="font-editorial text-base font-medium text-[#1A1917]">
                  {cat.name}
                </span>
                <span className="text-[10px] font-mono text-[#C86635] mt-2 flex items-center gap-1 font-semibold">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
