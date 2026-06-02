import { Hotspot, Project, IntelligenceCard, TimelineStage, CaseStudy } from "./types";

export const BANGALORE_EAST_HOTSPOTS: Hotspot[] = [
  {
    id: "whitefield",
    name: "Whitefield-Hoskote Growth Corridor",
    x: 76,
    y: 35,
    growthScore: 9.8,
    infrastructureProjects: [
      "Namma Metro Purple Line Extension to Kadugodi",
      "Satellite Town Ring Road (STRR) Trunk link",
      "Whitefield-Hoskote 6-Lane Expressway"
    ],
    industrialExpansion: "SaaS clusters, heavy aerospace & hardware SEZs, and global tech centers.",
    appreciationPotential: "+24% Compound Annual Appreciation (Past 3 Years)",
    developments: ["LEGACY TOWNSHIP", "ACCENTURE GREENZ WAREHOUSING"]
  },
  {
    id: "sarjapur",
    name: "Sarjapur-Varthur Tech Belt",
    x: 42,
    y: 72,
    growthScore: 9.6,
    infrastructureProjects: [
      "Peripheral Ring Road (PRR) Interchange",
      "Varthur Lake Ecological Restoration Corridor",
      "Sarjapur Metro Phase 3 Line"
    ],
    industrialExpansion: "Tech SEZs, corporate headquarters, and luxury villa gated enclaves.",
    appreciationPotential: "+21.5% Growth Projection",
    developments: ["VELORA GREENS"]
  },
  {
    id: "budigere",
    name: "Budigere Cross Transit Node",
    x: 28,
    y: 22,
    growthScore: 9.3,
    infrastructureProjects: [
      "Kempegowda Airport Cargo Link Road Area",
      "Budigere High-Speed Logistics Loop",
      "Aerotropolis Smart City Expansion"
    ],
    industrialExpansion: "Heavy logistics clusters, international freight terminals, and high-rise premium residential.",
    appreciationPotential: "+19.8% Year-on-Year Growth Corridor",
    developments: ["ACCENTURE GREENZ WAREHOUSING"]
  },
  {
    id: "hoskote",
    name: "Hoskote Forest Fringe",
    x: 52,
    y: 48,
    growthScore: 9.1,
    infrastructureProjects: [
      "Hoskote-Narsapura Industrial Highway Node",
      "Protected Botanical Forest Reserve Preservation",
      "Eco-Buffer Greenbelt Regulatory Zoning Map"
    ],
    industrialExpansion: "Premium carbon-sink eco villages, luxury agricultural zones, and wellness sanctuaries.",
    appreciationPotential: "+18.6% Stable Trend",
    developments: ["HAYAT GREENZ RESORT"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "legacy",
    title: "LEGACY TOWNSHIP",
    tagline: "Flagship 105-Acre Integrated City Living",
    location: "Whitefield-Hoskote Corridor, Bangalore East",
    story: "Spanning 105 total acres of high-elevation flat land with a 45-acre residential core, Legacy Township is the absolute pinnacle of master-planned integrated living. Designed as a self-sustaining city, it features 2,000 premium apartments, 750 ultra-luxury estate plots, a 1 Lakh Sq Ft landmark elite clubhouse, and over 80+ custom active lifestyle amenities supporting multi-generational value creation.",
    masterplan: [
      "105 total master-planned Acres with 45-acre residential core",
      "2,000 premium low-density energy-efficient apartments",
      "750 ultra-luxury gated villa plots ready for immediate hand-over",
      "1 Lakh Sq Ft landmark zero-waste structural clubhouse",
      "80+ curated active amenities grouped across wellness, family, sports & entertainment"
    ],
    growthDrivers: [
      "Within 10 minutes of the crucial Kadugodi Metro Station and Hope Farm Junction on the Purple Line",
      "Uncompromised legal title mutation deeds verified since 1980",
      "RERA Approved // Certificate ID: PRM/KA/RERA/1251/Bangalore"
    ],
    investmentScore: {
      total: 9.8,
      connectivity: 9.7,
      infrastructure: 9.9,
      liquidity: 9.8
    },
    image: "/src/assets/images/al_green_legacy_1780310147200.png",
    ctaText: "Explore Integrated City"
  },
  {
    id: "velora",
    title: "VELORA GREENS",
    tagline: "Boutique Residential Community — Thoughtfully Crafted For Elevated Living",
    location: "Sarjapur-Varthur Tech Belt, Bangalore East",
    story: "A meticulously curated boutique sanctuary designed for elevated peace, lower spatial density, and high air exchange. Scaling only 90 elegant low-rise homes, custom row housing, and elite villa plots, Velora Greens focuses on select community living and lush private yards.",
    masterplan: [
      "90 elegant boutique low-rise apartments with climate ventilation",
      "Private custom row housing units with micro-sun decks",
      "Exclusive ready-to-build gated estate villa plots",
      "Intimate localized lifestyle clubhouse, community green, and heirloom forest"
    ],
    growthDrivers: [
      "Immediate frontage on Bangalore Peripheral Ring Road expansion zone",
      "Energy-recovery mechanical ventilation reducing utility costs by 45%",
      "Exceptional spatial density — premium community living without crowding"
    ],
    investmentScore: {
      total: 9.5,
      connectivity: 9.8,
      infrastructure: 9.2,
      liquidity: 9.5
    },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Explore Boutique Community"
  },
  {
    id: "hayat",
    title: "HAYAT GREENZ RESORT",
    tagline: "Hospitality & Wellness — Nature Inspired Ecological Retreat",
    location: "Scenic Hoskote Forest Fringe, Bangalore East",
    story: "An immersive wellness retreat built strictly within a permanent forest buffer zone. Combining nature-integrated premium eco-cabins, dynamic thermal mineral spas, organic estate dining, and high-level retreat amenities designed to safeguard local ecology while generating stable hospitality yields.",
    masterplan: [
      "Eco-sensitive low-impact luxury wooden cabins & forest suites",
      "Bio-retention organic pools & thermal outdoor mineral spas",
      "15 acres of permanent high-elevation protected botanical sanctuary",
      "Premium wellness lounges, meditation pavilions & raw pathways"
    ],
    growthDrivers: [
      "High-yielding secure fractional ownership program adjacent to protected reserves",
      "Uncompromised environmental NOC layouts pre-obtained from forest authorities",
      "+14.2% verified annual baseline passive returns"
    ],
    investmentScore: {
      total: 9.2,
      connectivity: 8.8,
      infrastructure: 9.5,
      liquidity: 9.3
    },
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Explore Hospitality Resort"
  },
  {
    id: "logistics",
    title: "ACCENTURE GREENZ WAREHOUSING",
    tagline: "Commercial Division — Future-Ready Industrial & Logistics Infrastructure",
    location: "Budigere-Hoskote Logistics Cluster, Bangalore East",
    story: "Accenture Infra's heavy-duty industrial and logistics warehousing sector, connecting crucial logistics expressways. Engineered to international freight standards, it features super-cast high load-bearing floors, high-capacity solar grid sub-stations, and state-of-the-art climate-controlled cold storage bays.",
    masterplan: [
      "Reinforced heavy-freight grade internal transport roads",
      "Plug-and-play high-voltage commercial solar substations",
      "Custom temperature-controlled cold logistics hubs & dry storage",
      "Pre-leased multinational corporate modules available for immediate acquisition"
    ],
    growthDrivers: [
      "Direct frontage borders on major cross-state cargo transit pathways (BCIC)",
      "Pre-negotiated lease options providing secure corporate cashflows",
      "Zoned high-density logistics warehousing layout clearance"
    ],
    investmentScore: {
      total: 9.6,
      connectivity: 9.9,
      infrastructure: 9.6,
      liquidity: 9.3
    },
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    ctaText: "Explore Commercial Division"
  }
];

export const INTELLIGENCE_CARDS: IntelligenceCard[] = [
  {
    id: "intel-1",
    category: "Connectivity",
    title: "Airport Expansion",
    metric: "4x Terminal Capacity Increase",
    trend: "+28% YoY Passenger Inflow",
    details: [
      "Connecting Bangalore East directly to standard global trade routes via KIA Airport and STRR.",
      "Dedicated high-speed cargo facilities driving commercial tech logistics expansion.",
      "Expected to fuel 35% residential land demand within 20km tech-growth radius."
    ],
    iconName: "Plane"
  },
  {
    id: "intel-2",
    category: "Industry",
    title: "Industrial Corridors",
    metric: "₹45,000 Cr Investment Corridor",
    trend: "20+ Fortune 500 Manufacturing Deals",
    details: [
      "Defense corridor nodes expanding with high-end tech-industrial setups.",
      "Heavy integration of battery gigafactories and aerospace components.",
      "Attracting over 150k highly paid engineering specialists demanding premium housing."
    ],
    iconName: "Factory"
  },
  {
    id: "intel-3",
    category: "Connectivity",
    title: "Metro Development",
    metric: "182 km Planned Expansion",
    trend: "Phase 2 Commencing Operations Early",
    details: [
      "Creating immediate mass connectivity between outer sub-markets.",
      "Transit-oriented development permits higher floor space index (FSI).",
      "Proximity to transit directly correlates with +140% historic appreciation."
    ],
    iconName: "Train"
  },
  {
    id: "intel-4",
    category: "Urbanization",
    title: "SEZ Zones & FDI Hubs",
    metric: "8 Fresh Tech Park Approvals",
    trend: "+₹18,200 Cr Foreign Institutional Investment",
    details: [
      "FDI tax holidays attracting global leaders in tech development.",
      "Greenfield SEZ parks being built strictly with sustainable credentials.",
      "Provides immediate liquid exit avenues for surrounding developers."
    ],
    iconName: "Cpu"
  },
  {
    id: "intel-5",
    category: "Connectivity",
    title: "Eight-Lane Expressways",
    metric: "350 km New Smart Mobility Highway",
    trend: "Travel time slashed by 60%",
    details: [
      "Bypassing busy bottlenecks to create high-integrity logistics loops.",
      "Al Green communities are placed strictly in adjacent premium node rings.",
      "Enables scenic urban-fringe lifestyle without commuting compromises."
    ],
    iconName: "Milestone"
  },
  {
    id: "intel-6",
    category: "Health & Education",
    title: "Healthcare Nodes",
    metric: "3 Multi-Specialty AIIMS Cities",
    trend: "World-class health tourism destination status",
    details: [
      "Building robust, high-end care infrastructures near growing communities.",
      "Attracting premium NRI retirement developments and high-wealth families.",
      "Solid infrastructure pillars supporting deep multi-generational security."
    ],
    iconName: "Shield"
  }
];

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    id: "stage-1",
    stageName: "1. Land Intelligence & Discovery",
    duration: "Months 1 - 3",
    description: "Multi-layered GIS, geological, and satellite survey to identify high-potential transport nodes and under-valued corridors with pristine legal history.",
    actions: [
      "Uncompromising satellite GIS and physical contour mapping",
      "Friction-free legal research verifying 40-year parent deeds",
      "Hydrological and terrain load-bearing evaluation"
    ],
    documentation: "Sample Satellite GIS Topographical Registry, 40-year clear title abstract.",
    complianceChecked: true
  },
  {
    id: "stage-2",
    stageName: "2. Due Diligence & Audits",
    duration: "Months 3 - 5",
    description: "Deep administrative, environmental and forensic title auditing. We run all potential lands through a rigorous triple legal validation system.",
    actions: [
      "Independently retained senior advocate title verification reports",
      "Environmental impact clearance and local biodiversity mapping",
      "No-encumbrance certificates and agricultural zoning checks"
    ],
    documentation: "Certified advocate legal opinion index, environmental feasibility clearance standard.",
    complianceChecked: true
  },
  {
    id: "stage-3",
    stageName: "3. Strategic Land Acquisition",
    duration: "Months 5 - 8",
    description: "Direct transactional title settlement. No middleware, no speculative broker structures, and 100% bank-cleared transparent acquisitions.",
    actions: [
      "Transparent multi-party direct landowner settlement sessions",
      "Clear direct title transfer deed registrations in registry books",
      "Immediate physical bordering and automated security setup"
    ],
    documentation: "Registered Title Deed and Mutation Ledger validation certificate.",
    complianceChecked: true
  },
  {
    id: "stage-4",
    stageName: "4. Government & Corporate Approvals",
    duration: "Months 8 - 12",
    description: "Securing ultimate, uncompromised developer clearance, environmental NOCs, layout clearances, and single-window RERA approvals.",
    actions: [
      "Layout approval from Town and Country Planning authorities (DTCP)",
      "Strict state pollution control board and forest clearances",
      "Unified single-window developer registration & RERA approval numbers"
    ],
    documentation: "Authentic DTCP Layout Order, Approved Blueprint Index, Real Estate Regulatory Authority (RERA) certificate copy.",
    complianceChecked: true
  },
  {
    id: "stage-5",
    stageName: "5. High-Integrity Infrastructure Dev",
    duration: "Months 12 - 18",
    description: "Onground actualization of Al Green's infrastructure standards—incorporating high-grade roads, dynamic stormwater retention, underground cables, and carbon-sequestering forestry.",
    actions: [
      "Excavation and laying of dual-layer high-density heavy vehicle roads",
      "Installation of clean water supply pipes & pre-cast concrete rainwater systems",
      "Planting of over 2,500 species-appropriate native trees with root stabilization"
    ],
    documentation: "Completed Infrastructure Compliance Log with Engineering Warranties.",
    complianceChecked: true
  },
  {
    id: "stage-6",
    stageName: "6. Multi-Generational Community Growth",
    duration: "Months 18+",
    description: "The handover of custom estate plots with lifelong appreciation security, premium wellness access, and continuous professional estate management.",
    actions: [
      "Custom designed physical registry handout and physical site possession",
      "Launch of Al Green Community Portal and smart management application",
      "Continuous landscaping maintenance, security patrol, and asset growth reports"
    ],
    documentation: "Official Handover Protocol, Lifetime Land Appreciation Report, Estate Management Contract.",
    complianceChecked: true
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    clientName: "Dr. Anand Krishnan",
    clientType: "Senior Cardiovascular Surgeon & NRI (Boston, USA)",
    portraitInitials: "AK",
    location: "Al Green Legacy — Bangalore East Zone",
    before: "Skeptical of standard Indian developer setups. Worried about title disputes, double registration, and poor infrastructure promises that fail after sales.",
    decision: "Fell in love with Al Green's transparent land intelligence reports. Visited the office where we showed high-end 40-year GIS maps and legal paper trails with RERA approvals.",
    investment: "Acquired 4 massive custom-designed lifestyle plots totaling 18,200 sq.ft at Al Green Legacy Bangalore East.",
    outcome: "Infrastructure was fully completed on schedule—gorgeous native landscaping and underground fiber optics are active. High-end gated community is growing beautifully.",
    appreciation: "Capital appreciation has jumped from ₹1,800/sq.ft to ₹3,450/sq.ft in 28 months (+91.6% return)."
  },
  {
    id: "case-2",
    clientName: "Meenakshi Sundaram",
    clientType: "Tech Director & Investor (Enterprise software, Bengaluru)",
    portraitInitials: "MS",
    location: "Al Green Zenith — Hoskote Industrial Gateway",
    before: "Held land reserves which showed stagnant growth due to zero peripheral infrastructural connection or poor civic planning in rural areas.",
    decision: "Sold stagnant assets to invest in an Al Green developer ecosystem situated right next to the high-tech highway corridor expansion node in Hoskote.",
    investment: "Invested in 2 premium commercial-buffer land plots with high floor index approvals.",
    outcome: "State industrial corridors were expedited, raising immediate institutional land inquiries on adjacent properties.",
    appreciation: "Secured structural appreciation of +65% within 18 months, with local exit inquiries coming directly from tier-1 MNC suppliers."
  }
];
