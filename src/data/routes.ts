export type RouteType = 
  | 'core' 
  | 'service' 
  | 'project-category' 
  | 'location' 
  | 'blog-hub' 
  | 'blog-category' 
  | 'contact';

export interface RouteDefinition {
  path: string;
  type: RouteType;
  title: string;
  primaryIntent: string;
  indexable: boolean;
  parent?: string;
  children?: string[];
}

export const PUBLIC_ROUTES: RouteDefinition[] = [
  // 01 Core Brand Pages
  {
    path: '/',
    type: 'core',
    title: 'Design Plus | Architecture & Chartered Structural Studio | Ajmer',
    primaryIntent: 'Brand Homepage, Chartered Structural Engineering & Architectural Practice Overview',
    indexable: true,
    children: ['/about', '/services', '/projects', '/locations', '/blog', '/contact']
  },
  {
    path: '/about',
    type: 'core',
    title: 'About Design Plus | Chartered Structural Engineers & Architects',
    primaryIntent: 'Studio Philosophy, Principal Credentials (Er. Sudhir Soni & Ar. Vipul Verma), Leadership Background',
    indexable: true,
    parent: '/'
  },

  // 02 Services Architecture
  {
    path: '/services',
    type: 'service',
    title: 'Architectural & Structural Engineering Services | Design Plus',
    primaryIntent: 'Comprehensive Discipline Overview & Service Hub',
    indexable: true,
    parent: '/',
    children: [
      '/services/architectural-design',
      '/services/residential-architecture',
      '/services/commercial-architecture',
      '/services/interior-design',
      '/services/2d-floor-planning',
      '/services/3d-elevation-design',
      '/services/structural-design'
    ]
  },
  {
    path: '/services/architectural-design',
    type: 'service',
    title: 'Architectural Design Services in Ajmer | Design Plus',
    primaryIntent: 'Bespoke Master Planning, Spatial Concepts & Architectural Consultation',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/residential-architecture',
    type: 'service',
    title: 'Residential Architecture in Ajmer & Rajasthan | Design Plus',
    primaryIntent: 'Luxury Villas, Haveli Courtyard Homes, Duplex Residences & Bungalows',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/commercial-architecture',
    type: 'service',
    title: 'Commercial Architecture & Complex Planning | Design Plus',
    primaryIntent: 'Multi-Tier Retail Centers, Corporate Office Plazas & Showrooms',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/interior-design',
    type: 'service',
    title: 'Interior Design & Spatial Architecture | Design Plus',
    primaryIntent: 'Minimalist Residential & Commercial Executive Interior Design',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/2d-floor-planning',
    type: 'service',
    title: '2D Floor Planning & Vastu Compliant Layouts | Design Plus',
    primaryIntent: 'Architectural Working Drawings, ADA Sanction Layouts & Circulation Plans',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/3d-elevation-design',
    type: 'service',
    title: '3D Elevation Design & Photorealistic Visualizations | Design Plus',
    primaryIntent: 'Exterior Facade Design, Day/Night Renders & Solar Shading Mockups',
    indexable: true,
    parent: '/services'
  },
  {
    path: '/services/structural-design',
    type: 'service',
    title: 'Chartered Structural Engineering & Stability Certification | Design Plus',
    primaryIntent: 'RCC & Steel Structural Calculations, Soil Load Analysis & NBC Vetting',
    indexable: true,
    parent: '/services'
  },

  // 03 Project Portfolio & Categories
  {
    path: '/projects',
    type: 'project-category',
    title: 'Architectural Portfolio & Case Studies | Design Plus',
    primaryIntent: 'Complete Project Archive, Built Commissions & Design Studies',
    indexable: true,
    parent: '/',
    children: [
      '/projects/residential',
      '/projects/commercial',
      '/projects/interior',
      '/projects/structural',
      '/projects/concept'
    ]
  },
  {
    path: '/projects/residential',
    type: 'project-category',
    title: 'Residential Architecture Projects | Design Plus',
    primaryIntent: 'Residential Villa and Courtyard House Case Studies',
    indexable: true,
    parent: '/projects'
  },
  {
    path: '/projects/commercial',
    type: 'project-category',
    title: 'Commercial Architecture Projects | Design Plus',
    primaryIntent: 'Commercial Complex, Corporate Office & Retail Pavilion Projects',
    indexable: true,
    parent: '/projects'
  },
  {
    path: '/projects/interior',
    type: 'project-category',
    title: 'Interior Architecture Projects | Design Plus',
    primaryIntent: 'Residential and Commercial Bespoke Interior Case Studies',
    indexable: true,
    parent: '/projects'
  },
  {
    path: '/projects/structural',
    type: 'project-category',
    title: 'Structural Engineering Projects | Design Plus',
    primaryIntent: 'High-Span Framing, Industrial Structural Steel & RCC Engineering Works',
    indexable: true,
    parent: '/projects'
  },
  {
    path: '/projects/concept',
    type: 'project-category',
    title: 'Conceptual Architecture & Design Studies | Design Plus',
    primaryIntent: 'Theoretical Architectural Prototypes & Sustainable Research Concepts',
    indexable: true,
    parent: '/projects'
  },

  // 04 Regional Service Locations
  {
    path: '/locations/ajmer',
    type: 'location',
    title: 'Architects & Structural Engineers in Ajmer | Design Plus',
    primaryIntent: 'Local Architectural & Structural Services in Ajmer (ADA Jurisdiction)',
    indexable: true,
    parent: '/'
  },
  {
    path: '/locations/jaipur',
    type: 'location',
    title: 'Architectural & Engineering Services in Jaipur | Design Plus',
    primaryIntent: 'Regional Architecture & Structural Design in Jaipur & Jaipur Road Corridor',
    indexable: true,
    parent: '/'
  },
  {
    path: '/locations/pushkar',
    type: 'location',
    title: 'Architects & Structural Engineers in Pushkar | Design Plus',
    primaryIntent: 'Courtyard Homes, Resorts & Heritage-Sensitive Architecture in Pushkar',
    indexable: true,
    parent: '/'
  },
  {
    path: '/locations/udaipur',
    type: 'location',
    title: 'Architectural & Structural Consultants in Udaipur | Design Plus',
    primaryIntent: 'Lake & Hilly Terrain Villas, Heritage Adaptation & Engineering in Udaipur',
    indexable: true,
    parent: '/'
  },

  // 05 Editorial Journal & Blog Categories
  {
    path: '/blog',
    type: 'blog-hub',
    title: 'Journal & Architectural Insights | Design Plus',
    primaryIntent: 'Technical Essays, Byelaw Guides & Architectural Insights Hub',
    indexable: true,
    parent: '/',
    children: [
      '/blog/architecture',
      '/blog/residential-design',
      '/blog/commercial-design',
      '/blog/interior-design',
      '/blog/house-planning',
      '/blog/ajmer'
    ]
  },
  {
    path: '/blog/architecture',
    type: 'blog-category',
    title: 'Architecture Journal | Design Plus',
    primaryIntent: 'Architectural Theory, Bioclimatic Design & Structural Safety Essays',
    indexable: true,
    parent: '/blog'
  },
  {
    path: '/blog/residential-design',
    type: 'blog-category',
    title: 'Residential Architecture Journal | Design Plus',
    primaryIntent: 'Courtyard Cooling, Multi-Generational Villas & House Planning Articles',
    indexable: true,
    parent: '/blog'
  },
  {
    path: '/blog/commercial-design',
    type: 'blog-category',
    title: 'Commercial Design Journal | Design Plus',
    primaryIntent: 'Commercial Column Spans, Fire Egress & Retail Circulation Insights',
    indexable: true,
    parent: '/blog'
  },
  {
    path: '/blog/interior-design',
    type: 'blog-category',
    title: 'Interior Design Journal | Design Plus',
    primaryIntent: 'Minimalist Materiality, Regional Stone Joinery & Architectural Lighting',
    indexable: true,
    parent: '/blog'
  },
  {
    path: '/blog/house-planning',
    type: 'blog-category',
    title: 'House Planning Journal | Design Plus',
    primaryIntent: 'Floor Plan Ergonomics, Zero-Waste Circulation & Vastu Integration',
    indexable: true,
    parent: '/blog'
  },
  {
    path: '/blog/ajmer',
    type: 'blog-category',
    title: 'Ajmer Architecture & Byelaws Journal | Design Plus',
    primaryIntent: 'ADA Building Approvals, Setbacks, Municipal Guidelines & Local Trends',
    indexable: true,
    parent: '/blog'
  },

  // 06 Contact & Consultation
  {
    path: '/contact',
    type: 'contact',
    title: 'Contact Design Plus | Architects & Structural Engineers in Ajmer',
    primaryIntent: 'Consultation Inquiries, Direct Office Contact, Telephone & Email Details',
    indexable: true,
    parent: '/'
  }
];

/**
 * Lookup helper to retrieve route definition by exact pathname
 */
export function getRouteByPath(path: string): RouteDefinition | undefined {
  return PUBLIC_ROUTES.find((r) => r.path === path);
}

/**
 * Returns all indexable public routes
 */
export function getIndexableRoutes(): RouteDefinition[] {
  return PUBLIC_ROUTES.filter((r) => r.indexable);
}

export const ROUTES = PUBLIC_ROUTES;
export const ALL_ROUTES = PUBLIC_ROUTES;
export default PUBLIC_ROUTES;
