import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Search, 
  LayoutGrid, 
  ListFilter, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2,
  SlidersHorizontal,
  X,
  ChevronRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';
import { PROJECT_CATEGORIES, getAllProjects } from '../data/projectsData';
import { ProjectCategory, ProjectType } from '../types';

interface ProjectsPageProps {
  initialCategory?: string;
}

export function ProjectsPage({ initialCategory }: ProjectsPageProps) {
  const { category: routeCategory } = useParams<{ category?: string }>();
  
  // Determine active category from prop, route param, or fallback to 'all'
  const activeCategoryParam = (initialCategory || routeCategory || 'all').toLowerCase();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'real' | 'concept'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'index'>('grid');

  const allProjects = useMemo(() => getAllProjects(), []);

  // Find active category meta
  const currentCategoryMeta = useMemo(() => {
    return PROJECT_CATEGORIES.find((c) => c.slug === activeCategoryParam) || PROJECT_CATEGORIES[0];
  }, [activeCategoryParam]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allProjects.length };
    PROJECT_CATEGORIES.forEach((cat) => {
      if (cat.slug !== 'all') {
        counts[cat.slug] = allProjects.filter(
          (p) => p.projectCategory === cat.slug || p.category === cat.slug
        ).length;
      }
    });
    return counts;
  }, [allProjects]);

  // Filter projects by category, type, and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // Category filter
      const matchesCategory = 
        activeCategoryParam === 'all' ||
        project.projectCategory === activeCategoryParam ||
        project.category === activeCategoryParam;

      // Type filter (all, real client, concept study)
      const matchesType = 
        selectedType === 'all' || 
        project.projectType === selectedType;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.city.toLowerCase().includes(q) ||
        project.typology.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.scopeOfWork.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesType && matchesSearch;
    });
  }, [allProjects, activeCategoryParam, selectedType, searchQuery]);

  const canonicalUrl = activeCategoryParam === 'all' 
    ? 'https://designplusajmer.in/projects'
    : `https://designplusajmer.in/projects/${activeCategoryParam}`;

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: activeCategoryParam === 'all'
      ? 'Architectural Portfolio & Case Studies | Design Plus'
      : `${currentCategoryMeta.label} Portfolio | Design Plus`,
    description: currentCategoryMeta.description,
    url: canonicalUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: filteredProjects.slice(0, 10).map((proj, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://designplusajmer.in/projects/${proj.category}/${proj.slug}`,
        name: proj.title
      }))
    }
  };

  return (
    <main id="projects-page" className="pt-28 pb-24">
      <SEOHead
        title={
          activeCategoryParam === 'all'
            ? 'Architectural Portfolio & Case Studies | Design Plus Ajmer'
            : `${currentCategoryMeta.label} Portfolio | Design Plus Ajmer`
        }
        description={currentCategoryMeta.description}
        canonical={canonicalUrl}
        schema={portfolioSchema}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link to="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
          {activeCategoryParam === 'all' ? (
            <span className="text-amber-900 font-medium">Portfolio &amp; Case Studies</span>
          ) : (
            <>
              <Link to="/projects" className="hover:text-stone-950 transition-colors">Projects</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-amber-900 font-medium">{currentCategoryMeta.shortLabel}</span>
            </>
          )}
        </nav>
      </div>

      {/* Header & Editorial Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <EditorialHero 
          subtitle={
            <>
              <span>Archive & Selected Works</span>
              <span>/</span>
              <span className="text-amber-800">Case Study Engine</span>
            </>
          }
          title={
            activeCategoryParam === 'all' ? (
              <>Architectural Commissions &amp; Design Studies</>
            ) : (
              currentCategoryMeta.label
            )
          }
          description={currentCategoryMeta.description}
          contentClassName="px-0 sm:px-0 lg:px-0 mb-0" // override container padding since we wrap it
        />

        {/* Category Filter Navigation Bar */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold">
              Filter by Typology
            </span>
            <span className="text-xs text-stone-500 font-sans">
              Showing {filteredProjects.length} of {allProjects.length} projects
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategoryParam === cat.slug;
              const targetUrl = cat.slug === 'all' ? '/projects' : `/projects/${cat.slug}`;
              const count = categoryCounts[cat.slug] || 0;

              return (
                <Link
                  key={cat.slug}
                  to={targetUrl}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-stone-950 text-[#FBFBF9] shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-950 border border-stone-200'
                  }`}
                >
                  <span>{cat.shortLabel}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                      isActive ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Secondary Filter & Search Controls */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Project Type Filter: All vs Real Client vs Concept Studies */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 font-medium mr-1 hidden sm:inline">Scope:</span>
            <div className="inline-flex p-1 bg-stone-100 border border-stone-200 text-xs">
              <button
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1 font-medium transition-colors ${
                  selectedType === 'all'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setSelectedType('real')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 font-medium transition-colors ${
                  selectedType === 'real'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <ShieldCheck className="w-3 h-3 text-emerald-700" />
                <span>Client Commissions</span>
              </button>
              <button
                onClick={() => setSelectedType('concept')}
                className={`inline-flex items-center gap-1.5 px-3 py-1 font-medium transition-colors ${
                  selectedType === 'concept'
                    ? 'bg-white text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Lightbulb className="w-3 h-3 text-amber-700" />
                <span>Concept Studies</span>
              </button>
            </div>
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, typology, material..."
                className="w-full bg-white border border-stone-200 pl-8 pr-7 py-1.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* View Switcher: Grid vs Technical Index */}
            <div className="flex items-center border border-stone-200 bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'grid' ? 'bg-stone-950 text-white' : 'text-stone-500 hover:text-stone-950'
                }`}
                title="Editorial Grid View"
                aria-label="Switch to Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('index')}
                className={`p-1.5 transition-colors ${
                  viewMode === 'index' ? 'bg-stone-950 text-white' : 'text-stone-500 hover:text-stone-950'
                }`}
                title="Architectural Index Register"
                aria-label="Switch to Index Register"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white border border-stone-200 p-8 space-y-4">
            <SlidersHorizontal className="w-8 h-8 text-stone-300 mx-auto" />
            <h3 className="font-editorial text-2xl text-stone-800 font-medium">
              No matching projects found
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto">
              We could not find any projects matching your current filters. Try resetting the typology or search criteria.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                }}
                className="bg-stone-950 text-white px-5 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          /* Editorial Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project) => {
              const projectDetailUrl = `/projects/${project.category}/${project.slug}`;
              const isConcept = project.projectType === 'concept';

              return (
                <article
                  key={project.id || project.slug}
                  className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Hero Thumbnail */}
                    <Link
                      to={projectDetailUrl}
                      className="relative aspect-16/10 bg-stone-200 overflow-hidden block"
                      aria-label={`Inspect case study: ${project.title}`}
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        width={1200}
                        height={750}
                        loading="lazy"
                        className="img-editorial w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
                        <span className="bg-stone-950/85 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2.5 py-1 font-sans">
                          {project.categoryLabel}
                        </span>

                        {isConcept ? (
                          <span className="bg-amber-900/90 text-amber-100 text-[9px] uppercase tracking-wider px-2 py-1 font-semibold flex items-center gap-1">
                            <Lightbulb className="w-2.5 h-2.5" />
                            <span>Design Study</span>
                          </span>
                        ) : (
                          <span className="bg-stone-900/80 text-stone-200 text-[9px] uppercase tracking-wider px-2 py-1 font-semibold flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5 text-emerald-400" />
                            <span>Built Commission</span>
                          </span>
                        )}
                      </div>

                      {/* Status / Year Badge */}
                      <div className="absolute bottom-3 right-3 bg-white/95 text-stone-900 text-[10px] px-2.5 py-1 font-mono tracking-wider shadow-xs">
                        {project.year} · {project.area}
                      </div>
                    </Link>

                    {/* Metadata & Title */}
                    <div className="p-8 space-y-3">
                      <div className="flex items-center gap-3 text-xs text-stone-500 font-sans">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>{project.location}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>{project.builtUpArea || project.area}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-stone-400 shrink-0" />
                          <span>{project.year}</span>
                        </span>
                      </div>

                      <div className="text-[11px] uppercase tracking-wider text-amber-900/80 font-medium">
                        {project.typology}
                      </div>

                      <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium group-hover:text-amber-800 transition-colors">
                        <Link to={projectDetailUrl}>
                          {project.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                        {project.summary || project.brief}
                      </p>

                      {/* Scope Tags */}
                      {project.scopeOfWork && project.scopeOfWork.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {project.scopeOfWork.slice(0, 3).map((scope, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 border border-stone-200"
                            >
                              {scope}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="pt-3 text-xs text-stone-700 font-medium border-t border-stone-100">
                        <span className="text-stone-400">Leadership: </span>
                        <span>{project.lead}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="p-8 pt-0">
                    <Link
                      to={projectDetailUrl}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-4 border-t border-stone-100 transition-colors"
                    >
                      <span>Explore Case Study &amp; Drawings</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Technical Index / Register Layout */
          <div className="bg-white border border-stone-200 overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-stone-50 border-b border-stone-200 text-[11px] uppercase tracking-wider text-stone-500 font-semibold">
                <tr>
                  <th className="py-3.5 px-4">Ref Code</th>
                  <th className="py-3.5 px-4">Project Title &amp; Typology</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Built Area</th>
                  <th className="py-3.5 px-4">Year</th>
                  <th className="py-3.5 px-4">Scope / Type</th>
                  <th className="py-3.5 px-4 text-right">Case Study</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {filteredProjects.map((project) => {
                  const projectDetailUrl = `/projects/${project.category}/${project.slug}`;
                  const isConcept = project.projectType === 'concept';

                  return (
                    <tr key={project.id || project.slug} className="hover:bg-stone-50/80 transition-colors">
                      <td className="py-4 px-4 font-mono text-stone-400 text-[11px]">
                        {project.id || 'DP-ARCH'}
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          to={projectDetailUrl}
                          className="font-editorial text-base text-stone-950 font-medium hover:text-amber-800 transition-colors block"
                        >
                          {project.title}
                        </Link>
                        <span className="text-[11px] text-stone-500">
                          {project.typology}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-stone-700">
                        {project.categoryLabel}
                      </td>
                      <td className="py-4 px-4 text-stone-700">
                        {project.location}
                      </td>
                      <td className="py-4 px-4 text-stone-700 font-mono text-[11px]">
                        {project.builtUpArea || project.area}
                      </td>
                      <td className="py-4 px-4 text-stone-700 font-mono text-[11px]">
                        {project.year}
                      </td>
                      <td className="py-4 px-4">
                        {isConcept ? (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 border border-amber-200">
                            <Lightbulb className="w-2.5 h-2.5" />
                            <span>Design Study</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-semibold text-emerald-900 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            <span>Client Commission</span>
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Link
                          to={projectDetailUrl}
                          className="inline-flex items-center gap-1 text-xs uppercase font-semibold text-stone-900 hover:text-amber-800 transition-colors"
                        >
                          <span>Review</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Conceptual & Client Integrity Statement Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-stone-100 border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="text-[11px] uppercase tracking-wider text-amber-900 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-800" />
              <span>Architectural Integrity &amp; Client Privacy Standards</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Design Plus upholds strict professional confidentiality. Built client commissions are published with general client classifications (e.g. &ldquo;Private Residential Client&rdquo;) in accordance with privacy covenants. Conceptual projects are explicitly demarcated as Design Studies, preserving transparent distinction between speculative typological research and executed site commissions.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 bg-stone-950 text-[#FBFBF9] hover:bg-stone-800 px-6 py-3 text-xs uppercase tracking-wider font-semibold transition-colors text-center"
          >
            Commission Studio Inquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
