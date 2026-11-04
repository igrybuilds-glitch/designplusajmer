import { Link } from 'react-router-dom';

// Diwali 2026 offer bar — shown on every public page and auto-expires
// after 9 November 2026 (Asia/Kolkata). The date check is client-side:
// once the Kolkata date passes 2026-11-09 the bar renders nothing and
// the navbar/content offsets in App.tsx collapse back to normal.
export const DIWALI_OFFER_END_DATE = '2026-11-09';

// Bar heights — App.tsx (content padding) and Navbar.tsx (top offset)
// use the exact same values so the fixed stack never overlaps content.
export const OFFER_BAR_OFFSET_CLASS = 'top-12 lg:top-10';
export const OFFER_BAR_PADDING_CLASS = 'pt-12 lg:pt-10';

export function isDiwaliOfferActive(now: Date = new Date()): boolean {
  const todayKolkata = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
  return todayKolkata <= DIWALI_OFFER_END_DATE;
}

export function OfferBar() {
  if (!isDiwaliOfferActive()) return null;
  return (
    <div
      role="region"
      aria-label="Diwali offer"
      className="h-12 lg:h-10 overflow-hidden bg-gradient-to-r from-[#3d0a0a] via-[#4A0F0B] to-[#3d0a0a] text-[#FFEFC4] shadow-sm"
    >
      <div className="h-full max-w-7xl mx-auto px-3 flex items-center justify-center">
        <p className="text-center font-sans text-[11px] leading-snug sm:text-xs lg:text-[13px]">
          <span className="mr-1.5" aria-hidden="true">🪔</span>
          <span className="font-semibold tracking-wide">Diwali Special: Flat 10% OFF</span>
          <span> on all architecture &amp; interior design services — valid till 9 November 2026</span>
          <Link
            to="/contact"
            className="ml-2.5 whitespace-nowrap font-semibold text-[#FFE37E] underline decoration-[#d4a437] underline-offset-2 transition-colors hover:text-white"
          >
            Get a Free Quote →
          </Link>
        </p>
      </div>
    </div>
  );
}
