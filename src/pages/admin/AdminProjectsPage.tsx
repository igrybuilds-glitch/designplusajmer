import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  fetchAllCMSProjects, 
  deleteCMSProject, 
  saveCMSProject, 
  CMSProject 
} from "../../services/adminCmsService";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Edit, 
  Trash2, 
  Eye, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  AlertCircle 
} from "lucide-react";

export const AdminProjectsPage: React.FC = () => {
  const { adminUser } = useAdminAuth();
  const [projects, setProjects] = useState<CMSProject[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const data = await fetchAllCMSProjects();
    setProjects(data.filter(p => !p.isDeleted));
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    await deleteCMSProject(id, true, adminUser?.email || "admin");
    setDeleteConfirmId(null);
    loadProjects();
  };

  const handleTogglePublish = async (project: CMSProject) => {
    await saveCMSProject({
      ...project,
      isPublished: !project.isPublished
    }, adminUser?.email || "admin");
    loadProjects();
  };

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (statusFilter === "concept") return p.isConcept;
    if (statusFilter === "completed") return !p.isConcept && p.status === "Completed";
    if (statusFilter === "ongoing") return p.status === "Ongoing";
    if (statusFilter === "featured") return p.featured;

    if (categoryFilter !== "all" && p.category !== categoryFilter) return false;

    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
            Portfolio Projects
          </h1>
          <p className="text-xs text-stone-400 font-mono mt-1">
            Manage built architecture, structural engineering milestones, and concept studies
          </p>
        </div>

        <Link
          to="/admin/projects/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            placeholder="Search projects by title, city, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 placeholder-stone-500 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Statuses ({projects.length})</option>
            <option value="completed">Completed Built</option>
            <option value="ongoing">Ongoing Execution</option>
            <option value="concept">Concept Studies Only</option>
            <option value="featured">Featured On Homepage</option>
          </select>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 rounded-lg bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono focus:outline-none focus:border-amber-500"
          >
            <option value="all">All Typologies</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="interiors">Interiors</option>
            <option value="structural">Structural</option>
            <option value="institutional">Institutional</option>
          </select>
        </div>
      </div>

      {/* Projects Table */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-stone-400">
            Loading architectural portfolio projects...
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="p-12 text-center text-stone-400">
            <p className="text-sm font-serif">No projects match the selected criteria.</p>
            <button
              onClick={() => { setSearchQuery(""); setStatusFilter("all"); setCategoryFilter("all"); }}
              className="mt-3 text-xs font-mono text-amber-400 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-stone-950/80 border-b border-stone-800 text-[11px] font-mono uppercase tracking-wider text-stone-400">
                <tr>
                  <th className="px-5 py-3.5">Project</th>
                  <th className="px-4 py-3.5">Typology</th>
                  <th className="px-4 py-3.5">Location</th>
                  <th className="px-4 py-3.5">Status &amp; Badge</th>
                  <th className="px-4 py-3.5">Visibility</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-sans">
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-stone-800/30 transition-colors">
                    {/* Project & Thumbnail */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-12 h-12 rounded-lg object-cover bg-stone-950 border border-stone-800 shrink-0"
                        />
                        <div>
                          <Link
                            to={`/admin/projects/${project.id}`}
                            className="font-medium text-stone-200 hover:text-amber-300 text-sm block"
                          >
                            {project.title}
                          </Link>
                          <span className="text-[11px] text-stone-400 font-mono">
                            Slug: /{project.slug} • {project.builtUpArea || project.area}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Typology */}
                    <td className="px-4 py-4 capitalize font-mono text-stone-300">
                      {project.category}
                    </td>

                    {/* Location */}
                    <td className="px-4 py-4 font-mono text-stone-300">
                      {project.city}, {project.state || "Rajasthan"}
                    </td>

                    {/* Status & Badge */}
                    <td className="px-4 py-4">
                      <div className="flex flex-col gap-1 items-start">
                        {project.isConcept ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>CONCEPT STUDY</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            <CheckCircle className="w-2.5 h-2.5" />
                            <span>{project.status}</span>
                          </span>
                        )}

                        {project.featured && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300">
                            Featured
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Visibility toggle */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() => handleTogglePublish(project)}
                        className={`text-[11px] font-mono px-2 py-1 rounded transition-colors ${
                          project.isPublished
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                            : "bg-stone-800 text-stone-400 border border-stone-700 hover:bg-stone-700"
                        }`}
                      >
                        {project.isPublished ? "Published" : "Draft (Hidden)"}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/projects/${project.id}`}
                          className="p-1.5 text-stone-400 hover:text-amber-300 rounded hover:bg-stone-800"
                          title="Edit Project"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>

                        <a
                          href={`/projects/${project.category}/${project.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-stone-400 hover:text-stone-200 rounded hover:bg-stone-800"
                          title="View Live Public Page"
                        >
                          <Eye className="w-4 h-4" />
                        </a>

                        <button
                          onClick={() => setDeleteConfirmId(project.id)}
                          className="p-1.5 text-stone-400 hover:text-rose-400 rounded hover:bg-rose-500/10"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
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
              Are you sure you want to remove this project? It will be soft-deleted from the public website and moved to the administrative archive.
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
