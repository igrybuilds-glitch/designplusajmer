import { TeamMember, Project, Service, LocationInfo, BlogPost, ProcessStep, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Design Plus',
  website: 'designplusajmer.in',
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
  socials: {
    justdial: 'https://play.google.com/store/apps/details?id=com.justdial.search&hl=en_IN&gl=US',
    facebook: 'https://www.facebook.com/share/19cizaeGBa/',
    instagram: 'https://www.instagram.com/architectsdesignplus/'
  }
};

export const LEADERSHIP: TeamMember = {
  name: 'Er. Sudhir Soni',
  role: 'Founder, CEO & Principal Structural Engineer',
  qualification: 'M.E. (Structure) | M.I.E. | FIV | Chartered Engineer',
  bio: 'With extensive practice in advanced structural analysis and civil engineering, Er. Sudhir Soni leads Design Plus as a Chartered Engineer and Fellow of the Institution of Valuers (FIV). His leadership fuses empirical structural safety with functional architectural planning.',
  specialization: 'Structural Analysis, Earthquake-Resistant Design, Valuation & Institutional Engineering'
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ar. Vipul Verma',
    role: 'Principal Architect',
    qualification: 'B.Arch | M.H.S. (Belgium)',
    bio: 'Educated in contemporary architectural theory and human settlement dynamics with postgraduate qualifications from Belgium. Specializes in climate-responsive residential layouts, daylight orchestration, and vernacular material integration.',
    specialization: 'Architectural Design, Contextual Planning & Spatial Philosophy'
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
  }
];

export const SERVICES: Service[] = [
  {
    slug: 'architectural-design',
    title: 'Architectural Design',
    shortDescription: 'Comprehensive spatial planning from conceptual sketches to complete execution drawings.',
    fullDescription: 'Our architectural practice treats each project as a site-specific dialogue between environmental orientation, user lifestyle, and material tactility. From zoning to facade rhythms, our team synthesizes spatial poetry with technical buildability.',
    deliverables: [
      'Comprehensive Master Layouts & Site Analysis',
      'Context-driven Massing & Spatial Schemes',
      'Regulatory & Municipal Approval Documentation',
      'Material Specifications & Tender Packages'
    ],
    processHighlights: [
      'Site topography and sun-path mapping',
      'Iterative schematic space-planning',
      'Integration with structural and MEP grids'
    ],
    iconName: 'Compass',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
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
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
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
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Refined architectural interiors focused on bespoke joinery, acoustic balance, and tactile materiality.',
    fullDescription: 'We believe interior spaces are the tactile continuation of the architectural envelope. We curate custom woodwork, architectural lighting, neutral stone palettes, and ergonomic proportions that evoke enduring calm.',
    deliverables: [
      'Reflected Ceiling & Architectural Lighting Plans',
      'Custom Millwork, Cabinetry & Joinery Details',
      'Finishes, Natural Stone & Palette Schedules',
      'Bathroom, Kitchen & Service Detailing'
    ],
    processHighlights: [
      'Material mood boards and physical sample curation',
      'Lighting lux calculations and ambient mood zoning',
      'On-site joinery mockups and precision alignment'
    ],
    iconName: 'LayoutGrid',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: '2d-floor-planning',
    title: '2D Floor Planning',
    shortDescription: 'Precision architectural layouts optimizing circulation, Vastu compliance, and functional ergonomics.',
    fullDescription: 'A flawless floor plan is the invisible spine of every exceptional building. We produce clear, millimeter-accurate 2D drawings with intentional room flow, zero dead corridors, and pragmatic furniture clearances.',
    deliverables: [
      'Dimensioned Floor Plans with Furniture Layouts',
      'Circulation Diagrams & Functional Zoning',
      'Vastu Directional Optimization',
      'Detailed Wall, Door & Window Schedules'
    ],
    processHighlights: [
      'Spatial adjacency matrix formulation',
      'Dimensional checking against structural columns',
      'User movement simulation and ergonomics verification'
    ],
    iconName: 'PenTool',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: '3d-elevation-design',
    title: '3D Elevation Design',
    shortDescription: 'Photorealistic architectural visualizations showcasing texture, shadow play, and exterior geometry.',
    fullDescription: 'Before ground is broken, our 3D visualization studio models accurate real-world daylighting, authentic stone claddings, metal screens, and louvers. This gives clients absolute clarity and confidence in their building’s final exterior expression.',
    deliverables: [
      'High-Resolution Day & Night Architectural Renders',
      'Facade Materiality, Texture & Color Selection',
      'Parapet, Balcony & Screening Detailed Profiles',
      'Exterior Architectural Lighting Visuals'
    ],
    processHighlights: [
      '3D volumetric digital modeling',
      'Physical sun-position shadow calculation',
      'Material calibration with local stone and paints'
    ],
    iconName: 'Box',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'structural-design',
    title: 'Structural Design',
    shortDescription: 'Chartered engineering calculations, RCC detailing, and earthquake-resistant framing systems.',
    fullDescription: 'Under the direct supervision of Chartered Engineer Er. Sudhir Soni, our structural engineering department produces calculations and reinforcement drawings that ensure extreme longevity, seismic resilience, and material economy.',
    deliverables: [
      'Chartered Engineer Structural Stability Certificates',
      'RCC Column, Beam, Footing & Slab Schedules',
      'Seismic Zone III/IV Structural Detailing',
      'Steel Structure Analysis & Connection Details'
    ],
    processHighlights: [
      'Finite element computerized structural analysis',
      'Soil bearing capacity and foundation sizing',
      'Optimization of steel-to-concrete ratios'
    ],
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80'
  }
];

export { RAW_PROJECTS as PROJECTS } from './projectsData';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Requirements, Site Study & Regulatory Check',
    description: 'Every project begins on the soil itself. We assess site dimensions, orientation, neighboring structures, sun-path, wind vectors, and municipal zoning byelaws to formulate the strategic project brief.',
    deliverables: ['Site Topography Evaluation', 'Client Lifestyle Briefing', 'Zoning & Byelaw Clearance Matrix']
  },
  {
    number: '02',
    title: 'PLAN',
    subtitle: 'Spatial Ergonomics & 2D Floor Planning',
    description: 'We draft optimized 2D space layouts that reconcile functional room adjacencies with directional orientations (including Vastu alignment). Every square foot is sculpted to eliminate wasted circulation.',
    deliverables: ['Dimensioned 2D Master Floor Plans', 'Furniture & Clearance Layouts', 'Circulation Efficiency Diagrams']
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Architectural Volumes & Elevations',
    description: 'Translating planar diagrams into three-dimensional architecture. We compose volume, rhythm, window openings, overhangs, and materials to express an enduring contemporary identity.',
    deliverables: ['Architectural Cross-Sections', 'Exterior Facade Concepts', 'Fenestration & Shading Strategy']
  },
  {
    number: '04',
    title: 'VISUALIZE',
    subtitle: 'Photorealistic 3D Renders & Material Proofing',
    description: 'We generate accurate 3D exterior and interior visualizations under daylight and twilight settings. This stage gives our clients absolute spatial confidence before construction commencement.',
    deliverables: ['High-Resolution 3D Renders', 'Material & Stone Palette Samples', 'Exterior Lighting Simulations']
  },
  {
    number: '05',
    title: 'DEVELOP',
    subtitle: 'Chartered Structural Engineering & Working Drawings',
    description: 'Led by Er. Sudhir Soni, our engineering team executes rigorous computer modeling for columns, beams, footings, and electrical/MEP systems, compiling standard execution drawing sets.',
    deliverables: ['Chartered Engineer Structural Calculations', 'RCC Reinforcement Schedules', 'Complete Architectural Working Drawings']
  },
  {
    number: '06',
    title: 'COORDINATE',
    subtitle: 'Technical Clarification & Site Alignment',
    description: 'We provide ongoing technical drawing clarifications and critical stage milestone reviews to ensure that what was drafted on paper is built with structural fidelity on site.',
    deliverables: ['Drawing Revision Packages', 'Structural Milestone Verifications', 'Client Progress Reviews']
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80',
    link: '/projects/structural'
  }
];
