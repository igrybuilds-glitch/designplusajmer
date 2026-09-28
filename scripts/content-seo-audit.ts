import { BLOG_ARTICLES, getAllArticles } from '../src/content/blog/articles';
import { BLOG_CATEGORIES, getAllCategories } from '../src/content/blog/categories';
import { BLOG_AUTHORS, getAllAuthors } from '../src/content/blog/authors';
import { BlogArticle } from '../src/types/blog';

// Terminal color formatting helpers
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
};

interface ArticleAuditIssue {
  type: 'ERROR' | 'WARNING' | 'INFO';
  check: string;
  message: string;
  recommendation?: string;
}

interface ArticleAuditReport {
  slug: string;
  title: string;
  category: string;
  isPillar: boolean;
  status: 'PASS' | 'WARN' | 'FAIL';
  issues: ArticleAuditIssue[];
  wordCount: number;
}

export function runContentSeoAudit() {
  console.log(`\n${colors.bright}${colors.cyan}================================================================${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}  DESIGN PLUS ARCHITECTS & ENGINEERS — CONTENT SEO AUDIT ENGINE  ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}================================================================${colors.reset}\n`);

  const articles = getAllArticles();
  const categories = getAllCategories();
  const categorySlugs = new Set(categories.map(c => c.slug));
  const authorSlugs = new Set(getAllAuthors().map(a => a.slug));

  const allTitles = new Map<string, string[]>();
  const allDescriptions = new Map<string, string[]>();
  const allSlugs = new Set<string>();

  // Track inbound links for orphan article detection
  const inboundArticleLinks = new Map<string, number>();
  articles.forEach(a => inboundArticleLinks.set(a.slug, 0));

  articles.forEach(a => {
    (a.relatedArticles || []).forEach(relSlug => {
      const current = inboundArticleLinks.get(relSlug) || 0;
      inboundArticleLinks.set(relSlug, current + 1);
    });
  });

  const reports: ArticleAuditReport[] = [];
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const article of articles) {
    const issues: ArticleAuditIssue[] = [];

    // 1. Slug Validation
    if (!article.slug || typeof article.slug !== 'string') {
      issues.push({ type: 'ERROR', check: 'Slug', message: 'Missing slug identifier' });
    } else {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
        issues.push({
          type: 'ERROR',
          check: 'Slug',
          message: `Slug "${article.slug}" violates kebab-case lowercase format.`,
          recommendation: 'Use only lowercase letters, numbers, and hyphens.'
        });
      }
      if (allSlugs.has(article.slug)) {
        issues.push({ type: 'ERROR', check: 'Slug', message: `Duplicate slug detected: ${article.slug}` });
      }
      allSlugs.add(article.slug);
    }

    // 2. H1 Validation
    if (!article.title || article.title.trim().length === 0) {
      issues.push({ type: 'ERROR', check: 'H1', message: 'Article H1 title is missing.' });
    } else {
      if (article.title.length < 20) {
        issues.push({ type: 'WARNING', check: 'H1', message: `H1 title is very short (${article.title.length} chars).` });
      } else if (article.title.length > 95) {
        issues.push({ type: 'WARNING', check: 'H1', message: `H1 title is very long (${article.title.length} chars).` });
      }
    }

    // 3. Meta Title Validation
    const metaTitle = article.metaTitle || article.title;
    if (!metaTitle) {
      issues.push({ type: 'ERROR', check: 'Meta Title', message: 'Meta title is missing.' });
    } else {
      const titleLen = metaTitle.length;
      if (titleLen < 30) {
        issues.push({
          type: 'WARNING',
          check: 'Meta Title',
          message: `Meta title is too short (${titleLen} chars). Optimal: 45–65 chars.`,
          recommendation: 'Expand with firm name or geographic context (e.g., " | Design Plus Ajmer").'
        });
      } else if (titleLen > 70) {
        issues.push({
          type: 'WARNING',
          check: 'Meta Title',
          message: `Meta title may truncate in SERPs (${titleLen} chars). Optimal: 45–65 chars.`
        });
      }

      // Check duplicates
      const existing = allTitles.get(metaTitle) || [];
      existing.push(article.slug);
      allTitles.set(metaTitle, existing);
    }

    // 4. Meta Description Validation
    if (!article.metaDescription || article.metaDescription.trim().length === 0) {
      issues.push({ type: 'ERROR', check: 'Meta Description', message: 'Meta description is missing.' });
    } else {
      const descLen = article.metaDescription.length;
      if (descLen < 110) {
        issues.push({
          type: 'WARNING',
          check: 'Meta Description',
          message: `Meta description is under 110 chars (${descLen} chars). Optimal: 130–160 chars.`,
          recommendation: 'Include a clear value proposition and call to action.'
        });
      } else if (descLen > 170) {
        issues.push({
          type: 'WARNING',
          check: 'Meta Description',
          message: `Meta description exceeds 170 chars (${descLen} chars), risk of SERP truncation.`
        });
      }

      // Check duplicates
      const existingDesc = allDescriptions.get(article.metaDescription) || [];
      existingDesc.push(article.slug);
      allDescriptions.set(article.metaDescription, existingDesc);
    }

    // 5. Category Consistency
    if (!article.category) {
      issues.push({ type: 'ERROR', check: 'Category', message: 'Missing article category.' });
    } else if (!categorySlugs.has(article.category)) {
      issues.push({
        type: 'ERROR',
        check: 'Category',
        message: `Category "${article.category}" does not exist in master categories taxonomy.`
      });
    }

    // 6. Author Consistency
    if (!article.author || !article.author.name) {
      issues.push({ type: 'ERROR', check: 'Author', message: 'Missing article author.' });
    } else if (!authorSlugs.has(article.author.slug)) {
      issues.push({
        type: 'WARNING',
        check: 'Author',
        message: `Author "${article.author.name}" slug (${article.author.slug}) is not in registered authors directory.`
      });
    }

    // 7. Dates Validation
    if (!article.publishedAt || !/^\d{4}-\d{2}-\d{2}$/.test(article.publishedAt)) {
      issues.push({ type: 'ERROR', check: 'Published Date', message: `Invalid publishedAt date: "${article.publishedAt}". Must be YYYY-MM-DD.` });
    }
    if (article.updatedAt && !/^\d{4}-\d{2}-\d{2}$/.test(article.updatedAt)) {
      issues.push({ type: 'WARNING', check: 'Updated Date', message: `Invalid updatedAt date: "${article.updatedAt}". Must be YYYY-MM-DD.` });
    }
    if (article.publishedAt && article.updatedAt && article.updatedAt < article.publishedAt) {
      issues.push({ type: 'ERROR', check: 'Dates', message: `updatedAt (${article.updatedAt}) cannot precede publishedAt (${article.publishedAt}).` });
    }

    // 8. Word Count Validation
    const wordCount = article.wordCount || 0;
    if (article.isPillar && wordCount < 1600) {
      issues.push({
        type: 'WARNING',
        check: 'Word Count',
        message: `Pillar article has only ${wordCount} words. Comprehensive pillar guides should exceed 1,600 words.`
      });
    } else if (!article.isPillar && wordCount < 1000) {
      issues.push({
        type: 'WARNING',
        check: 'Word Count',
        message: `Article word count (${wordCount} words) is below standard 1,000-word topical depth.`
      });
    }

    // 9. Heading Structure & Table of Contents
    if (!article.sections || article.sections.length === 0) {
      issues.push({ type: 'ERROR', check: 'Headings', message: 'Article contains no H2 content sections.' });
    } else {
      if (article.sections.length < 3) {
        issues.push({ type: 'WARNING', check: 'Headings', message: `Article only has ${article.sections.length} H2 sections. Recommend at least 4 for structure.` });
      }
      if (!article.tableOfContents || article.tableOfContents.length === 0) {
        issues.push({ type: 'WARNING', check: 'Table of Contents', message: 'Missing table of contents anchor list.' });
      }
    }

    // 10. Featured Image & Alt Text
    if (!article.featuredImage || !article.featuredImage.src) {
      issues.push({ type: 'ERROR', check: 'Image', message: 'Missing featured hero image.' });
    } else {
      if (!article.featuredImage.alt || article.featuredImage.alt.trim().length === 0) {
        issues.push({ type: 'ERROR', check: 'Image Alt', message: 'Featured image is missing alt text.' });
      } else if (article.featuredImage.alt.length < 15) {
        issues.push({ type: 'WARNING', check: 'Image Alt', message: `Image alt text is very brief (${article.featuredImage.alt.length} chars). Describe the architectural subject.` });
      }
    }

    // 11. Internal Links Graph
    const totalInternalLinks = 
      (article.relatedServices?.length || 0) + 
      (article.relatedProjects?.length || 0) + 
      (article.relatedArticles?.length || 0);

    if (totalInternalLinks === 0) {
      issues.push({
        type: 'ERROR',
        check: 'Internal Links',
        message: 'Article has zero internal links to related services, projects, or articles.'
      });
    } else {
      if (!article.relatedServices || article.relatedServices.length === 0) {
        issues.push({ type: 'WARNING', check: 'Internal Links', message: 'Article does not link to any Design Plus practice service page.' });
      }
      if (!article.relatedArticles || article.relatedArticles.length === 0) {
        issues.push({ type: 'WARNING', check: 'Internal Links', message: 'Article has no outbound topical links to other journal articles.' });
      }
    }

    // 12. Orphan Article Detection
    const inboundCount = inboundArticleLinks.get(article.slug) || 0;
    if (!article.isPillar && inboundCount === 0) {
      issues.push({
        type: 'WARNING',
        check: 'Orphan Detection',
        message: 'No other article references this article in relatedArticles graph.',
        recommendation: `Add link to "${article.slug}" from its cluster pillar article.`
      });
    }

    // 13. FAQ Validation & Schema Readiness
    if (article.faqs && article.faqs.length > 0) {
      article.faqs.forEach((faq, fIdx) => {
        if (!faq.question || !faq.answer) {
          issues.push({ type: 'ERROR', check: 'FAQ', message: `FAQ item #${fIdx + 1} has empty question or answer.` });
        }
      });
    }

    // 14. Regulatory Disclaimer Check
    if (article.category === 'building-planning' && !article.disclaimer) {
      issues.push({
        type: 'WARNING',
        check: 'Statutory Disclaimer',
        message: 'Municipal planning articles should include statutory local authority verification disclaimer.',
        recommendation: 'Add "Rules and approval requirements should be confirmed with the relevant local authority before proceeding."'
      });
    }

    // Determine article status
    const hasErrors = issues.some(i => i.type === 'ERROR');
    const hasWarnings = issues.some(i => i.type === 'WARNING');
    const status = hasErrors ? 'FAIL' : hasWarnings ? 'WARN' : 'PASS';

    if (hasErrors) totalErrors++;
    if (hasWarnings) totalWarnings++;

    reports.push({
      slug: article.slug,
      title: article.title,
      category: article.category,
      isPillar: !!article.isPillar,
      status,
      issues,
      wordCount
    });
  }

  // Check Duplicate Meta Across Library
  for (const [title, slugs] of allTitles.entries()) {
    if (slugs.length > 1) {
      console.log(`${colors.red}✕ DUPLICATE TITLE DETECTED:${colors.reset} "${title}" used in articles: ${slugs.join(', ')}`);
      totalErrors++;
    }
  }

  for (const [desc, slugs] of allDescriptions.entries()) {
    if (slugs.length > 1) {
      console.log(`${colors.yellow}⚠ DUPLICATE META DESCRIPTION DETECTED:${colors.reset} across articles: ${slugs.join(', ')}`);
      totalWarnings++;
    }
  }

  // Print Summary Table
  console.log(`\n${colors.bright}AUDIT RESULTS SUMMARY:${colors.reset}\n`);
  console.log('-------------------------------------------------------------------------------------------------------');
  console.log(`${'STATUS'.padEnd(8)} | ${'TYPE'.padEnd(8)} | ${'WORDS'.padStart(6)} | ${'SLUG'.padEnd(42)} | ${'ISSUES'}`);
  console.log('-------------------------------------------------------------------------------------------------------');

  reports.forEach(r => {
    const statusColor = r.status === 'PASS' ? colors.green : r.status === 'WARN' ? colors.yellow : colors.red;
    const typeLabel = r.isPillar ? 'PILLAR' : 'SUPPORT';
    const issueSummary = r.issues.length === 0 ? 'All 15 checks passed' : `${r.issues.length} note(s)`;
    console.log(
      `${statusColor}${r.status.padEnd(8)}${colors.reset} | ${typeLabel.padEnd(8)} | ${String(r.wordCount).padStart(6)} | ${r.slug.slice(0, 42).padEnd(42)} | ${issueSummary}`
    );
  });
  console.log('-------------------------------------------------------------------------------------------------------\n');

  // Print Diagnostics for Articles with Issues
  const problematic = reports.filter(r => r.issues.length > 0);
  if (problematic.length > 0) {
    console.log(`${colors.bright}ACTIONABLE DIAGNOSTICS & RECOMMENDATIONS:${colors.reset}\n`);
    problematic.forEach(p => {
      console.log(`${colors.bright}${colors.cyan}► /blog/${p.slug}${colors.reset} (${p.title})`);
      p.issues.forEach(i => {
        const icon = i.type === 'ERROR' ? `${colors.red}[ERROR]` : `${colors.yellow}[WARN]`;
        console.log(`   ${icon} ${colors.bright}${i.check}:${colors.reset} ${i.message}`);
        if (i.recommendation) {
          console.log(`          ${colors.gray}Recommendation: ${i.recommendation}${colors.reset}`);
        }
      });
      console.log('');
    });
  }

  // Final Verdict
  console.log('================================================================');
  console.log(`Total Articles Audited : ${articles.length}`);
  console.log(`Passed Cleanly         : ${reports.filter(r => r.status === 'PASS').length}`);
  console.log(`Warnings               : ${totalWarnings}`);
  console.log(`Errors                 : ${totalErrors}`);
  console.log('================================================================');

  if (totalErrors > 0) {
    console.log(`\n${colors.red}${colors.bright}AUDIT FAILED with ${totalErrors} error(s). Please review actionable items above.${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}✓ CONTENT SEO AUDIT PASSED! All articles meet production SEO standards.${colors.reset}\n`);
    process.exit(0);
  }
}

// Execute if run directly via tsx
if (import.meta.url === `file://${process.argv[1]}`) {
  runContentSeoAudit();
}
