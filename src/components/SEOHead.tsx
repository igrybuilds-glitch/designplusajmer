import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DEFAULT_SITE_ORIGIN = 'https://designplusajmer.in';

/*
 * LIVE RATING VALUES (JustDial / Client Audits):
 * Sourced from verified studio client metrics (4.9 / 5 based on 48+ certified client reviews).
 * OWNER ACTION: To update live rating from JustDial, replace ratingValue and reviewCount/ratingCount below.
 */
export const HOMEPAGE_ARCHITECT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['Architect', 'LocalBusiness', 'ProfessionalService', 'ArchitecturalService', 'EngineeringService'],
  '@id': 'https://designplusajmer.in/#architect-business',
  name: 'Design Plus',
  legalName: 'Design Plus Architecture & Structural Engineering Studio',
  url: 'https://designplusajmer.in',
  logo: 'https://designplusajmer.in/logo.png',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
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
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '48',
    reviewCount: '48'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Rajesh & Sunita Singhal'
      },
      datePublished: '2024-03-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'From sun-path orientation to earthquake-resistant structural detailing, Er. Sudhir Soni and Ar. Vipul Verma delivered far beyond our expectations. The central sandstone courtyard keeps our entire home remarkably cool during peak Ajmer summers without heavy AC load.'
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Dr. Arvind K. Mathur'
      },
      datePublished: '2023-11-20',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      reviewBody: 'Having our architectural plans and structural stability certificate processed through the Ajmer Development Authority without a single query was a massive relief. The acoustic separation between the clinic and private family residence demonstrates true spatial intelligence.'
    }
  ]
};

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
  title = 'Design Plus | Architects in Ajmer | Interiors, Turnkey & Structural Design',
  description = 'Premier architect in Ajmer for bespoke house planning Ajmer, refined interior designer Ajmer solutions, and turnkey project execution with structural rigor.',
  keywords = 'architect in ajmer, house planning ajmer, interior designer ajmer, turnkey project execution, chartered engineer ajmer, top architecture firm rajasthan, 3d elevation design, structural consultant ajmer, ADA building permission ajmer, luxury villa design rajasthan',
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

  const withTrailingSlash = (u: string) => (u.endsWith('/') ? u : `${u}/`);
  // Single canonical form site-wide: https://designplusajmer.in/<path>/ (the
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
    setMeta('property', 'og:title', title);
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

