/**
 * Posters section data (client request 2026-10-04: "Insert a separate menu
 * in the website for posters" with categories).
 *
 * Structure: /posters (hub) -> /posters/<category> (category landing).
 * Individual poster pages (/posters/<category>/<poster-slug>) get added
 * once the client's poster ZIP arrives — each poster ships with its own
 * transcribed text page (never image-only; images alone don't rank).
 *
 * SEO: keyword research grounded 2026-10-04. Categories use the client's
 * own words; primaries are realistic long-tail targets for a regional firm.
 */

export interface PosterCategory {
  slug: string;
  label: string;
  shortLabel: string;
  /** Primary SEO keyword */
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  seoDescription: string;
  /** 300+ words of indexable educational copy for the category landing */
  intro: string[];
  /** Live posters with real images (client-supplied) */
  publishedPosters?: { title: string; blurb: string; image: string; alt: string }[];
  /** Poster titles planned / arriving for this category */
  upcomingPosters: { title: string; blurb: string }[];
  icon: string; // lucide icon name key used by the page
}

export const POSTER_CATEGORIES: PosterCategory[] = [
  {
    slug: 'structural-engineering',
    label: 'Structural Engineering',
    shortLabel: 'Structural',
    primaryKeyword: 'structural engineering basics',
    secondaryKeywords: [
      'RCC design tips India',
      'IS 456:2000 guidelines',
      'beam column slab thumb rules',
      'earthquake resistant design India',
      'what is a strap beam',
    ],
    seoTitle: 'Structural Engineering Posters | Design Plus Ajmer',
    seoDescription:
      'Free structural engineering posters & infographics — RCC design tips, beam-column-slab thumb rules and IS 456 basics by Design Plus Architects, Ajmer.',
    intro: [
      'Every safe building in India stands on the same invisible backbone: reinforced cement concrete designed to IS 456:2000, detailed for the seismic zone it sits in, and supervised on site by people who understand load paths. These posters distil the structural engineering basics every home builder, site engineer and architecture student should carry in their pocket.',
      'Start with the thumb rules — the beam, column and slab proportions experienced engineers use for quick sanity checks before the detailed calculations begin. Then go deeper: what a strap beam actually does between two footings, why concrete grades like M20, M25 and M30 are not interchangeable, and how earthquake-resistant detailing (per IS 1893) decides whether a building sways safely or fails catastrophically.',
      'Design Plus is led by Er. Sudhir Soni, a Chartered Engineer (M.E. Structure) who has signed structural stability certifications across Rajasthan since 2006. These posters are drawn from real site practice — not textbook theory — and each one links to the underlying Indian code clause so you can verify everything yourself.',
    ],
    publishedPosters: [
      {
        title: "Beam Column Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on beam column design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/beam-column-design-ajmer.webp",
        alt: "Beam Column Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Bridge Design Services",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on bridge design services. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/bridge-design-services-ajmer.webp",
        alt: "Bridge Design Services poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Building Stability Certificate",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on building stability certificate. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/building-stability-certificate-ajmer.webp",
        alt: "Building Stability Certificate poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Cantilever Design Tips",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on cantilever design tips. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/cantilever-design-tips-ajmer.webp",
        alt: "Cantilever Design Tips poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Earthquake Resistant Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on earthquake resistant design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/earthquake-resistant-design-ajmer.webp",
        alt: "Earthquake Resistant Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Foundation Design Guide",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on foundation design guide. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/foundation-design-guide-ajmer.webp",
        alt: "Foundation Design Guide poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Load Calculation Basics",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on load calculation basics. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/load-calculation-basics-ajmer.webp",
        alt: "Load Calculation Basics poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Rcc Frame Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on rcc frame design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/rcc-frame-design-ajmer.webp",
        alt: "Rcc Frame Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Retaining Wall Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on retaining wall design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/retaining-wall-design-ajmer.webp",
        alt: "Retaining Wall Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Slab Design Basics",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on slab design basics. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/slab-design-basics-ajmer.webp",
        alt: "Slab Design Basics poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Staircase Structural Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on staircase structural design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/staircase-structural-design-ajmer.webp",
        alt: "Staircase Structural Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Steel Structure Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on steel structure design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/steel-structure-design-ajmer.webp",
        alt: "Steel Structure Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Structural Audit Services",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on structural audit services. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/structural-audit-services-ajmer.webp",
        alt: "Structural Audit Services poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Structural Design Consultancy",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on structural design consultancy. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/structural-design-consultancy-ajmer.webp",
        alt: "Structural Design Consultancy poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Structural Drawings Guide",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on structural drawings guide. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/structural-drawings-guide-ajmer.webp",
        alt: "Structural Drawings Guide poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Water Tank Structural Design",
        blurb: "Er. Sudhir Soni (M.E. Structure, Chartered Engineer) on water tank structural design. Structural design consultancy Ajmer since 2006. +91 7976453090.",
        image: "/images/posters/structural-engineering/water-tank-structural-design-ajmer.webp",
        alt: "Water Tank Structural Design poster by Er. Sudhir Soni, Design Plus Structural Consultants Ajmer",
      },
    ],
    upcomingPosters: [
      {
        title: 'RCC Beam, Column & Slab Thumb Rules Every Site Engineer Should Know',
        blurb: 'Quick-reference proportions for preliminary sizing — depth-to-span ratios, minimum reinforcement and cover requirements per IS 456.',
      },
      {
        title: 'What Is a Strap Beam? Foundation Design Explained for Indian Homes',
        blurb: 'Why strap beams connect eccentric footings, how they differ from tie beams, and where they are mandatory in Indian residential foundations.',
      },
      {
        title: 'Concrete Grades Chart: M20 vs M25 vs M30 (IS 456)',
        blurb: 'Which grade goes where — foundations, columns, slabs and water-retaining structures — with mix ratios and exposure guidance.',
      },
    ],
    icon: 'Landmark',
  },
  {
    slug: 'construction-tips',
    label: 'Construction Tips',
    shortLabel: 'Construction',
    primaryKeyword: 'house construction tips India',
    secondaryKeywords: [
      'home construction checklist India',
      'construction quality checklist',
      'house building mistakes to avoid',
      'site supervision tips',
      'concrete curing days',
    ],
    seoTitle: 'Construction Tips Posters | Design Plus Ajmer',
    seoDescription:
      'Practical construction tips posters — house building checklists, quality checks and site supervision guides for Indian homes by Design Plus Ajmer.',
    intro: [
      'Building a house in India is usually the largest investment a family ever makes — and most of the expensive mistakes happen because nobody gave the owner a simple checklist. These construction-tips posters are exactly that: field-tested checklists and quality checks from two decades of site supervision across Rajasthan.',
      'Use the 21-point quality checklist before releasing any payment to your contractor. Learn the seven mistakes first-time builders in Rajasthan repeat every season — from skipping soil testing to accepting honeycombed concrete. And get the straight answer on concrete curing: how many days of water curing actually matter, and what happens when a contractor rushes it.',
      'Every tip here is something our engineers verify on real sites. Print the posters, pin them at your site office, and hold every stage of work to the same standard we hold our own projects to.',
    ],
    publishedPosters: [
      {
        title: "Basement Waterproofing",
        blurb: "Practical basement-waterproofing from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/basement-waterproofing-ajmer.webp",
        alt: "Basement Waterproofing tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Bathroom Waterproofing",
        blurb: "Practical bathroom-waterproofing from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/bathroom-waterproofing-ajmer.webp",
        alt: "Bathroom Waterproofing tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Brickwork Quality Checks",
        blurb: "Practical brickwork-quality-checks from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/brickwork-quality-checks-ajmer.webp",
        alt: "Brickwork Quality Checks tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Column Beam Junction Tips",
        blurb: "Practical column-beam-junction-tips from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/column-beam-junction-tips-ajmer.webp",
        alt: "Column Beam Junction Tips tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Concrete Curing Tips",
        blurb: "Practical concrete-curing-tips from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/concrete-curing-tips-ajmer.webp",
        alt: "Concrete Curing Tips tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Foundation Depth Guide",
        blurb: "Practical foundation-depth-guide from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/foundation-depth-guide-ajmer.webp",
        alt: "Foundation Depth Guide tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Plastering Tips",
        blurb: "Practical plastering-tips from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/plastering-tips-ajmer.webp",
        alt: "Plastering Tips tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Rcc Slab Casting Checklist",
        blurb: "Practical rcc-slab-casting-checklist from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/rcc-slab-casting-checklist-ajmer.webp",
        alt: "Rcc Slab Casting Checklist tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Roof Waterproofing Tips",
        blurb: "Practical roof-waterproofing-tips from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/roof-waterproofing-tips-ajmer.webp",
        alt: "Roof Waterproofing Tips tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Scaffolding Safety Tips",
        blurb: "Practical scaffolding-safety-tips from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/scaffolding-safety-tips-ajmer.webp",
        alt: "Scaffolding Safety Tips tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Soil Testing Importance",
        blurb: "Practical soil-testing-importance from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/soil-testing-importance-ajmer.webp",
        alt: "Soil Testing Importance tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Wall Crack Sealing Guide",
        blurb: "Practical wall-crack-sealing-guide from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/wall-crack-sealing-guide-ajmer.webp",
        alt: "Wall Crack Sealing Guide tips poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Waterproofing Crack Repair Sheet",
        blurb: "Practical waterproofing-crack-repair-sheet from Design Plus Ajmer: field-tested construction tips for Indian homes. Build right with expert guidance.",
        image: "/images/posters/construction-tips/waterproofing-crack-repair-sheet-ajmer.webp",
        alt: "Waterproofing Crack Repair Sheet tips poster by Design Plus Architects Ajmer Rajasthan",
      },
    ],
    upcomingPosters: [
      {
        title: 'House Construction Checklist India: 21 Quality Checks Before Paying Your Contractor',
        blurb: 'Stage-wise checklist — foundation, RCC, brickwork, plastering and finishing — with hold points where payment should wait for verification.',
      },
      {
        title: '7 Costly Mistakes First-Time Home Builders Make in Rajasthan',
        blurb: 'The repeat offenders: no soil test, verbal contractor agreements, ignored curing, and undersized water tanks — with what each one really costs.',
      },
      {
        title: 'Concrete Curing: How Many Days of Water Curing Actually Matter',
        blurb: 'IS 456 curing periods explained simply — why 7 days is the minimum, when 14 days pays for itself, and how to check curing on site.',
      },
    ],
    icon: 'HardHat',
  },
  {
    slug: 'fire-safety',
    label: 'Fire Safety',
    shortLabel: 'Fire Safety',
    primaryKeyword: 'fire safety norms India',
    secondaryKeywords: [
      'NBC 2016 fire safety requirements',
      'fire NOC for buildings India',
      'fire extinguisher types for home',
      'fire exit rules residential buildings',
      'high-rise fire safety checklist',
    ],
    seoTitle: 'Fire Safety Posters & Norms | Design Plus Ajmer',
    seoDescription:
      'Fire safety posters explaining NBC 2016 norms — extinguishers, alarms, fire NOC and evacuation rules for Indian buildings. By Design Plus Ajmer.',
    intro: [
      'Part 4 of the National Building Code 2016 is the law of the land for fire safety in Indian buildings — yet most owners first hear about it when the fire department asks for a No Objection Certificate. These posters translate NBC 2016 into plain language: what your building needs, when you need an NOC, and which extinguisher belongs in your kitchen.',
      'Any building 15 metres or taller is a high-rise under the NBC, and that single fact triggers a cascade of requirements: two staircases, automatic sprinklers in basements, smoke detection, a fire-fighting water system, and refuge areas at defined intervals. Our posters map each requirement to building height so you can see exactly where your project stands.',
      'Fire safety is not paperwork — it is the difference between an incident and a tragedy. Share these posters with your residents, tenants and facility teams; the best fire plan is the one everyone already knows.',
    ],
    publishedPosters: [
      {
        title: "Fire Extinguisher Types Guide",
        blurb: "Design Plus fire safety consultancy Ajmer: fire extinguisher types guide. NBC 2016 compliance, fire NOC assistance. Call +91 7976453090.",
        image: "/images/posters/fire-safety/fire-extinguisher-types-guide-ajmer.webp",
        alt: "Fire Extinguisher Types Guide poster by Design Plus fire safety consultants Ajmer",
      },
      {
        title: "Fire Noc Approval Guide",
        blurb: "Design Plus fire safety consultancy Ajmer: fire noc approval guide. NBC 2016 compliance, fire NOC assistance. Call +91 7976453090.",
        image: "/images/posters/fire-safety/fire-noc-approval-guide-ajmer.webp",
        alt: "Fire Noc Approval Guide poster by Design Plus fire safety consultants Ajmer",
      },
      {
        title: "Fire Safety Consultancy Services",
        blurb: "Design Plus fire safety consultancy Ajmer: fire safety consultancy services. NBC 2016 compliance, fire NOC assistance. Call +91 7976453090.",
        image: "/images/posters/fire-safety/fire-safety-consultancy-services-ajmer.webp",
        alt: "Fire Safety Consultancy Services poster by Design Plus fire safety consultants Ajmer",
      },
    ],
    upcomingPosters: [
      {
        title: 'Fire Safety Norms for High-Rise Buildings in India (NBC 2016)',
        blurb: 'The complete requirement map — sprinklers, alarms, hydrants, staircases and refuge areas — organised by building height per NBC Part 4.',
      },
      {
        title: 'Fire NOC for Buildings in India: When You Need It & How to Get It',
        blurb: 'Which occupancies need a fire NOC, the documents the fire department asks for, and the renewal cycle owners forget about.',
      },
      {
        title: 'Types of Fire Extinguishers: Which One for Home, Kitchen & Office',
        blurb: 'ABC dry powder vs CO2 vs foam vs wet chemical — matched to fire classes A, B, C, D, F with placement guidance.',
      },
    ],
    icon: 'Flame',
  },
  {
    slug: 'high-rise-buildings',
    label: 'High-Rise Buildings',
    shortLabel: 'High-Rise',
    primaryKeyword: 'high rise building rules India',
    secondaryKeywords: [
      'what is high rise building in India',
      'NBC high rise requirements',
      'refuge area rules',
      'fire lift requirements India',
      'high rise setback rules',
    ],
    seoTitle: 'High-Rise Building Guide Posters | Design Plus',
    seoDescription:
      'High-rise building posters — NBC rules, fire safety, refuge areas and design norms for buildings above 15m in India. By Design Plus Ajmer.',
    intro: [
      'In India, a building becomes "high-rise" at 15 metres above ground — roughly five storeys — and everything changes at that line: structure, fire safety, lifts, water systems and approvals. These posters explain the high-rise building rules in India the way they apply to real projects, not just code books.',
      'Learn the 15-metre rule and why it exists, how refuge areas work (and where the NBC mandates them), what makes a fire lift different from a passenger lift, and the setback and structural norms that shape every tower approval in Rajasthan.',
      'Design Plus handles structural design and stability certification for multi-storey buildings across Rajasthan. If you are developing, buying or approving a high-rise, these posters give you the questions to ask before you commit.',
    ],
    publishedPosters: [
      {
        title: "Highrise Structural Systems",
        blurb: "Design Plus Ajmer on highrise-structural-systems: structural engineering insights for high-rise buildings in India. M.E. Structure expertise since 2006.",
        image: "/images/posters/high-rise-buildings/highrise-structural-systems-ajmer.webp",
        alt: "Highrise Structural Systems engineering poster by Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Seismic Design Highrise",
        blurb: "Design Plus Ajmer on seismic-design-highrise: structural engineering insights for high-rise buildings in India. M.E. Structure expertise since 2006.",
        image: "/images/posters/high-rise-buildings/seismic-design-highrise-ajmer.webp",
        alt: "Seismic Design Highrise engineering poster by Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Tuned Liquid Dampers Skyscraper",
        blurb: "Design Plus Ajmer on tuned-liquid-dampers-skyscraper: structural engineering insights for high-rise buildings in India. M.E. Structure expertise since 2006.",
        image: "/images/posters/high-rise-buildings/tuned-liquid-dampers-skyscraper-ajmer.webp",
        alt: "Tuned Liquid Dampers Skyscraper engineering poster by Design Plus Structural Consultants Ajmer",
      },
      {
        title: "Wind Load Design Towers",
        blurb: "Design Plus Ajmer on wind-load-design-towers: structural engineering insights for high-rise buildings in India. M.E. Structure expertise since 2006.",
        image: "/images/posters/high-rise-buildings/wind-load-design-towers-ajmer.webp",
        alt: "Wind Load Design Towers engineering poster by Design Plus Structural Consultants Ajmer",
      },
    ],
    upcomingPosters: [
      {
        title: 'What Qualifies as a High-Rise Building in India? The 15-Metre Rule',
        blurb: 'The NBC definition, how height is measured, and the full list of requirements that switch on at 15 metres.',
      },
      {
        title: 'Refuge Areas in High-Rise Buildings: NBC Rules Explained',
        blurb: 'Where refuge areas are mandatory, minimum sizes, and the signage and access rules that make them work in an emergency.',
      },
      {
        title: 'Buying a High-Rise Flat? 10 Safety Checks Before You Book',
        blurb: 'Fire NOC, structural stability certificate, refuge floors, second staircase — the due-diligence list every buyer should run.',
      },
    ],
    icon: 'Building2',
  },
  {
    slug: 'architecture',
    label: 'Architecture',
    shortLabel: 'Architecture',
    primaryKeyword: 'modern house design India',
    secondaryKeywords: [
      'contemporary Indian home design ideas',
      'vastu compliant house design',
      'small house design India',
      'Indian home elevation ideas',
      'sustainable architecture India',
    ],
    seoTitle: 'Architecture Posters & Design Ideas | Design Plus',
    seoDescription:
      'Architecture posters & infographics — modern Indian home designs, elevations, vastu tips and planning ideas by Design Plus Architects Ajmer.',
    intro: [
      'Good architecture in India is not imported — it is earned from climate, culture and the way families actually live. These posters collect the design ideas we return to most: modern Indian home elevations that handle the Rajasthan sun, vastu-compliant planning explained without superstition, and small-plot designs that feel twice their size.',
      'Browse elevation trends for 2026, the room-by-room logic of vastu directions, and planning strategies for 1000 sq ft plots — each poster grounded in projects we have actually built across Ajmer, Jaipur, Pushkar and Kishangarh.',
      'If a poster sparks an idea for your own home, bring it to a consultation. The best projects start with a client who has done exactly this kind of homework.',
    ],
    publishedPosters: [
      {
        title: "Balcony Design Ideas",
        blurb: "Design Plus Architects Ajmer presents balcony design ideas: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/balcony-design-ideas-ajmer.webp",
        alt: "Balcony Design Ideas poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Bathroom Interior Design",
        blurb: "Design Plus Architects Ajmer presents bathroom interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/bathroom-interior-design-ajmer.webp",
        alt: "Bathroom Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Clinic Interior Design",
        blurb: "Design Plus Architects Ajmer presents clinic interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/clinic-interior-design-ajmer.webp",
        alt: "Clinic Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Courtyard House Design",
        blurb: "Design Plus Architects Ajmer presents courtyard house design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/courtyard-house-design-ajmer.webp",
        alt: "Courtyard House Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Dining Room Interior",
        blurb: "Design Plus Architects Ajmer presents dining room interior: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/dining-room-interior-ajmer.webp",
        alt: "Dining Room Interior poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Duplex House Design",
        blurb: "Design Plus Architects Ajmer presents duplex house design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/duplex-house-design-ajmer.webp",
        alt: "Duplex House Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "False Ceiling Design",
        blurb: "Design Plus Architects Ajmer presents false ceiling design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/false-ceiling-design-ajmer.webp",
        alt: "False Ceiling Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Farmhouse Design Rajasthan",
        blurb: "Design Plus Architects Ajmer presents farmhouse design rajasthan: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/farmhouse-design-rajasthan-ajmer.webp",
        alt: "Farmhouse Design Rajasthan poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Flat Interior Design",
        blurb: "Design Plus Architects Ajmer presents flat interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/flat-interior-design-ajmer.webp",
        alt: "Flat Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Guest Room Design",
        blurb: "Design Plus Architects Ajmer presents guest room design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/guest-room-design-ajmer.webp",
        alt: "Guest Room Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Home Interior Ajmer",
        blurb: "Design Plus Architects Ajmer presents home interior ajmer: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/home-interior-ajmer-ajmer.webp",
        alt: "Home Interior Ajmer poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Hotel Interior Design",
        blurb: "Design Plus Architects Ajmer presents hotel interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/hotel-interior-design-ajmer.webp",
        alt: "Hotel Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "House Elevation Design",
        blurb: "Design Plus Architects Ajmer presents house elevation design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/house-elevation-design-ajmer.webp",
        alt: "House Elevation Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Kids Room Interior",
        blurb: "Design Plus Architects Ajmer presents kids room interior: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/kids-room-interior-ajmer.webp",
        alt: "Kids Room Interior poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Living Room Interior",
        blurb: "Design Plus Architects Ajmer presents living room interior: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/living-room-interior-ajmer.webp",
        alt: "Living Room Interior poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Main Gate Design",
        blurb: "Design Plus Architects Ajmer presents main gate design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/main-gate-design-ajmer.webp",
        alt: "Main Gate Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Modern Bedroom Interior Design",
        blurb: "Design Plus Architects Ajmer presents modern bedroom interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/modern-bedroom-interior-design-ajmer.webp",
        alt: "Modern Bedroom Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Modular Kitchen Design",
        blurb: "Design Plus Architects Ajmer presents modular kitchen design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/modular-kitchen-design-ajmer.webp",
        alt: "Modular Kitchen Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Office Interior Design",
        blurb: "Design Plus Architects Ajmer presents office interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/office-interior-design-ajmer.webp",
        alt: "Office Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Pooja Room Design",
        blurb: "Design Plus Architects Ajmer presents pooja room design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/pooja-room-design-ajmer.webp",
        alt: "Pooja Room Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Residential Floor Plan",
        blurb: "Design Plus Architects Ajmer presents residential floor plan: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/residential-floor-plan-ajmer.webp",
        alt: "Residential Floor Plan poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Restaurant Interior Design",
        blurb: "Design Plus Architects Ajmer presents restaurant interior design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/restaurant-interior-design-ajmer.webp",
        alt: "Restaurant Interior Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "School Building Design",
        blurb: "Design Plus Architects Ajmer presents school building design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/school-building-design-ajmer.webp",
        alt: "School Building Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Shop Front Elevation",
        blurb: "Design Plus Architects Ajmer presents shop front elevation: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/shop-front-elevation-ajmer.webp",
        alt: "Shop Front Elevation poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Staircase Design Railing",
        blurb: "Design Plus Architects Ajmer presents staircase design railing: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/staircase-design-railing-ajmer.webp",
        alt: "Staircase Design Railing poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Study Room Interior",
        blurb: "Design Plus Architects Ajmer presents study room interior: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/study-room-interior-ajmer.webp",
        alt: "Study Room Interior poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Terrace Garden Design",
        blurb: "Design Plus Architects Ajmer presents terrace garden design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/terrace-garden-design-ajmer.webp",
        alt: "Terrace Garden Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Tv Unit Design Living Room",
        blurb: "Design Plus Architects Ajmer presents tv unit design living room: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/tv-unit-design-living-room-ajmer.webp",
        alt: "Tv Unit Design Living Room poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Villa Elevation Rajasthan",
        blurb: "Design Plus Architects Ajmer presents villa elevation rajasthan: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/villa-elevation-rajasthan-ajmer.webp",
        alt: "Villa Elevation Rajasthan poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Wall Panel Design",
        blurb: "Design Plus Architects Ajmer presents wall panel design: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/wall-panel-design-ajmer.webp",
        alt: "Wall Panel Design poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
      {
        title: "Wardrobe Design Bedroom",
        blurb: "Design Plus Architects Ajmer presents wardrobe design bedroom: expert architecture ideas for homes in Rajasthan. Call +91 7976453090 for your project.",
        image: "/images/posters/architecture/wardrobe-design-bedroom-ajmer.webp",
        alt: "Wardrobe Design Bedroom poster by Design Plus Architects & Structural Consultants, Ajmer Rajasthan",
      },
    ],
    upcomingPosters: [
      {
        title: 'Vastu-Compliant Home Design: Room Directions Explained Simply',
        blurb: 'Entrance, kitchen, bedrooms and pooja — the directional logic of vastu mapped to modern floor plans, without the myths.',
      },
      {
        title: 'Modern Indian Home Elevations: 2026 Design Trends',
        blurb: 'Material palettes, shading devices and facade rhythms defining contemporary Indian homes this year.',
      },
      {
        title: 'Small Plot, Big Home: Design Ideas for 1000 Sq Ft Plots',
        blurb: 'Double-height volumes, courtyard planning and vertical zoning — how small plots gain spaciousness without gaining cost.',
      },
    ],
    icon: 'DraftingCompass',
  },
  {
    slug: 'general-awareness',
    label: 'General Awareness',
    shortLabel: 'Awareness',
    primaryKeyword: 'building bye-laws India',
    secondaryKeywords: [
      'documents required for house construction India',
      'RERA rights home buyers',
      'green building benefits India',
      'IGBC vs GRIHA rating',
      'architect vs civil engineer difference',
    ],
    seoTitle: 'General Awareness Posters | Design Plus Ajmer',
    seoDescription:
      'General awareness posters — building bye-laws, approvals, RERA and green building basics every Indian home builder should know. Design Plus Ajmer.',
    intro: [
      'Before the first brick is laid, there is paperwork: building bye-laws, municipal approvals, RERA registrations and the documents your bank will ask for. These general-awareness posters give Indian home builders the civic literacy that protects their investment.',
      'Walk through the building approval process in Rajasthan step by step, know your rights as a home buyer under RERA, and understand what green building ratings like IGBC and GRIHA actually certify — and whether they are worth pursuing for your home.',
      'An informed client gets a better building. Consider these posters the pre-construction reading list we wish every client arrived with.',
    ],
    upcomingPosters: [
      {
        title: 'Building Approval Process in Rajasthan: Documents & Steps',
        blurb: 'From site documents to ADA sanction — the full approval chain with typical timelines and the mistakes that cause rejections.',
      },
      {
        title: 'RERA Explained: Rights Every Home Buyer in India Should Know',
        blurb: 'What RERA registration guarantees, how to verify a project on the RERA portal, and your remedies when a builder defaults.',
      },
      {
        title: 'Green Buildings in India: IGBC vs GRIHA Ratings Made Simple',
        blurb: 'The two Indian rating systems compared — what they measure, what certification costs, and the payback on energy and water savings.',
      },
    ],
    icon: 'BookOpen',
    publishedPosters: [
      {
        title: 'Rain Water Harvesting System — A New Approach',
        blurb: 'How a rain water filter feeds filtered rain water from roof to tank: the complete harvesting chain — filter, drain, storage — every Indian home can adopt.',
        image: '/images/posters/rain-water-harvesting.jpg',
        alt: 'Rain Water Harvesting System poster — rain water filter diagram by Design Plus Ajmer',
      },
      {
        title: "Damp Proof Course Guide",
        blurb: "Design Plus Ajmer awareness poster: damp proof course guide. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/damp-proof-course-guide-ajmer.webp",
        alt: "Damp Proof Course Guide awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Drainage Around House",
        blurb: "Design Plus Ajmer awareness poster: drainage around house. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/drainage-around-house-ajmer.webp",
        alt: "Drainage Around House awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Efflorescence Salt Deposits",
        blurb: "Design Plus Ajmer awareness poster: efflorescence salt deposits. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/efflorescence-salt-deposits-ajmer.webp",
        alt: "Efflorescence Salt Deposits awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Gutter Maintenance Tips",
        blurb: "Design Plus Ajmer awareness poster: gutter maintenance tips. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/gutter-maintenance-tips-ajmer.webp",
        alt: "Gutter Maintenance Tips awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Home Maintenance Tips",
        blurb: "Design Plus Ajmer awareness poster: home maintenance tips. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/home-maintenance-tips-ajmer.webp",
        alt: "Home Maintenance Tips awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Monsoon Damage Prevention",
        blurb: "Design Plus Ajmer awareness poster: monsoon damage prevention. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/monsoon-damage-prevention-ajmer.webp",
        alt: "Monsoon Damage Prevention awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Mould Removal Guide",
        blurb: "Design Plus Ajmer awareness poster: mould removal guide. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/mould-removal-guide-ajmer.webp",
        alt: "Mould Removal Guide awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Paint Peeling Solution",
        blurb: "Design Plus Ajmer awareness poster: paint peeling solution. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/paint-peeling-solution-ajmer.webp",
        alt: "Paint Peeling Solution awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Pipe Leakage Detection",
        blurb: "Design Plus Ajmer awareness poster: pipe leakage detection. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/pipe-leakage-detection-ajmer.webp",
        alt: "Pipe Leakage Detection awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Plaster Crack Causes",
        blurb: "Design Plus Ajmer awareness poster: plaster crack causes. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/plaster-crack-causes-ajmer.webp",
        alt: "Plaster Crack Causes awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Rising Damp Treatment",
        blurb: "Design Plus Ajmer awareness poster: rising damp treatment. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/rising-damp-treatment-ajmer.webp",
        alt: "Rising Damp Treatment awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Roof Leakage Repair",
        blurb: "Design Plus Ajmer awareness poster: roof leakage repair. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/roof-leakage-repair-ajmer.webp",
        alt: "Roof Leakage Repair awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Tank Leakage Repair",
        blurb: "Design Plus Ajmer awareness poster: tank leakage repair. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/tank-leakage-repair-ajmer.webp",
        alt: "Tank Leakage Repair awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Terrace Waterproofing Guide",
        blurb: "Design Plus Ajmer awareness poster: terrace waterproofing guide. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/terrace-waterproofing-guide-ajmer.webp",
        alt: "Terrace Waterproofing Guide awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Wall Dampness Seepage Solution",
        blurb: "Design Plus Ajmer awareness poster: wall dampness seepage solution. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/wall-dampness-seepage-solution-ajmer.webp",
        alt: "Wall Dampness Seepage Solution awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Waterproofing Awareness Home",
        blurb: "Design Plus Ajmer awareness poster: waterproofing awareness home. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/waterproofing-awareness-home-ajmer.webp",
        alt: "Waterproofing Awareness Home awareness poster by Design Plus Architects Ajmer",
      },
      {
        title: "Weatherproof Exterior Paint",
        blurb: "Design Plus Ajmer awareness poster: weatherproof exterior paint. Practical solutions for Indian homeowners. Expert advice from Chartered Engineers.",
        image: "/images/posters/general-awareness/weatherproof-exterior-paint-ajmer.webp",
        alt: "Weatherproof Exterior Paint awareness poster by Design Plus Architects Ajmer",
      },
    ],
  },

  {
    slug: 'building-material',
    label: 'Building Materials',
    shortLabel: 'Materials',
    primaryKeyword: 'building materials guide India',
    secondaryKeywords: [
      'rebar couplers India',
      'construction chemicals guide',
      'waterproofing products India',
      'concrete admixtures guide',
      'building material quality checks',
    ],
    seoTitle: 'Building Materials Guide Posters | Design Plus Ajmer',
    seoDescription:
      'Building material guide posters — rebar couplers, waterproofing products, concrete admixtures and quality checks for Indian construction. By Design Plus Ajmer.',
    intro: [
      'The strength of a building is decided long before the concrete is poured — it is decided in the quality of the materials that go into it. These posters decode building materials for Indian home builders: what MBT couplers do for rebar splicing, how waterproofing compounds actually work, and the simple quality checks that separate good cement, steel and aggregates from the rest.',
      'Design Plus has supervised material testing and site quality control across Rajasthan since 2006. Every poster here comes from real purchase decisions and real site rejections — the brands that passed, the batches that failed, and the tests you can run yourself before a single bag of cement is unloaded.',
      'Share these with your contractor before procurement begins. The cheapest material is rarely the most economical — and these posters show you exactly why.',
    ],
        publishedPosters: [
      {
        title: "Aggregates For Concrete",
        blurb: "Design Plus Ajmer explains aggregates-for-concrete: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/aggregates-for-concrete-ajmer.webp",
        alt: "Aggregates For Concrete guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Aluminium Windows Doors",
        blurb: "Design Plus Ajmer explains aluminium-windows-doors: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/aluminium-windows-doors-ajmer.webp",
        alt: "Aluminium Windows Doors guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Bathroom Fittings Guide",
        blurb: "Design Plus Ajmer explains bathroom-fittings-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/bathroom-fittings-guide-ajmer.webp",
        alt: "Bathroom Fittings Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Brick Quality Check",
        blurb: "Design Plus Ajmer explains brick-quality-check: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/brick-quality-check-ajmer.webp",
        alt: "Brick Quality Check guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Cement Quality Guide",
        blurb: "Design Plus Ajmer explains cement-quality-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/cement-quality-guide-ajmer.webp",
        alt: "Cement Quality Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Concrete Admixtures",
        blurb: "Design Plus Ajmer explains concrete-admixtures: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/concrete-admixtures-ajmer.webp",
        alt: "Concrete Admixtures guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Construction Chemicals",
        blurb: "Design Plus Ajmer explains construction-chemicals: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/construction-chemicals-ajmer.webp",
        alt: "Construction Chemicals guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Curing Compounds Concrete",
        blurb: "Design Plus Ajmer explains curing-compounds-concrete: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/curing-compounds-concrete-ajmer.webp",
        alt: "Curing Compounds Concrete guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Door Locks Hardware",
        blurb: "Design Plus Ajmer explains door-locks-hardware: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/door-locks-hardware-ajmer.webp",
        alt: "Door Locks Hardware guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Electrical Wiring Material",
        blurb: "Design Plus Ajmer explains electrical-wiring-material: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/electrical-wiring-material-ajmer.webp",
        alt: "Electrical Wiring Material guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "False Ceiling Material",
        blurb: "Design Plus Ajmer explains false-ceiling-material: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/false-ceiling-material-ajmer.webp",
        alt: "False Ceiling Material guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Formwork Material",
        blurb: "Design Plus Ajmer explains formwork-material: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/formwork-material-ajmer.webp",
        alt: "Formwork Material guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Glass For Buildings",
        blurb: "Design Plus Ajmer explains glass-for-buildings: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/glass-for-buildings-ajmer.webp",
        alt: "Glass For Buildings guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Kitchen Sink Fittings",
        blurb: "Design Plus Ajmer explains kitchen-sink-fittings: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/kitchen-sink-fittings-ajmer.webp",
        alt: "Kitchen Sink Fittings guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Mbt Rebar Couplers",
        blurb: "Design Plus Ajmer explains mbt-rebar-couplers: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/mbt-rebar-couplers-ajmer.webp",
        alt: "Mbt Rebar Couplers guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Measuring Tools Site",
        blurb: "Design Plus Ajmer explains measuring-tools-site: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/measuring-tools-site-ajmer.webp",
        alt: "Measuring Tools Site guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Mechanical Rebar Splicing",
        blurb: "Design Plus Ajmer explains mechanical-rebar-splicing: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/mechanical-rebar-splicing-ajmer.webp",
        alt: "Mechanical Rebar Splicing guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Modular Switches Guide",
        blurb: "Design Plus Ajmer explains modular-switches-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/modular-switches-guide-ajmer.webp",
        alt: "Modular Switches Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Paints And Coatings",
        blurb: "Design Plus Ajmer explains paints-and-coatings: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/paints-and-coatings-ajmer.webp",
        alt: "Paints And Coatings guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Primer Paint Guide",
        blurb: "Design Plus Ajmer explains primer-paint-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/primer-paint-guide-ajmer.webp",
        alt: "Primer Paint Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Pvc Pipes Plumbing",
        blurb: "Design Plus Ajmer explains pvc-pipes-plumbing: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/pvc-pipes-plumbing-ajmer.webp",
        alt: "Pvc Pipes Plumbing guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Safety Helmets Ppe",
        blurb: "Design Plus Ajmer explains safety-helmets-ppe: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/safety-helmets-ppe-ajmer.webp",
        alt: "Safety Helmets Ppe guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Sanitary Fittings Guide",
        blurb: "Design Plus Ajmer explains sanitary-fittings-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/sanitary-fittings-guide-ajmer.webp",
        alt: "Sanitary Fittings Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Scaffolding Safety Material",
        blurb: "Design Plus Ajmer explains scaffolding-safety-material: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/scaffolding-safety-material-ajmer.webp",
        alt: "Scaffolding Safety Material guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Septic Tank Design",
        blurb: "Design Plus Ajmer explains septic-tank-design: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/septic-tank-design-ajmer.webp",
        alt: "Septic Tank Design guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Solar Water Heater",
        blurb: "Design Plus Ajmer explains solar-water-heater: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/solar-water-heater-ajmer.webp",
        alt: "Solar Water Heater guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Steel Reinforcement Bars",
        blurb: "Design Plus Ajmer explains steel-reinforcement-bars: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/steel-reinforcement-bars-ajmer.webp",
        alt: "Steel Reinforcement Bars guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Termite Treatment Chemicals",
        blurb: "Design Plus Ajmer explains termite-treatment-chemicals: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/termite-treatment-chemicals-ajmer.webp",
        alt: "Termite Treatment Chemicals guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Tiles Selection Guide",
        blurb: "Design Plus Ajmer explains tiles-selection-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/tiles-selection-guide-ajmer.webp",
        alt: "Tiles Selection Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Wall Putty Guide",
        blurb: "Design Plus Ajmer explains wall-putty-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/wall-putty-guide-ajmer.webp",
        alt: "Wall Putty Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Water Tanks Guide",
        blurb: "Design Plus Ajmer explains water-tanks-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/water-tanks-guide-ajmer.webp",
        alt: "Water Tanks Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Waterproofing Compounds",
        blurb: "Design Plus Ajmer explains waterproofing-compounds: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/waterproofing-compounds-ajmer.webp",
        alt: "Waterproofing Compounds guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
      {
        title: "Wood And Plywood Guide",
        blurb: "Design Plus Ajmer explains wood-and-plywood-guide: quality building materials for safe construction in Rajasthan. Expert guidance since 2006.",
        image: "/images/posters/building-material/wood-and-plywood-guide-ajmer.webp",
        alt: "Wood And Plywood Guide guide poster by Design Plus Architects & Structural Consultants Ajmer",
      },
    ],
    upcomingPosters: [
      {
        title: 'Cement Quality Tests You Can Do at Home',
        blurb: 'Five field tests for cement freshness and strength — no lab needed — before you approve a bulk purchase.',
      },
      {
        title: 'TMT Steel Bars: Grades, Brands & Site Checks',
        blurb: 'Fe-415 vs Fe-500 vs Fe-550 explained, plus the bend-and-rebend test every site engineer should run.',
      },
    ],
    icon: 'Layers',
  },
  {
    slug: 'vastu',
    label: 'Vastu Shastra',
    shortLabel: 'Vastu',
    primaryKeyword: 'vastu compliant house design',
    secondaryKeywords: [
      'vastu consultant Ajmer',
      'vastu room directions',
      'vastu for flats India',
      'vastu entrance direction',
      'vastu remedies without demolition',
    ],
    seoTitle: 'Vastu Shastra Posters & Home Design | Design Plus Ajmer',
    seoDescription:
      'Vastu Shastra posters — compliant home designs, room directions, entrance placement and practical remedies by Design Plus Architects, Ajmer.',
    intro: [
      'Vastu Shastra is often reduced to superstition — but at its core it is a remarkably practical science of orientation: where the sun rises, how wind moves, and which rooms benefit from morning light. These posters present vastu-compliant home design the way our architects actually practice it — directional logic mapped onto modern floor plans, without the myths.',
      'Learn the room-by-room directional principles for entrances, kitchens, bedrooms and pooja spaces; how to select a vastu-friendly plot; and the genuine remedies available when demolition is not an option. Every poster is grounded in projects Design Plus has designed across Ajmer and Rajasthan.',
      'Vastu works best when it is part of the design from day one — not a correction after construction. Bring these posters to your consultation and let us plan a home that honours both tradition and structural sense.',
    ],
        publishedPosters: [
      {
        title: "Vastu Bedroom Direction",
        blurb: "Design Plus Ajmer: vastu bedroom direction. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-bedroom-direction-ajmer.webp",
        alt: "Vastu Bedroom Direction poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Compliant Home Design",
        blurb: "Design Plus Ajmer: vastu compliant home design. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-compliant-home-design-ajmer.webp",
        alt: "Vastu Compliant Home Design poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Entrance Direction",
        blurb: "Design Plus Ajmer: vastu entrance direction. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-entrance-direction-ajmer.webp",
        alt: "Vastu Entrance Direction poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu For Flats",
        blurb: "Design Plus Ajmer: vastu for flats. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-for-flats-ajmer.webp",
        alt: "Vastu For Flats poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Kitchen Placement",
        blurb: "Design Plus Ajmer: vastu kitchen placement. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-kitchen-placement-ajmer.webp",
        alt: "Vastu Kitchen Placement poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Office Design",
        blurb: "Design Plus Ajmer: vastu office design. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-office-design-ajmer.webp",
        alt: "Vastu Office Design poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Plot Selection",
        blurb: "Design Plus Ajmer: vastu plot selection. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-plot-selection-ajmer.webp",
        alt: "Vastu Plot Selection poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Pooja Room",
        blurb: "Design Plus Ajmer: vastu pooja room. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-pooja-room-ajmer.webp",
        alt: "Vastu Pooja Room poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Remedies Without Demolition",
        blurb: "Design Plus Ajmer: vastu remedies without demolition. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-remedies-without-demolition-ajmer.webp",
        alt: "Vastu Remedies Without Demolition poster by Design Plus Architects Ajmer Rajasthan",
      },
      {
        title: "Vastu Room Directions",
        blurb: "Design Plus Ajmer: vastu room directions. Vastu-compliant home designs blending science and tradition. Consult Ar. Vipul Verma: +91 7976453090.",
        image: "/images/posters/vastu/vastu-room-directions-ajmer.webp",
        alt: "Vastu Room Directions poster by Design Plus Architects Ajmer Rajasthan",
      },
    ],
    upcomingPosters: [
      {
        title: 'Vastu for Flats: What You Can and Cannot Change',
        blurb: 'Apartment-buyer focused guide — entrance, kitchen and bedroom directions in multi-storey living, plus workable remedies.',
      },
      {
        title: 'Plot Selection by Vastu: Shape, Slope & Surroundings',
        blurb: 'How plot geometry, road position and slope affect vastu compliance before you buy the land.',
      },
    ],
    icon: 'Compass',
  },
];

export function getPosterCategory(slug: string): PosterCategory | undefined {
  return POSTER_CATEGORIES.find((c) => c.slug === slug);
}
