export interface TeamMember {
  name: string;
  role: string;
  qualification: string;
  bio: string;
  specialization: string;
}

export type ProjectType = 'real' | 'concept';

export type ProjectCategory = 
  | 'residential' 
  | 'commercial' 
  | 'interiors' 
  | 'structural' 
  | 'institutional' 
  | 'industrial' 
  | 'concept';

export type ProjectStatus = 
  | 'completed' 
  | 'under-construction' 
  | 'in-design' 
  | 'concept-study'
  | 'design-study';

export interface ProjectLocation {
  city: string;
  state: string;
  areaOrNeighborhood?: string;
  displayLocation: string;
  isRegionalContext?: boolean;
}

export interface ProjectLeadership {
  architecturalPrincipal?: string;
  structuralPrincipal?: string;
  projectLead?: string;
}

export interface StructuralEngineeringDetails {
  framingSystem: string;
  foundationType: string;
  specialTechnicalFeatures: string[];
  charteredCertificationNote?: string;
}

export interface MaterialSpecification {
  name: string;
  application: string;
}

export interface ArchitecturalDrawing {
  id: string;
  title: string;
  type: 'floor-plan' | 'elevation' | 'section' | 'structural-detail' | 'axonometric';
  imageUrl: string;
  caption?: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  alt: string;
  aspect?: 'hero' | 'wide' | 'tall' | 'square';
}

export interface ProjectSEO {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  location: string;
  area: string;
  floors?: string | number;
  services?: string[];
  description?: string;
  brief: string;
  designApproach?: string;
  images?: string[];
  featured?: boolean;
  isConcept?: boolean;
  relatedServices?: string[];
  relatedLocations?: string[];
  relatedProjects?: string[];

  // Extended & compatibility fields
  projectType: ProjectType;
  projectCategory: ProjectCategory;
  clientType: string;
  locationDetails?: ProjectLocation;
  city: string;
  year: string;
  siteArea?: string;
  builtUpArea: string;
  categoryLabel: string;
  typology: string;
  badges?: string[];
  isFeatured?: boolean;
  lead: string;
  leadership?: ProjectLeadership;
  scopeOfWork: string[];
  summary: string;
  challenge: string;
  approach: string;
  structuralEngineering: string;
  structuralDetails?: StructuralEngineeringDetails;
  sustainabilityFeatures?: string[];
  materialsUsed?: MaterialSpecification[];
  heroImage: string;
  heroImageDetails?: {
    url: string;
    alt: string;
    caption?: string;
  };
  gallery: string[];
  galleryImages?: GalleryItem[];
  drawingsAndPlans?: ArchitecturalDrawing[];
  features: string[];
  conceptStatus?: 'concept-study' | 'design-study';
  designObjective?: string;
  spatialStrategy?: string;
  materialDirection?: string;
  lightingStrategy?: string;
  sustainabilityConsiderations?: string[];
  seo?: ProjectSEO;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  processHighlights: string[];
  iconName: string;
  heroImage: string;
}

export interface LocationInfo {
  slug: string;
  city: string;
  state: string;
  tagline: string;
  description: string;
  architecturalContext: string;
  localRegulations: string;
  serviceHighlights: string[];
  heroImage: string;
  distanceFromAjmer?: string;
}

export interface BlogCategoryMeta {
  slug: string;
  name: string;
  label?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  editorialNote: string;
  relatedServices: string[];
  relatedProjects: string[];
  relatedLocations: string[];
}

export interface BlogArticle {
  category: string;
  subcategory?: string;
  slug: string;
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
  tags: string[];
  readTime: string;
  relatedServices: string[];
  relatedProjects: string[];
  relatedLocations: string[];
  // Legacy compatibility fields
  date?: string;
  image?: string;
}

export type BlogPost = BlogArticle;

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  projectTitle: string;
  projectLocation: string;
  projectType: string;
  area?: string;
  rating: number;
  highlight: string;
  quote: string;
  year: string;
  verifiedLabel: string;
  consultantsInvolved: string;
}
