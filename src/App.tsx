import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ConsultationModal } from './components/ConsultationModal';
import { AuthProvider } from './context/AuthContext';
import { AdminAuthProvider } from './context/AdminAuthContext';
import { AiConsultantDrawer } from './components/AiConsultantDrawer';
import { VeoStudioModal } from './components/VeoStudioModal';
import { ClientAuthDrawer } from './components/ClientAuthDrawer';
import { Sparkles, Film } from 'lucide-react';

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectDispatcher } from './pages/ProjectDispatcher';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogCategoryPage } from './pages/BlogCategoryPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { BlogDispatcher } from './pages/BlogDispatcher';
import { ContactPage } from './pages/ContactPage';
import { OpeningReveal } from './components/OpeningReveal';

// Admin CMS Components & Pages
import { AdminProtectedRoute } from './components/admin/AdminProtectedRoute';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProjectsPage } from './pages/admin/AdminProjectsPage';
import { AdminProjectEditPage } from './pages/admin/AdminProjectEditPage';
import { AdminBlogPage } from './pages/admin/AdminBlogPage';
import { AdminBlogEditPage } from './pages/admin/AdminBlogEditPage';
import { AdminServicesPage } from './pages/admin/AdminServicesPage';
import { AdminLocationsPage } from './pages/admin/AdminLocationsPage';
import { AdminMediaPage } from './pages/admin/AdminMediaPage';
import { AdminSeoPage } from './pages/admin/AdminSeoPage';
import { AdminMessagesPage } from './pages/admin/AdminMessagesPage';
import { AdminTeamPage } from './pages/admin/AdminTeamPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminAuditLogPage } from './pages/admin/AdminAuditLogPage';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAiStudioOpen, setIsAiStudioOpen] = useState(false);
  const [isVeoStudioOpen, setIsVeoStudioOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);

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
        <Routes>
          {/* ========================================================= */}
          {/* PUBLIC CLIENT PORTAL & SHOWCASE ROUTES                     */}
          {/* ========================================================= */}
          {/* 01 Homepage */}
          <Route path="/" element={<HomePage onOpenConsultation={openConsultation} />} />

          {/* 02 Studio & Team */}
          <Route path="/about" element={<AboutPage onOpenConsultation={openConsultation} />} />

          {/* 03 Services */}
          <Route path="/services" element={<ServicesPage onOpenConsultation={openConsultation} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={openConsultation} />} />

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

          {/* 06 Journal / Blog Content Engine */}
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Explicit Blog Category Routes */}
          <Route path="/blog/architecture" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/interior-design" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/residential-design" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/commercial-design" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/house-planning" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/ajmer" element={<BlogCategoryPage onOpenConsultation={openConsultation} />} />

          {/* Explicit Blog Article Routes */}
          <Route path="/blog/architecture/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/interior-design/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/residential-design/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/commercial-design/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/house-planning/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/ajmer/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />

          {/* Catch-all Hierarchical & Fallback Dispatchers */}
          <Route path="/blog/:category/:slug" element={<BlogDetailPage onOpenConsultation={openConsultation} />} />
          <Route path="/blog/:param" element={<BlogDispatcher onOpenConsultation={openConsultation} />} />

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
      </div>

      {!isAdminRoute && <Footer />}

      {/* Floating AI & Animation Quick Action Trigger (Bottom Right) */}
      {!isAdminRoute && (
        <div 
          id="floating-studio-actions"
          className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-2.5 items-end pointer-events-none max-w-[calc(100vw-1.5rem)]"
        >
          <button
            onClick={openVeoStudio}
            title="Veo 3D Architectural Animation Studio (veo-3.1-fast-generate-preview)"
            aria-label="Open Veo 3D Studio"
            className="pointer-events-auto bg-stone-900/95 backdrop-blur-md text-amber-200 hover:bg-stone-800 border border-stone-700/90 shadow-lg p-2.5 sm:px-3.5 sm:py-2.5 min-h-[42px] min-w-[42px] sm:min-h-[44px] rounded-full flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95"
          >
            <Film className="w-4 h-4 text-purple-300 shrink-0" />
            <span className="hidden sm:inline">Veo 3D Studio</span>
          </button>

          <button
            onClick={openAiStudio}
            title="Design Plus AI Consultation & Gemini Live Voice (gemini-3.8-live / Pro / Flash)"
            aria-label="Open AI Architect & Live Voice"
            className="pointer-events-auto bg-amber-900/95 backdrop-blur-md text-amber-100 hover:bg-amber-800 border border-amber-700/90 shadow-xl px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-[44px] rounded-full flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
            <span className="hidden sm:inline">AI Architect &amp; Live Voice</span>
            <span className="sm:hidden font-mono tracking-normal">AI Architect</span>
          </button>
        </div>
      )}

      {/* Global Drawers & Modals */}
      {!isAdminRoute && (
        <>
          <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
          <AiConsultantDrawer isOpen={isAiStudioOpen} onClose={closeAiStudio} />
          <VeoStudioModal isOpen={isVeoStudioOpen} onClose={closeVeoStudio} />
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
