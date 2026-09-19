import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TYPOLOGIES } from '../../data/siteData';

export function TypologiesSection() {
  return (
    <section id="typologies" className="py-24 bg-[#F5F5F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-stone-300 gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
              05 / Building Typologies
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal">
              Disciplines & Programmatic Typologies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-sm">
            From single-family courtyard villas to multi-story commercial concrete frames and industrial spans.
          </p>
        </div>

        {/* Typology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TYPOLOGIES.map((t, idx) => (
            <div
              key={t.title}
              className="group bg-[#FBFBF9] border border-stone-200 overflow-hidden flex flex-col justify-between transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-stone-200">
                  <img
                    src={t.image}
                    alt={t.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="img-editorial w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 right-3 bg-stone-950/75 text-stone-200 text-[10px] uppercase tracking-widest px-2 py-0.5 font-mono">
                    0{idx + 1}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                    {t.subtitle}
                  </div>
                  <h3 className="font-editorial text-2xl text-stone-950 font-medium group-hover:text-amber-800 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {t.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={t.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 transition-colors pt-3 border-t border-stone-200 w-full justify-between"
                >
                  <span>Explore Typology</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
