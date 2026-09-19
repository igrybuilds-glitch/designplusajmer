import { SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { PROJECTS, getAllProjects, getProjectBySlug } from '../data/projects';
import { BLOG_ARTICLES, getAllBlogArticles, getBlogArticleBySlug } from '../data/blog';
import { BLOG_CATEGORIES, getBlogCategoryBySlug } from '../data/blogCategories';
import { Service, LocationInfo, Project } from '../types';
import { BlogArticleRecord } from '../data/blog';

export interface ContextualLink {
  href: string;
  label: string;
  contextText: string;
  targetType: 'service' | 'project' | 'location' | 'blog-article' | 'blog-category' | 'page';
  category?: string;
  isExternal?: boolean;
}

export interface LinkGraphNode {
  path: string;
  type: string;
  title: string;
  inboundLinks: string[];
  outboundLinks: string[];
}

export interface OrphanAuditResult {
  totalPages: number;
  orphanPages: LinkGraphNode[];
  connectedPages: LinkGraphNode[];
  isClean: boolean;
}

// 1. Service -> Projects
export function getServiceProjects(serviceSlug: string): ContextualLink[] {
  const normService = serviceSlug.toLowerCase().trim();
  const all = getAllProjects();

  const matching = all.filter((p) => {
    const directRel = p.relatedServices?.some((s) => s.toLowerCase() === normService);
    const inServiceList = p.services?.some((s) => {
      const lower = s.toLowerCase();
      if (normService === 'structural-design' && (lower.includes('structural') || lower.includes('rcc'))) return true;
      if (normService === 'residential-architecture' && (lower.includes('residential') || lower.includes('villa') || lower.includes('home'))) return true;
      if (normService === 'commercial-architecture' && (lower.includes('commercial') || lower.includes('retail') || lower.includes('office'))) return true;
      if (normService === 'interior-design' && (lower.includes('interior') || lower.includes('lighting') || lower.includes('millwork'))) return true;
      if (normService === '2d-floor-planning' && (lower.includes('floor') || lower.includes('plan') || lower.includes('vastu'))) return true;
      if (normService === '3d-elevation-design' && (lower.includes('elevation') || lower.includes('3d') || lower.includes('facade'))) return true;
      return false;
    });
    return directRel || inServiceList;
  });

  return matching.map((p) => ({
    href: `/projects/${p.category}/${p.slug}`,
    label: `${p.title} (${p.categoryLabel || p.category})`,
    contextText: `Explore our built and conceptual work in ${p.title} showcasing specialized ${normService.replace(/-/g, ' ')} solutions.`,
    targetType: 'project',
    category: p.category
  }));
}

// 2. Service -> Locations
export function getServiceLocations(serviceSlug: string): ContextualLink[] {
  const normService = serviceSlug.toLowerCase().trim();
  const serviceObj = SERVICES.find((s) => s.slug === normService);
  const serviceName = serviceObj?.title || normService.replace(/-/g, ' ');

  return LOCATIONS_SERVED.map((loc) => ({
    href: `/locations/${loc.slug}`,
    label: `${serviceName} in ${loc.city}`,
    contextText: `Engage Design Plus for licensed ${serviceName.toLowerCase()} and chartered engineering across ${loc.city}, ${loc.state}.`,
    targetType: 'location'
  }));
}

// 3. Project -> Services
export function getProjectServices(projectSlug: string): ContextualLink[] {
  const project = getProjectBySlug(projectSlug);
  if (!project) return [];

  const matchedSlugs = new Set<string>();

  (project.relatedServices || []).forEach((slug) => matchedSlugs.add(slug));

  if (project.category === 'residential') matchedSlugs.add('residential-architecture');
  if (project.category === 'commercial') matchedSlugs.add('commercial-architecture');
  if (project.category === 'interiors') matchedSlugs.add('interior-design');
  if (project.category === 'structural') matchedSlugs.add('structural-design');

  return SERVICES.filter((s) => matchedSlugs.has(s.slug)).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
    contextText: `Review our comprehensive scope of ${s.title.toLowerCase()} deployed in the ${project.title}.`,
    targetType: 'service'
  }));
}

// 4. Project -> Locations
export function getProjectLocations(projectSlug: string): ContextualLink[] {
  const project = getProjectBySlug(projectSlug);
  if (!project) return [];

  const matched = LOCATIONS_SERVED.filter((loc) => {
    if (project.relatedLocations?.includes(loc.slug)) return true;
    const city = (project.city || project.location || '').toLowerCase();
    return city.includes(loc.slug) || city.includes(loc.city.toLowerCase());
  });

  const finalLocations = matched.length > 0 ? matched : [LOCATIONS_SERVED[0]];

  return finalLocations.map((loc) => ({
    href: `/locations/${loc.slug}`,
    label: `Architecture & Engineering in ${loc.city}`,
    contextText: `Discover other residential, commercial, and structural commissions by Design Plus in ${loc.city}.`,
    targetType: 'location'
  }));
}

// 5. Blog -> Services
export function getBlogServices(articleSlug: string): ContextualLink[] {
  const article = getBlogArticleBySlug(articleSlug);
  if (!article) return [];

  const slugs = article.relatedServices || [];
  return SERVICES.filter((s) => slugs.includes(s.slug)).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
    contextText: `Learn how our studio delivers ${s.title.toLowerCase()} with chartered engineering and regional climate adaptation.`,
    targetType: 'service'
  }));
}

// 6. Blog -> Projects
export function getBlogProjects(articleSlug: string): ContextualLink[] {
  const article = getBlogArticleBySlug(articleSlug);
  if (!article) return [];

  const slugs = article.relatedProjects || [];
  const all = getAllProjects();

  return all.filter((p) => slugs.includes(p.slug)).map((p) => ({
    href: `/projects/${p.category}/${p.slug}`,
    label: p.title,
    contextText: `Examine the case study of ${p.title} demonstrating the principles discussed in this article.`,
    targetType: 'project',
    category: p.category
  }));
}

// 7. Blog -> Locations
export function getBlogLocations(articleSlug: string): ContextualLink[] {
  const article = getBlogArticleBySlug(articleSlug);
  if (!article) return [];

  const slugs = article.relatedLocations || [];
  return LOCATIONS_SERVED.filter((l) => slugs.includes(l.slug)).map((l) => ({
    href: `/locations/${l.slug}`,
    label: `Architectural Practice in ${l.city}`,
    contextText: `Consult Design Plus for site analysis, ADA approvals, and construction services in ${l.city}.`,
    targetType: 'location'
  }));
}

// 8. Location -> Services
export function getLocationServices(locationSlug: string): ContextualLink[] {
  const loc = LOCATIONS_SERVED.find((l) => l.slug === locationSlug.toLowerCase());
  const cityName = loc?.city || locationSlug;

  return SERVICES.map((s) => ({
    href: `/services/${s.slug}`,
    label: `${s.title} in ${cityName}`,
    contextText: `Licensed ${s.title.toLowerCase()} with on-site chartered engineering supervision tailored for ${cityName}.`,
    targetType: 'service'
  }));
}

// 9. Location -> Projects
export function getLocationProjects(locationSlug: string): ContextualLink[] {
  const norm = locationSlug.toLowerCase().trim();
  const all = getAllProjects();

  const matching = all.filter((p) => {
    if (p.relatedLocations?.includes(norm)) return true;
    const locText = (p.location || p.city || '').toLowerCase();
    return locText.includes(norm);
  });

  return matching.map((p) => ({
    href: `/projects/${p.category}/${p.slug}`,
    label: `${p.title} (${p.categoryLabel || p.category})`,
    contextText: `View the ${p.title} portfolio record and architectural drawings located in ${p.location}.`,
    targetType: 'project',
    category: p.category
  }));
}

// 10. Article -> Related Articles
export function getArticleRelatedArticles(articleSlug: string): ContextualLink[] {
  const article = getBlogArticleBySlug(articleSlug);
  if (!article) return [];

  const all = getAllBlogArticles();
  const explicit = all.filter((a) => a.slug !== article.slug && article.relatedArticles?.includes(a.slug));
  const sameCat = all.filter((a) => a.slug !== article.slug && a.category === article.category && !explicit.some((e) => e.slug === a.slug));
  const combined = [...explicit, ...sameCat].slice(0, 3);

  return combined.map((a) => ({
    href: `/blog/${a.category}/${a.slug}`,
    label: a.title,
    contextText: `Continue reading: ${a.excerpt}`,
    targetType: 'blog-article',
    category: a.category
  }));
}

// 11. Category -> Related Entities
export function getCategoryServices(categorySlug: string): ContextualLink[] {
  const cat = getBlogCategoryBySlug(categorySlug);
  if (!cat) return [];

  return SERVICES.filter((s) => cat.relatedServices.includes(s.slug)).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
    contextText: `Explore our specialized ${s.title.toLowerCase()} service offerings.`,
    targetType: 'service'
  }));
}

export function getCategoryProjects(categorySlug: string): ContextualLink[] {
  const cat = getBlogCategoryBySlug(categorySlug);
  if (!cat) return [];

  const all = getAllProjects();
  return all.filter((p) => cat.relatedProjects.includes(p.slug)).map((p) => ({
    href: `/projects/${p.category}/${p.slug}`,
    label: p.title,
    contextText: `Inspect the architectural drawings and execution methodology of ${p.title}.`,
    targetType: 'project',
    category: p.category
  }));
}

export function getCategoryLocations(categorySlug: string): ContextualLink[] {
  const cat = getBlogCategoryBySlug(categorySlug);
  if (!cat) return [];

  return LOCATIONS_SERVED.filter((l) => cat.relatedLocations.includes(l.slug)).map((l) => ({
    href: `/locations/${l.slug}`,
    label: `Projects in ${l.city}`,
    contextText: `Learn more about regional building regulations and architectural context in ${l.city}.`,
    targetType: 'location'
  }));
}

// 12. Orphan Page Detection & Link Graph Analyzer
export function detectOrphanPages(): OrphanAuditResult {
  const graph: Map<string, LinkGraphNode> = new Map();

  function registerNode(path: string, type: string, title: string) {
    if (!graph.has(path)) {
      graph.set(path, {
        path,
        type,
        title,
        inboundLinks: [],
        outboundLinks: []
      });
    }
  }

  function addEdge(fromPath: string, toPath: string) {
    if (fromPath === toPath) return;
    const fromNode = graph.get(fromPath);
    const toNode = graph.get(toPath);

    if (fromNode && !fromNode.outboundLinks.includes(toPath)) {
      fromNode.outboundLinks.push(toPath);
    }
    if (toNode && !toNode.inboundLinks.includes(fromPath)) {
      toNode.inboundLinks.push(fromPath);
    }
  }

  // Register Core Static Pages
  registerNode('/', 'core', 'Home');
  registerNode('/about', 'core', 'About Studio');
  registerNode('/services', 'core', 'Services Hub');
  registerNode('/projects', 'core', 'Projects Portfolio');
  registerNode('/locations', 'core', 'Locations Hub');
  registerNode('/blog', 'core', 'Journal Hub');
  registerNode('/process', 'core', 'Process');
  registerNode('/contact', 'core', 'Contact & Consultation');

  // Register Services
  SERVICES.forEach((s) => {
    registerNode(`/services/${s.slug}`, 'service', s.title);
  });

  // Register Projects (Canonical & Category routes)
  const allProjects = getAllProjects();
  allProjects.forEach((p) => {
    registerNode(`/projects/${p.category}/${p.slug}`, 'project', p.title);
  });

  // Register Project Category Pages & Category Aliases
  const projectCats = ['residential', 'commercial', 'interiors', 'structural', 'institutional', 'industrial', 'concept'];
  projectCats.forEach((cat) => {
    const directPath = `/projects/${cat}`;
    const aliasPath = `/projects/category/${cat}`;

    registerNode(directPath, 'project-category', `Projects: ${cat}`);
    registerNode(aliasPath, 'project-category', `Projects Category: ${cat}`);

    // Bidirectional links with main Projects hub
    addEdge('/projects', directPath);
    addEdge(directPath, '/projects');
    addEdge('/projects', aliasPath);
    addEdge(aliasPath, '/projects');
    addEdge(directPath, aliasPath);
    addEdge(aliasPath, directPath);
  });

  // Register Blog Categories
  BLOG_CATEGORIES.forEach((cat) => {
    registerNode(`/blog/${cat.slug}`, 'blog-category', cat.name);
  });

  // Register Blog Articles
  BLOG_ARTICLES.forEach((art) => {
    registerNode(`/blog/${art.category}/${art.slug}`, 'blog-article', art.title);
  });

  // Register Locations
  LOCATIONS_SERVED.forEach((loc) => {
    registerNode(`/locations/${loc.slug}`, 'location', `Location: ${loc.city}`);
  });

  // Map Standard Navigation Edges from Home & Header/Footer
  const globalNavTargets = ['/about', '/services', '/projects', '/locations', '/blog', '/process', '/contact'];
  globalNavTargets.forEach((t) => {
    addEdge('/', t);
    addEdge(t, '/');
  });

  // Map Services Hub <-> Service Pages & Inbound from Home
  SERVICES.forEach((s) => {
    addEdge('/services', `/services/${s.slug}`);
    addEdge(`/services/${s.slug}`, '/services');
    addEdge(`/services/${s.slug}`, '/contact');
    addEdge('/', `/services/${s.slug}`);

    // Map Service -> Projects
    const pLinks = getServiceProjects(s.slug);
    pLinks.forEach((pl) => addEdge(`/services/${s.slug}`, pl.href));

    // Map Service -> Locations
    const lLinks = getServiceLocations(s.slug);
    lLinks.forEach((ll) => addEdge(`/services/${s.slug}`, ll.href));
  });

  // Map Projects Hub <-> Category Pages & Projects
  allProjects.forEach((p) => {
    const canonicalPath = `/projects/${p.category}/${p.slug}`;
    addEdge('/projects', canonicalPath);
    addEdge(`/projects/${p.category}`, canonicalPath);
    addEdge(`/projects/category/${p.category}`, canonicalPath);
    addEdge(canonicalPath, '/projects');
    addEdge(canonicalPath, `/projects/${p.category}`);
    addEdge(canonicalPath, '/contact');

    // Project -> Services
    const sLinks = getProjectServices(p.slug);
    sLinks.forEach((sl) => {
      addEdge(canonicalPath, sl.href);
      addEdge(sl.href, canonicalPath);
    });

    // Project -> Locations
    const locLinks = getProjectLocations(p.slug);
    locLinks.forEach((ll) => {
      addEdge(canonicalPath, ll.href);
      addEdge(ll.href, canonicalPath);
    });
  });

  // Map Blog Categories & Articles
  BLOG_CATEGORIES.forEach((cat) => {
    const catPath = `/blog/${cat.slug}`;
    addEdge('/blog', catPath);
    addEdge(catPath, '/blog');

    // Category -> Articles
    const catArticles = BLOG_ARTICLES.filter((a) => a.category === cat.slug);
    catArticles.forEach((art) => {
      const artPath = `/blog/${art.category}/${art.slug}`;
      addEdge(catPath, artPath);
      addEdge(artPath, catPath);
    });

    // Category -> Services & Locations & Projects
    const catServices = getCategoryServices(cat.slug);
    catServices.forEach((s) => addEdge(catPath, s.href));

    const catLocs = getCategoryLocations(cat.slug);
    catLocs.forEach((l) => addEdge(catPath, l.href));

    const catProjs = getCategoryProjects(cat.slug);
    catProjs.forEach((p) => addEdge(catPath, p.href));
  });

  BLOG_ARTICLES.forEach((art) => {
    const artPath = `/blog/${art.category}/${art.slug}`;
    addEdge('/blog', artPath);
    addEdge(artPath, '/blog');
    addEdge(artPath, '/contact');

    // Article -> Related Articles
    const relArts = getArticleRelatedArticles(art.slug);
    relArts.forEach((ra) => addEdge(artPath, ra.href));

    // Article -> Services
    const artServices = getBlogServices(art.slug);
    artServices.forEach((s) => addEdge(artPath, s.href));

    // Article -> Projects
    const artProjects = getBlogProjects(art.slug);
    artProjects.forEach((p) => addEdge(artPath, p.href));

    // Article -> Locations
    const artLocs = getBlogLocations(art.slug);
    artLocs.forEach((l) => addEdge(artPath, l.href));
  });

  // Map Locations Hub & Location Pages
  LOCATIONS_SERVED.forEach((loc) => {
    const locPath = `/locations/${loc.slug}`;
    addEdge('/locations', locPath);
    addEdge(locPath, '/locations');
    addEdge(locPath, '/contact');
    addEdge('/', locPath);

    // Location -> Services
    const locServices = getLocationServices(loc.slug);
    locServices.forEach((s) => addEdge(locPath, s.href));

    // Location -> Projects
    const locProjects = getLocationProjects(loc.slug);
    locProjects.forEach((p) => addEdge(locPath, p.href));
  });

  const nodes = Array.from(graph.values());
  // Root home page ('/') is the site root, so it naturally has 0 parent inbound in graph or self-inbound
  const orphanPages = nodes.filter((n) => n.path !== '/' && n.inboundLinks.length === 0);
  const connectedPages = nodes.filter((n) => n.path === '/' || n.inboundLinks.length > 0);

  return {
    totalPages: nodes.length,
    orphanPages,
    connectedPages,
    isClean: orphanPages.length === 0
  };
}
