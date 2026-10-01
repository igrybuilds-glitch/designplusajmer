import { hasAnalyticsConsent } from '../components/CookieConsent';

/**
 * GA4 loader — env-gated + consent-gated.
 *
 * - Only loads when VITE_GA_MEASUREMENT_ID is set (owner adds the real ID as a
 *   Vercel/Cloudflare env var; until then this module is a harmless no-op).
 * - Only loads after the visitor accepts analytics cookies in the CookieConsent
 *   banner (DPDP-aligned). If consent arrives after page load, the banner's
 *   `dp-cookie-consent` event triggers init.
 * - Conversion events: consultation_submit (fired from ConsultationModal),
 *   click_call / click_whatsapp (delegated click listener below).
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

function loadGtag(measurementId: string) {
  if (initialized) return;
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    allow_google_signals: false, // keep it DPDP-lean: no ads personalization
  });
}

export function initAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  if (!measurementId) return; // owner hasn't added the GA4 ID yet — stay silent

  const tryInit = () => {
    if (hasAnalyticsConsent()) loadGtag(measurementId);
  };
  tryInit();
  window.addEventListener('dp-cookie-consent', (e: Event) => {
    if ((e as CustomEvent).detail === 'accepted') loadGtag(measurementId);
  });

  // Delegated conversion tracking for call / WhatsApp taps (no per-link edits).
  document.addEventListener('click', (e) => {
    if (!initialized || !window.gtag) return;
    const a = (e.target as HTMLElement).closest?.('a[href]') as HTMLAnchorElement | null;
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      window.gtag('event', 'click_call', { event_category: 'engagement' });
    } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      window.gtag('event', 'click_whatsapp', { event_category: 'engagement' });
    }
  });
}

/** Fire a GA4 event — safe no-op until initAnalytics() has loaded gtag. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  try {
    window.gtag?.('event', name, params);
  } catch {
    /* analytics must never break the page */
  }
}
