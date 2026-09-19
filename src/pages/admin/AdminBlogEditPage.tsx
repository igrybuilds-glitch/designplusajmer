import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  fetchAllCMSBlogPosts, 
  saveCMSBlogPost, 
  CMSBlogPost 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  X,
  FileText,
  Search,
  Check,
  AlertTriangle
} from "lucide-react";

export const AdminBlogEditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { adminUser } = useAdminAuth();

  const isNew = !id || id === "new";

  const [post, setPost] = useState<Partial<CMSBlogPost>>({
    title: "",
    slug: "",
    category: "Architecture",
    excerpt: "",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAltText: "",
    author: "Er. Sudhir Soni",
    publicationDate: "March 2026",
    readingTime: "5 min read",
    tags: ["Architecture", "Ajmer", "Structural Design"],
    sources: ["IS 456:2000 Code of Practice", "ADA Unified Building Regulations 2020"],
    seoTitle: "",
    seoDescription: "",
    canonical: "",
    robots: "index, follow",
    isPublished: true
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  useEffect(() => {
    if (!isNew && id) {
      loadPost(id);
    }
  }, [id, isNew]);

  const loadPost = async (postId: string) => {
    const list = await fetchAllCMSBlogPosts();
    const found = list.find(p => p.id === postId);
    if (found) {
      setPost(found);
    } else {
      setErrorMessage(`Article with identifier "${postId}" could not be located.`);
    }
  };

  const handleTitleChange = (val: string) => {
    const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    setPost(prev => ({
      ...prev,
      title: val,
      slug: prev?.slug ? prev.slug : autoSlug,
      seoTitle: `${val} | Design Plus Architecture Journal`
    }));
  };

  const wordCount = (post.content || "").split(/\s+/).filter(Boolean).length;
  const estimatedReadingTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // SEO Health Checks
  const hasGoodTitle = (post.seoTitle || post.title || "").length >= 30 && (post.seoTitle || post.title || "").length <= 65;
  const hasGoodExcerpt = (post.excerpt || "").length >= 100 && (post.excerpt || "").length <= 160;
  const hasSufficientLength = wordCount >= 300;
  const hasAltText = (post.imageAltText || "").length > 5;
  const hasSlug = !!post.slug && post.slug.length > 3;

  const handleSave = async (publishStatus?: boolean) => {
    if (!post.title || !post.title.trim()) {
      setErrorMessage("Article title is required.");
      return;
    }

    setErrorMessage(null);
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      const payload: Partial<CMSBlogPost> & { title: string } = {
        ...post,
        title: post.title,
        readingTime: estimatedReadingTime,
        isPublished: publishStatus !== undefined ? publishStatus : post.isPublished
      };

      const saved = await saveCMSBlogPost(payload, adminUser?.email || "admin");
      setPost(saved);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      if (isNew) {
        navigate(`/admin/blog/${saved.id}`, { replace: true });
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to save article.");
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
            to="/admin/blog"
            className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="text-[11px] font-mono uppercase text-amber-400">
              {isNew ? "Draft New Journal Article" : `Article Editor • ID: ${post.id}`}
            </div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              {post.title || "Untitled Article"}
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
            <span>Preview</span>
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
            <span>{isSaving ? "Saving..." : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2 font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Article updated successfully!</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2 font-mono">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Main Two-Column Editor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Content Editor (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-5">
            {/* Title */}
            <div>
              <label className="block text-xs font-mono text-stone-300 mb-2">
                Article Title <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                required
                value={post.title || ""}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g., Understanding Ajmer Development Authority (ADA) Setback Regulations"
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-base font-serif focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* Category & Slug */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-stone-300 mb-2">
                  Journal Category
                </label>
                <select
                  value={post.category || "Architecture"}
                  onChange={(e) => setPost({ ...post, category: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs font-mono focus:outline-none focus:border-amber-500"
                >
                  <option value="Architecture">Architecture</option>
                  <option value="Residential Design">Residential Design</option>
                  <option value="Commercial Design">Commercial Design</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="House Planning">House Planning</option>
                  <option value="Ajmer">Ajmer Byelaws</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-300 mb-2">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={post.slug || ""}
                  onChange={(e) => setPost({ ...post, slug: e.target.value })}
                  placeholder="understanding-ada-setbacks-ajmer"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono text-stone-300">
                  Article Excerpt / Meta Abstract
                </label>
                <span className={`text-[11px] font-mono ${(post.excerpt || "").length > 160 ? "text-amber-400" : "text-stone-400"}`}>
                  {(post.excerpt || "").length} / 160 chars
                </span>
              </div>
              <textarea
                rows={3}
                value={post.excerpt || ""}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                placeholder="Key takeaways and architectural insights summarizing this paper..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500 leading-relaxed"
              />
            </div>

            {/* Content Body */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-mono text-stone-300">
                  Full Article Body (Markdown Supported)
                </label>
                <div className="text-[11px] font-mono text-stone-400 flex items-center gap-3">
                  <span>{wordCount} words</span>
                  <span>•</span>
                  <span>{estimatedReadingTime}</span>
                </div>
              </div>
              <textarea
                rows={16}
                value={post.content || ""}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
                placeholder="Write technical insights, architectural byelaws explanations, engineering calculations, and code references..."
                className="w-full p-4 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs font-mono focus:outline-none focus:border-amber-500 leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Metadata & SEO (1 col) */}
        <div className="space-y-6">
          {/* SEO Health Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-lg">
            <h3 className="font-serif text-sm font-bold text-stone-100 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Article SEO Validator</span>
            </h3>

            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950/60 border border-stone-800/60">
                <span className="text-stone-300">Meta Title Length</span>
                {hasGoodTitle ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><Check className="w-3.5 h-3.5" /> Good</span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1 text-[11px]"><AlertTriangle className="w-3.5 h-3.5" /> Needs Check</span>
                )}
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950/60 border border-stone-800/60">
                <span className="text-stone-300">Excerpt Length</span>
                {hasGoodExcerpt ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><Check className="w-3.5 h-3.5" /> Optimal</span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1 text-[11px]"><AlertTriangle className="w-3.5 h-3.5" /> Short / Long</span>
                )}
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950/60 border border-stone-800/60">
                <span className="text-stone-300">Word Count (300+ Min)</span>
                {hasSufficientLength ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><Check className="w-3.5 h-3.5" /> {wordCount} Words</span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1 text-[11px]"><AlertTriangle className="w-3.5 h-3.5" /> Thin Content</span>
                )}
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950/60 border border-stone-800/60">
                <span className="text-stone-300">Image Alt Text</span>
                {hasAltText ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px]"><Check className="w-3.5 h-3.5" /> Defined</span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1 text-[11px]"><AlertTriangle className="w-3.5 h-3.5" /> Missing</span>
                )}
              </div>
            </div>
          </div>

          {/* Google Search Snippet Simulation */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-lg">
            <h3 className="font-serif text-sm font-bold text-stone-100 mb-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-400" />
              <span>Google SERP Preview</span>
            </h3>

            <div className="p-3.5 rounded-xl bg-white text-stone-900 shadow-inner font-sans text-xs">
              <div className="flex items-center gap-1 text-[11px] text-stone-600 mb-0.5 truncate">
                <span>designplusajmer.in</span>
                <span>›</span>
                <span>blog</span>
                <span>›</span>
                <span className="truncate">{post.slug || "article-url"}</span>
              </div>
              <div className="text-blue-800 text-sm font-medium hover:underline line-clamp-1 leading-snug">
                {post.seoTitle || post.title || "Article Title Preview on Google"}
              </div>
              <div className="text-stone-600 text-[11px] line-clamp-2 mt-1 leading-relaxed">
                {post.seoDescription || post.excerpt || "Article description preview on Google search engine results pages."}
              </div>
            </div>
          </div>

          {/* Featured Image & Media */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-serif text-sm font-bold text-stone-100">
              Featured Hero Image
            </h3>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-1.5">
                Image URL
              </label>
              <input
                type="text"
                value={post.featuredImage || ""}
                onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt="Preview"
                className="w-full h-32 rounded-xl object-cover border border-stone-800"
              />
            )}

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-1.5">
                Accessibility Alt Text <span className="text-amber-400">*</span>
              </label>
              <input
                type="text"
                value={post.imageAltText || ""}
                onChange={(e) => setPost({ ...post, imageAltText: e.target.value })}
                placeholder="Descriptive explanation of the architectural diagram..."
                className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-300 mb-1.5">
                Author &amp; Principal
              </label>
              <input
                type="text"
                value={post.author || "Er. Sudhir Soni"}
                onChange={(e) => setPost({ ...post, author: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between">
              <span className="font-serif font-bold text-stone-100 text-base">
                Article Reading View Preview
              </span>
              <button onClick={() => setShowPreviewModal(false)} className="p-1 text-stone-400 hover:text-stone-100">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4">
              <div className="text-xs font-mono text-amber-400 uppercase">
                {post.category} • {post.readingTime || estimatedReadingTime} • by {post.author}
              </div>
              <h2 className="font-serif text-2xl font-bold text-stone-100">
                {post.title}
              </h2>
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.imageAltText || post.title}
                  className="w-full h-64 object-cover rounded-xl border border-stone-800"
                />
              )}
              <p className="text-stone-300 text-sm italic border-l-2 border-amber-500 pl-4 py-1">
                {post.excerpt}
              </p>
              <div className="text-stone-300 text-xs whitespace-pre-line font-mono leading-relaxed bg-stone-950/60 p-4 rounded-xl border border-stone-800">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
