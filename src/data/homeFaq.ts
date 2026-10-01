// Homepage FAQ data — single source of truth.
// Imported by HomePage.tsx (for FAQPage JSON-LD) and by HomeFaqSection.tsx
// (for the visible accordion). Data-only module: no components, no images,
// safe to import in the homepage main chunk without hurting the CWV budget.

export interface HomeFaq {
  question: string;
  answer: string;
}

export const HOME_FAQS: HomeFaq[] = [
  {
    question: 'How much does an architect charge in Ajmer for house planning?',
    answer:
      'In Ajmer, architectural design fees typically range from ₹35 to ₹85 per square foot of built-up area for a comprehensive package — 2D floor plans, 3D elevation, structural RCC drawings and ADA sanction drawings. For a 2,000 sq.ft. home, expect roughly ₹70,000 to ₹1,70,000 depending on design complexity.'
  },
  {
    question: 'Are Ajmer Development Authority (ADA) approval drawings included?',
    answer:
      'Yes. Municipal sanction drawings prepared to ADA byelaws — setbacks, ground coverage and height norms — are part of our core deliverables, so you do not need to chase a separate draftsman for approvals.'
  },
  {
    question: 'Is structural engineering charged separately?',
    answer:
      'No. Unlike studios that outsource structure, Design Plus has in-house Chartered Structural Engineering led by Er. Sudhir Soni (M.E. Structure). Column-beam-slab design per IS 456 and seismic detailing per IS 1893 are unified in one coordinated package.'
  },
  {
    question: 'Do you design Vastu-compliant homes?',
    answer:
      'Yes. Vastu zoning — entrance orientation, room placement and directional balance — is integrated into the concept phase itself, reconciled with sun-path and climate logic rather than applied as an afterthought.'
  },
  {
    question: 'Which areas does Design Plus serve?',
    answer:
      'Our studio is based in Ajmer and serves Jaipur, Pushkar, Kishangarh and Bhilwara across Rajasthan, with structural consultancy available for institutional and infrastructure work beyond the region.'
  },
  {
    question: 'How do we start a project with Design Plus?',
    answer:
      'Book a consultation. We begin with a site visit and requirement briefing (Phase 01: Discover), then move through concept, design, engineering, documentation and execution supervision — with milestone-linked deliverables at every phase.'
  }
];

// HowTo steps for the design-process schema (mirrors PROCESS_STEPS in
// src/data/siteData.ts; kept inline here so the homepage main chunk does not
// pull the whole siteData module into the critical bundle).
export const HOME_HOWTO_STEPS = [
  {
    name: 'Discover — site reconnaissance & zoning due diligence',
    text: 'We assess site dimensions, orientation, neighbouring structures, sun-path, wind vectors, geotechnical conditions and municipal zoning byelaws to formulate the strategic project brief.'
  },
  {
    name: 'Concept — spatial ideation & climate orientation',
    text: 'Optimized space layouts reconcile functional room adjacencies with solar orientations and Vastu alignment; volumetric massing balances thermal comfort with spatial luxury.'
  },
  {
    name: 'Design — volumes, elevations & materiality',
    text: 'Planar diagrams become three-dimensional architecture: volume, rhythm, window openings, overhangs and authentic stone finishes, expressed as 2D floor plans and 3D exterior elevations.'
  },
  {
    name: 'Engineering — chartered structural mechanics',
    text: 'Led by Er. Sudhir Soni (Chartered Engineer, M.E. Structure): finite element modelling for columns, beams, foundations and MEP coordination per IS 456 and IS 1893.'
  },
  {
    name: 'Documentation — sanction drawings & working sets',
    text: 'Comprehensive working drawing packages, bar bending schedules, electrical networks and official Ajmer Development Authority (ADA) sanction files.'
  },
  {
    name: 'Execution — on-site supervision & certification',
    text: 'Technical drawing clarifications, pre-pour rebar inspection audits and Chartered Engineer milestone certifications ensure fidelity between plan and built reality.'
  }
];
