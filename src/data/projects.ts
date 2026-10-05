import { Project, ProjectCategory, ProjectType, ProjectStatus } from '../types';

export interface CategoryMeta {
  slug: ProjectCategory | 'all';
  label: string;
  shortLabel: string;
  description: string;
  countKey?: ProjectCategory;
}

export const PROJECT_CATEGORIES: CategoryMeta[] = [
  {
    slug: 'all',
    label: 'All Works',
    shortLabel: 'All',
    description: 'A comprehensive archive of built architectural commissions, structural engineering frameworks, and conceptual research studies across Rajasthan.'
  },
  {
    slug: 'residential',
    label: 'Residential Architecture',
    shortLabel: 'Residential',
    description: 'Custom family villas, courtyard homes, and multi-generational estates tailored for Rajasthan’s arid climate and regional lifestyle.',
    countKey: 'residential'
  },
  {
    slug: 'commercial',
    label: 'Commercial & Retail',
    shortLabel: 'Commercial',
    description: 'Multi-tier retail complexes, corporate pavilions, and high-visibility urban commercial centers engineered for flexible tenancy and maximum footfall efficiency.',
    countKey: 'commercial'
  },
  {
    slug: 'interiors',
    label: 'Interior Architecture',
    shortLabel: 'Interiors',
    description: 'Minimalist residential and executive commercial interiors sculpted with bespoke millwork, concealed illumination, and natural stone finishes.',
    countKey: 'interiors'
  },
  {
    slug: 'structural',
    label: 'Chartered Structural Engineering',
    shortLabel: 'Structural',
    description: 'High-performance RCC and structural steel designs, seismic engineering, and stability certifications directed by Chartered Engineer Er. Sudhir Soni.',
    countKey: 'structural'
  },
  {
    slug: 'institutional',
    label: 'Institutional & Educational',
    shortLabel: 'Institutional',
    description: 'Campuses, academic wings, and community trust facilities combining civic presence with daylight-rich spatial ergonomics.',
    countKey: 'institutional'
  },
  {
    slug: 'industrial',
    label: 'Industrial & Logistics',
    shortLabel: 'Industrial',
    description: 'Long-span industrial sheds, heavy crane gantry foundations, and processing plant structures engineered for demanding operational loads.',
    countKey: 'industrial'
  },
  {
    slug: 'concept',
    label: 'Concept Studies & Research',
    shortLabel: 'Concepts',
    description: 'Speculative architectural design studies, parametric bioclimatic models, and site morphology investigations exploring future vernacular typologies.',
    countKey: 'concept'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'dp-inst-001',
    slug: 'nagar-palika-office-building',
    title: 'Nagar Palika Office Building',
    category: 'institutional',
    status: 'completed',
    hidden: true,
    location: 'Ajmer, Rajasthan',
    area: '12,000 sq.ft.',
    floors: 'G+3 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering',
      'Municipal Sanction Drawings'
    ],
    description: 'A functional government office building designed for daily public use — clear circulation, natural light, and low-maintenance materials.',
    brief: 'Design a durable, easy-to-maintain office building for municipal staff and visiting public.',
    designApproach: 'Simple structural grid, shaded corridors for Rajasthan heat, and separate public-staff circulation.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Government',
    city: 'Ajmer',
    year: '2021',
    builtUpArea: '12,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'Government Office',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design', 'Sanction Drawings'],
    summary: 'Municipal office building for Nagar Palika, Ajmer.',
    challenge: 'Durable public building with clear circulation.',
    approach: 'Simple grid, shaded corridors, separate public-staff flow.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'],
    features: ['Natural ventilation', 'Low-maintenance finishes', 'Accessible design'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Ajmer',
      displayLocation: 'Ajmer, Rajasthan',
    },
  },
  {
    id: 'dp-inst-002',
    slug: 'school-building-ajmer',
    title: 'Sindoliya Senior Secondary School',
    category: 'institutional',
    status: 'completed',
    hidden: true,
    location: 'Bhadsiya, Ajmer',
    area: '20,000 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering',
      'Campus Planning'
    ],
    description: 'Sindoliya Senior Secondary School, Bhadsiya — a school campus planned around courtyards: bright classrooms, safe staircases, and playgrounds shaded from the afternoon sun.',
    brief: 'Design a school where children learn comfortably through Rajasthan summers.',
    designApproach: 'Classrooms face north-east for soft light; central courtyard drives cross-ventilation; playful yet sturdy detailing.',
    images: [
      '/images/projects/school-building-ajmer-front.webp',
      '/images/projects/school-building-ajmer-angled.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Institutional Client',
    city: 'Ajmer',
    year: '2022',
    builtUpArea: '20,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'School Campus',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design', 'Campus Planning'],
    summary: 'School campus in Ajmer planned around courtyards.',
    challenge: 'Comfortable learning spaces through Rajasthan summers.',
    approach: 'North-east classrooms, central courtyard ventilation.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/school-building-ajmer-front.webp',
    heroImageDetails: {
      url: '/images/projects/school-building-ajmer-front.webp',
      alt: 'Sindoliya Senior Secondary School front elevation — symmetrical brick and plaster facade',
      caption: 'Front elevation of Sindoliya Senior Secondary School, Bhadsiya, Ajmer.'
    },
    gallery: [
      '/images/projects/school-building-ajmer-front.webp',
      '/images/projects/school-building-ajmer-angled.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/school-building-ajmer-front.webp',
        caption: 'Front elevation — brick piers, jali screens and a shaded central entrance porch.',
        alt: 'School front elevation render',
        aspect: 'wide'
      },
      {
        url: '/images/projects/school-building-ajmer-angled.webp',
        caption: 'Aerial perspective — G+2 classroom wings arranged for light and cross-ventilation.',
        alt: 'School aerial angle render',
        aspect: 'wide'
      }
    ],
    features: ['Courtyard ventilation', 'Shaded playgrounds', 'Safe staircases'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Bhadsiya',
      displayLocation: 'Bhadsiya, Ajmer, Rajasthan',
      latitude: 26.6889,
      longitude: 74.6687,
    },
  },
  {
    id: 'dp-com-011',
    slug: 'rosium-township-entrance-gate',
    title: 'Rosium Township — Entrance Gate',
    category: 'commercial',
    status: 'completed',
    location: 'Ajmer, Rajasthan',
    area: '5,000 sq.ft.',
    floors: 'Single Storey',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'Grand entrance gateway for Rosium Township, Ajmer — a bold canopy on stone-clad piers flanked by retail shops, setting a premium first impression.',
    brief: 'Design a landmark entrance that gives the township a premium identity.',
    designApproach: 'Symmetrical composition with a floating roof plane, warm timber soffit, and shopfronts integrated into the gatehouse wings.',
    images: [
      '/images/projects/rosium-township-gate.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'commercial',
    clientType: 'Developer Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '5,000 sq.ft.',
    categoryLabel: 'Commercial',
    typology: 'Township Entrance & Retail',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Landmark entrance gateway with integrated retail for Rosium Township.',
    challenge: 'A premium identity for the township on a highway-facing edge.',
    approach: 'Floating canopy roof, stone piers, integrated shopfronts.',
    structuralEngineering: 'RCC framed structure with steel canopy as per IS codes.',
    heroImage: '/images/projects/rosium-township-gate.webp',
    heroImageDetails: {
      url: '/images/projects/rosium-township-gate.webp',
      alt: 'Rosium Township entrance gate — canopy on stone piers with retail shops',
      caption: 'Entrance gateway of Rosium Township, Ajmer.'
    },
    gallery: [
      '/images/projects/rosium-township-gate.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/rosium-township-gate.webp',
        caption: 'Street view — floating roof canopy over the entry court, shops on both wings.',
        alt: 'Township entrance gate render',
        aspect: 'wide'
      }
    ],
    features: ['Landmark canopy roof', 'Integrated retail shops', 'Stone-clad piers'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Ajmer',
      displayLocation: 'Ajmer, Rajasthan',
      latitude: 26.5236,
      longitude: 74.7335,
    },
  },
  {
    id: 'dp-res-011',
    slug: 'dr-kriplani-residence-dholabhata',
    title: 'Dr. Kriplani Residence',
    category: 'residential',
    status: 'completed',
    location: 'Dholabhata, Ajmer',
    area: '3,000 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A modern family residence in Dholabhata, Ajmer — crisp white volumes wrapped in warm timber fins, with jali screens and a shaded terrace.',
    brief: 'A contemporary home with strong street presence and cool, shaded interiors.',
    designApproach: 'Layered facade of timber fins and perforated screens filters the harsh sun; deep balconies create outdoor rooms.',
    images: [
      '/images/projects/dr-kriplani-residence.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '3,000 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Family Home',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Modern timber-and-white family residence in Dholabhata.',
    challenge: 'Strong street presence with cool shaded interiors.',
    approach: 'Timber fins, jali screens and deep shaded balconies.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/dr-kriplani-residence.webp',
    heroImageDetails: {
      url: '/images/projects/dr-kriplani-residence.webp',
      alt: 'Dr. Kriplani residence — modern white and timber facade with jali screens',
      caption: 'Front elevation of Dr. Kriplani Residence, Dholabhata, Ajmer.'
    },
    gallery: [
      '/images/projects/dr-kriplani-residence.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/dr-kriplani-residence.webp',
        caption: 'Front elevation — timber fins, perforated screens and a shaded terrace crown.',
        alt: 'House front elevation render',
        aspect: 'tall'
      }
    ],
    features: ['Timber fin facade', 'Jali sun screens', 'Shaded terrace'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Dholabhata',
      displayLocation: 'Dholabhata, Ajmer, Rajasthan',
      latitude: 26.4372,
      longitude: 74.6531,
    },
  },
  {
    id: 'dp-res-012',
    slug: 'dilip-jhurani-residence-panchsheel-nagar',
    title: 'Dilip Jhurani Residence',
    category: 'residential',
    status: 'completed',
    location: 'Panchsheel Nagar, Ajmer',
    area: '3,500 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A crisp white modern villa in Panchsheel Nagar, Ajmer — layered balconies with ornamental railings, warm evening light, and a welcoming forecourt.',
    brief: 'An elegant modern villa with generous balconies and a grand arrival.',
    designApproach: 'Stacked white volumes with deep overhangs; ornamental metal railings add craft against the clean geometry.',
    images: [
      '/images/projects/villa-unnamed.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '3,500 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Modern Villa',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'White modern villa with layered balconies in Panchsheel Nagar.',
    challenge: 'Elegant street presence with generous outdoor living.',
    approach: 'Stacked volumes, deep overhangs, crafted metal railings.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/villa-unnamed.webp',
    heroImageDetails: {
      url: '/images/projects/villa-unnamed.webp',
      alt: 'Dilip Jhurani residence — white modern villa at dusk',
      caption: 'Evening view of Dilip Jhurani Residence, Panchsheel Nagar, Ajmer.'
    },
    gallery: [
      '/images/projects/villa-unnamed.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/villa-unnamed.webp',
        caption: 'Dusk view — layered balconies glowing warm against crisp white volumes.',
        alt: 'Villa evening render',
        aspect: 'wide'
      }
    ],
    features: ['Layered balconies', 'Ornamental railings', 'Grand forecourt'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Panchsheel Nagar',
      displayLocation: 'Panchsheel Nagar, Ajmer, Rajasthan',
      latitude: 26.5145,
      longitude: 74.6369,
    },
  },
  {
    id: 'dp-res-013',
    slug: 'ml-prajapati-residence-panchsheel-nagar',
    title: 'ML Prajapati Residence — Dharma Villa',
    category: 'residential',
    status: 'completed',
    location: 'A Block, Panchsheel Nagar, Ajmer',
    area: '2,800 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'Dharma Villa — a completed family residence for Mr. ML Prajapati in A Block, Panchsheel Nagar, Ajmer. Warm plastered volumes with glass-railed balconies, built for everyday family life.',
    brief: 'A sturdy, comfortable family home with generous balconies.',
    designApproach: 'Simple stacked volumes, shaded balconies with glass railings, and a practical plan built to last.',
    images: [
      '/images/projects/ml-prajapati-residence.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '2,800 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Family Home',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Completed family residence (Dharma Villa) in Panchsheel Nagar.',
    challenge: 'Comfortable family living with generous balcony space.',
    approach: 'Stacked volumes with shaded glass-railed balconies.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/ml-prajapati-residence.webp',
    heroImageDetails: {
      url: '/images/projects/ml-prajapati-residence.webp',
      alt: 'Dharma Villa — completed residence of Mr. ML Prajapati, Panchsheel Nagar',
      caption: 'Dharma Villa, residence of Mr. ML Prajapati, A Block, Panchsheel Nagar, Ajmer.'
    },
    gallery: [
      '/images/projects/ml-prajapati-residence.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/ml-prajapati-residence.webp',
        caption: 'Completed front view — glass-railed balconies over warm plastered volumes.',
        alt: 'Dharma Villa completed photo',
        aspect: 'tall'
      }
    ],
    features: ['Glass-railed balconies', 'Family-first planning', 'Completed & handed over'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'A Block, Panchsheel Nagar',
      displayLocation: 'A Block, Panchsheel Nagar, Ajmer, Rajasthan',
      latitude: 26.5189,
      longitude: 74.6356,
    },
  },
  {
    id: 'dp-com-012',
    slug: 'convention-center-chitrakoot-dham-bhilwara',
    title: 'Convention Center, Chitrakoot Dham',
    category: 'commercial',
    status: 'completed',
    location: 'Chitrakoot Dham, Nagar Nigam, Bhilwara',
    area: '25,000 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A civic convention center for Nagar Nigam at Chitrakoot Dham, Bhilwara — a bold glass-and-stone public building with a grand double-height entrance and deep sun-shading fins.',
    brief: 'A landmark public venue for the city.',
    designApproach: 'Full-height glazing framed by stone and timber fins; deep overhangs cut the western sun while keeping the grand entrance hall day-lit.',
    images: [
      '/images/projects/convention-center-chitrakoot-dham.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'commercial',
    clientType: 'Institutional Client (Nagar Nigam)',
    city: 'Bhilwara',
    year: '2024',
    builtUpArea: '25,000 sq.ft.',
    categoryLabel: 'Commercial',
    typology: 'Convention Center',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Civic convention center for Nagar Nigam at Chitrakoot Dham, Bhilwara.',
    challenge: 'A public landmark with grand presence and comfortable interiors.',
    approach: 'Glazed facade with stone fins and deep sun-shading overhangs.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/convention-center-chitrakoot-dham.webp',
    heroImageDetails: {
      url: '/images/projects/convention-center-chitrakoot-dham.webp',
      alt: 'Convention Center at Chitrakoot Dham, Bhilwara — glass and stone facade',
      caption: 'Convention Center, Chitrakoot Dham, Nagar Nigam, Bhilwara.'
    },
    gallery: [
      '/images/projects/convention-center-chitrakoot-dham.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/convention-center-chitrakoot-dham.webp',
        caption: 'Street elevation — double-height glass entrance framed in stone and timber.',
        alt: 'Convention center, Chitrakoot Dham, Bhilwara',
        aspect: 'wide'
      }
    ],
    features: ['Double-height entrance', 'Sun-shading fins', 'Stone-clad facade'],
    locationDetails: {
      city: 'Bhilwara',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Chitrakoot Dham',
      displayLocation: 'Chitrakoot Dham, Nagar Nigam, Bhilwara, Rajasthan',
      latitude: 25.3411,
      longitude: 74.6374,
    },
  },
  {
    id: 'dp-res-014',
    slug: 'sanjay-sharma-residence-chitrakoot-nagar',
    title: 'Sanjay Sharma Residence',
    category: 'residential',
    status: 'completed',
    location: 'Chitrakoot Nagar, Makadwali Road, Ajmer',
    area: '4,000 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design'
    ],
    description: 'A modern family residence for Mr. Sanjay Sharma in Chitrakoot Nagar, Ajmer — crisp white and grey volumes, warm timber soffits, glass-railed balconies and hanging greens.',
    brief: 'A contemporary family home with a striking evening presence.',
    designApproach: 'Stacked clean volumes with deep balconies; timber soffits and glass railings keep the mass light while the facade glows after dusk.',
    images: [
      '/images/projects/sanjay-sharma-residence.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '4,000 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Private Residence',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Modern G+2 family residence in Chitrakoot Nagar, Ajmer.',
    challenge: 'A striking yet warm family home on a compact urban plot.',
    approach: 'Clean stacked volumes, timber soffits, glass balconies.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/sanjay-sharma-residence.webp',
    heroImageDetails: {
      url: '/images/projects/sanjay-sharma-residence.webp',
      alt: 'Sanjay Sharma residence at dusk — modern white and grey facade, Chitrakoot Nagar',
      caption: 'Residence of Mr. Sanjay Sharma, Chitrakoot Nagar, Makadwali Road, Ajmer.'
    },
    gallery: [
      '/images/projects/sanjay-sharma-residence.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/sanjay-sharma-residence.webp',
        caption: 'Evening elevation — stacked volumes with timber soffits and glass balconies.',
        alt: 'Sanjay Sharma residence',
        aspect: 'wide'
      }
    ],
    features: ['Timber soffits', 'Glass-railed balconies', 'Evening facade lighting'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Chitrakoot Nagar, Makadwali Road',
      displayLocation: 'Chitrakoot Nagar, Makadwali Road, Ajmer, Rajasthan',
      latitude: 26.4993,
      longitude: 74.6286,
    },
  },
  {
    id: 'dp-res-015',
    slug: 'shantilal-residence-gangapur-bhilwara',
    title: 'Shantilal Residence',
    category: 'residential',
    status: 'completed',
    location: 'Gangapur, Bhilwara',
    area: '3,200 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Architectural Design',
      'Structural Design'
    ],
    description: 'A contemporary duplex residence for Mr. Shantilal in Gangapur, Bhilwara — stone-clad tower, vertical timber fins, glass balconies and a pergola-capped terrace.',
    brief: 'A modern family duplex with strong street presence.',
    designApproach: 'A stone-clad vertical core anchors the composition; timber screens filter the harsh sun while glass balconies open the living spaces to the street.',
    images: [
      '/images/projects/shantilal-residence-gangapur.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Bhilwara',
    year: '2024',
    builtUpArea: '3,200 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Private Residence',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Contemporary duplex residence in Gangapur, Bhilwara.',
    challenge: 'Modern street presence with sun control and privacy.',
    approach: 'Stone tower, timber fins, glass balconies, terrace pergola.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/shantilal-residence-gangapur.webp',
    heroImageDetails: {
      url: '/images/projects/shantilal-residence-gangapur.webp',
      alt: 'Shantilal residence — stone and timber facade with glass balconies, Gangapur',
      caption: 'Residence of Mr. Shantilal, Gangapur, Bhilwara, Rajasthan.'
    },
    gallery: [
      '/images/projects/shantilal-residence-gangapur.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/shantilal-residence-gangapur.webp',
        caption: 'Front elevation — stone-clad core with timber fins and glass balconies.',
        alt: 'Shantilal residence',
        aspect: 'wide'
      }
    ],
    features: ['Stone-clad tower', 'Timber sun-screens', 'Terrace pergola'],
    locationDetails: {
      city: 'Bhilwara',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Gangapur',
      displayLocation: 'Gangapur, Bhilwara, Rajasthan',
      latitude: 25.2179,
      longitude: 74.262,
    },
  },
  {
    id: 'dp-res-016',
    slug: 'babulal-soni-residence-nakamadar-ajmer',
    title: 'Babulal Soni Residence',
    category: 'residential',
    status: 'completed',
    location: 'Nakamadar, Ajmer',
    area: '3,800 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design'
    ],
    description: 'A tall contemporary residence for Mr. Babulal Soni in Nakamadar, Ajmer — a full-height glass tower wrapped in a timber screen, stone cladding and layered balconies.',
    brief: 'Maximum presence on a narrow urban plot.',
    designApproach: 'Vertical emphasis: a glass stair-and-lobby tower in a timber sleeve, with stone and white frames layering the balconies for depth and shade.',
    images: [
      '/images/projects/babulal-soni-residence-nakamadar.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '3,800 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Private Residence',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Tall contemporary G+2 residence in Nakamadar, Ajmer.',
    challenge: 'Presence and daylight on a narrow plot.',
    approach: 'Glass tower in timber screen, layered stone balconies.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/babulal-soni-residence-nakamadar.webp',
    heroImageDetails: {
      url: '/images/projects/babulal-soni-residence-nakamadar.webp',
      alt: 'Babulal Soni residence — glass tower with timber screen, Nakamadar',
      caption: 'Residence of Mr. Babulal Soni, Nakamadar, Ajmer.'
    },
    gallery: [
      '/images/projects/babulal-soni-residence-nakamadar.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/babulal-soni-residence-nakamadar.webp',
        caption: 'Front elevation — full-height glass tower wrapped in a timber screen.',
        alt: 'Babulal Soni residence',
        aspect: 'wide'
      }
    ],
    features: ['Full-height glass tower', 'Timber screen', 'Stone cladding'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Nakamadar',
      displayLocation: 'Nakamadar, Ajmer, Rajasthan',
      latitude: 26.4524,
      longitude: 74.6665,
    },
  },
  {
    id: 'dp-res-017',
    slug: 'siyaram-choudhary-residence-merta-city',
    title: 'Siyaram Choudhary Residence',
    category: 'residential',
    status: 'completed',
    location: 'Merta City, Nagaur',
    area: '3,500 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design'
    ],
    description: 'A warm contemporary residence for Mr. Siyaram Choudhary in Merta City — beige stone cladding, a deep shaded balcony, jaali-pattern railings and a pergola-capped terrace.',
    brief: 'A modern family home rooted in local warmth.',
    designApproach: 'Earthy beige palette with deep reveals for shade; jaali railings and a terrace pergola bring traditional craft into a clean modern frame.',
    images: [
      '/images/projects/siyaram-choudhary-residence-merta.webp',
      '/images/projects/siyaram-choudhary-residence-merta-2.webp'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Merta City',
    year: '2024',
    builtUpArea: '3,500 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Private Residence',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Warm contemporary G+2 residence in Merta City, Nagaur.',
    challenge: 'Modern comfort with a local, earthy character.',
    approach: 'Beige stone, deep shaded balcony, jaali railings, terrace pergola.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/siyaram-choudhary-residence-merta.webp',
    heroImageDetails: {
      url: '/images/projects/siyaram-choudhary-residence-merta.webp',
      alt: 'Siyaram Choudhary residence — beige stone facade with shaded balcony, Merta City',
      caption: 'Residence of Mr. Siyaram Choudhary, Merta City, Nagaur, Rajasthan.'
    },
    gallery: [
      '/images/projects/siyaram-choudhary-residence-merta.webp',
      '/images/projects/siyaram-choudhary-residence-merta-2.webp'
    ],
    galleryImages: [
      {
        url: '/images/projects/siyaram-choudhary-residence-merta.webp',
        caption: 'Angled elevation — beige stone cladding with deep shaded balcony.',
        alt: 'Siyaram Choudhary residence',
        aspect: 'wide'
      },
      {
        url: '/images/projects/siyaram-choudhary-residence-merta-2.webp',
        caption: 'Front elevation — jaali railings and pergola-capped terrace.',
        alt: 'Siyaram Choudhary residence front view',
        aspect: 'wide'
      }
    ],
    features: ['Beige stone cladding', 'Jaali-pattern railings', 'Terrace pergola'],
    locationDetails: {
      city: 'Merta City',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Merta City',
      displayLocation: 'Merta City, Nagaur, Rajasthan',
      latitude: 26.6424,
      longitude: 73.9752,
    },
  },
  {
    id: 'dp-res-003',
    slug: 'pushkar-courtyard-haven',
    title: 'Pushkar Courtyard Haven',
    category: 'residential',
    status: 'completed',
    location: 'Near Gurdwara Road, Pushkar',
    area: '3,600 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Heritage-Sensitive Architectural Design',
      'Load-Bearing Stone Masonry & RCC Tie Beam Design',
      'Traditional Courtyard Micro-Climate Modeling',
      'Local Artisan Lime Plaster Finish Curation'
    ],
    description: 'A modern haveli residence synthesizing traditional Rajasthani courtyard typologies with crisp minimalist interior proportions.',
    brief: 'To craft a tranquil family retreat in the holy town of Pushkar that honors regional architectural heritage, preserves courtyard lifestyle traditions, and integrates natural passive cooling.',
    designApproach: 'Organized around a tranquil central stone courtyard with a carved marble water jali. The layout creates a layered sequence of private spaces shielded from desert dust and ambient heat.',
    images: [
      '/images/projects/pushkar-courtyard-haven.jpg',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['residential-architecture', 'interior-design', '2d-floor-planning'],
    relatedLocations: ['pushkar', 'ajmer'],
    relatedProjects: ['contemporary-rajasthan-villa'],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Family Commission',
    city: 'Pushkar',
    locationDetails: {
      city: 'Pushkar',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Heritage Valley Precinct',
      displayLocation: 'Pushkar Valley, Rajasthan',
      isRegionalContext: true
    },
    year: '2023',
    siteArea: '5,000 sq.ft.',
    builtUpArea: '3,600 sq.ft.',
    categoryLabel: 'Haveli Residence',
    typology: 'Contemporary Vernacular Courtyard Residence',
    badges: ['Built Commission', 'Vernacular Heritage', 'Chartered Certified'],
    isFeatured: true,
    lead: 'Ar. Vipul Verma & Er. Sudhir Soni',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Ar. Vipul Verma & Er. Sudhir Soni'
    },
    scopeOfWork: [
      'Heritage-Sensitive Architectural Design',
      'Load-Bearing Stone Masonry & RCC Tie Beam Design',
      'Traditional Courtyard Micro-Climate Modeling',
      'Local Artisan Lime Plaster Finish Curation'
    ],
    summary: 'A modern haveli residence synthesizing traditional Rajasthani courtyard typologies with crisp minimalist interior proportions.',
    challenge: 'Designing within Pushkar’s heritage-sensitive context while ensuring structural resilience against sandy soil conditions and seasonal thermal shifts.',
    approach: 'Designed a reinforced strip foundation system integrated with local random rubble masonry, unified by continuous RCC tie-beams at plinth and lintel levels.',
    structuralEngineering: 'Engineered hybrid stone-masonry and RCC frame system optimizing thermal mass and seismic ductility under IS 4326:2013 standards.',
    structuralDetails: {
      framingSystem: 'Hybrid Confined Stone Masonry with Continuous RCC Plinth & Lintel Bands',
      foundationType: 'Continuous Reinforced Strip Footings on stabilized sandy-loam sub-base',
      specialTechnicalFeatures: [
        'Interlocking stone corner quoins for structural stability without thermal bridging',
        'Traditional lime-pozzolana plaster coatings promoting natural moisture breathing',
        'Seismically certified tie-beam grid over internal courtyard perimeter'
      ],
      charteredCertificationNote: 'Structural Stability Audit & Heritage Vetting by Er. Sudhir Soni, Chartered Engineer.'
    },
    sustainabilityFeatures: [
      'Central chowk (courtyard) creating night-sky radiation cooling',
      'Locally sourced Jodhpur sandstone and yellow Jaisalmer limestone minimizing carbon footprint',
      'Thick 450mm thermal mass envelope stabilizing interior temperatures year-round'
    ],
    materialsUsed: [
      { name: 'Jodhpur Pink Sandstone', application: 'Courtyard colonnades, jali screens, and threshold steps' },
      { name: 'Traditional Lime Plaster (Chuna Ghotai)', application: 'Interior living walls for breathable, organic texture' },
      { name: 'Reclaimed Teak Wood', application: 'Handcrafted solid doors, window frames, and ceiling rafters' }
    ],
    heroImage: '/images/projects/pushkar-courtyard-haven.jpg',
    heroImageDetails: {
      url: '/images/projects/pushkar-courtyard-haven.jpg',
      alt: 'Pushkar Courtyard Haven courtyard perspective with sandstone columns',
      caption: 'Central open chowk showcasing hand-chiseled Jodhpur stone columns and water feature.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sunlit verandah wrapped around the central courtyard garden.',
        alt: 'Verandah corridor with limestone flooring',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Master bedroom suite with deep recessed jharokha window seats.',
        alt: 'Bedroom interior with traditional architectural details',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-psk-drw-01',
        title: 'Courtyard Spatial Arrangement Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Traditional chowk floor layout illustrating central void and surrounding living verandahs.'
      }
    ],
    features: [
      'Central open-to-sky chowk providing natural diurnal cooling',
      '450mm solid stone thermal mass walls moderating desert climate extremes',
      'Hand-chiseled Jodhpur stone jali screens diffusing harsh sunlight into soft ambient illumination',
      'Authentic lime-mortar ghotai plaster finish allowing wall breathability',
      'Custom rainwater harvesting integration with traditional underground diggi tank'
    ],
    seo: {
      metaTitle: 'Pushkar Courtyard Haven | Contemporary Haveli Architecture | Design Plus',
      metaDescription: 'Explore the Pushkar Courtyard Haven by Design Plus. A serene modern haveli in Pushkar blending traditional chowk architecture with structural resilience.',
      keywords: ['Pushkar architect', 'modern haveli Pushkar', 'courtyard villa Rajasthan', 'Design Plus projects']
    }
  },
  {
    id: 'dp-int-004',
    slug: 'vaishali-studio-interiors',
    title: 'Vaishali Nagar Studio & Residence Interiors',
    category: 'interiors',
    status: 'completed',
    location: 'Vaishali Nagar, Ajmer',
    area: '2,200 sq.ft.',
    floors: 'Single Level Suite',
    services: [
      'Comprehensive Interior Architecture',
      'Bespoke Fluted Millwork & Cabinetry Design',
      'Architectural Concealed Lighting Layouts',
      'Natural Marble & Veneer Material Curation'
    ],
    description: 'An executive residential and creative studio interior characterized by understated Italian marble, fluted walnut joinery, and concealed ambient illumination.',
    brief: 'A complete interior architectural overhaul for a creative entrepreneur requiring a seamless transition between a private executive studio space and refined residential living quarters in Vaishali Nagar.',
    designApproach: 'Employed a restrained palette of grey Armani marble, fluted natural walnut millwork, and warm micro-cement plaster. Concealed cove lighting grids eliminate glare while creating sculptural depth.',
    images: [
      '/images/projects/vaishali-studio-interiors.jpg',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['interior-design', '3d-elevation-design', 'architectural-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['contemporary-retail-interior'],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'interiors',
    clientType: 'Private Executive Commission',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Vaishali Nagar',
      displayLocation: 'Vaishali Nagar, Ajmer, Rajasthan',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '2,200 sq.ft.',
    builtUpArea: '2,200 sq.ft.',
    categoryLabel: 'Interior Architecture',
    typology: 'Executive Studio & Contemporary Living Interior',
    badges: ['Built Commission', 'Bespoke Millwork', 'Interior Design'],
    isFeatured: true,
    lead: 'Ar. Vipul Verma',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      projectLead: 'Ar. Vipul Verma'
    },
    scopeOfWork: [
      'Comprehensive Interior Architecture',
      'Bespoke Fluted Millwork & Cabinetry Design',
      'Architectural Concealed Lighting Layouts',
      'Natural Marble & Veneer Material Curation'
    ],
    summary: 'An executive residential and creative studio interior characterized by understated Italian marble, fluted walnut joinery, and concealed ambient illumination.',
    challenge: 'Maximizing spatial flow in a compact footprint without compromising acoustic privacy between the professional studio and domestic living zones.',
    approach: 'Integrated acoustic concealed pocket doors clad in book-matched veneer, forming a flush architectural paneled wall when closed.',
    structuralEngineering: 'Engineered non-load-bearing steel partition framing and structural ceiling suspension systems designed for integrated acoustic baffles and heavy marble wall claddings.',
    structuralDetails: {
      framingSystem: 'Heavy-Gauge Cold-Rolled Steel Stud Wall Sub-Framing with Anti-Vibration Anchors',
      foundationType: 'Superstructure Interior Retrofit with balanced sub-floor leveling screeds',
      specialTechnicalFeatures: [
        'Hidden steel suspension brackets supporting 180kg monolithic stone vanities',
        'Acoustic decoupling seals achieving STC 48 rating across studio partition',
        'Concealed magnetic architectural service access panels'
      ]
    },
    sustainabilityFeatures: [
      '100% low-VOC waterborne polyurethanes and non-toxic mineral adhesives',
      'Energy-efficient 2700K high-CRI LED illumination reducing lighting energy density to 0.45 W/sq.ft.',
      'Sustainably harvested FSC-certified natural walnut and oak veneers'
    ],
    materialsUsed: [
      { name: 'Grey Armani Marble', application: 'Main salon flooring, monolithic kitchen island, and ensuite vanities' },
      { name: 'American Walnut Fluted Panels', application: 'Full-height feature wall cladding and acoustic baffles' },
      { name: 'Brushed Brass Metal Trim', application: 'Cabinetry pulls, threshold inlays, and custom luminaire details' }
    ],
    heroImage: '/images/projects/vaishali-studio-interiors.jpg',
    heroImageDetails: {
      url: '/images/projects/vaishali-studio-interiors.jpg',
      alt: 'Vaishali Nagar Studio Interior living space with marble and wood millwork',
      caption: 'Living salon showcasing custom fluted walnut panelling and monolithic stone coffee table.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        caption: 'Executive studio desk with integrated cable management and soft diffused cove lighting.',
        alt: 'Creative executive office workspace interior',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Dining suite framed by minimalist brass pendant and fluted timber wall backdrop.',
        alt: 'Modern dining space with warm ambient lighting',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-int-drw-01',
        title: 'Interior Millwork & Ceiling Reflected Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Comprehensive reflected ceiling plan with precision LED channel coordinates and dimming zones.'
      }
    ],
    features: [
      'Custom fluted walnut cabinetry with concealed touch-to-open German hardware',
      'Concealed architectural cove lighting with tunable white 2700K–4000K circadian controls',
      'Seamless Grey Armani marble slab flooring with hairline epoxy jointing',
      'Acoustically isolated private studio zone with concealed pocket sliding partitions',
      'Bespoke master suite with integrated backlit headboard and minimalist walk-in wardrobe'
    ],
    seo: {
      metaTitle: 'Vaishali Studio Interiors | Interior Architecture | Design Plus',
      metaDescription: 'Step inside the Vaishali Nagar Studio and Residence Interiors by Design Plus. High-end bespoke millwork, Italian marble, and architectural lighting in Ajmer.',
      keywords: ['interior designer Ajmer', 'Vaishali Nagar luxury interiors', 'Design Plus interior design', 'marble interiors Rajasthan']
    }
  },
  {
    id: 'dp-str-005',
    slug: 'industrial-spans-kishangarh',
    title: 'Industrial Heavy-Duty Structural Facility',
    category: 'structural',
    status: 'completed',
    location: 'Kishangarh Industrial Area, Rajasthan',
    area: '28,000 sq.ft.',
    floors: 'High-Bay Industrial Shed',
    services: [
      'Chartered Structural Engineering Design',
      'Heavy Structural Steel Truss Analysis (IS 800:2007)',
      '25-Ton Overhead Crane Gantry Girder Engineering',
      'Dynamic Machine Foundation Design'
    ],
    description: 'A 32-meter clear span industrial manufacturing facility engineered for 25-ton overhead traveling crane loads with deep bored pile foundations.',
    brief: 'A leading marble processing consortium required a high-clearance manufacturing and warehousing shed in Kishangarh capable of supporting dual 25-ton EOT cranes with heavy vibration dampening.',
    designApproach: 'Er. Sudhir Soni directed the finite element analysis and structural modeling, utilizing tapered built-up steel portal frames with high-strength friction-grip bolted connections.',
    images: [
      '/images/projects/industrial-spans-kishangarh.jpg',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design', 'commercial-architecture'],
    relatedLocations: ['jaipur', 'ajmer'],
    relatedProjects: ['mayo-link-institutional-academy'],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'industrial',
    clientType: 'Marble Processing Industrial Group',
    city: 'Kishangarh',
    locationDetails: {
      city: 'Kishangarh',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Industrial Growth Centre',
      displayLocation: 'Kishangarh Industrial Area, Rajasthan',
      isRegionalContext: true
    },
    year: '2023',
    siteArea: '45,000 sq.ft.',
    builtUpArea: '28,000 sq.ft.',
    categoryLabel: 'Industrial Structural',
    typology: 'Heavy-Duty Industrial Manufacturing & Logistics Hub',
    badges: ['Built Commission', 'Chartered Certified', 'Industrial Steel'],
    isFeatured: false,
    lead: 'Er. Sudhir Soni (Chartered Engineer)',
    leadership: {
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Er. Sudhir Soni'
    },
    scopeOfWork: [
      'Chartered Structural Engineering Design',
      'Heavy Structural Steel Truss Analysis (IS 800:2007)',
      '25-Ton Overhead Crane Gantry Girder Engineering',
      'Dynamic Machine Foundation Design'
    ],
    summary: 'A 32-meter clear span industrial manufacturing facility engineered for 25-ton overhead traveling crane loads with deep bored pile foundations.',
    challenge: 'Handling intense cyclic dynamic lateral thrusts from twin 25-ton cranes while preventing differential settlement on weathered schist sub-strata.',
    approach: 'Designed reinforced concrete bored friction piles anchored into bedrock, paired with rigid steel portal frame knee braces and diagonal roof wind bracing.',
    structuralEngineering: 'Complete structural modeling in STAAD.Pro with IS 800:2007 steel design, IS 1893 seismic vetting, and fatigue check for crane girders.',
    structuralDetails: {
      framingSystem: 'Tapered Structural Steel Portal Frame with 32m Clear Span and High-Strength Bolted End Plates',
      foundationType: 'Cast-in-situ Reinforced Concrete Bored Piles (600mm dia) tied with heavy grade beams',
      specialTechnicalFeatures: [
        '32-meter column-free clear floor space optimizing marble block transport logistics',
        'Crane runway girders engineered with fatigue-resistant welded flange plates and rail clamps',
        'Natural turbo-ventilator roof ridge system delivering 8 air changes per hour'
      ],
      charteredCertificationNote: 'Certified Heavy Industrial Structural Stability Audit by Er. Sudhir Soni, Chartered Engineer.'
    },
    sustainabilityFeatures: [
      'Daylight polycarbonate skylight strips illuminating 85% of factory floor without daytime artificial lighting',
      'Integrated industrial roof rainwater collection harvesting 1.2 million liters annually for industrial cooling',
      'High-reflectivity cool-roof coating minimizing interior radiant thermal load'
    ],
    materialsUsed: [
      { name: 'Fe 550 / E350 Structural Steel', application: 'Primary portal columns, roof rafters, and crane runway girders' },
      { name: 'M35 Grade Concrete', application: 'Bored piles, pile caps, and heavy equipment isolated foundation pads' },
      { name: 'Insulated Metal Sandwich Panels', application: 'Roofing and high-durability wall claddings' }
    ],
    heroImage: '/images/projects/industrial-spans-kishangarh.jpg',
    heroImageDetails: {
      url: '/images/projects/industrial-spans-kishangarh.jpg',
      alt: 'Industrial heavy structural steel warehouse facility in Kishangarh',
      caption: 'Internal perspective illustrating 32-meter clear span steel portals and crane runway beam.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Steel fabrication assembly showing rigid moment-resisting knee joints.',
        alt: 'Structural steel assembly on site',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Heavy machinery foundation reinforcement grid before high-grade concrete casting.',
        alt: 'Machinery foundation rebar layout',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-str-drw-01',
        title: '32m Portal Frame Elevation & Crane Bracket Detail',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Structural fabrication drawing detailing crane surge brackets, base plates, and anchor bolts.'
      }
    ],
    features: [
      '32-meter clear span structural steel portal frame design without interior columns',
      'Dual 25-ton overhead traveling crane gantry engineering with full dynamic surge analysis',
      'Engineered machine foundations with vibration isolation joints for heavy marble gang-saws',
      'High-capacity storm drainage and 1.2M-liter industrial rainwater harvesting system',
      'Certified chartered structural stability documentation complying with National Building Code (NBC)'
    ],
    seo: {
      metaTitle: 'Industrial Structural Facility | Kishangarh Steel Engineering | Design Plus',
      metaDescription: 'Explore the Heavy-Duty Industrial Structural Facility in Kishangarh engineered by Er. Sudhir Soni. 32m clear span steel portal frames with 25-ton crane capacities.',
      keywords: ['structural engineer Kishangarh', 'industrial steel shed Ajmer', 'Er Sudhir Soni chartered engineer', 'crane girder design']
    }
  },
  {
    id: 'dp-ins-006',
    slug: 'mayo-link-institutional-academy',
    title: 'Institutional Academic Wing',
    category: 'institutional',
    status: 'completed',
    location: 'Mayo Link Road, Ajmer',
    area: '18,500 sq.ft.',
    floors: 'G+3 Floors',
    services: [
      'Educational Master Planning',
      'Chartered RCC Structural Design',
      'Acoustic Learning Hall Engineering',
      'Municipal ADA & Fire Department Clearances'
    ],
    description: 'A contemporary educational facility prioritizing natural cross-ventilation, daylight-filled lecture galleries, and safe earthquake-resistant ductile structural framing.',
    brief: 'An academic trust commissioned Design Plus to create a modern 4-story educational block featuring modular seminar halls, state-of-the-art computer laboratories, and shaded outdoor gathering terraces.',
    designApproach: 'Organized around wide single-loaded circulation verandahs facing north to avoid harsh solar heat, while maximizing natural breeze flow through high-ceilinged classrooms.',
    images: [
      '/images/projects/mayo-link-institutional-academy.jpg',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: [],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Educational Foundation & Trust',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Mayo Link Road Educational Precinct',
      displayLocation: 'Mayo Link Road, Ajmer, Rajasthan',
      isRegionalContext: true
    },
    year: '2023',
    siteArea: '12,000 sq.ft.',
    builtUpArea: '18,500 sq.ft.',
    categoryLabel: 'Institutional Campus',
    typology: 'Modern Educational & Academic Facility',
    badges: ['Built Commission', 'Educational Landmark', 'Chartered Certified'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma & Er. Sudhir Soni',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Ar. Vipul Verma & Er. Sudhir Soni'
    },
    scopeOfWork: [
      'Educational Master Planning',
      'Chartered RCC Structural Design',
      'Acoustic Learning Hall Engineering',
      'Municipal ADA & Fire Department Clearances'
    ],
    summary: 'A contemporary educational facility prioritizing natural cross-ventilation, daylight-filled lecture galleries, and safe earthquake-resistant ductile structural framing.',
    challenge: 'Designing a rapid-construction, high-occupancy facility with strict safety egress requirements within an active urban institutional zone.',
    approach: 'Implemented standardized modular RCC structural bays (6.5m x 7.5m) with twin external fire stair towers and wide 2.4-meter central corridors.',
    structuralEngineering: 'Special Ductile RC Frame (SMRF) certified under IS 13920:2016 ensuring highest life-safety protection for educational occupancy.',
    structuralDetails: {
      framingSystem: 'Special Moment-Resisting Frame (SMRF) with Beam-Column Joint Ductile Confinement',
      foundationType: 'Isolated and Combined Reinforced Concrete Footings with continuous tie-plinth beams',
      specialTechnicalFeatures: [
        'Redundant dual fire escape staircases meeting National Building Code egress norms',
        'Acoustically damped hollow-core floor slabs mitigating footsteps noise between levels',
        'Continuous perimeter sun-shading chajjas protecting large classroom window openings'
      ],
      charteredCertificationNote: 'High-Occupancy Educational Safety & Structural Certificate by Er. Sudhir Soni, Chartered Engineer.'
    },
    sustainabilityFeatures: [
      '100% natural daylit classrooms eliminating daytime lighting energy',
      'Solar thermal and 30kW rooftop solar grid powering all laboratory equipment',
      'Rainwater collection swales recharging local groundwater table'
    ],
    materialsUsed: [
      { name: 'Exposed Red Brick Cladding', application: 'Exterior solar screen envelopes and boundary arcade' },
      { name: 'Kota Stone Slabs', application: 'High-traffic classroom corridors, stairs, and lecture halls' },
      { name: 'Powder-Coated Aluminum Louvers', application: 'External sun-shading brise-soleil systems' }
    ],
    heroImage: '/images/projects/mayo-link-institutional-academy.jpg',
    heroImageDetails: {
      url: '/images/projects/mayo-link-institutional-academy.jpg',
      alt: 'Academic block exterior with brick facade on Mayo Link Road Ajmer',
      caption: 'Main entrance portico and north-facing classroom galleries.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Tiered academic lecture theater designed with calculated acoustic reverberation times.',
        alt: 'Tiered university auditorium',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wide open-air connecting corridor with Kota stone paving and natural greenery.',
        alt: 'Open air corridor with Kota stone flooring',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-ins-drw-01',
        title: 'Institutional Typical Classroom Level Layout',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Plan detailing modular 60-student classrooms, teacher prep suites, and dual fire escape towers.'
      }
    ],
    features: [
      'Earthquake-resistant Special Moment-Resisting Frame (SMRF) certified by Er. Sudhir Soni',
      'North-facing classroom orientation eliminating direct glare and minimizing air conditioning need',
      'Dual wide fire exit staircases with 120-minute fire separation doors',
      'Durable Kota stone flooring throughout high-traffic corridors for decades of zero maintenance',
      'Full municipal ADA approval with barrier-free ramp access and dedicated elevator infrastructure'
    ],
    seo: {
      metaTitle: 'Mayo Academic Wing | Institutional Architecture | Design Plus',
      metaDescription: 'Discover the Academic Wing on Mayo Link Road by Design Plus. High-capacity educational architecture in Ajmer featuring seismic engineering and passive solar design.',
      keywords: ['school architect Ajmer', 'institutional architecture Rajasthan', 'Design Plus projects', 'Er Sudhir Soni structural']
    }
  },

  // 07 Concept Studies & Architectural Design Research
  {
    id: 'dp-cpt-007',
    slug: 'modern-courtyard-residence',
    title: 'Modern Courtyard Residence',
    category: 'residential',
    status: 'concept-study',
    location: 'Kotra Valley, Ajmer',
    area: '4,200 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Conceptual Architectural Modeling',
      'Micro-Climate Thermal Simulation',
      'Parametric Solar Shading Analysis',
      'Zero-Carbon Material Study'
    ],
    description: 'A theoretical design study exploring the optimization of internal micro-climate courtyards in semi-arid rocky terrains.',
    brief: 'An exploratory architectural inquiry addressing the challenges of building into steeply sloping rocky terrain in Ajmer’s Kotra Valley, maximizing courtyard convection currents.',
    designApproach: 'The project proposes stepped terraces carved into the natural granite slope, wrapping around a shaded multi-level water courtyard. Computational fluid dynamic simulations guided the placement of upper wind scoops.',
    images: [
      '/images/projects/modern-courtyard-residence.jpg',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['architectural-design', '3d-elevation-design', '2d-floor-planning'],
    relatedLocations: ['ajmer', 'pushkar'],
    relatedProjects: ['contemporary-rajasthan-villa'],

    // Compatibility fields
    projectType: 'concept',
    projectCategory: 'residential',
    clientType: 'Studio Research & Development',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Kotra Valley Rocky Ridge',
      displayLocation: 'Kotra Valley, Ajmer (Design Study)',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '6,500 sq.ft.',
    builtUpArea: '4,200 sq.ft.',
    categoryLabel: 'Concept Study',
    typology: 'Climatic Prototype Courtyard Study',
    badges: ['CONCEPT PROJECT', 'DESIGN STUDY', 'Studio Research'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma & Er. Sudhir Soni',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Design Plus Research Lab'
    },
    scopeOfWork: [
      'Conceptual Architectural Modeling',
      'Micro-Climate Thermal Simulation',
      'Parametric Solar Shading Analysis',
      'Zero-Carbon Material Study'
    ],
    summary: 'A theoretical design study exploring the optimization of internal micro-climate courtyards in semi-arid rocky terrains.',
    challenge: 'Minimizing cut-and-fill on fragile granite hillside topography while providing generous outdoor living without desert heat exposure.',
    approach: 'Step-tiered massing that mirrors natural contour lines, coupled with earth-sheltered lower volumes that leverage subterranean thermal stability.',
    structuralEngineering: 'Engineered stepped retaining walls with soil-nailing stabilization and lightweight cantilevered timber-steel hybrid roof canopies.',
    structuralDetails: {
      framingSystem: 'Stepped Reinforced Concrete Retaining Pods with Hybrid Glulam & Structural Steel Overhangs',
      foundationType: 'Stepped Reinforced Concrete Pad Footings anchored directly into granitic bedrock',
      specialTechnicalFeatures: [
        'Rock-anchor tension cables securing 5.2m lightweight cantilever shade awnings',
        'Earth-coupled subterranean cooling chambers ducting cooled air through floor plenums',
        'Zero-waste excavation strategy reusing blasted granite for retaining stone gabions'
      ]
    },
    sustainabilityFeatures: [
      'Earth-tubing geothermal cooling delivering 22°C fresh air during 45°C summer peaks',
      'Greywater phyto-purification reed beds integrated into descending garden terraces',
      '100% on-site stone recycling eliminating transport embodied carbon'
    ],
    materialsUsed: [
      { name: 'Site-Quarried Granite Rubble', application: 'Retaining landscape walls and foundation masonry' },
      { name: 'Engineered Glulam Timber', application: 'Deep shaded pergola beams and roof cantilevers' },
      { name: 'Low-Iron High-Solar-Reflectance Glass', application: 'Internal courtyard clerestory glazing' }
    ],
    heroImage: '/images/projects/modern-courtyard-residence.jpg',
    heroImageDetails: {
      url: '/images/projects/modern-courtyard-residence.jpg',
      alt: 'Modern Courtyard Residence design study 3D render',
      caption: 'Architectural research model exploring step-tiered courtyard cooling.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Conceptual view of stepped granite terrace garden overlooking valley.',
        alt: 'Stepped terrace architecture model',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Internal courtyard water body simulation optimizing evaporative cooling.',
        alt: 'Evaporative cooling water courtyard render',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-mcr-drw-01',
        title: 'Parametric Airflow & Courtyard CFD Section',
        type: 'section',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sectional diagram mapping natural thermal buoyancy and cross-ventilation patterns.'
      }
    ],
    features: [
      'CONCEPT PROJECT / DESIGN STUDY — Speculative typological research',
      'Passive earth-sheltered stepped design reducing heating and cooling loads by 40%',
      'Integrated rainwater cascade routing surface runoff through biological filtration gardens',
      'Modular structural timber and local stone construction prototype',
      'Parametrically calculated solar cut-offs protecting living spaces during peak solar altitude'
    ],
    conceptStatus: 'design-study',
    designObjective: 'Investigate low-energy residential typologies on rocky desert topography.',
    spatialStrategy: 'Stepped terraces around central micro-climate courtyard.',
    materialDirection: 'Local granite, lime plaster, engineered glulam timber.',
    lightingStrategy: 'Indirect daylight reflected from internal water pools.',
    sustainabilityConsiderations: [
      'Passive stack ventilation',
      'Zero-waste site balancing',
      'High-mass thermal buffers'
    ],
    seo: {
      metaTitle: 'Modern Courtyard Residence | Concept Design Study | Design Plus',
      metaDescription: 'Conceptual design study of Modern Courtyard Residence by Design Plus. Exploring vernacular bioclimatic cooling and stepped hillside architecture in Rajasthan.',
      keywords: ['concept architecture Ajmer', 'courtyard design study', 'Design Plus research', 'sustainable villa Rajasthan']
    }
  },
  {
    id: 'dp-cpt-008',
    slug: 'contemporary-rajasthan-villa',
    title: 'Contemporary Rajasthan Villa',
    category: 'residential',
    status: 'concept-study',
    location: 'Pushkar Bypass, Ajmer District',
    area: '5,500 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Vernacular Climate Adaptation',
      'Jali Screen Daylight Optimization',
      'Thermal Mass Energy Modeling'
    ],
    description: 'A design study reinterpreting Rajasthani stone jali screens into an automated kinetic shading envelope for luxury rural residences.',
    brief: 'A theoretical study examining how kinetic sandstone screens can modulate intense summer sunlight while maintaining panoramic desert mountain views.',
    designApproach: 'Combines traditional hand-carved sandstone patterns with motorized pivot joints, creating a responsive facade that shifts with the solar path.',
    images: [
      '/images/projects/contemporary-rajasthan-villa.jpg',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['architectural-design', '3d-elevation-design', 'residential-architecture'],
    relatedLocations: ['pushkar', 'ajmer'],
    relatedProjects: ['pushkar-courtyard-haven', 'modern-courtyard-residence'],

    // Compatibility fields
    projectType: 'concept',
    projectCategory: 'residential',
    clientType: 'Studio Research & Development',
    city: 'Ajmer Region',
    locationDetails: {
      city: 'Pushkar Valley',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Pushkar Bypass Corridor',
      displayLocation: 'Pushkar Bypass, Rajasthan (Design Study)',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '8,000 sq.ft.',
    builtUpArea: '5,500 sq.ft.',
    categoryLabel: 'Concept Study',
    typology: 'Kinetic Facade Luxury Villa Prototype',
    badges: ['CONCEPT PROJECT', 'DESIGN STUDY', 'Parametric Research'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      projectLead: 'Design Plus Research Lab'
    },
    scopeOfWork: [
      'Vernacular Climate Adaptation',
      'Jali Screen Daylight Optimization',
      'Thermal Mass Energy Modeling'
    ],
    summary: 'A design study reinterpreting Rajasthani stone jali screens into an automated kinetic shading envelope for luxury rural residences.',
    challenge: 'Providing expansive glazed views of the desert landscape without incurring catastrophic solar heat gain.',
    approach: 'Layered exterior sandstone jali skin separated from the primary double-glazed envelope by a 900mm ventilated maintenance catwalk.',
    structuralEngineering: 'Steel outrigger sub-frame cantilevered from main concrete floor slabs to support 120kg sandstone panels with seismic dampeners.',
    structuralDetails: {
      framingSystem: 'Cast-in-place Concrete Flat Slab with Stainless Steel Facade Outrigger Brackets',
      foundationType: 'Raft foundation on compact silty sand',
      specialTechnicalFeatures: [
        'Motorized stainless steel pivot shafts rotating stone jali louvers',
        'Cavity-wall thermal insulation achieving U-value of 0.28 W/m²K',
        'Structural thermal break connectors at all slab-to-outrigger junctions'
      ]
    },
    sustainabilityFeatures: [
      '48% reduction in peak cooling energy via automated solar angle tracking',
      '100% natural ventilation bypass mode during cool desert nights',
      'Integrated solar roof shingles generating 18 kWp'
    ],
    materialsUsed: [
      { name: 'Khatu Yellow Sandstone', application: 'Kinetic perforated jali panels' },
      { name: 'Triple-Glazed Low-E Glass', application: 'Internal thermal envelope' },
      { name: 'Polished Kota Stone', application: 'High-thermal-inertia interior flooring' }
    ],
    heroImage: '/images/projects/contemporary-rajasthan-villa.jpg',
    heroImageDetails: {
      url: '/images/projects/contemporary-rajasthan-villa.jpg',
      alt: 'Contemporary Rajasthan Villa concept render with sandstone screen',
      caption: 'Architectural rendering showcasing kinetic sandstone jali facade in afternoon sunlight.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Interplay of dappled light and shadow inside the double-height great room.',
        alt: 'Great room interior with patterned daylight',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
        caption: 'Night view showing interior glow diffusing through perforated stone screen.',
        alt: 'Illuminated night facade render',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-crv-drw-01',
        title: 'Kinetic Stone Jali Mechanical & Structural Detail',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Detail illustrating motor drive spindle, stainless steel bushing, and stone clamping collar.'
      }
    ],
    features: [
      'CONCEPT PROJECT / DESIGN STUDY — Speculative typological research',
      'Kinetic sandstone solar screen responding to diurnal solar angles',
      'Double-skin ventilated envelope dramatically lowering HVAC sizing',
      'Harmonious integration of traditional Rajasthani craft with automation engineering',
      'High-mass Kota stone flooring maintaining interior cooling stability'
    ],
    conceptStatus: 'concept-study',
    designObjective: 'Explore kinetic vernacular shading systems for luxury desert architecture.',
    spatialStrategy: 'Central grand living volume shielded by dynamic external stone envelope.',
    materialDirection: 'Yellow sandstone, low-E glazing, polished Kota stone.',
    lightingStrategy: 'Filtered dappled light casting intricate geometric shadow patterns.',
    sustainabilityConsiderations: [
      'Automated solar tracking',
      'Natural desert night flush cooling',
      'Integrated building photovoltaics'
    ],
    seo: {
      metaTitle: 'Contemporary Rajasthan Villa | Concept Study | Design Plus',
      metaDescription: 'Concept study of Contemporary Rajasthan Villa by Design Plus. Kinetic sandstone jali screens and responsive desert architecture.',
      keywords: ['concept villa Rajasthan', 'kinetic jali screen', 'Design Plus study', 'luxury desert house']
    }
  },
  {
    id: 'dp-cpt-009',
    slug: 'urban-duplex-residence',
    title: 'Urban Duplex Residence',
    category: 'residential',
    status: 'concept-study',
    location: 'Adarsh Nagar, Ajmer',
    area: '2,800 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Narrow-Plot Architectural Planning',
      'Light-Well Optimization',
      'Vastu-Compliant Spatial Zoning'
    ],
    description: 'A compact urban residence design study addressing tight 25ft x 50ft urban plot constraints in dense Rajasthan residential colonies.',
    brief: 'Developing an optimal spatial template for tight urban infill plots where lateral setbacks are minimal and side windows cannot provide daylight.',
    designApproach: 'Introduced a continuous central vertical atrium and skylight core that brings sunlight into the core of every room while acting as a natural thermal chimney.',
    images: [
      '/images/projects/urban-duplex-residence.jpg',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['residential-architecture', '2d-floor-planning', '3d-elevation-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['modern-courtyard-residence'],

    // Compatibility fields
    projectType: 'concept',
    projectCategory: 'residential',
    clientType: 'Studio Research & Development',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Adarsh Nagar Urban Infill',
      displayLocation: 'Adarsh Nagar, Ajmer (Design Study)',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '1,250 sq.ft.',
    builtUpArea: '2,800 sq.ft.',
    categoryLabel: 'Concept Study',
    typology: 'Narrow Plot Urban Living Infill Prototype',
    badges: ['CONCEPT PROJECT', 'DESIGN STUDY', 'Urban Planning'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      projectLead: 'Design Plus Research Lab'
    },
    scopeOfWork: [
      'Narrow-Plot Architectural Planning',
      'Light-Well Optimization',
      'Vastu-Compliant Spatial Zoning'
    ],
    summary: 'A compact urban residence design study addressing tight 25ft x 50ft urban plot constraints in dense Rajasthan residential colonies.',
    challenge: 'Overcoming claustrophobic living conditions and poor ventilation on row-house urban plots bounded by party walls on three sides.',
    approach: 'A triple-height central vertical light shaft linking living, dining, and mezzanine study spaces with a motorized venting skylight.',
    structuralEngineering: 'Slim RCC moment frame with thin slab profiles maximizing interior vertical floor-to-ceiling heights.',
    structuralDetails: {
      framingSystem: 'Reinforced Concrete Rigid Frame with Embedded Steel Flitch Beams',
      foundationType: 'Combined Footings along boundary party walls',
      specialTechnicalFeatures: [
        'Acoustic boundary wall layering mitigating neighbor sound transfer',
        'Cantilevered open-riser steel staircase allowing unrestricted light penetration',
        'Structural glass bridge spanning the central atrium void'
      ]
    },
    sustainabilityFeatures: [
      'Automated solar-powered exhaust dampers at the top of the atrium',
      'Rainwater collection cistern integrated beneath the entrance driveway',
      'Zero artificial lighting needed in interior living zones during daytime'
    ],
    materialsUsed: [
      { name: 'White Makrana Marble', application: 'Ground floor living and light-well reflective base' },
      { name: 'Perforated Aluminum Screens', application: 'Front street elevation privacy screen' },
      { name: 'Solid Teak Wood Slats', application: 'Atrium vertical screening and stair treads' }
    ],
    heroImage: '/images/projects/urban-duplex-residence.jpg',
    heroImageDetails: {
      url: '/images/projects/urban-duplex-residence.jpg',
      alt: 'Urban Duplex Residence concept render interior light well',
      caption: 'Triple-height interior light-well bringing natural illumination into narrow urban plot.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Double-height living space with glass bridge overhead.',
        alt: 'Living area with double height ceiling',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Mezzanine home study overlooking internal light atrium.',
        alt: 'Mezzanine office overlook',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-udr-drw-01',
        title: '25x50 Urban Infill Optimal Floor Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Vastu-compliant zero-corridor layout maximizing usable room dimensions.'
      }
    ],
    features: [
      'CONCEPT PROJECT / DESIGN STUDY — Speculative typological research',
      'Central vertical light shaft illuminating row-house plot with zero side setbacks',
      'Stack-effect automated venting ensuring natural convective cooling',
      'Strict Vastu Shastra compliance integrated with clean contemporary aesthetics',
      'Space-maximizing open-riser timber staircase and structural glass bridges'
    ],
    conceptStatus: 'design-study',
    designObjective: 'Solve lighting, ventilation, and space constraints on dense 25x50ft urban plots.',
    spatialStrategy: 'Vertical light atrium organizing stacked living and private quarters.',
    materialDirection: 'White marble, teak screening, perforated aluminum facade.',
    lightingStrategy: 'Top-lit central skylight washing all three levels in diffused sun.',
    sustainabilityConsiderations: [
      'Natural daylit core',
      'Convective thermal chimney',
      'Compact footprint efficiency'
    ],
    seo: {
      metaTitle: 'Urban Duplex Residence | Narrow Plot Concept Study | Design Plus',
      metaDescription: 'Design study of Urban Duplex Residence by Design Plus. Smart narrow-plot architecture with central light atrium in Ajmer, Rajasthan.',
      keywords: ['narrow plot house design', '25x50 floor plan Ajmer', 'urban duplex concept', 'Design Plus study']
    }
  },
  {
    id: 'dp-cpt-010',
    slug: 'boutique-commercial-office',
    title: 'Boutique Commercial Office',
    category: 'commercial',
    status: 'concept-study',
    location: 'Kutchery Road Commercial Strip, Ajmer',
    area: '8,000 sq.ft.',
    floors: 'G+3 Floors',
    services: [
      'Biophilic Workspace Design',
      'Green Facade Integration',
      'Flexible Modular Workplace Engineering'
    ],
    description: 'A concept study proposing a biophilic commercial building wrapped in vertical cascading planters and solar-shading terracotta fins.',
    brief: 'Reimagining the sterile urban commercial office block as a living, breathable ecosystem that improves employee wellness and minimizes cooling power.',
    designApproach: 'Terraced balconies feature built-in micro-irrigation planter troughs that shade the building facade, while internal open light wells provide natural air change.',
    images: [
      '/images/projects/boutique-commercial-office.jpg',
      '/images/projects/dp-cpt-010-hero.webp',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['commercial-architecture', '3d-elevation-design', 'interior-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['vaishali-studio-interiors'],

    // Compatibility fields
    projectType: 'concept',
    projectCategory: 'commercial',
    clientType: 'Studio Research & Development',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Kutchery Road Commercial Strip',
      displayLocation: 'Kutchery Road, Ajmer (Design Study)',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '4,000 sq.ft.',
    builtUpArea: '8,000 sq.ft.',
    categoryLabel: 'Concept Study',
    typology: 'Biophilic Low-Energy Corporate Plaza Prototype',
    badges: ['CONCEPT PROJECT', 'DESIGN STUDY', 'Biophilic Design'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma & Er. Sudhir Soni',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Design Plus Research Lab'
    },
    scopeOfWork: [
      'Biophilic Workspace Design',
      'Green Facade Integration',
      'Flexible Modular Workplace Engineering'
    ],
    summary: 'A concept study proposing a biophilic commercial building wrapped in vertical cascading planters and solar-shading terracotta fins.',
    challenge: 'Addressing high solar radiation and street air pollution on dense downtown commercial thoroughfares.',
    approach: 'Double-layer living green facade providing acoustic absorption, dust filtration, and natural evaporative cooling.',
    structuralEngineering: 'Engineered perimeter cantilevered concrete planters with integral drainage channels and root barrier waterproofing.',
    structuralDetails: {
      framingSystem: 'Concrete Skeleton Frame with Post-Tensioned Perimeter Balcony Cantilevers',
      foundationType: 'Continuous Raft Foundation on dense gravelly sand',
      specialTechnicalFeatures: [
        'Dedicated structural load allowance for saturated landscape soil beds (18 kN/m³)',
        'Sub-surface automated drip-irrigation network fed by treated AC condensate water',
        'High-performance acoustic glazing isolating 42 dB of street traffic noise'
      ]
    },
    sustainabilityFeatures: [
      'Living plant buffer lowering building skin temperature by up to 8°C',
      'AC condensate recycling meeting 100% of landscape irrigation requirements',
      'Rooftop shaded social pavilion with photovoltaic solar pergola'
    ],
    materialsUsed: [
      { name: 'Terracotta Baguette Louvers', application: 'Passive solar screen facade elements' },
      { name: 'Exposed Aggregate Concrete', application: 'Durable external planters and spandrel panels' },
      { name: 'Acoustic Double Glazing', application: 'Floor-to-ceiling street-facing facade' }
    ],
    heroImage: '/images/projects/boutique-commercial-office.jpg',
    heroImageDetails: {
      url: '/images/projects/boutique-commercial-office.jpg',
      alt: 'Boutique Commercial Office biophilic building facade wrapped in vertical cascading planters and greenery',
      caption: 'Street perspective showing contemporary boutique commercial building facade wrapped in lush cascading vertical gardens and green terraces.'
    },
    gallery: [
      '/images/projects/dp-cpt-010-hero.webp',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: '/images/projects/dp-cpt-010-hero.webp',
        caption: 'Boutique commercial corporate exterior with refined architectural proportions and solar shading.',
        alt: 'Boutique corporate office exterior perspective',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Biophilic open-plan workstation floor framed by exterior greenery and daylight.',
        alt: 'Daylit modern biophilic office floor with plants',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-bco-drw-01',
        title: 'Biophilic Office Typical Floor & Balcony Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Plan detailing modular desk arrangements, perimeter planting troughs, and acoustic cores.'
      }
    ],
    features: [
      'CONCEPT PROJECT / DESIGN STUDY — Speculative typological research',
      'Vertical biophilic garden facade filtering urban particulates and reducing heat',
      '100% HVAC condensate recapture providing automated plant irrigation',
      'Flexible modular column grid accommodating single or multi-tenant occupancy',
      'Acoustically engineered curtain wall isolating intense urban street noise'
    ],
    conceptStatus: 'concept-study',
    designObjective: 'Create a healthy, biophilic commercial office typology for urban Rajasthan.',
    spatialStrategy: 'Open-plan flexible office floors wrapped in continuous green balconies.',
    materialDirection: 'Terracotta baguettes, concrete planters, high-performance acoustic glass.',
    lightingStrategy: 'Filtered natural daylight balanced with high-efficiency circadian LEDs.',
    sustainabilityConsiderations: [
      'Living plant thermal buffer',
      'Zero-waste irrigation condensate use',
      'Rooftop photovoltaic shade canopy'
    ],
    seo: {
      metaTitle: 'Boutique Commercial Office | Biophilic Concept Study | Design Plus',
      metaDescription: 'Concept study of Boutique Commercial Office by Design Plus. Biophilic corporate architecture with living green facade in Ajmer, Rajasthan.',
      keywords: ['biophilic office Ajmer', 'green commercial building', 'Design Plus concept', 'corporate architecture Rajasthan']
    }
  },
  {
    id: 'dp-cpt-011',
    slug: 'contemporary-retail-interior',
    title: 'Contemporary Retail Interior',
    category: 'interiors',
    status: 'concept-study',
    location: 'Marble Market Hub, Kishangarh',
    area: '3,200 sq.ft.',
    floors: 'Single Level Gallery',
    services: [
      'Experiential Retail Architecture',
      'Monolithic Stone Display Engineering',
      'Exhibition Lighting Design'
    ],
    description: 'A conceptual interior study for a luxury stone showroom celebrating Rajasthan marble through monolithic sculptural displays and museum-grade lighting.',
    brief: 'Reimagining traditional cluttered marble showrooms into a serene, contemplative architectural gallery where natural stone slabs are treated as art.',
    designApproach: 'Conceived as an austere, cave-like stone sanctuary featuring floating cantilevered marble slabs, micro-cement seamless floors, and high-CRI 98+ focused beam lighting.',
    images: [
      '/images/projects/contemporary-retail-interior.jpg',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['interior-design', '3d-elevation-design', 'architectural-design'],
    relatedLocations: ['jaipur', 'ajmer'],
    relatedProjects: ['vaishali-studio-interiors', 'industrial-spans-kishangarh'],

    // Compatibility fields
    projectType: 'concept',
    projectCategory: 'interiors',
    clientType: 'Studio Research & Development',
    city: 'Kishangarh',
    locationDetails: {
      city: 'Kishangarh',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Marble Market Hub',
      displayLocation: 'Kishangarh, Rajasthan (Design Study)',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '3,200 sq.ft.',
    builtUpArea: '3,200 sq.ft.',
    categoryLabel: 'Concept Study',
    typology: 'Curated Stone Gallery & Luxury Retail Concept',
    badges: ['CONCEPT PROJECT', 'DESIGN STUDY', 'Experiential Interior'],
    isFeatured: false,
    lead: 'Ar. Vipul Verma',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      projectLead: 'Design Plus Research Lab'
    },
    scopeOfWork: [
      'Experiential Retail Architecture',
      'Monolithic Stone Display Engineering',
      'Exhibition Lighting Design'
    ],
    summary: 'A conceptual interior study for a luxury stone showroom celebrating Rajasthan marble through monolithic sculptural displays and museum-grade lighting.',
    challenge: 'Safely displaying 800kg monolithic natural stone slabs with an appearance of weightlessness while allowing clients 360-degree tactile inspection.',
    approach: 'Engineered sub-floor steel spreader plates with concealed vertical cantilever pylons that lock slabs into place without visible floor brackets.',
    structuralEngineering: 'Structural steel cantilever pylons welded to anchor plates bolted into the RCC foundation slab.',
    structuralDetails: {
      framingSystem: 'Heavy Steel Concealed Pylons & Overhead Unistrut Display Grid',
      foundationType: 'Retrofit into Existing Concrete Slab with High-Yield Chemical Anchors',
      specialTechnicalFeatures: [
        'Concealed steel moment arms carrying up to 1.2 metric tons of stone per module',
        'Laser-aligned ceiling track lighting grid with interchangeable magnetic optics',
        'Anti-scratch micro-cement floor coating with 75 MPa compressive strength'
      ]
    },
    sustainabilityFeatures: [
      'Utilizing quarry stone cutoffs for terrazzo reception desk and wall accents',
      '100% solid-state LED fixtures with ultra-low heat emission protecting marble',
      'Low-VOC mineral plaster finishes throughout'
    ],
    materialsUsed: [
      { name: 'Kishangarh White Marble', application: 'Sculptural display monoliths and central consultation desk' },
      { name: 'Seamless Neutral Micro-Cement', application: 'Monolithic floor and perimeter gallery walls' },
      { name: 'Dark Fluted Walnut Timber', application: 'VIP consultation lounge and bespoke private sales booths' }
    ],
    heroImage: '/images/projects/contemporary-retail-interior.jpg',
    heroImageDetails: {
      url: '/images/projects/contemporary-retail-interior.jpg',
      alt: 'Contemporary Retail Interior conceptual rendering',
      caption: 'Contemplative stone gallery interior with floating marble monoliths and warm micro-cement surfaces.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
        caption: 'Private material consultation lounge with fluted walnut joinery and museum track illumination.',
        alt: 'Material consultation lounge',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Monolithic marble display plinths isolated under high-CRI spotlights.',
        alt: 'Marble display gallery',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-cri-drw-01',
        title: 'Curated Architectural Gallery Promenade Layout',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Plan showing entry vestibule, grand stone gallery, and private material archive salon.'
      },
      {
        id: 'dp-cri-drw-02',
        title: 'Floating Stone Plinth & Concealed Lighting Joinery Detail',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Engineering section detailing sub-floor steel load spreader plates and recessed LED channels.'
      }
    ],
    features: [
      'CONCEPT PROJECT / DESIGN STUDY — Speculative typological research',
      'Museum-grade gallery design transforming natural stone into sculptural art',
      'Floating monolithic marble display plinths with sub-floor load spreader engineering',
      'Ultra-high CRI 98+ precision optical lighting isolating natural stone veining',
      'Zero-VOC mineral micro-cement surfaces and custom fluted walnut millwork'
    ],
    conceptStatus: 'design-study',
    designObjective: 'Transform marble trade into an elevated experiential design gallery.',
    spatialStrategy: 'Curated architectural promenade with isolated sculptural stone monoliths.',
    materialDirection: 'Kishangarh marble, micro-cement, dark walnut.',
    lightingStrategy: 'Precision high-CRI spotlights highlighting marble veins.',
    sustainabilityConsiderations: [
      'Upcycled quarry cutoffs for terrazzo elements',
      'Low-energy precision optical LEDs',
      'Non-toxic mineral binders'
    ],
    seo: {
      metaTitle: 'Contemporary Retail Interior | Concept Gallery | Design Plus',
      metaDescription: 'Design study of Contemporary Retail Interior by Design Plus. Experiential stone and architectural craft gallery in Kishangarh, Rajasthan.',
      keywords: ['marble showroom design Kishangarh', 'luxury retail interior Rajasthan', 'concept retail architecture', 'Design Plus study']
    }
  },
  {
    id: 'dp-res-017',
    slug: 'op-soni-residence-taragarh-road',
    title: 'Mr. OP Soni Residence',
    category: 'residential',
    status: 'completed',
    location: 'Taragarh Road, Ajmer',
    area: '4,200 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A stately modern residence on Taragarh Road, Ajmer — symmetrical facade with arched colonnades, layered balconies, and warm evening illumination.',
    brief: 'A grand family residence with classical-modern fusion and generous outdoor living.',
    designApproach: 'Symmetrical massing with arched openings; layered balconies create depth against the clean plastered facade.',
    images: [
      '/images/projects/op-soni-residence.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '4,200 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Modern Villa',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Stately modern residence with arched colonnades on Taragarh Road.',
    challenge: 'Grand street presence with classical-modern balance.',
    approach: 'Symmetrical facade, arched openings, layered balconies.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/op-soni-residence.jpg',
    heroImageDetails: {
      url: '/images/projects/op-soni-residence.jpg',
      alt: 'OP Soni residence — modern villa on Taragarh Road, Ajmer',
      caption: 'Evening view of OP Soni Residence, Taragarh Road, Ajmer.'
    },
    gallery: [
      '/images/projects/op-soni-residence.jpg'
    ],
    galleryImages: [
      {
        url: '/images/projects/op-soni-residence.jpg',
        caption: 'Dusk view — arched colonnades and layered balconies glowing warm.',
        alt: 'Residence evening render',
        aspect: 'wide'
      }
    ],
    features: ['Arched colonnades', 'Layered balconies', 'Grand entrance'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Taragarh Road',
      displayLocation: 'Taragarh Road, Ajmer, Rajasthan',
      latitude: 26.4209,
      longitude: 74.6342,
    },
  },
  {
    id: 'dp-res-018',
    slug: 'vijay-swarnkar-residence-udaipur',
    title: 'Mr. Vijay Swarnkar Residence',
    category: 'residential',
    status: 'completed',
    location: 'Udaipur',
    area: '5,000 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A luxurious modern villa in Udaipur — clean white volumes, glass railings, manicured courtyards, and evening light washing over the facade.',
    brief: 'A premium family villa with contemporary luxury and seamless indoor-outdoor flow.',
    designApproach: 'Crisp geometric volumes with full-height glazing; landscaped forecourt frames the arrival.',
    images: [
      '/images/projects/vijay-swarnkar-residence.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['udaipur'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Udaipur',
    year: '2024',
    builtUpArea: '5,000 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Luxury Villa',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Luxurious modern villa with glass railings in Udaipur.',
    challenge: 'Premium luxury with seamless indoor-outdoor living.',
    approach: 'Geometric volumes, full-height glazing, landscaped courts.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/vijay-swarnkar-residence.jpg',
    heroImageDetails: {
      url: '/images/projects/vijay-swarnkar-residence.jpg',
      alt: 'Vijay Swarnkar residence — luxury modern villa in Udaipur',
      caption: 'Evening view of Vijay Swarnkar Residence, Udaipur.'
    },
    gallery: [
      '/images/projects/vijay-swarnkar-residence.jpg'
    ],
    galleryImages: [
      {
        url: '/images/projects/vijay-swarnkar-residence.jpg',
        caption: 'Dusk view — glass railings and warm light over manicured courts.',
        alt: 'Villa evening render',
        aspect: 'wide'
      }
    ],
    features: ['Glass railings', 'Manicured courtyards', 'Full-height glazing'],
    locationDetails: {
      city: 'Udaipur',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Udaipur',
      displayLocation: 'Udaipur, Rajasthan',
      latitude: 24.5813,
      longitude: 73.6956,
    },
  },
  {
    id: 'dp-res-019',
    slug: 'beeram-khan-residence-kharva',
    title: 'Mr. Beeram Khan Residence',
    category: 'residential',
    status: 'completed',
    location: 'Kharva, Ajmer',
    area: '3,800 sq.ft.',
    floors: 'G+1 Floors',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'A contemporary family home in Kharva, Ajmer — warm material palette, deep verandas, and a welcoming forecourt under evening skies.',
    brief: 'A comfortable modern home rooted in local context with generous verandas.',
    designApproach: 'Horizontal massing with deep overhangs; warm textures balance the modern geometry.',
    images: [
      '/images/projects/beeram-khan-residence.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    year: '2024',
    builtUpArea: '3,800 sq.ft.',
    categoryLabel: 'Residential',
    typology: 'Modern Family Home',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['Architectural Design', 'Structural Design'],
    summary: 'Contemporary family home with deep verandas in Kharva.',
    challenge: 'Modern comfort with local contextual warmth.',
    approach: 'Horizontal massing, deep overhangs, warm textures.',
    structuralEngineering: 'RCC framed structure as per IS codes.',
    heroImage: '/images/projects/beeram-khan-residence.jpg',
    heroImageDetails: {
      url: '/images/projects/beeram-khan-residence.jpg',
      alt: 'Beeram Khan residence — modern family home in Kharva, Ajmer',
      caption: 'Evening view of Beeram Khan Residence, Kharva, Ajmer.'
    },
    gallery: [
      '/images/projects/beeram-khan-residence.jpg'
    ],
    galleryImages: [
      {
        url: '/images/projects/beeram-khan-residence.jpg',
        caption: 'Dusk view — warm material palette under evening skies.',
        alt: 'Home evening render',
        aspect: 'wide'
      }
    ],
    features: ['Deep verandas', 'Warm material palette', 'Welcoming forecourt'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Kharva',
      displayLocation: 'Kharva, Ajmer, Rajasthan',
      latitude: 26.2222,
      longitude: 74.4808,
    },
  },
  {
    id: 'dp-sports-001',
    slug: 'stadium-kishangarh',
    title: 'Stadium, Kishangarh',
    category: 'institutional',
    status: 'under-construction',
    location: 'Kishangarh',
    area: '12 Acres',
    floors: 'Single Tier',
    services: [
      'Architectural Design',
      'Structural Design & Engineering',
      'Master Planning'
    ],
    description: 'A modern sports stadium in Kishangarh — comprehensive site plan with athletic tracks, spectator stands, and integrated support facilities.',
    brief: 'A civic sports facility serving Kishangarh with professional-grade infrastructure.',
    designApproach: 'Efficient site planning with clear circulation; spectator comfort and athlete performance drive the layout.',
    images: [
      '/images/projects/stadium-kishangarh.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', 'master-planning'],
    relatedLocations: ['kishangarh'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Institutional Client',
    city: 'Kishangarh',
    year: '2025',
    builtUpArea: '12 Acres',
    categoryLabel: 'Institutional',
    typology: 'Sports Stadium',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design', 'Master Planning'],
    summary: 'Modern sports stadium with athletic tracks in Kishangarh.',
    challenge: 'Professional-grade sports infrastructure for the region.',
    approach: 'Efficient planning, clear circulation, spectator comfort.',
    structuralEngineering: 'RCC and steel structure as per IS codes.',
    heroImage: '/images/projects/stadium-kishangarh.jpg',
    heroImageDetails: {
      url: '/images/projects/stadium-kishangarh.jpg',
      alt: 'Stadium Kishangarh — architectural site plan',
      caption: 'Site plan of Stadium, Kishangarh.'
    },
    gallery: [
      '/images/projects/stadium-kishangarh.jpg'
    ],
    galleryImages: [
      {
        url: '/images/projects/stadium-kishangarh.jpg',
        caption: 'Comprehensive site plan — tracks, stands, and support facilities.',
        alt: 'Stadium site plan',
        aspect: 'wide'
      }
    ],
    features: ['Athletic tracks', 'Spectator stands', 'Support facilities'],
    locationDetails: {
      city: 'Kishangarh',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Kishangarh',
      displayLocation: 'Kishangarh, Rajasthan',
      latitude: 26.5813,
      longitude: 74.8738,
    },
  },
  {
    id: 'dp-inst-ram-mandir-apekshan',
    slug: 'ram-mandir-apekshan-city-ajmer',
    title: 'Ram Mandir, Apekshan City',
    category: 'institutional',
    status: 'completed',
    hidden: false,
    location: 'Apekshan City, Chachivas, Ajmer',
    area: '3,000 sq.ft.',
    services: [
      'Architectural Design',
      'Structural Design & Engineering',
      '3D Elevation Design'
    ],
    description: 'Ram Mandir at Apekshan City, Chachivas (Ajmer) — a white-and-gold temple complex completed in 2026. Traditional shikhara and domed pavilions meet contemporary structural engineering: intricate jali screens, carved cornices and saffron flags above a serene sanctum.',
    brief: 'Design a landmark neighbourhood temple that honours classical Indian temple architecture while meeting modern structural and safety codes.',
    designApproach: 'Symmetrical temple planning around a central sanctum; white marble-finish facades with gold accents; deep jali screens for filtered daylight and ventilation in Rajasthan heat.',
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4d3d1e2?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Private Trust',
    city: 'Ajmer',
    year: '2026',
    builtUpArea: '3,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'Temple / Religious',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', 'Structural Design', '3D Visualisation'],
    summary: 'Neighbourhood Ram temple at Apekshan City, Chachivas, Ajmer — completed 2026.',
    challenge: 'Classical temple aesthetics with modern structural safety and low-maintenance finishes.',
    approach: 'Traditional shikhara massing, engineered RCC frame, climate-responsive jali screens.',
    structuralEngineering: 'RCC framed structure with seismic detailing as per IS 1893; foundation designed for local soil conditions.',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010f4d3d1e2?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Traditional shikhara', 'Jali screen facades', 'Sanctum with natural light', 'Low-maintenance finishes'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Apekshan City, Chachivas',
      displayLocation: 'Apekshan City, Chachivas, Ajmer, Rajasthan',
      latitude: 26.5631,
      longitude: 74.6922,
    },
  },
  {
    id: 'dp-inst-madhubaneshwar-mandir',
    slug: 'madhubaneshwar-mahadev-mandir-ajmer',
    title: 'Madhubaneshwar Mahadev Mandir',
    category: 'institutional',
    status: 'in-design',
    hidden: false,
    location: 'UIT Colony, Nakamadar, Ajmer',
    area: '4,000 sq.ft.',
    services: [
      'Architectural Design',
      'Structural Design & Engineering',
      '2D Floor Planning',
      '3D Elevation Design'
    ],
    description: 'Madhubaneshwar Mahadev Mandir at UIT Colony, Nakamadar (Ajmer) — proposed 2026. A 4,000 sq ft temple campus with Ram Darbar, Mataji and Shiv Parivar shrines, twin ardh-mandapas, garden forecourt and accessible ramped entry. Proposal plan prepared by Er. Sudhir Soni.',
    brief: 'Plan a complete Mahadev temple campus — three shrines, congregation halls, and visitor amenities — on a compact urban plot.',
    designApproach: 'Axial temple planning: Ram Darbar at the centre flanked by Mataji and Shiv Parivar shrines; twin 24-ft ardh-mandapas for gatherings; garden forecourt as a transitional threshold from the road.',
    images: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedLocations: ['ajmer'],
    relatedProjects: ['ram-mandir-apekshan-city-ajmer'],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Private Trust',
    city: 'Ajmer',
    year: '2026',
    builtUpArea: '4,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'Temple / Religious (Proposed)',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Proposal Plan', 'Architectural Design', 'Structural Design'],
    summary: 'Proposed Mahadev temple campus at Nakamadar, Ajmer — three shrines, twin mandapas, garden forecourt.',
    challenge: 'Fitting three shrines, congregation space and amenities on a compact plot with clear circulation.',
    approach: 'Axial shrine layout, shared mandapa halls, ramped accessible entry from the road.',
    structuralEngineering: 'RCC framed structure with seismic detailing as per IS 1893; proposal-stage foundation scheme.',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Three shrines', 'Twin ardh-mandapas', 'Garden forecourt', 'Accessible ramp entry', 'Toilet block & shoe rack'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'UIT Colony, Nakamadar',
      displayLocation: 'UIT Colony, Nakamadar, Ajmer, Rajasthan',
      latitude: 26.4516,
      longitude: 74.6654,
    },
  },
  {
    id: 'dp-struct-delhigate-flyover',
    slug: 'delhigate-flyover-udaipur',
    title: 'Delhigate Flyover, Udaipur',
    category: 'structural',
    status: 'in-design',
    hidden: false,
    location: 'Delhi Gate, Udaipur, Rajasthan',
    area: '1,000 m length',
    services: [
      'Structural Design & Engineering',
      'Infrastructure Consulting'
    ],
    description: 'Delhigate Flyover at Delhi Gate, Udaipur — proposed 2025. A 1,000-metre urban flyover easing congestion through Bapu Bazaar and Nagar Nigam corridors, with general arrangement drawings, vertical clearance planning and two-way lane configuration.',
    brief: 'Engineer a 1 km urban flyover through a congested heritage corridor with minimal disruption and full statutory compliance.',
    designApproach: 'Proposal-D alignment: 5.50 m vertical clearance, 4-lane divided two-way configuration, 1-in-25 gradient, 30 kmph design speed — coordinated with existing Bapu Bazaar street fabric.',
    images: [
      '/images/projects/delhigate-flyover-drawing.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design'],
    relatedLocations: ['udaipur'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'structural',
    clientType: 'Government',
    city: 'Udaipur',
    year: '2025',
    builtUpArea: '1,000 m flyover length',
    categoryLabel: 'Structural Engineering',
    typology: 'Urban Flyover (Proposed)',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['General Arrangement Drawings', 'Structural Design', 'Proposal Documentation'],
    summary: 'Proposed 1 km flyover at Delhi Gate, Udaipur — decongesting Bapu Bazaar corridor.',
    challenge: 'Fitting a 4-lane flyover through a dense heritage commercial corridor.',
    approach: 'Proposal-D alignment with staged construction to keep the bazaar operational.',
    structuralEngineering: 'RCC flyover structure; vertical clearance 5.50 m; designed for urban loading and seismic zone requirements.',
    heroImage: '/images/projects/delhigate-flyover-drawing.jpg',
    gallery: [
      '/images/projects/delhigate-flyover-drawing.jpg'
    ],
    features: ['1,000 m length', '4-lane divided', '5.50 m vertical clearance', 'Bapu Bazaar corridor'],
    locationDetails: {
      city: 'Udaipur',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Delhi Gate, Bapu Bazaar',
      displayLocation: 'Delhi Gate, Udaipur, Rajasthan',
      latitude: 24.5856,
      longitude: 73.6953,
    },
  },
  {
    id: 'dp-inst-apekshan-temple-chachiwas',
    slug: 'apekshan-temple-chachiwas-ajmer',
    title: 'Shri Temple, Apekshan City',
    category: 'institutional',
    status: 'completed',
    hidden: false,
    location: 'Apekshan City, Chachiwas, Ajmer, Rajasthan',
    area: '3,000 sq.ft.',
    floors: 'Single Shrine Complex',
    services: [
      'Architectural Design',
      '3D Visualization',
      'Structural Design & Engineering'
    ],
    description: 'A white marble temple complex at Apekshan City, Chachiwas, Ajmer — completed 2026. Traditional shikhara forms in carved white stone with gold-leafed kalash, jaali screens and a landscaped forecourt, designed and visualized in 3D by Design Plus.',
    brief: 'Design a landmark community temple blending traditional Maru-Gurjara vocabulary with clean contemporary execution.',
    designApproach: 'Symmetrical shrine massing, carved jaali for filtered daylight, gold kalash accents against white marble, and a planted forecourt for festival gatherings.',
    images: [
      '/images/projects/apekshan-temple-3d-01.jpg',
      '/images/projects/apekshan-temple-3d-02.jpg',
      '/images/projects/apekshan-temple-3d-03.jpg'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Private Trust',
    city: 'Ajmer',
    year: '2026',
    builtUpArea: '3,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'Temple / Religious',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Architectural Design', '3D Views & Visualization', 'Structural Design'],
    summary: 'White marble temple at Apekshan City, Chachiwas — completed 2026.',
    challenge: 'Delivering intricate traditional carving language within a tight community budget and timeline.',
    approach: 'Modular carved-stone detailing, 3D views locked with the trust before execution.',
    structuralEngineering: 'RCC framed shrine structure with stone cladding as per IS codes.',
    heroImage: '/images/projects/apekshan-temple-3d-01.jpg',
    gallery: [
      '/images/projects/apekshan-temple-3d-01.jpg',
      '/images/projects/apekshan-temple-3d-02.jpg',
      '/images/projects/apekshan-temple-3d-03.jpg'
    ],
    features: ['3D visualized', 'White marble + gold kalash', 'Carved jaali screens', 'Landscaped forecourt'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Apekshan City, Chachiwas',
      displayLocation: 'Apekshan City, Chachiwas, Ajmer, Rajasthan',
      latitude: 26.5631,
      longitude: 74.6922,
    },
  },
  {
    id: 'dp-inst-madhubaneshwar-mandir',
    slug: 'madhubaneshwar-mahadev-mandir-nakamadar',
    title: 'Madhubaneshwar Mahadev Mandir',
    category: 'institutional',
    status: 'in-design',
    hidden: false,
    location: 'Nakamadar, Ajmer, Rajasthan',
    area: '4,000 sq.ft.',
    floors: 'Temple Complex with Garden',
    services: [
      'Architectural Design',
      'Temple Planning',
      'Structural Design & Engineering'
    ],
    description: 'Madhubaneshwar Mahadev Mandir at UIT Colony, Nakamadar, Ajmer — proposed 2026. A 4,000 sq.ft. temple complex with Ram Darbar (16x16), Mataji and Shiv Parivar shrines, ardh mandaps, garden forecourt and support block, planned by Design Plus.',
    brief: 'Plan a complete Mahadev temple complex — shrines, mandaps, garden and pilgrim amenities — on a compact urban plot.',
    designApproach: 'Tri-shrine layout around a central Ram Darbar, axial entry from the garden, separated service block with water and shoe-rack facilities.',
    images: [
      '/images/projects/madhubaneshwar-mahadev-plan.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['ajmer'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Private Trust',
    city: 'Ajmer',
    year: '2026',
    builtUpArea: '4,000 sq.ft.',
    categoryLabel: 'Institutional',
    typology: 'Temple / Religious (Proposed)',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Proposal Plan', 'Architectural Design', 'Structural Design'],
    summary: 'Proposed Mahadev temple complex at Nakamadar — 4,000 sq.ft., 2026.',
    challenge: 'Fitting three shrines, mandaps and pilgrim amenities on a compact plot.',
    approach: 'Axial tri-shrine plan with garden forecourt and segregated services.',
    structuralEngineering: 'RCC framed structure as per IS codes; proposal stage.',
    heroImage: '/images/projects/madhubaneshwar-mahadev-plan.jpg',
    gallery: [
      '/images/projects/madhubaneshwar-mahadev-plan.jpg'
    ],
    features: ['Ram Darbar 16x16', 'Mataji + Shiv Parivar shrines', 'Garden forecourt', '4,000 sq.ft.'],
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'UIT Colony, Nakamadar',
      displayLocation: 'Nakamadar, Ajmer, Rajasthan',
      latitude: 26.4516,
      longitude: 74.6654,
    },
  },
  {
    id: 'dp-struct-canal-outlet-bikaner',
    slug: 'canal-outlet-bikaner',
    title: 'Canal Outlet — Plan & Profile',
    category: 'structural',
    status: 'completed',
    hidden: false,
    location: 'Bikaner District, Rajasthan',
    area: 'Irrigation outlet structure',
    services: [
      'Structural Design & Engineering',
      'Infrastructure Consulting'
    ],
    description: 'Canal outlet structure in Bikaner District — completed 2017. Plan, section and wall-section drawings for the outlet, engineered by Design Plus for the Executive Engineer, WRD.',
    brief: 'Design a durable canal outlet with controlled discharge and maintainable wall sections.',
    designApproach: 'Reinforced wall sections sized for hydraulic thrust; straightforward plan geometry for easy site execution.',
    images: [
      '/images/projects/canal-outlet-bikaner.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design'],
    relatedLocations: ['bikaner'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'structural',
    clientType: 'Government',
    city: 'Bikaner',
    year: '2017',
    builtUpArea: 'Canal outlet structure',
    categoryLabel: 'Structural Engineering',
    typology: 'Irrigation Structure',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Plan & Section Drawings', 'Structural Design'],
    summary: 'Canal outlet, Bikaner District — completed 2017.',
    challenge: 'Hydraulic detailing for a maintainable rural outlet.',
    approach: 'Clear plan/section documentation, robust wall sections.',
    structuralEngineering: 'RCC outlet structure as per IS codes.',
    heroImage: '/images/projects/canal-outlet-bikaner.jpg',
    gallery: [
      '/images/projects/canal-outlet-bikaner.jpg'
    ],
    features: ['Plan & profile drawings', 'Wall sections', 'Completed 2017'],
    locationDetails: {
      city: 'Bikaner',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Bikaner District',
      displayLocation: 'Bikaner District, Rajasthan',
    },
  },
  {
    id: 'dp-struct-rub-bhadra',
    slug: 'rail-under-bridge-bhadra',
    title: 'Rail Under Bridge, Bhadra',
    category: 'structural',
    status: 'completed',
    hidden: false,
    location: 'Bhadra, Hanumangarh, Rajasthan',
    area: '600 m length',
    services: [
      'Structural Design & Engineering',
      'Infrastructure Consulting'
    ],
    description: 'Rail Under Bridge at Bhadra, Hanumangarh — completed 2024. A 600-metre underpass carrying road traffic beneath the railway line, with full plan, profile and structural detailing by Design Plus.',
    brief: 'Engineer a 600 m rail under bridge for uninterrupted road-rail crossing at Bhadra.',
    designApproach: 'Box/pushed-box methodology coordinated with railway authorities; staged drawings for approval and execution.',
    images: [
      '/images/projects/rail-under-bridge-bhadra.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design'],
    relatedLocations: ['hanumangarh'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'structural',
    clientType: 'Government',
    city: 'Hanumangarh',
    year: '2024',
    builtUpArea: '600 m length',
    categoryLabel: 'Structural Engineering',
    typology: 'Rail Under Bridge',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Structural Design', 'Plan & Profile Drawings'],
    summary: 'Rail Under Bridge, Bhadra — 600 m, completed 2024.',
    challenge: 'Coordinating rail and road levels within railway constraints.',
    approach: 'Detailed plan/profile set issued for railway approval and execution.',
    structuralEngineering: 'RCC under-bridge structure as per railway and IS standards.',
    heroImage: '/images/projects/rail-under-bridge-bhadra.jpg',
    gallery: [
      '/images/projects/rail-under-bridge-bhadra.jpg'
    ],
    features: ['600 m length', 'Completed 2024', 'Railway-coordinated design'],
    locationDetails: {
      city: 'Hanumangarh',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Bhadra',
      displayLocation: 'Bhadra, Hanumangarh, Rajasthan',
      latitude: 29.0975,
      longitude: 75.1672,
    },
  }
];

export const RAW_PROJECTS = PROJECTS;

// Helper Query Functions
export function getAllProjects(): Project[] {
  return PROJECTS.filter((p) => !p.hidden);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.toLowerCase().trim();
  return PROJECTS.find(
    (p) => p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized
  );
}

export function getProjectsByCategory(category: string): Project[] {
  const normalized = category.toLowerCase().trim();
  if (normalized === 'all' || normalized === '') {
    return PROJECTS;
  }
  return PROJECTS.filter(
    (p) => p.projectCategory.toLowerCase() === normalized || p.category.toLowerCase() === normalized
  );
}

export function getProjectsByType(type: 'all' | 'real' | 'concept'): Project[] {
  if (type === 'all') return PROJECTS;
  return PROJECTS.filter((p) => p.projectType === type);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured || p.isFeatured);
}

export function getRelatedProjects(currentProject: Project, limit = 2): Project[] {
  if (currentProject.relatedProjects && currentProject.relatedProjects.length > 0) {
    const explicitRelated = currentProject.relatedProjects
      .map((slug) => getProjectBySlug(slug))
      .filter((p): p is Project => Boolean(p));
    if (explicitRelated.length > 0) {
      return explicitRelated.slice(0, limit);
    }
  }
  return PROJECTS.filter(
    (p) => p.slug !== currentProject.slug && (p.category === currentProject.category || p.projectType === currentProject.projectType)
  ).slice(0, limit);
}

export function getAdjacentProjects(currentSlug: string): { prev: Project; next: Project } {
  const index = PROJECTS.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: PROJECTS[0], next: PROJECTS[1 % PROJECTS.length] };
  }
  const prevIndex = (index - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (index + 1) % PROJECTS.length;
  return { prev: PROJECTS[prevIndex], next: PROJECTS[nextIndex] };
}

export default PROJECTS;
