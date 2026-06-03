import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle, 
  TrendingUp, 
  Layers, 
  Compass, 
  Activity, 
  Award,
  Sparkles,
  MapPin
} from "lucide-react";
import { BANGALORE_EAST_HOTSPOTS } from "../data";
import { Hotspot } from "../types";

// Growth Intelligence Pillars
const INTELLIGENCE_PILLARS = [
  {
    id: "infrastructure",
    name: "Infrastructure Growth",
    metric: "₹45,000 Cr CapEx",
    trend: "+28.4% Annual Budgets",
    narrative: "Al Green Developers doesn't speculatively hope for civic infrastructure — we only acquire land in state-approved priority development vectors. High-elevation contours, water-retention channels, and robust sub-grade services are mapped prior to layout blueprint design.",
    points: [
      "Secured subterranean underground high-voltage cabling structures",
      "Robust pre-cast concrete stormwater drain arrays preventing runoff",
      "Rigorous load-bearing soil core certification with independent structural audits"
    ]
  },
  {
    id: "connectivity",
    name: "Connectivity & Mass Transit",
    metric: "6-Lane Expressways",
    trend: "60% Travel Time Slashed",
    narrative: "Proximity to high-speed logistical rings is the single highest predictor of multi-decade land value appreciation. Our active developments are placed precisely within 10 minutes of primary expressway entry terminals and proposed high-speed mass transit corridors.",
    points: [
      "Bangalore Peripheral Ring Road and STRR linkage proximity",
      "Immediate fast access to major aerospace and international cargo airports",
      "Internal 40ft gravel-bedded pathways with self-healing top wearing borders"
    ]
  },
  {
    id: "economic",
    name: "Economic Expansion SEZ",
    metric: "20+ Fortune 500 Entry",
    trend: "₹18,200 Cr FDI Inflow",
    narrative: "We track the capital flow of industrial enterprise. EV gigafactories, clean energy nodes, software parks, and aerospace hubs bring an influx of highly compensated specialists. This corporate talent pipeline directly sustains local high-end residential lease parameters.",
    points: [
      "Strategic placement adjoining major industrial and tech innovation corridors",
      "Commercial buffer lands designed to accommodate high-level local micro-economies",
      "Pre-mutated DTCP land layouts ensuring smooth institutional asset exits"
    ]
  },
  {
    id: "population",
    name: "Population Trends",
    metric: "+18.4% HNWI Inflow",
    trend: "70% Demand For Gated Enclaves",
    narrative: "The modern post-pandemic investor values environmental resilience and secure community spaces over cramped urban cores. High-net-worth individuals and NRI families are actively rotating capital from high-density city properties into low-density, sustainable greenfield grids.",
    points: [
      "Rigorous personal background clearance checks for all land buyers",
      "Permanent low-density zoning regulations protecting microclimate features",
      "Sovereign botanical groves designed to foster a pristine community atmosphere"
    ]
  },
  {
    id: "potential",
    name: "Investment Potential Ratio",
    metric: "2.2x Valuation Arbitrage",
    trend: "+22% Stable Compounded Rate",
    narrative: "Al Green represents institutional-grade land purchasing. We acquire large contiguous raw parcels, clear all title mutations through a 40-year parent chain trace, install premium road and utility systems, and transfer pristine ready-to-build estates with instant equity capture.",
    points: [
      "Secure pre-launch price advantage over traditional developers",
      "Immediate title Mutation Certificate directly registered to the block",
      "Verified historical local yield records outperforming regional equities"
    ]
  }
];

export default function SectionBangaloreEastMap() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(BANGALORE_EAST_HOTSPOTS[0]);
  const [selectedPillarId, setSelectedPillarId] = useState("infrastructure");
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);

  const activePillar = INTELLIGENCE_PILLARS.find(p => p.id === selectedPillarId) || INTELLIGENCE_PILLARS[0];

  return (
    <section id="intelligence" className="relative w-full bg-[#24421E] py-24 sm:py-36 border-t border-white/10 overflow-hidden">
      {/* High-tech ambient grids styled for dark theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#BAA360]/5 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#24421E]/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          id="intel-intro-main" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <h2 className="font-mono font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            GROWTH <span className="text-gold font-bold">CORRIDORS</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-mono font-normal text-xs sm:text-sm tracking-wide max-w-xl">
            We don't pitch luxury wallpaper or high-gloss lobbies. We map the physical capital levers that drive direct long-term asset appreciation.
          </p>
        </motion.div>

        {/* PILLARS MATRIX TABBAR - Desktop Only */}
        <div className="hidden lg:grid grid-cols-5 gap-2 border-b border-white/10 pb-8 mb-12">
          {INTELLIGENCE_PILLARS.map((p) => {
            const isSelected = selectedPillarId === p.id;
            return (
              <button
                id={`pillar-tab-${p.id}`}
                key={p.id}
                onClick={() => setSelectedPillarId(p.id)}
                className={`py-4 px-3 rounded-lg border text-left transition-all duration-300 relative cursor-pointer ${
                  isSelected
                    ? "bg-[#111111]/40 border-[#BAA360]/40 shadow-sm text-white"
                    : "bg-transparent border-transparent text-neutral-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                )}
                <span className="block text-[8px] font-mono uppercase tracking-widest text-[#BAA360] mb-1 font-bold">
                  {p.metric}
                </span>
                <span className={`text-xs font-mono uppercase tracking-wider block font-semibold ${isSelected ? "text-gold" : "text-white/80"}`}>
                  {p.name.split(" ")[0]} <span className="text-neutral-400 block text-[10px] font-normal">{p.name.split(" ").slice(1).join(" ")}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* PILLARS MATRIX ACCORDION - Mobile/Tablet Only */}
        <div className="block lg:hidden space-y-3 mb-10">
          {INTELLIGENCE_PILLARS.map((p) => {
            const isSelected = selectedPillarId === p.id;
            return (
              <div key={p.id} className="space-y-2">
                <button
                  id={`pillar-accordion-btn-${p.id}`}
                  onClick={() => setSelectedPillarId(p.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all duration-300 relative cursor-pointer block ${
                    isSelected
                      ? "bg-white/[0.05] border-gold shadow-md text-white font-bold"
                      : "bg-[#111111]/40 border-white/[0.04] hover:border-white/10 hover:bg-white/5 text-neutral-400"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gold rounded-r" />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[8px] font-mono uppercase tracking-widest text-[#BAA360] font-bold">
                        {p.metric}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider block font-bold text-white mt-0.5">
                        {p.name}
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
                      id={`mobile-pillar-accordion-${p.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden w-full"
                    >
                      <div className="p-5 bg-black/60 rounded-lg border border-gold/30 shadow-inner space-y-4">
                        <div>
                          <span className="text-xs font-mono text-gold block uppercase tracking-widest font-bold">
                            {p.metric} Target CapEx
                          </span>
                          <h4 className="font-mono font-semibold text-lg text-white uppercase tracking-wider mt-1">
                            {p.name}
                          </h4>
                        </div>
                        
                        <p className="text-xs text-neutral-300 font-mono font-normal leading-relaxed">
                          {p.narrative}
                        </p>

                        <div className="space-y-2 pt-4 border-t border-white/10">
                          <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">
                            AUDITED VALUE ATTRIBUTES
                          </span>
                          <ul className="space-y-2">
                            {p.points.map((pt, idx) => (
                              <li key={idx} className="text-xs text-neutral-300 font-mono font-normal flex items-start gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                          <span className="text-neutral-400 uppercase font-semibold">TREND MOMENTUM:</span>
                          <span className="text-gold font-bold flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" />
                            {p.trend}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* INTEGRATED DASHBOARD DISPLAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* COLUMN 1: INTEL PILLAR CONTENT (5 COLS) - Hidden on Mobile, replaced by Accordion */}
          <div className="hidden lg:flex lg:col-span-5 bg-[#111111]/40 border border-white/[0.06] rounded-xl p-6 sm:p-10 flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[8px] font-mono text-neutral-500 select-none">
              LEDGER_SECURE://INTEL_STREAM
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                id={`pillar-content-${activePillar.id}`}
                key={activePillar.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-gold block uppercase tracking-widest font-bold">
                    {activePillar.metric} Target CapEx
                  </span>
                  <h3 className="font-mono font-semibold text-2xl text-white uppercase tracking-wider mt-2">
                    {activePillar.name}
                  </h3>
                  <div className="h-[2px] w-16 bg-gold mt-3" />
                  
                  <p className="mt-6 text-xs sm:text-sm text-neutral-300 font-mono font-normal leading-relaxed">
                    {activePillar.narrative}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block font-bold select-none">
                    AUDITED VALUE ATTRIBUTES
                  </span>
                  <ul className="space-y-2">
                    {activePillar.points.map((pt, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 font-mono font-normal flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-neutral-400 uppercase font-semibold">TREND MOMENTUM:</span>
                  <span className="text-gold font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {activePillar.trend}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COLUMN 2: GEOGRAPHIC HOTSPOT SPATIAL MAP (7 COLS) */}
          <div className="lg:col-span-7 bg-[#111111]/40 border border-white/[0.06] rounded-xl p-4 sm:p-8 flex flex-col justify-between relative overflow-hidden min-h-[480px] shadow-sm">
            <div className="absolute inset-0 bg-black/20 backdrop-blur pointer-events-none" />
            
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 select-none">
              <span className="text-[9px] font-mono text-neutral-400 uppercase">SPATIAL GROWTH INTELLIGENCE</span>
              <span className="text-[8px] font-mono text-[#BAA360] uppercase bg-gold/10 px-2 py-0.5 rounded border border-gold/20 w-fit font-bold">
                REGION: BANGALORE_EAST_MAPPING_V4
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 text-[9px] font-mono text-neutral-400 hidden sm:block select-none">
              GIS://COORD_12.97_77.75_E
            </div>

            {/* Interactive map layers based on light organic outline profiles */}
            <div className="relative w-full h-[320px] sm:h-[400px] z-10 my-auto flex items-center justify-center">
              <svg
                id="growth-schematic-svg"
                className="absolute inset-x-0 mx-auto w-full max-w-[450px] h-full"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
              >
                {/* Simulated Region Boundaries updated for high prestige green-ivory display */}
                <path
                  d="M75,15 L88,25 L80,48 L55,62 L40,78 L25,60 L20,38 L42,22 L65,18 Z"
                  stroke="rgba(186,163,96,0.15)"
                  strokeWidth="0.5"
                  fill="rgba(186,163,96,0.01)"
                />
                <path
                  d="M60,35 L45,58 L38,70 L28,82 L18,50 L22,30 L45,20 L58,28 Z"
                  stroke="rgba(186,163,96,0.08)"
                  strokeWidth="0.5"
                  fill="rgba(186,163,96,0.005)"
                />
                
                {/* Expressway Connection Links mapped to exact coordinates */}
                <line x1="76" y1="35" x2="42" y2="72" stroke="rgba(186,163,96,0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="76" y1="35" x2="52" y2="48" stroke="rgba(186,163,96,0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="28" y1="22" x2="52" y2="48" stroke="rgba(186,163,96,0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="42" y1="72" x2="52" y2="48" stroke="rgba(186,163,96,0.2)" strokeWidth="0.5" strokeDasharray="2" />
                <line x1="28" y1="22" x2="76" y2="35" stroke="rgba(186,163,96,0.2)" strokeWidth="0.5" strokeDasharray="2" />

                <text x="32" y="88" fill="rgba(250,251,249,0.12)" fontSize="2.5" fontFamily="monospace">BANGALORE EAST METRO SPURS</text>
              </svg>

              {/* Pins layer */}
              {BANGALORE_EAST_HOTSPOTS.map((hot) => {
                const isSelected = selectedHotspot.id === hot.id;
                const isHovered = hoveredHotspot?.id === hot.id;

                return (
                  <button
                    id={`hotspot-telemetry-pin-${hot.id}`}
                    key={hot.id}
                    onClick={() => setSelectedHotspot(hot)}
                    onMouseEnter={() => setHoveredHotspot(hot)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                    style={{ left: `${hot.x}%`, top: `${hot.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  >
                    {(isSelected || isHovered) && (
                      <span className="absolute inset-0 -m-3 rounded-full bg-[#BAA360]/20 animate-ping border border-gold/20" />
                    )}

                    <div className="relative">
                      <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          isSelected
                            ? "bg-gold border-black scale-125 shadow-lg shadow-gold/30"
                            : "bg-[#111111]/80 border-white/40 hover:border-gold"
                        }`}
                      >
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      </div>

                      <span
                        className={`absolute left-4 top-1/2 -translate-y-1/2 ml-1 text-[9px] font-mono uppercase tracking-widest py-0.5 px-1.5 border whitespace-nowrap transition-all rounded ${
                          isSelected
                            ? "bg-[#132210] text-white border-[#BAA360]/40 font-bold"
                            : "bg-black/90 text-neutral-300 border-white/10 opacity-80 group-hover:opacity-100 shadow-sm"
                        }`}
                      >
                        {hot.name.split("-")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro panel below map displaying selected node statistics */}
            <div className="p-4 bg-black/40 rounded-lg border border-white/[0.05] mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[8px] font-mono text-neutral-400 uppercase">SELECTED REGIONAL CORRIDOR APPRECIATION</span>
                <span className="text-xs font-mono font-bold text-white block mt-0.5 uppercase tracking-wider">{selectedHotspot.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="block text-[8px] font-mono text-neutral-400 uppercase font-semibold">GROWTH INDEX</span>
                  <span className="text-xs font-mono text-gold font-bold">{selectedHotspot.growthScore} / 10</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <span className="text-[10px] font-mono font-bold text-gold bg-gold/10 border border-gold/25 rounded px-2.5 py-1">
                  {selectedHotspot.appreciationPotential.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
