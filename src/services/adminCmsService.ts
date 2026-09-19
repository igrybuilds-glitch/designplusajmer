import { db } from "../lib/firebase";
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  deleteDoc, 
  addDoc, 
  query, 
  orderBy, 
  where,
  limit
} from "firebase/firestore";
import { PROJECTS as STATIC_PROJECTS } from "../data/projectsData";
import { BLOG_ARTICLES as STATIC_BLOG_ARTICLES } from "../data/blogData";
import { SERVICES as STATIC_SERVICES, LOCATIONS_SERVED as STATIC_LOCATIONS, TEAM_MEMBERS as STATIC_TEAM, LEADERSHIP as STATIC_LEADERSHIP, BUSINESS_INFO as STATIC_BUSINESS } from "../data/siteData";

export interface CMSProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: "Completed" | "Ongoing" | "Concept" | "Design Study";
  location: string;
  city: string;
  state: string;
  area: string;
  plotSize?: string;
  builtUpArea: string;
  floors?: string;
  year: string;
  services: string[];
  shortDescription: string;
  projectBrief: string;
  designChallenge?: string;
  designApproach?: string;
  planningDetails?: string;
  elevationDetails?: string;
  interiorDetails?: string;
  structuralDetails?: string;
  materialDirection?: string;
  sustainabilityFeatures?: string;
  outcome?: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
  isConcept: boolean;
  relatedServices?: string[];
  relatedLocations?: string[];
  relatedProjects?: string[];
  relatedArticles?: string[];
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
  robotsSetting?: string;
  isPublished: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSBlogPost {
  id: string;
  title: string;
  slug: string;
  category: "Architecture" | "Residential Design" | "Commercial Design" | "Interior Design" | "House Planning" | "Ajmer";
  excerpt: string;
  content: string;
  featuredImage: string;
  imageAltText: string;
  author: string;
  publicationDate: string;
  updatedDate: string;
  readingTime: string;
  tags: string[];
  sources?: string[];
  relatedServices?: string[];
  relatedProjects?: string[];
  relatedLocations?: string[];
  relatedArticles?: string[];
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
  robots?: string;
  ogImage?: string;
  isPublished: boolean;
  isArchived: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSMediaItem {
  id: string;
  filename: string;
  url: string;
  altText: string;
  caption: string;
  category: "Projects" | "Blog" | "Services" | "General";
  dimensions: string;
  fileSize: string;
  usedIn: string[];
  uploadedBy: string;
  createdAt: string;
  isDeleted: boolean;
}

export interface CMSMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  plotArea?: string;
  projectType?: string;
  location?: string;
  source: string;
  status: "New" | "Contacted" | "Qualified" | "Closed";
  internalNotes?: string;
  isRead: boolean;
  isArchived: boolean;
  createdAt: string;
}

// Convert existing static projects to CMSProject format
function getInitialProjects(): CMSProject[] {
  return STATIC_PROJECTS.map((p) => {
    const isConcept = !!p.isConcept || p.category === "concept" || p.status === "concept-study" || p.status === "design-study";
    const statusMap: Record<string, "Completed" | "Ongoing" | "Concept" | "Design Study"> = {
      "completed": "Completed",
      "under-construction": "Ongoing",
      "in-design": "Ongoing",
      "concept-study": "Concept",
      "design-study": "Design Study"
    };

    return {
      id: p.id,
      title: p.title,
      slug: p.slug,
      category: p.category,
      status: statusMap[p.status] || (isConcept ? "Concept" : "Completed"),
      location: p.location,
      city: p.city || "Ajmer",
      state: "Rajasthan",
      area: p.area,
      plotSize: p.siteArea || "3,200 sq.ft",
      builtUpArea: p.builtUpArea,
      floors: String(p.floors || "G+1"),
      year: p.year,
      services: p.services || p.scopeOfWork || ["Architectural Design", "Structural Detailing"],
      shortDescription: p.summary || p.description || "",
      projectBrief: p.brief || p.summary || "",
      designChallenge: p.challenge || "Balancing stringent ADA setback provisions with maximum daylight integration.",
      designApproach: p.approach || "Thermal massing combined with shaded verandas and indigenous stone claddings.",
      planningDetails: "Courtyard centered floor circulation with optimal Vastu orientation.",
      elevationDetails: "Contemporary massing accented with local Jodhpur sandstone louvers.",
      interiorDetails: "Tactile materials, concealed LED mood lines, and Makrana marble accents.",
      structuralDetails: p.structuralEngineering || "RCC ductile frame designed to IS 456:2000 and IS 13920:2016.",
      materialDirection: "Makrana white marble, Dholpur pink sandstone, steel pergolas.",
      sustainabilityFeatures: "Rainwater harvesting, cross ventilation, cavity wall insulation.",
      outcome: "Exceeded client space optimization goals while securing swift ADA sanction.",
      coverImage: p.heroImage || (p.images && p.images[0]) || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      gallery: p.images || [p.heroImage],
      featured: !!p.featured || !!p.isFeatured,
      isConcept,
      relatedServices: p.relatedServices || ["architectural-design", "structural-design"],
      relatedLocations: p.relatedLocations || ["ajmer"],
      relatedProjects: p.relatedProjects || [],
      relatedArticles: ["rajasthan-bylaws-ajmer", "seismic-design-rajasthan"],
      seoTitle: `${p.title} | Design Plus Architecture Ajmer`,
      seoDescription: p.summary?.slice(0, 155) || `Architectural and structural engineering details for ${p.title} in ${p.city}, Rajasthan by Design Plus.`,
      canonical: `https://designplusajmer.in/projects/${p.category}/${p.slug}`,
      robotsSetting: "index, follow",
      isPublished: true,
      isArchived: false,
      isDeleted: false,
      createdAt: "2026-01-15T10:00:00.000Z",
      updatedAt: "2026-03-01T12:00:00.000Z"
    };
  });
}

// Convert static blog articles to CMSBlogPost format
function getInitialBlogPosts(): CMSBlogPost[] {
  const categoryNameMap: Record<string, "Architecture" | "Residential Design" | "Commercial Design" | "Interior Design" | "House Planning" | "Ajmer"> = {
    "architecture": "Architecture",
    "residential-design": "Residential Design",
    "commercial-design": "Commercial Design",
    "interior-design": "Interior Design",
    "house-planning": "House Planning",
    "ajmer": "Ajmer"
  };

  return STATIC_BLOG_ARTICLES.map((b: any) => ({
    id: b.id,
    title: b.title,
    slug: b.slug,
    category: categoryNameMap[b.categorySlug || b.category?.toLowerCase()] || "Architecture",
    excerpt: b.excerpt || "",
    content: b.content || "",
    featuredImage: b.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAltText: b.imageAlt || b.title,
    author: b.author?.name || "Er. Sudhir Soni",
    publicationDate: b.publishDate || "January 2026",
    updatedDate: b.publishDate || "January 2026",
    readingTime: b.readingTime || "5 min read",
    tags: b.tags || ["Architecture", "Rajasthan", "Structural Design"],
    sources: ["IS 456:2000 Plain and Reinforced Concrete Code", "ADA 2020 Building Byelaws"],
    relatedServices: ["architectural-design", "structural-design"],
    relatedProjects: ["the-monolithic-courtyard-house"],
    relatedLocations: ["ajmer"],
    relatedArticles: [],
    seoTitle: `${b.title} | Design Plus Journal`,
    seoDescription: b.excerpt?.slice(0, 155) || b.title,
    canonical: `https://designplusajmer.in/blog/${b.categorySlug}/${b.slug}`,
    robots: "index, follow",
    ogImage: b.image || "",
    isPublished: true,
    isArchived: false,
    isDeleted: false,
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-02-20T15:00:00.000Z"
  }));
}

// In-Memory Fallback Cache for instant performance & offline safety
let localProjectsCache: CMSProject[] = getInitialProjects();
let localBlogCache: CMSBlogPost[] = getInitialBlogPosts();
let localMediaCache: CMSMediaItem[] = [
  {
    id: "media-1",
    filename: "monolithic-courtyard-facade.jpg",
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    altText: "Monolithic Courtyard House modern elevation in Panchsheel Nagar Ajmer",
    caption: "Exterior facade study with sandstone privacy screens",
    category: "Projects",
    dimensions: "1920x1080",
    fileSize: "420 KB",
    usedIn: ["the-monolithic-courtyard-house"],
    uploadedBy: "igrybuilds@gmail.com",
    createdAt: "2026-02-01T09:30:00Z",
    isDeleted: false
  },
  {
    id: "media-2",
    filename: "aravalli-granite-subsoil.jpg",
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80",
    altText: "Soil bearing capacity testing in Ajmer subsoil strata",
    caption: "Foundation geotechnical exploration site survey",
    category: "Blog",
    dimensions: "1600x900",
    fileSize: "380 KB",
    usedIn: ["seismic-design-rajasthan"],
    uploadedBy: "designplusajmer@gmail.com",
    createdAt: "2026-02-15T11:00:00Z",
    isDeleted: false
  }
];

let localMessagesCache: CMSMessage[] = [
  {
    id: "msg-1",
    name: "Dr. Vikram Rathore",
    phone: "+91 94140 12345",
    email: "dr.vikram@gmail.com",
    plotArea: "4,500 sq.ft (50x90)",
    projectType: "Residential Villa",
    location: "Panchsheel Nagar, Ajmer",
    message: "Planning a 4BHK duplex villa with central open-to-sky courtyard and Vastu alignment. Need comprehensive architectural drawings and chartered structural stability certificate.",
    source: "Consultation Form",
    status: "New",
    internalNotes: "High-priority client. Site inspection requested for this Saturday.",
    isRead: false,
    isArchived: false,
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: "msg-2",
    name: "Rajesh Khandelwal",
    phone: "+91 98291 55667",
    email: "rajesh.khandelwal@gmail.com",
    plotArea: "8,000 sq.ft",
    projectType: "Commercial Complex",
    location: "Jaipur Road, Ajmer",
    message: "Seeking ADA sanction drawings, basement parking calculation, and multi-story RCC design for a 4-floor retail center.",
    source: "Homepage Quick Consultation",
    status: "Contacted",
    internalNotes: "Sent portfolio & fee schedule. Awaiting zoning land title documents.",
    isRead: true,
    isArchived: false,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: "msg-3",
    name: "Smt. Sunita Sharma",
    phone: "+91 70141 88990",
    email: "sunita.sharma@yahoo.co.in",
    plotArea: "2,400 sq.ft (30x80)",
    projectType: "Bespoke Interior & Renovation",
    location: "Vaishali Nagar, Ajmer",
    message: "Need complete interior architecture revamp for ground and first floor with Rajasthani stone finishes.",
    source: "AI Architect Consultation",
    status: "Qualified",
    internalNotes: "Met at Ajmer studio. Ar. Vipul Verma handling layout draft.",
    isRead: true,
    isArchived: false,
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

// Helper: Record an administrative audit log
async function logAdminAction(adminEmail: string, action: string, contentType: string, contentId: string, summary: string) {
  try {
    const token = sessionStorage.getItem("designplus_admin_jwt");
    if (token) {
      await fetch("/api/admin/audit-logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ action, contentType, contentId, summary })
      });
    }
  } catch (err) {
    console.warn("Could not log action:", err);
  }
}

// CMS Projects Operations
export async function fetchAllCMSProjects(): Promise<CMSProject[]> {
  try {
    const colRef = collection(db, "projects");
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      const projects: CMSProject[] = [];
      snapshot.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() } as CMSProject);
      });
      localProjectsCache = projects;
      return projects;
    }
  } catch (err) {
    console.warn("Using local projects cache:", err);
  }
  return localProjectsCache;
}

export async function saveCMSProject(project: Partial<CMSProject> & { title: string }, adminEmail = "admin"): Promise<CMSProject> {
  const id = project.id || `proj-${Date.now()}`;
  const now = new Date().toISOString();

  // Enforce Concept label for concept projects
  const isConcept = project.status === "Concept" || project.status === "Design Study" || project.category === "concept" || !!project.isConcept;

  const fullProject: CMSProject = {
    id,
    title: project.title,
    slug: project.slug || project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    category: project.category || "residential",
    status: project.status || (isConcept ? "Concept" : "Completed"),
    location: project.location || "Ajmer, Rajasthan",
    city: project.city || "Ajmer",
    state: project.state || "Rajasthan",
    area: project.area || "3,500 sq.ft",
    plotSize: project.plotSize || "40x80",
    builtUpArea: project.builtUpArea || project.area || "3,500 sq.ft",
    floors: project.floors || "G+1",
    year: project.year || "2026",
    services: project.services || ["Architectural Design", "Structural Detailing"],
    shortDescription: project.shortDescription || "",
    projectBrief: project.projectBrief || "",
    designChallenge: project.designChallenge || "",
    designApproach: project.designApproach || "",
    planningDetails: project.planningDetails || "",
    elevationDetails: project.elevationDetails || "",
    interiorDetails: project.interiorDetails || "",
    structuralDetails: project.structuralDetails || "",
    materialDirection: project.materialDirection || "",
    sustainabilityFeatures: project.sustainabilityFeatures || "",
    outcome: project.outcome || "",
    coverImage: project.coverImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery: project.gallery || [],
    featured: !!project.featured,
    isConcept,
    relatedServices: project.relatedServices || ["architectural-design"],
    relatedLocations: project.relatedLocations || ["ajmer"],
    relatedProjects: project.relatedProjects || [],
    relatedArticles: project.relatedArticles || [],
    seoTitle: project.seoTitle || `${project.title} | Design Plus Architecture`,
    seoDescription: project.seoDescription || project.shortDescription?.slice(0, 155) || "",
    canonical: project.canonical || `https://designplusajmer.in/projects/${project.category || 'residential'}/${project.slug}`,
    robotsSetting: project.robotsSetting || "index, follow",
    isPublished: project.isPublished !== undefined ? project.isPublished : true,
    isArchived: !!project.isArchived,
    isDeleted: !!project.isDeleted,
    createdAt: project.createdAt || now,
    updatedAt: now
  };

  try {
    const docRef = doc(db, "projects", id);
    await setDoc(docRef, fullProject, { merge: true });
  } catch (err) {
    console.warn("Saving to memory cache:", err);
  }

  // Update memory
  const idx = localProjectsCache.findIndex(p => p.id === id);
  if (idx >= 0) {
    localProjectsCache[idx] = fullProject;
  } else {
    localProjectsCache.unshift(fullProject);
  }

  await logAdminAction(
    adminEmail,
    project.id ? "PROJECT_UPDATE" : "PROJECT_CREATE",
    "project",
    id,
    `${project.id ? 'Updated' : 'Created'} project "${fullProject.title}" (Status: ${fullProject.status})`
  );

  return fullProject;
}

export async function deleteCMSProject(id: string, soft = true, adminEmail = "admin") {
  const p = localProjectsCache.find(x => x.id === id);
  if (soft) {
    if (p) p.isDeleted = true;
  } else {
    localProjectsCache = localProjectsCache.filter(x => x.id !== id);
  }

  try {
    if (soft) {
      await setDoc(doc(db, "projects", id), { isDeleted: true }, { merge: true });
    } else {
      await deleteDoc(doc(db, "projects", id));
    }
  } catch (err) {
    console.warn("Delete project Firestore notice:", err);
  }

  await logAdminAction(
    adminEmail,
    soft ? "PROJECT_SOFT_DELETE" : "PROJECT_PERMANENT_DELETE",
    "project",
    id,
    `${soft ? 'Soft-deleted' : 'Permanently removed'} project "${p?.title || id}"`
  );
}

// CMS Blog Articles Operations
export async function fetchAllCMSBlogPosts(): Promise<CMSBlogPost[]> {
  try {
    const colRef = collection(db, "blogPosts");
    const snapshot = await getDocs(colRef);
    if (!snapshot.empty) {
      const posts: CMSBlogPost[] = [];
      snapshot.forEach(doc => {
        posts.push({ id: doc.id, ...doc.data() } as CMSBlogPost);
      });
      localBlogCache = posts;
      return posts;
    }
  } catch (err) {
    console.warn("Using local blog cache:", err);
  }
  return localBlogCache;
}

export async function saveCMSBlogPost(post: Partial<CMSBlogPost> & { title: string }, adminEmail = "admin"): Promise<CMSBlogPost> {
  const id = post.id || `post-${Date.now()}`;
  const now = new Date().toISOString();

  const words = (post.content || "").split(/\s+/).filter(Boolean).length;
  const readingTimeCalc = `${Math.max(1, Math.ceil(words / 200))} min read`;

  const fullPost: CMSBlogPost = {
    id,
    title: post.title,
    slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    category: post.category || "Architecture",
    excerpt: post.excerpt || "",
    content: post.content || "",
    featuredImage: post.featuredImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAltText: post.imageAltText || post.title,
    author: post.author || "Er. Sudhir Soni",
    publicationDate: post.publicationDate || "March 2026",
    updatedDate: now.slice(0, 10),
    readingTime: post.readingTime || readingTimeCalc,
    tags: post.tags || ["Architecture", "Design Plus", "Rajasthan"],
    sources: post.sources || ["Indian Standards (IS Codes)", "Ajmer Development Authority Guidelines"],
    relatedServices: post.relatedServices || ["architectural-design"],
    relatedProjects: post.relatedProjects || [],
    relatedLocations: post.relatedLocations || ["ajmer"],
    relatedArticles: post.relatedArticles || [],
    seoTitle: post.seoTitle || `${post.title} | Design Plus Journal`,
    seoDescription: post.seoDescription || post.excerpt?.slice(0, 155) || "",
    canonical: post.canonical || `https://designplusajmer.in/blog/${(post.category || "architecture").toLowerCase()}/${post.slug}`,
    robots: post.robots || "index, follow",
    ogImage: post.ogImage || post.featuredImage || "",
    isPublished: post.isPublished !== undefined ? post.isPublished : true,
    isArchived: !!post.isArchived,
    isDeleted: !!post.isDeleted,
    createdAt: post.createdAt || now,
    updatedAt: now
  };

  try {
    const docRef = doc(db, "blogPosts", id);
    await setDoc(docRef, fullPost, { merge: true });
  } catch (err) {
    console.warn("Saving blog to memory cache:", err);
  }

  const idx = localBlogCache.findIndex(b => b.id === id);
  if (idx >= 0) {
    localBlogCache[idx] = fullPost;
  } else {
    localBlogCache.unshift(fullPost);
  }

  await logAdminAction(
    adminEmail,
    post.id ? "BLOG_UPDATE" : "BLOG_CREATE",
    "blog",
    id,
    `${post.id ? 'Updated' : 'Created'} article "${fullPost.title}" (${words} words)`
  );

  return fullPost;
}

export async function deleteCMSBlogPost(id: string, soft = true, adminEmail = "admin") {
  const b = localBlogCache.find(x => x.id === id);
  if (soft) {
    if (b) b.isDeleted = true;
  } else {
    localBlogCache = localBlogCache.filter(x => x.id !== id);
  }

  try {
    if (soft) {
      await setDoc(doc(db, "blogPosts", id), { isDeleted: true }, { merge: true });
    } else {
      await deleteDoc(doc(db, "blogPosts", id));
    }
  } catch (err) {
    console.warn("Delete blog Firestore notice:", err);
  }

  await logAdminAction(
    adminEmail,
    soft ? "BLOG_SOFT_DELETE" : "BLOG_PERMANENT_DELETE",
    "blog",
    id,
    `${soft ? 'Soft-deleted' : 'Permanently removed'} article "${b?.title || id}"`
  );
}

// Media Library Operations
export async function fetchAllCMSMedia(): Promise<CMSMediaItem[]> {
  try {
    const colRef = collection(db, "media");
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      const items: CMSMediaItem[] = [];
      snap.forEach(d => items.push({ id: d.id, ...d.data() } as CMSMediaItem));
      localMediaCache = items;
      return items;
    }
  } catch (err) {
    console.warn("Using local media cache:", err);
  }
  return localMediaCache;
}

export async function addCMSMedia(item: Omit<CMSMediaItem, "id" | "createdAt" | "isDeleted" | "uploadedBy">, adminEmail = "admin"): Promise<CMSMediaItem> {
  const id = `media-${Date.now()}`;
  const now = new Date().toISOString();

  const newMedia: CMSMediaItem = {
    id,
    ...item,
    uploadedBy: adminEmail,
    createdAt: now,
    isDeleted: false
  };

  try {
    await setDoc(doc(db, "media", id), newMedia);
  } catch (err) {
    console.warn("Saved media to memory cache:", err);
  }

  localMediaCache.unshift(newMedia);

  await logAdminAction(
    adminEmail,
    "MEDIA_UPLOAD",
    "media",
    id,
    `Uploaded media "${newMedia.filename}" with alt text: "${newMedia.altText}"`
  );

  return newMedia;
}

export async function updateCMSMedia(id: string, updates: Partial<CMSMediaItem>, adminEmail = "admin") {
  const idx = localMediaCache.findIndex(m => m.id === id);
  if (idx >= 0) {
    localMediaCache[idx] = { ...localMediaCache[idx], ...updates };
  }

  try {
    await setDoc(doc(db, "media", id), updates, { merge: true });
  } catch (err) {
    console.warn("Media update Firestore notice:", err);
  }

  await logAdminAction(
    adminEmail,
    "MEDIA_UPDATE",
    "media",
    id,
    `Updated metadata for media "${localMediaCache[idx]?.filename || id}"`
  );
}

export async function deleteCMSMedia(id: string, adminEmail = "admin"): Promise<{ success: boolean; error?: string }> {
  const item = localMediaCache.find(m => m.id === id);
  if (item && item.usedIn && item.usedIn.length > 0) {
    return {
      success: false,
      error: `Cannot delete asset: It is currently referenced in active content (${item.usedIn.join(", ")}). Remove references first.`
    };
  }

  localMediaCache = localMediaCache.filter(m => m.id !== id);
  try {
    await deleteDoc(doc(db, "media", id));
  } catch (err) {
    console.warn("Media delete Firestore notice:", err);
  }

  await logAdminAction(
    adminEmail,
    "MEDIA_DELETE",
    "media",
    id,
    `Deleted asset "${item?.filename || id}"`
  );

  return { success: true };
}

// Inquiries / Messages Operations
export async function fetchAllCMSMessages(): Promise<CMSMessage[]> {
  try {
    const colRef = collection(db, "inquiries");
    const snap = await getDocs(colRef);
    if (!snap.empty) {
      const items: CMSMessage[] = [];
      snap.forEach(d => {
        const data = d.data();
        items.push({
          id: d.id,
          name: data.name || "Client",
          phone: data.phone || "",
          email: data.email || "",
          message: data.message || "",
          plotArea: data.plotArea || "",
          projectType: data.projectType || "Residential",
          location: data.location || "Ajmer",
          source: data.source || "Website Form",
          status: (data.status as any) || "New",
          internalNotes: data.internalNotes || "",
          isRead: !!data.isRead,
          isArchived: !!data.isArchived,
          createdAt: data.createdAt || new Date().toISOString()
        });
      });
      // Sort newest first
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      localMessagesCache = items;
      return items;
    }
  } catch (err) {
    console.warn("Using local messages cache:", err);
  }
  return localMessagesCache;
}

export async function updateCMSMessageStatus(id: string, status: "New" | "Contacted" | "Qualified" | "Closed", internalNotes?: string, adminEmail = "admin") {
  const msg = localMessagesCache.find(m => m.id === id);
  if (msg) {
    msg.status = status;
    msg.isRead = true;
    if (internalNotes !== undefined) msg.internalNotes = internalNotes;
  }

  try {
    await setDoc(doc(db, "inquiries", id), {
      status,
      isRead: true,
      ...(internalNotes !== undefined ? { internalNotes } : {})
    }, { merge: true });
  } catch (err) {
    console.warn("Message update Firestore notice:", err);
  }

  await logAdminAction(
    adminEmail,
    "MESSAGE_STATUS_CHANGE",
    "message",
    id,
    `Updated lead "${msg?.name || id}" status to ${status}`
  );
}
