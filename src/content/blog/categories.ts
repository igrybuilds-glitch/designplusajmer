import { BlogCategory } from '../../types/blog';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'cat-architecture',
    slug: 'architecture',
    name: 'Architecture & Residential Design',
    shortName: 'Architecture',
    tagline: 'Climate-responsive forms, bioclimatic courtyards, and spatial luxury in Rajasthan.',
    description: 'First-hand architectural essays, floor plan analyses, daylight orientation strategies, and regional stone vernacular designed for enduring domestic comfort.',
    metaTitle: 'Architecture & Residential Design Articles | Design Plus Ajmer',
    metaDescription: 'Explore expert architectural guides on home planning, bioclimatic courtyards, and regional Rajasthani stone craft by Ar. Vipul Verma and Design Plus.',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'Council of Architecture (CA/2004) · ECBC Arid Climatic Code'
  },
  {
    id: 'cat-structural',
    slug: 'structural-engineering',
    name: 'Structural Engineering & Physics',
    shortName: 'Structural Engineering',
    tagline: 'Chartered load path calculations, seismic moment frames, and foundation durability.',
    description: 'Technical guidance from Er. Sudhir Soni (M.E. Structure, FIV, Chartered Engineer) on IS 456 concrete design, earthquake resilience, soil mechanics, and structural safety.',
    metaTitle: 'Structural Engineering Guides & IS Code Insights | Design Plus',
    metaDescription: 'In-depth structural engineering insights on RCC frames, seismic safety, foundation design, and deflection control under Indian Standards (IS 456, IS 1893).',
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'IS 456:2000 · IS 1893:2016 · IS 13920:2016 · Chartered Engineer'
  },
  {
    id: 'cat-planning',
    slug: 'building-planning',
    name: 'Building Planning & Approvals',
    shortName: 'Planning & Approvals',
    tagline: 'Statutory municipal bylaws, FAR/FSI, setback calculations, and sanction checklists.',
    description: 'Practical navigation of Ajmer Development Authority (ADA), UIT, and municipal corporation plan sanction workflows, setback norms, and documentation requirements.',
    metaTitle: 'Building Plan Approval & Municipal Byelaws in Ajmer | Design Plus',
    metaDescription: 'Step-by-step guidance on obtaining house plan approval, understanding setbacks, FAR/FSI calculations, and municipal compliance in Ajmer and Rajasthan.',
    featuredImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'ADA Master Plan 2033 · Rajasthan Building Byelaws · UDPFI'
  },
  {
    id: 'cat-interiors',
    slug: 'interior-design',
    name: 'Interior Architecture & Materiality',
    shortName: 'Interior Design',
    tagline: 'Tactile natural materials, architectural joinery, and concealed lighting channels.',
    description: 'Why architecture and interior design must be integrated from the foundation up. Exploring Jodhpur sandstone, solid teak, acoustic plaster, and 2700K ambient illumination.',
    metaTitle: 'Interior Architecture & Material Guides | Design Plus Ajmer',
    metaDescription: 'Comprehensive guides on integrating architectural structure with interior materiality, bespoke joinery, and glare-free lighting design.',
    featuredImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'NBC Part 8 Building Services · BIS Lighting Standards'
  },
  {
    id: 'cat-infrastructure',
    slug: 'infrastructure',
    name: 'Infrastructure & Heavy Civil Engineering',
    shortName: 'Infrastructure',
    tagline: 'Highways, prestressed box girder bridges, flyovers, and water resource dams.',
    description: 'Engineering insights on arterial highway geometrics, MoRTH specifications, IRC Class 70R bridge superstructures, gravity spillways, and hydraulic networks.',
    metaTitle: 'Infrastructure & Bridge Engineering Insights | Design Plus',
    metaDescription: 'Technical monographs on highway pavement design, PSC bridge superstructures, hydraulic dams, and civic infrastructure in Rajasthan.',
    featuredImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'IRC:112-2020 · MoRTH Specifications · CWC IS 6512'
  },
  {
    id: 'cat-township',
    slug: 'township-planning',
    name: 'Township & Urban Master Planning',
    shortName: 'Township Planning',
    tagline: 'Macro spatial hierarchies, arterial circulation, and municipal growth ecosystems.',
    description: 'Master planning frameworks, sectoral road hierarchies, green buffer reserves, and statutory subdivision approvals aligned with UDPFI norms and Rajasthan urban policies.',
    metaTitle: 'Township & Urban Master Planning in Rajasthan | Design Plus',
    metaDescription: 'Explore regional master planning principles, arterial circulation design, and statutory land-use zoning for growing urban centers in Rajasthan.',
    featuredImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'UDPFI Guidelines · State Urban Development Acts'
  },
  {
    id: 'cat-survey',
    slug: 'surveying-geotechnical',
    name: 'Surveying & Geotechnical Investigation',
    shortName: 'Survey & Geotech',
    tagline: 'High-precision total station grids, DGPS benchmarks, and soil boreholes.',
    description: 'Ground truth before design. Explaining standard penetration tests (SPT), rock-socketing verification in Aravalli schist, and digital elevation model (DEM) profiling.',
    metaTitle: 'Topographical Survey & Geotechnical Engineering | Design Plus',
    metaDescription: 'Why accurate site benchmarks, DGPS surveys, and soil bearing capacity tests are critical to structural safety and avoiding foundation failures.',
    featuredImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'IS 1892 (Subsurface Investigation) · IS 2131 (SPT)'
  },
  {
    id: 'cat-ajmer',
    slug: 'ajmer-rajasthan',
    name: 'Ajmer & Rajasthan Contextual Guides',
    shortName: 'Ajmer & Rajasthan',
    tagline: 'Local construction costs, geological realities, microclimates, and regional craft.',
    description: 'Hyper-local guides addressing the specific realities of building in Ajmer: Aravalli rock strata, 46°C summer heat, local stone sourcing, and municipal procedures.',
    metaTitle: 'Building in Ajmer & Rajasthan: Local Architecture Guides | Design Plus',
    metaDescription: 'Practical local guides on building costs, climate design, soil conditions, and architectural considerations specific to Ajmer and central Rajasthan.',
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'Ajmer Development Authority · Local Topography & Climate'
  },
  {
    id: 'cat-decisions',
    slug: 'decision-guides',
    name: 'Homeowner Decision Guides',
    shortName: 'Decision Guides',
    tagline: 'Clear, unbiased comparisons for major architecture and construction choices.',
    description: 'Objective comparisons helping clients evaluate: Architect vs Contractor, 2D vs 3D, Renovation vs Reconstruction, and Independent Architect vs Full-Service Studio.',
    metaTitle: 'Architecture & Construction Decision Guides | Design Plus',
    metaDescription: 'Unbiased decision guides comparing architect vs contractor, interior designer vs architect, and realistic project budgeting for building owners.',
    featuredImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'Professional Practice & Construction Management'
  },
  {
    id: 'cat-stories',
    slug: 'project-stories',
    name: 'Monographs & Project Case Studies',
    shortName: 'Project Stories',
    tagline: 'Detailed breakdowns of design challenges, structural solutions, and execution.',
    description: 'In-depth case studies examining how complex client briefs, site constraints, and structural challenges were resolved from first sketch to finished monolith.',
    metaTitle: 'Architectural & Engineering Project Case Studies | Design Plus',
    metaDescription: 'Detailed project monographs revealing the design decisions, engineering calculations, and craftsmanship behind landmark residential and commercial projects.',
    featuredImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    statutoryFocus: 'Executed Commissions Archive'
  }
];

const CATEGORY_ALIASES: Record<string, string> = {
  'residential-design': 'architecture',
  'commercial-design': 'architecture',
  'house-planning': 'building-planning',
  'ajmer': 'ajmer-rajasthan'
};

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  const resolvedSlug = CATEGORY_ALIASES[slug] || slug;
  return BLOG_CATEGORIES.find(c => c.slug === resolvedSlug);
}

export function getAllCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}
