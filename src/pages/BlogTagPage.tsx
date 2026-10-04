import { useParams, Link, Navigate } from 'react-router-dom';
import { Tag, ArrowRight, ArrowUpRight, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogApi } from '../content/blog/api';

interface BlogTagPageProps {
  onOpenConsultation?: () => void;
}

export function BlogTagPage({ onOpenConsultation }: BlogTagPageProps) {
  const { tag: paramTag } = useParams<{ tag?: string }>();
  const activeTagSlug = paramTag || '';

  const tagObj = BlogApi.getTagBySlug(activeTagSlug);
  const articles = BlogApi.getArticlesByTag(activeTagSlug);
  const allTags = BlogApi.getAllTags().filter(t => t.slug !== activeTagSlug);

  const tagName = tagObj?.name || activeTagSlug.replace(/-/g, ' ');

  const tagSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${tagName} Articles | Design Plus Journal`,
    description: `Articles and engineering insights tagged under ${tagName} by Design Plus Architects & Engineers.`,
    url: `https://www.designplusajmer.co.in/blog/tag/${activeTagSlug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Engineers',
      url: 'https://www.designplusajmer.co.in'
    }
  };

  return (
    <main id="blog-tag-archive" className="pt-28 pb-24 bg-[#F5F2EB] text-[#1A1917]">
      <SEOHead
        title={`${tagName} | Design Plus Journal Topic`}
        description={`Explore articles, technical guides, and architectural case studies tagged with ${tagName}.`}
        canonical={`https://www.designplusajmer.co.in/blog/tag/${activeTagSlug}`}
        schema={tagSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#6E665B] mb-8">
          <Link to="/" className="hover:text-[#1A1917] transition-colors">Home</Link>
          <span className="text-[#1A1917]/25">/</span>
          <Link to="/blog" className="hover:text-[#1A1917] transition-colors">Journal</Link>
          <span className="text-[#1A1917]/25">/</span>
          <span className="text-[#C86635] font-semibold uppercase">Tag: {tagName}</span>
        </nav>

        {/* Tag Header */}
        <div className="border-b border-[#1A1917]/10 pb-8 mb-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#C86635] uppercase">
              <Tag className="w-3.5 h-3.5" />
              <span>TOPICAL TAG · {articles.length} ARTICLES</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-normal uppercase text-[#1A1917]">
              {tagName}
            </h1>
            {tagObj?.description && (
              <p className="text-sm text-[#4A453E] font-serif leading-relaxed">
                {tagObj.description}
              </p>
            )}
          </div>
        </div>

        {/* Articles List */}
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
                  </div>

                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span className="uppercase font-semibold text-[#C86635]">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
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
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white/60 p-12 text-center space-y-4 mb-20 border border-[#1A1917]/10">
            <BookOpen className="w-8 h-8 text-[#C86635] mx-auto" />
            <h3 className="font-editorial text-2xl uppercase text-[#1A1917]">No Articles Found</h3>
            <p className="text-xs font-mono text-[#6E665B] max-w-md mx-auto">
              There are currently no published articles with this tag.
            </p>
          </div>
        )}

        {/* Other Tags Jump List */}
        <section className="border-t border-[#1A1917]/10 pt-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E665B] mb-6">
            Explore Other Topics &amp; Tags
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {allTags.map(tag => (
              <Link
                key={tag.slug}
                to={`/blog/tag/${tag.slug}`}
                className="px-3 py-1.5 bg-white/70 hover:bg-white border border-[#1A1917]/10 hover:border-[#C86635] text-[#1A1917] transition-all"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
