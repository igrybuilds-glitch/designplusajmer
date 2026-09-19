import React, { useState, useEffect } from "react";
import { 
  fetchAllCMSMedia, 
  addCMSMedia, 
  updateCMSMedia, 
  deleteCMSMedia, 
  CMSMediaItem 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  Image as ImageIcon, 
  Upload, 
  Copy, 
  Check, 
  Trash2, 
  Edit, 
  AlertCircle, 
  FileText,
  Plus
} from "lucide-react";

export const AdminMediaPage: React.FC = () => {
  const { adminUser } = useAdminAuth();
  const [mediaList, setMediaList] = useState<CMSMediaItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newAssetUrl, setNewAssetUrl] = useState("");
  const [newAssetFilename, setNewAssetFilename] = useState("");
  const [newAssetAlt, setNewAssetAlt] = useState("");
  const [newAssetCategory, setNewAssetCategory] = useState<"Projects" | "Blog" | "Services" | "General">("Projects");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<CMSMediaItem | null>(null);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    const list = await fetchAllCMSMedia();
    setMediaList(list.filter(m => !m.isDeleted));
  };

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAssetUrl || !newAssetAlt) {
      setErrorMessage("Image URL and descriptive Alt Text are mandatory for accessibility and SEO.");
      return;
    }

    setErrorMessage(null);
    await addCMSMedia({
      filename: newAssetFilename || "asset-" + Date.now() + ".jpg",
      url: newAssetUrl,
      altText: newAssetAlt,
      caption: "",
      category: newAssetCategory,
      dimensions: "1920x1080",
      fileSize: "450 KB",
      usedIn: []
    }, adminUser?.email || "admin");

    setNewAssetUrl("");
    setNewAssetFilename("");
    setNewAssetAlt("");
    setShowUploadModal(false);
    loadMedia();
  };

  const handleDelete = async (id: string) => {
    const res = await deleteCMSMedia(id, adminUser?.email || "admin");
    if (!res.success) {
      alert(res.error);
    } else {
      loadMedia();
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    await updateCMSMedia(editingItem.id, {
      altText: editingItem.altText,
      caption: editingItem.caption,
      category: editingItem.category
    }, adminUser?.email || "admin");
    setEditingItem(null);
    loadMedia();
  };

  const filteredMedia = mediaList.filter(m => 
    selectedCategory === "all" ? true : m.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Digital Asset &amp; Media Library
          </h1>
          <p className="text-xs text-stone-400 font-mono mt-1">
            Centralized architectural drawings, high-resolution renders, and on-site photography
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add Media Asset</span>
        </button>
      </div>

      {/* Categories Filter */}
      <div className="flex items-center gap-2 border-b border-stone-800 pb-3 text-xs font-mono overflow-x-auto">
        {["all", "Projects", "Blog", "Services", "General"].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg transition-colors capitalize ${
              selectedCategory === cat
                ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            {cat} {cat === "all" ? `(${mediaList.length})` : ""}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedia.map((item) => (
          <div key={item.id} className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/10] bg-stone-950 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-stone-300 border border-stone-700">
                  {item.category}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <div className="text-xs font-medium text-stone-200 truncate" title={item.filename}>
                  {item.filename}
                </div>
                <div className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed font-mono">
                  Alt: "{item.altText}"
                </div>

                {item.usedIn && item.usedIn.length > 0 && (
                  <div className="pt-2 border-t border-stone-800 text-[10px] font-mono text-emerald-400">
                    Referenced in: {item.usedIn.join(", ")}
                  </div>
                )}
              </div>
            </div>

            <div className="p-3 border-t border-stone-800 bg-stone-950/60 flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => handleCopy(item.url, item.id)}
                className="flex items-center gap-1 text-stone-400 hover:text-amber-300 transition-colors"
                title="Copy direct asset link"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditingItem(item)}
                  className="p-1 text-stone-400 hover:text-stone-200"
                  title="Edit metadata"
                >
                  <Edit className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1 text-stone-400 hover:text-rose-400"
                  title="Delete asset"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload / Add Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-stone-100 mb-4">
              Add New Architectural Asset
            </h3>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs font-mono">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-stone-300 mb-1">Image URL <span className="text-amber-400">*</span></label>
                <input
                  type="url"
                  required
                  value={newAssetUrl}
                  onChange={(e) => setNewAssetUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Filename / Asset Identifier</label>
                <input
                  type="text"
                  value={newAssetFilename}
                  onChange={(e) => setNewAssetFilename(e.target.value)}
                  placeholder="villa-facade-render.jpg"
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Descriptive Alt Text (Required for SEO) <span className="text-amber-400">*</span></label>
                <input
                  type="text"
                  required
                  value={newAssetAlt}
                  onChange={(e) => setNewAssetAlt(e.target.value)}
                  placeholder="Modern sandstone elevation with timber louvers in Ajmer"
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Category</label>
                <select
                  value={newAssetCategory}
                  onChange={(e) => setNewAssetCategory(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 focus:outline-none focus:border-amber-500"
                >
                  <option value="Projects">Projects</option>
                  <option value="Blog">Blog</option>
                  <option value="Services">Services</option>
                  <option value="General">General</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 rounded-lg bg-stone-800 text-stone-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold"
                >
                  Save Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Metadata Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="font-serif text-lg font-bold text-stone-100 mb-4">
              Edit Metadata: {editingItem.filename}
            </h3>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-stone-300 mb-1">Image Alt Text (SEO &amp; Screen Readers)</label>
                <input
                  type="text"
                  value={editingItem.altText}
                  onChange={(e) => setEditingItem({ ...editingItem, altText: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1">Caption / Attribution</label>
                <input
                  type="text"
                  value={editingItem.caption}
                  onChange={(e) => setEditingItem({ ...editingItem, caption: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-100 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-lg bg-stone-800 text-stone-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
