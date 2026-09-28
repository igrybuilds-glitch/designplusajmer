/**
 * Centralized Homepage Asset Manifest
 * 
 * Strict Two-Phase Strategy:
 * Phase 1: First Paint — Critical viewport items (First frame atlas, fonts, hero branding)
 * Phase 2: Homepage Preparation — Proactively preloads, decodes, and caches every visual
 * asset used across the entire homepage so scrolling never triggers a network request or decode spike.
 */

export interface AssetDescriptor {
  id: string;
  url: string;
  phase: 1 | 2;
  category: 'atlas' | 'service' | 'project' | 'team' | 'engineering' | 'journal' | 'manifesto';
  priority?: 'high' | 'auto' | 'low';
}

export const CRITICAL_FIRST_PAINT_ASSETS: AssetDescriptor[] = [
  {
    id: 'atlas-01',
    url: '/designplus-atlas-01.webp',
    phase: 1,
    category: 'atlas',
    priority: 'high'
  }
];

export const HOMEPAGE_PREPARATION_ASSETS: AssetDescriptor[] = [
  // 1. Cinematic Sprite Atlases (Frames 031 - 180)
  { id: 'atlas-02', url: '/designplus-atlas-02.webp', phase: 2, category: 'atlas' },
  { id: 'atlas-03', url: '/designplus-atlas-03.webp', phase: 2, category: 'atlas' },
  { id: 'atlas-04', url: '/designplus-atlas-04.webp', phase: 2, category: 'atlas' },
  { id: 'atlas-05', url: '/designplus-atlas-05.webp', phase: 2, category: 'atlas' },
  { id: 'atlas-06', url: '/designplus-atlas-06.webp', phase: 2, category: 'atlas' },

  // 2. Multidisciplinary Services Exhibition (10 Integrated Disciplines)
  { id: 'service-architecture', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85', phase: 2, category: 'service' },
  { id: 'service-structural', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85', phase: 2, category: 'service' },
  { id: 'service-interior', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85', phase: 2, category: 'service' },
  { id: 'service-highway', url: '/images/services/highway-engineering.webp', phase: 2, category: 'service' },
  { id: 'service-bridges', url: '/images/services/bridges-flyovers.webp', phase: 2, category: 'service' },
  { id: 'service-dams', url: '/images/services/dams-canals.webp', phase: 2, category: 'service' },
  { id: 'service-water', url: '/images/services/water-sewerage.webp', phase: 2, category: 'service' },
  { id: 'service-survey', url: '/images/services/topographical-survey.webp', phase: 2, category: 'service' },
  { id: 'service-geotechnical', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85', phase: 2, category: 'service' },
  { id: 'service-township', url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=85', phase: 2, category: 'service' },

  // 3. Manifesto Disciplines Matrix
  { id: 'manifesto-arch', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },
  { id: 'manifesto-struct', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },
  { id: 'manifesto-infra', url: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },
  { id: 'manifesto-interior', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },
  { id: 'manifesto-plan', url: '/images/services/township-planning.webp', phase: 2, category: 'manifesto' },
  { id: 'manifesto-survey', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },
  { id: 'manifesto-consult', url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80', phase: 2, category: 'manifesto' },

  // 4. Featured Architectural Monographs & Archive
  { id: 'proj-ana-sagar', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-courtyard', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-villa', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85', phase: 2, category: 'project' },
  { id: 'proj-tower', url: '/images/projects/dp-com-002-hero.webp', phase: 2, category: 'project' },
  { id: 'proj-commercial', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-estate', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-pavilion', url: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-industrial', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-interior-res', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-lounge', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },
  { id: 'proj-executive', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85', phase: 2, category: 'project' },

  // 5. Practice Leadership & Chartered Partners
  { id: 'team-sudhir-soni', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85', phase: 2, category: 'team' },
  { id: 'team-vipul-verma', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85', phase: 2, category: 'team' },
  { id: 'team-ankit-soni', url: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=85', phase: 2, category: 'team' },
  { id: 'team-shikha-soni', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85', phase: 2, category: 'team' },
  { id: 'team-amit-soni', url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85', phase: 2, category: 'team' },

  // 6. Heavy Engineering & Infrastructure Showcase
  { id: 'eng-highways', url: '/images/services/highway-engineering.webp', phase: 2, category: 'engineering' },
  { id: 'eng-bridges', url: '/images/services/bridges-flyovers.webp', phase: 2, category: 'engineering' },
  { id: 'eng-dams', url: '/images/services/dams-canals.webp', phase: 2, category: 'engineering' },
  { id: 'eng-water', url: '/images/services/water-sewerage.webp', phase: 2, category: 'engineering' },
  { id: 'eng-geotech', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85', phase: 2, category: 'engineering' },
  { id: 'eng-township', url: '/images/services/township-planning.webp', phase: 2, category: 'engineering' },

  // 7. Research Monographs & Journal Previews
  { id: 'journal-01', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80', phase: 2, category: 'journal' },
  { id: 'journal-02', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80', phase: 2, category: 'journal' },
  { id: 'journal-03', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', phase: 2, category: 'journal' }
];

export const ALL_HOMEPAGE_ASSETS: AssetDescriptor[] = [
  ...CRITICAL_FIRST_PAINT_ASSETS,
  ...HOMEPAGE_PREPARATION_ASSETS
];
