import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function AboutPreviewSection() {
  return (
    <section id="about-preview" className="py-24 bg-[#FBFBF9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold">
              04 / Studio Ethos
            </div>
            
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal leading-[1.15]">
              We approach architecture as a physical science and a quiet craft.
            </h2>

            <div className="w-12 h-px bg-stone-900"></div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Design Plus was formed around a simple conviction: an architectural concept is only as profound as the structural logic that allows it to stand, endure, and shelter.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 transition-colors pt-2"
            >
              <span>Read Full Studio Background & Methodology</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Right Column: Grounded Editorial Narrative & Image */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-editorial text-lg text-stone-950 font-semibold">
                  Regional Climate Context
                </h3>
                <p>
                  Central Rajasthan demands architecture that respects severe thermal swings. Our work employs deep cantilevers, stone jaalis, wind shafts, and central courtyards that naturally depress interior temperatures without total reliance on mechanical cooling.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-editorial text-lg text-stone-950 font-semibold">
                  Structural Co-Leadership
                </h3>
                <p>
                  Because our practice is directed by a Chartered Structural Engineer alongside architects, we eliminate the friction common between separate design consultants and site engineers. Structural safety and architectural grace develop simultaneously.
                </p>
              </div>
            </div>

            {/* In-situ studio photographic crop */}
            <div className="relative aspect-16/9 bg-stone-200 border border-stone-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural drafting and structural planning process at Design Plus"
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-stone-950/80 text-stone-300 text-[11px] px-3 py-1 font-sans">
                Technical Coordination · Ajmer Studio
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
