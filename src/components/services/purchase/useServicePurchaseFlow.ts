import { useState, useEffect, useCallback } from 'react';
import { PurchasableService, PURCHASABLE_SERVICES } from '../../../data/purchasableServices';
import { submitConsultationInquiry } from '../../../lib/firebase';
import { 
  ProjectDetailsState, 
  CustomerDetailsState, 
  UploadedFileItem, 
  PaymentMethodType 
} from './types';

export interface UseServicePurchaseFlowOptions {
  initialServiceId?: string;
  customService?: PurchasableService;
  onComplete?: (orderRef: string) => void;
}

export function useServicePurchaseFlow(options: UseServicePurchaseFlowOptions = {}) {
  const { initialServiceId = '2d-floor-plan', customService, onComplete } = options;

  // Selected Service
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  const currentService: PurchasableService = customService || 
    PURCHASABLE_SERVICES.find(s => s.id === selectedServiceId || s.slug === selectedServiceId) || 
    PURCHASABLE_SERVICES[0];

  // Steps 1 to 7
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [orderReference, setOrderReference] = useState<string>('');

  // Step 2: Project Details State
  const [projectDetails, setProjectDetails] = useState<ProjectDetailsState>({
    plotLength: '',
    plotWidth: '',
    plotOrientation: 'North Facing',
    roadSide: 'North Side (Single Road)',
    floors: 'Ground + 1 Floor (G+1)',
    bedrooms: '3 BHK',
    bathrooms: '3 Bathrooms',
    parking: '1 Car + 2-Wheeler',
    specialRequirements: '',
    preferredStyle: 'Contemporary Modern',
    materialPreference: 'Indigenous Sandstone & Warm Teak Wood',
    projectType: 'New Residential Villa',
    location: 'Ajmer',
    approxArea: '1,800 sq. ft.',
    mainQuestion: '',
    consultationMode: 'Video Call (Google Meet)',
    preferredSlot: 'Morning (10:00 AM – 1:00 PM)',
    buildingType: 'Residential Villa (RCC Framed)',
    soilCondition: 'Hard Metamorphic Rock (Aravalli Formation)',
    structuralRequirements: ''
  });

  // Step 3: Files Upload State
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);
  const [filesNote, setFilesNote] = useState<string>('');
  const [skipFiles, setSkipFiles] = useState<boolean>(false);

  // Step 4: Customer Details State
  const [customerDetails, setCustomerDetails] = useState<CustomerDetailsState>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Ajmer',
    projectAddress: '',
    preferredContactMethod: 'WhatsApp'
  });

  // Step 6: Payment mode
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<PaymentMethodType>('invoice_first');

  // Step Navigation
  const nextStep = useCallback(() => {
    if (currentStep === 4) {
      if (!customerDetails.fullName.trim() || !customerDetails.phone.trim()) {
        alert('Please provide your name and phone number for architectural verification.');
        return false;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 7));
    return true;
  }, [currentStep, customerDetails]);

  const prevStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step);
    }
  }, []);

  // Final Order Submission
  const submitOrder = useCallback(async () => {
    setIsSubmitting(true);
    
    // Generate deterministic reference: DP-ORD-2026-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refCode = `DP-ORD-2026-${randomSuffix}`;
    setOrderReference(refCode);

    try {
      await submitConsultationInquiry({
        name: customerDetails.fullName,
        phone: customerDetails.phone,
        email: customerDetails.email,
        projectType: `[Standardized Order] ${currentService.name}`,
        location: `${customerDetails.city} - ${customerDetails.projectAddress}`,
        message: `Order Reference: ${refCode}
Service: ${currentService.name} (${currentService.pricingLabel})
Parameters: ${projectDetails.plotLength ? `${projectDetails.plotLength}x${projectDetails.plotWidth}` : projectDetails.projectType}, ${projectDetails.plotOrientation || ''}, ${projectDetails.floors || ''}
Special Notes: ${projectDetails.specialRequirements || projectDetails.mainQuestion || 'None'}
Files: ${uploadedFiles.map(f => f.name).join(', ') || (skipFiles ? 'Will send via WhatsApp' : 'None')}
Preferred Contact: ${customerDetails.preferredContactMethod}
Payment Preference: ${selectedPaymentMode === 'invoice_first' ? 'Pro-Forma GST Invoice First' : 'Online Gateway'}`
      });
    } catch (err) {
      console.warn('[useServicePurchaseFlow] Firestore submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setCurrentStep(7);
      if (onComplete) {
        onComplete(refCode);
      }
    }
    return refCode;
  }, [customerDetails, currentService, projectDetails, uploadedFiles, skipFiles, selectedPaymentMode, onComplete]);

  const resetFlow = useCallback(() => {
    setCurrentStep(1);
    setOrderReference('');
    setIsSubmitting(false);
  }, []);

  return {
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
    goToStep,
    submitOrder,
    resetFlow
  };
}
