/**
 * Canonical Services Data Source
 * Single Source of Truth for Design Plus Architectural & Engineering Services
 */

export interface EditorialServiceItem {
  id: string;
  number: string;
  headline: string;
  category: string;
  shortDescription: string;
  metadata: string[];
  technicalTag: string;
  route: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  annotations: { label: string; value: string }[];
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  processHighlights: string[];
  iconName: string;
  heroImage: string;
  imageSrc?: string;
  purchaseEnabled?: boolean;
  pricingLabel?: string;
  pricingUnit?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  packageId?: string;
}

export const EDITORIAL_SERVICES: EditorialServiceItem[] = [
  {
    id: 'architecture',
    number: '01',
    headline: 'Architecture',
    category: 'HABITABLE ENVIRONMENT',
    shortDescription:
      'Climate-responsive residential and commercial volumes designed with vernacular stone craft, natural courtyard ventilation, and modern spatial discipline tailored to the arid topography of Rajasthan.',
    metadata: ['COA CA/2004', 'BIOCLIMATIC ENVELOPE', 'PASSIVE SOLAR', 'DAYLIGHTING'],
    technicalTag: 'COA CA/2004 · SOLAR AZIMUTH OPTIMIZED',
    route: '/services/architectural-design',
    imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Ana Sagar Lake Residence - Contemporary Bioclimatic Architecture in Ajmer',
    caption: 'Lakefront Residential Monolith · Regional Sandstone & Courtyard Circulation',
    annotations: [
      { label: 'COUNCIL OF ARCHITECTURE', value: 'CA/2004 Verified' },
      { label: 'CLIMATIC STRATEGY', value: 'Thermal Massing & Courtyard Venting' }
    ]
  },
  {
    id: 'structural-engineering',
    number: '02',
    headline: 'Structural Engineering',
    category: 'STRUCTURAL RIGOR & PHYSICS',
    shortDescription:
      'Chartered engineering calculations, computerized finite element modeling, post-tensioned beam geometry, and seismic ductility detailing under IS 13920 for high-load residential and commercial complexes.',
    metadata: ['IS 456', 'IS 1893:2016', 'SEISMIC ZONE II/III', 'CHARTERED AUDIT'],
    technicalTag: 'IS 456 · CHARTERED ENGINEER (FIV/CE)',
    route: '/services/structural-design',
    imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Post-Tensioned Structural Steel and Concrete Framing System and Column Grid Detailing',
    caption: 'High-Rise Structural Moment Frame · Grade M30 Concrete & Fe500D Reinforcement Sizing',
    annotations: [
      { label: 'LEAD ENGINEER', value: 'Er. Sudhir Soni, M.E. Structure, FIV' },
      { label: 'SEISMIC DUCTILITY', value: 'IS 13920:2016 Compliant' }
    ]
  },
  {
    id: 'interior-design',
    number: '03',
    headline: 'Interior Design',
    category: 'SPATIAL MATERIALITY',
    shortDescription:
      'Tactile spatial articulation celebrating flamed granite, reclaimed regional teak, acoustic plaster finishes, and recessed 2700K architectural illumination for calm, timeless interior environments.',
    metadata: ['TACTILE MATERIALITY', 'BESPOKE JOINERY', 'ACOUSTIC PLASTER', 'LIGHTING DESIGN'],
    technicalTag: 'REFLECTED CEILING PLAN · 2700K LUX BALANCED',
    route: '/services/interior-design',
    imageSrc: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Refined architectural interior with warm woodwork, natural stone, and concealed ambient illumination',
    caption: 'Bespoke Residential Living Volume · Natural Jodhpur Sandstone & Warm Teak Millwork',
    annotations: [
      { label: 'MATERIAL PALETTE', value: 'Indigenous Sandstone & Solid Teak' },
      { label: 'LIGHTING DATUM', value: 'Glare-Free Recessed Channels' }
    ]
  },
  {
    id: 'highway-engineering',
    number: '04',
    headline: 'Highway Engineering',
    category: 'CIVIL TRANSPORT CORRIDORS',
    shortDescription:
      'Geometric highway alignment, multi-lane divided carriageways, flexible and rigid pavement design, and subgrade stabilization meeting MoRTH standards for heavy regional commercial freight corridors.',
    metadata: ['IRC:37 PAVEMENT', 'MORTH COMPLIANCE', 'CBR > 8%', 'SUBGRADE STABILIZATION'],
    technicalTag: 'MORTH SPECIFICATIONS · AXLE LOAD RATING',
    route: '/services/infrastructure',
    imageSrc: '/images/services/highway-engineering.webp',
    imageAlt: 'Real multi-lane divided highway interchange and expressway transportation infrastructure meeting MoRTH and IRC standards',
    caption: 'State Transport Arterial Grid · Pavement Subgrade Alignment & Geotechnical Stabilization',
    annotations: [
      { label: 'PAVEMENT DESIGN', value: 'IRC:37-2018 Heavy Axle Verification' },
      { label: 'SURFACE DRAINAGE', value: '25-Year Storm Surge Outfall' }
    ]
  },
  {
    id: 'bridges-flyovers',
    number: '05',
    headline: 'Bridges & Flyovers',
    category: 'HEAVY CIVIL INFRASTRUCTURE',
    shortDescription:
      'Prestressed concrete box girders, continuous viaducts, and railway over-bridges (ROBs) with dynamic verification of IRC Class 70R freight loads, elastomeric bearings, and seismic pier displacements.',
    metadata: ['IRC:112-2020', 'CLASS 70R FREIGHT', 'PSC BOX GIRDER', 'PTFE BEARINGS'],
    technicalTag: 'IRC 112:2020 · CLASS 70R FREIGHT VERIFIED',
    route: '/services/bridges',
    imageSrc: '/images/services/bridges-flyovers.webp',
    imageAlt: 'Real heavy civil infrastructure concrete highway flyover viaduct and multi-lane bridge interchange with prestressed box girders',
    caption: 'Continuous Prestressed Box Girder Viaduct · Pier Hydrodynamics & Substructure Geometry',
    annotations: [
      { label: 'SUPERSTRUCTURE', value: 'Prestressed Concrete Box Girder' },
      { label: 'LIVE LOAD CLASS', value: 'IRC Class 70R / Class A Dual Verified' }
    ]
  },
  {
    id: 'dams-canals',
    number: '06',
    headline: 'Dams & Canals',
    category: 'WATER RESOURCE ENGINEERING',
    shortDescription:
      'Mass concrete gravity weirs, irrigation canal cross-drainage aqueducts, energy dissipation chutes, and watershed retention reservoirs conforming strictly to Central Water Commission (CWC) standards and IS 6512.',
    metadata: ['IS 6512', 'CWC GUIDELINES', '50-YR FLOOD ROUTING', 'SLIDING FACTOR > 1.5'],
    technicalTag: 'IS 6512 · 50-YEAR HYDROLOGIC PEAK SURGE',
    route: '/services/hydraulics',
    imageSrc: '/images/services/dams-canals.webp',
    imageAlt: 'Massive concrete gravity dam spillway and regulated irrigation canal civil infrastructure in operation',
    caption: 'Aravalli Basin Reservoir & Spillway Chute · Energy Dissipation & Peak Discharge Channel',
    annotations: [
      { label: 'STABILITY ANALYSIS', value: 'Overturning & Sliding Factor > 1.5' },
      { label: 'SEEPAGE CONTROL', value: 'Grout Curtain & Deep Relief Wells' }
    ]
  },
  {
    id: 'water-sewerage',
    number: '07',
    headline: 'Water & Sewerage',
    category: 'MUNICIPAL PUBLIC HEALTH',
    shortDescription:
      'Comprehensive urban hydraulic modeling, drinking water distribution grids, sewage pumping stations, gravity sewer trunk lines, and wastewater treatment systems designed under CPHEEO manuals.',
    metadata: ['CPHEEO MANUAL', 'HYDRAULIC GRADIENT', 'TRUNK MAINS', 'STORM SURGE'],
    technicalTag: 'CPHEEO NORMS · GRAVITY RETICULATION',
    route: '/services/water-sewerage',
    imageSrc: '/images/services/water-sewerage.webp',
    imageAlt: 'Modern municipal sewage treatment plant (STP) clarifier tanks, aeration basins, and water treatment infrastructure in India',
    caption: 'Civic Sewage Treatment Plant (STP) & Water Distribution Works · Clarifier Basins & Hydraulic Gradient Reticulation',
    annotations: [
      { label: 'HYDRAULIC CRITERIA', value: 'Hazen-Williams Friction Matrix' },
      { label: 'SERVICE STANDARD', value: 'CPHEEO Public Health Benchmark' }
    ]
  },
  {
    id: 'topographical-survey',
    number: '08',
    headline: 'Land Survey & Mapping',
    category: 'SURVEY & MEASUREMENT',
    shortDescription:
      'Complete land measurement for your plot — including modern drone (UAV) aerial survey, GPS mapping, and contour plans for house or building approval.',
    metadata: ['DRONE (UAV) SURVEY', 'GPS MAPPING', 'CONTOUR PLANS', 'PLOT MEASUREMENT'],
    technicalTag: 'DRONE + GPS · ACCURATE TO CENTIMETER',
    route: '/services/topographical-survey',
    imageSrc: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Drone conducting aerial land survey over a development plot',
    caption: 'Drone Aerial Survey · GPS Plot Mapping & Contour Plans',
    annotations: [
      { label: 'DRONE SURVEY', value: 'UAV Aerial Mapping & Photos' },
      { label: 'ACCURACY', value: 'Centimeter-Level GPS Control' }
    ]
  },
  {
    id: 'geotechnical-investigation',
    number: '09',
    headline: 'Geotechnical Investigation',
    category: 'SUBSURFACE FOUNDATION AUDIT',
    shortDescription:
      'Subsurface strata drilling, Standard Penetration Testing (SPT), rock-socketing verification in metamorphic schist, safe soil bearing capacity (SBC) computation, and chartered foundation audits.',
    metadata: ['IS 1892', 'IS 2131 (SPT)', 'SBC COMPUTATION', 'CHARTERED FOUNDATION AUDIT'],
    technicalTag: 'IS 1892 · CHARTERED VALUER (FIV/CE)',
    route: '/services/geotechnical-consultancy',
    imageSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Geotechnical stratigraphy analysis, technical blueprints, and engineering verification',
    caption: 'Foundation Stratigraphy Borehole Logging · Safe Soil Bearing Capacity (SBC) Validation',
    annotations: [
      { label: 'CORE TEST', value: 'IS 2131 Standard Penetration Test' },
      { label: 'PRINCIPAL AUDITOR', value: 'Er. Sudhir Soni, Chartered Engineer' }
    ]
  },
  {
    id: 'township-planning',
    number: '10',
    headline: 'Township Planning',
    category: 'URBAN MASTER PLANNING',
    shortDescription:
      'Macro urban zoning, arterial circulation hierarchy, environmental buffers, and statutory layout approvals synchronized with UDPFI guidelines, Ajmer Development Authority (ADA), and state bylaws.',
    metadata: ['UDPFI GUIDELINES', 'ADA SANCTIONS', 'ARTERIAL HIERARCHY', 'LAND USE ZONING'],
    technicalTag: 'UDPFI GUIDELINES · STATUTORY MUNICIPAL CLEARANCE',
    route: '/services/planning',
    imageSrc: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Aerial urban masterplan and geometric civic arterial planning layout',
    caption: 'Satellite Township Masterplan · Macro Arterial Hierarchy & Green Corridor Buffers',
    annotations: [
      { label: 'CIRCULATION RATIO', value: 'Hierarchical 24m/18m/12m Grid' },
      { label: 'REGULATORY SCHEME', value: 'ADA & JDA Bylaw Synchronized' }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    slug: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Comprehensive architectural concepts, working drawings, and elevation designs grounded in Rajasthan’s climate.',
    fullDescription: 'From high-end residential estates to institutional campuses, we blend vernacular courtyard wisdom with modern structural purity. Our architectural service spans conceptual sketches, sanction blueprints, 3D visualizations, and detail-rich working drawings.',
    deliverables: [
      'Site Layout & Cardinal Orientation Analysis',
      '2D Working Blueprints & Elevation Details',
      'Photorealistic 3D Visualizations & Walkthroughs',
      'Statutory Municipal Sanction Drawings'
    ],
    processHighlights: [
      'In-depth client brief and lifestyle alignment',
      'Solar radiation and shadow study for thermal comfort',
      'Continuous review during foundation and framing stages'
    ],
    iconName: 'Compass',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per layout package',
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    packageId: 'basic-residential-package'
  },
  {
    slug: 'residential-architecture',
    title: 'Residential Architecture',
    shortDescription: 'Custom residences, family villas, and multi-generational homes tailored to Rajasthan’s climate.',
    fullDescription: 'We design bespoke residences that prioritize thermal comfort, natural cross-ventilation, and intimate family privacy. By reinterpreting courtyards, shaded verandas, and clean contemporary lines, each residence becomes a tranquil sanctuary.',
    deliverables: [
      'Bespoke Villa & Bungalow Blueprints',
      'Thermal Performance & Cross-Ventilation Planning',
      'Courtyard & Private Garden Integration',
      'Complete Working & Construction Details'
    ],
    processHighlights: [
      'Family lifestyle and generational zoning workshops',
      'Micro-climate and shading analysis',
      'Coordination with local masonry and stone craftsmen'
    ],
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per residence blueprint',
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    packageId: 'complete-house-package'
  },
  {
    slug: 'commercial-architecture',
    title: 'Commercial Architecture',
    shortDescription: 'High-visibility corporate offices, retail hubs, and commercial centers built for operational efficiency.',
    fullDescription: 'Commercial structures require bold street presence, fluid customer ingress, and flexible structural spans. Design Plus delivers commercial architecture engineered for maximum return on square footage while honoring civic aesthetics.',
    deliverables: [
      'High-Density Floor Spans & Column Grids',
      'Pedestrian & Vehicular Circulation Systems',
      'Commercial Facade Engineering & Signage Integration',
      'Safety, Fire & Local Authority Byelaw Compliance'
    ],
    processHighlights: [
      'Footfall and customer pathway modeling',
      'Large-span structural coordination',
      'Energy efficiency and HVAC integration'
    ],
    iconName: 'Building2',
    heroImage: '/images/services/commercial-architecture.webp',
    purchaseEnabled: false,
    pricingLabel: 'Custom Technical Appraisal',
    ctaLabel: 'Request a Proposal',
    secondaryCtaLabel: 'Discuss Project'
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Refined residential and commercial architectural interiors integrating bespoke joinery, tactile regional materiality, and calibrated ambient illumination.',
    fullDescription: 'We design interior spaces as the seamless, tactile continuation of the architectural volume. From luxury private residences and penthouse apartments to high-end corporate offices and boutique retail spaces, our studio directs spatial planning, ergonomic circulation, bespoke timber joinery, flamed granite and natural sandstone finishes, acoustic plaster ceilings, and glare-free 2700K reflected ceiling illumination. Every interior environment is crafted to balance enduring calm with functional longevity.',
    deliverables: [
      'Reflected Ceiling Plans (RCP) & 2700K Architectural Lighting Schemes',
      'Custom Millwork, Joinery & Bespoke Cabinetry Working Drawings',
      'Material Palette Schedules: Natural Stone, Solid Teak & Textured Plasters',
      'Luxury Modular Kitchen, Vanity & Bath Plumbing Fixture Details',
      'Residential & Commercial Spatial Layouts with Furniture Clearance Grids'
    ],
    processHighlights: [
      'Physical material moodboards, stone slabs, and tactile sample curation',
      'Lux level lighting calculations and ambient task-light zoning',
      'On-site joinery mockups, veneer matching, and finish milestone audits'
    ],
    iconName: 'LayoutGrid',
    heroImage: '/images/services/interior-design.webp',
    imageSrc: '/images/services/interior-design.webp',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per room / zone',
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Discuss with an Architect',
    packageId: 'renovation-layout-consultation'
  },
  {
    slug: 'structural-design',
    title: 'Chartered Structural Engineering',
    shortDescription: 'IS Code-compliant framing, foundation engineering, and seismic resilience verified by Er. Sudhir Soni.',
    fullDescription: 'Directed by Chartered Engineer Er. Sudhir Soni (M.E. Structure, FIV), our structural practice guarantees that your building is mathematically robust, economically optimized for steel and concrete, and compliant with all Indian seismic standards.',
    deliverables: [
      'STAAD.Pro & ETABS 3D Finite Element Analysis',
      'IS 456 & IS 1893:2016 Compliant Reinforcement Details',
      'Foundation Design tailored to SBC Soil Tests',
      'Formal Structural Stability Certificate for Authorities'
    ],
    processHighlights: [
      'Dead, live, wind, and earthquake load combinations',
      'Optimization to prevent over-reinforcement and honeycombing',
      'Site bar-bending schedule inspection prior to casting'
    ],
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per structural audit / layout',
    ctaLabel: 'Buy Now',
    secondaryCtaLabel: 'Speak with Er. Sudhir Soni',
    packageId: 'structural-stability-audit'
  },
  {
    slug: 'infrastructure',
    title: 'Civil & Transport Infrastructure',
    shortDescription: 'Highways, arterial roads, bridges, and grade separators engineered to MoRTH and IRC standards.',
    fullDescription: 'Our infrastructure division undertakes transportation engineering for state agencies, developers, and municipal corporations. We handle geometric alignment, traffic census projections, and pavement design for heavy axle loads.',
    deliverables: [
      'MoRTH Compliant Pavement Cross-Sections',
      'Traffic Volume Capacity & Intersection Design',
      'Stormwater Highway Drainage & Culvert Detailing',
      'Bridge & Overpass Structural Verification'
    ],
    processHighlights: [
      'Axle load and traffic volume simulation',
      'Geotechnical subgrade characterization',
      'Drainage catchment analysis and culvert sizing'
    ],
    iconName: 'Building2',
    heroImage: '/images/services/highway-engineering.webp',
    purchaseEnabled: false,
    pricingLabel: 'Tender & Technical RFP',
    ctaLabel: 'Request Infrastructure Brief',
    secondaryCtaLabel: 'Consult Engineering Team'
  },
  {
    slug: 'bridges',
    title: 'Bridges & Flyovers',
    shortDescription: 'Prestressed concrete box girders, continuous viaducts, and ROBs compliant with IRC:112 and IRC:6 standards.',
    fullDescription: 'Heavy civil infrastructure practice specializing in elevated road crossings, grade separators, and railway over-bridges. Comprehensive superstructure and substructure analysis under IRC Class 70R loading conditions.',
    deliverables: [
      'General Arrangement Drawings (GAD)',
      'STAAD/MIDAS Structural Modeling & Analysis Report',
      'Bar Bending Schedules (BBS) for Pier Caps & Decks',
      'POT-PTFE Bearing & Expansion Joint Specifications'
    ],
    processHighlights: [
      'IRC Class 70R tracked and wheeled dynamic simulation',
      'Deep foundation pile-group scour depth calculations',
      'Seismic ducting verification under IRC:SP:114'
    ],
    iconName: 'Layers',
    heroImage: '/images/services/bridges-flyovers.webp',
    purchaseEnabled: false,
    pricingLabel: 'Infrastructure Commission',
    ctaLabel: 'Inquire Bridge Scope',
    secondaryCtaLabel: 'Speak to Principal'
  },
  {
    slug: 'hydraulics',
    title: 'Dams, Weirs & Irrigation Canals',
    shortDescription: 'Mass concrete gravity weirs, cross-drainage aqueducts, and watershed reservoirs compliant with CWC and IS 6512.',
    fullDescription: 'Water resources engineering customized for semi-arid catchment basins. Catchment rainfall runoff modeling, ogee spillway profiling, hydraulic jump stilling basins, and structural stability against sliding and overturning.',
    deliverables: [
      'Catchment Inflow & Flood Routing Calculations',
      'Dam Stability Analysis (Normal & Extreme Load Cases)',
      'Canal Hydraulic Profiles & Longitudinal Sections',
      'Seepage Cutoff & Grouting Blueprints'
    ],
    processHighlights: [
      'Central Water Commission (CWC) guideline adherence',
      'Sediment transport and silt accumulation modeling',
      'Downstream energy dissipator hydraulic design'
    ],
    iconName: 'Compass',
    heroImage: '/images/services/dams-canals.webp',
    purchaseEnabled: false,
    pricingLabel: 'Hydraulic Consulting',
    ctaLabel: 'Request Hydraulic Assessment',
    secondaryCtaLabel: 'Consult Principals'
  },
  {
    slug: 'water-sewerage',
    title: 'Water Supply & Sewerage Networks',
    shortDescription: 'Urban hydraulic network grids, pumping stations, and gravity sewers designed under CPHEEO manuals.',
    fullDescription: 'Public health and municipal engineering delivering drinking water networks, overhead service reservoirs (OHSR), and gravity sewage reticulation across urban and industrial masterplans.',
    deliverables: [
      'EPANET Hydraulic Network Simulation',
      'OHSR & Sump Reinforced Concrete Blueprints',
      'Gravity Sewerage Profiles & Invert Levels',
      'Pumping Machinery Head & Power Calculation'
    ],
    processHighlights: [
      'Peak flow velocity balancing to prevent sedimentation',
      'Residual terminal pressure guarantee at critical nodes',
      'CPHEEO manual compliance verification'
    ],
    iconName: 'ShieldCheck',
    heroImage: '/images/services/water-sewerage.webp',
    purchaseEnabled: false,
    pricingLabel: 'Municipal Infrastructure',
    ctaLabel: 'Request Public Health Scope',
    secondaryCtaLabel: 'Discuss Project'
  },
  {
    slug: 'topographical-survey',
    title: 'Topographical Survey & Geodesy',
    shortDescription: 'High-precision Total Station traverse and DGPS RTK geodetic mapping for boundary demarcation.',
    fullDescription: 'Precision surveying division delivering digital elevation models (DEM), contour mapping, and statutory revenue coordinate transfer for town planning, highways, and private campuses.',
    deliverables: [
      '0.5m Interval Contour Elevation Maps',
      'DGPS RTK Geodetic Control Benchmarks',
      'Total Station Digital Terrain Model (DTM)',
      'Cut-and-Fill Volumetric Earthwork Calculation'
    ],
    processHighlights: [
      'Survey of India GTS benchmark synchronization',
      'Sub-centimeter boundary closure tolerance',
      'GIS shapefile export for statutory master plans'
    ],
    iconName: 'Compass',
    heroImage: '/images/services/topographical-survey.webp',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per plot survey',
    ctaLabel: 'Book Survey',
    secondaryCtaLabel: 'Discuss Coordinates',
    packageId: 'topographical-survey-package'
  },
  {
    slug: 'geotechnical-consultancy',
    title: 'Geotechnical Investigation & SBC',
    shortDescription: 'Core borehole drilling, Standard Penetration Testing (SPT), and Chartered SBC certification.',
    fullDescription: 'Subsurface soil mechanics investigation to determine bearing capacity and seismic liquefaction potential. Directed by Er. Sudhir Soni (Chartered Engineer & FIV Fellow).',
    deliverables: [
      'Subsurface Stratigraphy & Borehole Logs',
      'Safe Bearing Capacity (SBC) Chartered Certificate',
      'Laboratory Soil Grain Size & Atterberg Limits',
      'Recommended Foundation Type (Raft / Isolated / Pile)'
    ],
    processHighlights: [
      'IS 1892 & IS 2131 drilling protocols',
      'Water table depth monitoring and chemical aggressiveness tests',
      'Differential settlement risk mitigation'
    ],
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    purchaseEnabled: true,
    pricingLabel: 'Starting from ₹X,XXX',
    pricingUnit: 'per soil testing point',
    ctaLabel: 'Request Soil Test',
    secondaryCtaLabel: 'Speak to Er. Sudhir Soni',
    packageId: 'soil-test-package'
  },
  {
    slug: 'planning',
    title: 'Township & Urban Master Planning',
    shortDescription: 'Macro land-use zoning, arterial roadway hierarchies, and statutory ADA/UIT municipal layout clearances.',
    fullDescription: 'Master planning practice structuring sustainable communities. Circulation hierarchies, public open spaces, utility conduits, and zoning approvals compliant with UDPFI guidelines.',
    deliverables: [
      'Statutory Master Layout Plan with Geo-Coordinates',
      'Circulation Hierarchy & Road Cross-Sections',
      'Utility Infrastructure Reticulation Schemes',
      'Ajmer Development Authority (ADA) Compliance Filing'
    ],
    processHighlights: [
      'State town planning byelaw alignment',
      'Open space and public amenity ratio optimization',
      'Phased residential and commercial expansion roadmap'
    ],
    iconName: 'Building2',
    heroImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85',
    purchaseEnabled: false,
    pricingLabel: 'Township Advisory',
    ctaLabel: 'Request Planning Brief',
    secondaryCtaLabel: 'Consult Town Planners'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
