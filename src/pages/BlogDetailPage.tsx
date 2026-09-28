import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ChevronRight, 
  Building, 
  Compass, 
  MapPin, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  HelpCircle,
  Share2,
  BookOpen,
  ArrowRight,
  Info,
  SlidersHorizontal
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogApi } from '../content/blog/api';
import { SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { getAllProjects } from '../data/projectsData';

interface BlogDetailPageProps {
  onOpenConsultation?: () => void;
}

export function BlogDetailPage({ onOpenConsultation }: BlogDetailPageProps) {
  const { slug, category, param } = useParams<{ 
    slug?: string; 
    category?: string;
    param?: string;
  }>();

  // Resolve target slug cleanly from route params
  const targetSlug = slug || param || category || '';
  const post = BlogApi.getArticleBySlug(targetSlug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Canonical clean URL: /blog/[slug]
  const canonicalUrl = `https://designplusajmer.in/blog/${post.slug}`;
  const categoryMeta = BlogApi.getCategoryBySlug(post.category);
  const relatedArticles = BlogApi.getRelatedArticles(post.slug, 3);
  const allProjects = getAllProjects();

  // Related Services and Projects
  const relatedServicesData = SERVICES.filter(s => 
    post.relatedServices?.includes(s.slug)
  );

  const relatedProjectsData = allProjects.filter(p => 
    post.relatedProjects?.includes(p.slug)
  );

  // Article Schema (BlogPosting / Article)
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.featuredImage.src],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    wordCount: post.wordCount,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
      url: `https://designplusajmer.in/blog/author/${post.author.slug}`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Engineers',
      url: 'https://designplusajmer.in',
      logo: 'https://designplusajmer.in/logo.png'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  // Optional FAQPage Schema ONLY if FAQs exist and are visible
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://designplusajmer.in/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Journal',
        item: 'https://designplusajmer.in/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryMeta?.name || post.category,
        item: `https://designplusajmer.in/blog/category/${post.category}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: canonicalUrl
      }
    ]
  };

  const combinedSchemas = faqSchema 
    ? [articleSchema, faqSchema, breadcrumbSchema] 
    : [articleSchema, breadcrumbSchema];

  return (
    <main id="blog-article-detail" className="pt-28 pb-24 bg-[#F5F2EB] text-[#1A1917]">
      <SEOHead
        title={post.metaTitle || `${post.title} | Design Plus`}
        description={post.metaDescription || post.excerpt}
        canonical={canonicalUrl}
        image={post.featuredImage.src}
        type="article"
        schema={combinedSchemas}
      />

      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumbs" className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#6E665B]">
          <Link to="/" className="hover:text-[#1A1917] transition-colors">Home</Link>
          <span className="text-[#1A1917]/25">/</span>
          <Link to="/blog" className="hover:text-[#1A1917] transition-colors">Journal</Link>
          <span className="text-[#1A1917]/25">/</span>
          <Link to={`/blog/category/${post.category}`} className="hover:text-[#1A1917] transition-colors uppercase">
            {categoryMeta?.shortName || post.category}
          </Link>
          <span className="text-[#1A1917]/25">/</span>
          <span className="text-[#C86635] truncate max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* 2. ARTICLE HEADER MASTHEAD */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl space-y-6">
          
          {/* Metadata badges (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#6E665B]">
            <Link 
              to={`/blog/category/${post.category}`}
              className="uppercase font-bold text-[#C86635] hover:underline"
            >
              {categoryMeta?.name || post.category}
            </Link>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.wordCount} words</span>
            {post.isPillar && (
              <>
                <span>·</span>
                <span className="text-[#1A1917] font-semibold">★ PILLAR REFERENCE GUIDE</span>
              </>
            )}
          </div>

          {/* 3. H1 HEADLINE */}
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight uppercase leading-[0.95] text-[#1A1917]">
            {post.title}
          </h1>

          {/* 4. SHORT HIGH-QUALITY INTRODUCTION */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#33312E] font-serif leading-relaxed font-light">
            {post.intro}
          </p>

          {/* 5, 6, 7. AUTHOR & DATES DATUM */}
          <div className="pt-4 border-t border-[#1A1917]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <Link to={`/blog/author/${post.author.slug}`} className="flex items-center gap-2.5 group">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#1A1917]/10"
                />
                <div>
                  <span className="font-semibold text-[#1A1917] group-hover:text-[#C86635] transition-colors block">
                    {post.author.name}
                  </span>
                  <span className="text-[11px] text-[#6E665B] block">
                    {post.author.role}
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4 text-[#6E665B]">
              <div>
                <span className="block text-[10px] uppercase">PUBLISHED</span>
                <span className="text-[#1A1917] font-medium">{post.publishedAt}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase">UPDATED</span>
                <span className="text-[#1A1917] font-medium">{post.updatedAt || post.publishedAt}</span>
              </div>
            </div>
          </div>

          {/* Expert Review Tag if available */}
          {post.reviewedBy && (
            <div className="bg-white/80 p-3.5 border border-[#1A1917]/10 flex items-center gap-3 text-xs font-mono text-[#1A1917]">
              <ShieldCheck className="w-4 h-4 text-[#C86635] shrink-0" />
              <div>
                <span>Reviewed for technical accuracy by </span>
                <strong className="text-[#1A1917]">{post.reviewedBy.name}</strong>
                <span className="text-[#6E665B]"> ({post.reviewedBy.qualifications}) · Design Plus Architects &amp; Engineers.</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 9. HERO IMAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-black/5 overflow-hidden border border-[#1A1917]/10 aspect-[16/9] max-h-[580px] relative">
          <img 
            src={post.featuredImage.src} 
            alt={post.featuredImage.alt}
            className="w-full h-full object-cover filter saturate-[0.96]"
          />
        </div>
        {post.featuredImage.caption && (
          <p className="mt-3 text-xs font-mono text-[#6E665B] flex items-center justify-between">
            <span>{post.featuredImage.caption}</span>
            {post.featuredImage.credit && (
              <span className="text-[#1A1917]/40">Source: {post.featuredImage.credit}</span>
            )}
          </p>
        )}
      </section>

      {/* ========================================================================= */}
      {/* ARTICLE BODY & STICKY TABLE OF CONTENTS                                   */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 10. STICKY TABLE OF CONTENTS (Desktop 4 cols) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Table of contents container */}
              <div className="bg-white/75 backdrop-blur-md border border-[#1A1917]/10 p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917] pb-3 border-b border-[#1A1917]/10 mb-4">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C86635]" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2 text-xs font-mono">
                  {post.tableOfContents.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className={`block transition-colors hover:text-[#C86635] leading-relaxed ${
                        toc.level === 3 ? 'pl-4 text-[#6E665B]' : 'text-[#1A1917] font-medium'
                      }`}
                    >
                      {toc.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Author Card in Sidebar */}
              <div className="bg-white/70 backdrop-blur-md border border-[#1A1917]/10 p-6 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#C86635] font-semibold">
                  ABOUT THE AUTHOR
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#1A1917]/10"
                  />
                  <div>
                    <h4 className="font-editorial text-base font-bold text-[#1A1917]">
                      <Link to={`/blog/author/${post.author.slug}`} className="hover:text-[#C86635]">
                        {post.author.name}
                      </Link>
                    </h4>
                    <span className="text-[10px] font-mono text-[#6E665B] block">
                      {post.author.qualifications}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#4A453E] leading-relaxed">
                  {post.author.bio}
                </p>
                <div className="pt-2 border-t border-[#1A1917]/10">
                  <Link 
                    to={`/blog/author/${post.author.slug}`}
                    className="text-[11px] font-mono text-[#C86635] font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View all articles by {post.author.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Quick Inquiry Box */}
              <div className="bg-[#EDE9E0] border border-[#1A1917]/10 p-6 space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#1A1917] font-semibold">
                  DIRECT CONSULTATION
                </div>
                <p className="text-xs text-[#33312E] leading-relaxed">
                  Have questions about this topic for your project in Ajmer or Rajasthan?
                </p>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full bg-[#1A1917] hover:bg-[#33312E] text-white py-2.5 px-4 text-xs font-mono uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Assessment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </aside>

          {/* 11. MAIN ARTICLE CONTENT (Desktop 8 cols) */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-12">
            
            {/* 13. KEY TAKEAWAYS BOX */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <section className="bg-white/80 backdrop-blur-md border border-[#1A1917]/15 border-l-4 border-l-[#C86635] p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917]">
                  <CheckCircle2 className="w-4 h-4 text-[#C86635]" />
                  <span>Key Professional Takeaways</span>
                </div>
                <ul className="space-y-3 text-sm text-[#2A2824] leading-relaxed">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#C86635] font-mono font-bold text-xs mt-0.5">0{idx + 1}.</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* SECTIONS RENDERING */}
            <div className="space-y-12 text-[#2A2824]">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-4 scroll-mt-28">
                  <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-tight text-[#1A1917] pt-4 border-t border-[#1A1917]/10">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base sm:text-lg font-sans leading-relaxed text-[#33312E]">
                      {p}
                    </p>
                  ))}

                  {/* Callout if present */}
                  {section.callout && (
                    <div className={`p-5 my-6 border-l-4 ${
                      section.callout.type === 'statute' 
                        ? 'bg-amber-50/80 border-amber-700 text-amber-950' 
                        : section.callout.type === 'warning'
                        ? 'bg-red-50/80 border-red-700 text-red-950'
                        : 'bg-white/90 border-[#C86635] text-[#1A1917]'
                    } border border-stone-200 space-y-1.5`}>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider block">
                        {section.callout.title}
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed font-sans">
                        {section.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Technical Diagram / Specifications Table if present */}
                  {section.diagram && (
                    <div className="my-8 bg-white border border-[#1A1917]/15 p-6 shadow-xs space-y-4">
                      <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-3">
                        <span className="font-editorial text-lg uppercase text-[#1A1917]">
                          {section.diagram.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#6E665B] uppercase">
                          TECHNICAL SPEC
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                        {section.diagram.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="bg-[#F5F2EB]/60 p-3 border border-[#1A1917]/5">
                            <span className="text-[#6E665B] block text-[10px] uppercase">
                              {spec.label}
                            </span>
                            <span className="text-[#1A1917] font-semibold block mt-0.5">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] font-mono text-[#6E665B] italic">
                        {section.diagram.caption}
                      </p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* 14. COMMON MISTAKES TO AVOID */}
            {post.commonMistakes && post.commonMistakes.length > 0 && (
              <section className="bg-white/80 border border-[#1A1917]/15 p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917]">
                  <AlertTriangle className="w-4 h-4 text-amber-700" />
                  <span>Costly Pitfalls &amp; Mistakes to Avoid</span>
                </div>
                <div className="space-y-4">
                  {post.commonMistakes.map((m, idx) => (
                    <div key={idx} className="p-4 bg-[#F5F2EB]/50 border border-[#1A1917]/5 space-y-2">
                      <div className="text-xs font-mono font-bold text-red-900">
                        ✕ Mistake: {m.mistake}
                      </div>
                      <div className="text-xs text-[#6E665B]">
                        <strong>Consequence:</strong> {m.consequence}
                      </div>
                      <div className="text-xs text-[#1A1917] font-medium pt-1 border-t border-[#1A1917]/5">
                        <strong className="text-[#C86635]">✓ Recommendation:</strong> {m.recommendation}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 15. CHECKLIST */}
            {post.checklist && (
              <section className="bg-[#EDE9E0]/80 border border-[#1A1917]/15 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917]">
                  <FileText className="w-4 h-4 text-[#C86635]" />
                  <span>{post.checklist.title}</span>
                </div>
                <ul className="space-y-2.5 text-xs font-mono">
                  {post.checklist.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-[#1A1917]">
                      <span className="w-1.5 h-1.5 bg-[#C86635]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 16. FREQUENTLY ASKED QUESTIONS */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faqs" className="bg-white/80 border border-[#1A1917]/15 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A1917]">
                    <HelpCircle className="w-4 h-4 text-[#C86635]" />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#6E665B]">FAQPAGE VERIFIED</span>
                </div>

                <div className="space-y-6">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-2 pb-4 border-b border-[#1A1917]/5 last:border-b-0">
                      <h3 className="font-editorial text-xl font-normal text-[#1A1917]">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-[#4A453E] font-sans leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* STATUTORY REGULATORY DISCLAIMER */}
            {post.disclaimer && (
              <div className="p-4 bg-[#EDE9E0]/60 border border-[#1A1917]/10 text-xs font-mono text-[#6E665B] flex items-start gap-3">
                <Info className="w-4 h-4 text-[#C86635] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Statutory Notice:</strong> {post.disclaimer}
                </p>
              </div>
            )}

            {/* 17. RELATED SERVICES */}
            {relatedServicesData.length > 0 && (
              <section className="pt-8 border-t border-[#1A1917]/10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E665B] block font-semibold">
                  RELATED DESIGN PLUS SERVICES &amp; PRACTICES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedServicesData.map(service => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="p-4 bg-white/70 border border-[#1A1917]/10 hover:border-[#C86635] transition-all flex items-center justify-between group"
                    >
                      <div>
                        <h4 className="font-editorial text-base font-medium text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                          {service.title}
                        </h4>
                        <span className="text-[10px] font-mono text-[#6E665B]">
                          Explore Practice Scope
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#6E665B] group-hover:text-[#C86635] transition-colors" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 18. RELATED PROJECTS */}
            {relatedProjectsData.length > 0 && (
              <section className="pt-8 border-t border-[#1A1917]/10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E665B] block font-semibold">
                  RELEVANT EXECUTED PROJECTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedProjectsData.map(proj => (
                    <Link
                      key={proj.slug}
                      to={`/projects/${proj.category}/${proj.slug}`}
                      className="group bg-white/70 border border-[#1A1917]/10 overflow-hidden flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-black/5">
                        <img 
                          src={proj.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'} 
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-[#C86635] block font-semibold">
                            {proj.location}
                          </span>
                          <h4 className="font-editorial text-base uppercase text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                            {proj.title}
                          </h4>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#6E665B] group-hover:text-[#C86635]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 19. TOPICAL GRAPH: RELATED ARTICLES (Links to Pillars and Cluster supporting pieces) */}
            {relatedArticles.length > 0 && (
              <section className="pt-8 border-t border-[#1A1917]/10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6E665B] block font-semibold">
                  FURTHER RESEARCH &amp; SUPPORTING GUIDES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedArticles.map(rel => (
                    <article key={rel.id} className="group space-y-2">
                      <div className="aspect-[16/10] overflow-hidden bg-black/5">
                        <img 
                          src={rel.featuredImage.src} 
                          alt={rel.featuredImage.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="text-[10px] font-mono text-[#6E665B] block">
                        {rel.readTime}
                      </span>
                      <h4 className="font-editorial text-base uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                        <Link to={`/blog/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h4>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* 20. STRONG CONTEXTUAL CTA */}
            <section className="bg-[#1A1917] text-white p-8 sm:p-10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
                {post.contextualCTA.title}
              </span>
              <p className="text-sm text-stone-300 leading-relaxed max-w-xl">
                {post.contextualCTA.subtitle}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.18em] font-semibold transition-colors flex items-center gap-2"
                >
                  <span>{post.contextualCTA.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </section>

          </article>
        </div>
      </div>
    </main>
  );
}
