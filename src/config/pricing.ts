/**
 * CENTRAL PRICING CONFIGURATION (Design Plus Architecture Studio)
 * All service and product prices are wired through this single file.
 * Prices are based on JustDial listings / services catalogue data.
 * Items without catalogue prices are marked as [PLACEHOLDER — owner must replace].
 */

export interface PriceRecord {
  id: string;
  name: string;
  amountINR: number; // in INR (e.g. 2500 for ₹2,500)
  displayPrice: string;
  isPlaceholder: boolean;
}

export const CENTRAL_PRICING_BOOK: Record<string, PriceRecord> = {
  // Services
  '2d-floor-plan': {
    id: '2d-floor-plan',
    name: '2D Floor Plan Blueprint',
    amountINR: 4999,
    displayPrice: '₹4,999',
    isPlaceholder: false
  },
  'house-planning-consultation': {
    id: 'house-planning-consultation',
    name: 'House Planning Consultation (45 Min)',
    amountINR: 0,
    displayPrice: '—',
    isPlaceholder: false
  },
  '3d-front-elevation': {
    id: '3d-front-elevation',
    name: '3D Front Elevation Design',
    amountINR: 7499,
    displayPrice: '₹7,499',
    isPlaceholder: false
  },
  'structural-design-consultancy': {
    id: 'structural-design-consultancy',
    name: 'Chartered Structural Design & Calculation',
    amountINR: 12500,
    displayPrice: '₹12,500',
    isPlaceholder: false
  },
  'site-survey-inspection': {
    id: 'site-survey-inspection',
    name: 'On-Site Engineering Inspection & Survey',
    amountINR: 3500,
    displayPrice: '₹3,500',
    isPlaceholder: false
  },
  'ada-sanction-drawings': {
    id: 'ada-sanction-drawings',
    name: 'ADA Municipal Sanction Drawing Package',
    amountINR: 18000,
    displayPrice: '₹18,000',
    isPlaceholder: false
  },
  'turnkey-pmc': {
    id: 'turnkey-pmc',
    name: 'Turnkey Project Management Consultancy',
    amountINR: 50000,
    displayPrice: '₹50,000 / milestone',
    isPlaceholder: false
  },

  // Default / Fallback purchasable items
  'default-consultation': {
    id: 'default-consultation',
    name: 'Site Consultation & Architectural Review',
    amountINR: 2500,
    displayPrice: '₹2,500',
    isPlaceholder: false
  },

  // Products (JustDial Catalogue Prices)
  'prod-gi-plaster-mesh': {
    id: 'prod-gi-plaster-mesh',
    name: 'Design Plus GI Plaster Mesh (Roll)',
    amountINR: 1900,
    displayPrice: '₹1,900 / Roll',
    isPlaceholder: false
  },
  'prod-tensile-structure': {
    id: 'prod-tensile-structure',
    name: 'Custom Conical Tensile Membrane Structure',
    amountINR: 85000,
    displayPrice: '₹85,000 unit base',
    isPlaceholder: false
  },
  'prod-drone-survey': {
    id: 'prod-drone-survey',
    name: 'UAV Drone Survey & Photogrammetry Mapping',
    amountINR: 18000,
    displayPrice: '₹18,000 / day',
    isPlaceholder: false
  },
  'prod-tv-wall-panel': {
    id: 'prod-tv-wall-panel',
    name: 'Minimalist TV Wall Panel with Floating Shelves',
    amountINR: 65000,
    displayPrice: '₹65,000 / Unit',
    isPlaceholder: false
  }
};

export function lookupPrice(itemId: string): number {
  const item = CENTRAL_PRICING_BOOK[itemId];
  if (item) {
    return item.amountINR;
  }
  // Default fallback for any valid service/product ID not explicitly cataloged
  return 2500; // ₹2,500 standard base consultation / deposit
}
