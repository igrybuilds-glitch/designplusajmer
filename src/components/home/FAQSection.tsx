import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../data/siteData';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FBFBF9] border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold">
            12 / Technical & Advisory FAQ
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal">
            Frequently Addressed Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            Practical clarifications regarding our Chartered Engineering procedures, municipal approvals, Vastu alignment, and design timelines.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-stone-200 bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl text-stone-950 font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[10px] uppercase tracking-wider text-amber-800 font-semibold font-mono">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
