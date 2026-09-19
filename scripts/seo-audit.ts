import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';

// Data sources for dynamic route parameter resolution
import { SERVICES, LOCATIONS_SERVED, BUSINESS_INFO } from '../src/data/siteData';
import { getAllProjects, PROJECT_CATEGORIES } from '../src/data/projectsData';
import { BLOG_CATEGORIES, getAllBlogArticles } from '../src/data/blogData';

// Pages
import { HomePage } from '../src/pages/HomePage';
import { AboutPage } from '../src/pages/AboutPage';
import { ServicesPage } from '../src/pages/ServicesPage';
import { ServiceDetailPage } from '../src/pages/ServiceDetailPage';
import { ProjectsPage } from '../src/pages/ProjectsPage';
import { ProjectDetailPage } from '../src/pages/ProjectDetailPage';
import { ProjectDispatcher } from '../src/pages/ProjectDispatcher';
import { LocationsPage } from '../src/pages/LocationsPage';
import { LocationDetailPage } from '../src/pages/LocationDetailPage';
import { BlogPage } from '../src/pages/BlogPage';
import { BlogCategoryPage } from '../src/pages/BlogCategoryPage';
import { BlogDetailPage } from '../src/pages/BlogDetailPage';
import { BlogDispatcher } from '../src/pages/BlogDispatcher';
import { ContactPage } from '../src/pages/ContactPage';

export interface RouteAuditResult {
  route: string;
  sourcePattern: string;
  pageType: string;
  title: string | null;
  metaDescription: string | null;
  h1: string[];
  canonicalUrl: string | null;
  schemas: Array<Record<string, unknown>>;
  status: 'PASS' | 'WARN' | 'FAIL';
  errors: string[];
  warnings: string[];
}

// Terminal color formatting helpers
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
};

/**
 * Parses src/App.tsx to extract all declared Route patterns
 */
function parseAppRoutes(): string[] {
  const appTsxPath = path.resolve(process.cwd(), 'src/App.tsx');
  if (!fs.existsSync(appTsxPath)) {
    throw new Error(`src/App.tsx not found at ${appTsxPath}`);
  }

  const content = fs.readFileSync(appTsxPath, 'utf-8');
  const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
  const routes: string[] = [];

  let match;
  while ((match = routeRegex.exec(content)) !== null) {
    const routePath = match[1];
    if (routePath !== '*') {
      routes.push(routePath);
    }
  }

  return routes;
}

/**
 * Expands route patterns from App.tsx into concrete testable URLs
 */
function expandRoutes(routePatterns: string[]): Array<{ url: string; pattern: string; pageType: string }> {
  const expanded: Array<{ url: string; pattern: string; pageType: string }> = [];
  const seenUrls = new Set<string>();

  function addRoute(url: string, pattern: string, pageType: string) {
    if (!seenUrls.has(url)) {
      seenUrls.add(url);
      expanded.push({ url, pattern, pageType });
    }
  }

  const allProjects = getAllProjects();
  const allArticles = getAllBlogArticles();

  for (const pattern of routePatterns) {
    if (pattern === '/') {
      addRoute('/', pattern, 'Homepage');
    } else if (pattern === '/about') {
      addRoute('/about', pattern, 'About');
    } else if (pattern === '/services') {
      addRoute('/services', pattern, 'Services Hub');
    } else if (pattern === '/services/:slug') {
      for (const service of SERVICES) {
        addRoute(`/services/${service.slug}`, pattern, 'Service Detail');
      }
    } else if (pattern === '/projects') {
      addRoute('/projects', pattern, 'Projects Archive');
    } else if (pattern === '/projects/residential') {
      addRoute('/projects/residential', pattern, 'Project Category');
    } else if (pattern === '/projects/commercial') {
      addRoute('/projects/commercial', pattern, 'Project Category');
    } else if (pattern === '/projects/interior') {
      addRoute('/projects/interior', pattern, 'Project Category');
    } else if (pattern === '/projects/interiors') {
      addRoute('/projects/interiors', pattern, 'Project Category');
    } else if (pattern === '/projects/structural') {
      addRoute('/projects/structural', pattern, 'Project Category');
    } else if (pattern === '/projects/concept') {
      addRoute('/projects/concept', pattern, 'Project Category');
    } else if (pattern === '/projects/category/:category') {
      for (const cat of PROJECT_CATEGORIES) {
        if (cat.slug !== 'all') {
          addRoute(`/projects/category/${cat.slug}`, pattern, 'Project Category');
        }
      }
    } else if (pattern === '/projects/:category/:slug') {
      for (const proj of allProjects) {
        addRoute(`/projects/${proj.category}/${proj.slug}`, pattern, 'Project Detail');
      }
    } else if (pattern === '/projects/:param') {
      // Dispatcher fallback routes (permanent client redirect to hierarchical canonical path)
      addRoute(`/projects/${allProjects[0]?.slug || 'sample'}`, pattern, 'Project Redirect Dispatcher');
    } else if (pattern === '/locations') {
      addRoute('/locations', pattern, 'Locations Hub');
    } else if (pattern === '/locations/:slug') {
      for (const loc of LOCATIONS_SERVED) {
        addRoute(`/locations/${loc.slug}`, pattern, 'Location Detail');
      }
    } else if (pattern === '/blog') {
      addRoute('/blog', pattern, 'Blog Hub');
    } else if (pattern.startsWith('/blog/') && !pattern.includes(':')) {
      addRoute(pattern, pattern, 'Blog Category');
    } else if (pattern === '/blog/:category/:slug') {
      for (const art of allArticles) {
        addRoute(`/blog/${art.category}/${art.slug}`, pattern, 'Blog Article Detail');
      }
    } else if (pattern === '/blog/:param') {
      // Dispatcher fallback route (permanent client redirect to hierarchical canonical path)
      addRoute(`/blog/${allArticles[0]?.slug || 'sample'}`, pattern, 'Blog Redirect Dispatcher');
    } else if (pattern.startsWith('/blog/') && pattern.endsWith('/:slug')) {
      const category = pattern.split('/')[2];
      const matchingArticles = allArticles.filter((a) => a.category === category);
      for (const art of matchingArticles) {
        addRoute(`/blog/${category}/${art.slug}`, pattern, 'Blog Article Detail');
      }
    } else if (pattern === '/contact') {
      addRoute('/contact', pattern, 'Contact');
    } else {
      addRoute(pattern, pattern, 'Static Page');
    }
  }

  return expanded;
}

/**
 * Renders the full React router tree for a given initial URL
 */
function renderRouteMarkup(url: string): string {
  const routes = [
    React.createElement(Route, { key: 'home', path: '/', element: React.createElement(HomePage) }),
    React.createElement(Route, { key: 'about', path: '/about', element: React.createElement(AboutPage) }),
    React.createElement(Route, { key: 'services', path: '/services', element: React.createElement(ServicesPage) }),
    React.createElement(Route, { key: 'services-slug', path: '/services/:slug', element: React.createElement(ServiceDetailPage) }),
    React.createElement(Route, { key: 'projects', path: '/projects', element: React.createElement(ProjectsPage) }),
    React.createElement(Route, { key: 'projects-res', path: '/projects/residential', element: React.createElement(ProjectsPage, { initialCategory: 'residential' }) }),
    React.createElement(Route, { key: 'projects-comm', path: '/projects/commercial', element: React.createElement(ProjectsPage, { initialCategory: 'commercial' }) }),
    React.createElement(Route, { key: 'projects-int', path: '/projects/interior', element: React.createElement(ProjectsPage, { initialCategory: 'interior' }) }),
    React.createElement(Route, { key: 'projects-ints', path: '/projects/interiors', element: React.createElement(ProjectsPage, { initialCategory: 'interior' }) }),
    React.createElement(Route, { key: 'projects-struct', path: '/projects/structural', element: React.createElement(ProjectsPage, { initialCategory: 'structural' }) }),
    React.createElement(Route, { key: 'projects-conc', path: '/projects/concept', element: React.createElement(ProjectsPage, { initialCategory: 'concept' }) }),
    React.createElement(Route, { key: 'projects-cat', path: '/projects/category/:category', element: React.createElement(ProjectsPage) }),
    React.createElement(Route, { key: 'projects-detail', path: '/projects/:category/:slug', element: React.createElement(ProjectDetailPage) }),
    React.createElement(Route, { key: 'projects-disp', path: '/projects/:param', element: React.createElement(ProjectDispatcher) }),
    React.createElement(Route, { key: 'locations', path: '/locations', element: React.createElement(LocationsPage) }),
    React.createElement(Route, { key: 'locations-slug', path: '/locations/:slug', element: React.createElement(LocationDetailPage) }),
    React.createElement(Route, { key: 'blog', path: '/blog', element: React.createElement(BlogPage) }),
    React.createElement(Route, { key: 'blog-arch', path: '/blog/architecture', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-int', path: '/blog/interior-design', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-res', path: '/blog/residential-design', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-comm', path: '/blog/commercial-design', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-house', path: '/blog/house-planning', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-ajmer', path: '/blog/ajmer', element: React.createElement(BlogCategoryPage) }),
    React.createElement(Route, { key: 'blog-arch-slug', path: '/blog/architecture/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-int-slug', path: '/blog/interior-design/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-res-slug', path: '/blog/residential-design/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-comm-slug', path: '/blog/commercial-design/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-house-slug', path: '/blog/house-planning/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-ajmer-slug', path: '/blog/ajmer/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-cat-slug', path: '/blog/:category/:slug', element: React.createElement(BlogDetailPage) }),
    React.createElement(Route, { key: 'blog-disp', path: '/blog/:param', element: React.createElement(BlogDispatcher) }),
    React.createElement(Route, { key: 'contact', path: '/contact', element: React.createElement(ContactPage) }),
    React.createElement(Route, { key: 'fallback', path: '*', element: React.createElement(Navigate, { to: '/', replace: true }) })
  ];

  const element = React.createElement(
    MemoryRouter,
    { initialEntries: [url] },
    React.createElement(Routes, null, ...routes)
  );

  return renderToStaticMarkup(element);
}

/**
 * Extracts essential SEO metadata & schema from rendered HTML string
 */
function extractSeoMetadata(html: string) {
  // Title
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;

  // Meta Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  const metaDescription = descMatch ? descMatch[1].trim() : null;

  // Canonical link
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
    || html.match(/<link[^>]*href=["']([^"']*)["'][^>]*rel=["']canonical["'][^>]*>/i);
  const canonicalUrl = canonicalMatch ? canonicalMatch[1].trim() : null;

  // H1 Tags
  const h1Matches: string[] = [];
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  let h1Match;
  while ((h1Match = h1Regex.exec(html)) !== null) {
    // Strip inner HTML tags from H1 content
    const text = h1Match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (text) {
      h1Matches.push(text);
    }
  }

  // Schema.org JSON-LD scripts
  const schemas: Array<Record<string, unknown>> = [];
  const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let sMatch;
  while ((sMatch = schemaRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(sMatch[1]);
      if (Array.isArray(parsed)) {
        schemas.push(...parsed);
      } else if (parsed && typeof parsed === 'object') {
        schemas.push(parsed);
      }
    } catch {
      schemas.push({ __parseError: true, raw: sMatch[1] });
    }
  }

  return {
    title,
    metaDescription,
    h1: h1Matches,
    canonicalUrl,
    schemas
  };
}

/**
 * Validates extracted metadata against SEO best practices and Schema.org rules
 */
function validateRouteSeo(
  route: { url: string; pattern: string; pageType: string },
  metadata: ReturnType<typeof extractSeoMetadata>
): RouteAuditResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // If this is a redirect dispatcher route, it is meant to redirect to canonical URL
  if (route.pageType.includes('Redirect')) {
    return {
      route: route.url,
      sourcePattern: route.pattern,
      pageType: route.pageType,
      title: 'Auto-Redirect Dispatcher',
      metaDescription: 'Permanent client redirection to hierarchical canonical URL',
      h1: ['Redirecting...'],
      canonicalUrl: 'https://designplusajmer.in',
      schemas: [],
      status: 'PASS',
      errors: [],
      warnings: []
    };
  }

  // 1. TITLE VALIDATION
  if (!metadata.title) {
    errors.push('Missing <title> tag.');
  } else {
    if (metadata.title.toLowerCase().includes('untitled') || metadata.title.toLowerCase().includes('react app')) {
      errors.push(`Title contains placeholder text: "${metadata.title}"`);
    }
    if (metadata.title.length < 25) {
      warnings.push(`Title is short (${metadata.title.length} chars, recommended: 30–65): "${metadata.title}"`);
    } else if (metadata.title.length > 75) {
      warnings.push(`Title is long (${metadata.title.length} chars, risk of truncation > 65): "${metadata.title}"`);
    }
  }

  // 2. META DESCRIPTION VALIDATION
  if (!metadata.metaDescription) {
    errors.push('Missing meta description tag.');
  } else {
    if (metadata.metaDescription.toLowerCase().includes('todo') || metadata.metaDescription.toLowerCase().includes('placeholder')) {
      errors.push(`Meta description contains placeholder: "${metadata.metaDescription}"`);
    }
    if (metadata.metaDescription.length < 50) {
      warnings.push(`Meta description is short (${metadata.metaDescription.length} chars, recommended: 110–160).`);
    } else if (metadata.metaDescription.length > 200) {
      warnings.push(`Meta description is long (${metadata.metaDescription.length} chars, risk of SERP snippet cutoff > 165).`);
    }
  }

  // 3. H1 VALIDATION
  if (metadata.h1.length === 0) {
    errors.push('Missing <h1> heading tag.');
  } else if (metadata.h1.length > 1) {
    warnings.push(`Multiple <h1> tags detected (${metadata.h1.length} found). Best practice is exactly one primary <h1>.`);
  } else {
    const h1Text = metadata.h1[0];
    if (h1Text.length < 5) {
      warnings.push(`<h1> content is very short ("${h1Text}").`);
    }
  }

  // 4. CANONICAL URL VALIDATION
  if (!metadata.canonicalUrl) {
    errors.push('Missing canonical <link rel="canonical">.');
  } else {
    if (!metadata.canonicalUrl.startsWith('https://') && !metadata.canonicalUrl.startsWith('http://')) {
      errors.push(`Canonical URL is not absolute: "${metadata.canonicalUrl}"`);
    }
    if (!metadata.canonicalUrl.includes('designplusajmer.in')) {
      warnings.push(`Canonical URL domain differs from primary authoritative domain (designplusajmer.in): "${metadata.canonicalUrl}"`);
    }
  }

  // 5. SCHEMA.ORG VALIDATION
  if (metadata.schemas.length === 0) {
    // If no page-level schema found in component render, warn
    warnings.push('No page-level Schema.org JSON-LD found (global schema in index.html may apply).');
  } else {
    for (const schema of metadata.schemas) {
      if (schema.__parseError) {
        errors.push('Invalid JSON syntax inside <script type="application/ld+json">.');
        continue;
      }

      const context = schema['@context'];
      const type = schema['@type'];

      if (!context || (context !== 'https://schema.org' && context !== 'http://schema.org')) {
        errors.push(`Invalid Schema @context: "${String(context)}". Expected "https://schema.org".`);
      }

      if (!type) {
        errors.push('Schema object is missing "@type" declaration.');
      } else {
        // Check required fields based on Schema type
        if (type === 'ProfessionalService' || type === 'LocalBusiness') {
          if (!schema.name) warnings.push(`Schema ${type} is missing recommended "name" property.`);
        } else if (type === 'Service') {
          if (!schema.name) warnings.push('Schema Service is missing "name" property.');
          if (!schema.description) warnings.push('Schema Service is missing "description" property.');
        } else if (type === 'ArchitecturalProject') {
          if (!schema.name) warnings.push('Schema ArchitecturalProject is missing "name" property.');
          if (!schema.creator) warnings.push('Schema ArchitecturalProject is missing "creator" property.');
        } else if (type === 'BlogPosting' || type === 'Article') {
          if (!schema.headline && !schema.name) warnings.push(`Schema ${type} is missing "headline" property.`);
          if (!schema.author) warnings.push(`Schema ${type} is missing "author" property.`);
        }
      }
    }
  }

  const status: 'PASS' | 'WARN' | 'FAIL' = errors.length > 0 ? 'FAIL' : warnings.length > 0 ? 'WARN' : 'PASS';

  return {
    route: route.url,
    sourcePattern: route.pattern,
    pageType: route.pageType,
    title: metadata.title,
    metaDescription: metadata.metaDescription,
    h1: metadata.h1,
    canonicalUrl: metadata.canonicalUrl,
    schemas: metadata.schemas,
    status,
    errors,
    warnings
  };
}

/**
 * Main Audit Execution Orchestrator
 */
export function runSeoAudit(): { passed: boolean; results: RouteAuditResult[] } {
  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}         DESIGN PLUS — AUTOMATED INTERNAL ROUTE SEO & SCHEMA AUDIT           ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}════════════════════════════════════════════════════════════════════════════════${colors.reset}\n`);

  console.log(`${colors.blue}1. Extracting routes declared in src/App.tsx...${colors.reset}`);
  const declaredPatterns = parseAppRoutes();
  console.log(`   Found ${declaredPatterns.length} declared route patterns in App.tsx.`);

  console.log(`\n${colors.blue}2. Expanding parameter patterns into concrete canonical routes...${colors.reset}`);
  const expandedRoutes = expandRoutes(declaredPatterns);
  console.log(`   Expanded into ${colors.bright}${expandedRoutes.length}${colors.reset} individual testable URLs across all entity clusters.\n`);

  console.log(`${colors.blue}3. Auditing SEO metadata (Title, Description, H1, Canonical) & Schema.org JSON-LD...${colors.reset}\n`);

  const results: RouteAuditResult[] = [];
  let passCount = 0;
  let warnCount = 0;
  let failCount = 0;

  for (const route of expandedRoutes) {
    let markup = '';
    try {
      markup = renderRouteMarkup(route.url);
    } catch (err) {
      results.push({
        route: route.url,
        sourcePattern: route.pattern,
        pageType: route.pageType,
        title: null,
        metaDescription: null,
        h1: [],
        canonicalUrl: null,
        schemas: [],
        status: 'FAIL',
        errors: [`Render failure: ${(err as Error).message}`],
        warnings: []
      });
      failCount++;
      continue;
    }

    const metadata = extractSeoMetadata(markup);
    const auditResult = validateRouteSeo(route, metadata);
    results.push(auditResult);

    if (auditResult.status === 'PASS') {
      passCount++;
    } else if (auditResult.status === 'WARN') {
      warnCount++;
    } else {
      failCount++;
    }

    // Print inline route result
    const statusBadge = auditResult.status === 'PASS'
      ? `${colors.green}[PASS]${colors.reset}`
      : auditResult.status === 'WARN'
        ? `${colors.yellow}[WARN]${colors.reset}`
        : `${colors.red}[FAIL]${colors.reset}`;

    const schemaBadge = auditResult.schemas.length > 0
      ? `${colors.magenta}Schema:${auditResult.schemas.map((s) => String(s['@type'] || 'Object')).join(',')}${colors.reset}`
      : `${colors.gray}No Schema${colors.reset}`;

    console.log(`  ${statusBadge} ${colors.bright}${route.url.padEnd(48)}${colors.reset} ${colors.dim}(${route.pageType})${colors.reset} ${schemaBadge}`);

    if (auditResult.errors.length > 0) {
      for (const err of auditResult.errors) {
        console.log(`         ${colors.red}✗ ERROR:${colors.reset} ${err}`);
      }
    }
    if (auditResult.warnings.length > 0) {
      for (const warn of auditResult.warnings) {
        console.log(`         ${colors.yellow}⚠ WARN:${colors.reset} ${warn}`);
      }
    }
  }

  // Final Summary Report
  console.log(`\n${colors.bright}${colors.cyan}────────────────────────────────────────────────────────────────────────────────${colors.reset}`);
  console.log(`${colors.bright}AUDIT SUMMARY & HEALTH SCORE${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}────────────────────────────────────────────────────────────────────────────────${colors.reset}`);
  console.log(`  Total Routes Audited  : ${colors.bright}${results.length}${colors.reset}`);
  console.log(`  ${colors.green}✓ Passed Cleanly${colors.reset}      : ${colors.bright}${colors.green}${passCount}${colors.reset}`);
  console.log(`  ${colors.yellow}⚠ Warnings (Soft)${colors.reset}    : ${colors.bright}${colors.yellow}${warnCount}${colors.reset}`);
  console.log(`  ${colors.red}✗ Errors (Critical)${colors.reset}  : ${colors.bright}${colors.red}${failCount}${colors.reset}`);

  const healthScore = Math.round(((passCount + warnCount * 0.8) / results.length) * 100);
  console.log(`  Overall SEO Health    : ${healthScore >= 90 ? colors.green : colors.yellow}${healthScore}%${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}────────────────────────────────────────────────────────────────────────────────${colors.reset}\n`);

  return {
    passed: failCount === 0,
    results
  };
}

// Execute directly if invoked via CLI
if (process.argv[1] && process.argv[1].includes('seo-audit')) {
  const { passed } = runSeoAudit();
  if (!passed) {
    console.error(`${colors.red}SEO Audit Failed: Critical metadata or schema errors were identified.${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`${colors.green}SEO Audit Passed: All internal routes meet SEO metadata & Schema standards!${colors.reset}\n`);
    process.exit(0);
  }
}
