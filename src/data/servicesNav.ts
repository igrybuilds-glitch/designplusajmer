/**
 * Slim services navigation index — slug + title ONLY.
 *
 * PERF: Navbar/Footer (first paint) need just slug+title for their links.
 * The full `SERVICES` records in `./services` (~16 KiB rendered: descriptions,
 * deliverables, related links) must NOT ride the initial bundle, so this
 * file deliberately does NOT import `./services`. It is the single nav
 * source for above-the-fold chrome; detail pages keep importing the full
 * records from `./services` (lazy route chunks only).
 *
 * MAINTENANCE: keep `slug`/`title` in sync with `SERVICES` in `./services.ts`
 * (same order, same values). If a service is added/renamed there, mirror it
 * here.
 */

export interface ServiceNavItem {
  slug: string;
  title: string;
}

export const SERVICES_NAV: ServiceNavItem[] = [
  { slug: 'architectural-design', title: 'Architectural Design' },
  { slug: 'residential-architecture', title: 'Residential Architecture' },
  { slug: 'commercial-architecture', title: 'Commercial Architecture' },
  { slug: 'interior-design', title: 'Interior Design' },
  { slug: 'structural-design', title: 'Chartered Structural Engineering' },
  { slug: 'infrastructure', title: 'Civil & Transport Infrastructure' },
  { slug: 'bridges', title: 'Bridges & Flyovers' },
  { slug: 'hydraulics', title: 'Dams, Weirs & Irrigation Canals' },
  { slug: 'water-sewerage', title: 'Water Supply & Sewerage Networks' },
  { slug: 'topographical-survey', title: 'Topographical Survey & Geodesy' },
  { slug: 'geotechnical-consultancy', title: 'Geotechnical Investigation & SBC' },
  { slug: 'planning', title: 'Township & Urban Master Planning' },
  { slug: 'hotel-resort-architecture', title: 'Hotel & Resort Architecture' },
];
