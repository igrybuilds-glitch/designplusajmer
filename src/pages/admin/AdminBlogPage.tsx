import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  fetchAllCMSBlogPosts, 
  deleteCMSBlogPost, 
  saveCMSBlogPost, 
  CMSBlogPost 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  Plus, 
  Search, 
  ArrowUpRight, 
  Edit, 
  Trash2, 
  Eye, 
  BookOpen, 
  Clock, 
  AlertCircle 
} from "lucide-react";

export const AdminBlogPage: React.FC = () => {
  const { adminUser } = useAdminAuth();
  const [posts, setPosts] = useState<CMSBlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    setLoading(true);
    const data = await fetchAllCMSBlogPosts();
    setPosts(data.filter(p => !p.isDeleted));
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await deleteCMSBlogPost(id, true, adminUser?.email || "admin");
    setDeleteConfirmId(null);
    loadBlogPosts();
  };

  const handleTogglePublish = async (post: CMSBlogPost) => {
    await saveCMSBlogPost({
      ...post,
      isPublished: !post.isPublished
    }, adminUser?.email || "admin");
    loadBlogPosts();
  };

  const filteredPosts = posts.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (categoryFilter !== "all" && p.category !== categoryFilter) return false;

    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Journal &amp; Technical Articles
          </h1>
          <p className="text-xs text-stone-400 font-mono mt-1">
            Authoritative architectural engineering papers, building byelaws, and design guides
          </p>
        </div>

        <Link
          to="/admin/blog/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Write New Article</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            placeholder="Search articles by title or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono focus:outline-none focus:border-amber-500 w-full sm:w-auto"
        >
          <option value="all">All Categories ({posts.length})</option>
          <option value="Architecture">Architecture</option>
          <option value="Residential Design">Residential Design</option>
          <option value="Commercial Design">Commercial Design</option>
          <option value="Interior Design">Interior Design</option>
          <option value="House Planning">House Planning</option>
          <option value="Ajmer">Ajmer Byelaws</option>
        </select>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-stone-400">
            Loading journal articles...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="p-12 text-center text-stone-400">
            <p className="text-sm font-serif">No articles found matching query.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950/80 border-b border-stone-800 text-[11px] font-mono uppercase tracking-wider text-stone-400">
                <tr>
                  <th className="px-5 py-3.5">Article Title</th>
                  <th className="px-4 py-3.5">Category</th>
                  <th className="px-4 py-3.5">Reading Time &amp; Words</th>
                  <th className="px-4 py-3.5">Author</th>
                  <th className="px-4 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-sans">
                {filteredPosts.map((post) => {
                  const words = (post.content || "").split(/\s+/).filter(Boolean).length;
                  return (
                    <tr key={post.id} className="hover:bg-stone-800/30 transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3.5">
                          <img
                            src={post.featuredImage}
                            alt={post.imageAltText || post.title}
                            className="w-12 h-12 rounded-lg object-cover bg-stone-950 border border-stone-800 shrink-0"
                          />
                          <div>
                            <Link
                              to={`/admin/blog/${post.id}`}
                              className="font-medium text-stone-200 hover:text-amber-300 text-sm block"
                            >
                              {post.title}
                            </Link>
                            <span className="text-[11px] text-stone-400 font-mono">
                              Slug: /{post.slug}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4 font-mono text-stone-300">
                        {post.category}
                      </td>

                      <td className="px-4 py-4 font-mono text-stone-300">
                        <div>{post.readingTime}</div>
                        <span className="text-[10px] text-stone-400">{words} words</span>
                      </td>

                      <td className="px-4 py-4 font-mono text-stone-300">
                        {post.author}
                      </td>

                      <td className="px-4 py-4">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          className={`text-[11px] font-mono px-2 py-1 rounded transition-colors ${
                            post.isPublished
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                              : "bg-stone-800 text-stone-400 border border-stone-700 hover:bg-stone-700"
                          }`}
                        >
                          {post.isPublished ? "Published" : "Draft"}
                        </button>
                      </td>

                      <td className="px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            to={`/admin/blog/${post.id}`}
                            className="p-1.5 text-stone-400 hover:text-amber-300 rounded hover:bg-stone-800"
                            title="Edit Article"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>

                          <a
                            href={`/blog/${post.category.toLowerCase().replace(/\s+/g, "-")}/${post.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-stone-400 hover:text-stone-200 rounded hover:bg-stone-800"
                            title="View Public Article"
                          >
                            <Eye className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => setDeleteConfirmId(post.id)}
                            className="p-1.5 text-stone-400 hover:text-rose-400 rounded hover:bg-rose-500/10"
                            title="Delete Article"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 text-rose-400 mb-3">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-serif text-lg font-bold text-stone-100">
                Confirm Deletion
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Are you sure you want to remove this article? It will be archived and removed from public Google search visibility.
            </p>
            <div className="mt-6 flex justify-end gap-3 font-mono text-xs">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-medium"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
