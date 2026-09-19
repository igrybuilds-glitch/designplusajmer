import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { 
  LayoutDashboard, 
  Briefcase, 
  BookOpen, 
  Layers, 
  MapPin, 
  Image as ImageIcon, 
  Globe, 
  MessageSquare, 
  Users, 
  Settings, 
  FileText, 
  ExternalLink, 
  LogOut, 
  Menu, 
  X, 
  Plus, 
  Shield, 
  Search, 
  ChevronRight, 
  Lock, 
  PanelLeftClose, 
  PanelLeftOpen, 
  Clock, 
  Compass, 
  SlidersHorizontal, 
  CheckCircle2, 
  Command
} from "lucide-react";

interface NavItem {
  name: string;
  shortName?: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  badgeColor?: "amber" | "emerald" | "stone";
  newAction?: string;
  section: "core" | "assets" | "operations";
}

export const AdminLayout: React.FC = () => {
  const { adminUser, logoutAdmin } = useAdminAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    // Default collapsed on tablet viewports (768px - 1024px) for optimal workspace
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 && window.innerWidth < 1024;
    }
    return false;
  });
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  // Clock for Ajmer Studio time (IST)
  useEffect(() => {
    const updateTime = () => {
      try {
        const ist = new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }).format(new Date());
        setCurrentTime(ist);
      } catch {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K search and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSearchModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer or search modal is active
  useEffect(() => {
    if (mobileMenuOpen || searchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, searchModalOpen]);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = useMemo(() => [
    { 
      name: "Studio Overview", 
      shortName: "Overview", 
      href: "/admin/dashboard", 
      icon: LayoutDashboard, 
      section: "core" 
    },
    { 
      name: "Portfolio Projects", 
      shortName: "Projects", 
      href: "/admin/projects", 
      icon: Briefcase, 
      newAction: "/admin/projects/new", 
      section: "core" 
    },
    { 
      name: "Journal & Articles", 
      shortName: "Journal", 
      href: "/admin/blog", 
      icon: BookOpen, 
      newAction: "/admin/blog/new", 
      section: "core" 
    },
    { 
      name: "Architectural Services", 
      shortName: "Services", 
      href: "/admin/services", 
      icon: Layers, 
      section: "core" 
    },
    { 
      name: "Regional Locations", 
      shortName: "Locations", 
      href: "/admin/locations", 
      icon: MapPin, 
      section: "core" 
    },
    { 
      name: "Media Library", 
      shortName: "Media", 
      href: "/admin/media", 
      icon: ImageIcon, 
      section: "assets" 
    },
    { 
      name: "SEO Health Center", 
      shortName: "SEO", 
      href: "/admin/seo", 
      icon: Globe, 
      badge: "Live", 
      badgeColor: "emerald", 
      section: "assets" 
    },
    { 
      name: "Messages & Inquiries", 
      shortName: "Messages", 
      href: "/admin/messages", 
      icon: MessageSquare, 
      badge: "Active", 
      badgeColor: "amber", 
      section: "operations" 
    },
    { 
      name: "Team & Leadership", 
      shortName: "Team", 
      href: "/admin/team", 
      icon: Users, 
      section: "operations" 
    },
    { 
      name: "Studio Settings", 
      shortName: "Settings", 
      href: "/admin/settings", 
      icon: Settings, 
      section: "operations" 
    },
    { 
      name: "Security Audit Log", 
      shortName: "Audit Log", 
      href: "/admin/audit-log", 
      icon: FileText, 
      section: "operations" 
    },
  ], []);

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to sign out of the Design Plus Administrator portal?")) {
      await logoutAdmin();
      navigate("/admin/login");
    }
  };

  const currentPath = location.pathname;

  // Breadcrumbs calculation
  const breadcrumbs = useMemo(() => {
    const parts = currentPath.split("/").filter(Boolean);
    return parts.map((part, index) => {
      const url = "/" + parts.slice(0, index + 1).join("/");
      let label = part.replace(/-/g, " ");
      label = label.charAt(0).toUpperCase() + label.slice(1);
      return { url, label };
    });
  }, [currentPath]);

  // Filtered items for quick search command modal
  const filteredSearchItems = useMemo(() => {
    if (!searchQuery.trim()) return navItems;
    const q = searchQuery.toLowerCase();
    return navItems.filter(
      (item) => item.name.toLowerCase().includes(q) || item.href.toLowerCase().includes(q)
    );
  }, [navItems, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0e0d0b] text-stone-100 flex flex-col antialiased font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          id="admin-mobile-backdrop"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Container Layout */}
      <div className="flex flex-1 min-h-screen relative">
        {/* =================================================================== */}
        {/* SIDE NAVIGATION BAR                                                */}
        {/* =================================================================== */}
        <aside 
          id="admin-sidebar"
          className={`
            fixed top-0 bottom-0 left-0 z-50 bg-[#14120f] border-r border-stone-800/80 flex flex-col justify-between
            transition-all duration-300 ease-in-out md:static
            ${mobileMenuOpen 
              ? "translate-x-0 w-72 sm:w-80 shadow-2xl" 
              : "-translate-x-full md:translate-x-0"}
            ${isSidebarCollapsed ? "md:w-20" : "md:w-64 lg:w-72"}
          `}
        >
          {/* Sidebar Top: Studio Branding & Seal */}
          <div className="p-4 sm:p-5 border-b border-stone-800/80 bg-[#12100d]">
            <div className="flex items-center justify-between">
              <Link 
                to="/admin/dashboard" 
                className="flex items-center gap-3 group overflow-hidden"
                title="Design Plus Studio Administration"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400/60 transition-all shrink-0 shadow-inner">
                  <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500 text-amber-400" />
                </div>

                {!isSidebarCollapsed && (
                  <div className="min-w-0 transition-opacity duration-300">
                    <span className="font-serif text-sm sm:text-base font-semibold tracking-wider text-stone-100 block uppercase truncate">
                      Design Plus
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 block truncate">
                      Studio Architecture CMS
                    </span>
                  </div>
                )}
              </Link>

              {/* Close Button on Mobile Drawer */}
              <button 
                id="admin-mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-stone-100 md:hidden rounded-lg hover:bg-stone-800/60 transition-colors"
                aria-label="Close navigation drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Allowlist & Custom Claims Indicator */}
            {!isSidebarCollapsed && (
              <div className="mt-3.5 px-3 py-2 rounded-lg bg-stone-950/70 border border-stone-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-stone-300 font-mono text-[10px] tracking-wide uppercase">
                    Admin Claim Active
                  </span>
                </div>
                <span className="text-amber-400 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  Super Admin
                </span>
              </div>
            )}
          </div>

          {/* Navigation Links Area */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent">
            {/* 1. Core Modules */}
            <div>
              {!isSidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 flex items-center justify-between">
                  <span>Editorial Modules</span>
                  <span className="text-[9px] text-stone-400 font-mono">01</span>
                </div>
              )}
              <div className="space-y-1">
                {navItems.filter(i => i.section === "core").map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.href || (item.href !== "/admin/dashboard" && currentPath.startsWith(item.href));

                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        title={isSidebarCollapsed ? item.name : undefined}
                        className={`
                          flex items-center ${isSidebarCollapsed ? "justify-center px-2 py-3" : "justify-between px-3.5 py-2.5"} 
                          min-h-[44px] rounded-lg text-xs font-medium transition-all
                          ${isActive 
                            ? "bg-amber-500/15 text-amber-200 border border-amber-500/40 font-semibold shadow-sm" 
                            : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/50"}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-amber-400" : "text-stone-400 group-hover:text-stone-200"}`} />
                          {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                        </div>

                        {!isSidebarCollapsed && item.newAction && (
                          <Link
                            to={item.newAction}
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileMenuOpen(false);
                            }}
                            title={`Create new in ${item.name}`}
                            className="p-1 rounded bg-stone-800/80 hover:bg-amber-500/20 text-stone-400 hover:text-amber-300 border border-stone-700/60 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </Link>
                        )}
                      </Link>

                      {/* Tooltip on Collapsed Rail */}
                      {isSidebarCollapsed && (
                        <div className="hidden md:group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1.5 bg-stone-900 text-stone-100 border border-stone-700 text-xs font-medium rounded-md shadow-xl whitespace-nowrap pointer-events-none">
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Assets & SEO */}
            <div>
              {!isSidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 flex items-center justify-between">
                  <span>Digital Assets</span>
                  <span className="text-[9px] text-stone-400 font-mono">02</span>
                </div>
              )}
              <div className="space-y-1">
                {navItems.filter(i => i.section === "assets").map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.href || currentPath.startsWith(item.href);

                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        title={isSidebarCollapsed ? item.name : undefined}
                        className={`
                          flex items-center ${isSidebarCollapsed ? "justify-center px-2 py-3" : "justify-between px-3.5 py-2.5"} 
                          min-h-[44px] rounded-lg text-xs font-medium transition-all
                          ${isActive 
                            ? "bg-amber-500/15 text-amber-200 border border-amber-500/40 font-semibold shadow-sm" 
                            : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/50"}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-amber-400" : "text-stone-400 group-hover:text-stone-200"}`} />
                          {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                        </div>

                        {!isSidebarCollapsed && item.badge && (
                          <span className={`
                            text-[10px] px-2 py-0.5 rounded-full font-mono font-medium
                            ${item.badgeColor === "emerald" 
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30"}
                          `}>
                            {item.badge}
                          </span>
                        )}
                      </Link>

                      {isSidebarCollapsed && (
                        <div className="hidden md:group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1.5 bg-stone-900 text-stone-100 border border-stone-700 text-xs font-medium rounded-md shadow-xl whitespace-nowrap pointer-events-none">
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Operations & Security */}
            <div>
              {!isSidebarCollapsed && (
                <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-stone-400 flex items-center justify-between">
                  <span>Operations &amp; Security</span>
                  <span className="text-[9px] text-stone-400 font-mono">03</span>
                </div>
              )}
              <div className="space-y-1">
                {navItems.filter(i => i.section === "operations").map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.href || currentPath.startsWith(item.href);

                  return (
                    <div key={item.href} className="relative group">
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        title={isSidebarCollapsed ? item.name : undefined}
                        className={`
                          flex items-center ${isSidebarCollapsed ? "justify-center px-2 py-3" : "justify-between px-3.5 py-2.5"} 
                          min-h-[44px] rounded-lg text-xs font-medium transition-all
                          ${isActive 
                            ? "bg-amber-500/15 text-amber-200 border border-amber-500/40 font-semibold shadow-sm" 
                            : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/50"}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 shrink-0 transition-colors ${isActive ? "text-amber-400" : "text-stone-400 group-hover:text-stone-200"}`} />
                          {!isSidebarCollapsed && <span className="truncate">{item.name}</span>}
                        </div>

                        {!isSidebarCollapsed && item.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full font-mono font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            {item.badge}
                          </span>
                        )}
                      </Link>

                      {isSidebarCollapsed && (
                        <div className="hidden md:group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 z-50 px-2.5 py-1.5 bg-stone-900 text-stone-100 border border-stone-700 text-xs font-medium rounded-md shadow-xl whitespace-nowrap pointer-events-none">
                          {item.name}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Sidebar Footer: Admin Profile, Collapse Toggle & Logout */}
          <div className="p-3 sm:p-4 border-t border-stone-800/80 bg-[#12100d]">
            {!isSidebarCollapsed ? (
              <div className="space-y-3">
                {/* Admin Profile Box */}
                <div className="flex items-center justify-between gap-3 px-2 py-1.5 rounded-lg bg-stone-950/60 border border-stone-800/80">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-stone-800 border border-amber-500/30 flex items-center justify-center text-amber-300 font-serif font-bold text-xs shrink-0">
                      {adminUser?.email?.charAt(0).toUpperCase() || "A"}
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-medium text-stone-200 truncate">
                        {adminUser?.displayName || "Lead Administrator"}
                      </div>
                      <div className="text-[10px] font-mono text-stone-400 truncate">
                        {adminUser?.email || "admin@designplusajmer.in"}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    title="Sign Out of Admin Portal"
                    className="p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center text-stone-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>

                {/* Bottom Quick Links */}
                <div className="flex items-center gap-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 min-h-[40px] rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-[11px] font-medium text-stone-300 hover:text-stone-100 transition-colors"
                  >
                    <span>Live Public Site</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>

                  {/* Tablet/Desktop Collapse Toggle */}
                  <button
                    onClick={() => setIsSidebarCollapsed(true)}
                    title="Collapse Sidebar"
                    className="hidden md:flex p-2 min-w-[40px] min-h-[40px] items-center justify-center rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    <PanelLeftClose className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* Collapsed Footer View */
              <div className="flex flex-col items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center text-amber-300 font-serif font-bold text-xs"
                  title={adminUser?.email || "Admin"}
                >
                  {adminUser?.email?.charAt(0).toUpperCase() || "A"}
                </div>

                <button
                  onClick={() => setIsSidebarCollapsed(false)}
                  title="Expand Sidebar"
                  className="p-2 min-w-[40px] min-h-[40px] rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-800 text-amber-400 flex items-center justify-center transition-colors"
                >
                  <PanelLeftOpen className="w-4 h-4" />
                </button>

                <button
                  onClick={handleLogout}
                  title="Sign Out"
                  className="p-2 min-w-[40px] min-h-[40px] rounded-lg hover:bg-rose-500/10 text-stone-400 hover:text-rose-400 flex items-center justify-center transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* =================================================================== */}
        {/* MAIN CONTENT WORKSPACE                                              */}
        {/* =================================================================== */}
        <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
          {/* Top Sticky Header */}
          <header 
            id="admin-top-header"
            className="sticky top-0 z-30 bg-[#12100d]/90 backdrop-blur-md border-b border-stone-800/80 h-16 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-6"
          >
            {/* Left Header Controls: Drawer Toggles & Breadcrumbs */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              {/* Mobile Drawer Trigger Button */}
              <button
                id="admin-mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-300 hover:text-stone-100 md:hidden rounded-lg hover:bg-stone-800/60 transition-colors"
                aria-label="Open CMS Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Tablet/Desktop Sidebar Toggle (if collapsed) */}
              {isSidebarCollapsed && (
                <button
                  onClick={() => setIsSidebarCollapsed(false)}
                  className="hidden md:flex p-2 min-w-[40px] min-h-[40px] items-center justify-center rounded-lg hover:bg-stone-800/60 text-stone-400 hover:text-stone-200 transition-colors"
                  title="Expand sidebar"
                >
                  <PanelLeftOpen className="w-4 h-4" />
                </button>
              )}

              {/* Editorial Breadcrumbs */}
              <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-mono tracking-wider truncate">
                <Link to="/admin/dashboard" className="text-stone-400 hover:text-amber-300 transition-colors uppercase font-medium">
                  Admin
                </Link>
                {breadcrumbs.slice(1).map((crumb, i) => (
                  <React.Fragment key={crumb.url}>
                    <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    <Link 
                      to={crumb.url} 
                      className={`truncate uppercase ${i === breadcrumbs.length - 2 ? "text-amber-400 font-semibold" : "text-stone-400 hover:text-stone-200"}`}
                    >
                      {crumb.label}
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
            </div>

            {/* Center/Right Header Controls */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Quick Search Trigger Bar */}
              <button
                id="admin-quick-search-btn"
                onClick={() => setSearchModalOpen(true)}
                className="flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 min-h-[40px] rounded-lg bg-stone-900/90 hover:bg-stone-800 border border-stone-800 text-xs text-stone-400 hover:text-stone-200 transition-all shadow-inner"
                title="Search CMS modules (Cmd+K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline font-mono">Quick Search...</span>
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-stone-950 border border-stone-700/80 text-[10px] font-mono text-stone-400">
                  <Command className="w-2.5 h-2.5" /> K
                </kbd>
              </button>

              {/* Quick Action: New Project Button */}
              <Link
                to="/admin/projects/new"
                id="admin-new-project-quick-btn"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5 text-amber-400" />
                <span>New Project</span>
              </Link>

              {/* Ajmer Studio Clock (IST) */}
              {currentTime && (
                <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-950/60 border border-stone-800 text-[11px] font-mono text-stone-400">
                  <Clock className="w-3 h-3 text-amber-400/80" />
                  <span>Ajmer: {currentTime}</span>
                </div>
              )}

              {/* Custom Claim Lock Badge */}
              <div 
                title="Verified Firebase Auth Custom Claim: admin: true"
                className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 min-h-[34px] rounded-md bg-stone-900 border border-stone-800 text-[11px] font-mono text-amber-400/90 shrink-0"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span className="hidden md:inline">admin: true</span>
              </div>
            </div>
          </header>

          {/* Page Body Viewport */}
          <main className="flex-1 p-3.5 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Outlet />
          </main>
        </div>
      </div>

      {/* =================================================================== */}
      {/* MOBILE BOTTOM NAVIGATION BAR (< 768px Viewports)                    */}
      {/* =================================================================== */}
      <nav 
        id="admin-mobile-bottom-bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#14120f]/95 backdrop-blur-lg border-t border-stone-800 md:hidden flex items-center justify-around h-14 px-2"
      >
        <Link 
          to="/admin/dashboard"
          className={`flex flex-col items-center justify-center min-w-[52px] h-full ${currentPath === "/admin/dashboard" ? "text-amber-400 font-semibold" : "text-stone-400"}`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-[10px] font-mono mt-0.5">Overview</span>
        </Link>

        <Link 
          to="/admin/projects"
          className={`flex flex-col items-center justify-center min-w-[52px] h-full ${currentPath.startsWith("/admin/projects") ? "text-amber-400 font-semibold" : "text-stone-400"}`}
        >
          <Briefcase className="w-4 h-4" />
          <span className="text-[10px] font-mono mt-0.5">Projects</span>
        </Link>

        <Link 
          to="/admin/projects/new"
          className="flex items-center justify-center w-10 h-10 -mt-3 rounded-full bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/30 border-2 border-stone-900"
          title="Create New Project"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
        </Link>

        <Link 
          to="/admin/messages"
          className={`flex flex-col items-center justify-center min-w-[52px] h-full ${currentPath.startsWith("/admin/messages") ? "text-amber-400 font-semibold" : "text-stone-400"}`}
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-[10px] font-mono mt-0.5">Leads</span>
        </Link>

        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center min-w-[52px] h-full text-stone-400 hover:text-stone-100"
        >
          <Menu className="w-4 h-4" />
          <span className="text-[10px] font-mono mt-0.5">More</span>
        </button>
      </nav>

      {/* =================================================================== */}
      {/* QUICK COMMAND SEARCH PALETTE (Cmd+K / Ctrl+K)                      */}
      {/* =================================================================== */}
      {searchModalOpen && (
        <div 
          id="admin-search-modal"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4"
          onClick={() => setSearchModalOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-[#14120f] border border-stone-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-amber-400 shrink-0" />
              <input 
                type="text"
                autoFocus
                placeholder="Jump to CMS module, project editor, blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-stone-100 placeholder-stone-400 outline-none font-sans"
              />
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-100 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto p-2 divide-y divide-stone-800/40">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                Direct Navigation
              </div>
              {filteredSearchItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    onClick={() => {
                      setSearchModalOpen(false);
                      navigate(item.href);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs hover:bg-stone-800/60 text-stone-300 hover:text-amber-300 text-left transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400">{item.href}</span>
                  </button>
                );
              })}

              <div className="px-3 pt-3 pb-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-400">
                Quick Shortcuts
              </div>
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  navigate("/admin/projects/new");
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs hover:bg-amber-500/10 text-amber-300 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Plus className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">+ Create New Architectural Project</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">/admin/projects/new</span>
              </button>
              <button
                onClick={() => {
                  setSearchModalOpen(false);
                  navigate("/admin/blog/new");
                }}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs hover:bg-amber-500/10 text-amber-300 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Plus className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">+ Draft New Journal Article</span>
                </div>
                <span className="text-[10px] font-mono text-stone-400">/admin/blog/new</span>
              </button>
            </div>

            <div className="p-3 bg-stone-950/80 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-400">
              <span>Press <kbd className="px-1 py-0.5 bg-stone-900 border border-stone-700 rounded text-[10px]">Esc</kbd> to close</span>
              <span>Design Plus CMS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
