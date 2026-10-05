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
    ],
  },
];

export function getPosterCategory(slug: string): PosterCategory | undefined {
  return POSTER_CATEGORIES.find((c) => c.slug === slug);
}
