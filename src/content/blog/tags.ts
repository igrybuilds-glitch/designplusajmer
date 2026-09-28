import { BlogTag } from '../../types/blog';

export const BLOG_TAGS: BlogTag[] = [
  { id: 'tag-architects-ajmer', slug: 'architects-in-ajmer', name: 'Architects in Ajmer', description: 'Guides and insights on architectural design and commissioning in Ajmer.' },
  { id: 'tag-house-planning', slug: 'house-planning', name: 'House Planning', description: '2D layouts, spatial flow, Vastu orientation, and room zoning.' },
  { id: 'tag-construction-cost', slug: 'construction-cost', name: 'Construction Cost', description: 'Realistic budgeting, material specifications, and expenditure control.' },
  { id: 'tag-structural-engineering', slug: 'structural-engineering', name: 'Structural Engineering', description: 'Chartered load calculations, RCC frames, and seismic safety.' },
  { id: 'tag-soil-foundation', slug: 'soil-and-foundation', name: 'Soil & Foundation', description: 'Safe bearing capacity, geotechnical drilling, and foundation types.' },
  { id: 'tag-plan-approvals', slug: 'plan-approvals', name: 'Plan Approvals', description: 'ADA, UIT, and municipal corporation building bylaws and sanctions.' },
  { id: 'tag-passive-cooling', slug: 'passive-cooling', name: 'Passive Cooling', description: 'Courtyard microclimates, thermal massing, and solar orientation.' },
  { id: 'tag-interior-architecture', slug: 'interior-architecture', name: 'Interior Architecture', description: 'Joinery, natural stone craft, and architectural lighting.' },
  { id: 'tag-infrastructure-civil', slug: 'infrastructure-civil', name: 'Infrastructure & Civil', description: 'Highways, bridges, flyovers, and water resource engineering.' },
  { id: 'tag-topographic-survey', slug: 'topographic-survey', name: 'Topographic Survey', description: 'Total station traverse, DGPS benchmarks, and contour profiling.' },
  { id: 'tag-township-planning', slug: 'township-planning', name: 'Township Planning', description: 'Master plans, arterial road hierarchies, and statutory zoning.' },
  { id: 'tag-decision-guide', slug: 'decision-guide', name: 'Decision Guide', description: 'Unbiased comparisons helping homeowners make informed choices.' },
  { id: 'tag-case-study', slug: 'case-study', name: 'Case Study', description: 'Real-world project monographs and execution breakdowns.' },
  { id: 'tag-rajasthan-architecture', slug: 'rajasthan-architecture', name: 'Rajasthan Architecture', description: 'Vernacular stone craft, haveli wisdom, and modern regional forms.' }
];

export function getTagBySlug(slug: string): BlogTag | undefined {
  return BLOG_TAGS.find(t => t.slug === slug);
}

export function getAllTags(): BlogTag[] {
  return BLOG_TAGS;
}
