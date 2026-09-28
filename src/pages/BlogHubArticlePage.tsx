import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { getBlogHubPost, getRelatedBlogHubPosts } from '../content/blog-hub/posts';
import { MarkdownRenderer } from '../components/blog-hub/MarkdownRenderer';
import { Reveal, ReadingProgress } from '../components/blog-hub/Reveal';
import '../components/blog-hub/blog-hub.css';

const SITE_URL = 'https://designplusajmer.vercel.app';

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}

function splitSections(markdown: string): string[] {
  const parts = markdown.split(/(?=^## )/m);
  return parts.map((p) => p.trim()).filter(Boolean);
}

export default function BlogHubArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogHubPost(slug) : undefined;
  const related = useMemo(() => (post ? getRelatedBlogHubPosts(post.slug, 3) : []), [post]);
  const sections = useMemo(() => (post ? splitSections(post.content) : []), [post]);

  if (!post) {
    return (
      <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-black mb-4">Article not found</h1>
          <p className="text-stone-600 dark:text-stone-400 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
            <span aria-hidden="true">←</span> Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Design Plus', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Design Plus', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };

  return (
    <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <SEOHead
        title={`${post.title} | Design Plus Blog`}
        description={post.description}
        canonical={canonical}
        type="article"
        schema={articleSchema}
      />
      <ReadingProgress />

      <article className="pt-28 md:pt-36 pb-16 px-5 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 mb-8 hover:gap-3 transition-all">
              <span aria-hidden="true">←</span> All articles
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] bg-amber-500/15 text-amber-700 dark:text-amber-300 px-3 py-1.5 rounded-full">{post.category}</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">{formatDate(post.date)}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">{post.title}</h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8">{post.description}</p>
            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md aspect-16/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </Reveal>

          <div className="border-t border-stone-200 dark:border-stone-800 pt-2">
            {sections.map((section, idx) => (
              <Reveal key={idx} delay={0}>
                <MarkdownRenderer markdown={section} />
              </Reveal>
            ))}
          </div>

          <Reveal className="bh-cta mt-14">
            <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-stone-50 to-stone-100 dark:from-amber-500/10 dark:via-stone-900 dark:to-stone-900/60 p-8 md:p-10 text-center">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">Planning a project in Ajmer?</h2>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-7 max-w-xl mx-auto">
                Get a free site consultation with our architects — honest scope, transparent pricing, no obligation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-amber-500/25"
              >
                Book Free Site Consultation
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="px-5 md:px-10 pb-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Keep reading</h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r, idx) => (
                <Reveal key={r.slug} delay={idx * 90} className="h-full">
                  <Link
                    to={`/blog/${r.slug}`}
                    className="bh-card group flex flex-col h-full rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 overflow-hidden"
                  >
                    <div className="p-5 flex flex-col flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400 mb-2">{r.category}</div>
                      <h3 className="font-bold leading-snug mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">{r.title}</h3>
                      <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2">{r.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
