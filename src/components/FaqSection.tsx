import { useState } from 'react';
import { Plus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  /** Visible Q&As — mirrored 1:1 in the FAQPage JSON-LD below. */
  faqs: FaqItem[];
  /** Section heading (h2). */
  heading?: string;
  /** Optional eyebrow label above the heading. */
  eyebrow?: string;
  /** Canonical URL of the page — used for the schema @id. */
  canonical: string;
  /** Visual theme: light pages vs dark pages. */
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * AEO/GEO FAQ block: visible accordion (h3 questions under an h2 — correct
 * heading order for crawlers and assistive tech) mirrored 1:1 in FAQPage
 * JSON-LD so AI engines can extract clean Q&A pairs.
 */
export function FaqSection({
  faqs,
  heading = 'Frequently asked questions',
  eyebrow = 'Straight answers',
  canonical,
  tone = 'light',
  className = '',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const dark = tone === 'dark';

  return (
    <section
      aria-label={heading}
      className={`py-16 sm:py-20 ${dark ? 'bg-transparent text-[#F4F0E8]' : 'bg-[#FBFBF9] text-stone-950'} ${className}`}
    >
      {/* FAQPage JSON-LD — mirrors the visible accordion 1:1.
          `<` is escaped so answer text can never break out of the script block. */}
      <script type="application/ld+json">{JSON.stringify(faqSchema).replace(/</g, '\\u003c')}</script>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className={`text-[11px] font-mono uppercase tracking-[0.25em] font-semibold mb-3 ${dark ? 'text-[#B86B38]' : 'text-[#C86635]'}`}>
          {eyebrow}
        </p>
        <h2 className="font-editorial text-3xl sm:text-4xl font-medium mb-8">
          {heading}
        </h2>
        <div className={`divide-y border-y ${dark ? 'divide-white/15 border-white/15' : 'divide-stone-200 border-stone-200'}`}>
          {faqs.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <div key={faq.q}>
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${idx}`}
                    id={`faq-button-${idx}`}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                  >
                    <span className={`font-medium transition-colors ${dark ? 'text-[#F4F0E8] group-hover:text-[#B86B38]' : 'text-stone-950 group-hover:text-[#C86635]'}`}>
                      {faq.q}
                    </span>
                    <Plus
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''} ${dark ? 'text-[#B86B38]' : 'text-[#C86635]'}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {open && (
                  <p
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-button-${idx}`}
                    className={`pb-6 leading-relaxed max-w-3xl ${dark ? 'text-[#F4F0E8]/80' : 'text-stone-700'}`}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
