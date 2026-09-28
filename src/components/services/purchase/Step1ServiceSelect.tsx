import React from 'react';
import { Clock, ShieldCheck, CheckCircle2, Compass } from 'lucide-react';
import { PurchasableService, PURCHASABLE_SERVICES } from '../../../data/purchasableServices';

interface Step1ServiceSelectProps {
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
  currentService: PurchasableService;
  hideSelector?: boolean;
}

export function Step1ServiceSelect({
  selectedServiceId,
  onSelectService,
  currentService,
  hideSelector = false
}: Step1ServiceSelectProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {!hideSelector && (
        /* Service Selector Dropdown */
        <div className="space-y-1.5">
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
            Choose Standardized Design Package
          </label>
          <select
            value={selectedServiceId}
            onChange={(e) => onSelectService(e.target.value)}
            className="w-full p-3 bg-white border border-stone-300 text-stone-900 text-sm font-medium focus:border-stone-800 focus:outline-hidden"
          >
            <optgroup label="Architectural &amp; Residential Packages">
              {PURCHASABLE_SERVICES.filter(s => s.category === 'Architectural / Residential').map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.pricingLabel}
                </option>
              ))}
            </optgroup>
            <optgroup label="Small Technical &amp; Engineering Packages">
              {PURCHASABLE_SERVICES.filter(s => s.category === 'Small Technical Services').map(s => (
                <option key={s.id} value={s.id}>
                  {s.name} — {s.pricingLabel}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      )}

      {/* Service Overview Card */}
      <div className="bg-white border border-stone-200 p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
              {currentService.category}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium mt-0.5">
              {currentService.name}
            </h3>
            <p className="text-xs text-stone-600 mt-1 italic">
              {currentService.tagline}
            </p>
          </div>
          
          <div className="sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
              ESTIMATED PROFESSIONAL FEE
            </span>
            <span className="font-editorial text-2xl font-bold text-stone-950">
              {currentService.pricingLabel}
            </span>
            <span className="text-[11px] font-mono text-stone-500 block">
              {currentService.unitLabel}
            </span>
          </div>
        </div>

        <p className="text-sm text-stone-700 leading-relaxed font-sans">
          {currentService.description}
        </p>

        {/* Delivery and Technical Benchmark */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-600 pt-1">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C86635]" />
            <span>Estimated Timeline: <strong>{currentService.deliveryTimeline}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C86635]" />
            <span>Vetted by Chartered Structural Engineer &amp; COA Architect</span>
          </div>
        </div>

        {/* What's Included vs What We Need Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100">
          <div className="space-y-3 bg-[#FBFBF9] p-4 border border-stone-200/70">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>What's Included</span>
            </h4>
            <ul className="text-xs text-stone-700 space-y-2 font-sans">
              {currentService.whatsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#C86635] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 bg-[#FBFBF9] p-4 border border-stone-200/70">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#C86635]" />
              <span>What We Need From You</span>
            </h4>
            <ul className="text-xs text-stone-700 space-y-2 font-sans">
              {currentService.whatWeNeed.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-stone-400 font-bold mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Standards and Recommendation */}
        {currentService.technicalStandards && (
          <div className="pt-2 text-[11px] font-mono text-stone-500 flex flex-wrap items-center gap-2">
            <span className="uppercase text-stone-400">Statutory Codes:</span>
            {currentService.technicalStandards.map((code, idx) => (
              <span key={idx} className="bg-stone-100 px-2 py-0.5 border border-stone-200 text-stone-700">
                {code}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
