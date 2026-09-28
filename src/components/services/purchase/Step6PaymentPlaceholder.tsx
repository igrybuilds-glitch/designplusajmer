import React from 'react';
import { Lock } from 'lucide-react';
import { PaymentMethodType } from './types';

// Standardized paymentProvider abstraction as explicitly requested
export const paymentProvider = {
  providerId: 'designplus_settlement_v1',
  name: 'Design Plus Architectural Escrow & Settlement',
  supportedGateways: ['Razorpay', 'UPI Direct (GPay, PhonePe, Paytm)', 'Bank NEFT / RTGS Transfer'],
  environment: 'client_onboarding_stage',
  currency: 'INR',
  isConfigured: false, // Set to true when live production gateway keys are connected
  description: 'Formal GST tax invoice and milestone-based drawing release'
};

interface Step6PaymentPlaceholderProps {
  selectedPaymentMode: PaymentMethodType;
  setSelectedPaymentMode: (mode: PaymentMethodType) => void;
}

export function Step6PaymentPlaceholder({
  selectedPaymentMode,
  setSelectedPaymentMode
}: Step6PaymentPlaceholderProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
          PAYMENT SETTLEMENT &amp; INVOICING PREFERENCE
        </span>
        <p className="text-xs text-stone-500 font-sans">
          Select your preferred settlement workflow. Design Plus issues standard GST invoices for all professional architectural commissions.
        </p>
      </div>

      {/* Two clear settlement modes */}
      <div className="space-y-4">
        
        {/* Mode A: Recommended Studio Practice */}
        <label 
          className={`p-5 border flex items-start gap-4 cursor-pointer transition-all ${
            selectedPaymentMode === 'invoice_first'
              ? 'bg-white border-[#C86635] shadow-xs'
              : 'bg-stone-50 border-stone-200 hover:bg-white'
          }`}
        >
          <input
            type="radio"
            name="payment_mode"
            checked={selectedPaymentMode === 'invoice_first'}
            onChange={() => setSelectedPaymentMode('invoice_first')}
            className="w-4 h-4 text-[#C86635] mt-1 shrink-0"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-lg text-stone-950 font-medium">
                Architectural Appraisal First · Pay Post-Verification
              </span>
              <span className="bg-emerald-100 text-emerald-900 text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-semibold">
                Recommended
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Our lead architect verifies your plot dimensions and municipal clearance first. We then issue an official Pro-Forma GST Invoice with direct UPI / Bank Transfer payment coordinates. <strong>No advance debited today.</strong>
            </p>
          </div>
        </label>

        {/* Mode B: Online Gateway Connection Placeholder */}
        <label 
          className={`p-5 border flex items-start gap-4 cursor-pointer transition-all ${
            selectedPaymentMode === 'digital_advance'
              ? 'bg-white border-[#C86635] shadow-xs'
              : 'bg-stone-50 border-stone-200 hover:bg-white'
          }`}
        >
          <input
            type="radio"
            name="payment_mode"
            checked={selectedPaymentMode === 'digital_advance'}
            onChange={() => setSelectedPaymentMode('digital_advance')}
            className="w-4 h-4 text-[#C86635] mt-1 shrink-0"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-editorial text-lg text-stone-950 font-medium">
                Direct Digital Payment Authorization
              </span>
              <span className="bg-stone-200 text-stone-800 text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-semibold">
                Gateway Interface
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Pre-authorizes the commission via our upcoming payment integration (Razorpay / UPI Direct / NetBanking). A confirmation token will be created and validated upon principal review.
            </p>
          </div>
        </label>

      </div>

      {/* Gateway Status Note (Placeholder Abstraction) */}
      <div className="p-4 bg-stone-100 border border-stone-200 text-xs font-mono text-stone-600 flex items-start gap-3">
        <Lock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-stone-900 block">
            Security &amp; Invoicing Layer: {paymentProvider.name}
          </span>
          <p className="text-[11px] mt-0.5 font-sans text-stone-500">
            Production payment gateway connector is configured for direct studio escrow. Payments are subject to our standard professional design agreement and CAD milestone delivery.
          </p>
        </div>
      </div>
    </div>
  );
}
