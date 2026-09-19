import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, Sparkles, Film, Bookmark, User as UserIcon } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { BLOG_CATEGORIES } from '../data/blogData';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenAiStudio?: () => void;
  onOpenVeoStudio?: () => void;
  onOpenClientPortal?: () => void;
}

export function Navbar({ 
  onOpenConsultation, 
  onOpenAiStudio, 
  onOpenVeoStudio, 
  onOpenClientPortal 
}: NavbarProps) {
  const { user, savedProjects } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const [blogDropdown, setBlogDropdown] = useState(false);
  const [aiToolsDropdown, setAiToolsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setProjectsDropdown(false);
    setLocationsDropdown(false);
    setBlogDropdown(false);
    setAiToolsDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-stone-200/80 py-3 shadow-xs'
          : 'bg-[#FBFBF9]/80 backdrop-blur-xs border-b border-stone-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-hidden"
            aria-label="Design Plus Home"
          >
            <span className="font-editorial text-2xl sm:text-3xl tracking-wider text-stone-950 font-bold uppercase transition-colors group-hover:text-stone-700">
              Design Plus
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-sans text-stone-700 font-medium -mt-1">
              Architecture &amp; Structural Engineering · Ajmer
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] tracking-wider uppercase font-medium text-stone-700">
            <Link
              to="/"
              className={`px-3 py-2 transition-colors hover:text-stone-950 ${
                isActive('/') && location.pathname === '/' ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 transition-colors hover:text-stone-950 ${
                isActive('/about') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-3 py-2 transition-colors hover:text-stone-950 ${
                  isActive('/services') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
                }`}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-80 bg-[#FBFBF9] border border-stone-200 shadow-xl py-3 px-2 transition-all">
                  <div className="px-3 pb-2 border-b border-stone-200 mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-stone-700 font-semibold">Specialized Disciplines</span>
                  </div>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block px-3 py-2 text-xs normal-case tracking-normal text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-xs transition-colors"
                    >
                      <div className="font-semibold text-stone-900">{s.title}</div>
                      <div className="text-[11px] text-stone-700 line-clamp-1">{s.shortDescription}</div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-stone-200 px-3">
                    <Link
                      to="/services"
                      className="text-[11px] font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 uppercase tracking-wider"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProjectsDropdown(true)}
              onMouseLeave={() => setProjectsDropdown(false)}
            >
              <Link
                to="/projects"
                className={`flex items-center gap-1 px-3 py-2 transition-colors hover:text-stone-950 ${
                  isActive('/projects') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
                }`}
              >
                Portfolio
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {projectsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-[#FBFBF9] border border-stone-200 shadow-xl py-2 px-1">
                  <Link
                    to="/projects"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    All Selected Works
                  </Link>
                  <Link
                    to="/projects/residential"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    Residential Architecture
                  </Link>
                  <Link
                    to="/projects/commercial"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    Commercial &amp; Offices
                  </Link>
                  <Link
                    to="/projects/interior"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    Interior Architecture
                  </Link>
                  <Link
                    to="/projects/structural"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    Chartered Structural Works
                  </Link>
                  <Link
                    to="/projects/concept"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    Concept &amp; Climate Studies
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <Link
                to="/locations"
                className={`flex items-center gap-1 px-3 py-2 transition-colors hover:text-stone-950 ${
                  isActive('/locations') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
                }`}
              >
                Locations
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {locationsDropdown && (
                <div className="absolute top-full left-0 w-64 bg-[#FBFBF9] border border-stone-200 shadow-xl py-2 px-1">
                  <Link
                    to="/locations"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    All Regional Hubs
                  </Link>
                  {LOCATIONS_SERVED.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                    >
                      {loc.city}, {loc.state} Practice
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Journal / Blog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBlogDropdown(true)}
              onMouseLeave={() => setBlogDropdown(false)}
            >
              <Link
                to="/blog"
                className={`flex items-center gap-1 px-3 py-2 transition-colors hover:text-stone-950 ${
                  isActive('/blog') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
                }`}
              >
                Journal
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {blogDropdown && (
                <div className="absolute top-full left-0 w-72 bg-[#FBFBF9] border border-stone-200 shadow-xl py-2 px-1">
                  <div className="px-3 pb-2 border-b border-stone-200 mb-1">
                    <span className="text-[10px] tracking-widest uppercase text-stone-700 font-semibold">Editorial Categories</span>
                  </div>
                  <Link
                    to="/blog"
                    className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                  >
                    All Journal Articles
                  </Link>
                  {BLOG_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/blog/${cat.slug}`}
                      className="block px-3 py-2 text-xs text-stone-800 hover:bg-stone-100 font-medium"
                    >
                      {cat.label || cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* AI Tools Dropdown in Main Navigation */}
            <div
              className="relative"
              onMouseEnter={() => setAiToolsDropdown(true)}
              onMouseLeave={() => setAiToolsDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setAiToolsDropdown(!aiToolsDropdown)}
                className={`flex items-center gap-1.5 px-3 py-2 transition-colors hover:text-stone-950 cursor-pointer ${
                  aiToolsDropdown ? 'text-stone-950 font-semibold' : ''
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>AI Tools</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
              </button>

              {aiToolsDropdown && (
                <div className="absolute top-full left-0 w-80 bg-[#FBFBF9] border border-stone-200 shadow-xl py-2 px-1 z-50">
                  <div className="px-3 pb-2 border-b border-stone-200 mb-1">
                    <span className="text-[10px] tracking-widest uppercase text-stone-600 font-semibold">Studio Intelligence Suite</span>
                  </div>

                  <button
                    onClick={() => {
                      setAiToolsDropdown(false);
                      if (onOpenAiStudio) onOpenAiStudio();
                    }}
                    className="w-full text-left block px-3 py-2.5 text-xs text-stone-800 hover:bg-amber-50/80 rounded-xs transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-semibold text-stone-950 group-hover:text-amber-900">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Gemini AI Architect &amp; Voice</span>
                    </div>
                    <p className="text-[11px] text-stone-600 normal-case tracking-normal pl-6 mt-0.5">
                      Real-time structural planning, bylaws, Vastu analysis &amp; Live Voice
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setAiToolsDropdown(false);
                      if (onOpenVeoStudio) onOpenVeoStudio();
                    }}
                    className="w-full text-left block px-3 py-2.5 text-xs text-stone-800 hover:bg-purple-50/80 rounded-xs transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-semibold text-stone-950 group-hover:text-purple-900">
                      <Film className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Veo 3D Animation Studio</span>
                    </div>
                    <p className="text-[11px] text-stone-600 normal-case tracking-normal pl-6 mt-0.5">
                      Generate 3D walkthroughs &amp; cinematic architectural renders
                    </p>
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 transition-colors hover:text-stone-950 ${
                isActive('/contact') ? 'text-stone-950 font-semibold underline underline-offset-8 decoration-stone-900' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Direct CTA & Contact Action */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Client Portal / Saved Bookmarks */}
            <button
              onClick={onOpenClientPortal}
              title="Client Account & Saved Works"
              className="inline-flex items-center gap-1.5 text-xs text-stone-700 hover:text-stone-950 font-medium px-2.5 py-1.5 rounded-xs hover:bg-stone-100 transition-colors relative"
            >
              {user?.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || "Client"} className="w-5 h-5 rounded-full object-cover border border-stone-300" />
              ) : (
                <UserIcon className="w-4 h-4 text-stone-700" />
              )}
              <span>{user ? (user.displayName?.split(" ")[0] || "Account") : "Saved"}</span>
              {savedProjects.length > 0 && (
                <span className="bg-stone-900 text-amber-200 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {savedProjects.length}
                </span>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 bg-stone-900 text-[#FBFBF9] hover:bg-stone-800 text-xs font-medium tracking-wider uppercase px-4 py-2 transition-colors duration-200"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex items-center space-x-1.5 lg:hidden">
            <button
              onClick={onOpenClientPortal}
              className="p-2 text-stone-700 hover:text-stone-950 relative"
              title="Client Portal & Saved"
              aria-label="Client Account"
            >
              <Bookmark className="w-4 h-4" />
              {savedProjects.length > 0 && (
                <span className="absolute top-1 right-1 bg-amber-800 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                  {savedProjects.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FBFBF9] border-b border-stone-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 text-sm tracking-wider uppercase font-medium">
            <Link
              to="/"
              className="block py-2 text-stone-900 hover:text-amber-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-stone-900 hover:text-amber-800"
            >
              About Studio &amp; Team
            </Link>

            {/* Services with sub-items */}
            <div className="py-2 border-y border-stone-200/60 my-2">
              <Link
                to="/services"
                className="block text-stone-950 font-bold mb-2"
              >
                Services Overview
              </Link>
              <div className="pl-3 space-y-2 border-l border-stone-300">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="block text-xs normal-case text-stone-700 hover:text-stone-950"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Projects with sub-items */}
            <div className="py-2 border-b border-stone-200/60 my-2">
              <Link
                to="/projects"
                className="block text-stone-950 font-bold mb-2"
              >
                Portfolio &amp; Works
              </Link>
              <div className="pl-3 space-y-2 border-l border-stone-300 text-xs normal-case text-stone-700">
                <Link to="/projects/residential" className="block hover:text-stone-950">Residential Architecture</Link>
                <Link to="/projects/commercial" className="block hover:text-stone-950">Commercial &amp; Retail</Link>
                <Link to="/projects/interior" className="block hover:text-stone-950">Interior Architecture</Link>
                <Link to="/projects/structural" className="block hover:text-stone-950">Chartered Structural Works</Link>
                <Link to="/projects/concept" className="block hover:text-stone-950">Concept &amp; Climate Studies</Link>
              </div>
            </div>

            {/* Locations with sub-items */}
            <div className="py-2 border-b border-stone-200/60 my-2">
              <Link
                to="/locations"
                className="block text-stone-950 font-bold mb-2"
              >
                Regional Locations
              </Link>
              <div className="pl-3 space-y-2 border-l border-stone-300 text-xs normal-case text-stone-700">
                {LOCATIONS_SERVED.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="block hover:text-stone-950"
                  >
                    {loc.city}, {loc.state} Practice
                  </Link>
                ))}
              </div>
            </div>

            {/* Blog Categories with sub-items */}
            <div className="py-2 border-b border-stone-200/60 my-2">
              <Link
                to="/blog"
                className="block text-stone-950 font-bold mb-2"
              >
                Journal &amp; Guides
              </Link>
              <div className="pl-3 space-y-2 border-l border-stone-300 text-xs normal-case text-stone-700">
                {BLOG_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/blog/${cat.slug}`}
                    className="block hover:text-stone-950"
                  >
                    {cat.label || cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Tools Section in Mobile Menu */}
            <div className="py-2 border-b border-stone-200/60 my-2">
              <div className="flex items-center gap-1.5 text-stone-950 font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>AI Tools &amp; Intelligence</span>
              </div>
              <div className="pl-3 space-y-2 border-l border-stone-300 text-xs normal-case text-stone-700">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenAiStudio) onOpenAiStudio();
                  }}
                  className="w-full text-left flex items-center justify-between py-1 text-stone-800 hover:text-amber-800"
                >
                  <span className="font-medium">Gemini AI Architect &amp; Live Voice</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-xs">Live</span>
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    if (onOpenVeoStudio) onOpenVeoStudio();
                  }}
                  className="w-full text-left flex items-center justify-between py-1 text-stone-800 hover:text-purple-800"
                >
                  <span className="font-medium">Veo 3D Architectural Animation</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-purple-100 text-purple-900 px-1.5 py-0.5 rounded-xs">3D</span>
                </button>
              </div>
            </div>

            <Link
              to="/contact"
              className="block py-2 text-stone-900 hover:text-amber-800"
            >
              Contact Studio
            </Link>
          </div>

          <div className="pt-4 border-t border-stone-200 space-y-3">
            <div className="text-xs text-stone-700">
              <div className="font-semibold text-stone-900 mb-1">Direct Consultation Line:</div>
              <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="block text-stone-800 font-medium">
                {BUSINESS_INFO.phones[0].display}
              </a>
              <a href={`tel:${BUSINESS_INFO.phones[1].raw}`} className="block text-stone-800 font-medium">
                {BUSINESS_INFO.phones[1].display}
              </a>
              <div className="text-stone-700 mt-1">{BUSINESS_INFO.email}</div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full text-center bg-stone-900 text-[#FBFBF9] py-3 text-xs tracking-wider uppercase font-semibold hover:bg-stone-800 transition-colors"
            >
              Book Studio Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
