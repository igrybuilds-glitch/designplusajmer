import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'dp-cookie-consent';

/**
 * DPDP-aligned cookie consent banner.
 * Shows once per visitor until they accept/decline; choice persisted in localStorage.
 * No tracking scripts run before consent (analytics loader reads this key).
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage unavailable — banner simply won't persist */
    }
    setVisible(false);
    // Notify any analytics loader listening for the consent decision.
    window.dispatchEvent(new CustomEvent('dp-cookie-consent', { detail: value }));
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[90] bg-stone-950 text-stone-100 rounded-2xl border border-stone-800 shadow-2xl p-5"
    >
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-[#C86635] shrink-0 mt-0.5" />
        <div className="space-y-2">
          <p className="text-sm font-semibold">We use cookies</p>
          <p className="text-xs text-stone-400 leading-relaxed">
            We use essential cookies to run this site and, with your consent, analytics cookies to
            understand visits. No advertising cookies. See our{' '}
            <Link to="/privacy-policy" className="text-[#C86635] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-2 pt-1">
            <button
              onClick={() => choose('accepted')}
              className="px-4 py-2 text-xs font-semibold rounded-full bg-[#C86635] text-white hover:bg-[#a8542a] transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => choose('declined')}
              className="px-4 py-2 text-xs font-semibold rounded-full border border-stone-700 text-stone-300 hover:border-stone-500 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Returns true only when the visitor explicitly accepted analytics cookies. */
export function hasAnalyticsConsent(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'accepted';
  } catch {
    return false;
  }
}
