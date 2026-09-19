import { SERVICES, LOCATIONS_SERVED } from '../src/data/siteData';
import { getAllProjects } from '../src/data/projects';
import { getAllBlogArticles } from '../src/data/blog';
import { getBlogCategories } from '../src/data/blogCategories';
import { 
  detectOrphanPages, 
  getServiceProjects, 
  getServiceLocations, 
  getProjectServices, 
  getProjectLocations,
  getBlogServices,
  getBlogProjects,
  getBlogLocations,
  getLocationServices,
  getLocationProjects,
  getArticleRelatedArticles
} from '../src/lib/internalLinks';

console.log('\x1b[1m\x1b[36m' + '═'.repeat(80) + '\x1b[0m');
console.log('\x1b[1m\x1b[36m  DESIGN PLUS — COMPREHENSIVE INTERNAL LINK & ORPHAN AUDIT\x1b[0m');
console.log('\x1b[1m\x1b[36m' + '═'.repeat(80) + '\x1b[0m\n');

// 1. Build list of valid site routes
const validRoutes = new Set<string>([
  '/',
  '/about',
  '/services',
  '/projects',
  '/locations',
  '/blog',
  '/process',
  '/contact'
]);

// Add Services
SERVICES.forEach((s) => validRoutes.add(`/services/${s.slug}`));

// Add Projects (both canonical and category views)
const projects = getAllProjects();
projects.forEach((p) => {
  validRoutes.add(`/projects/${p.category}/${p.slug}`);
  validRoutes.add(`/projects/${p.slug}`); // backward compatibility dispatcher
});

const projectCategories = ['residential', 'commercial', 'interiors', 'structural', 'institutional', 'industrial', 'concept'];
projectCategories.forEach((cat) => {
  validRoutes.add(`/projects/${cat}`);
  validRoutes.add(`/projects/category/${cat}`);
});

// Add Blog Categories
const blogCategories = getBlogCategories();
blogCategories.forEach((c) => validRoutes.add(`/blog/${c.slug}`));

// Add Blog Articles
const blogArticles = getAllBlogArticles();
blogArticles.forEach((a) => {
  validRoutes.add(`/blog/${a.category}/${a.slug}`);
  validRoutes.add(`/blog/${a.slug}`); // backward compatibility dispatcher
});

// Add Locations
LOCATIONS_SERVED.forEach((loc) => validRoutes.add(`/locations/${loc.slug}`));

let totalLinksChecked = 0;
let brokenLinksCount = 0;
const brokenLinks: { source: string; target: string; reason: string }[] = [];

function checkLink(source: string, targetHref: string) {
  totalLinksChecked++;
  const cleanTarget = targetHref.split('?')[0].split('#')[0];
  if (!validRoutes.has(cleanTarget)) {
    brokenLinksCount++;
    brokenLinks.push({
      source,
      target: targetHref,
      reason: `Route "${cleanTarget}" is not registered in valid routes map.`
    });
  }
}

// 2. Audit all relational links
console.log('\x1b[1m[1/3] Verifying Relational Link Integrity...\x1b[0m');

// Audit Services -> Projects & Locations
SERVICES.forEach((s) => {
  const pLinks = getServiceProjects(s.slug);
  pLinks.forEach((l) => checkLink(`/services/${s.slug}`, l.href));

  const lLinks = getServiceLocations(s.slug);
  lLinks.forEach((l) => checkLink(`/services/${s.slug}`, l.href));
});

// Audit Projects -> Services & Locations
projects.forEach((p) => {
  const sLinks = getProjectServices(p.slug);
  sLinks.forEach((l) => checkLink(`/projects/${p.category}/${p.slug}`, l.href));

  const locLinks = getProjectLocations(p.slug);
  locLinks.forEach((l) => checkLink(`/projects/${p.category}/${p.slug}`, l.href));
});

// Audit Blog Articles -> Services, Projects, Locations, Related Articles
blogArticles.forEach((art) => {
  const sLinks = getBlogServices(art.slug);
  sLinks.forEach((l) => checkLink(`/blog/${art.category}/${art.slug}`, l.href));

  const pLinks = getBlogProjects(art.slug);
  pLinks.forEach((l) => checkLink(`/blog/${art.category}/${art.slug}`, l.href));

  const locLinks = getBlogLocations(art.slug);
  locLinks.forEach((l) => checkLink(`/blog/${art.category}/${art.slug}`, l.href));

  const relLinks = getArticleRelatedArticles(art.slug);
  relLinks.forEach((l) => checkLink(`/blog/${art.category}/${art.slug}`, l.href));
});

// Audit Locations -> Services & Projects
LOCATIONS_SERVED.forEach((loc) => {
  const sLinks = getLocationServices(loc.slug);
  sLinks.forEach((l) => checkLink(`/locations/${loc.slug}`, l.href));

  const pLinks = getLocationProjects(loc.slug);
  pLinks.forEach((l) => checkLink(`/locations/${loc.slug}`, l.href));
});

console.log(`  ✓ Checked ${totalLinksChecked} relational link pathways.`);

// 3. Audit for Orphan Pages
console.log('\n\x1b[1m[2/3] Performing Orphan Page Detection...\x1b[0m');
const orphanAudit = detectOrphanPages();

console.log(`  • Total Indexable Graph Pages Audited : ${orphanAudit.totalPages}`);
console.log(`  • Connected Pages (Inbound > 0)       : ${orphanAudit.connectedPages.length}`);
console.log(`  • Orphan Pages Detected               : ${orphanAudit.orphanPages.length}`);

if (orphanAudit.orphanPages.length > 0) {
  console.log('\n\x1b[31m  ❌ WARNING: Orphan Pages Found:\x1b[0m');
  orphanAudit.orphanPages.forEach((op) => {
    console.log(`    - [${op.type}] ${op.path} ("${op.title}")`);
  });
} else {
  console.log('  \x1b[32m✓ Perfect: 0 orphan pages found across entire site graph.\x1b[0m');
}

// 4. Broken Link Summary
console.log('\n\x1b[1m[3/3] Link Validation Summary...\x1b[0m');
if (brokenLinks.length > 0) {
  console.log(`\x1b[31m  ❌ FAILED: ${brokenLinks.length} Broken Internal Links Detected:\x1b[0m`);
  brokenLinks.forEach((b) => {
    console.log(`    - From: ${b.source} -> To: ${b.target} (${b.reason})`);
  });
} else {
  console.log(`  \x1b[32m✓ PASSED: All ${totalLinksChecked} checked internal links resolve to valid routes!\x1b[0m`);
}

console.log('\n\x1b[1m\x1b[36m' + '─'.repeat(80) + '\x1b[0m');
console.log(`  Total Valid Routes in Map : ${validRoutes.size}`);
console.log(`  Total Link Connections    : ${totalLinksChecked}`);
console.log(`  Broken Links              : ${brokenLinksCount}`);
console.log(`  Orphan Pages              : ${orphanAudit.orphanPages.length}`);
console.log('\x1b[1m\x1b[36m' + '─'.repeat(80) + '\x1b[0m\n');

if (brokenLinksCount > 0 || orphanAudit.orphanPages.length > 0) {
  console.error('\x1b[31mInternal link audit failed.\x1b[0m');
  process.exit(1);
} else {
  console.log('\x1b[32m✓ Internal Link Audit Successful: 100% interconnected, zero broken links, zero orphans!\x1b[0m\n');
  process.exit(0);
}
