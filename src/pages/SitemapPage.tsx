import { Link } from 'react-router-dom';
import { ArrowLeft, Map } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { EditorialHero } from '../components/EditorialHero';

const GROUPS: { heading: string; links: { to: string; label: string }[] }[] = [
  {
    heading: 'Studio',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About the Studio' },
      { to: '/team', label: 'Team & Leadership' },
      { to: '/contact', label: 'Contact' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { to: '/services', label: 'All Services' },
      { to: '/services/architectural-design', label: 'Architectural Design' },
      { to: '/services/residential-architecture', label: 'Residential Architecture' },
      { to: '/services/commercial-architecture', label: 'Commercial Architecture' },
      { to: '/services/interior-design', label: 'Interior Design' },
      { to: '/services/structural-design', label: 'Structural Design' },
      { to: '/services/planning', label: 'Planning' },
      { to: '/services/infrastructure', label: 'Infrastructure' },
      { to: '/services/bridges', label: 'Bridges' },
      { to: '/services/hydraulics', label: 'Hydraulics' },
      { to: '/services/water-sewerage', label: 'Water & Sewerage' },
      { to: '/services/topographical-survey', label: 'Topographical Survey' },
      { to: '/services/geotechnical-consultancy', label: 'Geotechnical Consultancy' },
      { to: '/services/hotel-resort-architecture', label: 'Hotel & Resort Architecture' },
      { to: '/project-management', label: 'Project Management' },
      { to: '/turnkey-construction-ajmer', label: 'Turnkey Construction Ajmer' },
    ],
  },
  {
    heading: 'Cost Guides',
    links: [
      { to: '/architect-fees-ajmer', label: 'Architect Fees in Ajmer (Calculator)' },
      { to: '/structural-drawing-ajmer', label: 'Structural Drawing Charges Ajmer' },
    ],
  },
  {
    heading: 'Specialist Pages',
    links: [
      { to: '/farmhouse', label: 'Farmhouse Design' },
      { to: '/vastu', label: 'Vastu-Compliant Design' },
      { to: '/modular-kitchen-ajmer', label: 'Modular Kitchen Ajmer' },
      { to: '/renovation-ajmer', label: 'Renovation Ajmer' },
      { to: '/products', label: 'Products' },
    ],
  },
  {
    heading: 'Portfolio',
    links: [
      { to: '/projects', label: 'All Projects' },
      { to: '/projects/residential', label: 'Residential Projects' },
      { to: '/projects/commercial', label: 'Commercial Projects' },
      { to: '/projects/interior', label: 'Interior Projects' },
      { to: '/projects/structural', label: 'Structural Projects' },
      { to: '/projects/concept', label: 'Concept Projects' },
    ],
  },
  {
    heading: 'Locations Served',
    links: [
      { to: '/locations', label: 'All Locations' },
      { to: '/locations/ajmer', label: 'Architect in Ajmer' },
      { to: '/locations/jaipur', label: 'Architect in Jaipur' },
      { to: '/locations/pushkar', label: 'Architect in Pushkar' },
      { to: '/locations/kishangarh', label: 'Architect in Kishangarh' },
      { to: '/locations/udaipur', label: 'Architect in Udaipur' },
      { to: '/locations/beawar', label: 'Architect in Beawar' },
      { to: '/locations/nasirabad', label: 'Architect in Nasirabad' },
    ],
  },
  {
    heading: 'Journal',
    links: [
      { to: '/blog', label: 'All Articles' },
      { to: '/blog/how-to-plan-your-dream-home-in-ajmer', label: 'How to Plan Your Dream Home in Ajmer' },
      { to: '/blog/cost-of-building-a-house-in-ajmer-2026', label: 'Cost of Building a House in Ajmer (2026)' },
      { to: '/blog/guide-to-hiring-architect-in-ajmer', label: 'Guide to Hiring an Architect in Ajmer' },
      { to: '/blog/top-10-architects-in-ajmer', label: 'Top 10 Architects in Ajmer' },
      { to: '/blog/architectural-trends-ajmer-2026', label: 'Architectural Trends Ajmer 2026' },
      { to: '/blog/sustainable-eco-friendly-architecture-ajmer', label: 'Sustainable Architecture Ajmer' },
      { to: '/blog/vaastu-compliant-home-plans-ajmer', label: 'Vaastu-Compliant Home Plans Ajmer' },
      { to: '/blog/interior-design-cost-per-sqft-ajmer', label: 'Interior Design Cost per Sq Ft Ajmer' },
    ],
  },
];

export function SitemapPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sitemap | Design Plus Ajmer',
    description: 'Complete sitemap of the Design Plus Architecture & Structural Engineering Studio website — every page, service, location and journal article.',
    url: 'https://www.designplusajmer.co.in/sitemap',
  };

  return (
    <main id="sitemap-page" className="min-h-screen bg-[#faf8f5] text-[#141414] pt-28 pb-20">
      <SEOHead
        title="Sitemap | Design Plus Ajmer"
        description="Browse every page on the Design Plus Studio website — services, portfolio, locations, cost guides and journal articles."
        keywords="sitemap design plus, site pages ajmer architect"
        canonical="https://www.designplusajmer.co.in/sitemap"
        schema={schema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C86635] hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <EditorialHero
        subtitle="Find Everything"
        title="Sitemap"
        description="Every page on the Design Plus website — services, portfolio, locations we serve, cost guides and journal articles."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-8">
          {GROUPS.map((group) => (
            <nav key={group.heading} aria-label={`Sitemap — ${group.heading}`} className="bg-white p-6 rounded-3xl border border-stone-300 shadow-sm">
              <h2 className="flex items-center gap-2 font-editorial text-xl text-stone-950 font-medium mb-4">
                <Map className="w-4 h-4 text-[#C86635]" aria-hidden="true" />
                {group.heading}
              </h2>
              <ul className="space-y-2">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-stone-700 hover:text-[#C86635] hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
    </main>
  );
}
