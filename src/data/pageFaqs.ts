// FAQ content drafts for Design Plus pages lacking FAQ schema.
// Grounding rule: every answer is written ONLY from what the page's own .tsx
// (or the site's data files) already states. No invented facts, prices,
// phone numbers, stats, or claims. Each answer is 40-60 words, answer-first,
// plain text (no markdown). {city} and {category} are template placeholders.

export const PAGE_FAQS: Record<string, Array<{ q: string; a: string }>> = {

  // Grounded in src/pages/AboutPage.tsx + src/data/siteData.ts (LEADERSHIP, TEAM_MEMBERS, FAQS)
  about: [
    {
      q: 'Who founded Design Plus and what are their credentials?',
      a: 'Er. Sudhir Soni founded Design Plus and leads as CEO and Principal Structural Engineer. A Chartered Engineer (India) with an M.E. in Structural Engineering, he is a Member of the Institution of Engineers (M.I.E.) and a Fellow of the Institution of Valuers (FIV), overseeing structural calculations, soil load assessments, and foundation engineering across Rajasthan.'
    },
    {
      q: 'Who is the Principal Architect at Design Plus?',
      a: 'Ar. Vipul Verma is the Principal Architect, qualified with a B.Arch and an M.H.S. from Belgium. His practice specializes in climate-responsive residential layouts, daylight orchestration, and vernacular material integration, paired with the founder\'s chartered structural engineering rigor on every project.'
    },
    {
      q: 'What makes Design Plus different from a standard architectural firm?',
      a: 'Design Plus is co-led by a Chartered Structural Engineer and a globally educated Principal Architect, so spatial design and structural mechanics are synthesized from day one. You receive breathtaking architectural plans backed by mathematically certified structural durability, rather than purely visual facades or dry engineering calculations alone.'
    },
    {
      q: 'How much experience does the studio have?',
      a: 'Design Plus brings over 20 years of engineering heritage and bespoke projects across Rajasthan. Er. Sudhir Soni has overseen structural calculations and foundation engineering across residential, commercial, and industrial facilities, with every plan mathematically vetted against seismic, wind, and municipal safety codes before breaking ground.'
    },
    {
      q: 'What disciplines does the Design Plus team cover?',
      a: 'The core team covers architectural philosophy, structural mechanics, electrical power networks, and urban zoning. A balanced interdisciplinary collective of practice specialists handles architecture, chartered structural engineering, electrical building systems, and planning, so design, engineering, and municipal compliance stay in one studio.'
    },
    {
      q: 'What should I bring to an in-person review at the Ajmer studio?',
      a: 'Bring your plot dimensions, municipal notices, or architectural references when scheduling an in-person review of your site. You can book a consultation or use the contact directory, and the team will evaluate site feasibility, byelaw constraints, or structural design requirements for your project.'
    }
  ],

  // Grounded in src/pages/TeamPage.tsx + src/data/siteData.ts (LEADERSHIP, TEAM_MEMBERS)
  team: [
    {
      q: 'Who leads Design Plus?',
      a: 'Er. Sudhir Soni founded Design Plus in 2006 and leads as Founder, CEO, and Principal Structural Engineer. A Chartered Engineer (India) with an M.E. in Structural Engineering, he is a Member of the Institution of Engineers and a Fellow of the Institution of Valuers, validating structural stability certifications and municipal compliance files for ADA and PWD.'
    },
    {
      q: 'Who is the Principal Architect and what is his background?',
      a: 'Ar. Vipul Verma is the Principal Architect, qualified with a B.Arch and an M.H.S. from Belgium. Educated in contemporary architectural theory and human settlement dynamics, he specializes in climate-responsive residential layouts, daylight orchestration, and vernacular material integration for the Rajasthan context.'
    },
    {
      q: 'Who are the other engineers on the team?',
      a: 'The senior team includes Er. Ankit Soni, Senior Structural Engineer with an M.Tech in Structure, specializing in RCC structures and seismic detailing; Er. Shikha Soni, Electrical and Building Systems Engineer with an M.Tech in Electrical Power Systems, handling power networks and smart automation; and Er. Amit Soni, Urban and Spatial Infrastructure Planner with an M.Plan, managing zoning byelaws.'
    },
    {
      q: 'Which structural codes does the Design Plus team follow?',
      a: 'The practice designs to Indian structural codes including IS 456, IS 1893, IS 13920, and IRC 112. Every design is subjected to rigorous finite-element modeling, earthquake-resistant checks under IS 1893:2016, and soil-strata foundation calculations before a single brick is laid on site.'
    },
    {
      q: 'Does the team handle infrastructure projects beyond buildings?',
      a: 'Yes. The practice\'s infrastructure expertise covers highways, bridges, dams, and sluices alongside high-rise frameworks, residential estates, and state infrastructure viaducts. Er. Sudhir Soni is also a government-approved chartered valuer, extending the studio from bespoke private residences to regional masterplans across Rajasthan.'
    },
    {
      q: 'How do I commission the Design Plus practice for a project?',
      a: 'Use the Initiate Consultation button or call +91 94614 65610 to reach Er. Sudhir Soni or the studio directly. The practice commissions everything from bespoke private residences in Ajmer to state infrastructure viaducts and regional masterplans across Rajasthan, with every design vetted by chartered structural engineering.'
    }
  ],

  // Grounded in src/pages/ContactPage.tsx (form fields, direct lines, DPDP consent, 24-hour callback)
  contact: [
    {
      q: 'What are the studio\'s phone numbers and email address?',
      a: '+91 79764 53090 and +91 94614 65610 are the studio\'s verified direct lines, connecting to Er. Sudhir Soni and the studio reception. The official email is designplusajmer@gmail.com, and the studio is located in Ajmer, Rajasthan, India. Both lines are listed on the contact page alongside verified online profiles on Instagram, Facebook, and Justdial.'
    },
    {
      q: 'How quickly will Design Plus respond to my inquiry?',
      a: 'After submitting the inquiry form, Er. Sudhir Soni or a senior technical architect reviews the submission and contacts you on the provided phone number within 24 hours. For an immediate conversation about site feasibility or structural requirements, call either of the two verified direct lines.'
    },
    {
      q: 'What details should I include in my project inquiry?',
      a: 'Share your full name, phone number, project discipline (residential, commercial, interiors, chartered structural design, 2D floor planning, or 3D elevations), city or region in Rajasthan, approximate plot or built area, and project notes such as setbacks, soil conditions, ADA approvals, desired floors, or architectural preferences.'
    },
    {
      q: 'Does Design Plus serve clients outside Ajmer?',
      a: 'Yes. The studio is headquartered in Ajmer but serves clients across Rajasthan, including Jaipur, Pushkar, Kishangarh, Udaipur, Beawar, Kekri, and Nasirabad. The inquiry form accepts any city or region in Rajasthan, and site visits are arranged for outstation projects. Regional location pages document local regulations, architectural context, and practice highlights for every service city.'
    },
    {
      q: 'Where can I find Design Plus online?',
      a: 'Design Plus maintains verified profiles on Instagram (@architectsdesignplus), an official Facebook page, and Justdial. These channels are linked from the contact page and complement the direct phone lines and official email for studio communication. The studio also publishes a Google Maps listing under Designplus Architects and Structural Consultants, Panchsheel Nagar, Ajmer.'
    },
    {
      q: 'How is my data handled when I submit the inquiry form?',
      a: 'The form collects your name, phone number, email, and enquiry message under India\'s DPDP Act, solely to call you back about your enquiry. Explicit consent is required for the callback, while consent for follow-up and marketing messages is optional. To withdraw consent or raise a grievance, call or WhatsApp +91 79764 53090.'
    }
  ],

  // Grounded in src/pages/ProjectsPage.tsx + src/data/projects.ts (PROJECT_CATEGORIES) + privacy banner
  projects: [
    {
      q: 'What kinds of projects are in the Design Plus portfolio?',
      a: 'The portfolio is a comprehensive archive of built architectural commissions, structural engineering frameworks, and conceptual research studies across Rajasthan. Every entry shows the project year, built area, typology, location, summary, scope of work, and project lead. An editorial grid and a technical index register offer two ways to browse the archive.'
    },
    {
      q: 'How can I filter and search the portfolio?',
      a: 'Filter by typology (Residential, Commercial, Interiors, Structural, Institutional, Industrial, or Concept), by scope (all works, client commissions, or concept studies), or search by city, typology, and material. Toggle between an editorial grid view and a technical index register for different levels of detail.'
    },
    {
      q: 'What is the difference between client commissions and design studies?',
      a: 'Client commissions are built, executed site projects marked with a shield badge, while concept studies are speculative typological research explicitly demarcated as Design Studies. Built commissions are published with general client classifications, such as Private Residential Client, honoring strict professional confidentiality covenants.'
    },
    {
      q: 'Which project categories does the studio cover?',
      a: 'The archive spans Residential Architecture, Commercial and Retail, Interior Architecture, Chartered Structural Engineering, Institutional and Educational, and Industrial and Logistics work. Each category page carries its own description of the studio\'s approach, and the filter bar shows a live project count per category.'
    },
    {
      q: 'What information does each case study page provide?',
      a: 'Each case study covers the design story, drawings, and engineering behind the commission. The index register view lets you sort by reference code, title, category, location, built area, year, and scope before opening the full monograph and drawing set. Concept studies are explicitly demarcated as Design Studies, keeping research separate from built commissions.'
    },
    {
      q: 'How do I commission a project similar to one in the portfolio?',
      a: 'Use the Commission Studio Inquiry button to open a consultation with the studio. Share your plot dimensions and project typology, and Er. Sudhir Soni\'s team will evaluate feasibility for a comparable residence, commercial complex, interior commission, or structural project. The studio\'s six-stage process then moves from site reconnaissance to engineering and on-site supervision.'
    }
  ],

  // Grounded in src/pages/LocationsPage.tsx + src/data/siteData.ts (LOCATIONS_SERVED)
  locations: [
    {
      q: 'Where is Design Plus headquartered and which cities does it serve?',
      a: 'Design Plus is headquartered in Ajmer, Rajasthan, with architectural and structural engineering projects extending across Jaipur, Pushkar, Udaipur, Kishangarh, Beawar, Kekri, and Nasirabad. Each city has a dedicated page covering local regulations, architectural context, and representative practice highlights. Ajmer remains the primary practice and coordination hub for every regional commission.'
    },
    {
      q: 'Does the studio handle municipal approvals in these cities?',
      a: 'Yes. The studio aligns building plans with local authorities including the Ajmer Development Authority (ADA), Jaipur Development Authority (JDA), Nasirabad Cantonment Board (NCB), Kishangarh Development Authority, and Udaipur\'s Urban Improvement Trust (UIT), preparing compliant drawing sets for each jurisdiction. Chartered Engineer Er. Sudhir Soni provides the official structural stability certifications these authorities require.'
    },
    {
      q: 'Can I get a structural stability certificate outside Ajmer?',
      a: 'Yes. Er. Sudhir Soni, a certified Chartered Engineer and Member of the Institution of Engineers, provides official structural stability certificates and compliance drawing sets recognized by local authorities across the service region, including for multi-story residential and commercial municipal sanction files.'
    },
    {
      q: 'What services are available in each location?',
      a: 'Each location page lists the available disciplines drawn from the studio\'s service menu: residential and commercial architecture, interior architecture, chartered structural design and stability, 2D floor planning with Vastu, and 3D exterior elevation visuals. Practice highlights on each page show how those disciplines have been applied locally.'
    },
    {
      q: 'How does the studio adapt designs to local conditions?',
      a: 'Every location page documents the city\'s architectural context, including climate, terrain, heritage constraints, and typical building stock, and explains the tectonic adaptation strategy, such as rock-plinth foundations on Aravalli terrain or shaded courtyards in arid zones. Localized FAQs on each page answer city-specific questions on regulations, soils, and climate.'
    },
    {
      q: 'How do I book a site feasibility review for my city?',
      a: 'Each city page includes a Site Feasibility Review panel where you can book a consultation specific to that city. The chartered engineering and architectural team evaluates your plot dimensions, FAR potential, and setback requirements for your location before drafting begins.'
    }
  ],

  // Grounded in src/pages/BlogPage.tsx + src/data/blogCategories.ts (six categories, editors' picks)
  blog: [
    {
      q: 'What is the Design Plus architectural journal?',
      a: 'The Design Plus journal is a technical publication by chartered structural engineers and architects covering durable building physics, Rajasthan arid microclimates, municipal approvals, and honest material craft. Articles are organized by discipline: architecture, structural engineering and codes, building planning, Ajmer and Rajasthan guides, and executed project stories.'
    },
    {
      q: 'Which topics do the firm\'s essential pillar guides cover?',
      a: 'The editor\'s and firm\'s picks highlight essential reading before building: a guide to architects in Ajmer, construction costs for building a house in Ajmer, structural engineering for residential buildings, and house plan approvals in Ajmer. Each featured guide links into discipline archives for architecture, planning, engineering, and local context.'
    },
    {
      q: 'Which structural codes do the engineering articles reference?',
      a: 'The chartered structural engineering section works with IS 456, IS 1893:2016, and IS 13920, covering structural calculations, seismic physics, and code-compliant design. These monographs translate chartered engineering rigor into guidance that non-engineers can act on. Articles also cover surveying, geotechnical, infrastructure, township, and building-planning topics.'
    },
    {
      q: 'Are there guides for specific cities in Rajasthan?',
      a: 'Yes. The Ajmer and Central Rajasthan contextual guides cover local geology, arid microclimates, and municipal byelaws, with articles on house planning, plan sanctions, and construction costs tuned to cities like Ajmer, Jaipur, Pushkar, and Udaipur. Location pages also curate the regional journal articles most relevant to each service city.'
    },
    {
      q: 'Who writes the journal articles?',
      a: 'Articles are written by the studio\'s own leadership and engineering team, including Er. Sudhir Soni and Ar. Vipul Verma, so every guide reflects first-hand professional practice rather than generic content. Each article carries the author\'s name, avatar, and qualifications. The masthead describes the journal as a technical publication by chartered structural engineers and architects.'
    },
    {
      q: 'How can I get project-specific advice from the journal?',
      a: 'If a guide raises a specific building or infrastructure question, the journal\'s commission intake section invites you to connect directly with Er. Sudhir Soni and Ar. Vipul Verma for integrated architectural design, chartered structural engineering, or municipal planning guidance in Ajmer.'
    }
  ],

  // Template for /locations/{city} — grounded in src/pages/LocationDetailPage.tsx structure
  // and src/data/siteData.ts (LOCATIONS_SERVED). City-specific facts are kept generic so the
  // template holds for all 5 cities (Ajmer, Jaipur, Pushkar, Kishangarh, Udaipur); the
  // page's per-city LOCATION_FAQS carry the city-specific regulatory detail.
  locationDetail: [
    {
      q: 'What architectural services does Design Plus offer in {city}?',
      a: 'Design Plus provides comprehensive architectural services for {city}, including residential and commercial architecture, interior architecture, chartered structural design and stability, 2D floor planning, and 3D exterior elevation visuals. The {city} page maps the available disciplines to the city\'s local practice context.'
    },
    {
      q: 'How does the studio handle building approvals in {city}?',
      a: 'Every location page documents municipal standards and regulatory alignment for that city, with Chartered Engineer Er. Sudhir Soni providing official structural stability certifications, soil bearing verifications, and compliance drawing sets recognized by local authorities. City-specific FAQs answer the regulatory, soil, and climate questions most common for that city.'
    },
    {
      q: 'Does the studio account for {city}\'s climate and terrain?',
      a: 'Yes. Each city page explains the local climatic context and tectonic adaptation, including sun-path orientation, soil and strata conditions, heritage constraints, and regional materials, so designs respond to {city}\'s specific geography rather than applying a generic template. Practice highlights on the page show how those adaptations have been built locally.'
    },
    {
      q: 'How do I start a project in {city}?',
      a: 'Use the Site Feasibility Review panel on the {city} page to book a {city}-specific consultation. The chartered engineering and architectural team evaluates your plot dimensions, FAR potential, and setback requirements before drafting begins. A general inquiry link is also available for questions beyond a single city.'
    },
    {
      q: 'Can I see past work in or near {city}?',
      a: 'Yes. The {city} page lists demonstrated projects in and around the city, each linking to a full case study with drawings, scope of work, and project leadership. It also curates regional journal articles and technical guides relevant to {city}. Every case study names the project year, built area, typology, and location.'
    },
    {
      q: 'Does Design Plus serve clients outside its Ajmer studio?',
      a: 'Yes. While headquartered in Ajmer, the practice operates across Central and Southern Rajasthan. Location pages, remote coordination, and site visits extend the studio\'s architectural and structural engineering services to clients throughout the region. Dedicated location pages exist for Ajmer, Jaipur, Pushkar, Kishangarh, and Udaipur, among others.'
    }
  ],

  // Template for /projects/{category} — grounded in src/pages/ProjectsPage.tsx + src/data/projects.ts
  // (PROJECT_CATEGORIES: Residential, Commercial, Interiors, Structural, Institutional, Industrial, Concept).
  projectCategory: [
    {
      q: 'What does the {category} portfolio contain?',
      a: 'The {category} archive collects the studio\'s built commissions and design studies for that typology, each entry showing year, built area, location, summary, scope of work, and project lead. Use the scope filter to view all works, client commissions, or concept studies, and search to narrow by city, typology, or material.'
    },
    {
      q: 'Are the {category} projects real commissions or concept studies?',
      a: 'Both. Client commissions are executed site projects marked with a shield badge, while concept studies are explicitly demarcated as Design Studies for typological research. Built commissions are published with general client classifications, such as Private Residential Client, to honor strict professional confidentiality covenants.'
    },
    {
      q: 'Who led the {category} projects?',
      a: 'Every {category} case study names its project lead from the studio\'s leadership: founder and Chartered Engineer Er. Sudhir Soni, Principal Architect Ar. Vipul Verma, and senior specialists in structural engineering, electrical systems, and urban planning. The founder and principal architect are supported by M.Tech and M.Plan specialists across disciplines.'
    },
    {
      q: 'How does the studio approach {category} projects?',
      a: 'Every project follows the studio\'s six-stage method: Discover, Concept, Design, Engineering, Documentation, and Execution or Consultancy, moving from site reconnaissance and zoning due diligence through chartered structural calculations to on-site supervision and milestone certification. The engineering stage is led personally by Chartered Engineer Er. Sudhir Soni.'
    },
    {
      q: 'Can the studio take on a new {category} commission?',
      a: 'Yes. The Commission Studio Inquiry button opens a consultation where you share plot dimensions and project typology. The studio evaluates feasibility and prepares 2D planning, 3D elevations, chartered structural drawings, and municipal sanction files for the commission. Inquiries from any city in Rajasthan are accepted through the contact form.'
    },
    {
      q: 'Where are the {category} projects located?',
      a: 'The portfolio spans Ajmer and cities across Rajasthan, and the search bar filters {category} works by city, typology, or material. The category filter bar shows a live count of projects, so you can see the full {category} archive before opening individual case studies.'
    }
  ]

};
