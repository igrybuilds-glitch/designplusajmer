import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  fetchAllCMSProjects, 
  saveCMSProject, 
  CMSProject 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Sparkles, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Image as ImageIcon,
  Layers,
  FileText,
  X
} from "lucide-react";

export const AdminProjectEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { adminUser } = useAdminAuth();

  const isNew = !id || id === "new";

  const [project, setProject] = useState<Partial<CMSProject>>({
    title: "",
    slug: "",
    category: "residential",
    status: "Completed",
    location: "Panchsheel Nagar, Ajmer",
    city: "Ajmer",
    state: "Rajasthan",
    area: "3,500 sq.ft",
    plotSize: "40x80 ft",
    builtUpArea: "3,500 sq.ft",
    floors: "G+1",
    year: "2026",
    services: ["Architectural Design", "Structural Detailing"],
    shortDescription: "",
    projectBrief: "",
    designChallenge: "",
    designApproach: "",
    planningDetails: "",
    elevationDetails: "",
    interiorDetails: "",
    structuralDetails: "",
    materialDirection: "",
    sustainabilityFeatures: "",
    outcome: "",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    featured: false,
    isConcept: false,
    seoTitle: "",
    seoDescription: "",
    canonical: "",
    robotsSetting: "index, follow",
    isPublished: true
  });

  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "media" | "seo">("overview");
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  useEffect(() => {
    if (!isNew && id) {
      loadProject(id);
    }
  }, [id, isNew]);

  const loadProject = async (projId: string) => {
    const list = await fetchAllCMSProjects();
    const found = list.find(p => p.id === projId);
    if (found) {
      setProject(found);
    } else {
      setErrorMessage(`Project with identifier "${projId}" could not be located.`);
    }
  };

  const handleTitleChange = (val: string) => {
    const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    setProject(prev => ({
      ...prev,
      title: val,
      slug: prev?.slug ? prev.slug : autoSlug,
      seoTitle: `${val} | Design Plus Architecture Ajmer`
    }));
  };

  const handleStatusChange = (val: "Completed" | "Ongoing" | "Concept" | "Design Study") => {
    const isConceptVal = val === "Concept" || val === "Design Study";
    setProject(prev => ({
      ...prev,
      status: val,
      isConcept: isConceptVal
    }));
  };

  const handleSave = async (publishStatus?: boolean) => {
    if (!project.title || !project.title.trim()) {
      setErrorMessage("Project title is required.");
      setActiveTab("overview");
      return;
    }

    setErrorMessage(null);
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      const payload: Partial<CMSProject> & { title: string } = {
        ...project,
        title: project.title,
        isPublished: publishStatus !== undefined ? publishStatus : project.isPublished
      };

      const saved = await saveCMSProject(payload, adminUser?.email || "admin");
      setProject(saved);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      if (isNew) {
        navigate(`/admin/projects/${saved.id}`, { replace: true });
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to save project.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-stone-800">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/projects"
            className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="text-[11px] font-mono uppercase text-amber-400">
              {isNew ? "Create New Portfolio Item" : `Project Editor • ID: ${project.id}`}
            </div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              {project.title || "Untitled Project"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setShowPreviewModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono font-medium transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Preview</span>
          </button>

          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave(false)}
            className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-mono font-medium transition-colors"
          >
            Save Draft
          </button>

          <button
            type="button"
            disabled={isSaving}
            onClick={() => handleSave(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{isSaving ? "Saving..." : "Publish Project"}</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {saveSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Project changes successfully synchronized and saved to database!</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2 font-mono">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-2 text-xs font-mono">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "overview" 
              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold" 
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>1. Identity &amp; Status</span>
        </button>

        <button
          onClick={() => setActiveTab("technical")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "technical" 
              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold" 
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>2. Architectural Details</span>
        </button>

        <button
          onClick={() => setActiveTab("media")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "media" 
              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold" 
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>3. Media &amp; Photos</span>
        </button>

        <button
          onClick={() => setActiveTab("seo")}
          className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === "seo" 
              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold" 
              : "text-stone-400 hover:text-stone-200"
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>4. SEO &amp; Indexing</span>
        </button>
      </div>

      {/* Tab 1: Identity & Status */}
      {activeTab === "overview" && (
        <div className="space-y-6 bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Project Title <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={project.title || ""}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g., The Monolithic Courtyard House"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                URL Slug
              </label>
              <div className="flex items-center rounded-xl bg-stone-950 border border-stone-800 overflow-hidden">
                <span className="px-3 text-xs font-mono text-stone-400 bg-stone-900 border-r border-stone-800">
                  /projects/{project.category}/
                </span>
                <input
                  type="text"
                  value={project.slug || ""}
                  onChange={(e) => setProject({ ...project, slug: e.target.value })}
                  placeholder="the-monolithic-courtyard-house"
                  className="w-full px-3 py-2.5 bg-transparent text-stone-100 text-xs font-mono focus:outline-none"
                />
              </div>
            </div>

            {/* Typology / Category */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Typology Category
              </label>
              <select
                value={project.category || "residential"}
                onChange={(e) => setProject({ ...project, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-mono focus:outline-none focus:border-amber-500"
              >
                <option value="residential">Residential Architecture</option>
                <option value="commercial">Commercial &amp; Retail Complexes</option>
                <option value="interiors">Bespoke Interior Architecture</option>
                <option value="structural">Structural Engineering &amp; Foundations</option>
                <option value="institutional">Institutional &amp; Civic Design</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Project Status &amp; Realization Stage
              </label>
              <select
                value={project.status || "Completed"}
                onChange={(e) => handleStatusChange(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-mono focus:outline-none focus:border-amber-500"
              >
                <option value="Completed">Completed Built Project</option>
                <option value="Ongoing">Under Construction / Ongoing</option>
                <option value="Concept">Concept Study (R&amp;D Typology)</option>
                <option value="Design Study">Design Study &amp; Structural Feasibility</option>
              </select>
            </div>

            {/* Location & City */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                City / Region
              </label>
              <input
                type="text"
                value={project.city || "Ajmer"}
                onChange={(e) => setProject({ ...project, city: e.target.value })}
                placeholder="Ajmer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Specific Location / Neighborhood
              </label>
              <input
                type="text"
                value={project.location || ""}
                onChange={(e) => setProject({ ...project, location: e.target.value })}
                placeholder="Panchsheel Nagar, B Block, Ajmer"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Built-up Area & Plot Size */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Built-Up Area
              </label>
              <input
                type="text"
                value={project.builtUpArea || project.area || ""}
                onChange={(e) => setProject({ ...project, builtUpArea: e.target.value, area: e.target.value })}
                placeholder="3,800 sq.ft"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Plot Dimensions / Site Area
              </label>
              <input
                type="text"
                value={project.plotSize || ""}
                onChange={(e) => setProject({ ...project, plotSize: e.target.value })}
                placeholder="40 x 80 ft (3,200 sq.ft site)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Year & Floors */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Completion Year
              </label>
              <input
                type="text"
                value={project.year || "2026"}
                onChange={(e) => setProject({ ...project, year: e.target.value })}
                placeholder="2026"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Vertical Floors / Levels
              </label>
              <input
                type="text"
                value={project.floors || "G+1"}
                onChange={(e) => setProject({ ...project, floors: e.target.value })}
                placeholder="G+2 Floors with Rooftop Pergola"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="pt-4 border-t border-stone-800 flex flex-wrap gap-6 text-xs font-mono">
            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={!!project.featured}
                onChange={(e) => setProject({ ...project, featured: e.target.checked })}
                className="rounded bg-stone-950 border-stone-800 text-amber-500 focus:ring-0"
              />
              <span className="text-stone-300">Feature on Homepage Editorial Hero Grid</span>
            </label>

            <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={!!project.isConcept}
                onChange={(e) => setProject({ ...project, isConcept: e.target.checked })}
                className="rounded bg-stone-950 border-stone-800 text-purple-500 focus:ring-0"
              />
              <span className="text-purple-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explicitly Mark as CONCEPT STUDY / R&amp;D</span>
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Tab 2: Technical & Architectural Details */}
      {activeTab === "technical" && (
        <div className="space-y-6 bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <div>
            <label className="block text-xs font-mono text-stone-300 mb-2">
              Short Description / Meta Summary
            </label>
            <textarea
              rows={2}
              value={project.shortDescription || ""}
              onChange={(e) => setProject({ ...project, shortDescription: e.target.value })}
              placeholder="Brief summary used in cards and search result snippets..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-stone-300 mb-2">
              Comprehensive Architectural Project Brief
            </label>
            <textarea
              rows={4}
              value={project.projectBrief || ""}
              onChange={(e) => setProject({ ...project, projectBrief: e.target.value })}
              placeholder="In-depth design philosophy, spatial hierarchy, and client programmatic requirements..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Design Challenge
              </label>
              <textarea
                rows={3}
                value={project.designChallenge || ""}
                onChange={(e) => setProject({ ...project, designChallenge: e.target.value })}
                placeholder="ADA setbacks, thermal gain on west facade, rocky subsoil..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Design Approach &amp; Solution
              </label>
              <textarea
                rows={3}
                value={project.designApproach || ""}
                onChange={(e) => setProject({ ...project, designApproach: e.target.value })}
                placeholder="Courtyard microclimate, indigenous stone screens, deep overhangs..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Structural Engineering Specifics
              </label>
              <textarea
                rows={3}
                value={project.structuralDetails || ""}
                onChange={(e) => setProject({ ...project, structuralDetails: e.target.value })}
                placeholder="RCC framing, Zone II seismic detailing (IS 1893), column layout, isolated footing..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Material Direction &amp; Specifications
              </label>
              <textarea
                rows={3}
                value={project.materialDirection || ""}
                onChange={(e) => setProject({ ...project, materialDirection: e.target.value })}
                placeholder="Jodhpur pink sandstone, Makrana marble, exposed concrete, teak timber..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Media & Photos */}
      {activeTab === "media" && (
        <div className="space-y-6 bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <div>
            <label className="block text-xs font-mono text-stone-300 mb-2">
              Hero Cover Image URL
            </label>
            <div className="flex gap-4 items-start">
              <input
                type="text"
                value={project.coverImage || ""}
                onChange={(e) => setProject({ ...project, coverImage: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt="Cover preview"
                  className="w-20 h-14 rounded-lg object-cover border border-stone-800"
                />
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-stone-300 mb-2">
              Project Gallery Image URLs (One URL per line)
            </label>
            <textarea
              rows={5}
              value={(project.gallery || []).join("\n")}
              onChange={(e) => setProject({ ...project, gallery: e.target.value.split("\n").filter(Boolean) })}
              placeholder="https://images.unsplash.com/photo-1...&#10;https://images.unsplash.com/photo-2..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      )}

      {/* Tab 4: SEO & Crawling */}
      {activeTab === "seo" && (
        <div className="space-y-6 bg-stone-900 border border-stone-800 rounded-2xl p-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-stone-300">
                SEO Meta Title
              </label>
              <span className="text-[11px] font-mono text-stone-400">
                {(project.seoTitle || "").length} / 60 characters
              </span>
            </div>
            <input
              type="text"
              value={project.seoTitle || ""}
              onChange={(e) => setProject({ ...project, seoTitle: e.target.value })}
              placeholder="e.g., Luxury Residential Villa in Panchsheel Nagar | Design Plus Ajmer"
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-mono text-stone-300">
                SEO Meta Description
              </label>
              <span className="text-[11px] font-mono text-stone-400">
                {(project.seoDescription || "").length} / 155 characters
              </span>
            </div>
            <textarea
              rows={3}
              value={project.seoDescription || ""}
              onChange={(e) => setProject({ ...project, seoDescription: e.target.value })}
              placeholder="Architectural design and structural engineering details by Design Plus Ajmer..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Canonical URL
              </label>
              <input
                type="text"
                value={project.canonical || ""}
                onChange={(e) => setProject({ ...project, canonical: e.target.value })}
                placeholder="https://designplusajmer.in/projects/..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Robots Directive
              </label>
              <select
                value={project.robotsSetting || "index, follow"}
                onChange={(e) => setProject({ ...project, robotsSetting: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-mono focus:outline-none focus:border-amber-500"
              >
                <option value="index, follow">index, follow (Recommended: Visible to Google)</option>
                <option value="noindex, follow">noindex, follow (Omit from Google results)</option>
                <option value="noindex, nofollow">noindex, nofollow (Private / Internal)</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Live Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-amber-400" />
                <h3 className="font-serif text-base font-bold text-stone-100">
                  Public Website Layout Preview
                </h3>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="p-1 text-stone-400 hover:text-stone-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6">
              {/* Card Preview */}
              <div className="border border-stone-800 rounded-xl overflow-hidden bg-stone-950 max-w-sm mx-auto shadow-xl">
                <div className="relative aspect-[16/10]">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.isConcept ? (
                    <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/90 text-purple-200 border border-purple-500 font-semibold">
                      CONCEPT STUDY
                    </span>
                  ) : (
                    <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900/90 text-amber-300 border border-amber-500/40">
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-[11px] font-mono text-amber-400 uppercase">
                    {project.city} • {project.builtUpArea}
                  </div>
                  <h4 className="font-serif font-bold text-stone-100 mt-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-stone-400 line-clamp-2 mt-2">
                    {project.shortDescription || project.projectBrief}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950/80 flex justify-end">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-mono text-stone-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
