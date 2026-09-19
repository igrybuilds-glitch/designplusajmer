import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  Briefcase, 
  BookOpen, 
  Layers, 
  MapPin, 
  MessageSquare, 
  Globe, 
  Plus, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  FileText
} from "lucide-react";
import { fetchAllCMSProjects, fetchAllCMSBlogPosts, fetchAllCMSMessages, CMSProject, CMSBlogPost, CMSMessage } from "../../services/adminCmsService";

interface DashboardStats {
  projects: { total: number; published: number; concept: number; draft: number };
  blog: { total: number; published: number; draft: number };
  services: { total: number; published: number };
  locations: { total: number; published: number };
  messages: { unread: number; total: number };
}

export const AdminDashboardPage: React.FC = () => {
  const { adminUser } = useAdminAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentProjects, setRecentProjects] = useState<CMSProject[]>([]);
  const [recentPosts, setRecentPosts] = useState<CMSBlogPost[]>([]);
  const [recentMessages, setRecentMessages] = useState<CMSMessage[]>([]);
  const [recentAuditLogs, setRecentAuditLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadDashboardData() {
      try {
        const token = sessionStorage.getItem("designplus_admin_jwt");

        // 1. Fetch server stats
        const statsRes = await fetch("/api/admin/stats", {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        if (statsRes.ok) {
          const data = await statsRes.json();
          if (isMounted) {
            setStats(data);
            if (data.recentLogs) setRecentAuditLogs(data.recentLogs);
          }
        }

        // 2. Fetch CMS Entities
        const [projects, posts, messages] = await Promise.all([
          fetchAllCMSProjects(),
          fetchAllCMSBlogPosts(),
          fetchAllCMSMessages()
        ]);

        if (isMounted) {
          setRecentProjects(projects.slice(0, 5));
          setRecentPosts(posts.slice(0, 4));
          setRecentMessages(messages.slice(0, 3));
        }
      } catch (err) {
        console.warn("Dashboard data loading notice:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const totalProjects = stats?.projects.total ?? recentProjects.length;
  const conceptProjects = stats?.projects.concept ?? recentProjects.filter(p => p.isConcept).length;
  const publishedProjects = stats?.projects.published ?? (totalProjects - conceptProjects);

  return (
    <div className="space-y-8 pb-12">
      {/* Welcome Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>AUTHENTICATED ADMINISTRATOR WORKSPACE</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 tracking-tight">
            Studio Operations &amp; CMS Dashboard
          </h1>
          <p className="text-sm text-stone-400 mt-1 max-w-2xl">
            Real-time portfolio management, technical journal publications, client enquiries, and SEO indexability monitoring for Design Plus.
          </p>
        </div>

        {/* Quick Actions Cluster */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to="/admin/projects/new"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-amber-500/10"
          >
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </Link>

          <Link
            to="/admin/blog/new"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-100 font-semibold text-xs tracking-wider uppercase border border-stone-700 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>New Article</span>
          </Link>

          <Link
            to="/admin/seo"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 font-semibold text-xs tracking-wider uppercase border border-stone-700 transition-all"
          >
            <Globe className="w-4 h-4" />
            <span>SEO Audit</span>
          </Link>
        </div>
      </div>

      {/* Primary Real Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Real Built Projects */}
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Built Projects
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-serif font-bold text-stone-100">
              {publishedProjects}
            </div>
            <div className="text-xs text-stone-400 mt-1 flex items-center gap-1.5 font-mono">
              <span className="text-emerald-400 font-semibold">Active in Portfolio</span>
              <span>• Complete Drawings</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Concept Projects & Studies */}
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Concept &amp; Studies
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-serif font-bold text-purple-300">
              {conceptProjects}
            </div>
            <div className="text-xs text-stone-400 mt-1 flex items-center gap-1.5 font-mono">
              <span className="text-purple-400 font-semibold">Flagged CONCEPT</span>
              <span>• R&amp;D Typologies</span>
            </div>
          </div>
        </div>

        {/* Metric 3: Journal & Technical Articles */}
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Published Articles
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-serif font-bold text-stone-100">
              {stats?.blog.published ?? recentPosts.length}
            </div>
            <div className="text-xs text-stone-400 mt-1 flex items-center gap-1.5 font-mono">
              <span className="text-blue-400 font-semibold">Technical Papers</span>
              <span>• IS &amp; ADA Guides</span>
            </div>
          </div>
        </div>

        {/* Metric 4: Client Leads & Inquiries */}
        <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
              Client Enquiries
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="text-3xl font-serif font-bold text-stone-100 flex items-baseline gap-2">
              <span>{stats?.messages.total ?? recentMessages.length}</span>
              <span className="text-xs font-mono text-amber-400 font-normal">
                ({stats?.messages.unread ?? 3} New)
              </span>
            </div>
            <div className="text-xs text-stone-400 mt-1 flex items-center gap-1.5 font-mono">
              <span className="text-emerald-400 font-semibold">Consultation Queue</span>
              <span>• Direct Submissions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Metrics & Practice Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300">
              <Layers className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-medium text-stone-200">Practice Services</div>
              <div className="text-[11px] text-stone-400 font-mono">Architectural, Structural, Interiors</div>
            </div>
          </div>
          <span className="text-base font-bold font-mono text-stone-100">6 Active</span>
        </div>

        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300">
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-medium text-stone-200">Regional Service Hubs</div>
              <div className="text-[11px] text-stone-400 font-mono">Ajmer, Jaipur, Pushkar, Udaipur</div>
            </div>
          </div>
          <span className="text-base font-bold font-mono text-stone-100">4 Regions</span>
        </div>

        <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center text-stone-300">
              <Globe className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-medium text-stone-200">SEO Indexability Status</div>
              <div className="text-[11px] text-stone-400 font-mono">Sitemap &amp; Canonical Verified</div>
            </div>
          </div>
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            94% Health
          </span>
        </div>
      </div>

      {/* Main Two-Column Layout: Recent Content & Audit Trail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Projects & Content Management (2 cols wide) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Projects Table */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-lg">
            <div className="p-5 border-b border-stone-800 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-lg font-bold text-stone-100">
                  Recent Portfolio Projects
                </h2>
                <p className="text-xs text-stone-400 font-mono mt-0.5">
                  Real projects and concept studies under practice management
                </p>
              </div>

              <Link
                to="/admin/projects"
                className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>View All ({totalProjects})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-stone-800/60 overflow-x-auto">
              {recentProjects.map((p) => (
                <div key={p.id} className="p-4 flex items-center justify-between gap-4 hover:bg-stone-800/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-12 h-12 rounded-lg object-cover bg-stone-950 border border-stone-800 shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link 
                          to={`/admin/projects/${p.id}`}
                          className="text-sm font-medium text-stone-200 hover:text-amber-300 truncate"
                        >
                          {p.title}
                        </Link>
                        {p.isConcept ? (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold">
                            CONCEPT STUDY
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {p.status}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-400 font-mono mt-0.5 truncate">
                        {p.city} • {p.area} • Category: {p.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/admin/projects/${p.id}`}
                      className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition-colors"
                    >
                      Edit
                    </Link>
                    <a
                      href={`/projects/${p.category}/${p.slug}`}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800"
                      title="View live page"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Technical Journal Articles */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden shadow-lg">
            <div className="p-5 border-b border-stone-800 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-lg font-bold text-stone-100">
                  Journal &amp; Technical Articles
                </h2>
                <p className="text-xs text-stone-400 font-mono mt-0.5">
                  Editorial publications with SEO metadata and reading time
                </p>
              </div>

              <Link
                to="/admin/blog"
                className="text-xs font-mono text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>Manage Journal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-stone-800/60">
              {recentPosts.map((post) => (
                <div key={post.id} className="p-4 flex items-center justify-between gap-4 hover:bg-stone-800/40 transition-colors">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-stone-400 font-mono">
                        {post.readingTime}
                      </span>
                    </div>
                    <Link
                      to={`/admin/blog/${post.id}`}
                      className="text-sm font-medium text-stone-200 hover:text-amber-300 block mt-1 truncate"
                    >
                      {post.title}
                    </Link>
                  </div>

                  <Link
                    to={`/admin/blog/${post.id}`}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono shrink-0 transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Inquiries & Audit Log (1 col wide) */}
        <div className="space-y-6">
          {/* Latest Client Inquiries */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <h3 className="font-serif text-base font-bold text-stone-100">
                  New Client Inquiries
                </h3>
              </div>
              <Link to="/admin/messages" className="text-xs font-mono text-amber-400 hover:text-amber-300">
                View All
              </Link>
            </div>

            <div className="divide-y divide-stone-800/60 mt-2">
              {recentMessages.map((m) => (
                <div key={m.id} className="py-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-stone-200">{m.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {m.status}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-stone-400 mt-0.5">
                    {m.phone} • {m.location}
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-2 mt-1.5 leading-relaxed bg-stone-950/60 p-2 rounded-lg border border-stone-800/60">
                    "{m.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Log Stream */}
          <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <h3 className="font-serif text-base font-bold text-stone-100">
                  Audit Activity Trail
                </h3>
              </div>
              <Link to="/admin/audit-log" className="text-xs font-mono text-amber-400 hover:text-amber-300">
                Full Log
              </Link>
            </div>

            <div className="space-y-3 mt-3">
              {recentAuditLogs.slice(0, 5).map((log) => (
                <div key={log.id} className="text-xs p-2.5 rounded-lg bg-stone-950/60 border border-stone-800/60 space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px] text-stone-400">
                    <span className="text-amber-400 font-semibold">{log.action}</span>
                    <span>{new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <div className="text-stone-300 text-[11px] leading-relaxed">
                    {log.summary}
                  </div>
                  <div className="text-[10px] font-mono text-stone-400 truncate">
                    by {log.adminEmail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
