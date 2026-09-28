export type SearchIntent = 
  | 'informational'
  | 'commercial-investigation'
  | 'local-service'
  | 'transactional'
  | 'comparison'
  | 'problem-solution'
  | 'project-research';

export interface BlogAuthor {
  id: string;
  slug: string;
  name: string;
  role: string;
  qualifications: string;
  bio: string;
  avatar: string;
  experienceYears?: number;
  statutoryAffiliations?: string[];
  articleCount?: number;
}

export interface BlogCategory {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage: string;
  articleCount?: number;
  statutoryFocus?: string;
}

export interface BlogTag {
  id: string;
  slug: string;
  name: string;
  description?: string;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
  callout?: {
    type: 'note' | 'warning' | 'statute' | 'tip';
    title: string;
    text: string;
  };
  list?: {
    type: 'ordered' | 'unordered';
    items: string[];
  };
  technicalNote?: string;
  diagram?: {
    title: string;
    caption: string;
    specs: { label: string; value: string }[];
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  subcategory?: string;
  tags: string[];
  
  // Search Intent & Topical Cluster
  primarySearchIntent: SearchIntent;
  secondaryIntents?: SearchIntent[];
  isPillar?: boolean;
  clusterId: string;
  parentPillarSlug?: string;
  
  // Authorship & Verification
  author: BlogAuthor;
  reviewedBy?: {
    name: string;
    role: string;
    qualifications: string;
  };
  
  // Dates & Reading Stats
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  wordCount: number;
  
  // Visual Assets
  featuredImage: {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  
  // Editorial Content
  intro: string;
  keyTakeaways: string[];
  tableOfContents: { id: string; text: string; level: 2 | 3 }[];
  sections: ArticleSection[];
  
  // Specialized Engineering / Practical Guides Modules
  commonMistakes?: {
    mistake: string;
    consequence: string;
    recommendation: string;
  }[];
  checklist?: {
    title: string;
    items: string[];
  };
  faqs?: ArticleFAQ[];
  
  // Internal Linking Graph
  relatedServices: string[];
  relatedProjects: string[];
  relatedArticles: string[];
  relatedLocations?: string[];
  
  // Contextual Conversion Target
  contextualCTA: {
    title: string;
    subtitle: string;
    buttonText: string;
    consultationType?: string;
  };
  
  // Legal/Regulatory Disclaimer if applicable
  disclaimer?: string;
  
  status: 'published' | 'draft';
}
