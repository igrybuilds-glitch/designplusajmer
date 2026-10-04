import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Layers, 
  Search, 
  Compass, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BlogApi } from '../content/blog/api';
import { BlogArticle } from '../types/blog';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const allArticles = useMemo(() => BlogApi.getAllArticles(), []);
  const allCategories = useMemo(() => BlogApi.getAllCategories(), []);
  const stats = useMemo(() => BlogApi.getBlogStats(), []);

  // Filtered list if searching
  const filteredArticles = useMemo(() => {
    return BlogApi.filterArticles({
      category: activeCategoryFilter === 'all' ? undefined : activeCategoryFilter,
      searchQuery: searchQuery
    });
  }, [activeCategoryFilter, searchQuery]);

  // Editorial Section Curations
  const primaryFeatured: BlogArticle = useMemo(() => {
    return allArticles.find(a => a.slug === 'architect-in-ajmer-guide') || allArticles[0];
  }, [allArticles]);

  const editorsPicks: BlogArticle[] = useMemo(() => {
    const slugs = [
      'cost-to-build-house-in-ajmer',
      'structural-engineering-for-residential-buildings',
      'house-plan-approval-ajmer'
    ];
    return slugs
      .map(s => allArticles.find(a => a.slug === s))
      .filter((a): a is BlogArticle => a !== undefined);
  }, [allArticles]);

  const architectureArticles = useMemo(() => {
    return allArticles.filter(a => a.category === 'architecture' && a.slug !== primaryFeatured.slug).slice(0, 3);
  }, [allArticles, primaryFeatured]);

  const engineeringArticles = useMemo(() => {
    return allArticles.filter(a => 
      (a.category === 'structural-engineering' || a.category === 'surveying-geotechnical' || a.category === 'infrastructure')
    ).slice(0, 3);
  }, [allArticles]);

  const planningArticles = useMemo(() => {
    return allArticles.filter(a => 
      a.category === 'building-planning' || a.category === 'township-planning'
    ).slice(0, 3);
  }, [allArticles]);

  const ajmerGuides = useMemo(() => {
    return allArticles.filter(a => 
      a.category === 'ajmer-rajasthan' || a.tags.includes('architects-in-ajmer')
    ).slice(0, 3);
  }, [allArticles]);

  const projectStories = useMemo(() => {
    return allArticles.filter(a => a.category === 'project-stories').slice(0, 2);
  }, [allArticles]);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Design Plus Architectural & Engineering Journal',
    description: 'First-hand professional essays, structural calculations, building bylaws, and local construction guides from chartered engineers and architects in Ajmer, Rajasthan.',
    url: 'https://www.designplusajmer.co.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Design Plus Architects & Engineers',
      url: 'https://www.designplusajmer.co.in',
      logo: 'https://www.designplusajmer.co.in/logo.png'
    },
    blogPost: allArticles.slice(0, 10).map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.metaDescription,
      url: `https://www.designplusajmer.co.in/blog/${a.slug}`,
      datePublished: a.publishedAt,
      dateModified: a.updatedAt,
      author: {
        '@type': 'Person',
        name: a.author.name
      }
    }))
  };

  return (
    <main id="blog-publication" className="pt-28 pb-24 bg-[#F5F2EB] text-[#1A1917]">
      <SEOHead
        title="Architecture & Engineering Journal | Design Plus Ajmer"
        description="Authoritative essays and guides on residential architecture, IS code structural engineering, building plan sanctions, and construction costs in Ajmer, Rajasthan."
        canonical="https://www.designplusajmer.co.in/blog"
        schema={blogSchema}
      />

      {/* 0. BREADCRUMBS & PUBLICATION MASTHEAD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#6E665B] mb-6">
          <Link to="/" className="hover:text-[#1A1917] transition-colors">Home</Link>
          <span className="text-[#1A1917]/30">/</span>
          <span className="text-[#C86635] font-semibold">Journal &amp; Technical Monographs</span>
        </nav>

        {/* Monumental Editorial Masthead */}
        <div className="border-b border-[#1A1917]/10 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#C86635] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C86635] animate-pulse" />
                <span>DESIGN PLUS EDITORIAL ARCHIVE</span>
                <span className="text-[#1A1917]/20">·</span>
                <span className="text-[#6E665B]">{stats.publishedArticles} RESEARCH ESSAYS</span>
              </div>
              <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase leading-[0.92] text-[#1A1917]">
                PRACTICE, PHYSICS <br />
                <span className="text-[#C86635]">&amp; REGIONAL FORM.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A453E] font-serif leading-relaxed max-w-2xl">
                A technical publication by chartered structural engineers and architects on durable building physics, Rajasthan arid microclimates, municipal approvals, and honest material craft.
              </p>
            </div>

            {/* Quick Stats Datum */}
            <div className="flex items-center gap-6 border-l border-[#1A1917]/10 pl-6 text-xs font-mono text-[#6E665B]">
              <div>
                <span className="block text-[10px] uppercase text-[#6E665B]">PILLAR GUIDES</span>
                <span className="text-lg font-bold text-[#1A1917]">{stats.pillarCount}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#6E665B]">DISCIPLINES</span>
                <span className="text-lg font-bold text-[#1A1917]">{stats.categoryCount}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#6E665B]">TOTAL WORDS</span>
                <span className="text-lg font-bold text-[#1A1917]">{(stats.totalWordCount / 1000).toFixed(1)}k+</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. SEARCH & CATEGORY NAVIGATOR (Zero-Pill Discipline) */}
        <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1917]/10">
          {/* Category Jump Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-mono">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`shrink-0 px-3 py-1.5 transition-all text-xs tracking-wider uppercase whitespace-nowrap ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#1A1917] text-[#F5F2EB] font-bold'
                  : 'text-[#6E665B] hover:text-[#1A1917] hover:bg-black/5'
              }`}
            >
              All Topics
            </button>
            {allCategories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategoryFilter(cat.slug)}
                className={`shrink-0 px-3 py-1.5 transition-all text-xs tracking-wider uppercase whitespace-nowrap ${
                  activeCategoryFilter === cat.slug
                    ? 'bg-[#1A1917] text-[#F5F2EB] font-bold'
                    : 'text-[#6E665B] hover:text-[#1A1917] hover:bg-black/5'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-3.5 h-3.5 text-[#6E665B] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, codes, byelaws..."
              className="w-full bg-white/70 backdrop-blur-sm border border-[#1A1917]/15 pl-9 pr-3 py-2 text-xs font-mono text-[#1A1917] placeholder:text-[#6E665B]/60 focus:outline-none focus:border-[#C86635]"
            />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SEARCH / FILTER ACTIVE STATE                                              */}
      {/* ========================================================================= */}
      {searchQuery || activeCategoryFilter !== 'all' ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#1A1917]/10 text-xs font-mono">
            <span>
              SHOWING <strong className="text-[#1A1917]">{filteredArticles.length}</strong> ARTICLES 
              {activeCategoryFilter !== 'all' && ` IN ${activeCategoryFilter.toUpperCase()}`}
              {searchQuery && ` MATCHING "${searchQuery}"`}
            </span>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategoryFilter('all'); }}
              className="text-[#C86635] hover:underline"
            >
              Clear Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article key={article.id} className="group flex flex-col justify-between bg-white/70 backdrop-blur-sm border border-[#1A1917]/10 p-6 shadow-xs hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-black/5">
                    <img 
                      src={article.featuredImage.src} 
                      alt={article.featuredImage.alt}
                      loading="lazy"
                      className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span className="uppercase font-semibold text-[#C86635]">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-normal uppercase leading-tight text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#4A453E] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#6E665B]">{article.author.name}</span>
                  <Link to={`/blog/${article.slug}`} className="text-[#C86635] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        /* ========================================================================= */
        /* STANDARD EDITORIAL PUBLICATION LAYOUT                                     */
        /* ========================================================================= */
        <div className="space-y-24">
          
          {/* ===================================================================== */}
          {/* 1. FEATURED ARTICLE (Monumental Asymmetrical Split)                    */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-md border border-[#1A1917]/15 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(26,25,23,0.06)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Visual (7 cols) */}
                <div className="lg:col-span-7 relative group overflow-hidden bg-black/5 aspect-[16/10]">
                  <img
                    src={primaryFeatured.featuredImage.src}
                    alt={primaryFeatured.featuredImage.alt}
                    className="w-full h-full object-cover filter saturate-[0.96] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#F5F2EB]/95 backdrop-blur-md px-3 py-1 text-[11px] font-mono tracking-widest text-[#1A1917] uppercase border border-[#1A1917]/10">
                    ★ LEAD PILLAR GUIDE
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1A1917]/85 backdrop-blur-md p-3 text-white text-[11px] font-mono hidden sm:block">
                    {primaryFeatured.featuredImage.caption}
                  </div>
                </div>

                {/* Editorial Details (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-mono text-[#6E665B]">
                      <span className="text-[#C86635] font-bold uppercase">{primaryFeatured.category}</span>
                      <span>·</span>
                      <span>{primaryFeatured.readTime}</span>
                      <span>·</span>
                      <span>{primaryFeatured.publishedAt}</span>
                    </div>

                    <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal uppercase leading-[0.96] tracking-tight text-[#1A1917] hover:text-[#C86635] transition-colors">
                      <Link to={`/blog/${primaryFeatured.slug}`}>
                        {primaryFeatured.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A453E] leading-relaxed">
                    {primaryFeatured.excerpt}
                  </p>

                  {/* Key Takeaways Snapshot */}
                  <div className="bg-[#F5F2EB]/60 p-4 border-l-2 border-l-[#C86635] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E665B] block font-semibold">
                      KEY TAKEAWAY HIGHLIGHT
                    </span>
                    <p className="text-xs text-[#1A1917] leading-relaxed">
                      {primaryFeatured.keyTakeaways[0]}
                    </p>
                  </div>

                  {/* Author datum & Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#1A1917]/10">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={primaryFeatured.author.avatar} 
                        alt={primaryFeatured.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#1A1917] block">
                          {primaryFeatured.author.name}
                        </span>
                        <span className="text-[10px] font-mono text-[#6E665B] block">
                          {primaryFeatured.author.qualifications}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${primaryFeatured.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C86635] font-bold hover:underline"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 2. EDITOR'S / FIRM'S PICKS (3 Asymmetric Cards)                       */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#C86635] font-bold">02.</span>
                <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                  Editor's &amp; Firm's Critical Guides
                </span>
              </div>
              <span className="text-[#6E665B] hidden sm:inline">Essential Reading Before Building</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {editorsPicks.map((article, idx) => (
                <article 
                  key={article.id}
                  className="group bg-white/70 backdrop-blur-sm border border-[#1A1917]/10 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                      <img 
                        src={article.featuredImage.src} 
                        alt={article.featuredImage.alt}
                        className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#F5F2EB]/95 px-2 py-0.5 text-[9px] font-mono tracking-widest text-[#1A1917] uppercase">
                        PICK 0{idx + 1}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                      <span className="uppercase font-semibold text-[#C86635]">{article.category}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-editorial text-2xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                      <Link to={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#4A453E] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6E665B] text-[11px]">{article.author.name}</span>
                    <Link to={`/blog/${article.slug}`} className="text-[#C86635] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 3. ARCHITECTURE & RESIDENTIAL DISCIPLINE                               */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#C86635] font-bold">03.</span>
                <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                  Architecture &amp; Residential Form
                </span>
              </div>
              <Link to="/blog/category/architecture" className="text-[#C86635] font-semibold hover:underline">
                View Architecture Archive →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {architectureArticles.map(article => (
                <article key={article.id} className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-black/5">
                    <img 
                      src={article.featuredImage.src} 
                      alt={article.featuredImage.alt}
                      className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{article.publishedAt}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#4A453E] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 4. CHARTERED STRUCTURAL ENGINEERING & CODES                           */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#EDE9E0]/80 backdrop-blur-md border border-[#1A1917]/15 p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-8 text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-[#C86635] font-bold">04.</span>
                  <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                    Chartered Structural Engineering &amp; Physics
                  </span>
                </div>
                <span className="text-[#6E665B]">IS 456 · IS 1893:2016 · IS 13920</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {engineeringArticles.map(article => (
                  <article key={article.id} className="bg-white/80 p-6 border border-[#1A1917]/10 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="text-[10px] font-mono text-[#C86635] font-semibold uppercase">
                        {article.subcategory || 'ENGINEERING SPEC'}
                      </div>
                      <h4 className="font-editorial text-xl font-normal uppercase leading-tight text-[#1A1917] hover:text-[#C86635] transition-colors">
                        <Link to={`/blog/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-[#4A453E] line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#6E665B]">{article.readTime}</span>
                      <Link to={`/blog/${article.slug}`} className="text-[#C86635] font-semibold flex items-center gap-1">
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 5. BUILDING PLANNING & MUNICIPAL APPROVALS                            */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#C86635] font-bold">05.</span>
                <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                  Building Planning, Approvals &amp; Town Planning
                </span>
              </div>
              <Link to="/blog/category/building-planning" className="text-[#C86635] font-semibold hover:underline">
                View Planning Archive →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {planningArticles.map(article => (
                <article key={article.id} className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-black/5">
                    <img 
                      src={article.featuredImage.src} 
                      alt={article.featuredImage.alt}
                      className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#4A453E] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 6. AJMER & RAJASTHAN CONTEXTUAL GUIDES                                 */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#C86635] font-bold">06.</span>
                <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                  Ajmer &amp; Central Rajasthan Contextual Guides
                </span>
              </div>
              <span className="text-[#6E665B] hidden sm:inline">Local Geology, Microclimates &amp; Bylaws</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ajmerGuides.map(article => (
                <article key={article.id} className="group space-y-3">
                  <div className="aspect-[16/10] overflow-hidden bg-black/5">
                    <img 
                      src={article.featuredImage.src} 
                      alt={article.featuredImage.alt}
                      className="w-full h-full object-cover filter saturate-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6E665B]">
                    <span>{article.publishedAt}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-editorial text-xl font-normal uppercase leading-snug text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#4A453E] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ===================================================================== */}
          {/* 7. PROJECT STORIES & MONOGRAPHS                                       */}
          {/* ===================================================================== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-[#1A1917]/10 pb-4 mb-10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="text-[#C86635] font-bold">07.</span>
                <span className="uppercase tracking-[0.2em] font-medium text-[#1A1917]">
                  Executed Project Stories &amp; Monographs
                </span>
              </div>
              <Link to="/projects" className="text-[#C86635] font-semibold hover:underline">
                View Full Portfolio Archive →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projectStories.map(story => (
                <article key={story.id} className="group bg-white/70 border border-[#1A1917]/10 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="aspect-[16/10] overflow-hidden bg-black/5">
                      <img 
                        src={story.featuredImage.src} 
                        alt={story.featuredImage.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="text-[10px] font-mono text-[#C86635] font-bold uppercase tracking-wider">
                      DETAILED PROJECT MONOGRAPH
                    </div>
                    <h3 className="font-editorial text-2xl font-normal uppercase text-[#1A1917] group-hover:text-[#C86635] transition-colors">
                      <Link to={`/blog/${story.slug}`}>
                        {story.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#4A453E] leading-relaxed">
                      {story.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-[#1A1917]/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#6E665B]">{story.author.name}</span>
                    <Link to={`/blog/${story.slug}`} className="text-[#C86635] font-semibold flex items-center gap-1">
                      <span>Read Monograph</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. TOPIC TAXONOMY DIRECTORY (Category Hub)                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="border-t border-[#1A1917]/15 pt-12">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E665B] mb-6">
            Complete Topical Directory · Dedicated Category Archives
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {allCategories.map(cat => (
              <Link
                key={cat.slug}
                to={`/blog/category/${cat.slug}`}
                className="p-4 bg-white/60 hover:bg-white border border-[#1A1917]/10 hover:border-[#C86635] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial text-base font-medium text-[#1A1917] block">
                    {cat.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#6E665B] block mt-1">
                    {cat.statutoryFocus || 'Design Plus Practice'}
                  </span>
                </div>
                <div className="pt-3 mt-2 text-[10px] font-mono text-[#C86635] font-semibold flex items-center gap-1">
                  <span>View Archive</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. STATUTORY EDITORIAL DISCLAIMER & CONSULTATION INTAKE                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-[#1A1917] text-[#F5F2EB] p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C86635] font-semibold">
              COMMISSION INTAKE &amp; TECHNICAL ADVICE
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal uppercase tracking-tight text-white leading-tight">
              Have a Specific Building or Infrastructure Inquiry?
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Connect directly with Er. Sudhir Soni and Ar. Vipul Verma for integrated architectural design, chartered structural engineering, or municipal planning guidance in Ajmer.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#C86635] hover:bg-[#b5582a] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] font-semibold text-center transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
