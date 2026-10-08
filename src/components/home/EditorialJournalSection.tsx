import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_ARTICLES } from '../../data/blog';

export function EditorialJournalSection() {
  const articles = BLOG_ARTICLES.slice(0, 3);

  return (
    <section 
      id="journal" 
      className="relative bg-transparent text-[#F4F0E8] py-20 sm:py-28 lg:py-36 overflow-hidden border-b border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">10.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Research &amp; Publications</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase">
            The Design Plus Journal
          </span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight text-white uppercase">
              Articles &amp; <br />
              <span className="italic font-light text-[#F4F0E8]/70">helpful guides.</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] font-medium text-[#B86B38] hover:text-[#c47745] transition-colors"
          >
            <span>Browse Full Journal Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug}`}
              className="group bg-black/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:border-[#B86B38] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src={article.featuredImage || article.image || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-white border border-white/15">
                  {article.category || 'Architecture'}
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-[#F4F0E8]/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#B86B38]" />
                      {article.date || article.publishedAt}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B86B38]" />
                      {article.readTime || '5 min read'}
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl text-white group-hover:text-[#B86B38] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4F0E8]/80 font-sans line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B86B38] font-semibold">Read Monograph</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B86B38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
