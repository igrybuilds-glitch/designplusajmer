import { BlogCategoryMeta } from '../types';

export const BLOG_CATEGORIES: BlogCategoryMeta[] = [
  {
    slug: 'architecture',
    name: 'Architecture',
    label: 'Architecture',
    metaTitle: 'Architecture Journal | Structure & Theory | Design Plus',
    metaDescription: 'In-depth essays on architectural theory, climatic adaptation in arid regions, tectonic honesty, and the synthesis of architectural form with structural mechanics in Rajasthan and India.',
    h1: 'Architecture',
    introduction: 'The Architecture journal documents our studio’s ongoing inquiry into how built form negotiates harsh climatic realities, tectonic truth, and civic dignity. In an era dominated by superficial facade treatments, we examine how genuine architecture emerges from the mathematical laws of structure, natural illumination, and regional materiality.',
    editorialNote: 'Our architectural practice operates on the premise that architectural beauty is inseparable from structural integrity. Every column grid, cantilevered canopy, and solar louver is an honest expression of structural equilibrium.',
    relatedServices: ['architectural-design', 'structural-design', '3d-elevation-design'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven', 'contemporary-rajasthan-villa'],
    relatedLocations: ['ajmer', 'jaipur', 'pushkar', 'udaipur']
  },
  {
    slug: 'residential-design',
    name: 'Residential Design',
    label: 'Residential Design',
    metaTitle: 'Residential Design Journal | Villa Architecture | Design Plus',
    metaDescription: 'Architectural insights on bespoke private villas, multi-generational family compounds, courtyard micro-climates, and thermal shielding strategies across Rajasthan.',
    h1: 'Residential Design',
    introduction: 'A home is an enduring sanctuary that must shelter family life across generations while effortlessly withstanding Rajasthan’s 45°C summer peaks. The Residential Design journal explores spatial zoning, privacy gradients, acoustic buffers, and passive cooling courtyards tailored to modern Indian family structures.',
    editorialNote: 'Multi-generational living requires nuanced spatial zoning—providing quiet seclusion for elders, fluid social gathering spaces for family rituals, and private retreat zones for young professionals.',
    relatedServices: ['residential-architecture', '2d-floor-planning', 'structural-design'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven', 'modern-courtyard-residence'],
    relatedLocations: ['ajmer', 'pushkar', 'jaipur', 'udaipur']
  },
  {
    slug: 'commercial-design',
    name: 'Commercial Design',
    label: 'Commercial Design',
    metaTitle: 'Commercial Design Journal | Retail & Offices | Design Plus',
    metaDescription: 'Strategic architectural and structural planning for shopping centers, commercial plazas, open-plan corporate headquarters, and retail assets in urban Rajasthan.',
    h1: 'Commercial Design',
    introduction: 'Commercial architecture must balance striking street identity with uncompromising functional efficiency. Our commercial journal dissects high-density circulation grids, column-free structural spans, energy-efficient glazing envelopes, fire safety provisions, and maximizing return on leasable square footage.',
    editorialNote: 'Exceptional commercial spaces succeed at the intersection of pedestrian psychology and structural economics. By optimizing column grids, we allow dynamic tenant reconfiguration without structural compromises.',
    relatedServices: ['commercial-architecture', 'structural-design', '3d-elevation-design'],
    relatedProjects: ['panchsheel-commercial-pavilion', 'boutique-commercial-office'],
    relatedLocations: ['ajmer', 'jaipur']
  },
  {
    slug: 'interior-design',
    name: 'Interior Design',
    label: 'Interior Design',
    metaTitle: 'Interior Design Journal | Stone & Joinery | Design Plus',
    metaDescription: 'Essays on spatial joinery, lighting lux planning, indigenous Rajasthan stone craft, acoustic balancing, and custom architectural millwork for villas and penthouses.',
    h1: 'Interior Design',
    introduction: 'Interior architecture is the tactile continuation of the building envelope. Rather than superficial decoration, our interior design journal explores the deliberate calibration of light, acoustics, human ergonomics, and honest materials—from hand-dressed Makrana marble and Jodhpur sandstone to bespoke teak millwork.',
    editorialNote: 'We approach interior environments through the lens of stillness and longevity. By stripping away extraneous ornament, we reveal the tranquil power of proportional space and warm, layered architectural illumination.',
    relatedServices: ['interior-design', '2d-floor-planning', 'architectural-design'],
    relatedProjects: ['vaishali-studio-interiors', 'contemporary-retail-interior'],
    relatedLocations: ['ajmer', 'jaipur', 'udaipur']
  },
  {
    slug: 'house-planning',
    name: 'House Planning',
    label: 'House Planning',
    metaTitle: 'House Planning Guide | 2D Ergonomics & Vastu | Design Plus',
    metaDescription: 'Technical guidelines on 2D space allocation, circulation efficiency, Vastu directional alignment without structural compromise, and ergonomic dimensioning.',
    h1: 'House Planning',
    introduction: 'Every exceptional building begins with an uncompromising floor plan. The House Planning journal provides rigorous, practical guides on eliminating wasteful corridors, calculating daylight penetration depths, coordinating structural column grids with furniture flow, and harmonizing Vastu shastra with modern ergonomics.',
    editorialNote: 'A floor plan is not merely an arrangement of rooms; it is an ergonomic choreography of daily habits, natural wind vectors, and plumbing economies that dictate quality of life for decades.',
    relatedServices: ['2d-floor-planning', 'residential-architecture', 'structural-design'],
    relatedProjects: ['ana-sagar-residence', 'pushkar-courtyard-haven', 'modern-courtyard-residence'],
    relatedLocations: ['ajmer', 'jaipur', 'pushkar']
  },
  {
    slug: 'ajmer',
    name: 'Ajmer Regional Architecture',
    label: 'Ajmer',
    metaTitle: 'Ajmer Architecture & ADA Byelaws Guide | Design Plus',
    metaDescription: 'Local urbanism, municipal building byelaw navigation under the Ajmer Development Authority (ADA), lakefront conservation, and soil considerations across Ajmer.',
    h1: 'Ajmer Architecture',
    introduction: 'As our founding practice hub, Ajmer presents a fascinating architectural terrain framed by the ancient Aravalli ridges and Ana Sagar Lake. This journal provides definitive local guidance on Ajmer Development Authority (ADA) building byelaws, lake catchment setbacks, seismic foundation engineering on weathered rock, and local stone traditions.',
    editorialNote: 'Building successfully in Ajmer requires deep intimacy with local municipal approval pathways, soil variations from Panchsheel to Ana Sagar Circular Road, and climatic wind patterns funneling through the surrounding hills.',
    relatedServices: ['architectural-design', 'structural-design', '2d-floor-planning'],
    relatedProjects: ['ana-sagar-residence', 'panchsheel-commercial-pavilion'],
    relatedLocations: ['ajmer', 'pushkar']
  }
];

export function getBlogCategories(): BlogCategoryMeta[] {
  return BLOG_CATEGORIES;
}

export function getBlogCategoryBySlug(slug: string): BlogCategoryMeta | undefined {
  const normalized = slug.toLowerCase().trim();
  return BLOG_CATEGORIES.find((c) => c.slug === normalized);
}

export const getBlogCategory = getBlogCategoryBySlug;
export default BLOG_CATEGORIES;
