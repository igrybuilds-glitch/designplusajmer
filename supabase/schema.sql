-- =============================================================================
-- DESIGN PLUS ARCHITECTURE & STRUCTURAL ENGINEERING STUDIO
-- Supabase Production PostgreSQL Schema (Idempotent / Re-runnable)
-- Project ID: ddtbmfnfwmffpqibjpks
-- =============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- -----------------------------------------------------------------------------
-- Helper Function: Update timestamps automatically
-- -----------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================================================
-- 1. PROJECTS / PORTFOLIO TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('residential', 'commercial', 'interior', 'structural', 'concept', 'institutional')),
  location TEXT NOT NULL DEFAULT 'Ajmer, Rajasthan',
  year TEXT NOT NULL DEFAULT '2024',
  area TEXT NOT NULL DEFAULT '4,500 sq.ft.',
  client TEXT,
  description TEXT NOT NULL,
  challenge TEXT,
  solution TEXT,
  hero_image TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  structural_highlights TEXT[] DEFAULT '{}',
  stats JSONB DEFAULT '{"bedrooms": 4, "floors": 3, "orientation": "East"}',
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TRIGGER IF EXISTS set_projects_timestamp ON public.projects;
CREATE TRIGGER set_projects_timestamp
BEFORE UPDATE ON public.projects
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- 2. JOURNAL & ARTICLES (BLOG) TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  reading_time TEXT DEFAULT '5 min read',
  author_name TEXT DEFAULT 'Er. Sudhir Soni',
  author_role TEXT DEFAULT 'Principal Structural Engineer & Founder',
  tags TEXT[] DEFAULT '{}',
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TRIGGER IF EXISTS set_blog_timestamp ON public.blog_posts;
CREATE TRIGGER set_blog_timestamp
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- 3. CLIENT INQUIRIES & LEADS TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT DEFAULT 'Ajmer',
  service_requested TEXT NOT NULL,
  plot_size_or_area TEXT,
  estimated_budget TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'consultation_scheduled', 'in_progress', 'archived')),
  admin_notes TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

DROP TRIGGER IF EXISTS set_inquiries_timestamp ON public.inquiries;
CREATE TRIGGER set_inquiries_timestamp
BEFORE UPDATE ON public.inquiries
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- 4. CONSULTATION BOOKINGS TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time_slot TEXT NOT NULL,
  consultation_type TEXT DEFAULT 'Architecture & Planning' CHECK (consultation_type IN ('Architecture & Planning', 'Structural Audit', 'Interior Architecture', 'Turnkey Construction')),
  site_location TEXT DEFAULT 'Ajmer',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 5. ARCHITECTURAL SERVICES TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  tagline TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  key_features TEXT[] DEFAULT '{}',
  deliverables TEXT[] DEFAULT '{}',
  hero_image TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- 6. MEDIA ASSETS LIBRARY TABLE
-- =============================================================================
CREATE TABLE IF NOT EXISTS public.media_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  category TEXT DEFAULT 'General' CHECK (category IN ('Projects', 'Blog', 'Services', 'Drawings', 'General')),
  dimensions TEXT DEFAULT '1920x1080',
  file_size TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES - CLEAN DROP & RECREATE
-- =============================================================================

-- Enable RLS across all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_assets ENABLE ROW LEVEL SECURITY;

-- 1. PROJECTS POLICIES
DROP POLICY IF EXISTS "Public can view published projects" ON public.projects;
CREATE POLICY "Public can view published projects"
  ON public.projects
  FOR SELECT
  USING (is_published = true);

DROP POLICY IF EXISTS "Admins full access to projects" ON public.projects;
CREATE POLICY "Admins full access to projects"
  ON public.projects
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  )
  WITH CHECK (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- 2. BLOG POSTS POLICIES
DROP POLICY IF EXISTS "Public can view published blog posts" ON public.blog_posts;
CREATE POLICY "Public can view published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (is_published = true);

DROP POLICY IF EXISTS "Admins full access to blog posts" ON public.blog_posts;
CREATE POLICY "Admins full access to blog posts"
  ON public.blog_posts
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  )
  WITH CHECK (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- 3. INQUIRIES POLICIES
DROP POLICY IF EXISTS "Public can submit new inquiries" ON public.inquiries;
CREATE POLICY "Public can submit new inquiries"
  ON public.inquiries
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view and manage inquiries" ON public.inquiries;
CREATE POLICY "Admins can view and manage inquiries"
  ON public.inquiries
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- 4. CONSULTATIONS POLICIES
DROP POLICY IF EXISTS "Public can request consultations" ON public.consultations;
CREATE POLICY "Public can request consultations"
  ON public.consultations
  FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can view and manage consultations" ON public.consultations;
CREATE POLICY "Admins can view and manage consultations"
  ON public.consultations
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- 5. SERVICES POLICIES
DROP POLICY IF EXISTS "Public can view active services" ON public.services;
CREATE POLICY "Public can view active services"
  ON public.services
  FOR SELECT
  USING (is_active = true);

DROP POLICY IF EXISTS "Admins can manage services" ON public.services;
CREATE POLICY "Admins can manage services"
  ON public.services
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- 6. MEDIA ASSETS POLICIES
DROP POLICY IF EXISTS "Public can read media assets" ON public.media_assets;
CREATE POLICY "Public can read media assets"
  ON public.media_assets
  FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admins can manage media assets" ON public.media_assets;
CREATE POLICY "Admins can manage media assets"
  ON public.media_assets
  FOR ALL
  USING (
    auth.role() = 'service_role' 
    OR (auth.jwt() ->> 'email') IN ('igrybuilds@gmail.com', 'designplusajmer@gmail.com') 
    OR (auth.jwt() -> 'app_metadata' ->> 'admin')::boolean = true
  );

-- =============================================================================
-- PERFORMANCE INDEXES (IF NOT EXISTS)
-- =============================================================================
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects (slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects (category);
CREATE INDEX IF NOT EXISTS idx_projects_published ON public.projects (is_published);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON public.blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_published ON public.blog_posts (is_published);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);

-- =============================================================================
-- SEED DATA (SAFE UPSERT)
-- =============================================================================
INSERT INTO public.projects (title, slug, category, location, year, area, description, hero_image, is_featured, is_published)
VALUES 
  (
    'The Courtyard Residence',
    'courtyard-residence-ajmer',
    'residential',
    'Civil Lines, Ajmer',
    '2023',
    '5,800 sq.ft.',
    'A contemporary Haveli adaptation framing central ventilation shafts, integrated thermal massing, and bespoke Rajasthani stone jali shading.',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    true,
    true
  ),
  (
    'Anasagar Vista Villa',
    'anasagar-vista-villa',
    'residential',
    'Circular Road, Ajmer',
    '2024',
    '7,200 sq.ft.',
    'Engineered cantilevered living pavilions overlooking Anasagar Lake with seismic structural calculations and passive cooling wind-catchers.',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    true,
    true
  ),
  (
    'Pushkar Valley Eco-Resort',
    'pushkar-valley-resort',
    'commercial',
    'Pushkar Ghati, Rajasthan',
    '2022',
    '28,000 sq.ft.',
    'Low-impact rammed earth pavilions and structural stone arches tuned to high-amplitude desert diurnal temperature shifts.',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80',
    true,
    true
  )
ON CONFLICT (slug) DO NOTHING;
