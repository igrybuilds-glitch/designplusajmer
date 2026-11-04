import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DEFAULT_SITE_ORIGIN = 'https://www.designplusajmer.co.in';

/*
 * LIVE RATING VALUES (JustDial / Client Audits):
 * Verified 2026-10-05 against the JustDial business listing (4.8, 43 ratings).
 * OWNER ACTION: To update live rating from JustDial, replace ratingValue and reviewCount/ratingCount below.
 */
export const HOMEPAGE_ARCHITECT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Architect', 'LocalBusiness', 'ProfessionalService', 'ArchitecturalService', 'EngineeringService'],
  '@id': 'https://www.designplusajmer.co.in/#architect-business',
  name: 'Design Plus',
  // G-T1 entity-name parity (2026-11-04, max-push): legalName carries the
  // full practice name AI Mode cards and the GBP listing uses, so every
  // surface states one entity. The studio form stays as alternateName.
  legalName: 'Designplus Architects and Structural Consultants',
  alternateName: [
    'Design Plus Architects and Structural Consultants',
    'Design Plus Architecture & Structural Engineering Studio',
    'Designplus Ajmer'
  ],
  founder: { '@type': 'Person', name: 'Er. Sudhir Soni', jobTitle: 'Structural Engineer' },
  knowsAbout: ['Architecture', 'Structural engineering', 'Interior design', 'Earthquake resistant home design', 'Vastu compliant home design', 'House construction cost planning'],
  url: 'https://www.designplusajmer.co.in',
  logo: 'https://www.designplusajmer.co.in/logo.png',
  image: 'https://www.designplusajmer.co.in/og-image.jpg',
  description: 'Premier architect in Ajmer for bespoke house planning Ajmer, refined interior designer Ajmer solutions, and turnkey project execution with structural rigor.',
  telephone: ['+91-7976453090', '+91-9461465610'],
  email: 'designplusajmer@gmail.com',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rajeev Marg, Panchsheel Nagar',
    addressLocality: 'Ajmer',
    addressRegion: 'Rajasthan',
    postalCode: '305004',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.4499,
    longitude: 74.6399
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:30'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Ajmer' },
    { '@type': 'City', name: 'Jaipur' },
    { '@type': 'City', name: 'Pushkar' },
    { '@type': 'City', name: 'Kishangarh' },
    { '@type': 'City', name: 'Bhilwara' },
    { '@type': 'State', name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' }
  ],
  sameAs: [
    'https://www.facebook.com/share/19cizaeGBa/',
    'https://www.instagram.com/architectsdesignplus/',
    'https://play.google.com/store/apps/details?id=com.justdial.search&hl=en_IN&gl=US'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    // Verified 2026-10-05 against JustDial business listing (4.8, 43 ratings).
    // Keep in sync with ClientReviewsSection + HomePage JSON-LD.
    ratingValue: '4.8',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '43',
    reviewCount: '43'
  }
  // NOTE (2026-10-11): individual Review objects removed — the two embedded
  // reviews could not be verified against the live JustDial listing or the
  // visible ClientReviewsSection. Per the no-fake-reviews rule, schema now
  // carries only the verified aggregateRating until real review texts are
  // confirmed from the listing.
};

export interface SEOHeadProps {
  title?: string;
  // Optional social-share title override: og:title only, never the
  // document <title> (which stays keyword-led for search).
  ogTitle?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  type?: string;
  noindex?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEOHead({
  title = 'Design Plus | Architects in Ajmer | Interiors, Turnkey & Structural Design',
  ogTitle,
  description = 'Premier architect in Ajmer for bespoke house planning Ajmer, refined interior designer Ajmer solutions, and turnkey project execution with structural rigor.',
  keywords = 'architect in ajmer, house planning ajmer, interior designer ajmer, turnkey project execution, chartered engineer ajmer, top architecture firm rajasthan, 3d elevation design, structural consultant ajmer, ADA building permission ajmer, luxury villa design rajasthan',
  image = 'https://www.designplusajmer.co.in/og-image.jpg',
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

  const withTrailingSlash = (u: string) => (u.endsWith('/') ? u : `${u}/`);
  // Single canonical form site-wide: https://www.designplusajmer.co.in/<path>/ (the
  // server 308-redirects extensionless paths to the trailing-slash form, so
  // canonicals must already be in that form — no redirect chains for crawlers).
  const resolvedCanonical = withTrailingSlash(
    customCanonical || `${DEFAULT_SITE_ORIGIN}${pathname === '/' ? '' : pathname}`
  );
  const effectiveSchema = schema || (pathname === '/' ? HOMEPAGE_ARCHITECT_SCHEMA : undefined);

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
    setMeta('property', 'og:title', ogTitle || title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:type', type);
    // og:url must be the canonical URL — never window.location.href (during the
    // prerender crawl that leaks the local preview origin, e.g. 127.0.0.1, into
    // production HTML).
    setMeta('property', 'og:url', resolvedCanonical);

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

    // Prevent duplicate schema blocks between index.html and dynamic pages
    const staticSchema = document.getElementById('static-schema');
    if (staticSchema) {
      if (pathname !== '/') {
        staticSchema.setAttribute('type', 'application/json-disabled');
      } else {
        staticSchema.setAttribute('type', 'application/ld+json');
      }
    }

  }, [title, description, keywords, image, pathname, resolvedCanonical, type, noindex]);

  // NOTE: <title>/<meta>/<link> head tags are written ONLY by the useEffect
  // above (single imperative writer: updates index.html's tags in place).
  // Rendering them declaratively here as well made React hoist EXTRA copies
  // into <head>, producing duplicate <title>, <meta name="robots"> and
  // <link rel="canonical"> tags in the prerendered HTML. Only JSON-LD stays
  // declarative.
  return (
    <>
      {effectiveSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(effectiveSchema) }}
        />
      )}
    </>
  );
}

