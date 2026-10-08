import { TeamMember, LocationInfo, ProcessStep, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Design Plus',
  website: 'www.designplusajmer.co.in',
  tagline: 'Architecture & Structural Engineering Practice',
  subTagline: 'Chartered structural engineering rigor integrated with refined architectural spatial design.',
  city: 'Ajmer',
  state: 'Rajasthan',
  country: 'India',
  address: 'Ajmer, Rajasthan, India',
  email: 'designplusajmer@gmail.com',
  phones: [
    { display: '+91 79764 53090', raw: '7976453090' },
    { display: '+91 94614 65610', raw: '9461465610' }
  ],
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Designplus+Architects+and+Structural+Consultants+Panchsheel+Nagar+Ajmer+Rajasthan',
  socials: {
    justdial: 'https://play.google.com/store/apps/details?id=com.justdial.search&hl=en_IN&gl=US',
    facebook: 'https://www.facebook.com/share/19cizaeGBa/',
    instagram: 'https://www.instagram.com/architectsdesignplus/'
  }
};

export const LEADERSHIP: TeamMember = {
  name: 'Er. Sudhir Soni',
  role: 'Founder, CEO & Principal Structural Engineer',
  qualification: 'M.E. (Structural Engineering) | M.I.E. | FIV | Chartered Engineer',
  bio: 'With over three decades of engineering leadership, Er. Sudhir Soni has pioneered structural design across Rajasthan. As a Chartered Engineer and Approved Valuer (FIV), he ensures rigorous structural integrity, stability calculations, and authority compliances for multi-story residential, commercial, and infrastructure developments.',
  specialization: 'High-Rise RCC Structures, Seismic Design, Structural Audits & Chartered Certification'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ar. Vipul Verma',
    role: 'Principal Architect',
    qualification: 'B.Arch, MHS (Belgium)',
    bio: 'Studied architecture in Belgium. Designs homes and buildings suited to Rajasthan\'s climate — good light, natural airflow, and local materials.',
    specialization: 'Home Design, Building Planning & Interiors'
  },
  {
    name: 'Er. Ankit Soni',
    role: 'Senior Structural Engineer',
    qualification: 'M.Tech. (Structure)',
    bio: 'Focuses on high-efficiency reinforced concrete and steel frame modeling, foundation engineering under complex soil conditions, and structural optimization for residential and commercial multi-story builds.',
    specialization: 'RCC Framed Structures, Seismic Detailing & Structural Drawings'
  },
  {
    name: 'Er. Shikha Soni',
    role: 'Electrical & Building Systems Engineer',
    qualification: 'M.Tech. (Electrical Power System)',
    bio: 'Oversees building service engineering, energy-efficient distribution layouts, load balance matrices, and integrated MEP coordination for high-end villas and commercial complexes.',
    specialization: 'Electrical Power Networks, Sustainable Energy Routing & Smart Automation'
  },
  {
    name: 'Er. Amit Soni',
    role: 'Urban & Spatial Infrastructure Planner',
    qualification: 'M.Plan',
    bio: 'Provides urban design expertise, master planning, byelaw alignment, zoning compliance, and macro-spatial circulation strategies for private estates and institutional developments.',
    specialization: 'Urban Master Planning, Zoning Byelaws & Infrastructure Coordination'
  },
  {
    name: 'Kishan Verma',
    role: 'Consultant — Pumping Systems, Hydraulic Design & Engineering',
    qualification: 'Member, Ajmer Engineers Institute, Ajmer',
    bio: 'Consulting specialist for pumping systems, hydraulic design and engineering — water supply networks, pump selection and system hydraulics for residential, commercial and institutional projects.',
    specialization: 'Pumping Systems, Hydraulic Design & Engineering'
  }
];

// Re-export canonical services from dedicated source of truth
export { SERVICES, type Service, EDITORIAL_SERVICES, type EditorialServiceItem, getServiceBySlug } from './services';

// Re-export canonical projects from dedicated source of truth
export { RAW_PROJECTS as PROJECTS } from './projectsData';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Reconnaissance, Topography & Zoning Due Diligence',
    description: 'Every project begins on the soil itself. We assess site dimensions, orientation, neighboring structures, sun-path, wind vectors, geotechnical conditions, and municipal zoning byelaws to formulate the strategic project brief.',
    deliverables: ['Total Station Site Topography', 'Client Requirement Briefing', 'Zoning & Municipal Byelaw Clearance Matrix']
  },
  {
    number: '02',
    title: 'CONCEPT',
    subtitle: 'Spatial Ideation, Climate Orientation & Massing',
    description: 'We draft optimized space layouts that reconcile functional room adjacencies with solar directional orientations (including Vastu alignment). Volumetric massing models balance thermal comfort with spatial luxury.',
    deliverables: ['Conceptual Spatial Layouts', 'Sun-Path & Shading Diagrams', 'Preliminary Architectural Massing']
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Architectural Volumes, Elevations & Tactile Materiality',
    description: 'Translating planar diagrams into enduring three-dimensional architecture. We compose volume, rhythm, window openings, overhangs, and authentic stone finishes to express a timeless contemporary identity.',
    deliverables: ['Detailed 2D Floor Plans', '3D Exterior Elevation Visuals', 'Fenestration, Joinery & Material Proofing']
  },
  {
    number: '04',
    title: 'ENGINEERING',
    subtitle: 'Chartered Structural Mechanics & Seismic Physics',
    description: 'Led by Er. Sudhir Soni (Chartered Engineer, M.E. Structure), our engineering team executes rigorous computer finite element modeling for columns, beams, post-tensioned spans, foundations, and MEP service coordination.',
    deliverables: ['Chartered Structural Calculations (IS 456 / IS 1893)', 'RCC Column & Beam Reinforcement Schedules', 'Foundation & Soil-Structure Interaction Design']
  },
  {
    number: '05',
    title: 'DOCUMENTATION',
    subtitle: 'Municipal Sanction Drawings & Statutory Working Sets',
    description: 'Compiling comprehensive working drawing packages, bar bending schedules, electrical networks, and official municipal sanction files conforming to Ajmer Development Authority (ADA) and PWD standards.',
    deliverables: ['Official ADA Sanction Blueprints', 'Bar Bending Schedules (BBS)', 'Comprehensive On-Site Execution Package']
  },
  {
    number: '06',
    title: 'EXECUTION / CONSULTANCY',
    subtitle: 'On-Site Structural Supervision & Milestone Verification',
    description: 'We provide ongoing technical drawing clarifications, reinforcement inspection audits prior to concrete casting, and Chartered Engineer milestone certifications to ensure absolute fidelity between plan and built reality.',
    deliverables: ['Pre-Pour Rebar Inspection Reports', 'Chartered Structural Stability Certificates', 'Project Commissioning & As-Built Records']
  }
];

export const LOCATIONS_SERVED: LocationInfo[] = [
  {
    slug: 'ajmer',
    city: 'Ajmer',
    state: 'Rajasthan',
    tagline: 'Studio Headquarters & Primary Practice Hub',
    description: 'As our founding home, Design Plus has shaped residences, commercial plazas, and institutional structures across Panchsheel Nagar, Vaishali Nagar, Ana Sagar Circular Road, and Civil Lines.',
    architecturalContext: 'Ajmer features a dynamic topography flanked by the Aravalli range and Ana Sagar Lake. Architectural projects require meticulous solar orientation, stone-craft integration, and compliance with the Ajmer Development Authority (ADA).',
    localRegulations: 'Full mastery of ADA municipal building byelaws, setback requirements, ground coverage limits, and height restrictions across residential and commercial zones.',
    serviceHighlights: [
      'Comprehensive Architectural Planning & Approval Drawings',
      'Chartered Structural Stability Certificates for ADA Submissions',
      'Custom Luxury Villas in Panchsheel & Vaishali Nagar',
      'Commercial Complex Design along Circular & Jaipur Road'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'jaipur',
    city: 'Jaipur',
    state: 'Rajasthan',
    tagline: 'Capital Region Architecture & Contemporary Practice',
    description: 'Our studio delivers refined residential architecture, corporate workspaces, and structural engineering consultancies for forward-thinking clients in Jaipur and surrounding growth corridors.',
    architecturalContext: 'Jaipur blends pink stone heritage with contemporary suburban expansion in Jagatpura, Mansarovar, and C-Scheme. Our work balances modern minimalist lines with regional masonry.',
    localRegulations: 'Familiarity with JDA (Jaipur Development Authority) norms, FAR provisions, fire NOC structural clearances, and multi-story seismic standards.',
    serviceHighlights: [
      'Modern Residential Villas & High-End Interior Architecture',
      'Structural Engineering for Multi-Story RCC Frames',
      'Corporate Office & Retail Spatial Planning',
      'Energy-Efficient Facade Design for Rajasthan Summers'
    ],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'pushkar',
    city: 'Pushkar',
    state: 'Rajasthan',
    tagline: 'Courtyard Architecture & Heritage-Sensitive Designs',
    description: 'Located just 14 km from our Ajmer studio, Pushkar provides a unique canvas for desert stone courtyard homes, boutique spiritual retreats, and ecologically sensitive architecture.',
    architecturalContext: 'Pushkar requires deep sensitivity toward vernacular materials: hand-chiseled sandstone, limewash, natural stone copings, and inward-looking courtyards that temper the desert sun.',
    localRegulations: 'Conservation-conscious planning respecting pilgrimage routes, water-body buffers, and localized municipal bylaws.',
    serviceHighlights: [
      'Boutique Resort & Heritage-Context Villa Architecture',
      'Passive Thermal Design & Shaded Courtyard Planning',
      'Hybrid Stone Masonry & RCC Structural Solutions',
      'Rainwater Harvesting & Sustainable Waste Systems'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'udaipur',
    city: 'Udaipur',
    state: 'Rajasthan',
    tagline: 'Topographic Lake & Hillside Architecture',
    description: 'For clients in the City of Lakes, we undertake hillside residential designs and private holiday homes that capitalize on steep contours and lake vistas.',
    architecturalContext: 'Complex sloping terrain, rocky strata, and lakeside vistas demand specialized cantilever structural engineering and stepped building massing.',
    localRegulations: 'UIT (Urban Improvement Trust) Udaipur guidelines, lake catchment zone setbacks, and contour retaining wall compliance.',
    serviceHighlights: [
      'Contour-Stepped Residential Villas & Cantilever Decks',
      'Specialized Slope Foundation & Retaining Wall Engineering',
      'Lakeview Window Framing & Shading Systems',
      'Interior Architecture with Indigenous Marble & Wood'
    ],
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'beawar',
    city: 'Beawar',
    state: 'Rajasthan',
    tagline: 'Industrial & Heritage Commercial Architecture Corridor',
    description: 'As a premier architect in Beawar, Design Plus delivers modern residential villa planning, commercial textile and cement showroom complexes, and chartered structural engineering along the vital Ajmer-Udaipur growth corridor (NH-58).',
    architecturalContext: 'Beawar combines historic colonial-era trading avenues with dense commercial markets and sprawling industrial estates. Residential plots often feature deep linear urban profiles requiring central light courtyards, thermal masonry against semi-arid heat, and robust column-free commercial spans.',
    localRegulations: 'Expertise in Beawar Municipal Council (Nagar Parishad) building bylaws, commercial FAR limits, industrial shed clearances, fire NOC norms, and structural stability certifications under IS 456.',
    serviceHighlights: [
      'Bespoke Residential Villa Planning & 3D Elevations in Beawar',
      'Chartered Structural Stability Certificates for Nagar Parishad Approvals',
      'Commercial Market Complexes & Industrial Warehouse Design',
      'Vastu-Compliant Floor Plans for Dense Commercial & Urban Plots'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kishangarh',
    city: 'Kishangarh',
    state: 'Rajasthan',
    tagline: 'India’s Marble Capital & Contemporary Luxury Villa Practice',
    description: 'Leading architect in Kishangarh specializing in luxury marble merchant kothis, contemporary stone facades, and industrial marble processing factory layouts along the Jaipur-Ajmer express highway.',
    architecturalContext: 'As Asia’s premier marble trading hub, Kishangarh architecture showcases breathtaking indigenous stone, Makrana and imported marble cladding, high-ceilinged double-height villas, and expansive industrial pre-engineered steel buildings (PEB) on flat alluvial terrain.',
    localRegulations: 'Full compliance with Kishangarh Development Authority (KDA / ADA extended jurisdiction), RIICO industrial zone regulations, heavy crane-girder structural clearances, and commercial setback guidelines.',
    serviceHighlights: [
      'Luxury Marble Villa & Kothi Architectural Design in Kishangarh',
      'Chartered Structural Engineering for Heavy Industrial & PEB Sheds',
      'Contemporary Stone Facade Cladding & Daylight Engineering',
      'Integrated 3D Elevations, Turnkey Interiors & Vastu Planning'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'kekri',
    city: 'Kekri',
    state: 'Rajasthan',
    tagline: 'Fast-Growing District Hub & Agricultural Agro-Hub Planning',
    description: 'Recognized architect in Kekri delivering modern residential house plans, agro-industrial facilities, institutional structures, and chartered structural engineering for families and entrepreneurs across the new district headquarters.',
    architecturalContext: 'As an elevated newly designated district headquarters, Kekri experiences rapid urban subdivision, agricultural mandi expansion, and expanding residential colonies. Buildings require climate-resilient foundation design for variable black cotton and loamy soils.',
    localRegulations: 'Coordination with Kekri District Municipal Administration (Nagar Palika), agricultural land-use conversion under Rajasthan Tenancy Act Section 90-A, and structural stability certifications.',
    serviceHighlights: [
      'Modern Residential House Planning & 3D Front Elevations in Kekri',
      'Agro-Processing Unit & Mandi Commercial Complex Architecture',
      'Specialized Foundation Engineering for Variable Agricultural Soils',
      'Chartered Structural Stability Certificates for Bank Loans & Approvals'
    ],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'nasirabad',
    city: 'Nasirabad',
    state: 'Rajasthan',
    tagline: 'Cantonment Heritage & Rural-Suburban Estate Architecture',
    description: 'Experienced architect in Nasirabad offering tailored residential house designs, cantonment-compliant building plans, farmhouse retreats, and chartered structural stability vetting throughout the historic cantonment and rural belt.',
    architecturalContext: 'Nasirabad features a historic cantonment precinct flanked by scenic semi-arid agricultural farmlands. Architectural work balances colonial bungalow heritage proportions, deep shaded verandahs, and contemporary reinforced concrete construction adapted to open winds.',
    localRegulations: 'Meticulous alignment with Nasirabad Cantonment Board (NCB) building regulations, strict security perimeter setbacks, height covenants, and ADA regional master plan guidelines.',
    serviceHighlights: [
      'Cantonment Board Compliant Residential & Commercial Blueprints',
      'Bespoke Farmhouse & Country Home Master Planning in Nasirabad',
      'Chartered Structural Stability Certificates Signed by Er. Sudhir Soni',
      'Passive Climate Shading, Deep Verandahs & Rainwater Harvesting'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
  }
];

export { BLOG_CATEGORIES, BLOG_ARTICLES, BLOG_ARTICLES as BLOG_POSTS, getBlogCategories, getBlogCategory, getBlogArticlesByCategory, getBlogArticle, getBlogArticleBySlug } from './blogData';

export const FAQS: FAQItem[] = [
  {
    category: 'Studio & Methodology',
    question: 'What makes Design Plus different from a standard drafting or architectural firm?',
    answer: 'Design Plus is uniquely co-led by a Chartered Structural Engineer (Er. Sudhir Soni, M.E. Structure, FIV) and a globally educated Principal Architect (Ar. Vipul Verma, M.H.S. Belgium). While conventional firms either focus purely on visual facades or dry engineering calculations, we synthesize both from day one. You receive breathtaking spatial design backed by mathematically certified structural durability.'
  },
  {
    category: 'Services & Scope',
    question: 'Do you provide services outside Ajmer?',
    answer: 'Yes. While our central studio is based in Ajmer, our portfolio spans key regions across Rajasthan including Pushkar, Jaipur, Kishangarh, and Udaipur. We handle site visits, municipal byelaw alignments, and digital project coordination across these locations.'
  },
  {
    category: 'Structural Engineering',
    question: 'Can you issue Chartered Engineer Structural Stability Certificates for municipal approvals?',
    answer: 'Yes. Er. Sudhir Soni is a certified Chartered Engineer, Member of the Institution of Engineers (M.I.E.), and Fellow of the Institution of Valuers (FIV). We provide official structural stability certificates, vetting reports, and soil-matched RCC design drawings required by the Ajmer Development Authority (ADA) and other regional municipal bodies.'
  },
  {
    category: 'Process & Timelines',
    question: 'What is the typical timeline for complete architectural and structural drawings for a residence?',
    answer: 'A comprehensive residential design package—spanning 2D space planning, 3D exterior elevation modeling, working drawings, and complete Chartered structural reinforcement schedules—typically takes 3 to 6 weeks, depending on the scale and client feedback cycles.'
  },
  {
    category: 'Planning & Vastu',
    question: 'Do your 2D floor plans incorporate Vastu principles?',
    answer: 'Yes. We respect traditional directional and elemental Vastu orientations (such as kitchen placement in the Agni zone or master bedroom in the Nairutya corner) while integrating contemporary ergonomics, cross-ventilation, and modern spatial aesthetics.'
  },
  {
    category: 'Consultation',
    question: 'How do I initiate a consultation with Design Plus?',
    answer: 'You can call our studio directly at +91 79764 53090 or +91 94614 65610, email designplusajmer@gmail.com, or submit the consultation form on this website with your plot dimensions and project goals. We will schedule an initial review at our studio or on your site.'
  }
];

export const TYPOLOGIES = [
  {
    title: 'Residential Architecture',
    subtitle: 'Private Residences, Multi-Gen Homes & Urban Mansions',
    description: 'Tailored living environments engineered for family comfort, natural light, thermal resilience, and generational durability in Rajasthan.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '/projects/residential'
  },
  {
    title: 'Desert & Country Villas',
    subtitle: 'Courtyard Havens, Shaded Verandas & Regional Stone',
    description: 'Climate-responsive sanctuaries utilizing stone masonry, courtyard cross-ventilation, and expansive shaded outdoor living spaces.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    link: '/projects/residential'
  },
  {
    title: 'Commercial & Retail Centers',
    subtitle: 'High-Street Retail, Shopping Plazas & Mixed-Use Hubs',
    description: 'High-visibility facades with open structural spans that maximize usable commercial floor area, customer circulation, and asset return.',
    image: '/images/megamenu/retail-centers.webp',
    alt: 'High-street retail shopping plaza with glazed storefronts and evening illumination',
    link: '/projects/commercial'
  },
  {
    title: 'Corporate Offices & Workspaces',
    subtitle: 'Modern Head Offices, Executive Suites & Studios',
    description: 'Ergonomic, day-lit workspaces configured with flexible service distributions, acoustic attenuation, and professional architectural identity.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    link: '/projects/commercial'
  },
  {
    title: 'Interior Architecture',
    subtitle: 'Refined Living Spaces, Penthouse Upgrades & Millwork',
    description: 'Tactile, minimalist interior compositions unifying natural stone, bespoke joinery, flush architectural details, and layered warm lighting.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/projects/interiors'
  },
  {
    title: 'Chartered Structural Systems',
    subtitle: 'Heavy RCC Frames, Long-Span Portals & Retrofitting',
    description: 'Computer-modeled structural engineering, deep foundations, seismic reinforcement, and industrial portal framing certified by Chartered Engineers.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    link: '/projects/structural'
  }
];
