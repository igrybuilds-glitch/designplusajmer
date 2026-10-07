import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, ArrowUpRight, Sparkles, Bookmark, User as UserIcon } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, LOCATIONS_SERVED } from '../data/siteData';
import { BLOG_CATEGORIES } from '../data/blogData';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onOpenConsultation?: () => void;
  onOpenAiStudio?: () => void;
  onOpenClientPortal?: () => void;
}

export function Navbar({ 
  onOpenConsultation, 
  onOpenAiStudio, 
  onOpenClientPortal 
}: NavbarProps) {
  const { user, savedProjects } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinks = [
    { label: 'Studio', path: '/about' },
    { label: 'Team', path: '/team' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Posters', path: '/posters' },
    { label: 'Contact', path: '/contact' }
  ];
  // Desktop nav keeps all 8 links incl. Contact — spacing tightened at lg
  // (space-x-5, tracking 0.18em) so nothing slides under the CTA button.
  // (2026-10-06: restored Contact — removing it broke "Contact is not appearing".)
  const desktopNavLinks = navLinks;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F0E8]/95 backdrop-blur-md border-b border-[#DFD9CC] py-3 shadow-xs'
          : 'bg-[#F4F0E8]/85 backdrop-blur-xs border-b border-[#DFD9CC]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-hidden"
            aria-label="Design Plus Home"
          >
            {/* Logo */}
            <img src="/logo.png" alt="Design Plus logo" width={44} height={44} className="w-11 h-11 object-contain shrink-0" />

            <div className="flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl tracking-[0.06em] text-[#1E1D1A] font-normal uppercase transition-colors relative overflow-hidden">
                <span className="block dp-wordmark-text">Design Plus</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-sheen"></span>
              </span>
              <span className="text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase font-sans text-[#6E665B] font-medium -mt-0.5">
                Architecture + Structural Studio · Ajmer
              </span>
            </div>
            
            <style>{`
              .dp-monogram-stroke {
                stroke-dasharray: 120;
                stroke-dashoffset: 120;
                animation: drawStroke 1.4s ease-out forwards;
              }
              @keyframes drawStroke {
                to { stroke-dashoffset: 0; }
              }
              @keyframes sheen {
                100% { transform: translateX(100%); }
              }
              .group-hover\\:animate-sheen {
                animation: sheen 0.6s ease-out;
              }
            `}</style>
          </Link>

          {/* Desktop Navigation Links - Premium Architectural Style (xl and up: room for all 8 links + CTA) */}
          <nav className="hidden xl:flex items-center space-x-8 text-xs font-sans uppercase tracking-[0.18em]">
            {desktopNavLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-1 font-medium transition-colors cursor-pointer ${
                    active ? 'text-[#B86B38]' : 'text-[#1E1D1A]/80 hover:text-[#B86B38]'
                  } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#B86B38] after:transition-all after:duration-300 ${
                    active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Direct CTA & Contact Action */}
          <div className="hidden xl:flex items-center space-x-3">
            {/* Client Portal / Saved Works */}
            <button
              onClick={onOpenClientPortal}
              title="Client Account & Saved Works"
              className="group p-2 rounded-full bg-white/80 hover:bg-[#B86B38]/15 text-[#6E665B] hover:text-[#B86B38] border border-[#1E1D1A]/10 hover:border-[#B86B38]/30 shadow-xs hover:shadow-sm active:scale-85 transition-all duration-300 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Bookmark className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-active:scale-125" />
              {savedProjects.length > 0 && (
                <span className="text-[#B86B38] font-mono text-[10px] font-bold">
                  ({savedProjects.length})
                </span>
              )}
            </button>

            <button
              onClick={onOpenConsultation}
              className="group rounded-full bg-[#1E1D1A] hover:bg-[#2D2C28] text-white pl-4 sm:pl-5 pr-1.5 py-1.5 text-xs font-sans font-semibold tracking-wide transition-all duration-300 inline-flex items-center gap-2.5 shadow-sm active:scale-90 active:ring-4 active:ring-[#B86B38]/40 cursor-pointer"
            >
              <span className="font-sans font-semibold text-white tracking-wide">START A PROJECT</span>
              <span className="w-6 h-6 rounded-full bg-[#B86B38] text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-110 group-active:rotate-45" aria-hidden="true">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Actions */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={onOpenClientPortal}
              className="p-2 text-[#1E1D1A]/80 hover:text-[#1E1D1A] relative"
              title="Client Portal & Saved"
              aria-label="Client Account"
            >
              <Bookmark className="w-4 h-4" />
              {savedProjects.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#1E1D1A] text-[#F4F0E8] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono">
                  {savedProjects.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1E1D1A] focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu - Premium Architectural Style */}
      {isOpen && (
        <div data-lenis-prevent className="xl:hidden bg-[#F4F0E8] border-b border-stone-300 px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto">
          <nav className="space-y-4 text-sm tracking-[0.25em] uppercase font-medium">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2.5 transition-colors border-b border-stone-200/60 ${
                    active ? 'text-[#B86B38] font-semibold' : 'text-[#1E1D1A] hover:text-[#B86B38]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-stone-300 space-y-4">
            <div className="text-xs text-stone-700 space-y-1">
              <div className="font-semibold text-stone-900 tracking-wider">Direct Consultation Line:</div>
              <a href={`tel:${BUSINESS_INFO.phones[0].raw}`} className="block text-stone-800 font-medium">
                {BUSINESS_INFO.phones[0].display}
              </a>
              <div className="text-stone-600 mt-0.5">{BUSINESS_INFO.email}</div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full text-center bg-[#1E1D1A] text-white py-3.5 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#2D2C28] transition-colors shadow-sm"
            >
              Book Studio Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
