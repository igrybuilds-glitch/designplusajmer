import React, { useState } from 'react';
import { Lock, Loader2, CreditCard, FileText, AlertCircle } from 'lucide-react';
import { PaymentMethodType } from './types';

// Standardized paymentProvider abstraction.
// Razorpay is wired end-to-end: /api/payment/create-order (server price book)
// -> checkout.js -> /api/payment/verify-payment (signature + replay protection).
// TEST keys only (rzp_test_*). Live keys + KYC are the studio owner's job.
export const paymentProvider = {
  providerId: 'designplus_razorpay_v1',
  name: 'Design Plus Razorpay Settlement',
  supportedGateways: ['Razorpay (UPI, Cards, NetBanking)'],
  environment: 'test_mode',
  currency: 'INR',
  isConfigured: false, // Set true in the Cloudflare dashboard when RAZORPAY_KEY_ID/SECRET (TEST) are saved
  description: 'Real Razorpay checkout wired to the Worker backend. TEST MODE ONLY until the studio owner completes Razorpay KYC and swaps live keys.'
};

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const CHECKOUT_JS_URL = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayCheckout(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const existing = document.querySelector(`script[src="${CHECKOUT_JS_URL}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('Could not load Razorpay checkout.')));
      return;
    }
    const script = document.createElement('script');
    script.src = CHECKOUT_JS_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Could not load Razorpay checkout. Check your internet connection.'));
    document.body.appendChild(script);
  });
}

interface CreateOrderResponse {
  success: boolean;
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
  testMode: boolean;
  itemDescription: string;
  error?: string;
}

interface VerifyResponse {
  success: boolean;
  verified: boolean;
  bookingReference: string;
  error?: string;
}

interface Step6PaymentProps {
  selectedPaymentMode: PaymentMethodType;
  setSelectedPaymentMode: (mode: PaymentMethodType) => void;
  itemId: string;
  itemName: string;
  amountLabel: string;
  customerName: string;
  customerPhone: string;
  isSubmitting: boolean;
  /** Called after a verified Razorpay payment — advance the flow. */
  onPaymentComplete: (paymentRef: string) => Promise<string>;
  /** Called for "pay later" — advance the flow without payment. */
  onSkipPayment: () => Promise<string>;
}

export function Step6Payment({
  selectedPaymentMode,
  setSelectedPaymentMode,
  itemId,
  itemName,
  amountLabel,
  customerName,
  customerPhone,
  isSubmitting,
  onPaymentComplete,
  onSkipPayment
}: Step6PaymentProps) {
  const [paying, setPaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusKind, setStatusKind] = useState<'info' | 'error'>('info');

  const showStatus = (msg: string, kind: 'info' | 'error' = 'info') => {
    setStatusMessage(msg);
    setStatusKind(kind);
  };

  const handlePayOnline = async () => {
    setPaying(true);
    showStatus('Connecting to secure payment...', 'info');
    try {
      await loadRazorpayCheckout();

      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, customerName, phone: customerPhone })
      });
      const orderData = (await orderRes.json()) as CreateOrderResponse;
      if (!orderRes.ok || !orderData.success) {
        if (orderRes.status === 503) {
          showStatus(
            'Online payment is not switched on yet. Please choose "Book Now, Pay Later" below — the studio will contact you for payment.',
            'error'
          );
        } else {
          showStatus(orderData.error || 'Could not start payment. Please try again.', 'error');
        }
        return;
      }

      const rzp = new window.Razorpay({
        key: orderData.keyId,
        amount: orderData.amount * 100,
        currency: orderData.currency || 'INR',
        order_id: orderData.orderId,
        name: 'Design Plus Architects',
        description: orderData.itemDescription || itemName,
        prefill: {
          name: customerName,
          contact: customerPhone
        },
        notes: {
          service: itemId
        },
        theme: { color: '#C86635' },
        handler: async (response: any) => {
          showStatus('Verifying your payment...', 'info');
          try {
            const verifyRes = await fetch('/api/payment/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            const verifyData = (await verifyRes.json()) as VerifyResponse;
            if (!verifyRes.ok || !verifyData.success) {
              showStatus(verifyData.error || 'Payment verification failed. Please contact the studio.', 'error');
              return;
            }
            await onPaymentComplete(verifyData.bookingReference);
          } catch {
            showStatus('Payment verification failed. Please contact the studio with your payment ID.', 'error');
          }
        },
        modal: {
          ondismiss: () => {
            showStatus('Payment window closed. You can retry, or book now and pay later.', 'info');
          }
        }
      });
      rzp.open();
    } catch (err: any) {
      showStatus(err?.message || 'Payment could not start. Please try again.', 'error');
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
          Payment
        </span>
        <p className="text-sm text-stone-600 font-sans">
          {itemName} — <strong className="text-stone-900">{amountLabel}</strong>
        </p>
      </div>

      <div className="space-y-4">
        {/* Option A: Pay online via Razorpay */}
        <label
          className={`p-5 border-2 flex items-start gap-4 cursor-pointer transition-all rounded-lg ${
            selectedPaymentMode === 'digital_advance'
              ? 'bg-white border-[#C86635] shadow-md'
              : 'bg-stone-50 border-stone-200 hover:bg-white'
          }`}
        >
          <input
            type="radio"
            name="payment_mode"
            checked={selectedPaymentMode === 'digital_advance'}
            onChange={() => setSelectedPaymentMode('digital_advance')}
            className="w-5 h-5 text-[#C86635] mt-1 shrink-0"
          />
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <CreditCard className="w-4 h-4 text-[#C86635]" />
              <span className="font-editorial text-lg text-stone-950 font-medium">
                Pay Online Now
              </span>
              <span className="bg-emerald-100 text-emerald-900 text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-semibold">
                Fastest
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Pay securely with UPI, card, or net-banking via Razorpay. Your drawings work starts immediately after payment.
            </p>
          </div>
        </label>

        {/* Option B: Pay later */}
        <label
          className={`p-5 border-2 flex items-start gap-4 cursor-pointer transition-all rounded-lg ${
            selectedPaymentMode === 'invoice_first'
              ? 'bg-white border-[#C86635] shadow-md'
              : 'bg-stone-50 border-stone-200 hover:bg-white'
          }`}
        >
          <input
            type="radio"
            name="payment_mode"
            checked={selectedPaymentMode === 'invoice_first'}
            onChange={() => setSelectedPaymentMode('invoice_first')}
            className="w-5 h-5 text-[#C86635] mt-1 shrink-0"
          />
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <FileText className="w-4 h-4 text-stone-600" />
              <span className="font-editorial text-lg text-stone-950 font-medium">
                Book Now, Pay Later
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              We register your booking today and send a GST invoice with UPI/bank details. <strong>No payment taken now.</strong>
            </p>
          </div>
        </label>
      </div>

      {/* Status message */}
      {statusMessage && (
        <div
          className={`p-3 rounded-lg text-xs font-medium flex items-start gap-2 ${
            statusKind === 'error'
              ? 'bg-red-50 border border-red-200 text-red-800'
              : 'bg-stone-100 border border-stone-200 text-stone-700'
          }`}
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Action button */}
      {selectedPaymentMode === 'digital_advance' ? (
        <button
          type="button"
          onClick={handlePayOnline}
          disabled={paying || isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#C86635] hover:bg-[#b5582a] text-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-colors shadow-md disabled:opacity-50 cursor-pointer"
        >
          {paying ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Opening Secure Payment...</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>Pay {amountLabel} Securely</span>
            </>
          )}
        </button>
      ) : (
        <button
          type="button"
          onClick={onSkipPayment}
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-stone-800 text-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-colors shadow-md disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Registering...</span>
            </>
          ) : (
            <span>Confirm Booking — Pay Later</span>
          )}
        </button>
      )}

      <div className="p-4 bg-stone-100 border border-stone-200 text-xs font-mono text-stone-600 flex items-start gap-3 rounded-lg">
        <Lock className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-stone-900 block">
            256-bit Secured by Razorpay
          </span>
          <p className="text-[11px] mt-0.5 font-sans text-stone-500">
            Card/UPI details go directly to Razorpay — never to our servers. A GST invoice is issued for every payment.
          </p>
        </div>
      </div>
    </div>
  );
}
