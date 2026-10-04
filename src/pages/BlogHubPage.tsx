import { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { BLOG_HUB_POSTS, getFeaturedBlogHubPost, type BlogHubPost } from '../content/blog-hub/posts';
import { Reveal } from '../components/blog-hub/Reveal';
import '../components/blog-hub/blog-hub.css';

const CATEGORIES = ['All', 'Guides', 'Trends', 'Rankings'];
const SITE_URL = 'https://www.designplusajmer.co.in';

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}

function CardVisual({ post, large = false }: { post: BlogHubPost; large?: boolean }) {
  return (
    <div className={`bh-card-visual relative overflow-hidden ${large ? 'h-56 md:h-72' : 'h-48'}`}>
      {post.image ? (
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 via-stone-900 to-stone-950" />
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: 'radial-gradient(circle at 28% 18%, rgba(245,158,11,0.55), transparent 55%), radial-gradient(circle at 78% 85%, rgba(217,119,6,0.35), transparent 50%)' }}
          />
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <span className={`absolute -bottom-3 right-3 font-black text-white/10 select-none leading-none ${large ? 'text-[9rem]' : 'text-7xl'}`}>{post.category.charAt(0)}</span>
        </>
      )}
      <span className="absolute top-4 left-5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300 bg-stone-950/70 backdrop-blur-xs px-2.5 py-1 rounded-xs z-10">{post.category}</span>
      {post.featured && (
        <span className="absolute top-4 right-5 text-[11px] font-bold uppercase tracking-[0.18em] bg-amber-500 text-stone-950 px-3 py-1 rounded-full z-10 shadow-md">Featured</span>
      )}
    </div>
  );
}

export default function BlogHubPage() {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState('All');
  const [filtering, setFiltering] = useState(false);
  const featured = getFeaturedBlogHubPost();

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      // Basic normalization: capitalized first letter
      const normalized = catParam.charAt(0).toUpperCase() + catParam.slice(1).toLowerCase();
      if (CATEGORIES.includes(normalized)) {
        setFilter(normalized);
      }
    }
  }, [searchParams]);

  const posts = useMemo(() => {
    const list = filter === 'All' ? BLOG_HUB_POSTS : BLOG_HUB_POSTS.filter((p) => p.category === filter);
    return filter === 'All' ? list.filter((p) => p.slug !== featured.slug) : list;
  }, [filter, featured.slug]);

  const handleFilter = (cat: string) => {
    if (cat === filter) return;
    setFiltering(true);
    window.setTimeout(() => {
      setFilter(cat);
      setFiltering(false);
    }, 240);
  };

  return (
    <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <SEOHead
        title="Architecture Blog | Design Plus Ajmer"
        description="Practical architecture guides, construction costs, Vaastu tips and design trends for Ajmer, Rajasthan — from the architects at Design Plus."
        canonical={`${SITE_URL}/blog`}
        type="website"
      />

      <section className="pt-28 md:pt-36 pb-10 px-5 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400 mb-4">Design Plus Journal</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Blog</h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              Practical guides on building, interiors and design in Ajmer — costs, processes and trends, written by practising architects.
            </p>
          </Reveal>
        </div>
      </section>

      {filter === 'All' && (
        <section className="px-5 md:px-10 mb-12">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <Link
                to={`/blog/${featured.slug}`}
                className="bh-featured bh-card group block rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 overflow-hidden"
              >
                <div className="bh-card-glow pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.5)' }} />
                <CardVisual post={featured} large />
                <div className="p-6 md:p-10">
                  <div className="text-sm text-stone-500 dark:text-stone-400 mb-3">{formatDate(featured.date)} · 8 min read</div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{featured.title}</h2>
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6 max-w-3xl">{featured.description}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
                    Read the full ranking
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <div className="px-5 md:px-10 mb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`bh-pill px-5 py-2.5 rounded-full text-sm font-semibold border ${
                filter === cat
                  ? 'bg-amber-500 border-amber-500 text-stone-950 shadow-lg shadow-amber-500/25'
                  : 'bg-transparent border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-500/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className={`bh-grid ${filtering ? 'bh-filtering' : ''} px-5 md:px-10 pb-24`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Reveal key={post.slug} delay={(idx % 3) * 90} className="h-full">
              <Link
                to={`/blog/${post.slug}`}
                className="bh-card group relative flex flex-col h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 overflow-hidden"
              >
                <div className="bh-card-glow pointer-events-none absolute inset-0 rounded-2xl z-10" style={{ boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.45)' }} />
                <CardVisual post={post} />
                <div className="flex flex-col flex-1 p-5">
                  <div className="text-xs text-stone-500 dark:text-stone-400 mb-2">{formatDate(post.date)}</div>
                  <h3 className="text-lg font-bold leading-snug mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{post.title}</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 dark:text-amber-300">
                    Read article
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
