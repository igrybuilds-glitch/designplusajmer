import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { hasAnalyticsConsent } from '../components/CookieConsent';

/**
 * Website visitor meter (client request 2026-10-04: "Provide meter for how
 * many person visited the website").
 *
 * Fires POST /api/track once per route change. Privacy-safe by design:
 * - Only runs after the visitor accepts analytics cookies (DPDP-aligned,
 *   same gate as GA4 in src/lib/analytics.ts).
 * - Never tracks /admin/* routes (staff traffic must not inflate the meter).
 * - The server stores only a SHA-256 hash of the IP — no raw PII.
 * - Failures are silent: a dead beacon must never break the page.
 */
export function usePageviewTracker() {
  const location = useLocation();
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/admin')) return;
    if (lastTracked.current === path) return;
    if (!hasAnalyticsConsent()) return;

    lastTracked.current = path;
    try {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
        keepalive: true,
      }).catch(() => {
        /* beacon failure is never user-visible */
      });
    } catch {
      /* ignore */
    }
  }, [location.pathname]);
}
