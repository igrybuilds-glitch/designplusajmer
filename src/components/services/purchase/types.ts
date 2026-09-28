import { PurchasableService } from '../../../data/purchasableServices';

export interface ProjectDetailsState {
  // 2D Floor Plan & Elevation fields
  plotLength: string;
  plotWidth: string;
  plotOrientation: string;
  roadSide: string;
  floors: string;
  bedrooms: string;
  bathrooms: string;
  parking: string;
  specialRequirements: string;
  preferredStyle: string;
  materialPreference: string;

  // Consultation fields
  projectType: string;
  location: string;
  approxArea: string;
  mainQuestion: string;
  consultationMode: string;
  preferredSlot: string;

  // Structural fields
  buildingType: string;
  soilCondition: string;
  structuralRequirements: string;
}

export interface UploadedFileItem {
  name: string;
  size: string;
  type: string;
}

export interface CustomerDetailsState {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  projectAddress: string;
  preferredContactMethod: string;
}

export type PaymentMethodType = 'invoice_first' | 'digital_advance';

export interface ServicePurchaseFlowProps {
  isOpen?: boolean;
  onClose?: () => void;
  initialServiceId?: string;
  customService?: PurchasableService;
  variant?: 'modal' | 'embedded';
  onOpenConsultation?: () => void;
  onComplete?: (orderRef: string) => void;
}
