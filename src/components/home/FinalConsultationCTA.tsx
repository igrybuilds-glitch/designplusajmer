import { ArrowUpRight, Phone, Mail, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/siteData';

interface FinalConsultationCTAProps {
  onOpenConsultation?: () => void;
}

export function FinalConsultationCTA({ onOpenConsultation }: FinalConsultationCTAProps) {
  return (
    <section 
      id="commission-intake" 
      className="relative bg-transparent text-[#F4F0E8] py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-white/15 transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Masthead */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">11.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Commission Intake &amp; Consultation</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Chartered Practice · Direct Principal Engagement
          </span>
        </div>

        {/* Large Cinematic Editorial Headline */}
        <div className="max-w-5xl mb-14 sm:mb-20 space-y-6">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.94] tracking-tight uppercase text-white">
            Let&apos;s build <br />
            <span className="italic font-light text-[#F4F0E8]/70">something that lasts</span> <br />
            for generations.
          </h2>

          <p className="text-base sm:text-xl text-[#F4F0E8]/85 font-sans font-normal max-w-2xl leading-relaxed">
            Whether you are commissioning a private estate in Ajmer, an elevated highway viaduct in Rajasthan, or seeking chartered stability certification for institutional property, our principals lead from initial study to ground execution.
          </p>
        </div>

        {/* Commission Typology Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
          {[
            { title: 'Residential Architecture', desc: 'Luxury villas, farmhouses & independent floors' },
            { title: 'Structural Engineering', desc: 'RCC/Steel calculations, stability & audits' },
            { title: 'Commercial & Retail', desc: 'Retail complexes, showrooms & offices' },
            { title: 'Infrastructure & PMC', desc: 'Turnkey execution, bridges & public works' }
          ].map((type, i) => (
            <div key={i} className="bg-black/70 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-2 shadow-xl">
              <span className="text-xs font-mono text-[#B86B38] font-bold">0{i + 1} //</span>
              <h3 className="font-editorial text-xl text-white font-normal">{type.title}</h3>
              <p className="text-xs text-[#F4F0E8]/70 font-sans">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Panel */}
        <div className="bg-black/80 backdrop-blur-xl border border-white/25 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B86B38]">
              <ShieldCheck className="w-4 h-4 text-[#B86B38]" />
              <span>Direct Principal Access</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Schedule a technical consultation with Er. Sudhir Soni &amp; Ar. Vipul Verma.
            </h3>
            <p className="text-sm text-[#F4F0E8]/80 font-sans">
              Visit our Ajmer studio at Civil Lines or book a virtual session to discuss your site orientation, preliminary estimations, and structural requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-primary bg-[#B86B38] hover:bg-[#a65d37] text-white px-8 py-4 text-sm font-semibold tracking-wide shadow-xl cursor-pointer"
            >
              <span>Book Site Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phones[0].raw}`}
              className="btn-secondary text-white border-white/60 hover:border-white px-6 py-4 text-sm font-medium inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#B86B38]" />
              <span>{BUSINESS_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
