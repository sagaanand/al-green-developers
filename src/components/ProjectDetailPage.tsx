import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, MapPin, Sparkles, Layout, Compass, Shield, ArrowRight,
  TrendingUp, Check, Users, Leaf, Home, Award, Calendar, HelpCircle
} from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

interface ProjectDetailPageProps {
  projectId: string;
  onClose: () => void;
  onBookTour: (projectName: string) => void;
}

// Interactive Masterplan sectors for Legacy Township
const LEGACY_SECTORS = [
  {
    id: "sec-ap",
    name: "Apartment Zone (The Sentinels)",
    desc: "2,000 premium carbon-neutral apartments meticulously arranged in low-density towers to capture continuous cross-breeze.",
    status: "91% Pre-Allocated",
    area: "12 Acres",
    features: ["Double height lobbies", "Skyparks on 10th floor", "Private EV charge docks"]
  },
  {
    id: "sec-vp",
    name: "Ultra-Luxury Villa Plots",
    desc: "750 exclusive high-elevation plots of raw appreciating ground framed by native avenue forestry.",
    status: "72% Secured By Adopters",
    area: "20 Acres",
    features: ["Pre-certified clear DTCP titles", "Independent premium water lines", "Dedicated solar microgrids"]
  },
  {
    id: "sec-ch",
    name: "Accenture Grand Clubhouse",
    desc: "100,000 Sq Ft sanctuary of health, commerce, and community built using zero-waste clay-and-timber architectural paradigms.",
    status: "RERA Approved / Ground Breaking",
    area: "3.5 Acres",
    features: ["Olympic-pro cooling pool", "Digital business auditorium", "Organic estate nursery culinary bar"]
  },
  {
    id: "sec-lo",
    name: "The Lifestyle Botanical Oasis",
    desc: "80+ customized experiential zones, microforests, sensory pathways, and sports grids designed to enhance local biodiversity by 300%.",
    status: "70% Planted",
    area: "9.5 Acres",
    features: ["25,000+ native multi-decade trees", "Zero run-off rain marshes", "Outdoor athletic circuits"]
  }
];

// Interactive configurations for Legacy Township
const LEGACY_CONFIGS = [
  {
    type: "2 BHK Premium",
    space: "1,280 Sq Ft",
    invest: "₹68 Lakhs Onwards",
    yield: "Estimated +18% Compound Yield",
    desc: "A boutique home balancing smart storage, acoustic buffer layers, and high-efficiency ventilation."
  },
  {
    type: "2.5 BHK Executive",
    space: "1,450 Sq Ft",
    invest: "₹78 Lakhs Onwards",
    yield: "Estimated +21% Compound Yield",
    desc: "Features a dedicated sound-isolated digital work den with direct high-speed fiber-optic junction."
  },
  {
    type: "3 BHK Signature Residence",
    space: "1,890 Sq Ft",
    invest: "₹98 Lakhs Onwards",
    yield: "Estimated +24% Compound Yield",
    desc: "Tri-aspect expansive living spaces with floating panoramic balconies and integrated organic herb wall."
  },
  {
    type: "Luxury Villa Plots",
    space: "1,500 - 2,400 Sq Ft",
    invest: "₹55 Lakhs - ₹90 Lakhs",
    yield: "Historic +22% YoY Corridor Growth",
    desc: "Perfect high-drainage flat earth ready for immediate custom structure laying with DTCP layout order verified."
  },
  {
    type: "Premium Villa Plots",
    space: "2,400 - 4,000 Sq Ft",
    invest: "₹90 Lakhs - ₹1.5 Cr",
    yield: "Historic +24% YoY Corridor Growth",
    desc: "Avenue-facing corner plots with absolute legal mutation reports pre-completed."
  },
  {
    type: "Signature Estate Plots",
    space: "4,000 - 8,000 Sq Ft",
    invest: "₹1.5 Cr - ₹3 Cr",
    yield: "Ultimate Asset Preservation Rating",
    desc: "The absolute crown of Legacy. Expansive estates situated near the private botanical forest bounds with maximum privacy buffers."
  }
];

// Interactive configurations for Velora Greens
const VELORA_CONFIGS = [
  {
    type: "2 BHK Boutique",
    space: "1,150 Sq Ft",
    invest: "₹58 Lakhs Onwards",
    desc: "Designed with generous light-wells and integrated energy-recovery ventilators."
  },
  {
    type: "3 BHK Boutique Estate",
    space: "1,620 Sq Ft",
    invest: "₹82 Lakhs Onwards",
    desc: "Expansive layouts designed for multi-generational families with independent master bedrooms."
  },
  {
    type: "Premium Row Housing",
    space: "2,200 Sq Ft Build Block",
    invest: "₹1.2 Cr Onwards",
    desc: "Direct terrace access, private courtyard deck, and dual-vehicle parking with high-voltage charging."
  },
  {
    type: "Exclusive Villa Plots",
    space: "1,200 - 3,000 Sq Ft",
    invest: "₹45 Lakhs - ₹1.1 Cr",
    desc: "Custom ready-to-build boutique plots in our master-planned low-density organic enclave."
  }
];

const VELORA_FEATURES = [
  {
    title: "Eco-Acoustic Privacy",
    desc: "Engineered wall structures keeping noise indexes beneath 35dB for uninterrupted deep focus."
  },
  {
    title: "Automated Energy Core",
    desc: "Vapor-compression cooling paired with state-of-the-art smart grids reducing utility costs by 45%."
  },
  {
    title: "Organic Community Green",
    desc: "A central native playground and heirloom tree cluster serving as the focal social meeting grid."
  }
];

export default function ProjectDetailPage({ projectId, onClose, onBookTour }: ProjectDetailPageProps) {
  const [activeSectorId, setActiveSectorId] = useState(LEGACY_SECTORS[0].id);
  const [activeConfigIndex, setActiveConfigIndex] = useState(0);

  // Determine current metadata details based on projectId
  const isLegacy = projectId === "legacy" || projectId.toLowerCase().indexOf("legacy") > -1;
  const isVelora = projectId === "velora" || projectId.toLowerCase().indexOf("velora") > -1;
  const isHayat = projectId === "hayat" || projectId.toLowerCase().indexOf("hayat") > -1;
  const isLogistics = projectId === "logistics" || projectId.toLowerCase().indexOf("logistics") > -1;

  // Let's create an elegant fallback or selected project metadata bundle
  const projectName = isLegacy 
    ? "Legacy Township" 
    : isVelora 
      ? "Velora Greens" 
      : isHayat 
        ? "Hayat Greens Resort" 
        : "Logistics & Industrial Parks";

  const projectTagline = isLegacy
    ? "Integrated City outliving generations"
    : isVelora
      ? "Boutique Community purposefully crafted for elevated living"
      : isHayat
        ? "Nature-Inspired Luxury Wellness Sanctuary"
        : "Strategic Commerce & Logistics Ecosystem";

  const bgImage = isLegacy 
    ? "/src/assets/images/al_green_legacy_1780310147200.png"
    : isVelora
      ? "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
      : isHayat
        ? "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop"
        : "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop";

  return (
    <div id={`project-detail-panel-${projectId}`} className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A] text-white font-sans antialiased">
      {/* Absolute top control header */}
      <div className="sticky top-0 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.05] z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoIcon} 
            alt="Logo Icon" 
            className="w-8 h-8 object-contain"
          />
          <div>
            <span className="block text-xs font-mono uppercase tracking-widest text-neutral-400">ACCENTURE INFRA PORTFOLIO</span>
            <span className="block text-xs font-bold uppercase tracking-wider text-white">{projectName}</span>
          </div>
        </div>

        <button 
          id="project-detail-close-btn"
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white rounded-lg text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
          <span>Exit Ledger</span>
        </button>
      </div>

      {/* Hero presentation with massive editorial typography */}
      <div className="relative min-h-[70vh] flex items-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bgImage} 
            alt={projectName} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-gold font-mono text-xs uppercase tracking-[0.3em] font-semibold block">
              {isLegacy ? "INTEGRATED CITY" : isVelora ? "BOUTIQUE COMMUNITY" : isHayat ? "HOSPITALITY DIVISION" : "COMMERCIAL DIVISION"}
            </span>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl md:text-8xl tracking-wide uppercase leading-none text-white">
              {projectName.split(" ")[0]} <br />
              <span className="text-gold">{projectName.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="font-mono font-normal text-base sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
              {projectTagline}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right pb-4">
            <button
              id="detail-hero-book-btn"
              onClick={() => onBookTour(projectName)}
              className="px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-black font-mono text-xs font-black uppercase tracking-widest rounded-xl shadow-lg shadow-gold/25 cursor-pointer inline-flex items-center gap-2 group transition-all"
            >
              <span>Schedule Private Tour</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CORE BRAND POSITIONING BLOCK: "Why trust Al Green with this asset decision?" */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/[0.05]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
              THE MUTUAL VALUE HYPOTHESIS
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl uppercase text-white leading-tight">
              WHY SECURE AN ASSET WITH <span className="font-semibold text-gold">ACCENTURE INFRA?</span>
            </h2>
            <div className="h-[2px] w-20 bg-gold" />
            <p className="text-sm text-neutral-400 font-mono font-normal leading-relaxed">
              A real estate investment of ₹50 Lakhs to ₹2 Crore is not a purchase of brick and mortar; it is the physical allocation of your family's financial future. Speculative builders inflate prices with fake amenities. Accenture Infra establishes capital preservation nodes built strictly upon audited spatial demand, clear legal mutation history, and climate-adaptive physical master-planning.
            </p>
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs font-mono text-white uppercase font-bold">100% Legal Mutation Immunity</span>
                <span className="block text-[11px] text-neutral-500 font-mono font-normal mt-1">
                  Every sq ft is backed by a 40-year parent deed trace and DTCP single-window RERA registry layout clearance order pre-secured.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {isLegacy ? (
              <>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">45 <span className="text-xs text-gold font-mono uppercase font-bold">Acres</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Total Plotted City Spatial</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">An expansive, low-density zoning community ensuring maximum privacy buffers and continuous airflow across every villa boundary.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">2,000 <span className="text-xs text-gold font-mono uppercase font-bold">Units</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Premium Apartments</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Elegantly spaced multi-aspect homes situated in high-elevation structural blocks utilizing energy recovery grids.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">1 Lakh <span className="text-xs text-gold font-mono uppercase font-bold">Sq Ft</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Grand Lifestyle Clubhouse</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Multi-layered clay-structure hub containing sports systems, virtual workspace lounges, and deep-care wellness zones.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">80+ <span className="text-xs text-gold font-mono uppercase font-bold">Experientials</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Lifestyle Amenities Active</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">From microclimate botanical pathways to automated high-voltage electric grid terminals.</p>
                </div>
              </>
            ) : isVelora ? (
               <>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Boutique <span className="text-xs text-gold font-mono uppercase font-bold">Zoning</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">True Scale Intimacy</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Designed for peace. Only 90 elegant residences allowing an absolute maximum privacy factor and minimum population densities.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Row <span className="text-xs text-gold font-mono uppercase font-bold">Housing</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Bespoke Architectural Forms</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Carefully crafted multi-level block houses featuring private open skylights and intimate wooden sundecks.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Exclusive <span className="text-xs text-gold font-mono uppercase font-bold">Plots</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Raw Premium Soil Blocks</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Gravel-bedded, direct high-pressure water grid plots with a historic +21% annual local growth projection.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Green <span className="text-xs text-gold font-mono uppercase font-bold">Living</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Carbon Sequestration Layout</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Featuring a gorgeous common botanical garden containing 800+ indigenous trees to naturally lower local temperatures by 3°C.</p>
                </div>
              </>
            ) : isHayat ? (
               <>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Luxury <span className="text-xs text-gold font-mono uppercase font-bold">Cabins</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Hospitality Retreat Nodes</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Immersive nature-inspired cabins mimicking traditional organic forms with modern temperature-control buffers.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Wellness <span className="text-xs text-gold font-mono uppercase font-bold">Spa</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Bio-Balance Retreat Center</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Custom therapeutic facilities overlooking water catchments, integrating localized heat pools and botanical vapor baths.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Nature <span className="text-xs text-gold font-mono uppercase font-bold">Conservation</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Permanent Ecological Buffer</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Over 15 acres of native woods completely safeguarded against any urban development, retaining pristine stream water.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">High <span className="text-xs text-gold font-mono uppercase font-bold">Yield</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Fractional Adopter Pass-Through</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Offering a verified +14.2% stable annual yield return pool pre-negotiated for qualified capital investors.</p>
                </div>
              </>
            ) : (
              <>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Strategic <span className="text-xs text-gold font-mono uppercase font-bold">Logistics</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Connectivity Interlocking Nodes</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Immediate direct frontage on crucial high-speed express corridors linking national industrial complexes.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Future-Ready <span className="text-xs text-gold font-mono uppercase font-bold">CapEx</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Heavy Pre-Cast Foundations</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Reinforced load-bearing earth with integrated fiber trunks, solar substations, and wide-turn freight logistics routes.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Zero <span className="text-xs text-gold font-mono uppercase font-bold">Bottleneck</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Automated Customs Registry</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Customized layout plans matching international container standards with fast-track single-window customs links.</p>
                </div>
                <div className="p-6 bg-[#111] border border-white/[0.08] rounded-xl space-y-3">
                  <span className="text-3xl font-mono font-normal text-white block">Institutional <span className="text-xs text-gold font-mono uppercase font-bold">liquidity</span></span>
                  <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">MNC Tenancies Pre-Cleared</span>
                  <p className="text-xs text-neutral-400 font-mono font-normal">Direct legal lease options lined up with top-tier international logistics and warehousing clients.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* DETAILED INTERACTIVE ELEMENT: CONFIGURATION EXPLORER */}
      <div className="bg-[#111111] py-24 border-t border-b border-white/[0.05] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#24421E]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono text-gold tracking-[0.25em] uppercase font-bold block mb-2">
              ACTIVE LEDGER METRICS
            </span>
            <h2 className="font-mono font-bold text-2xl sm:text-4xl uppercase text-white leading-tight">
              SPATIAL CONFIGURATION EXPLORER
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono font-normal">
              Toggle configurations below to review engineered floor plans, required investments, and structural features.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left buttons (5 Columns) */}
            <div className="lg:col-span-4 space-y-3">
              {(isLegacy ? LEGACY_CONFIGS : VELORA_CONFIGS).map((item, idx) => {
                const isSelected = activeConfigIndex === idx;
                return (
                  <div key={idx} className="space-y-2">
                    <button
                      id={`config-btn-${idx}`}
                      onClick={() => setActiveConfigIndex(idx)}
                      className={`w-full py-4 px-6 text-left border rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer ${
                        isSelected 
                          ? "bg-[#24421E] text-white border-[#1c4e36] font-bold" 
                          : "bg-black/40 text-neutral-400 border-white/[0.04] hover:border-white/10 hover:text-white"
                      }`}
                    >
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider block">{item.type}</span>
                        <span className="text-[10px] font-mono text-gold block mt-0.5">{item.space}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono transition-transform duration-300 block lg:hidden ${isSelected ? "rotate-90 text-gold" : "text-neutral-400"}`}>
                          {isSelected ? "▲" : "▼"}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 hidden lg:block ${isSelected ? "translate-x-1 text-gold" : "opacity-30"}`} />
                      </div>
                    </button>

                    {/* Inline Mobile Config Details Accordion */}
                    <AnimatePresence initial={false}>
                      {isSelected && (
                        <motion.div
                          id={`mobile-config-accordion-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="block lg:hidden overflow-hidden w-full"
                        >
                          <div className="p-5 bg-neutral-900 rounded-lg border border-gold/30 space-y-4">
                            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/[0.04] pb-3">
                              <h4 className="text-lg font-mono font-medium text-white">{item.type}</h4>
                              <div className="text-right">
                                <span className="block text-[8px] font-mono text-neutral-500 uppercase">ACQUISITION CAPEX</span>
                                <span className="text-sm font-mono font-bold text-gold">{item.invest}</span>
                              </div>
                            </div>

                            <p className="text-xs text-neutral-300 font-mono font-normal leading-relaxed">
                              {item.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.04]">
                              <div>
                                <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ZONED SPACE CAPACITY</span>
                                <span className="text-[11px] font-mono text-white block mt-0.5">{item.space}</span>
                              </div>
                              
                              {"yield" in item && (
                                <div>
                                  <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ESTIMATED CAGR</span>
                                  <span className="text-[11px] font-mono text-green-400 block mt-0.5 flex items-center gap-1">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                    {String(item.yield)}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="p-3 bg-black/50 rounded border border-white/[0.04] space-y-1">
                              <span className="text-[8px] font-mono text-gold uppercase tracking-widest block font-bold">ACCENTURE INFRA COVENANTS:</span>
                              <ul className="text-[10px] text-neutral-400 font-mono font-normal space-y-1">
                                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold shrink-0" /> Pre-tested soil bearing parameters</li>
                                <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold shrink-0" /> Clear title mutation certificates included</li>
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right details layout (8 Columns) - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-8 bg-black border border-white/[0.08] p-8 sm:p-10 rounded-xl space-y-8 shadow-2xl">
              {(() => {
                const currentConfig = (isLegacy ? LEGACY_CONFIGS : VELORA_CONFIGS)[activeConfigIndex] || (isLegacy ? LEGACY_CONFIGS : VELORA_CONFIGS)[0];
                return (
                  <div className="space-y-6">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">SECURE SYSTEM PARADIGM // CODE_CONF_EXPLORER</span>
                    <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-white/[0.04] pb-5">
                      <h4 className="text-2xl sm:text-3xl font-mono font-medium text-white">{currentConfig.type}</h4>
                      <div className="text-right">
                        <span className="block text-[9px] font-mono text-neutral-500 uppercase">ACQUISITION CAPEX</span>
                        <span className="text-xl font-mono font-bold text-gold">{currentConfig.invest}</span>
                      </div>
                    </div>

                    <p className="text-sm text-neutral-300 font-mono font-normal leading-relaxed">
                      {currentConfig.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.04]">
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ZONED SPACE CAPACITY</span>
                        <span className="text-base font-mono text-white block mt-1">{currentConfig.space} Mapped Surface</span>
                      </div>
                      
                      {"yield" in currentConfig && (
                        <div>
                          <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ASSET GROWTH PROJECTION</span>
                          <span className="text-base font-mono text-green-400 block mt-1 flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            {String(currentConfig.yield)}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-[#111] rounded border border-white/[0.05] space-y-2 mt-6">
                      <span className="text-[8px] font-mono text-gold uppercase tracking-widest block">GUARANTEED STRUCTURAL INTEGRITY COVENANTS</span>
                      <ul className="text-xs text-neutral-400 font-mono font-normal space-y-1">
                        <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold" /> Pre-tested soil bearing parameters</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold" /> Individual water pressure index and telemetry pre-secured</li>
                        <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-gold" /> Clear title MUTATION CERTIFICATE included</li>
                      </ul>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL INTERACTIVE TAB FOR LEGACY TOWNSHIP: INTERACTIVE MASTERPLAN VIEW */}
      {isLegacy && (
        <div className="max-w-7xl mx-auto px-6 py-24 border-b border-white/[0.05]">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-mono text-gold tracking-[0.25em] uppercase font-bold block mb-2">
              03 / SPATIAL ENGINEERING
            </span>
            <h2 className="font-mono font-bold text-2xl sm:text-4xl uppercase text-white leading-tight">
              INTERACTIVE MASTERPLAN <span className="font-bold text-gold">EXPLORER</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono font-normal">
              Accenture Legacy Township spans 105 total master-planned acres with a 45-acre residential core. Select masterplan sectors below to analyze construction progress, soil surface metrics, and primary features.
            </p>
          </div>

          {/* Mobile Masterplan Accordion - Only shown on mobile/tablet */}
          <div className="block lg:hidden space-y-3 w-full">
            {LEGACY_SECTORS.map((sec) => {
              const isSelected = activeSectorId === sec.id;
              return (
                <div key={sec.id} className="space-y-2">
                  <button
                    id={`mobile-sector-tab-${sec.id}`}
                    onClick={() => setActiveSectorId(sec.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 relative cursor-pointer block ${
                      isSelected
                        ? "bg-[#24421E]/40 border-[#1c4e36] text-white font-semibold shadow-md"
                        : "bg-[#111111]/40 border-white/[0.04] text-neutral-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gold rounded-r" />
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="block text-[8px] font-mono uppercase tracking-widest text-[#BAA360] font-bold">
                          SURFACE: {sec.area}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider block text-white mt-0.5">
                          {sec.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono transition-transform duration-300 ${isSelected ? "rotate-90 text-gold font-bold" : "text-neutral-400"}`}>
                        {isSelected ? "▲" : "▼"}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        id={`mobile-sector-accordion-${sec.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden w-full"
                      >
                        <div className="p-5 bg-black rounded-lg border border-gold/30 shadow-inner space-y-4">
                          <div>
                            <span className="text-gold font-mono text-[9px] uppercase tracking-wider block">MUTATION STATUS // {sec.status.toUpperCase()}</span>
                            <h4 className="text-lg font-mono font-medium text-white mt-1">{sec.name}</h4>
                          </div>
                          
                          <p className="text-xs text-neutral-300 font-mono font-normal leading-relaxed">
                            {sec.desc}
                          </p>

                          <div className="space-y-2 pt-3 border-t border-white/[0.04]">
                            <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">PRIMARY ATTRIBUTED LAYER SPECS</span>
                            <ul className="grid grid-cols-1 gap-1.5">
                              {sec.features.map((feature, idx) => (
                                <li key={idx} className="text-xs text-neutral-400 font-mono font-normal flex items-center gap-2">
                                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2 border-t border-white/[0.04] flex justify-between items-center">
                            <span className="text-[9px] font-mono text-neutral-500 uppercase font-semibold">TOTAL ESTIMATED SURFACE AREA</span>
                            <span className="text-xs text-white font-mono font-bold bg-[#111] border border-white/[0.05] rounded px-2.5 py-0.5">{sec.area} Allocated</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:grid grid-cols-12 gap-8 items-center bg-[#111111]/40 border border-white/[0.06] rounded-xl p-6 sm:p-10 relative w-full">
            <div className="col-span-7 space-y-6">
              {/* Virtual Isometric Grid Mockup for Masterplan */}
              <div className="aspect-[16/10] bg-black/80 rounded-lg p-6 border border-white/[0.05] relative flex flex-col justify-between overflow-hidden">
                <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-600">SCHEMATIC_MAP_INTEGRATION_ENG_V1.9</div>
                
                {/* Visual Representation of Masterplan Districts */}
                <div className="grid grid-cols-2 gap-4 w-full h-[80%] my-auto z-10">
                  {LEGACY_SECTORS.map((sec) => {
                    const isSelected = activeSectorId === sec.id;
                    return (
                      <button
                        id={`sector-grid-btn-${sec.id}`}
                        key={sec.id}
                        onClick={() => setActiveSectorId(sec.id)}
                        className={`p-4 rounded-lg border text-left flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                          isSelected
                            ? "bg-[#24421E]/40 border-[#1c4e36] shadow-inner"
                            : "bg-[#161616]/70 border-white/[0.03] hover:border-white/10"
                        }`}
                      >
                        <div className="absolute top-0 right-0 w-8 h-8 bg-gold/10 rounded-bl-full flex items-center justify-center font-mono text-[8px] text-gold font-bold transition-all group-hover:scale-105">
                           {sec.area.split(" ")[0]}
                        </div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSelected ? "text-gold font-bold" : "text-neutral-500"}`}>
                          {sec.name.split(" ")[0]}
                        </span>
                        <span className="text-[9px] text-neutral-400 font-mono block mt-3">
                          {sec.status}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500">
                  <span>SCALE: NOT ACCURATE // PHYSICAL SPATIAL DATA BOUND</span>
                  <span className="text-gold uppercase flex items-center gap-1">🟢 LIVE BLUEPRINT METRICS ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Sector details displaying on click */}
            <div className="col-span-5 space-y-6">
              {(() => {
                const section = LEGACY_SECTORS.find((s) => s.id === activeSectorId) || LEGACY_SECTORS[0];
                return (
                  <div className="space-y-4">
                    <span className="text-gold font-mono text-xs uppercase tracking-wider block">MUTATION STATUS // {section.status.toUpperCase()}</span>
                    <h4 className="text-xl sm:text-2xl font-mono font-medium text-white">{section.name}</h4>
                    <div className="h-[2px] w-12 bg-gold" />
                    <p className="text-xs text-neutral-300 font-mono font-normal leading-relaxed">
                      {section.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                      <span className="text-[8px] font-mono text-neutral-500 uppercase tracking-widest block">PRIMARY ATTRIBUTED LAYER SPECS</span>
                      <ul className="grid grid-cols-1 gap-2">
                        {section.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-neutral-400 font-mono font-normal flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-neutral-500">TOTAL ESTIMATED SURFACE AREA</span>
                      <span className="text-base text-white font-mono font-bold block mt-0.5">{section.area} Allocated</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* LIFESTYLE GALLERY & COMMUNITY STORYTELLING SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 border-b border-white/[0.05]">
        <div id="project-detail-lifestyle-header" className="max-w-3xl mb-16 text-center mx-auto">
          <span className="text-[10px] font-mono text-[#BAA360] tracking-[0.25em] uppercase font-bold block mb-2">
            EPICUREAN LAND ECOSYSTEMS
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-5xl uppercase text-white leading-tight">
            THE ART OF <span className="text-gold font-bold">ECO-LIVING</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-sans font-normal max-w-xl mx-auto">
            Not a concrete jungle. Multi-acre forest pockets, deep bioswales, organic farms, and quiet microclimate lanes planned to enhance human focus and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 hover:cursor-pointer">
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" 
                alt="Native Tree Garden" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider">SEC_MUT_NURSERY</div>
            </div>
            <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">Native Forest Commons</h4>
            <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
              Every Accenture Infra property features a state-of-the-art native botany nursery. Up to 2,500 mature, indigenous trees and shrubs are nurtured on-site to build high-end microclimate layers.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
                alt="Double height lobby lounge" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider">SEC_CLUB_LOUNGE</div>
            </div>
            <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">The Grand Vault Lounges</h4>
            <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
              Quiet double-height wooden study libraries, meeting chambers, and organic juice bars crafted for remote tech executives, business operators, and multigenerational adopters.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
              <img 
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=600&auto=format&fit=crop" 
                alt="Premium Wellness Spa Bath" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider">SEC_WELLNESS_POD</div>
            </div>
            <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">Therapeutic Water Pools</h4>
            <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
              State of the art mineral pools, biological water filtration lines, and sauna rooms designed strictly to aid physical restoration and premium wellness focus.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CALL TO INTERACTION (CTA) */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-center space-y-8">
        <span className="text-[10px] font-mono text-[#BAA360] tracking-[0.25em] uppercase font-bold block">
          PRIVATE RECRUITMENT ACTIVE
        </span>
        <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
          SECURE AN ENGAGEMENT SESSION ON <span className="font-bold text-gold">THE PLOTTED GROUND</span>
        </h3>
        <p className="text-sm text-neutral-400 font-sans font-normal max-w-xl mx-auto leading-relaxed">
          Book a private consultant-led tour of the property boundaries. We will mutation-verify deeds, analyze local developmental infrastructure layers, and walk the physical soil layout.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-4">
          <button
            id={`detail-visit-btn-${projectId}`}
            onClick={() => onBookTour(projectName)}
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-black font-mono text-xs font-black uppercase tracking-widest rounded-xl shadow-xl shadow-gold/20 cursor-pointer"
          >
            Schedule Land Visit
          </button>
          <button
            id="detail-close-bottom-btn"
            onClick={onClose}
            className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-white rounded-xl text-neutral-400 hover:text-white font-mono text-xs uppercase tracking-widest cursor-pointer transition-all"
          >
            Go Back To Overview
          </button>
        </div>
      </div>
    </div>
  );
}
