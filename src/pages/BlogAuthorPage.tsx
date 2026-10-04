import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, Award, ArrowRight, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogApi } from '../content/blog/api';

interface BlogAuthorPageProps {
  onOpenConsultation?: () => void;
}

export function BlogAuthorPage({ onOpenConsultation }: BlogAuthorPageProps) {
  const { author: paramAuthor } = useParams<{ author?: string }>();
  const authorSlug = paramAuthor || '';

  const author = BlogApi.getAuthorBySlug(authorSlug);

  if (!author) {
    return <Navigate to="/blog" replace />;
  }

  const articles = BlogApi.getArticlesByAuthor(author.slug);

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      image: author.avatar,
      worksFor: {
        '@type': 'Organization',
        name: 'Design Plus Architects & Engineers',
        url: 'https://www.designplusajmer.co.in'
      }
    }
  };

  return (
    <main id="blog-author-archive" className="pt-28 pb-24 bg-[#F5F2EB] text-[#1A1917]">
      <SEOHead
        title={`${author.name} | Design Plus Author Archive`}
        description={`${author.name} (${author.qualifications}). ${author.bio}`}
        canonical={`https://www.designplusajmer.co.in/blog/author/${author.slug}`}
        schema={authorSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#6E665B] mb-8">
          <Link to="/" className="hover:text-[#1A1917] transition-colors">Home</Link>
          <span className="text-[#1A1917]/25">/</span>
          <Link to="/blog" className="hover:text-[#1A1917] transition-colors">Journal</Link>
          <span className="text-[#1A1917]/25">/</span>
          <span className="text-[#C86635] font-semibold uppercase">{author.name}</span>
        </nav>

        {/* Author Bio Profile Card */}
        <div className="bg-white/85 backdrop-blur-md border border-[#1A1917]/15 p-8 sm:p-12 mb-16 shadow-[0_12px_40px_rgba(26,25,23,0.05)]">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-[#1A1917]/10 shrink-0"
            />
            <div className="space-y-4 max-w-3xl">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold block mb-1">
                  PRACTICE PRINCIPAL &amp; CONTRIBUTOR
                </span>
                <h1 className="font-editorial text-3xl sm:text-5xl font-normal uppercase text-[#1A1917]">
                  {author.name}
                </h1>
                <p className="text-xs font-mono text-[#6E665B] mt-1">
                  {author.qualifications} · {author.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#33312E] leading-relaxed font-sans">
                {author.bio}
              </p>

              {/* Statutory Affiliations & Experience */}
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-[#1A1917]/10 text-xs font-mono">
                {author.experienceYears && (
                  <div>
                    <span className="text-[#6E665B] block text-[10px] uppercase">EXPERIENCE</span>
                    <span className="text-[#1A1917] font-bold">{author.experienceYears}+ Years</span>
                  </div>
                )}
                {author.statutoryAffiliations && (
                  <div>
                    <span className="text-[#6E665B] block text-[10px] uppercase">AFFILIATIONS</span>
                    <span className="text-[#1A1917] font-semibold">
                      {author.statutoryAffiliations.join(' · ')}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-[#6E665B] block text-[10px] uppercase">RESEARCH ARTICLES</span>
                  <span className="text-[#C86635] font-bold">{articles.length} Published</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author's Articles Stream */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 text-xs font-mono">
            <span className="uppercase tracking-[0.2em] font-semibold text-[#1A1917]">
              Articles Authored by {author.name} ({articles.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                  <h3 className="font-editorial text-2xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#4A453E] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E665B]">{article.publishedAt}</span>
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
        </section>

      </div>
    </main>
  );
}
