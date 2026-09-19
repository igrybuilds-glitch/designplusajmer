import { PROCESS_STEPS } from '../../data/siteData';

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#141414] text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-amber-500 font-semibold mb-2">
            07 / Execution Discipline
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            A linear, verifiable six-phase delivery methodology.
          </h2>
          <p className="text-sm sm:text-base text-stone-400 mt-4 leading-relaxed">
            Eliminating speculative guesswork through phased client approvals, precision spatial geometry, and Chartered Structural computation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-8 bg-stone-900/50 border border-stone-800/80 flex flex-col justify-between hover:border-amber-900/40 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-editorial text-3xl font-light text-amber-400">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-stone-100 mb-1">
                  {step.title}
                </h3>
                <div className="text-xs text-amber-400 font-sans tracking-wide mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-stone-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-2">
                  Documented Outputs:
                </div>
                <ul className="text-xs text-stone-300 space-y-1.5">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
