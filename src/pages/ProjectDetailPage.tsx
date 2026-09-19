import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Calendar, 
  Maximize2, 
  UserCheck, 
  Compass, 
  Layers, 
  Lightbulb, 
  FileText, 
  ChevronRight, 
  ZoomIn, 
  X, 
  ExternalLink, 
  Building2, 
  Sparkles,
  Sun,
  Leaf,
  Bookmark,
  Film
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { getProjectBySlug, getAdjacentProjects, getRelatedProjects } from '../data/projectsData';
import { ArchitecturalDrawing } from '../types';
import { useAuth } from '../context/AuthContext';
import { VeoStudioModal } from '../components/VeoStudioModal';

interface ProjectDetailPageProps {
  onOpenConsultation?: () => void;
}

export function ProjectDetailPage({ onOpenConsultation }: ProjectDetailPageProps) {
  const { category, slug, param } = useParams<{ category?: string; slug?: string; param?: string }>();
  const { toggleBookmark, isBookmarked } = useAuth();
  
  // Resolve target slug from route parameters
  const targetSlug = slug || param || '';
  const project = getProjectBySlug(targetSlug);

  const [activeDrawingIndex, setActiveDrawingIndex] = useState(0);
  const [selectedDrawingForZoom, setSelectedDrawingForZoom] = useState<ArchitecturalDrawing | null>(null);
  const [isVeoOpen, setIsVeoOpen] = useState(false);

  // If project is not found, redirect to projects index
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const bookmarked = isBookmarked(project.id);

  // Canonical redirect check: if category is present and differs from canonical project category, redirect
  if (category && category !== project.category && !(category === 'interior' && project.category === 'interiors')) {
    return <Navigate to={`/projects/${project.category}/${project.slug}`} replace />;
  }

  const { prev: prevProject, next: nextProject } = getAdjacentProjects(project.slug);
  const relatedProjects = getRelatedProjects(project, 2);

  const isConcept = project.projectType === 'concept';
  const drawings = project.drawingsAndPlans || [];
  const currentDrawing = drawings[activeDrawingIndex] || drawings[0];
  const canonicalUrl = `https://designplusajmer.in/projects/${project.category}/${project.slug}`;

  // Schema.org Structured Data
  const schemaOrgJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalProject',
    name: project.title,
    description: project.summary || project.brief,
    image: [project.heroImage, ...(project.gallery || [])],
    creator: {
      '@type': 'Organization',
      name: 'Design Plus',
      url: 'https://designplusajmer.in',
      founder: {
        '@type': 'Person',
        name: 'Er. Sudhir Soni',
        jobTitle: 'Chartered Engineer & Principal Structural Engineer'
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: project.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.city,
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      }
    },
    dateCreated: project.year,
    category: project.categoryLabel
  };

  return (
    <main id="project-detail-page" className="pt-28 pb-24">
      <SEOHead
        title={project.seo?.metaTitle || `${project.title} | ${project.categoryLabel} by Design Plus`}
        description={project.seo?.metaDescription || `${project.summary} Located in ${project.location}. Principals: ${project.lead}.`}
        image={project.heroImage}
        canonical={canonicalUrl}
        schema={schemaOrgJSONLD}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumbs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-xs font-sans text-stone-500">
          <li>
            <Link to="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-3 h-3 text-stone-300" /></li>
          <li>
            <Link to="/projects" className="hover:text-stone-900 transition-colors">
              Projects
            </Link>
          </li>
          <li><ChevronRight className="w-3 h-3 text-stone-300" /></li>
          <li>
            <Link 
              to={`/projects/${project.category}`} 
              className="hover:text-stone-900 transition-colors capitalize"
            >
              {project.categoryLabel}
            </Link>
          </li>
          <li><ChevronRight className="w-3 h-3 text-stone-300" /></li>
          <li className="text-stone-900 font-medium truncate max-w-xs sm:max-w-sm">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Concept Study Disclosure Notice (if concept) */}
      {isConcept && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="p-6 bg-amber-50/95 border-2 border-amber-300/80 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-amber-200/80 text-amber-900 shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-widest font-bold text-amber-950">
                    CONCEPT PROJECT · DESIGN STUDY
                  </span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-amber-200 text-amber-900 font-semibold border border-amber-300">
                    Typological Research
                  </span>
                </div>
                <p className="text-xs text-amber-900/90 leading-relaxed max-w-3xl font-sans">
                  This work is an internal portfolio design study and typological investigation created by Design Plus. It explores climate-responsive architecture, regional materiality, and structural concepts. <strong>This is not an executed client commission or completed construction project.</strong>
                </p>
              </div>
            </div>
            <div className="shrink-0 flex sm:flex-col items-end gap-1">
              <span className="text-[11px] uppercase font-bold tracking-widest text-amber-900 bg-amber-200/90 px-3 py-1.5 border border-amber-400/60 font-mono">
                DESIGN STUDY
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Project Title, Typology & Executive Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-800 font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
              {project.typology}
            </span>
            {isConcept ? (
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 border border-amber-300">
                <Lightbulb className="w-3 h-3" />
                <span>CONCEPT PROJECT · DESIGN STUDY</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 border border-emerald-300">
                <ShieldCheck className="w-3 h-3" />
                <span>Built Commission · Certified</span>
              </span>
            )}
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-stone-950 font-normal leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-editorial italic max-w-4xl">
            {project.summary}
          </p>

          {/* Interactive Actions: Bookmark & Veo 3D Animation */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => toggleBookmark({
                id: project.id,
                title: project.title,
                category: project.category,
                imageUrl: project.heroImage
              })}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs border transition-all ${
                bookmarked
                  ? "bg-stone-900 text-amber-200 border-stone-900 shadow-xs"
                  : "bg-white text-stone-800 border-stone-300 hover:border-stone-500"
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-amber-300 text-amber-300" : "text-stone-600"}`} />
              <span>{bookmarked ? "Saved to Client Portal" : "Bookmark Project"}</span>
            </button>

            <button
              onClick={() => setIsVeoOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs bg-purple-900 hover:bg-purple-800 text-purple-100 shadow-xs transition-colors"
            >
              <Film className="w-4 h-4 text-purple-300" />
              <span>Animate with Veo (veo-3.1-fast-generate-preview)</span>
            </button>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xs bg-stone-900 hover:bg-stone-800 text-[#FBFBF9] transition-colors"
              >
                <span>Consult on this Typology</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Project Metadata Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 pt-8 mt-8 border-y border-stone-200 text-xs">
          <div>
            <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-1 font-semibold">Location</div>
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">{project.city}, Rajasthan</div>
          </div>

          <div>
            <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-1 font-semibold">Built-Up Area &amp; Floors</div>
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span>{project.builtUpArea || project.area}</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              {project.floors ? project.floors : (project.siteArea ? `Plot: ${project.siteArea}` : `${project.city}, Rajasthan`)}
            </div>
          </div>

          <div>
            <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-1 font-semibold">Timeline / Status</div>
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span>{project.year}</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5 capitalize">
              {isConcept ? 'Design Study' : project.status.replace('-', ' ')}
            </div>
          </div>

          <div>
            <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-1 font-semibold">Project Classification</div>
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span className="line-clamp-1">{project.clientType}</span>
            </div>
            <div className="text-[11px] text-stone-500 mt-0.5">
              {isConcept ? 'Internal Design Inquiry' : 'Covenant Protected'}
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-1 font-semibold">Practice Leadership</div>
            <div className="font-semibold text-stone-900 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-stone-500 shrink-0" />
              <span>{project.lead}</span>
            </div>
            <div className="text-[11px] text-amber-800 mt-0.5">
              {isConcept ? 'Theoretical Feasibility: Er. Sudhir Soni (Chartered Engineer)' : 'Chartered Stability Stamped: Er. Sudhir Soni'}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Architectural Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <figure className="relative aspect-16/9 bg-stone-200 overflow-hidden border border-stone-200">
          <img
            src={project.heroImage}
            alt={project.heroImageDetails?.alt || project.title}
            width={1800}
            height={1012}
            className="w-full h-full object-cover object-center"
          />
          {project.heroImageDetails?.caption && (
            <figcaption className="absolute bottom-0 inset-x-0 bg-stone-950/80 backdrop-blur-xs text-stone-200 text-xs px-6 py-3 font-sans">
              {project.heroImageDetails.caption}
            </figcaption>
          )}
        </figure>
      </section>

      {/* Case Study Core Narrative & Technical Specifications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Case Study Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {isConcept ? (
              /* Concept Study Speculative Architecture Framework */
              <>
                {/* 01. Design Objective */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                    <FileText className="w-3.5 h-3.5 text-amber-800" />
                    <span>01. Design Objective &amp; Typological Hypothesis</span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                    Architectural Objective
                  </h2>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {project.designObjective || project.brief || project.summary}
                  </p>
                </div>

                {/* 02. Design Approach */}
                <div className="space-y-4 pt-8 border-t border-stone-200">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                    <Compass className="w-3.5 h-3.5 text-amber-800" />
                    <span>02. Design Approach &amp; Climate Strategy</span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                    Architectural Methodology
                  </h2>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {project.designApproach || project.approach}
                  </p>
                </div>

                {/* 03. Spatial Strategy */}
                {project.spatialStrategy && (
                  <div className="space-y-4 pt-8 border-t border-stone-200">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                      <Layers className="w-3.5 h-3.5 text-amber-800" />
                      <span>03. Spatial Strategy &amp; Volumetric Planning</span>
                    </div>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                      Circulation, Volume &amp; Void Organization
                    </h2>
                    <p className="text-stone-700 text-base leading-relaxed">
                      {project.spatialStrategy}
                    </p>
                  </div>
                )}

                {/* 04. Material Direction */}
                {project.materialDirection && (
                  <div className="space-y-4 pt-8 border-t border-stone-200">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-amber-800" />
                      <span>04. Material Direction &amp; Regional Tectonics</span>
                    </div>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                      Material Tactility &amp; Thermal Mass
                    </h2>
                    <p className="text-stone-700 text-base leading-relaxed">
                      {project.materialDirection}
                    </p>
                  </div>
                )}

                {/* 05. Lighting Strategy */}
                {project.lightingStrategy && (
                  <div className="space-y-4 pt-8 border-t border-stone-200">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                      <Sun className="w-3.5 h-3.5 text-amber-800" />
                      <span>05. Lighting Strategy &amp; Solar Penetration</span>
                    </div>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                      Daylighting &amp; Nocturnal Illumination
                    </h2>
                    <p className="text-stone-700 text-base leading-relaxed">
                      {project.lightingStrategy}
                    </p>
                  </div>
                )}

                {/* 06. Sustainability Considerations */}
                {((project.sustainabilityConsiderations && project.sustainabilityConsiderations.length > 0) || (project.sustainabilityFeatures && project.sustainabilityFeatures.length > 0)) && (
                  <div className="space-y-4 pt-8 border-t border-stone-200">
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                      <Leaf className="w-3.5 h-3.5 text-emerald-800" />
                      <span>06. Sustainability &amp; Passive Microclimate Adaptation</span>
                    </div>
                    <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                      Ecological &amp; Environmental Feasibility
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {(project.sustainabilityConsiderations || project.sustainabilityFeatures || []).map((sust, sIdx) => (
                        <div key={sIdx} className="p-4 bg-stone-50 border border-stone-200/80 text-xs text-stone-800 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{sust}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Standard Built Client Commission Framework */
              <>
                {/* 01. The Client Brief */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                    <FileText className="w-3.5 h-3.5 text-amber-800" />
                    <span>01. The Architectural Brief &amp; Origin</span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                    Origins &amp; Functional Objectives
                  </h2>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {project.brief || project.summary}
                  </p>
                </div>

                {/* 02. Contextual & Environmental Challenges */}
                <div className="space-y-4 pt-8 border-t border-stone-200">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                    <Compass className="w-3.5 h-3.5 text-amber-800" />
                    <span>02. Contextual, Climatic &amp; Byelaw Challenges</span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                    Environmental &amp; Structural Constraints
                  </h2>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* 03. Architectural Approach & Spatial Organization */}
                <div className="space-y-4 pt-8 border-t border-stone-200">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-900 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-amber-800" />
                    <span>03. Spatial Organization &amp; Architectural Approach</span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-medium">
                    Design Methodology &amp; Solar Orientation
                  </h2>
                  <p className="text-stone-700 text-base leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </>
            )}

            {/* 04. Chartered Structural Engineering Deep-Dive */}
            <div className="p-8 bg-stone-900 text-stone-100 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>04. Chartered Structural Engineering Analysis</span>
              </div>
              
              <h2 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                Empirical Calculations &amp; Structural Physics
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {project.structuralEngineering}
              </p>

              {project.structuralDetails && (
                <div className="pt-4 border-t border-stone-800 space-y-3 text-xs">
                  <div>
                    <span className="text-stone-400 uppercase tracking-widest text-[10px]">Framing System: </span>
                    <span className="text-stone-200 font-medium">{project.structuralDetails.framingSystem}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 uppercase tracking-widest text-[10px]">Foundation Type: </span>
                    <span className="text-stone-200 font-medium">{project.structuralDetails.foundationType}</span>
                  </div>

                  <div className="pt-2">
                    <div className="text-stone-400 uppercase tracking-widest text-[10px] mb-2">Technical Structural Parameters:</div>
                    <ul className="space-y-1.5 text-stone-300">
                      {project.structuralDetails.specialTechnicalFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.structuralDetails.charteredCertificationNote && (
                    <div className="pt-3 border-t border-stone-800/80 text-[11px] text-amber-300/90 font-mono">
                      {project.structuralDetails.charteredCertificationNote}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Materiality Matrix & Climate Adaptations */}
            {project.materialsUsed && project.materialsUsed.length > 0 && (
              <div className="space-y-4 pt-8 border-t border-stone-200">
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Materiality &amp; Architectural Tactility
                </h3>
                <p className="text-xs sm:text-sm text-stone-600">
                  Regional stone, thermal-break joinery, and structural compounds calibrated for durability in Rajasthan’s climate.
                </p>

                <div className="border border-stone-200 overflow-hidden bg-white">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-500 uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Material Specification</th>
                        <th className="py-2.5 px-4 font-semibold">Architectural Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                      {project.materialsUsed.map((mat, mIdx) => (
                        <tr key={mIdx} className="hover:bg-stone-50/50">
                          <td className="py-3 px-4 font-medium text-stone-900">{mat.name}</td>
                          <td className="py-3 px-4 text-stone-600">{mat.application}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Architectural Drawings, Floor Plans & Elevation Blueprints */}
            {drawings.length > 0 && (
              <div className="space-y-4 pt-8 border-t border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                      Technical Documentation
                    </div>
                    <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                      Architectural Blueprints &amp; Diagrams
                    </h3>
                  </div>

                  {/* Tab Selector */}
                  <div className="flex flex-wrap gap-1 bg-stone-100 p-1 border border-stone-200 text-xs">
                    {drawings.map((drw, dIdx) => (
                      <button
                        key={drw.id || dIdx}
                        onClick={() => setActiveDrawingIndex(dIdx)}
                        className={`px-3 py-1 font-medium transition-colors ${
                          activeDrawingIndex === dIdx
                            ? 'bg-white text-stone-950 shadow-xs'
                            : 'text-stone-600 hover:text-stone-950'
                        }`}
                      >
                        {drw.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Drawing Viewer */}
                <div className="border border-stone-200 bg-white p-4 space-y-3">
                  <div className="relative aspect-16/10 bg-stone-100 overflow-hidden border border-stone-200 group">
                    <img
                      src={currentDrawing.imageUrl}
                      alt={currentDrawing.title}
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover object-center"
                    />

                    <button
                      onClick={() => setSelectedDrawingForZoom(currentDrawing)}
                      className="absolute bottom-3 right-3 bg-stone-950/90 hover:bg-stone-950 text-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
                      title="Inspect full blueprint in zoom lightbox"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect Drawing</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-600">
                    <div className="font-medium text-stone-900">{currentDrawing.title}</div>
                    <div className="uppercase tracking-widest text-[10px] text-stone-400 font-mono">
                      Type: {currentDrawing.type}
                    </div>
                  </div>
                  {currentDrawing.caption && (
                    <p className="text-xs text-stone-500 leading-relaxed font-sans">
                      {currentDrawing.caption}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Curated Editorial Photo Gallery */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4 pt-8 border-t border-stone-200">
                <div className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                  Visual Documentation
                </div>
                <h3 className="font-editorial text-2xl text-stone-950 font-medium">
                  Curated Project Gallery
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((imgItem, gIdx) => (
                    <figure
                      key={gIdx}
                      className={`bg-white border border-stone-200 overflow-hidden ${
                        imgItem.aspect === 'tall' ? 'sm:row-span-2' : ''
                      }`}
                    >
                      <div className="relative aspect-16/10 bg-stone-100 overflow-hidden">
                        <img
                          src={imgItem.url}
                          alt={imgItem.alt}
                          width={1000}
                          height={625}
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      {imgItem.caption && (
                        <figcaption className="p-3 text-[11px] text-stone-600 leading-relaxed font-sans">
                          {imgItem.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Highlights & Inquiries (4 cols) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Scope of Work & Key Features Card */}
            <div className="p-8 bg-white border border-stone-200 space-y-6">
              <h3 className="font-editorial text-xl text-stone-950 font-semibold border-b border-stone-100 pb-3">
                {isConcept ? 'Design Study Parameters' : 'Architectural Highlights'}
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Scope of Work Tags */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <div className="text-stone-400 uppercase tracking-widest text-[10px] font-semibold">
                  {isConcept ? 'Disciplines Explored:' : 'Disciplines Executed:'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.scopeOfWork.map((scope, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] bg-stone-100 text-stone-700 px-2.5 py-1 border border-stone-200"
                    >
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inquire Button */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-stone-950 hover:bg-stone-800 text-[#FBFBF9] py-3 text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isConcept ? 'Discuss Similar Typology for Your Site' : 'Inquire for Similar Project'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="text-[11px] text-stone-500 text-center">
                  Direct consultation with Er. Sudhir Soni &amp; Ar. Vipul Verma
                </div>
              </div>
            </div>

            {/* Related Services Links */}
            {project.relatedServices && project.relatedServices.length > 0 && (
              <div className="p-6 bg-stone-50 border border-stone-200 space-y-3">
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  Associated Practice Services
                </div>
                <div className="space-y-2">
                  {project.relatedServices.map((svcSlug) => (
                    <Link
                      key={svcSlug}
                      to={`/services/${svcSlug}`}
                      className="flex items-center justify-between text-xs font-medium text-stone-800 hover:text-amber-800 py-1 border-b border-stone-200/60 last:border-0"
                    >
                      <span className="capitalize">{svcSlug.replace(/-/g, ' ')}</span>
                      <ArrowUpRight className="w-3 h-3 text-stone-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Regional Location Context */}
            {project.relatedLocations && project.relatedLocations.length > 0 && (
              <div className="p-6 bg-stone-50 border border-stone-200 space-y-3">
                <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold">
                  Regional Location Practice
                </div>
                <div className="space-y-2">
                  {project.relatedLocations.map((locSlug) => (
                    <Link
                      key={locSlug}
                      to={`/locations/${locSlug}`}
                      className="flex items-center justify-between text-xs font-medium text-stone-800 hover:text-amber-800 py-1 border-b border-stone-200/60 last:border-0"
                    >
                      <span className="capitalize">Architecture &amp; Engineering in {locSlug}</span>
                      <MapPin className="w-3 h-3 text-stone-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Next Project Teaser */}
            <Link
              to={`/projects/${nextProject.category}/${nextProject.slug}`}
              className="block p-6 bg-[#F5F5F0] border border-stone-300 hover:border-stone-400 transition-colors group"
            >
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-1 flex items-center justify-between">
                <span>Next Case Study</span>
                <span>&rarr;</span>
              </div>
              <div className="font-editorial text-xl text-stone-950 group-hover:text-amber-800 font-medium">
                {nextProject.title}
              </div>
              <div className="text-xs text-stone-600 mt-1">
                {nextProject.categoryLabel} · {nextProject.location}
              </div>
            </Link>

          </aside>

        </div>
      </section>

      {/* Cross-Linking: Related Projects Grid */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-stone-200 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-semibold mb-1">
                Related Portfolio
              </div>
              <h2 className="font-editorial text-3xl text-stone-950 font-normal">
                Similar Typologies &amp; Commissions
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-stone-900 hover:text-amber-800 transition-colors"
            >
              <span>Explore All Works</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <article
                key={rel.slug}
                className="group bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <Link
                    to={`/projects/${rel.category}/${rel.slug}`}
                    className="relative aspect-16/10 bg-stone-200 overflow-hidden block"
                  >
                    <img
                      src={rel.heroImage}
                      alt={rel.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 text-white text-[10px] uppercase px-2.5 py-1">
                      {rel.categoryLabel}
                    </div>
                  </Link>
                  <div className="p-6 space-y-2">
                    <div className="text-xs text-stone-500 flex items-center gap-2">
                      <span>{rel.location}</span>
                      <span>•</span>
                      <span>{rel.year}</span>
                    </div>
                    <h3 className="font-editorial text-2xl text-stone-950 font-medium group-hover:text-amber-800 transition-colors">
                      <Link to={`/projects/${rel.category}/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/projects/${rel.category}/${rel.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 pt-3 border-t border-stone-100"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Previous / Next Case Study Pagination Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-stone-200">
          <Link
            to={`/projects/${prevProject.category}/${prevProject.slug}`}
            className="p-6 bg-white border border-stone-200 hover:border-stone-400 transition-colors flex items-center gap-4 group"
          >
            <ArrowLeft className="w-5 h-5 text-stone-400 group-hover:text-stone-900 shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Previous Case Study
              </div>
              <div className="font-editorial text-lg text-stone-950 group-hover:text-amber-800 font-medium">
                {prevProject.title}
              </div>
            </div>
          </Link>

          <Link
            to={`/projects/${nextProject.category}/${nextProject.slug}`}
            className="p-6 bg-white border border-stone-200 hover:border-stone-400 transition-colors flex items-center justify-between gap-4 group text-right"
          >
            <div>
              <div className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                Next Case Study
              </div>
              <div className="font-editorial text-lg text-stone-950 group-hover:text-amber-800 font-medium">
                {nextProject.title}
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-stone-900 shrink-0" />
          </Link>
        </div>
      </section>

      {/* Fullscreen Drawing Zoom Modal */}
      {selectedDrawingForZoom && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/90 flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setSelectedDrawingForZoom(null)}
        >
          <div className="flex items-center justify-between text-white pb-4 border-b border-stone-800">
            <div>
              <h4 className="font-editorial text-xl sm:text-2xl">{selectedDrawingForZoom.title}</h4>
              <p className="text-xs text-stone-400">Design Plus Architectural Drawing Archive</p>
            </div>
            <button
              onClick={() => setSelectedDrawingForZoom(null)}
              className="p-2 text-stone-400 hover:text-white transition-colors"
              aria-label="Close drawing viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div 
            className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedDrawingForZoom.imageUrl}
              alt={selectedDrawingForZoom.title}
              className="max-h-[75vh] max-w-full object-contain border border-stone-700 bg-white"
            />
          </div>

          <div className="text-center text-xs text-stone-400 pt-2 border-t border-stone-800">
            {selectedDrawingForZoom.caption || 'High-resolution blueprint for architectural review.'}
          </div>
        </div>
      )}

      {/* Veo 3D Animation Studio for this Project */}
      <VeoStudioModal
        isOpen={isVeoOpen}
        onClose={() => setIsVeoOpen(false)}
        initialImage={project.heroImage}
        initialPrompt={`Cinematic 4K architectural drone flythrough of ${project.title} in ${project.city}, Rajasthan with natural stone textures and ambient golden hour sunlight.`}
      />
    </main>
  );
}
