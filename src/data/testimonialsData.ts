import { Testimonial } from '../types';

export interface TestimonialTrustSignal {
  metric: string;
  label: string;
  caption: string;
}

export const TESTIMONIAL_TRUST_SIGNALS: TestimonialTrustSignal[] = [
  {
    metric: '4.9 ★',
    label: 'Client Trust Rating',
    caption: 'Across 900+ commissioned works in Rajasthan'
  },
  {
    metric: '20+ Yrs',
    label: 'Chartered Experience',
    caption: 'FIV & Chartered Structural Engineering'
  },
  {
    metric: '100%',
    label: 'ADA Sanction Record',
    caption: 'Zero regulatory delays with Ajmer bylaws'
  },
  {
    metric: '900+',
    label: 'Projects Delivered',
    caption: 'Bespoke residences, estates & commercial spaces'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-01',
    clientName: 'Rajesh & Sunita Singhal',
    clientRole: 'Industrialist & Homeowner',
    projectTitle: 'Courtyard Villa at Panchsheel Nagar',
    projectLocation: 'Panchsheel Nagar, Ajmer',
    projectType: 'Bespoke Residential Architecture',
    area: '5,400 sq.ft.',
    rating: 5,
    highlight: 'Passive cooling courtyard and rock-solid structural stability',
    quote: 'From sun-path orientation to earthquake-resistant structural detailing, Er. Sudhir Soni and Ar. Vipul Verma delivered far beyond our expectations. The central sandstone courtyard keeps our entire home remarkably cool during peak Ajmer summers without heavy AC load, and their drawings made contractor execution seamless.',
    year: '2024',
    verifiedLabel: 'Commissioned & Handed Over',
    consultantsInvolved: 'Er. Sudhir Soni (Structure) & Ar. Vipul Verma (Architecture)'
  },
  {
    id: 't-02',
    clientName: 'Dr. Arvind K. Mathur',
    clientRole: 'Senior Consultant Physician',
    projectTitle: 'Multi-Generational Residence & Clinic',
    projectLocation: 'Civil Lines, Ajmer',
    projectType: 'Integrated Residential & Healthcare',
    area: '4,200 sq.ft.',
    rating: 5,
    highlight: 'Flawless ADA sanctioning and acoustic sound isolation',
    quote: 'Having our architectural plans and structural stability certificate processed through the Ajmer Development Authority without a single query was a massive relief. The acoustic separation between the ground-floor clinic and our private family residence on the upper floors demonstrates true spatial intelligence.',
    year: '2023',
    verifiedLabel: 'ADA Sanctioned & Completed',
    consultantsInvolved: 'Ar. Vipul Verma & Er. Ankit Soni'
  },
  {
    id: 't-03',
    clientName: 'Vikramaditya Rathore',
    clientRole: 'Estate Developer & Heritage Custodian',
    projectTitle: 'Sandstone Hillside Retreat',
    projectLocation: 'Pushkar Valley Foothills',
    projectType: 'Contextual Luxury Villa',
    area: '6,800 sq.ft.',
    rating: 5,
    highlight: 'Harmonious regional stone masonry with modern RCC cantilevers',
    quote: 'Design Plus achieved an extraordinary balance between indigenous Rajasthan Dholpur stone craftsmanship and razor-sharp modern structural engineering. The expansive cantilevered terraces overlooking the Aravalli hills feel weightless yet are anchored by formidable structural calculations.',
    year: '2024',
    verifiedLabel: 'Chartered Engineer Certified',
    consultantsInvolved: 'Er. Sudhir Soni (Chartered Engineer) & Design Team'
  },
  {
    id: 't-04',
    clientName: 'Pradeep Goyal',
    clientRole: 'Managing Director, Goyal Tradecorp',
    projectTitle: '4-Storey Mixed-Use Commercial Complex',
    projectLocation: 'Vaishali Nagar Commercial Corridor, Ajmer',
    projectType: 'Commercial Architecture & High-Load RCC',
    area: '12,500 sq.ft.',
    rating: 5,
    highlight: 'Maximum carpet area efficiency with zero wasted columns',
    quote: 'Designing a high-traffic commercial building requires rigorous structural efficiency and strict adherence to municipal parking norms. Design Plus engineered an optimal column grid that maximized leasable retail frontage while delivering full structural longevity and fire safety integration.',
    year: '2023',
    verifiedLabel: 'Commercial Build Commissioned',
    consultantsInvolved: 'Er. Sudhir Soni, Ar. Vipul Verma & Er. Shikha Soni'
  },
  {
    id: 't-05',
    clientName: 'Meenakshi & Ananya Sharma',
    clientRole: 'Educationists & Cultural Curators',
    projectTitle: 'Lakeview Minimalist Bungalow',
    projectLocation: 'Ana Sagar Promenade, Ajmer',
    projectType: 'Lakefront Contemporary Residence',
    area: '3,800 sq.ft.',
    rating: 5,
    highlight: 'Uninterrupted lake vistas with thermal double-glazed envelope',
    quote: 'The natural daylight orchestration, private garden courtyards, and tranquil material palette created an everyday sanctuary for our family. Design Plus was physically present on-site during critical concrete pours to inspect rebar placement, giving us deep reassurance.',
    year: '2024',
    verifiedLabel: 'Verified Homeowner Commission',
    consultantsInvolved: 'Ar. Vipul Verma & Er. Sudhir Soni'
  },
  {
    id: 't-06',
    clientName: 'Kailash Chand Jain',
    clientRole: 'Industrialist, Kishangarh Marble Belt',
    projectTitle: 'Corporate Headquarters & Stone Pavilion',
    projectLocation: 'Kishangarh - Ajmer Highway',
    projectType: 'Institutional & Corporate Campus',
    area: '18,000 sq.ft.',
    rating: 5,
    highlight: 'Monumental stone portal frame with long-span steel trusses',
    quote: 'Their dual qualification in architecture and structural engineering saved us at least three months of coordination headaches. They designed monumental stone gallery spaces with long-span trusses that allow our client displays to breathe naturally. A consummate professional team.',
    year: '2022',
    verifiedLabel: 'Corporate Commission Completed',
    consultantsInvolved: 'Er. Sudhir Soni (Principal SE) & Ar. Vipul Verma'
  }
];
