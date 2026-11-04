import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

// Real 404 page (2026-11-04, score-100 lane): the public catch-all route
// previously redirected every unknown URL to the homepage (a soft 404 —
// search engines treat it as a duplicate of home, and visitors lose the
// page they asked for). This page renders an honest not-found state with
// noindex, and points visitors at the pages they most likely wanted.
export function NotFoundPage() {
  return (
    <main className="pt-32 pb-24">
      <SEOHead
        title="Page Not Found | Design Plus"
        description="The page you were looking for is not on designplusajmer.co.in. Browse Design Plus services, projects and house-design guides for Ajmer instead."
        noindex
      />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-stone-500">Error 404</p>
        <h1 className="font-editorial text-4xl sm:text-5xl text-stone-950 font-normal leading-tight">
          This page is not on the plan.
        </h1>
        <p className="text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
          The address you opened does not match any page on this site — it may have moved, or the
          link may have a typo. These are the pages most visitors are looking for:
        </p>
        <nav aria-label="Popular pages" className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors min-h-[44px]"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-3 border border-stone-300 text-stone-800 text-sm font-medium hover:border-stone-500 transition-colors min-h-[44px]"
          >
            Services
          </Link>
          <Link
            to="/house-design-ajmer"
            className="inline-flex items-center px-5 py-3 border border-stone-300 text-stone-800 text-sm font-medium hover:border-stone-500 transition-colors min-h-[44px]"
          >
            House Design in Ajmer
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center px-5 py-3 border border-stone-300 text-stone-800 text-sm font-medium hover:border-stone-500 transition-colors min-h-[44px]"
          >
            Guides &amp; Blog
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-3 border border-stone-300 text-stone-800 text-sm font-medium hover:border-stone-500 transition-colors min-h-[44px]"
          >
            Contact the Studio
          </Link>
        </nav>
        <p className="text-sm text-stone-500 pt-4">
          Looking for something specific? Call the studio on{' '}
          <a href="tel:+917976453090" className="underline underline-offset-4 hover:text-stone-800">
            +91 79764 53090
          </a>{' '}
          and we will point you to the right page.
        </p>
      </section>
    </main>
  );
}

export default NotFoundPage;
