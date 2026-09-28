import React from 'react';
import { CheckCircle2, ExternalLink, Phone, Mail } from 'lucide-react';
import { PurchasableService } from '../../../data/purchasableServices';
import { CustomerDetailsState } from './types';

interface Step7ConfirmationProps {
  currentService: PurchasableService;
  orderReference: string;
  customerDetails: CustomerDetailsState;
}

export function Step7Confirmation({
  currentService,
  orderReference,
  customerDetails
}: Step7ConfirmationProps) {
  return (
    <div className="space-y-8 py-2 animate-in fade-in duration-200">
      {/* Success Banner */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C86635] font-semibold">
          COMMISSION INTAKE REGISTERED
        </div>
        <h3 className="font-editorial text-3xl sm:text-4xl text-stone-950 font-medium">
          Your Project Request Has Been Received
        </h3>
        <p className="text-sm text-stone-600 max-w-lg mx-auto font-sans leading-relaxed">
          Thank you for placing your commission with Design Plus Architects &amp; Engineers. Er. Sudhir Soni and the design desk have been notified of your project parameters.
        </p>
      </div>

      {/* Order Dossier Card */}
      <div className="bg-white border border-stone-300 p-6 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <span className="text-stone-500 uppercase">COMMISSION REFERENCE</span>
          <span className="text-stone-950 font-bold text-sm text-[#C86635]">{orderReference}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-700">
          <div>
            <span className="text-stone-400 block text-[10px]">SERVICE PACKAGE</span>
            <strong className="text-stone-950">{currentService.name}</strong>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px]">ESTIMATED FEE</span>
            <strong className="text-stone-950">{currentService.pricingLabel}</strong>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px]">CLIENT NAME</span>
            <span className="text-stone-950">{customerDetails.fullName || 'Private Client'}</span>
          </div>
          <div>
            <span className="text-stone-400 block text-[10px]">TELEPHONE</span>
            <span className="text-stone-950">{customerDetails.phone || 'To be validated'}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 italic">
          Status: Registered · Architectural Feasibility Check Pending
        </div>
      </div>

      {/* Next Steps Road map */}
      <div className="bg-stone-50 border border-stone-200 p-6 space-y-4">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold block">
          Next Steps in Your Drawing Workflow
        </span>
        <div className="space-y-3 text-xs text-stone-700">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#1A1917] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">1</span>
            <div>
              <strong>Architectural Initial Review:</strong> Ar. Vipul Verma or a senior architect reviews your plot measurements and setback requirements within 24 business hours.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#1A1917] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">2</span>
            <div>
              <strong>Technical Confirmation Call:</strong> We connect via {customerDetails.preferredContactMethod || 'WhatsApp'} to confirm room adjacency details and answer your specific questions.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#1A1917] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">3</span>
            <div>
              <strong>Drafting Milestone &amp; Invoicing:</strong> Official GST invoice is released and drafting begins in our Ajmer studio with delivery within {currentService.deliveryTimeline}.
            </div>
          </div>
        </div>
      </div>

      {/* Direct Studio Contact Options */}
      <div className="border-t border-stone-200 pt-6 space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block text-center">
          Immediate Questions Regarding Your Commission?
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/917976453090?text=${encodeURIComponent(
              `Hello Design Plus, I have submitted an order request for ${currentService.name} (Ref: ${orderReference}). Please connect regarding the next steps.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
          >
            <span>Connect on WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="tel:+917976453090"
            className="inline-flex items-center gap-2 border border-stone-300 hover:bg-stone-100 text-stone-900 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-stone-500" />
            <span>Call +91 79764 53090</span>
          </a>

          <a
            href="mailto:designplusajmer@gmail.com"
            className="inline-flex items-center gap-2 border border-stone-300 hover:bg-stone-100 text-stone-900 px-5 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-stone-500" />
            <span>Email Studio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
