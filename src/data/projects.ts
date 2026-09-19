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
    id: 'dp-res-001',
    slug: 'ana-sagar-residence',
    title: 'Ana Sagar Lake Residence',
    category: 'residential',
    status: 'completed',
    location: 'Circular Road, Ajmer',
    area: '4,800 sq.ft.',
    floors: 'G+2 Floors',
    services: [
      'Comprehensive Architectural Design',
      'Chartered Structural Engineering & Stability Audit',
      'Municipal Sanction Blueprints (ADA Approval)',
      'Passive Solar Bioclimatic Modeling',
      'Interior Spatial Coordination & Lighting Grid'
    ],
    description: 'A contemporary lakefront villa responding to western solar radiation through deep cantilevered canopies, local stone thermal buffers, and an internal micro-climate courtyard.',
    brief: 'Commissioned by a private family to establish an enduring multi-generational sanctuary overlooking the expansive waters of Ana Sagar Lake. The brief demanded uninhibited panoramic views toward the lake and northern Aravalli ridge, while strictly safeguarding interior living quarters against intense desert solar heat gain.',
    designApproach: 'Our studio adopted a hybrid vernacular-contemporary strategy. We positioned a shaded two-story central light-well and water courtyard at the structural heart of the villa, generating a stack effect that evacuates warm air. The western facade is wrapped in deep 4.5-meter post-tensioned RCC cantilevered overhangs and vertical Dholpur stone louvers that truncate low-angle solar rays while preserving framed views of the lake.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design', '2d-floor-planning'],
    relatedLocations: ['ajmer', 'pushkar'],
    relatedProjects: ['pushkar-courtyard-haven', 'contemporary-rajasthan-villa'],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'residential',
    clientType: 'Private Residential Client',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Ana Sagar Circular Road',
      displayLocation: 'Circular Road, Ajmer, Rajasthan',
      isRegionalContext: true
    },
    year: '2024',
    siteArea: '7,200 sq.ft.',
    builtUpArea: '4,800 sq.ft.',
    categoryLabel: 'Residential Villa',
    typology: 'Lakefront Climate-Responsive Courtyard Villa',
    badges: ['Built Commission', 'Chartered Certified', 'Featured Case Study'],
    isFeatured: true,
    lead: 'Ar. Vipul Verma & Er. Sudhir Soni',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Ar. Vipul Verma & Er. Sudhir Soni'
    },
    scopeOfWork: [
      'Comprehensive Architectural Design',
      'Chartered Structural Engineering & Stability Audit',
      'Municipal Sanction Blueprints (ADA Approval)',
      'Passive Solar Bioclimatic Modeling',
      'Interior Spatial Coordination & Lighting Grid'
    ],
    summary: 'A contemporary lakefront villa responding to western solar radiation through deep cantilevered canopies, local stone thermal buffers, and an internal micro-climate courtyard.',
    challenge: 'The lakefront orientation situated the primary living areas directly exposed to western afternoon glare and thermal peaks exceeding 44°C during summer months. Additionally, proximity to the lake water table required specialized waterproofed sub-surface foundation design to prevent moisture migration into ground-level living volumes.',
    approach: 'Our studio adopted a hybrid vernacular-contemporary strategy. We positioned a shaded two-story central light-well and water courtyard at the structural heart of the villa, generating a stack effect that evacuates warm air. The western facade is wrapped in deep 4.5-meter post-tensioned RCC cantilevered overhangs and vertical Dholpur stone louvers that truncate low-angle solar rays while preserving framed views of the lake.',
    structuralEngineering: 'Engineered 4.5-meter column-free cantilevered terraces using high-performance post-tensioned RCC beams certified under Chartered Engineer standards with Grade M30 concrete and Fe500D TMT reinforcement.',
    structuralDetails: {
      framingSystem: 'Moment-Resisting Reinforced Concrete Space Frame with Post-Tensioned Cantilever Slabs',
      foundationType: 'Combined Reinforced Concrete Raft & Strap Footings with crystalline integral waterproofing',
      specialTechnicalFeatures: [
        '4.5-meter column-free post-tensioned terrace cantilevers overlooking the waterfront',
        'Sub-grade hydrostatic damp-proofing membrane with peripheral perforated sub-drainage',
        'Seismic Zone II compliant ductile frame detailing in conformance with IS 13920:2016'
      ],
      charteredCertificationNote: 'Chartered Engineer Structural Stability Certificate Issued & Vetted under Er. Sudhir Soni (Reg. AM-085449).'
    },
    sustainabilityFeatures: [
      'Passive micro-climate central water courtyard reducing interior ambient temperatures by 4–6°C',
      '100% rooftop rainwater harvesting routed to a 45,000-liter sub-surface masonry cistern',
      'Cavity wall envelope utilizing local fly-ash masonry with polyurethane core thermal resistance',
      'Cross-ventilation wind catchers aligned with prevailing southwest monsoon breezes'
    ],
    materialsUsed: [
      { name: 'Dholpur Beige Sandstone', application: 'Exterior solar screen louvers & boundary claddings' },
      { name: 'Kishangarh Statuario Marble', application: 'Ground floor main living & formal reception flooring' },
      { name: 'Thermally Broken Low-E Double Glazing', application: 'Western lakefront fenestrations (U-value 1.4 W/m²K)' },
      { name: 'Exposed Board-Form Concrete', application: 'Architectural feature walls & structural cantilever soffits' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      alt: 'Ana Sagar Lakefront Residence exterior facade at twilight in Ajmer',
      caption: 'Sunset perspective showcasing deep cantilevered shade canopies and Dholpur sandstone brise-soleil.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Central open-to-sky courtyard with cascading water veil and cooling micro-climate.',
        alt: 'Internal shaded courtyard with natural stone flooring',
        aspect: 'hero'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Upper terrace lounge framed by post-tensioned cantilevered concrete planes.',
        alt: 'Terrace lounge facing Lake Ana Sagar',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Double-height living pavilion with integrated natural daylight monitors.',
        alt: 'High ceiling living room with Kishangarh marble flooring',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-res-drw-01',
        title: 'Ground Level Architectural Working Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Detailed 1:50 working layout illustrating central courtyard circulation, vastu zoning, and service cores.'
      },
      {
        id: 'dp-res-drw-02',
        title: 'Longitudinal Bioclimatic Section & Solar Angle Study',
        type: 'section',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        caption: 'Section analyzing stack ventilation dynamics, double-height volumes, and summer solstice shade cutoffs.'
      },
      {
        id: 'dp-res-drw-03',
        title: 'Post-Tensioned Cantilever Beam Structural Detail (Er. Sudhir Soni)',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Chartered engineering reinforcement schedule for 4.5m clear cantilever slab and moment joint ties.'
      }
    ],
    features: [
      'Triple-height central courtyard creating natural stack-effect cooling',
      'Engineered 4.5-meter post-tensioned RCC cantilevered terrace canopies',
      'High-performance insulated double glazing oriented to panoramic lake horizons',
      'Underground 45,000L rainwater harvesting retention system with filtration chamber',
      'ADA municipal sanctioned drawings with strict FAR & ground coverage compliance'
    ],
    seo: {
      metaTitle: 'Ana Sagar Lake Residence | Luxury Villa Architecture in Ajmer | Design Plus',
      metaDescription: 'Discover the Ana Sagar Lake Residence by Design Plus. Climate-responsive luxury villa in Ajmer featuring post-tensioned cantilevers and courtyard cooling.',
      keywords: ['villa architecture Ajmer', 'Ana Sagar luxury residence', 'Design Plus projects', 'Er Sudhir Soni structural', 'Ar Vipul Verma architect']
    }
  },
  {
    id: 'dp-com-002',
    slug: 'panchsheel-commercial-pavilion',
    title: 'Panchsheel Commercial Pavilion',
    category: 'commercial',
    status: 'completed',
    location: 'Panchsheel Nagar, Ajmer',
    area: '14,500 sq.ft.',
    floors: 'B+G+3 Floors',
    services: [
      'Commercial Master Planning',
      'Structural Steel & RCC Hybrid Framing',
      'ADA Sanction & Commercial Clearance Drawings',
      'Ventilated Terra-Cotta Rainscreen Facade Engineering',
      'MEP Infrastructure & Lift Well Shaft Engineering'
    ],
    description: 'A multi-tier commercial retail and corporate hub engineered with column-free floor plates and high-durability ventilated facade technology.',
    brief: 'A high-density urban commercial development requiring maximum ground-level retail frontage on a major arterial junction in Panchsheel Nagar, topped by flexible, column-free corporate floor plates capable of multiple tenant subdivisions.',
    designApproach: 'The structure utilizes a reinforced concrete perimeter moment frame combined with high-grade structural steel internal composite sections. This eliminated interior load-bearing columns across a 12-meter bay width, unlocking unobstructed shopfronts and retail layouts.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['commercial-architecture', 'structural-design', '3d-elevation-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['boutique-commercial-office', 'industrial-spans-kishangarh'],

    // Compatibility fields
    projectType: 'real',
    projectCategory: 'commercial',
    clientType: 'Commercial Real Estate Consortium',
    city: 'Ajmer',
    locationDetails: {
      city: 'Ajmer',
      state: 'Rajasthan',
      areaOrNeighborhood: 'Panchsheel Nagar Commercial Corridor',
      displayLocation: 'Panchsheel Nagar, Ajmer, Rajasthan',
      isRegionalContext: true
    },
    year: '2023',
    siteArea: '8,500 sq.ft.',
    builtUpArea: '14,500 sq.ft.',
    categoryLabel: 'Commercial Complex',
    typology: 'Multi-Tenant Commercial & Corporate Plaza',
    badges: ['Built Commission', 'Chartered Certified', 'Commercial Landmark'],
    isFeatured: true,
    lead: 'Er. Sudhir Soni & Ar. Vipul Verma',
    leadership: {
      architecturalPrincipal: 'Ar. Vipul Verma (B.Arch, M.H.S. Belgium)',
      structuralPrincipal: 'Er. Sudhir Soni (Chartered Engineer, M.E. Structure)',
      projectLead: 'Er. Sudhir Soni & Ar. Vipul Verma'
    },
    scopeOfWork: [
      'Commercial Master Planning',
      'Structural Steel & RCC Hybrid Framing',
      'ADA Sanction & Commercial Clearance Drawings',
      'Ventilated Terra-Cotta Rainscreen Facade Engineering',
      'MEP Infrastructure & Lift Well Shaft Engineering'
    ],
    summary: 'A multi-tier commercial retail and corporate hub engineered with column-free floor plates and high-durability ventilated facade technology.',
    challenge: 'Accommodating heavy dynamic vehicular loads for underground basement parking while preserving high ceiling clearances and unobstructed 12-meter clear spans on the retail ground floor.',
    approach: 'Engineered a transfer girder slab system at the ground-first transition level. This allowed basement parking grid columns to distribute into a wide-open commercial column footprint above.',
    structuralEngineering: 'Engineered heavy-duty transfer slabs and composite steel-concrete columns certified under IS 800:2007 and IS 456:2000 for high commercial live loads (5.0 kN/m²).',
    structuralDetails: {
      framingSystem: 'Heavy-Duty RCC Moment Resisting Frame with 900mm Post-Tensioned Transfer Girders',
      foundationType: 'Continuous Reinforced Concrete Bored Piles with Capping Raft for high sub-soil bearing capacity',
      specialTechnicalFeatures: [
        '12-meter unobstructed clear spans on retail floors using PT beam profiles',
        'Seismic ductility detailing for high-occupancy commercial assembly classification',
        'Dedicated high-capacity lift shafts and fire escape structural core'
      ],
      charteredCertificationNote: 'Comprehensive Commercial Structural Stability Certification by Er. Sudhir Soni, Chartered Engineer.'
    },
    sustainabilityFeatures: [
      'High-performance double-skin ventilated terracotta ceramic facade panels reducing air conditioning load by 22%',
      'Rooftop grid-tied solar photovoltaic installation supplying 65% of common area electrical requirements',
      'Greywater treatment facility recycling washroom runoff for landscape and HVAC cooling tower makeup'
    ],
    materialsUsed: [
      { name: 'Ventilated Terracotta Cladding', application: 'External rainscreen facade with rear air cavity' },
      { name: 'Structural Glazing (Saint-Gobain Planitherm)', application: 'Curtain wall systems on street-facing elevations' },
      { name: 'Industrial Flamed Granite', application: 'High-traffic ground concourse and pedestrian colonnade' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      alt: 'Panchsheel Commercial Pavilion exterior glass facade in Ajmer',
      caption: 'Main avenue perspective showcasing ventilated terracotta fins and structural curtain walling.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Ground floor commercial arcade with high-clearance structural spans and clear sightlines.',
        alt: 'Commercial retail promenade in Panchsheel',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Upper level corporate office floor plate designed for modular executive partitioning.',
        alt: 'Corporate open-plan office interior in Ajmer',
        aspect: 'wide'
      }
    ],
    drawingsAndPlans: [
      {
        id: 'dp-com-drw-01',
        title: 'Ground Level Commercial Master Floor Plan',
        type: 'floor-plan',
        imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Circulation grid illustrating 12m wide retail bays, dual fire egress stairs, and service elevator bank.'
      },
      {
        id: 'dp-com-drw-02',
        title: 'Transfer Girder Structural Section (Er. Sudhir Soni)',
        type: 'structural-detail',
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80',
        caption: 'Heavy RCC transfer beam detail carrying upper 3 floors over open basement parking grid.'
      }
    ],
    features: [
      '12-meter column-free retail spans providing maximum lease flexibility',
      'Integrated basement parking with automated ventilation shafts and high-capacity ramp',
      'Ventilated terracotta rainscreen envelope for superior thermal comfort and longevity',
      'Two dedicated high-speed passenger elevators and independent heavy service lift',
      'Complete ADA and Municipal fire-safety compliance clearance'
    ],
    seo: {
      metaTitle: 'Panchsheel Pavilion | Commercial Architecture | Design Plus',
      metaDescription: 'Explore the Panchsheel Commercial Pavilion designed by Design Plus. High-performance retail and corporate complex in Ajmer with column-free structural bays.',
      keywords: ['commercial architect Ajmer', 'Panchsheel retail complex', 'Design Plus commercial projects', 'structural design Ajmer']
    }
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
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['residential-architecture', 'interior-design', '2d-floor-planning'],
    relatedLocations: ['pushkar', 'ajmer'],
    relatedProjects: ['ana-sagar-residence', 'contemporary-rajasthan-villa'],

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
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    isConcept: false,
    relatedServices: ['interior-design', '3d-elevation-design', 'architectural-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['contemporary-retail-interior', 'ana-sagar-residence'],

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
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['structural-design', 'commercial-architecture'],
    relatedLocations: ['jaipur', 'ajmer'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'mayo-link-institutional-academy'],

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
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: false,
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'ana-sagar-residence'],

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
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['architectural-design', '3d-elevation-design', '2d-floor-planning'],
    relatedLocations: ['ajmer', 'pushkar'],
    relatedProjects: ['contemporary-rajasthan-villa', 'ana-sagar-residence'],

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
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
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
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['residential-architecture', '2d-floor-planning', '3d-elevation-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['ana-sagar-residence', 'modern-courtyard-residence'],

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
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
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
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    isConcept: true,
    relatedServices: ['commercial-architecture', '3d-elevation-design', 'interior-design'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'vaishali-studio-interiors'],

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
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
      alt: 'Boutique Commercial Office biophilic building concept render',
      caption: 'Street perspective showing terraced green balconies and terracotta solar louvers.'
    },
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80'
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        caption: 'Modern open-plan workstation floor framed by exterior greenery.',
        alt: 'Daylit modern office floor with plants',
        aspect: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rooftop green terrace lounge for creative team breakout sessions.',
        alt: 'Rooftop garden lounge render',
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
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
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
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    heroImageDetails: {
      url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
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
  }
];

export const RAW_PROJECTS = PROJECTS;

// Helper Query Functions
export function getAllProjects(): Project[] {
  return PROJECTS;
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
