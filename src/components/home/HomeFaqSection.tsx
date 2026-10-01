import { useState } from 'react';
import { Plus } from 'lucide-react';
import { HOME_FAQS } from '../../data/homeFaq';

// AEO/GEO section: answer-first blocks (40–60 word direct answers under
// question H2s), a comparison table (AI engines extract tables
// preferentially), and a visible FAQ accordion mirrored 1:1 in the FAQPage
// JSON-LD emitted by HomePage.tsx.

const COMPARISON_ROWS: Array<[string, string, string]> = [
  ['Structural engineering', 'In-house, chartered (IS 456 / IS 1893)', 'Outsourced at extra cost — or skipped'],
  ['ADA sanction drawings', 'Included in the core package', 'Separate fee, or not offered'],
  ['3D elevation', 'Photorealistic, included', 'Rarely offered'],
  ['Site supervision', 'Pre-pour rebar inspection & stability certificates', 'Not available'],
  ['Fee model', 'Milestone-linked, transparent', 'Often vague, hidden extras surface later']
];

export function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-24 bg-[#FBFBF9] text-stone-950" aria-labelledby="home-faq-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Answer-first block 1 */}
        <div className="mb-14">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C86635] font-semibold mb-3">
            Straight answers
          </p>
          <h2 id="home-faq-heading" className="font-editorial text-3xl sm:text-4xl font-medium mb-4">
            How much does an architect charge in Ajmer?
          </h2>
          <p className="text-stone-700 leading-relaxed max-w-3xl">
            A comprehensive architectural package in Ajmer typically costs ₹35–85 per square
            foot of built-up area. For a 2,000 sq.ft. residence that means roughly
            ₹70,000–1,70,000, covering 2D floor plans, 3D elevation, structural RCC
            drawings and ADA sanction drawings. At Design Plus, chartered structural
            engineering is included in-house — not billed as a separate extra.
          </p>
        </div>

        {/* Answer-first block 2 */}
        <div className="mb-14">
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium mb-4">
            Why hire an architect instead of a draftsman?
          </h2>
          <p className="text-stone-700 leading-relaxed max-w-3xl">
            A draftsman draws walls; an architect engineers the building. Contractor
            &ldquo;free plans&rdquo; routinely over-design steel and concrete by ₹2–5 lakh to
            cover structural uncertainty — or under-design and risk cracking. Design Plus
            unifies architecture with chartered structural calculations, so your home is
            safe, legal with ADA approvals, and cheaper to build than a guesswork plan.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-16 overflow-x-auto">
          <h3 className="font-editorial text-2xl font-medium mb-4">
            Design Plus vs. a typical draftsman
          </h3>
          <table className="w-full text-sm border-collapse min-w-[560px]">
            <thead>
              <tr className="border-b-2 border-stone-900">
                <th className="text-left py-3 pr-4 font-semibold" scope="col">What you get</th>
                <th className="text-left py-3 pr-4 font-semibold text-[#C86635]" scope="col">Design Plus</th>
                <th className="text-left py-3 font-semibold text-stone-500" scope="col">Typical draftsman</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([label, plus, typical]) => (
                <tr key={label} className="border-b border-stone-200">
                  <th className="text-left py-3 pr-4 font-medium align-top" scope="row">{label}</th>
                  <td className="py-3 pr-4 text-stone-800 align-top">{plus}</td>
                  <td className="py-3 text-stone-500 align-top">{typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ accordion */}
        <div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-medium mb-8">
            Frequently asked questions
          </h2>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {HOME_FAQS.map((faq, idx) => {
              const open = openIndex === idx;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : idx)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                  >
                    <span className="font-medium text-stone-950 group-hover:text-[#C86635] transition-colors">
                      {faq.question}
                    </span>
                    <Plus
                      className={`w-5 h-5 shrink-0 text-[#C86635] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {open && (
                    <p className="pb-6 text-stone-700 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
