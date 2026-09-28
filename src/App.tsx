import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ConsultationModal } from './components/ConsultationModal';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { ClientAuthDrawer } from './components/ClientAuthDrawer';

// Direct First Paint Entry
import { HomePage } from './pages/HomePage';
import { OpeningReveal } from './components/OpeningReveal';

// Route Code Splitting: Secondary Public Pages (Loaded on demand to keep homepage bundle ultra-lean)
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(m => ({ default: m.TeamPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ProjectDispatcher = lazy(() => import('./pages/ProjectDispatcher').then(m => ({ default: m.ProjectDispatcher })));
const LocationsPage = lazy(() => import('./pages/LocationsPage').then(m => ({ default: m.LocationsPage })));
const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage').then(m => ({ default: m.LocationDetailPage })));
const BlogHubPage = lazy(() => import('./pages/BlogHubPage'));
const BlogHubArticlePage = lazy(() => import('./pages/BlogHubArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const ProjectManagementPage = lazy(() => import('./pages/ProjectManagementPage').then(m => ({ default: m.ProjectManagementPage })));
const ArchitectFeesAjmerPage = lazy(() => import('./pages/ArchitectFeesAjmerPage').then(m => ({ default: m.ArchitectFeesAjmerPage })));
const StructuralDrawingAjmerPage = lazy(() => import('./pages/StructuralDrawingAjmerPage').then(m => ({ default: m.StructuralDrawingAjmerPage })));
const VastuPage = lazy(() => import('./pages/VastuPage').then(m => ({ default: m.VastuPage })));
const FarmhousePage = lazy(() => import('./pages/FarmhousePage').then(m => ({ default: m.FarmhousePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductCategorySeoPage = lazy(() => import('./pages/ProductCategorySeoPage').then(m => ({ default: m.ProductCategorySeoPage })));
const ServiceGroupSeoPage = lazy(() => import('./pages/ServiceGroupSeoPage').then(m => ({ default: m.ServiceGroupSeoPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));

// Admin CMS Components & Pages (Lazy loaded on demand to minimize homepage bundle weight)
import { AdminProtectedRoute } from './components/admin/AdminProtectedRoute';
import { AdminLayout } from './components/admin/AdminLayout';
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })));
const AdminProjectsPage = lazy(() => import('./pages/admin/AdminProjectsPage').then(m => ({ default: m.AdminProjectsPage })));
const AdminProjectEditPage = lazy(() => import('./pages/admin/AdminProjectEditPage').then(m => ({ default: m.AdminProjectEditPage })));
const AdminBlogPage = lazy(() => import('./pages/admin/AdminBlogPage').then(m => ({ default: m.AdminBlogPage })));
const AdminBlogEditPage = lazy(() => import('./pages/admin/AdminBlogEditPage').then(m => ({ default: m.AdminBlogEditPage })));
const AdminServicesPage = lazy(() => import('./pages/admin/AdminServicesPage').then(m => ({ default: m.AdminServicesPage })));
const AdminLocationsPage = lazy(() => import('./pages/admin/AdminLocationsPage').then(m => ({ default: m.AdminLocationsPage })));
const AdminMediaPage = lazy(() => import('./pages/admin/AdminMediaPage').then(m => ({ default: m.AdminMediaPage })));
const AdminSeoPage = lazy(() => import('./pages/admin/AdminSeoPage').then(m => ({ default: m.AdminSeoPage })));
const AdminMessagesPage = lazy(() => import('./pages/admin/AdminMessagesPage').then(m => ({ default: m.AdminMessagesPage })));
const AdminTeamPage = lazy(() => import('./pages/admin/AdminTeamPage').then(m => ({ default: m.AdminTeamPage })));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage').then(m => ({ default: m.AdminSettingsPage })));
const AdminAuditLogPage = lazy(() => import('./pages/admin/AdminAuditLogPage').then(m => ({ default: m.AdminAuditLogPage })));

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState(false);
  const [isVeoStudioOpen, setIsVeoStudioOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      lerp: 0.08
    });
    console.log("Lenis initialized successfully 🚀");

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const frameId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.origin === window.location.origin && target.pathname === window.location.pathname) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  const openAiStudio = () => setIsAiStudioOpen(true);
  const closeAiStudio = () => setIsAiStudioOpen(false);

  const openVeoStudio = () => setIsVeoStudioOpen(true);
  const closeVeoStudio = () => setIsVeoStudioOpen(false);

  const openClientPortal = () => setIsClientPortalOpen(true);
  const closeClientPortal = () => setIsClientPortalOpen(false);

  return (
    <div className={`min-h-screen flex flex-col antialiased ${isAdminRoute ? 'bg-[#0e0d0b] text-stone-100' : 'bg-[#FBFBF9] text-stone-900 selection:bg-amber-200 selection:text-stone-900 font-sans'}`}>
      {!isAdminRoute && (
        <Navbar 
          onOpenConsultation={openConsultation}
          onOpenAiStudio={openAiStudio}
          onOpenVeoStudio={openVeoStudio}
          onOpenClientPortal={openClientPortal}
        />
      )}
      
      <div className="flex-1 flex flex-col min-w-0">
        <Suspense fallback={null}>
        <Routes>
          {/* ========================================================= */}
          {/* PUBLIC CLIENT PORTAL & SHOWCASE ROUTES                     */}
          {/* ========================================================= */}
          {/* 01 Homepage */}
          <Route path="/" element={<HomePage onOpenConsultation={openConsultation} />} />

          {/* 02 Studio & Team */}
          <Route path="/about" element={<AboutPage onOpenConsultation={openConsultation} />} />
          <Route path="/studio" element={<AboutPage onOpenConsultation={openConsultation} />} />
          <Route path="/team" element={<TeamPage onOpenConsultation={openConsultation} />} />

          {/* 03 Services & Technical Drawings */}
          <Route path="/services" element={<ServicesPage onOpenConsultation={openConsultation} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/project-management" element={<ProjectManagementPage onOpenConsultation={openConsultation} />} />
          <Route path="/architect-fees-ajmer" element={<ArchitectFeesAjmerPage onOpenConsultation={openConsultation} />} />
          <Route path="/structural-drawing-ajmer" element={<StructuralDrawingAjmerPage onOpenConsultation={openConsultation} />} />
          <Route path="/vastu" element={<VastuPage onOpenConsultation={openConsultation} />} />
          <Route path="/farmhouse" element={<FarmhousePage onOpenConsultation={openConsultation} />} />
          <Route path="/products" element={<ProductsPage onOpenConsultation={openConsultation} />} />
          <Route path="/products/:categorySlug" element={<ProductCategorySeoPage onOpenConsultation={openConsultation} />} />
          <Route path="/services/group/:groupSlug" element={<ServiceGroupSeoPage onOpenConsultation={openConsultation} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

          {/* 04 Portfolio / Projects Engine */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/residential" element={<ProjectsPage initialCategory="residential" />} />
          <Route path="/projects/commercial" element={<ProjectsPage initialCategory="commercial" />} />
          <Route path="/projects/interior" element={<ProjectsPage initialCategory="interior" />} />
          <Route path="/projects/interiors" element={<ProjectsPage initialCategory="interior" />} />
          <Route path="/projects/structural" element={<ProjectsPage initialCategory="structural" />} />
          <Route path="/projects/concept" element={<ProjectsPage initialCategory="concept" />} />
          <Route path="/projects/category/:category" element={<ProjectsPage />} />
          <Route path="/projects/:category/:slug" element={<ProjectDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/projects/:param" element={<ProjectDispatcher onOpenConsultation={openConsultation} />} />

          {/* 05 Regional Service Locations */}
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<LocationDetailPage onOpenConsultation={openConsultation} />} />

          {/* 06 Blog Hub */}
          <Route path="/blog" element={<BlogHubPage />} />
          <Route path="/blog/:slug" element={<BlogHubArticlePage />} />

          {/* 07 Contact & Inquiries */}
          <Route path="/contact" element={<ContactPage />} />

          {/* ========================================================= */}
          {/* PRIVATE ADMIN CMS PORTAL                                  */}
          {/* ========================================================= */}
          {/* Public Login Route */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Protected Admin CMS Shell with Basic Editorial Layout */}
          <Route 
            path="/admin" 
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="projects" element={<AdminProjectsPage />} />
            <Route path="projects/new" element={<AdminProjectEditPage />} />
            <Route path="projects/:id" element={<AdminProjectEditPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="blog/new" element={<AdminBlogEditPage />} />
            <Route path="blog/:id" element={<AdminBlogEditPage />} />
            <Route path="services" element={<AdminServicesPage />} />
            <Route path="locations" element={<AdminLocationsPage />} />
            <Route path="media" element={<AdminMediaPage />} />
            <Route path="seo" element={<AdminSeoPage />} />
            <Route path="messages" element={<AdminMessagesPage />} />
            <Route path="team" element={<AdminTeamPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
            <Route path="audit-log" element={<AdminAuditLogPage />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>

          {/* Public Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </Suspense>
      </div>

      {!isAdminRoute && <Footer />}

      {/* Global Drawers & Modals */}
      {!isAdminRoute && (
        <>
          <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
          <ClientAuthDrawer 
            isOpen={isClientPortalOpen} 
            onClose={closeClientPortal} 
            onOpenConsultation={openConsultation} 
          />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AdminAuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <OpeningReveal />
          <AppContent />
        </BrowserRouter>
      </AdminAuthProvider>
    </AuthProvider>
  );
}
