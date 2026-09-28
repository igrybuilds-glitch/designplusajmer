import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';

interface EngineeringDiscipline {
  id: string;
  title: string;
  category: string;
  codeStandard: string;
  tagline: string;
  description: string;
  technicalParameters: { label: string; value: string }[];
  deliverables: string[];
  imageUrl: string;
  schematicType: 'bridge' | 'highway' | 'dam' | 'water' | 'geotechnical' | 'survey' | 'township';
}

const DISCIPLINES: EngineeringDiscipline[] = [
  {
    id: 'highways',
    title: 'Highways & Arterial Corridors',
    category: 'TRANSPORTATION INFRASTRUCTURE',
    codeStandard: 'IRC:37-2018 · IRC:SP:84-2019 · MoRTH',
    tagline: 'Multi-Lane Expressways & Pavement Engineering',
    description: 'Geometric alignment, flexible and rigid pavement design, subgrade California Bearing Ratio (CBR) optimization, grade separators, and high-volume multi-lane arterial road networks engineered to Ministry of Road Transport and Highways (MoRTH) criteria.',
    technicalParameters: [
      { label: 'Design Axle Load', value: '150 MSA (Million Standard Axles)' },
      { label: 'Subgrade CBR Threshold', value: 'Min. 8% Stabilized Soil' },
      { label: 'Geometric Design Speed', value: '80 – 100 km/h Ruling' },
      { label: 'Pavement Type', value: 'Pavement Quality Concrete (PQC) & SMA' }
    ],
    deliverables: [
      'Geometric Horizontal & Vertical Alignment Drawings',
      'Pavement Thickness Design Report (IRC:37 / IRC:58)',
      'Cross-Section Schedules at 20m Chaining Intervals',
      'Junction & Rotary Intersection Geometry Details'
    ],
    imageUrl: '/images/services/highway-engineering.webp',
    schematicType: 'highway'
  },
  {
    id: 'bridges-flyovers',
    title: 'Bridges, Flyovers & Grade Separators',
    category: 'HEAVY STRUCTURAL INFRASTRUCTURE',
    codeStandard: 'IRC:112-2020 · IRC:6-2017 · IRC:78-2014',
    tagline: 'Prestressed Concrete Box Girders & Deep Pier Foundations',
    description: 'Complete superstructure and substructure engineering for urban flyovers, river bridges, and railway overbridges (ROBs). Designed for IRC Class 70R heavy freight loading with seismic-resistant elastomeric bearings and cast-in-situ bored pile foundations.',
    technicalParameters: [
      { label: 'Live Load Rating', value: 'IRC Class 70R (Wheeled & Tracked)' },
      { label: 'Superstructure Form', value: 'Continuous PSC Box Girder (up to 35m)' },
      { label: 'Substructure Piles', value: '1200mm Dia Bored Cast-in-Situ' },
      { label: 'Bearing System', value: 'POT-PTFE Multi-Rotational Bearings' }
    ],
    deliverables: [
      'General Arrangement Drawing (GAD) & Span Schematics',
      'Bending Moment & Shear Envelope Calculations',
      'Pier & Abutment Stability Analysis Reports',
      'Bar Bending Schedule (BBS) & Construction Stage Phasing'
    ],
    imageUrl: '/images/services/bridges-flyovers.webp',
    schematicType: 'bridge'
  },
  {
    id: 'dams-canals',
    title: 'Dams, Spillways & Canal Aqueducts',
    category: 'WATER RESOURCES & HYDRAULIC STRUCTURES',
    codeStandard: 'IS 6512 · IS 11130 · IS 7335 · CWC Guidelines',
    tagline: 'Gravity Dams, Ogee Spillways & Canal Aqueducts',
    description: 'Hydraulic and structural engineering for water storage and conveyance infrastructure. Featuring stability analysis for gravity dams against overturning and sliding, energy dissipation basin design, and RCC aqueduct flumes across drainage channels.',
    technicalParameters: [
      { label: 'Flood Discharge Capacity', value: 'PMF (Probable Maximum Flood) 1,500 m³/s' },
      { label: 'Spillway Type', value: 'Controlled Ogee Crest with Radial Gates' },
      { label: 'Sliding Factor of Safety', value: 'FS > 1.50 under Full Reservoir Level' },
      { label: 'Uplift Pressure Relief', value: 'Foundation Drainage Curtain & Gallery' }
    ],
    deliverables: [
      'Reservoir Submergence & Storage Capacity Curves',
      'Dam Stability Analysis (Overturning, Sliding, Tension)',
      'Energy Dissipator & Stilling Basin Hydraulic Profiles',
      'Canal Lining & Cross-Drainage Structure Drawings'
    ],
    imageUrl: '/images/services/dams-canals.webp',
    schematicType: 'dam'
  },
  {
    id: 'water-sewerage',
    title: 'Water Supply & Sewerage Networks',
    category: 'PUBLIC HEALTH ENGINEERING (PHE)',
    codeStandard: 'CPHEEO Manuals · IS 1172 · IS 1742',
    tagline: 'Elevated Service Reservoirs (ESR), OHT & Trunk Pipelines',
    description: 'Comprehensive public health engineering including Elevated Service Reservoirs (ESR/OHT), Clear Water Sumps, trunk gravity and rising mains, sewage treatment plant (STP) hydraulic sizing, and decentralized municipal drainage systems.',
    technicalParameters: [
      { label: 'ESR Tank Capacity', value: '500 KL to 5,000 KL Staging' },
      { label: 'Hydraulic Modeling', value: 'EPANET Pressurized Network Analysis' },
      { label: 'Pipeline Material', value: 'DI (Ductile Iron) K9 & HDPE PN16' },
      { label: 'Per Capita Demand', value: '135 LPCD (Urban Residential Standard)' }
    ],
    deliverables: [
      'Hydraulic Profile & Network Flow Calculation Reports',
      'ESR Staging Tower Structural & Earthquake Analysis',
      'Pipe Longitudinal Section & Bedding Detail Drawings',
      'Valve Chamber & Sump Chamber Construction Details'
    ],
    imageUrl: '/images/services/water-sewerage.webp',
    schematicType: 'water'
  },
  {
    id: 'topographical-survey',
    title: 'Topographical Survey & Geotechnics',
    category: 'SITE INVESTIGATION & MAPPING',
    codeStandard: 'IS 1892 · IS 2131 · DGPS RTK Standards',
    tagline: 'Subsurface Borehole Logging & DGPS Contour Mapping',
    description: 'High-precision land surveying utilizing Real-Time Kinematic (RTK) DGPS and Robotic Total Stations to establish benchmarked contour maps. Coupled with geotechnical rotary core drilling and Standard Penetration Testing (SPT) for safe bearing capacity.',
    technicalParameters: [
      { label: 'Horizontal & Vertical Accuracy', value: '±5mm RTK DGPS Precision' },
      { label: 'Contour Interval Mapping', value: '0.25m Precision Intervals' },
      { label: 'Borehole Drilling Depth', value: 'Up to 30m or Refusal Strata' },
      { label: 'Safe Bearing Capacity (SBC)', value: '180 – 450 kN/m² Laboratory Certified' }
    ],
    deliverables: [
      'Benchmarked Contour Plans in DWG & PDF Formats',
      'Geotechnical Borehole Log & Strata Profile Reports',
      'Soil Shear Strength & Triaxial Test Laboratory Sheets',
      'Cadastral Boundary Verification & Alignment Files'
    ],
    imageUrl: '/images/services/topographical-survey.webp',
    schematicType: 'geotechnical'
  },
  {
    id: 'township-planning',
    title: 'Township Planning & Statutory Liaison',
    category: 'URBAN PLANNING & MUNICIPAL LIASONING',
    codeStandard: 'Rajasthan Urban Improvement Act · ADA Byelaws',
    tagline: 'Master Zoning, Subdivision & Municipal Sanctioning',
    description: 'Large-scale real estate master planning, residential township zoning, utility corridor placement, open-space green ratios, and complete architectural sanction documentation processed through the Ajmer Development Authority (ADA) and urban bodies.',
    technicalParameters: [
      { label: 'Master Plan Area', value: '10 to 250+ Acres Subdivisions' },
      { label: 'Road Network Hierarchy', value: '18m, 12m & 9m Arterial R/W' },
      { label: 'Public Amenity Allocation', value: 'Min. 15% Parks & Utilities' },
      { label: 'Statutory Compliance', value: 'ADA & UIT Building Byelaws' }
    ],
    deliverables: [
      'Township Master Land-Use & Zoning Plan',
      'Subdivision Layout & Plot Demarcation Drawings',
      'Municipal Sanction Application Dossiers & Liaising',
      'Environmental & Stormwater Drainage Master Schemes'
    ],
    imageUrl: '/images/services/township-planning.webp',
    schematicType: 'township'
  }
];

export function EngineeringExpertiseShowcase() {
  const [activeId, setActiveId] = useState<string>(DISCIPLINES[0].id);
  const activeDiscipline = DISCIPLINES.find(d => d.id === activeId) || DISCIPLINES[0];

  return (
    <section 
      id="civil-infrastructure" 
      aria-label="Civil and Infrastructure Engineering Expertise"
      className="py-20 sm:py-28 lg:py-36 bg-transparent text-[#F4F0E8] border-b border-white/15 relative overflow-hidden transition-colors"
    >
      {/* Dark Readability Overlay for Fixed Video Background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-12 sm:mb-16 text-xs font-mono text-[#F4F0E8]/70">
          <div className="flex items-center gap-2">
            <span className="text-[#B86B38] font-semibold">08.</span>
            <span className="uppercase tracking-[0.2em] font-medium text-white">Civil &amp; Infrastructure Engineering</span>
          </div>
          <span className="hidden sm:inline-block tracking-[0.16em] uppercase text-[#F4F0E8]/70">
            Highways, Bridges, Dams, PHE &amp; Master Planning
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4">
          <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight uppercase text-white" style={{ textWrap: 'balance' }}>
            Heavy civil works <br />
            <span className="italic font-light text-[#F4F0E8]/70">&amp; municipal infrastructure.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F4F0E8]/85 font-sans max-w-2xl font-normal leading-relaxed">
            Beyond private luxury estates, Design Plus maintains a rigorous civil engineering division delivering state highways, pre-stressed flyovers, water resource dams, and urban township master plans across Rajasthan.
          </p>
        </div>

        {/* Sub-discipline Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {DISCIPLINES.map((disc) => {
            const isSelected = disc.id === activeId;
            return (
              <button
                key={disc.id}
                type="button"
                onClick={() => setActiveId(disc.id)}
                className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1 ${
                  isSelected
                    ? 'bg-[#B86B38] border-[#B86B38] text-white shadow-lg ring-1 ring-[#B86B38]/50'
                    : 'bg-black/60 border-white/20 text-[#F4F0E8]/80 hover:border-white/40 hover:text-white'
                }`}
              >
                <span className="text-[10px] font-mono opacity-80 uppercase tracking-wider">
                  {disc.id.toUpperCase()}
                </span>
                <span className="font-sans font-semibold text-xs leading-snug line-clamp-1">
                  {disc.title.split(' ')[0]} {disc.title.split(' ')[1] || ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Editorial Showcase Card */}
        <div className="bg-black/75 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-2xl relative text-[#F4F0E8]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#B86B38]">
                  <ShieldCheck className="w-4 h-4 text-[#B86B38]" />
                  <span className="font-semibold uppercase tracking-wider">{activeDiscipline.codeStandard}</span>
                </div>
                <h3 className="font-editorial text-3xl sm:text-5xl text-white font-normal leading-tight uppercase">
                  {activeDiscipline.title}
                </h3>
                <p className="text-xs font-mono text-[#F4F0E8]/70 uppercase tracking-widest">
                  {activeDiscipline.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#F4F0E8]/85 leading-relaxed font-sans font-light">
                {activeDiscipline.description}
              </p>

              {/* Technical Parameters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeDiscipline.technicalParameters.map((param, pIdx) => (
                  <div key={pIdx} className="bg-black/60 p-3.5 rounded-xl border border-white/15">
                    <span className="text-[#F4F0E8]/60 block text-[10px] font-mono uppercase tracking-wider mb-1">
                      {param.label}
                    </span>
                    <span className="text-white font-semibold font-mono text-xs block">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deliverables List */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#F4F0E8]/60">Key Engineering Deliverables</div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#F4F0E8]/90 font-sans">
                  {activeDiscipline.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 bg-black/50 p-2.5 rounded-lg border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#B86B38] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/services"
                  className="btn-primary bg-[#B86B38] hover:bg-[#a65d37] text-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Right Visual Image Column (5 Cols) */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[1/1] rounded-xl overflow-hidden bg-black border border-white/20 shadow-xl">
              <img
                src={activeDiscipline.imageUrl}
                alt={activeDiscipline.title}
                loading="eager"
                className="w-full h-full object-cover filter grayscale-[10%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider text-white border border-white/15">
                CIVIL DIVISION // {activeDiscipline.id.toUpperCase()}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
