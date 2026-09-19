export interface BlogArticleRecord {
  id: string;
  slug: string;
  category: string;
  subcategory?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string[];
  featuredImage: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  status: 'published' | 'draft';
  sources: string[];
  relatedServices: string[];
  relatedProjects: string[];
  relatedLocations: string[];
  relatedArticles: string[];
  tags: string[];
  readTime: string;
  date?: string;
  image?: string;
}

export const BLOG_ARTICLES: BlogArticleRecord[] = [
  // 1. Architecture - Article 1
  {
    id: 'art-arch-001',
    category: 'architecture',
    subcategory: 'Structural Physics & Form',
    slug: 'structural-safety-and-architecture-in-rajasthan',
    title: 'Why Structural Engineering Must Precede Architectural Form in Rajasthan',
    metaTitle: 'Why Structural Engineering Must Precede Architectural Form | Design Plus',
    metaDescription: 'An architect’s sketch is only as durable as the structural physics supporting it. How integrated Chartered Engineering prevents cracking, settlement, and costly construction overruns in Rajasthan.',
    excerpt: 'An architect’s sketch is only as durable as the structural physics supporting it. How integrated Chartered Engineering prevents cracking, settlement, and costly construction overruns.',
    content: [
      'In traditional construction practices across Rajasthan, architectural drafting and structural engineering are frequently divorced into isolated phases. A client purchases a concept sketch from a drafting office, hands it to a masonry contractor, and hopes the reinforcement will somehow stand the test of time.',
      'This fragmented workflow is the primary root cause of post-construction distress observed across the state: hairline diagonal shear cracks across masonry lintels, differential settlement caused by unanalyzed soil bearing variations along rocky slopes, and severe thermal stress fissures where brickwork interfaces with uninsulated reinforced concrete.',
      'At Design Plus, every spatial decision is vetted under Chartered Structural Engineering principles from the initial concept sketch. When our architectural team proposes an expansive glass opening or an inviting 4.5-meter cantilevered veranda overlooking Ana Sagar Lake, Er. Sudhir Soni and our structural engineers simultaneously calculate moment distributions, deflection limits, and seismic drift.',
      'The result is not only absolute structural longevity, but also dramatic construction economy. By calculating exact steel reinforcement distributions according to IS 456:2000 and IS 13920:2016, rather than guessing with oversized safety buffers, we eliminate redundant steel tonnage while guaranteeing seismic and wind resilience.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
    author: 'Er. Sudhir Soni, Chartered Engineer',
    publishedAt: '2024-10-18',
    updatedAt: '2024-11-05',
    status: 'published',
    sources: [
      'Bureau of Indian Standards: IS 456:2000 (Plain and Reinforced Concrete)',
      'National Building Code of India (NBC 2016) Part 6: Structural Design',
      'Institution of Engineers (India) Chartered Engineering Guidelines'
    ],
    tags: ['Structural Engineering', 'RCC Design', 'Seismic Resilience', 'Chartered Engineer', 'Rajasthan'],
    readTime: '6 min read',
    relatedServices: ['structural-design', 'architectural-design'],
    relatedProjects: ['ana-sagar-residence', 'industrial-spans-kishangarh'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['architectural-design-process-in-rajasthan', 'navigating-ada-building-byelaws-ajmer'],
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80'
  },

  // 1. Architecture - Article 2
  {
    id: 'art-arch-002',
    category: 'architecture',
    subcategory: 'Architectural Process',
    slug: 'architectural-design-process-in-rajasthan',
    title: 'The 5-Stage Architectural Design Process for Custom Homes in Rajasthan',
    metaTitle: 'Architectural Design Process for Homes in Rajasthan | Design Plus',
    metaDescription: 'A step-by-step breakdown of how a custom architectural residence moves from initial site survey and 2D zoning to 3D elevation modeling, structural vetting, and turnkey execution.',
    excerpt: 'Explore the rigorous 5-stage architectural workflow that turns site constraints, solar orientation, and family lifestyle requirements into enduring, high-performance homes.',
    content: [
      'Building a custom residence in Rajasthan is one of the most substantial financial and emotional investments a family ever undertakes. Yet, without a disciplined design methodology, the process frequently devolves into ad-hoc contractor decisions and costly mid-construction alterations.',
      'Stage 1 begins with Site Topology & Solar Path Analysis. Before sketching a single wall, we map true north, seasonal wind trajectories, soil bearing capacities, and municipal setbacks to determine the optimal building envelope.',
      'Stage 2 develops 2D Ergonomic Space Planning. Here, functional adjacencies, circulation efficiency, privacy zoning, and Vastu directional orientations are resolved to millimeter precision.',
      'Stage 3 transitions into 3D Volumetric & Elevation Modeling. We test sun angles against window reveals, calculate overhang depths to block desert summer heat, and sculpt facade textures using regional stone and plaster.',
      'Stage 4 integrates Chartered Structural & MEP Engineering. Detailed reinforcement schedules, electrical conduit grids, and plumbing stacks are finalized into complete working drawing packages.',
      'Stage 5 governs Construction Supervision & Quality Audits. Regular site inspections ensure concrete slump tests, steel placement, and material curing strictly align with engineered specifications.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma, M.H.S. (Belgium)',
    publishedAt: '2024-09-22',
    updatedAt: '2024-10-15',
    status: 'published',
    sources: [
      'Council of Architecture (CoA) Comprehensive Architectural Practice Manual',
      'Indian Institute of Architects (IIA) Design Delivery Guidelines'
    ],
    tags: ['Architectural Process', 'Workflow', 'Site Analysis', 'Custom Homes', 'Rajasthan'],
    readTime: '7 min read',
    relatedServices: ['architectural-design', '2d-floor-planning', '3d-elevation-design', 'structural-design'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven'],
    relatedLocations: ['ajmer', 'jaipur', 'pushkar'],
    relatedArticles: ['structural-safety-and-architecture-in-rajasthan', 'how-to-choose-an-architect-in-ajmer'],
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },

  // 2. Residential Design - Article 3
  {
    id: 'art-res-001',
    category: 'residential-design',
    subcategory: 'Courtyard Microclimates',
    slug: 'courtyard-passive-cooling-in-ajmer',
    title: 'Reinterpreting the Traditional Haveli Courtyard for Modern Ajmer Homes',
    metaTitle: 'Reinterpreting the Haveli Courtyard for Modern Homes | Design Plus',
    metaDescription: 'How historic architectural micro-climates can dramatically lower indoor temperatures and reduce summer electricity consumption in contemporary Rajasthan villas.',
    excerpt: 'How historic architectural micro-climates can dramatically lower indoor temperatures and reduce summer electricity consumption in contemporary villas.',
    content: [
      'Before mechanical air conditioning existed, Rajasthan’s historic mansions and Havelis remained remarkably cool throughout 45°C summer afternoons. The secret was not luxury materials—it was mathematical spatial physics: the central courtyard (Chowk).',
      'The courtyard functions as an atmospheric lung. During the day, warm air rises and escapes through the open roof, creating low-pressure thermal buoyancy that draws cooler air across shaded ground-floor rooms. At night, cool ambient air sinks into the courtyard and is stored within dense masonry walls.',
      'In our contemporary residential work across Ajmer and Pushkar, we re-engineer this timeless principle with modern glazing, retractable thermal louvers, and integrated water misters.',
      'By placing the courtyard at the geometric center of the floor plan, we also ensure that every private bedroom receives abundant indirect natural light without direct blinding solar heat gain, creating an intimate heart for family life.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma, M.H.S. (Belgium)',
    publishedAt: '2024-08-14',
    updatedAt: '2024-09-02',
    status: 'published',
    sources: [
      'Climatic Architecture in Arid Zones: Central Building Research Institute (CBRI)',
      'Passive Solar Architecture Guidelines: Bureau of Energy Efficiency (BEE)'
    ],
    tags: ['Courtyard', 'Passive Cooling', 'Haveli Architecture', 'Ajmer Homes', 'Sustainability'],
    readTime: '6 min read',
    relatedServices: ['residential-architecture', 'architectural-design'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven', 'modern-courtyard-residence'],
    relatedLocations: ['ajmer', 'pushkar'],
    relatedArticles: ['designing-multi-generational-villas-in-rajasthan', 'bioclimatic-vernacular-architecture-rajasthan'],
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },

  // 2. Residential Design - Article 4
  {
    id: 'art-res-002',
    category: 'residential-design',
    subcategory: 'Multi-Generational Planning',
    slug: 'designing-multi-generational-villas-in-rajasthan',
    title: 'Designing for Multi-Generational Harmony: Privacy Gradients in Modern Indian Villas',
    metaTitle: 'Designing Multi-Generational Villas in Rajasthan | Design Plus',
    metaDescription: 'How intelligent spatial zoning resolves the tension between shared family living and independent privacy across three generations under one roof.',
    excerpt: 'Architectural strategies for acoustic buffers, dual master suites, accessible ground floors, and flexible independent family zones.',
    content: [
      'In Rajasthan, the family estate frequently accommodates three generations under one roof: grandparents, working parents, and school- or university-aged children. When poorly planned, this leads to acoustic friction, compromised privacy, and domestic stress.',
      'Our studio organizes multi-generational villas through structured privacy gradients. The ground floor accommodates ceremonial drawing rooms, open kitchen-dining hubs, and barrier-free master suites with zero-threshold showers and serene garden courtyards for elderly parents.',
      'Upper levels are configured with independent family lounges, separate study suites, and private terraces, allowing younger family members autonomy while preserving central gathering points around meals and evening tea.',
      'Acoustic insulation is integrated into intermediate floor slabs through resilient underlays, and double-wall partitions between bedrooms ensure complete auditory separation between early-rising grandparents and late-working professionals.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma, M.H.S. (Belgium)',
    publishedAt: '2024-06-20',
    updatedAt: '2024-07-05',
    status: 'published',
    sources: [
      'Universal Design & Barrier-Free Environment Guidelines (CPWD India)',
      'Acoustics in Residential Architecture: Indian Standards IS 2526'
    ],
    tags: ['Multi-Generational', 'Villa Planning', 'Acoustics', 'Privacy Gradients', 'Rajasthan'],
    readTime: '6 min read',
    relatedServices: ['residential-architecture', '2d-floor-planning'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['courtyard-passive-cooling-in-ajmer', 'vastu-shastra-and-contemporary-floor-plan-ergonomics'],
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },

  // 3. Commercial Design - Article 5
  {
    id: 'art-com-001',
    category: 'commercial-design',
    subcategory: 'Retail & Office Physics',
    slug: 'commercial-facade-design-and-open-column-spans',
    title: 'Maximizing Usable Leasable Area with High-Span Post-Tensioned Structural Frames',
    metaTitle: 'Commercial Facade Design & Open Column Spans | Design Plus',
    metaDescription: 'How Chartered Structural Engineering eliminates obstructive columns, accelerates retail tenant absorption, and maximizes asset value in urban plazas.',
    excerpt: 'Technical insights into post-tensioned beam calculations, column-free commercial floor plates, and street-level glazed frontage engineering.',
    content: [
      'In commercial retail plazas and corporate office complexes, internal columns are the single greatest barrier to high-value tenancy. A dense 4-meter column grid fragments showroom displays, limits sub-division flexibility, and significantly reduces rental yield per square foot.',
      'By transitioning to computer-modeled post-tensioned (PT) concrete slabs or composite structural steel framing, our structural department regularly achieves column-free spans of 10 to 14 meters. This yields continuous, uninterrupted floor plates that can accommodate anchor retail showrooms, banking halls, or flexible corporate open offices.',
      'On the facade, structural loading is transferred cleanly to perimeter shear walls, liberating the entire street level for continuous floor-to-ceiling glass display windows that maximize pedestrian visibility along busy transit corridors like Jaipur Road and Ana Sagar Circular Road.',
      'The slightly higher upfront engineering investment in post-tensioned design typically delivers a 20% to 30% premium in long-term lease rates and dramatically accelerates tenant leasing velocity.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    author: 'Er. Sudhir Soni, Chartered Engineer',
    publishedAt: '2024-05-18',
    updatedAt: '2024-06-02',
    status: 'published',
    sources: [
      'Post-Tensioning Institute Technical Reports & Indian Standards IS 1343',
      'Urban Commercial Real Estate Space Optimization Studies (CBRE India)'
    ],
    tags: ['Commercial Architecture', 'Post-Tensioned Slabs', 'Structural Spans', 'Retail Yield'],
    readTime: '6 min read',
    relatedServices: ['commercial-architecture', 'structural-design'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'boutique-commercial-office'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['office-space-planning-and-workplace-ergonomics', 'structural-safety-and-architecture-in-rajasthan'],
    date: 'May 2024',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },

  // 3. Commercial Design - Article 6
  {
    id: 'art-com-002',
    category: 'commercial-design',
    subcategory: 'Workplace Planning',
    slug: 'office-space-planning-and-workplace-ergonomics',
    title: 'Modern Office Space Planning: Circulation Grids, Acoustic Zones, and Natural Daylight',
    metaTitle: 'Office Space Planning & Workplace Ergonomics | Design Plus',
    metaDescription: 'Essential architectural guidelines for designing contemporary corporate workspaces: desk spacing, acoustic separation, HVAC zoning, and natural illumination.',
    excerpt: 'How spatial programming and biophilic workplace design improve employee productivity, reduce acoustic fatigue, and adapt to changing team densities.',
    content: [
      'The modern corporate workspace has evolved far beyond repetitive cubicle grids. Today’s high-performance offices require dynamic spatial ecosystems that balance high-focus concentration zones with collaborative breakout environments.',
      'We organize workplace floor plans along clean circulation spines. High-traffic social areas—such as reception lounges, pantry cafes, and all-hands meeting suites—are clustered near the central elevator core to contain ambient sound.',
      'Workstation banks are oriented perpendicular to perimeter glazing, guaranteeing that every desk receives glare-controlled daylight without direct solar reflection on computer monitors.',
      'Acoustic planning incorporates micro-perforated acoustic ceiling baffles, fabric-wrapped wall paneling, and strategic carpet transitions that reduce reverberation times below 0.6 seconds, eliminating the distracting background hum typical of poorly planned offices.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma & Er. Amit Soni',
    publishedAt: '2024-04-12',
    updatedAt: '2024-05-01',
    status: 'published',
    sources: [
      'WELL Building Standard v2: Light, Sound and Mind Concepts',
      'Ergonomics of Workplace Design: IS 15820'
    ],
    tags: ['Office Planning', 'Workplace Ergonomics', 'Acoustics', 'Biophilic Design', 'Commercial'],
    readTime: '5 min read',
    relatedServices: ['commercial-architecture', 'interior-design'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'boutique-commercial-office'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['commercial-facade-design-and-open-column-spans', 'minimalist-interior-materiality-and-natural-stone'],
    date: 'April 2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },

  // 4. Interior Design - Article 7
  {
    id: 'art-int-001',
    category: 'interior-design',
    subcategory: 'Material Authenticity',
    slug: 'minimalist-interior-materiality-and-natural-stone',
    title: 'The Tactile Power of Regional Stone & Honest Joinery in Contemporary Interiors',
    metaTitle: 'Regional Stone & Joinery in Contemporary Interiors | Design Plus',
    metaDescription: 'Why genuine architectural interiors celebrate indigenous Rajasthan marble, fluted sandstone, and solid timber over superficial laminates and artificial veneers.',
    excerpt: 'Exploring tactile materiality, natural stone textures, and flush architectural millwork that age with grace in modern desert living environments.',
    content: [
      'Interior spaces should never feel like a transient catalog of showroom trends. An enduring interior is a tactile dialogue between natural light and honest physical matter that improves in character as decades pass.',
      'In our residential and executive commercial interiors across Ajmer and Jaipur, we prioritize regional stones sourced directly from Rajasthan’s storied quarries: honed Banswara white marble, warm beige Jaisalmer stone, and hand-chiseled Jodhpur sandstone.',
      'Unlike synthetic glossy tiles or plasticized laminates that scratch and peel, unpolished natural stone breathes with humidity and absorbs light softly without specular glare.',
      'We pair these grounded stone floors with flush architectural joinery: concealed jamb doors, recessed baseboards with shadow reveals, and natural oiled teakwood cabinetry that celebrates the natural grain rather than masking it under high-gloss polyurethane lacquers.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma, M.H.S. (Belgium)',
    publishedAt: '2024-08-24',
    updatedAt: '2024-09-15',
    status: 'published',
    sources: [
      'Natural Stone Council Material Longevity and Lifecycle Assessment',
      'Architectural Woodwork Institute (AWI) Standards for Custom Joinery'
    ],
    tags: ['Interior Design', 'Natural Stone', 'Joinery', 'Minimalism', 'Materiality'],
    readTime: '5 min read',
    relatedServices: ['interior-design', 'residential-architecture'],
    relatedProjects: ['vaishali-studio-interiors', 'contemporary-retail-interior'],
    relatedLocations: ['ajmer', 'jaipur', 'udaipur'],
    relatedArticles: ['architectural-lighting-design-for-modern-villas', 'structural-safety-and-architecture-in-rajasthan'],
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
  },

  // 4. Interior Design - Article 8
  {
    id: 'art-int-002',
    category: 'interior-design',
    subcategory: 'Architectural Lighting',
    slug: 'architectural-lighting-design-for-modern-villas',
    title: 'Layered Illumination: Moving Beyond Grid-Pattern False Ceiling Spotlights',
    metaTitle: 'Architectural Lighting Design for Modern Villas | Design Plus',
    metaDescription: 'Why peppering ceilings with grid spotlights ruins interior ambiance, and how layered architectural lighting creates depth, comfort, and visual serenity.',
    excerpt: 'A technical guide to lux levels, color temperatures (2700K vs 4000K), concealed cove washes, and accent lighting hierarchies for luxury homes.',
    content: [
      'The most pervasive defect in modern Indian interior fit-outs is the indiscriminate puncture of gypsum false ceilings with rows of harsh 6000K downlights. This creates a blinding airport-terminal aesthetic devoid of emotional intimacy or shadow depth.',
      'Architectural lighting must be designed in three deliberate layers: task lighting, ambient washes, and focal accents. In residential living volumes, we conceal high-CRI (Color Rendering Index > 95) LED channels within plaster reveals, washing textured stone walls with indirect 2700K to 3000K warm luminescence.',
      'Recessed pinhole fixtures with deep baffles ensure glare-free illumination over dining tables and conversation groupings, directing photons exactly where human activity occurs while keeping the light source completely invisible from normal viewing angles.',
      'By orchestrating lighting zones across distinct scene controllers, a living space can seamlessly transition from a vibrant daytime family gathering mode to an atmospheric, calming evening sanctuary.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma, M.H.S. (Belgium)',
    publishedAt: '2024-07-15',
    updatedAt: '2024-08-01',
    status: 'published',
    sources: [
      'Illuminating Engineering Society (IES) Lighting Handbook',
      'Bureau of Indian Standards: IS 3646 (Code of Practice for Interior Illumination)'
    ],
    tags: ['Lighting Design', 'Interior Architecture', 'Lux Levels', 'Atmosphere'],
    readTime: '5 min read',
    relatedServices: ['interior-design', 'residential-architecture'],
    relatedProjects: ['vaishali-studio-interiors', 'ana-sagar-residence'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['minimalist-interior-materiality-and-natural-stone', 'courtyard-passive-cooling-in-ajmer'],
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },

  // 5. House Planning - Article 9
  {
    id: 'art-hp-001',
    category: 'house-planning',
    subcategory: 'Vastu & Ergonomics',
    slug: 'vastu-shastra-and-contemporary-floor-plan-ergonomics',
    title: 'Harmonizing Traditional Vastu Principles with Contemporary Spatial Ergonomics',
    metaTitle: 'Harmonizing Vastu Principles with Floor Plan Ergonomics | Design Plus',
    metaDescription: 'How to respect traditional directional alignments like Agni kitchen zones and Nairutya master suites without sacrificing cross-ventilation, daylight, or structural logic.',
    excerpt: 'A pragmatic architectural methodology for reconciling ancient directional wisdom with modern residential structural frames and plumbing stacks.',
    content: [
      'Many contemporary architects dismiss Vastu Shastra entirely as superstition, while traditional pandits often demand irrational structural compromises—such as placing toilets in bedroom centers or twisting columns that endanger seismic stability.',
      'At Design Plus, we treat classical Vastu as an early climatic and solar orientation code. The ancient recommendation to place the kitchen in the Agni (South-East) corner, for example, ensured that prevailing winds carried cooking smoke and odors away from living quarters, while the morning sun naturally disinfected preparation areas.',
      'Similarly, placing master sleeping chambers in the Nairutya (South-West) corner shields living areas from heavy afternoon thermal radiation through dense masonry perimeter walls.',
      'Our architectural methodology harmonizes these elemental orientations with millimeter-accurate modern ergonomics: efficient plumbing stacks, streamlined circulation corridors, and certified structural column grids that do not kink or weaken building foundations.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma & Er. Sudhir Soni',
    publishedAt: '2024-07-28',
    updatedAt: '2024-08-10',
    status: 'published',
    sources: [
      'Manasara Vastu Sastra & Indian Architectural Treatises',
      'Solar Radiation & Building Orientation Studies (IIT Roorkee / CBRI)'
    ],
    tags: ['Vastu Shastra', 'Floor Planning', 'Ergonomics', 'Residential Architecture'],
    readTime: '6 min read',
    relatedServices: ['2d-floor-planning', 'residential-architecture'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven'],
    relatedLocations: ['ajmer', 'jaipur', 'pushkar'],
    relatedArticles: ['2d-vs-3d-house-planning-and-elevation-guide', 'courtyard-passive-cooling-in-ajmer'],
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  },

  // 5. House Planning - Article 10
  {
    id: 'art-hp-002',
    category: 'house-planning',
    subcategory: 'Planning Tools',
    slug: '2d-vs-3d-house-planning-and-elevation-guide',
    title: '2D Floor Planning vs. 3D Spatial Modeling: Why Both Are Essential Before Breaking Ground',
    metaTitle: '2D Planning vs 3D Modeling for Custom Homes | Design Plus',
    metaDescription: 'Why relying solely on 2D blueprints leads to spatial blind spots, and how integrated 3D elevation modeling eliminates costly on-site demolition during construction.',
    excerpt: 'Understanding the distinct roles of 2D dimensional precision and 3D volumetric visualization in preventing expensive construction mistakes.',
    content: [
      'Homeowners often wonder whether paying for 3D elevation and interior modeling is truly necessary if they already have an approved 2D municipal floor plan. The reality is that 2D and 3D serve two fundamentally different yet complementary engineering purposes.',
      'A 2D floor plan is the legal and dimensional contract: it specifies exact wall thicknesses, door swing clearances, column center-to-center distances, and plumbing shaft coordinates down to the millimeter.',
      'However, humans experience architecture in three dimensions: volume, height, depth, and shadow. A 2D plan cannot convey whether a stair headroom feels cramped, how morning sunlight will reflect across a double-height living room, or how a cantilevered roof canopy visually balances a front portico.',
      'By pairing 2D CAD drafting with photorealistic 3D parametric modeling, we resolve material transitions, window proportions, and structural cantilevers virtually before pouring a single cubic yard of concrete, saving clients hundreds of thousands of rupees in on-site alterations.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    author: 'Er. Amit Soni & Ar. Vipul Verma',
    publishedAt: '2024-06-14',
    updatedAt: '2024-07-02',
    status: 'published',
    sources: [
      'Building Information Modeling (BIM) Standards and Coordination Practices',
      'Construction Cost Overrun Prevention Protocols: National Institute of Construction Management and Research (NICMAR)'
    ],
    tags: ['2D Floor Planning', '3D Elevation', 'House Planning', 'Construction Savings'],
    readTime: '5 min read',
    relatedServices: ['2d-floor-planning', '3d-elevation-design', 'architectural-design'],
    relatedProjects: ['ana-sagar-residence', 'modern-courtyard-residence'],
    relatedLocations: ['ajmer', 'jaipur'],
    relatedArticles: ['vastu-shastra-and-contemporary-floor-plan-ergonomics', 'architectural-design-process-in-rajasthan'],
    date: 'June 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },

  // 6. Ajmer Regional - Article 11
  {
    id: 'art-ajm-001',
    category: 'ajmer',
    subcategory: 'Architectural Selection Guide',
    slug: 'how-to-choose-an-architect-in-ajmer',
    title: 'How to Choose an Architect in Ajmer: Verification, Credentials & Regional Expertise',
    metaTitle: 'How to Choose an Architect in Ajmer | Credentials Guide | Design Plus',
    metaDescription: 'A practical framework for evaluating architectural firms in Ajmer: checking Council of Architecture (CoA) registration, structural engineering capabilities, and local ADA byelaw mastery.',
    excerpt: 'Key criteria to evaluate when selecting an architectural practice for residential, commercial, or institutional construction in Ajmer and Pushkar.',
    content: [
      'Selecting the right architect in Ajmer is the single most decisive factor determining whether your building project becomes an enduring asset or a protracted financial headache. With dozens of unregulated drafting centers advertising across the city, discerning clients must apply rigorous vetting criteria.',
      '1. Verify Council of Architecture (CoA) Registration: By law under the Architects Act of 1972, only individuals registered with the Council of Architecture may use the title "Architect". Always verify their registration number.',
      '2. In-House Structural Engineering: Many local drafting shops outsource structural drawings to third-party freelancers or simply use rule-of-thumb guesswork. Partnering with a multidisciplinary practice that features an in-house Chartered Structural Engineer ensures certified seismic safety and optimal steel economics.',
      '3. Mastery of Ajmer Development Authority (ADA) Byelaws: Local regulations governing setbacks, FAR, building heights, and lake conservation zones (especially around Ana Sagar and Foy Sagar) require deep regional experience to avoid municipal notices.',
      '4. Portfolio of Built Works: Request to review actual constructed projects rather than stock 3D renders downloaded from the internet. Inspect the quality of masonry joints, roof waterproofing, and how the building has handled Rajasthan’s harsh weather over 5 to 10 years.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    author: 'Ar. Vipul Verma & Er. Sudhir Soni',
    publishedAt: '2024-09-02',
    updatedAt: '2024-09-20',
    status: 'published',
    sources: [
      'Council of Architecture (CoA) Directory & Code of Ethics',
      'The Architects Act, 1972 (Act No. 20 of 1972)',
      'Ajmer Development Authority (ADA) Master Plan & Guidelines'
    ],
    tags: ['Architect in Ajmer', 'Selection Guide', 'Credentials', 'CoA Registration', 'ADA Approvals'],
    readTime: '6 min read',
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedProjects: ['ana-sagar-residence', 'panchsheel-commercial-pavilion'],
    relatedLocations: ['ajmer', 'pushkar'],
    relatedArticles: ['navigating-ada-building-byelaws-ajmer', 'architectural-design-process-in-rajasthan'],
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },

  // 6. Ajmer Regional - Article 12
  {
    id: 'art-ajm-002',
    category: 'ajmer',
    subcategory: 'Municipal Byelaws & Approvals',
    slug: 'navigating-ada-building-byelaws-ajmer',
    title: 'Essential Checklist for Ajmer Development Authority (ADA) Building Approvals',
    metaTitle: 'Essential Checklist for ADA Building Approvals in Ajmer | Design Plus',
    metaDescription: 'A clear, practical guide to setback provisions, road width ratios, FAR calculations, and chartered structural stability certification required for approvals in Ajmer.',
    excerpt: 'A clear, practical guide to setback provisions, road width ratios, FAR calculations, and structural vetting required for approvals in Ajmer.',
    content: [
      'Commencing construction without meticulous alignment to Ajmer Development Authority (ADA) regulations inevitably leads to stop-work notices, compounding delays, and severe penalty fees.',
      'Key parameters that must be engineered accurately before submission include front, rear, and side setback buffers determined strictly by plot area and road width; permissible Floor Area Ratio (FAR); ground coverage limits; and fire separation corridors.',
      'Crucially, multi-story residential and commercial buildings require structural stability certificates signed and stamped by an authorized Chartered Engineer holding institutional credentials (M.I.E., FIV).',
      'As an established Ajmer practice, Design Plus prepares submission packages with millimeter precision—handling architectural drawing sets, structural calculations, and municipal liaisons to ensure smooth, compliant approvals.'
    ],
    featuredImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    author: 'Er. Amit Soni, M.Plan',
    publishedAt: '2024-07-04',
    updatedAt: '2024-07-22',
    status: 'published',
    sources: [
      'Ajmer Development Authority (ADA) Building Byelaws and Master Development Plan 2033',
      'Urban Development and Housing Department (UDH), Government of Rajasthan Building Regulations'
    ],
    tags: ['Ajmer Development Authority', 'ADA Byelaws', 'Building Approvals', 'Setbacks', 'FAR'],
    readTime: '5 min read',
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedProjects: ['ana-sagar-residence', 'panchsheel-commercial-pavilion'],
    relatedLocations: ['ajmer'],
    relatedArticles: ['how-to-choose-an-architect-in-ajmer', 'structural-safety-and-architecture-in-rajasthan'],
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'
  }
];

// Helper Functions
export function getAllBlogArticles(): BlogArticleRecord[] {
  return BLOG_ARTICLES;
}

export function getBlogArticlesByCategory(categorySlug: string): BlogArticleRecord[] {
  const normalized = categorySlug.toLowerCase().trim();
  return BLOG_ARTICLES.filter((a) => a.category === normalized);
}

export function getBlogArticle(categorySlug: string, articleSlug: string): BlogArticleRecord | undefined {
  const normCat = categorySlug.toLowerCase().trim();
  const normSlug = articleSlug.toLowerCase().trim();
  return BLOG_ARTICLES.find(
    (a) => a.category === normCat && a.slug === normSlug
  );
}

export function getBlogArticleBySlug(slug: string): BlogArticleRecord | undefined {
  const normSlug = slug.toLowerCase().trim();
  return BLOG_ARTICLES.find((a) => a.slug === normSlug);
}

export function getFeaturedBlogArticles(): BlogArticleRecord[] {
  return [BLOG_ARTICLES[0], BLOG_ARTICLES[2], BLOG_ARTICLES[4], BLOG_ARTICLES[10]];
}

export function getRelatedBlogArticles(articleId: string, limit = 3): BlogArticleRecord[] {
  const current = BLOG_ARTICLES.find((a) => a.id === articleId || a.slug === articleId);
  if (!current) return BLOG_ARTICLES.slice(0, limit);

  // First match directly listed related articles
  const explicitMatches = BLOG_ARTICLES.filter((a) => 
    a.id !== current.id && current.relatedArticles.includes(a.slug)
  );

  if (explicitMatches.length >= limit) {
    return explicitMatches.slice(0, limit);
  }

  // Next match same category
  const sameCat = BLOG_ARTICLES.filter((a) => 
    a.id !== current.id && 
    a.category === current.category &&
    !explicitMatches.some((em) => em.id === a.id)
  );

  return [...explicitMatches, ...sameCat].slice(0, limit);
}

export default BLOG_ARTICLES;
