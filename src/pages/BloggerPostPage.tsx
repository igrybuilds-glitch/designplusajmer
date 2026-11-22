import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Reveal, ReadingProgress } from '../components/blog-hub/Reveal';
import {
  BLOGGER_BLOG_URL,
  fetchBloggerPost,
  findCachedBloggerPost,
  formatBloggerDate,
  sanitizeBloggerHtml,
  type BloggerPost,
} from '../lib/bloggerFeed';
import '../components/blog-hub/blog-hub.css';

const SITE_URL = 'https://www.designplusajmer.co.in';

export default function BloggerPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BloggerPost | null>(() => (postId ? findCachedBloggerPost(postId) : null));
  const [loading, setLoading] = useState<boolean>(() => !post);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!postId) {
      setLoading(false);
      setFailed(true);
      return;
    }
    let cancelled = false;
    // Cached copy (from the list page) renders instantly; still refresh it.
    if (!post) setLoading(true);
    fetchBloggerPost(postId)
      .then((fresh) => {
        if (cancelled) return;
        if (fresh) {
          setPost(fresh);
          setFailed(false);
        } else if (!post) {
          setFailed(true);
        }
      })
      .catch(() => {
        if (cancelled) return;
        if (!post) setFailed(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  const safeHtml = useMemo(() => (post ? sanitizeBloggerHtml(post.contentHtml) : ''), [post]);

  if (loading) {
    return (
      <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
        <div className="pt-28 md:pt-36 pb-16 px-5 md:px-10">
          <div className="max-w-3xl mx-auto" role="status" aria-label="Loading post">
            <div className="h-4 w-32 rounded bg-stone-200 dark:bg-stone-800 animate-pulse mb-8" />
            <div className="h-10 w-full rounded bg-stone-200 dark:bg-stone-800 animate-pulse mb-4" />
            <div className="h-10 w-2/3 rounded bg-stone-200 dark:bg-stone-800 animate-pulse mb-10" />
            <div className="space-y-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-4 w-full rounded bg-stone-200 dark:bg-stone-800 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex items-center justify-center px-5">
        <SEOHead title="Post not found | Design Plus" canonical={`${SITE_URL}/blog`} type="website" />
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-black mb-4">Post not found</h1>
          <p className="text-stone-600 dark:text-stone-400 mb-6 leading-relaxed">
            {failed
              ? 'This post could not be loaded from Blogger just now. It may still be readable at the source.'
              : 'The post you are looking for does not exist.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
              <span aria-hidden="true">←</span> Back to blog
            </Link>
            <a href={BLOGGER_BLOG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300">
              Open Blogger <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-hub-page min-h-screen bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <SEOHead
        title={`${post.title} | Design Plus Blog`}
        description={post.excerpt || 'A note by Er. Sudhir Soni, published on Blogger and mirrored on the Design Plus website.'}
        canonical={post.originalUrl}
        type="article"
      />
      <ReadingProgress />

      <article className="pt-28 md:pt-36 pb-16 px-5 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 mb-8 py-2 -my-2 px-1 -mx-1 hover:gap-3 transition-all">
              <span aria-hidden="true">←</span> All articles
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] bg-amber-500/15 text-amber-800 dark:text-amber-300 px-3 py-1.5 rounded-full">Blogger</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">{formatBloggerDate(post.published)}</span>
              <span className="text-sm text-stone-500 dark:text-stone-400">by {post.authorName}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-10">{post.title}</h1>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-content border-t border-stone-200 dark:border-stone-800 pt-8" dangerouslySetInnerHTML={{ __html: safeHtml }} />
          </Reveal>

          <div className="mt-12 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed flex-1">
              This note was originally posted by Er. Sudhir Soni on his Blogger journal and is shown here automatically.
            </p>
            <a
              href={post.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-300 whitespace-nowrap"
            >
              Originally posted on Blogger
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
