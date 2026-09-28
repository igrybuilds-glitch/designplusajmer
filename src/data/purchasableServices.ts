export interface PurchasableService {
  id: string;
  slug: string;
  name: string;
  category: 'Architectural / Residential' | 'Small Technical Services';
  tagline: string;
  description: string;
  price: number | null; // null for placeholder
  pricingLabel: string; // e.g. "Starting at ₹X,XXX" or "₹X,XXX"
  unitLabel: string; // e.g. "per layout" | "per session" | "per plot"
  deliveryTimeline: string; // e.g. "3–5 business days"
  purchaseEnabled: boolean;
  ctaLabel: string;
  secondaryCtaLabel: string;
  formType: 'floor-plan' | 'elevation' | 'consultation' | 'structural' | 'site-analysis' | 'standard';
  whatsIncluded: string[];
  whatWeNeed: string[];
  technicalStandards?: string[];
  recommendedFor: string;
}

export const PURCHASABLE_SERVICES: PurchasableService[] = [
  // ARCHITECTURAL / RESIDENTIAL
  {
    id: '2d-floor-plan',
    slug: '2d-floor-planning',
    name: '2D Floor Plan',
    category: 'Architectural / Residential',
    tagline: 'Precision residential layout tailored to plot dimensions and solar orientation',
    description: 'A professionally drafted residential floor layout based on your exact plot coordinates, family lifestyle, room zoning requirements, and setback byelaws in Rajasthan.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per floor layout',
    deliveryTimeline: '3–5 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    formType: 'floor-plan',
    whatsIncluded: [
      'Dimensioned 2D architectural floor plan blueprint',
      'Intelligent room zoning and circulation flow (zero dead space)',
      'Basic furniture placement and spatial clearance validation',
      'Window, door, and natural cross-ventilation orientation',
      'Municipal setback guideline adherence'
    ],
    whatWeNeed: [
      'Plot dimensions (Length × Width)',
      'Cardinal orientation (North facing, East facing, etc.)',
      'Road side / access width',
      'Number of floors planned',
      'Bedrooms and bathrooms required',
      'Parking requirements (car / two-wheeler)',
      'Special requirements (puja room, home office, rental floor)',
      'Plot / registry sketch or photo if available'
    ],
    technicalStandards: ['National Building Code (NBC)', 'ADA / Municipal Setbacks', 'IS Drafting Standards'],
    recommendedFor: 'Homeowners building a new house or finalizing room layouts prior to construction.'
  },
  {
    id: 'house-planning-consultation',
    slug: 'house-planning-consultation',
    name: 'House Planning Consultation',
    category: 'Architectural / Residential',
    tagline: 'Direct 45-minute strategic session with a senior architect on plot feasibility and spatial layout',
    description: 'One-on-one professional session with Ar. Vipul Verma or a senior Design Plus architect to review your plot, discuss spatial priorities, evaluate floor configurations, and define clear next steps.',
    price: null,
    pricingLabel: '₹X,XXX',
    unitLabel: 'per 45-min session',
    deliveryTimeline: 'Scheduled within 24–48 hours',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Inquire on Availability',
    formType: 'consultation',
    whatsIncluded: [
      '45-minute dedicated consultation (In-Studio Ajmer or Video Call)',
      'Screen-shared review of your plot or draft layout',
      'Expert advice on sun-path, wind direction, and room zoning',
      'Guidance on municipal approval requirements (ADA/local authority)',
      'Written summary checklist of architectural recommendations'
    ],
    whatWeNeed: [
      'Plot location and approximate dimensions',
      'Family size and primary spatial requirements',
      'Main questions or challenges you want to solve',
      'Preferred consultation mode (Studio / Video / Phone)'
    ],
    technicalStandards: ['Council of Architecture (COA) Guidelines'],
    recommendedFor: 'Homeowners before commissioning full drawings or buying a plot.'
  },
  {
    id: '3d-front-elevation',
    slug: '3d-elevation-design',
    name: '3D Front Elevation',
    category: 'Architectural / Residential',
    tagline: 'Photorealistic exterior architectural visualization with authentic regional materials',
    description: 'High-resolution digital modeling of your building’s facade featuring contemporary massing, realistic sunlight and shadow calculations, indigenous stone textures, and exterior lighting placement.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per facade design',
    deliveryTimeline: '5–7 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    formType: 'elevation',
    whatsIncluded: [
      'High-resolution day & evening architectural 3D renders',
      'Facade material and color palette specification',
      'Balcony, parapet, and window louvers detailing',
      'Exterior illumination fixture placement suggestions',
      'One round of material/color refinement'
    ],
    whatWeNeed: [
      'Existing 2D floor plan or elevation sketch (PDF/CAD/Image)',
      'Plot width / road frontage dimension',
      'Number of storeys',
      'Preferred style (Contemporary Modern, Rajasthani Vernacular, Minimalist)',
      'Material preference (Sandstone, Granite, Exposed Brick, Louvers)'
    ],
    technicalStandards: ['Physically-Based Daylight Rendering', 'Standard Building Proportions'],
    recommendedFor: 'Builders and homeowners wanting a distinct street presence before civil masonry.'
  },
  {
    id: 'house-exterior-design',
    slug: 'house-exterior-design',
    name: 'House Exterior Design',
    category: 'Architectural / Residential',
    tagline: 'Complete exterior envelope design including front elevation, boundary wall, and gate details',
    description: 'A holistic exterior styling package encompassing front and visible side elevations, entrance portico, boundary wall geometry, and main gate integration.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per exterior package',
    deliveryTimeline: '7–10 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    formType: 'elevation',
    whatsIncluded: [
      'Complete 3D exterior renders (front & side angles)',
      'Boundary wall and main entrance gate design details',
      'Porch/portico and exterior ceiling treatment details',
      'Material specification sheet for stone, paint, and metalwork'
    ],
    whatWeNeed: [
      '2D floor plans with exterior wall dimensions',
      'Site photos showing road context and adjacent houses',
      'Height constraints or floor-to-floor heights'
    ],
    recommendedFor: 'Villas and independent residences requiring cohesive exterior branding.'
  },
  {
    id: 'basic-residential-package',
    slug: 'basic-residential-design-package',
    name: 'Basic Residential Design Package',
    category: 'Architectural / Residential',
    tagline: 'Essential architectural foundation: 2D floor plans, furniture layouts, and 3D elevation',
    description: 'A curated starter package combining functional interior room flow with photorealistic exterior elevation modeling, ideal for standard residential plots up to 2,500 sq. ft.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per home project',
    deliveryTimeline: '7–10 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Scope',
    formType: 'floor-plan',
    whatsIncluded: [
      'Dimensioned 2D floor plans for all floors',
      'Optimized furniture and circulation layouts',
      'One 3D front elevation design with day render',
      'Basic electrical switch and point layout schedule',
      'Doors and windows opening schedule'
    ],
    whatWeNeed: [
      'Plot dimensions and site location',
      'Number of floors to construct',
      'Family room count requirements',
      'Parking and outdoor space preferences'
    ],
    recommendedFor: 'Budget-conscious homeowners seeking quality architectural rigor.'
  },
  {
    id: 'complete-house-package',
    slug: 'complete-house-design-package',
    name: 'Complete House Design Package',
    category: 'Architectural / Residential',
    tagline: 'End-to-end residential blueprints: Architecture, 3D Elevation, and Chartered Structural drawings',
    description: 'Our flagship turnkey residential engineering package. Combines master architectural space planning, 3D exterior visualization, and Chartered Engineer structural RCC drawings ready for site contractor execution.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per full house blueprint',
    deliveryTimeline: '12–15 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Request Detailed Proposal',
    formType: 'floor-plan',
    whatsIncluded: [
      'Full 2D architectural working drawings (plans, sections, elevations)',
      'High-resolution 3D front and side elevation renders',
      'Chartered Engineer structural framing (footings, columns, beams, slabs)',
      'Electrical and plumbing conduit schematic layouts',
      'Doors, windows, and joinery schedules',
      'Direct coordination call with lead architect & structural engineer'
    ],
    whatWeNeed: [
      'Plot registry or site survey measurements',
      'Soil type observation or borehole report if available',
      'Detailed lifestyle and room brief',
      'Target construction timeline'
    ],
    technicalStandards: ['IS 456 (RCC)', 'IS 1893 (Seismic)', 'NBC 2016'],
    recommendedFor: 'High-end bungalows, modern villas, and multi-family residences.'
  },
  {
    id: 'architecture-consultation',
    slug: 'architecture-consultation',
    name: 'Architecture Consultation',
    category: 'Architectural / Residential',
    tagline: 'Comprehensive architectural evaluation and advisory with Principal Architect Ar. Vipul Verma',
    description: 'An in-depth consultation session examining your project feasibility, spatial options, material strategy, and budget alignment before building.',
    price: null,
    pricingLabel: '₹X,XXX',
    unitLabel: 'per 60-min session',
    deliveryTimeline: 'Scheduled within 24–48 hours',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Inquire First',
    formType: 'consultation',
    whatsIncluded: [
      '60-minute in-depth consultation session',
      'Review of existing drawings or conceptual ideas',
      'Thermal massing and climate-responsive suggestions',
      'Rough square footage cost estimation guidance',
      'Follow-up summary email with action roadmap'
    ],
    whatWeNeed: [
      'Project address / location',
      'Approximate plot size or built-up area',
      'Primary goals and aesthetic preferences'
    ],
    recommendedFor: 'Plot owners, investors, and renovators needing clear architectural direction.'
  },
  {
    id: 'plot-site-planning-review',
    slug: 'plot-site-planning-review',
    name: 'Plot / Site Planning Review',
    category: 'Architectural / Residential',
    tagline: 'Professional appraisal of plot setbacks, FAR calculation, ground coverage, and road access',
    description: 'Before purchasing or building on a plot, our municipal planning team reviews the land parcel against statutory ADA bylaws, road widening alignments, and optimal building envelope boundaries.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per site review',
    deliveryTimeline: '2–3 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Site',
    formType: 'site-analysis',
    whatsIncluded: [
      'Plot setback analysis (Front, Rear, Side clearances)',
      'Permissible FAR (Floor Area Ratio) and Maximum Ground Coverage estimate',
      'Building height limits and road width compliance check',
      'Solar azimuth and predominant wind direction diagram',
      'Formal 2-page Technical Review Report'
    ],
    whatWeNeed: [
      'Plot dimensions and colony/sector name',
      'Width of front and adjacent roads',
      'Colony approval status (ADA approved, Gram Panchayat, etc.)'
    ],
    recommendedFor: 'Buyers evaluating a plot purchase or planning statutory layout compliance.'
  },
  {
    id: 'vastu-planning-review',
    slug: 'vastu-planning-review',
    name: 'Vastu + Planning Review',
    category: 'Architectural / Residential',
    tagline: 'Harmonizing Vastu directional principles with modern functional architecture and daylighting',
    description: 'We reconcile traditional Vastu Shastra directional zones (kitchen SE, master bedroom SW, puja NE, entrance) with pragmatic contemporary ventilation and plumbing stacks, avoiding superstitious demolition.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per plan audit',
    deliveryTimeline: '3–4 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    formType: 'site-analysis',
    whatsIncluded: [
      'Directional compass overlay (16 Vastu zones analysis)',
      'Room-by-room compliance audit (living, kitchen, bedrooms, staircase)',
      'Practical architectural remedies that maintain modern aesthetics',
      'Corrected layout suggestions without structural compromise'
    ],
    whatWeNeed: [
      'Accurate North directional arrow on plot layout',
      'Proposed or existing room arrangements',
      'Specific family Vastu priorities'
    ],
    recommendedFor: 'Clients seeking harmony between traditional beliefs and contemporary design.'
  },
  {
    id: 'renovation-layout-consultation',
    slug: 'renovation-home-layout-consultation',
    name: 'Renovation / Home Layout Consultation',
    category: 'Architectural / Residential',
    tagline: 'Smart internal reconfiguration to open up dark rooms, add bathrooms, or extend living spaces',
    description: 'Expert review of your existing house structure to identify non-load-bearing walls, optimize natural daylighting, modernize cramped kitchens, and add modern lifestyle amenities.',
    price: null,
    pricingLabel: '₹X,XXX',
    unitLabel: 'per renovation consultation',
    deliveryTimeline: 'Scheduled within 48 hours',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Project',
    formType: 'consultation',
    whatsIncluded: [
      'Detailed review of existing floor photographs and rough measurements',
      'Structural safety check (identifying load-bearing masonry vs partition walls)',
      'Space-saving open-plan suggestions',
      'Phased renovation sequencing advice'
    ],
    whatWeNeed: [
      'Photos or video walkthrough of existing rooms',
      'Rough measurements of rooms to be altered',
      'Age of the building and major pain points'
    ],
    recommendedFor: 'Owners of 10+ year old homes seeking contemporary revitalization.'
  },

  // SMALL TECHNICAL SERVICES
  {
    id: 'basic-structural-consultation',
    slug: 'basic-structural-consultation',
    name: 'Basic Structural Consultation',
    category: 'Small Technical Services',
    tagline: 'Direct technical dialogue with Chartered Structural Engineer Er. Sudhir Soni (FIV, M.E. Structure)',
    description: 'Resolve critical structural dilemmas: wall cracks, column span doubts, foundation questions, or feasibility of adding another floor onto an existing building.',
    price: null,
    pricingLabel: '₹X,XXX',
    unitLabel: 'per structural session',
    deliveryTimeline: 'Scheduled within 24–48 hours',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Structural Issue',
    formType: 'structural',
    whatsIncluded: [
      '45-minute consultation with a Chartered Structural Engineer',
      'Engineering diagnosis of structural symptoms or expansion plans',
      'Preliminary sizing advice for beams, columns, or lintels',
      'Recommendations for non-destructive tests (NDT) if required',
      'Written engineering summary note'
    ],
    whatWeNeed: [
      'Photos of structural concern (cracks, deflection, framing)',
      'Building age, number of existing floors, and soil type if known',
      'Brief summary of your structural inquiry'
    ],
    technicalStandards: ['IS 456', 'IS 1893:2016', 'Chartered Engineer Code'],
    recommendedFor: 'Homeowners adding floors or evaluating structural integrity.'
  },
  {
    id: 'structural-drawing-package',
    slug: 'structural-design',
    name: 'Structural Drawing Package',
    category: 'Small Technical Services',
    tagline: 'Complete computerized RCC structural drawings vetted by a Chartered Engineer (IS 456 compliant)',
    description: 'Engineered reinforcement drawings including foundation footing sizes, column reinforcement schedules, plinth beam details, floor beam sections, and slab steel schedules.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per structural package',
    deliveryTimeline: '7–10 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Engineering Scope',
    formType: 'structural',
    whatsIncluded: [
      'Foundation footing layout & depth schedule',
      'Column layout with rebar gauge and tie spacing (IS 13920)',
      'Plinth, lintel, and floor beam reinforcement sections',
      'RCC slab thickness and steel mesh details',
      'Staircase structural reinforcement drawings',
      'Chartered Engineer verification stamp'
    ],
    whatWeNeed: [
      'Approved or finalized architectural 2D floor plans (CAD / PDF)',
      'Number of storeys (e.g. G+1, G+2)',
      'Location and known soil condition (e.g. rock, clay, sandy loam)'
    ],
    technicalStandards: ['IS 456:2000', 'IS 13920:2016 (Ductile Detailing)', 'IS 875 (Loads)'],
    recommendedFor: 'Contractors and self-building owners needing site-ready reinforcement blueprints.'
  },
  {
    id: 'site-plot-analysis',
    slug: 'site-plot-analysis',
    name: 'Site / Plot Analysis',
    category: 'Small Technical Services',
    tagline: 'Comprehensive physical, legal, and environmental assessment of a residential or commercial parcel',
    description: 'Detailed technical analysis examining plot boundaries, elevation slopes, municipal road reservation lines, surrounding utilities, and building orientation advantages.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per plot dossier',
    deliveryTimeline: '3–5 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Inquire on Location',
    formType: 'site-analysis',
    whatsIncluded: [
      'Plot geometry and aspect ratio calculation',
      'Sun-path mapping across summer and winter solstices',
      'Prevailing wind and natural drainage flow analysis',
      'Neighborhood privacy and overlooking evaluation',
      'Comprehensive Site Feasibility Dossier'
    ],
    whatWeNeed: [
      'Site coordinates (Google Maps pin or plot number)',
      'Plot dimensions and orientation',
      'Site photos or video overview'
    ],
    recommendedFor: 'Prospective plot buyers and real estate developers.'
  },
  {
    id: 'topographical-survey-enquiry',
    slug: 'topographical-survey',
    name: 'Topographical Survey Package',
    category: 'Small Technical Services',
    tagline: 'Standardized Total Station surveying package for private plots up to 1,000 sq. yards',
    description: 'Ground-truth field surveying executing Total Station coordinates, boundary benchmark establishment, and 0.5m interval contour mapping for sloping or uneven residential sites.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per plot up to 1,000 sq. yd',
    deliveryTimeline: '4–6 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Survey Scope',
    formType: 'site-analysis',
    whatsIncluded: [
      'Total Station boundary traverse and corner benchmark pegs',
      '0.5m contour map with high/low point elevation levels',
      'Existing features mapping (trees, adjacent structures, road levels)',
      'Digital CAD (.dwg) and PDF topographic survey files'
    ],
    whatWeNeed: [
      'Exact plot location in Ajmer or nearby district',
      'Registry boundary details or patta document',
      'Site access availability'
    ],
    technicalStandards: ['Survey of India Datum', 'Total Station Precision'],
    recommendedFor: 'Sloped, rocky, or irregular terrain plots requiring accurate level data.'
  },
  {
    id: 'preliminary-cost-estimate',
    slug: 'preliminary-cost-estimate',
    name: 'Preliminary Quantity & Cost Estimate',
    category: 'Small Technical Services',
    tagline: 'Realistic item-wise Bill of Quantities (BOQ) and budget forecasting for residential construction',
    description: 'Know your exact financial outlay before breaking ground. We calculate realistic quantities of cement, steel, bricks, sand, aggregate, finishes, and labor based on current Rajasthan market rates.',
    price: null,
    pricingLabel: 'Starting from ₹X,XXX',
    unitLabel: 'per residential project',
    deliveryTimeline: '4–5 business days',
    purchaseEnabled: true,
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss Budgeting',
    formType: 'standard',
    whatsIncluded: [
      'Itemized material breakdown (cement bags, steel metric tonnes, brick counts)',
      'Substructure (excavation, footings, plinth) cost breakdown',
      'Superstructure (RCC frame, masonry, plastering) cost breakdown',
      'Flooring, painting, doors/windows finishing estimates',
      'Summary spreadsheet with high/medium/luxury specification tiers'
    ],
    whatWeNeed: [
      '2D floor plans with total built-up area',
      'Intended quality grade (Standard, Premium, Luxury)',
      'Number of storeys planned'
    ],
    recommendedFor: 'Homeowners planning construction loan applications or personal budgets.'
  }
];

export function getPurchasableServiceById(id: string): PurchasableService | undefined {
  return PURCHASABLE_SERVICES.find(s => s.id === id || s.slug === id);
}
