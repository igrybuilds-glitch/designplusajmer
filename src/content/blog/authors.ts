import { BlogAuthor } from '../../types/blog';

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  'sudhir-soni': {
    id: 'author-sudhir-soni',
    slug: 'sudhir-soni',
    name: 'Er. Sudhir Soni',
    role: 'Founder, CEO & Principal Structural Engineer',
    qualifications: 'M.E. (Structure) | M.I.E. | FIV | Chartered Engineer',
    bio: 'Founding principal of Design Plus with over 30 years of practice in chartered structural engineering, post-tensioned moment frames, foundation mechanics, bridge design, and statutory valuation across Rajasthan.',
    avatar: '/images/team/sudhir-soni.jpg',
    experienceYears: 32,
    statutoryAffiliations: ['Institution of Engineers (India)', 'Institution of Valuers (FIV)', 'Chartered Engineer (India)']
  },
  'vipul-verma': {
    id: 'author-vipul-verma',
    slug: 'vipul-verma',
    name: 'Ar. Vipul Verma',
    role: 'Principal Architect',
    qualifications: 'B.Arch | M.H.S. (Belgium) | Council of Architecture CA/2004',
    bio: 'Principal architect directing Design Plus design studio. Post-graduate specialization in human settlements from Belgium, focused on arid-climate passive thermal envelopes, regional sandstone materiality, and contemporary residential typologies.',
    avatar: '/images/team/vipul-verma.jpg',
    experienceYears: 20,
    statutoryAffiliations: ['Council of Architecture (CA/2004)', 'Indian Institute of Architects (IIA)']
  },
  'ankit-soni': {
    id: 'author-ankit-soni',
    slug: 'ankit-soni',
    name: 'Er. Ankit Soni',
    role: 'Senior Structural Engineer',
    qualifications: 'M.Tech (Structural Engineering)',
    bio: 'Specialist in 3D finite element structural analysis, earthquake-resistant ductile detailing under IS 13920, and multi-tier commercial space frames.',
    avatar: '/images/team/ankit-soni.jpg',
    experienceYears: 9,
    statutoryAffiliations: ['Institution of Engineers (India)']
  },
  'amit-soni': {
    id: 'author-amit-soni',
    slug: 'amit-soni',
    name: 'Er. Amit Soni',
    role: 'Urban & Infrastructure Planner',
    qualifications: 'M.Plan (Urban Planning)',
    bio: 'Directing township layouts, arterial roadway geometries, ADA Master Plan 2033 compliance, and large-scale infrastructure master plans.',
    avatar: '/images/team/amit-soni.jpg',
    experienceYears: 12,
    statutoryAffiliations: ['Institute of Town Planners, India (ITPI)']
  },
  'shikha-soni': {
    id: 'author-shikha-soni',
    slug: 'shikha-soni',
    name: 'Er. Shikha Soni',
    role: 'Building Services & Electrical Engineer',
    qualifications: 'M.Tech (Electrical Power Systems)',
    bio: 'Leading electrical reticulation, energy-efficient building services (MEP), and solar integration for residential and institutional projects.',
    avatar: '/images/team/shikha-soni.jpg',
    experienceYears: 8,
    statutoryAffiliations: ['IEEE Power & Energy Society']
  }
};

export function getAuthorBySlug(slug: string): BlogAuthor | undefined {
  return BLOG_AUTHORS[slug] || Object.values(BLOG_AUTHORS).find(a => a.slug === slug);
}

export function getAllAuthors(): BlogAuthor[] {
  return Object.values(BLOG_AUTHORS);
}
