import React, { useId } from 'react';
import { X, ArrowRight, ArrowLeft, Printer } from 'lucide-react';
import { ServicePurchaseFlowProps } from './purchase/types';
import { useServicePurchaseFlow } from './purchase/useServicePurchaseFlow';
import { Step1ServiceSelect } from './purchase/Step1ServiceSelect';
import { Step2ProjectDetails } from './purchase/Step2ProjectDetails';
import { Step3FileUpload } from './purchase/Step3FileUpload';
import { Step4CustomerDetails } from './purchase/Step4CustomerDetails';
import { Step5OrderReview } from './purchase/Step5OrderReview';
import { Step6Payment, paymentProvider } from './purchase/Step6Payment';
import { Step7Confirmation } from './purchase/Step7Confirmation';

// Export paymentProvider, hook, and modular steps for external reuse
export { paymentProvider };
export * from './purchase';

export function ServicePurchaseFlow({
  isOpen = true,
  onClose,
  initialServiceId = '2d-floor-plan',
  customService,
  variant = 'modal',
  onComplete
}: ServicePurchaseFlowProps) {
  const uniqueId = useId();

  const {
    currentStep,
    selectedServiceId,
    setSelectedServiceId,
    currentService,
    projectDetails,
    setProjectDetails,
    uploadedFiles,
    setUploadedFiles,
    filesNote,
    setFilesNote,
    skipFiles,
    setSkipFiles,
    customerDetails,
    setCustomerDetails,
    selectedPaymentMode,
    setSelectedPaymentMode,
    isSubmitting,
    orderReference,
    nextStep,
    prevStep,
    submitOrder,
    resetFlow
  } = useServicePurchaseFlow({ initialServiceId, customService, onComplete });

  if (variant === 'modal' && !isOpen) {
    return null;
  }

  const handleResetAndClose = () => {
    resetFlow();
    if (onClose) {
      onClose();
    }
  };

  // Step Content Renderer
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1ServiceSelect
            selectedServiceId={selectedServiceId}
            onSelectService={setSelectedServiceId}
            currentService={currentService}
            hideSelector={!!customService}
          />
        );
      case 2:
        return (
          <Step2ProjectDetails
            currentService={currentService}
            projectDetails={projectDetails}
            setProjectDetails={setProjectDetails}
          />
        );
      case 3:
        return (
          <Step3FileUpload
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            filesNote={filesNote}
            setFilesNote={setFilesNote}
            skipFiles={skipFiles}
            setSkipFiles={setSkipFiles}
            inputId={`file-upload-input-${uniqueId}`}
          />
        );
      case 4:
        return (
          <Step4CustomerDetails
            customerDetails={customerDetails}
            setCustomerDetails={setCustomerDetails}
          />
        );
      case 5:
        return (
          <Step5OrderReview
            currentService={currentService}
            projectDetails={projectDetails}
            customerDetails={customerDetails}
            uploadedFiles={uploadedFiles}
            skipFiles={skipFiles}
          />
        );
      case 6:
        return (
          <Step6Payment
            selectedPaymentMode={selectedPaymentMode}
            setSelectedPaymentMode={setSelectedPaymentMode}
            itemId={selectedServiceId}
            itemName={currentService.name}
            amountLabel={currentService.pricingLabel}
            customerName={customerDetails.fullName}
            customerPhone={customerDetails.phone}
            isSubmitting={isSubmitting}
            onPaymentComplete={(paymentRef) => submitOrder(paymentRef)}
            onSkipPayment={() => submitOrder()}
          />
        );
      case 7:
        return (
          <Step7Confirmation
            currentService={currentService}
            orderReference={orderReference}
            customerDetails={customerDetails}
          />
        );
      default:
        return null;
    }
  };

  const content = (
    <div className={`relative w-full ${variant === 'modal' ? 'max-w-3xl my-auto max-h-[92vh]' : 'max-w-4xl mx-auto'} bg-[#FBFBF9] border border-stone-300 shadow-2xl overflow-hidden flex flex-col`}>
      
      {/* HEADER */}
      <header className="p-5 sm:p-6 border-b border-stone-200 bg-white flex items-center justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#C86635] font-semibold mb-1">
            <span>DESIGN PLUS DIRECT SERVICE COMMISSION</span>
            <span>·</span>
            <span>STEP 0{currentStep} / 07</span>
          </div>
          <h2 id={`purchase-flow-title-${uniqueId}`} className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal">
            {currentStep === 1 && 'Select Architectural Service'}
            {currentStep === 2 && `${currentService.name} · Project Parameters`}
            {currentStep === 3 && 'Document & Drawing Upload'}
            {currentStep === 4 && 'Client Identification & Location'}
            {currentStep === 5 && 'Order Dossier Review'}
            {currentStep === 6 && 'Payment & Billing Authorization'}
            {currentStep === 7 && 'Commission Registered'}
          </h2>
        </div>

        {variant === 'modal' && onClose && (
          <button
            onClick={handleResetAndClose}
            className="p-2 text-stone-400 hover:text-stone-900 transition-colors focus:outline-hidden"
            aria-label="Close service purchase modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </header>

      {/* PROGRESS BAR */}
      <div className="w-full bg-stone-200 h-1 shrink-0">
        <div 
          className="bg-[#C86635] h-1 transition-all duration-300"
          style={{ width: `${(currentStep / 7) * 100}%` }}
        />
      </div>

      {/* BODY */}
      <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
        {renderStepContent()}
      </div>

      {/* FOOTER */}
      <footer className="p-4 sm:p-6 border-t border-stone-200 bg-white flex items-center justify-between shrink-0">
        {currentStep < 7 ? (
          <>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
            ) : variant === 'modal' && onClose ? (
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-stone-400 hover:text-stone-800 transition-colors"
              >
                Cancel
              </button>
            ) : (
              <span />
            )}

            {currentStep < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-xs"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">
                Step 6 of 7 — choose your payment option above
              </span>
            )}
          </>
        ) : (
          <div className="w-full flex items-center justify-between">
            <button
              type="button"
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Dossier</span>
            </button>

            {onClose ? (
              <button
                type="button"
                onClick={handleResetAndClose}
                className="ml-auto inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Return to Services Overview</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => resetFlow()}
                className="ml-auto inline-flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white px-6 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Start New Commission</span>
              </button>
            )}
          </div>
        )}
      </footer>

    </div>
  );

  if (variant === 'embedded') {
    return content;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`purchase-flow-title-${uniqueId}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
    >
      {content}
    </div>
  );
}
