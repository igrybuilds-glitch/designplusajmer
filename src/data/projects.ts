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
    imageDisclaimer: 'Representative imagery — gallery photographs are illustrative reference images, not photographs of this project; real project photography is pending from the client.',
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
    features: ['REPRESENTATIVE IMAGERY — gallery photographs are illustrative reference images; real project photography is pending from the client.', 'Natural ventilation', 'Low-maintenance finishes', 'Accessible design'],
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
    imageDisclaimer: 'Representative imagery — gallery photographs are illustrative reference images, not photographs of this project; real project photography is pending from the client.',
    relatedServices: ['residential-architecture', 'interior-design', '2d-floor-planning'],
    relatedLocations: ['pushkar', 'ajmer'],
    relatedProjects: [],

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
    badges: ['Built Commission', 'Vernacular Heritage', 'Chartered Certified', 'REPRESENTATIVE IMAGERY'],
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
        caption: 'Sunlit verandah wrapped around the central courtyard garden. (Representative imagery.)',
        alt: 'Verandah corridor with limestone flooring',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Master bedroom suite with deep recessed jharokha window seats. (Representative imagery.)',
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
        caption: 'Traditional chowk floor layout illustrating central void and surrounding living verandahs. (Representative reference image.)'
      }
    ],
    features: [
      'REPRESENTATIVE IMAGERY — gallery photographs are illustrative reference images; real project photography is pending from the client.',
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
    imageDisclaimer: 'Representative imagery — gallery photographs are illustrative reference images, not photographs of this project; real project photography is pending from the client.',
    relatedServices: ['interior-design', '3d-elevation-design', 'architectural-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: [],

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
    badges: ['Built Commission', 'Bespoke Millwork', 'Interior Design', 'REPRESENTATIVE IMAGERY'],
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
        caption: 'Executive studio desk with integrated cable management and soft diffused cove lighting. (Representative imagery.)',
        alt: 'Creative executive office workspace interior',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        caption: 'Dining suite framed by minimalist brass pendant and fluted timber wall backdrop. (Representative imagery.)',
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
        caption: 'Comprehensive reflected ceiling plan with precision LED channel coordinates and dimming zones. (Representative reference image.)'
      }
    ],
    features: [
      'REPRESENTATIVE IMAGERY — gallery photographs are illustrative reference images; real project photography is pending from the client.',
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    imageDisclaimer: 'Representative imagery — gallery photographs are illustrative reference images, not photographs of this project; real project photography is pending from the client.',
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
    badges: ['Built Commission', 'Chartered Certified', 'Industrial Steel', 'REPRESENTATIVE IMAGERY'],
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
        caption: 'Steel fabrication assembly showing rigid moment-resisting knee joints. (Representative imagery.)',
        alt: 'Structural steel assembly on site',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        caption: 'Heavy machinery foundation reinforcement grid before high-grade concrete casting. (Representative imagery.)',
        alt: 'Machinery foundation rebar layout',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-str-drw-01',
        title: '32m Portal Frame Elevation & Crane Bracket Detail',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        caption: 'Structural fabrication drawing detailing crane surge brackets, base plates, and anchor bolts. (Representative reference image.)'
      }
    ],
    features: [
      'REPRESENTATIVE IMAGERY — gallery photographs are illustrative reference images; real project photography is pending from the client.',
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
    imageDisclaimer: 'Representative imagery — gallery photographs are illustrative reference images, not photographs of this project; real project photography is pending from the client.',
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
    badges: ['Built Commission', 'Educational Landmark', 'Chartered Certified', 'REPRESENTATIVE IMAGERY'],
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
        caption: 'Tiered academic lecture theater designed with calculated acoustic reverberation times. (Representative imagery.)',
        alt: 'Tiered university auditorium',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wide open-air connecting corridor with Kota stone paving and natural greenery. (Representative imagery.)',
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
        caption: 'Plan detailing modular 60-student classrooms, teacher prep suites, and dual fire escape towers. (Representative reference image.)'
      }
    ],
    features: [
      'REPRESENTATIVE IMAGERY — gallery photographs are illustrative reference images; real project photography is pending from the client.',
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


  
  
  
  
  {
    id: 'dp-res-020', // renamed 2026-10-05: was duplicate id (was 2nd dp-res-017)
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
    hidden: true, // retired 2026-10-05: duplicates real-asset entry dp-inst-apekshan-temple-chachiwas; hero/gallery were stock
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
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false, // retired 2026-10-05: hidden + unfeatured (duplicates real-asset Apekshan entry)
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
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
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
    id: 'dp-inst-madhubaneshwar-mandir-retired', // renamed 2026-10-05: was duplicate id (retired stock-hero entry)
    slug: 'madhubaneshwar-mahadev-mandir-ajmer',
    title: 'Madhubaneshwar Mahadev Mandir',
    category: 'institutional',
    status: 'in-design',
    hidden: true, // retired 2026-10-05: stock hero; kept real-asset duplicate below
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
    relatedProjects: ['apekshan-temple-chachiwas-ajmer'],
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
      '/images/projects/rail-under-bridge-bhadra.jpg',
      '/images/projects/rub-bhadra-lc65-revised.jpg'
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
  },
  {
    id: 'dp-struct-parvati-bridge-sakswara',
    slug: 'submersible-bridge-parvati-river-sakswara',
    title: 'Submersible Bridge — Parvati River, Sakswara',
    category: 'structural',
    status: 'in-design',
    hidden: false,
    location: 'Sakswara, Dholpur District, Rajasthan',
    area: 'River bridge — plan & section',
    services: [
      'Structural Design & Engineering',
      'Infrastructure Consulting'
    ],
    description: 'Submersible bridge between Sakswara across the Parvati River — plan and section drawings engineered by Design Plus for the Public Works Department, Dholpur. Drawing-stage commission.',
    brief: 'Engineer a submersible river bridge with full plan and section documentation for PWD approval and execution.',
    designApproach: 'Detailed plan/section set with founding levels, slab/soffit levels and excavation quantities issued for departmental approval.',
    images: [
      '/images/projects/parvati-river-submersible-bridge.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design'],
    relatedLocations: ['dholpur'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'structural',
    clientType: 'Government',
    city: 'Dholpur',
    year: '2026',
    builtUpArea: 'River bridge — plan & section',
    categoryLabel: 'Structural Engineering',
    typology: 'Submersible Bridge',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Plan & Section Drawings', 'Structural Design'],
    summary: 'Submersible bridge, Parvati River at Sakswara — PWD Dholpur commission, drawing stage.',
    challenge: 'Designing a submersible crossing with documented founding and flood levels.',
    approach: 'Plan/section drawing set with levels and quantities for PWD approval.',
    structuralEngineering: 'RCC bridge structure as per IS codes.',
    heroImage: '/images/projects/parvati-river-submersible-bridge.jpg',
    gallery: [
      '/images/projects/parvati-river-submersible-bridge.jpg'
    ],
    features: ['Plan & section drawings', 'PWD Dholpur commission', 'Drawing stage'],
    locationDetails: {
      city: 'Dholpur',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Sakswara, Parvati River',
      displayLocation: 'Sakswara, Dholpur District, Rajasthan',
    },
  },
  {
    id: 'dp-struct-rob-jodhpur-banar-bhadasia',
    slug: 'rob-railway-crossing-jodhpur-jaisalmer',
    title: 'Bhadwasiya ROB — Railway Crossing C-7, Jodhpur',
    category: 'structural',
    status: 'in-design',
    hidden: false,
    location: 'Banar–Bhadasia, Jodhpur, Rajasthan',
    area: 'Rail over bridge — general arrangement',
    services: [
      'Structural Design & Engineering',
      'Infrastructure Consulting'
    ],
    description: 'Rail Over Bridge at Railway Crossing No. C-7 on the Jodhpur–Jaisalmer section (Banar–Bhadasia) — general arrangement drawing with plan and longitudinal section by Design Plus for the Jodhpur Development Authority. Drawing-stage commission.',
    brief: 'Prepare the general arrangement drawing for an ROB over railway crossing C-7 for JDA approval.',
    designApproach: 'GAD with plan and longitudinal section coordinated for railway-crossing constraints.',
    images: [
      '/images/projects/jodhpur-rob-banar-bhadasia.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design'],
    relatedLocations: ['jodhpur'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'structural',
    clientType: 'Government',
    city: 'Jodhpur',
    year: '2026',
    builtUpArea: 'Rail over bridge — general arrangement',
    categoryLabel: 'Structural Engineering',
    typology: 'Rail Over Bridge',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['General Arrangement Drawing', 'Plan & Longitudinal Section'],
    summary: 'Bhadwasiya ROB at Rly Crossing C-7 — JDA commission, drawing stage.',
    challenge: 'General arrangement over a live railway crossing.',
    approach: 'GAD with plan and longitudinal section for authority approval.',
    structuralEngineering: 'RCC ROB structure as per railway and IS standards.',
    heroImage: '/images/projects/jodhpur-rob-banar-bhadasia.jpg',
    gallery: [
      '/images/projects/jodhpur-rob-banar-bhadasia.jpg'
    ],
    features: ['General arrangement drawing', 'JDA commission', 'Drawing stage'],
    locationDetails: {
      city: 'Jodhpur',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Bhadwasiya',
      displayLocation: 'Bhadwasiya, Jodhpur, Rajasthan',
    },
  },
  {
    id: 'dp-inst-school-bhadsiya-nagaur',
    slug: 'senior-secondary-school-bhadsiya-parbatsar',
    title: 'Senior Secondary School — Bhadsiya, Parbatsar',
    category: 'institutional',
    status: 'in-design',
    hidden: false,
    location: 'Bhadsiya, Parbatsar, Nagaur District, Rajasthan',
    area: 'School campus — structural drawings',
    services: [
      'Architectural Design',
      'Structural Design & Engineering'
    ],
    description: 'Senior Secondary School at Bhadsiya, Teh. Parbatsar, Distt. Nagaur — raft-beam structural arrangement drawings by Design Plus. Drawing-stage commission (Sept 2026).',
    brief: 'Design the structural system for a senior secondary school campus.',
    designApproach: 'Raft-beam foundation arrangement with block-wise structural grid for phased school construction.',
    images: [
      '/images/projects/bhadsiya-school-nagaur.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design'],
    relatedLocations: ['nagaur'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Private',
    city: 'Nagaur',
    year: '2026',
    builtUpArea: 'School campus',
    categoryLabel: 'Institutional & Educational',
    typology: 'Senior Secondary School',
    lead: 'Er. Sudhir Soni',
    scopeOfWork: ['Structural Drawings', 'Raft Beam Arrangement'],
    summary: 'Senior Secondary School, Bhadsiya (Parbatsar, Nagaur) — drawing stage, Sept 2026.',
    challenge: 'Foundation system for a multi-block school campus.',
    approach: 'Raft-beam arrangement drawings issued for execution.',
    structuralEngineering: 'RCC raft-beam foundation as per IS codes.',
    heroImage: '/images/projects/bhadsiya-school-nagaur.jpg',
    gallery: [
      '/images/projects/bhadsiya-school-nagaur.jpg'
    ],
    features: ['Raft-beam drawings', 'Multi-block campus', 'Drawing stage'],
    locationDetails: {
      city: 'Nagaur',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Bhadsiya, Parbatsar',
      displayLocation: 'Bhadsiya, Parbatsar, Nagaur District, Rajasthan',
    },
  },
  {
    id: 'dp-inst-toliyasar-temple-ratangarh',
    slug: 'toliyasar-bheruji-temple-dpr-ratangarh',
    title: 'Toliyasar Bheruji Temple — DPR, Ratangarh',
    category: 'institutional',
    status: 'in-design',
    hidden: false,
    location: 'Ratngarh, Churu District, Rajasthan',
    area: 'Temple development & renovation — DPR',
    services: [
      'Architectural Design',
      'DPR Preparation'
    ],
    description: 'DPR for development and renovation of Toliyasar Bheruji Temple, Ratangarh — proposed ground-floor plan, section and front view by Design Plus. DPR-stage commission (Nov 2025).',
    brief: 'Prepare the DPR for development and renovation of the temple complex.',
    designApproach: 'Measured documentation with proposed plan, section and elevation for DPR submission.',
    images: [
      '/images/projects/toliyasar-bheruji-temple-ratangarh.jpg'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design'],
    relatedLocations: ['ratangarh'],
    relatedProjects: [],
    projectType: 'real',
    projectCategory: 'institutional',
    clientType: 'Trust',
    city: 'Ratangarh',
    year: '2025',
    builtUpArea: 'Temple complex',
    categoryLabel: 'Institutional & Educational',
    typology: 'Temple Renovation — DPR',
    lead: 'Ar. Vipul Verma',
    scopeOfWork: ['DPR Preparation', 'Proposed Plan & Section'],
    summary: 'Toliyasar Bheruji Temple DPR, Ratangarh — DPR stage, Nov 2025.',
    challenge: 'Documenting and proposing within a living heritage precinct.',
    approach: 'Proposed plan, section and front view compiled into the DPR.',
    structuralEngineering: 'Structural assessment included in DPR scope.',
    heroImage: '/images/projects/toliyasar-bheruji-temple-ratangarh.jpg',
    gallery: [
      '/images/projects/toliyasar-bheruji-temple-ratangarh.jpg'
    ],
    features: ['DPR drawings', 'Plan, section & elevation', 'DPR stage'],
    locationDetails: {
      city: 'Ratangarh',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Toliyasar',
      displayLocation: 'Ratngarh, Churu District, Rajasthan',
    },
  }];

export const RAW_PROJECTS = PROJECTS;

// Helper Query Functions
export function getAllProjects(): Project[] {
  return PROJECTS.filter((p) => !p.hidden);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.toLowerCase().trim();
  // Hidden (retired) entries are not routable: detail pages redirect to /projects.
  return PROJECTS.find(
    (p) => !p.hidden && (p.slug.toLowerCase() === normalized || p.id.toLowerCase() === normalized)
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
  return PROJECTS.filter((p) => !p.hidden && (p.featured || p.isFeatured));
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
