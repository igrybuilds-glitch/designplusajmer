import { useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, FileText, Ruler, Compass, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/siteData';

const PHASE_ICONS = [Compass, Layers, Ruler, ShieldCheck, FileText, CheckCircle2];

export function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PROCESS_STEPS[activeStepIndex] || PROCESS_STEPS[0];
  const CurrentIcon = PHASE_ICONS[activeStepIndex] || Compass;

  return (
    <section 
      id="process" 
      aria-label="Six Phase Delivery Methodology"
      className="py-20 sm:py-28 lg:py-36 bg-transparent text-[#F4F0E8] border-b border-white/15 relative overflow-hidden transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">07.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Execution Methodology</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Six-Phase Verifiable Delivery
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight uppercase text-white" style={{ textWrap: 'balance' }}>
            A linear, verifiable <br />
            <span className="italic font-light text-[#F4F0E8]/70">simple 6-step process.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4F0E8]/85 mt-4 leading-relaxed font-sans font-normal">
            Eliminating speculative guesswork through phased milestone sign-offs, precision spatial geometry, and Chartered Structural computation.
          </p>
        </div>

        {/* Interactive 6-Phase Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Phase Selector Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#B86B38] border-[#B86B38] text-white shadow-lg ring-1 ring-[#B86B38]/50'
                      : 'bg-black/60 border-white/20 text-[#F4F0E8]/80 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-white' : 'text-[#B86B38]'}`}>
                      {step.number} //
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      {step.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-[#F4F0E8]/40'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Phase Detail Card (7 Cols) */}
          <div className="lg:col-span-7 bg-black/75 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 shadow-2xl relative text-[#F4F0E8]">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B86B38]/20 border border-[#B86B38]/50 flex items-center justify-center text-[#B86B38]">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B86B38] block font-bold">PHASE {currentStep.number}</span>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal uppercase">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#F4F0E8]/85 font-sans leading-relaxed">
                {currentStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/60">Deliverables &amp; Vetting Milestones</div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#F4F0E8]/90">
                  {currentStep.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B86B38] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
