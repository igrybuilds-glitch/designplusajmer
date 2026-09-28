import { X, ShieldCheck, CreditCard, MessageSquare, ArrowUpRight } from 'lucide-react';

interface ProductItem {
  category: string;
  imageUrl: string;
  name: string;
  price?: string;
}

interface ProductCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductItem | null;
}

export function ProductCheckoutModal({ isOpen, onClose, product }: ProductCheckoutModalProps) {
  if (!isOpen || !product) return null;

  const hasPrice = product.price && product.price.trim() !== '' && product.price.toLowerCase() !== 'request for price';
  const priceDisplay = hasPrice ? product.price : 'Price on request';

  const whatsappUrl = `https://wa.me/917976453090?text=${encodeURIComponent(
    `Hi, I would like to order "${product.name}" (${product.category}) priced at ${priceDisplay}. Please confirm delivery and payment details.`
  )}`;

  // Future Razorpay Handler placeholder function
  const handleRazorpayCheckout = () => {
    alert('Online payment (Razorpay) is coming soon. Proceeding via WhatsApp order confirmation.');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#1E1D1A]/10 overflow-hidden">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F4F0E8] border border-[#1E1D1A]/10 flex items-center justify-center text-[#1E1D1A] hover:bg-[#1E1D1A] hover:text-white transition-colors cursor-pointer"
          aria-label="Close checkout modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#B86B38]">
            <ShieldCheck className="w-4 h-4 text-[#B86B38]" />
            <span>Design Plus Secure Checkout</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#1E1D1A]">Order Summary</h2>
        </div>

        {/* Product Card Preview inside Checkout */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F4F0E8] border border-[#1E1D1A]/10 mb-6">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-[#1E1D1A]/10">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=300&q=80';
              }}
            />
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#B86B38]">{product.category}</span>
            <h3 className="font-sans font-medium text-sm text-[#1E1D1A] line-clamp-2">{product.name}</h3>
            <div className="text-sm font-bold text-[#1E1D1A]">{priceDisplay}</div>
          </div>
        </div>

        {/* Notice for Online Payment Coming Soon */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 mb-6 text-xs text-amber-900 font-sans leading-relaxed flex items-start gap-3">
          <CreditCard className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block text-amber-950">Online payment coming soon</span>
            Razorpay payment gateway integration is currently underway. You can place your order instantly via WhatsApp order confirmation below.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Razorpay Plug-in Button Placeholder */}
          <button
            type="button"
            onClick={handleRazorpayCheckout}
            className="w-full py-3.5 px-6 rounded-full bg-[#1E1D1A] hover:bg-[#2D2C28] text-white text-xs sm:text-sm font-sans font-medium tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <CreditCard className="w-4 h-4 text-[#B86B38]" />
            <span>Pay Online via Razorpay (Coming Soon)</span>
          </button>

          {/* WhatsApp Confirm Order Fallback */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-sans font-medium tracking-wide flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>Confirm Order via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

      </div>
    </div>
  );
}
