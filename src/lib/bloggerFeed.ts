/**
 * Blogger feed client for Er. Sudhir Soni's blog
 * (https://designplusajmer.blogspot.com/).
 *
 * The posts are fetched AT RUNTIME in the visitor's browser, so anything new
 * he publishes on Blogger appears on the website automatically — no rebuild,
 * no redeploy.
 *
 * Transport note: Blogger's JSON feed sends no CORS headers, so a plain
 * fetch() from this origin is blocked by the browser. Blogger's official
 * `alt=json-in-script` (JSONP) variant exists exactly for cross-origin
 * embedding, so we load the feed through a <script> tag with a callback.
 */

export const BLOGGER_BLOG_URL = 'https://designplusajmer.blogspot.com/';
const FEED_BASE = 'https://designplusajmer.blogspot.com/feeds/posts/default';
const CACHE_KEY = 'dp-blogger-feed-v1';
export const BLOGGER_PAGE_SIZE = 12;

export interface BloggerPost {
  /** Numeric Blogger post id — used as the /blog/blogger/:postId route param. */
  id: string;
  title: string;
  /** ISO timestamp from the feed. */
  published: string;
  /** Full post HTML, exactly as published on Blogger (sanitize before use). */
  contentHtml: string;
  /** Plain-text excerpt derived from the content. */
  excerpt: string;
  /** First image URL (upgraded to a card-friendly size), if the post has one. */
  image: string | null;
  /** Canonical URL of the post on blogspot. */
  originalUrl: string;
  authorName: string;
}

interface BloggerFeedResponse {
  feed?: {
    openSearch$totalResults?: { $t?: string };
    entry?: Array<Record<string, unknown>>;
  };
}

let jsonpCounter = 0;

function loadJsonp(url: string, timeoutMs = 15000): Promise<BloggerFeedResponse> {
  return new Promise((resolve, reject) => {
    jsonpCounter += 1;
    const cbName = `__dpBloggerCb${jsonpCounter}_${Date.now()}`;
    const script = document.createElement('script');
    const cleanup = () => {
      window.clearTimeout(timer);
      delete (window as unknown as Record<string, unknown>)[cbName];
      script.remove();
    };
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('Blogger feed request timed out'));
    }, timeoutMs);
    (window as unknown as Record<string, unknown>)[cbName] = (data: BloggerFeedResponse) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error('Blogger feed request failed'));
    };
    script.async = true;
    script.src = `${url}${url.includes('?') ? '&' : '?'}callback=${cbName}`;
    document.head.appendChild(script);
  });
}

function stripToText(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
}

function firstImageFromHtml(html: string): string | null {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const img = doc.querySelector('img');
  const src = img?.getAttribute('src');
  return src && /^https?:\/\//i.test(src) ? src : null;
}

/** Blogger thumbnail URLs carry a size segment (e.g. /s72-w592-h261-c/) — swap in a larger render. */
function upgradeImageSize(url: string): string {
  return url.replace(/\/s\d+(?:-[^/]*)?\//, '/s800/');
}

function normalizeEntry(entry: Record<string, unknown>): BloggerPost | null {
  const get = (obj: unknown, key: string): string => {
    const v = (obj as Record<string, Record<string, string>> | undefined)?.[key]?.$t;
    return typeof v === 'string' ? v : '';
  };
  const rawId = get(entry, 'id');
  const idMatch = rawId.match(/post-(\d+)$/);
  if (!idMatch) return null;

  const contentHtml = get(entry, 'content') || get(entry, 'summary');
  const links = (entry.link as Array<{ rel?: string; type?: string; href?: string }> | undefined) || [];
  const alternate = links.find((l) => l.rel === 'alternate' && l.type === 'text/html');
  const thumb = (entry['media$thumbnail'] as { url?: string } | undefined)?.url;
  const authors = entry.author as Array<Record<string, unknown>> | undefined;
  const authorName = authors?.[0] ? get(authors[0], 'name') : '';

  const text = stripToText(contentHtml);
  const excerpt = text.length > 200 ? `${text.slice(0, 200).trimEnd()}…` : text;
  const image = thumb ? upgradeImageSize(thumb) : firstImageFromHtml(contentHtml);

  return {
    id: idMatch[1],
    title: get(entry, 'title'),
    published: get(entry, 'published'),
    contentHtml,
    excerpt,
    image,
    originalUrl: alternate?.href || BLOGGER_BLOG_URL,
    authorName: authorName || 'Er. Sudhir Soni',
  };
}

export interface BloggerFeedPage {
  posts: BloggerPost[];
  total: number;
}

export async function fetchBloggerPosts(startIndex = 1, maxResults = BLOGGER_PAGE_SIZE): Promise<BloggerFeedPage> {
  const url = `${FEED_BASE}?alt=json-in-script&orderby=published&max-results=${maxResults}&start-index=${startIndex}`;
  const data = await loadJsonp(url);
  const total = Number(data.feed?.openSearch$totalResults?.$t || 0);
  const entries = data.feed?.entry || [];
  const posts = entries.map(normalizeEntry).filter((p): p is BloggerPost => p !== null);
  return { posts, total };
}

export async function fetchBloggerPost(postId: string): Promise<BloggerPost | null> {
  const url = `https://designplusajmer.blogspot.com/feeds/posts/default/${encodeURIComponent(postId)}?alt=json-in-script`;
  const data = (await loadJsonp(url)) as unknown as { entry?: Record<string, unknown> };
  return data.entry ? normalizeEntry(data.entry) : null;
}

/* ------------------------------------------------------------------ */
/* localStorage cache — last successful first page, shown instantly    */
/* on repeat visits while a fresh copy loads in the background.        */
/* ------------------------------------------------------------------ */

interface BloggerCache {
  fetchedAt: number;
  total: number;
  posts: BloggerPost[];
}

export function readBloggerCache(): BloggerCache | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BloggerCache;
    if (!Array.isArray(parsed.posts)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeBloggerCache(total: number, posts: BloggerPost[]) {
  try {
    const payload: BloggerCache = { fetchedAt: Date.now(), total, posts };
    const serialized = JSON.stringify(payload);
    // Full post HTML can be heavy — skip caching rather than blow the quota.
    if (serialized.length > 1_800_000) return;
    window.localStorage.setItem(CACHE_KEY, serialized);
  } catch {
    /* storage full / unavailable — caching is best-effort only */
  }
}

export function findCachedBloggerPost(postId: string): BloggerPost | null {
  const cache = readBloggerCache();
  return cache?.posts.find((p) => p.id === postId) || null;
}

/* ------------------------------------------------------------------ */
/* Sanitizer — Blogger content is the client's own, but it is still    */
/* third-party HTML: strip anything executable before rendering.       */
/* ------------------------------------------------------------------ */

const BLOCKED_TAGS = ['script', 'style', 'iframe', 'object', 'embed', 'form', 'link', 'meta', 'title', 'noscript', 'base'];

export function sanitizeBloggerHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  BLOCKED_TAGS.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((el) => el.remove());
  });
  doc.querySelectorAll('*').forEach((el) => {
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase();
      const value = attr.value;
      if (name.startsWith('on')) {
        el.removeAttribute(attr.name);
      } else if ((name === 'href' || name === 'src' || name === 'xlink:href') && /^\s*(javascript|data|vbscript):/i.test(value)) {
        el.removeAttribute(attr.name);
      } else if (name === 'style' && /(expression|javascript:|url\s*\()/i.test(value)) {
        el.removeAttribute(attr.name);
      }
    }
    if (el.tagName === 'IMG') {
      el.setAttribute('loading', 'lazy');
      el.removeAttribute('width');
      el.removeAttribute('height');
    }
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') || '';
      if (/^https?:\/\//i.test(href) && !href.includes('designplusajmer.co.in')) {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
    }
  });
  return doc.body.innerHTML;
}

export function formatBloggerDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(d);
}
