import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DEFAULT_SITE_ORIGIN = 'https://designplusajmer.in';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEOHead({
  title = 'Design Plus | Architectural & Structural Engineering Studio | Ajmer, Rajasthan',
  description = 'Premier architectural & structural engineering studio in Ajmer, Rajasthan led by Chartered Engineer Er. Sudhir Soni & Ar. Vipul Verma. Bespoke luxury villas, ADA sanction approvals, and commercial elevations.',
  keywords = 'architect in ajmer, chartered engineer ajmer, top architecture firm rajasthan, house plan ajmer, 3d elevation design, structural consultant ajmer, ADA building permission ajmer, luxury villa design rajasthan',
  image = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  canonical: customCanonical,
  type = 'website',
  noindex = false,
  schema
}: SEOHeadProps) {
  let pathname = '/';
  try {
    const location = useLocation();
    if (location?.pathname) {
      pathname = location.pathname;
    }
  } catch {
    // If rendered outside router context
  }

  const resolvedCanonical = customCanonical || `${DEFAULT_SITE_ORIGIN}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Update Title
    document.title = title;

    // Helper to update/create meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('name', 'author', 'Design Plus Architecture & Structural Engineering');

    // OpenGraph Meta
    setMeta('property', 'og:site_name', 'Design Plus Architecture Studio');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:url', typeof window !== 'undefined' ? window.location.href : resolvedCanonical);

    // Twitter Card Meta
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);

    // Update Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', resolvedCanonical);

  }, [title, description, keywords, image, pathname, resolvedCanonical, type, noindex]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta property="og:site_name" content="Design Plus Architecture Studio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={resolvedCanonical} />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}

