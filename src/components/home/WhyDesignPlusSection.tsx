import { Check, ShieldCheck, Ruler, Sun, FileCheck } from 'lucide-react';

export function WhyDesignPlusSection() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Chartered Structural Authority',
      desc: 'Supervised by Er. Sudhir Soni, Chartered Engineer and FIV. We provide legally compliant structural stability certifications and seismic calculations required by municipal bodies across Rajasthan.'
    },
    {
      icon: Sun,
      title: 'Rajasthan Micro-Climate Mastery',
      desc: 'Central Rajasthan experiences 45°C+ summer heat. We integrate deep verandas, cross-ventilation shafts, shaded jaalis, and courtyard micro-climates to depress cooling energy loads naturally.'
    },
    {
      icon: FileCheck,
      title: 'ADA & Regional Byelaw Precision',
      desc: 'Extensive familiarity with Ajmer Development Authority (ADA) regulations, setback ratios, FAR provisions, and fire corridors ensures smooth scrutiny and approval without costly revisions.'
    },
    {
      icon: Ruler,
      title: 'Millimeter-Accurate Execution Sets',
      desc: 'We do not hand contractors ambiguous concept sketches. Every commission is translated into comprehensive working drawings, steel schedules, and electrical matrices that leave zero room for error.'
    }
  ];

  return (
    <section id="why-design-plus" className="py-24 bg-[#F5F5F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
            09 / Strategic Distinction
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-stone-950 font-normal leading-tight">
            Why visionary homeowners and commercial developers choose Design Plus.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed">
            Where traditional firms treat architecture as merely exterior makeup, we engineer the skeleton and the skin as one cohesive, enduring system.
          </p>
        </div>

        {/* 4 Distinction Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-5 sm:p-8 bg-[#FBFBF9] border border-stone-200/80 flex flex-col sm:flex-row items-start gap-4 sm:gap-5 hover:border-stone-400 transition-colors"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xs bg-stone-900 text-[#FBFBF9] flex items-center justify-center shrink-0 mt-0 sm:mt-1">
                  <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-editorial text-xl sm:text-2xl text-stone-950 font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Comparative Strip */}
        <div className="mt-12 p-5 sm:p-8 bg-white border border-stone-200">
          <h4 className="font-editorial text-xl text-stone-950 font-semibold mb-4">
            The Design Plus Discipline vs. Fragmented Drafting
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Typical Fragmented Workflow
              </div>
              <ul className="space-y-1.5 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>Architectural sketches disconnected from structural beam depths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>Guesswork steel reinforcement resulting in cracks or heavy over-spending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>Frequent clashes between structural columns and electrical conduits</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-amber-50/40 border border-amber-200/60 space-y-2">
              <div className="text-xs uppercase tracking-wider text-amber-900 font-semibold">
                The Integrated Design Plus Standard
              </div>
              <ul className="space-y-1.5 text-stone-800">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Columns, cantilever depths, and aesthetics modeled in unison</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Chartered Engineer mathematical calculations ensuring safety & economy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Coordinated MEP, structural, and architectural drawings ready for site</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
