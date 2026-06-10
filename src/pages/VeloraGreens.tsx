import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MapPin, Home, Check, Leaf, Building2, Shield, Trees, Users, Sparkles, Lock, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import LuxuryConfigAccordion from "../components/LuxuryConfigAccordion";
import FloorPlanPanel from "../components/FloorPlanPanel";

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

export default function VeloraGreens() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(heroScrollProgress, [0, 1], [0, 300]);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [selectedFloorPlanIndex, setSelectedFloorPlanIndex] = useState(0);
  const [activeConfigIndex, setActiveConfigIndex] = useState(0);

  const highlights = [
    { text: "Premium Gated Community", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop" },
    { text: "90 Apartments Across 6 Blocks", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop" },
    { text: "Elegant Row Housing", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" },
    { text: "Premium Villa Plots", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop" },
    { text: "Spacious 2 & 3 BHK Residences", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" },
    { text: "Modern Architecture", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop" },
    { text: "Open Green Spaces", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop" },
    { text: "Lifestyle-Focused Planning", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" },
    { text: "Secure & Family-Friendly", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=400&auto=format&fit=crop" }
  ];

  const configurations = [
    "2 BHK",
    "3 BHK",
    "Row Housing",
    "Villa Plots"
  ];

  const floorPlans = [
    {
      id: "2bhk-1200",
      title: "2 BHK Apartment",
      subtitle: "Type A - Standard Configuration",
      area: "1200 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "3bhk-1600",
      title: "3 BHK Apartment",
      subtitle: "Type B - Premium Configuration",
      area: "1600 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "row-house",
      title: "Row Housing",
      subtitle: "Type C - Duplex Configuration",
      area: "1800 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "villa-plot",
      title: "Villa Plot",
      subtitle: "Type D - Premium Plot",
      area: "2400 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-sans">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gold to-[#A0814C] z-[60]"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
      />
      
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
            alt="Velora Greens"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1f0c]" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
className="font-luxury-heading text-5xl md:text-7xl tracking-wide uppercase mb-6"
          >
            Velora Greens
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Thoughtfully Crafted For Elevated Living
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-neutral-400"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Sarjapur-Varthur Tech Belt, Bangalore East</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-8">
              Overview
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              A thoughtfully envisioned community in East Bangalore offering Modern Living Residences and distinctive Velora Greens Courtyard Homes. Designed for modern families and discerning investors, the project combines urban comfort with open spaces, wellness amenities, and refined living experiences.
            </p>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
              alt="Velora Greens Overview"
              className="w-full h-96 object-cover rounded-xl border border-white/20 hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Mutual Value Hypothesis Section */}
      <section className="py-24 bg-[#0a1209] border-t border-white/[0.05] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                THE MUTUAL VALUE HYPOTHESIS
              </span>
              <h2 className="font-luxury-heading text-2xl sm:text-4xl uppercase text-white leading-tight">
                WHY SECURE AN ASSET WITH <span className="text-gold">ACCENTURE INFRA?</span>
              </h2>
              <div className="h-[2px] w-20 bg-gold font-normal" />
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

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              <div className="p-6 bg-[#111111]/40 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Boutique <span className="text-xs text-gold font-mono uppercase font-bold">Zoning</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">True Scale Intimacy</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Designed for peace. Only 90 elegant residences allowing an absolute maximum privacy factor and minimum population densities.</p>
              </div>
              <div className="p-6 bg-[#111111]/40 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Row <span className="text-xs text-gold font-mono uppercase font-bold">Housing</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Bespoke Architectural Forms</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Carefully crafted multi-level block houses featuring private open skylights and intimate wooden sundecks.</p>
              </div>
              <div className="p-6 bg-[#111111]/40 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Exclusive <span className="text-xs text-gold font-mono uppercase font-bold">Plots</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Raw Premium Soil Blocks</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Gravel-bedded, direct high-pressure water grid plots with a historic +21% annual local growth projection.</p>
              </div>
              <div className="p-6 bg-[#111111]/40 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Green <span className="text-xs text-gold font-mono uppercase font-bold">Living</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Carbon Sequestration Layout</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Featuring a gorgeous common botanical garden containing 800+ indigenous trees to naturally lower local temperatures by 3°C.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-[#24421E] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-4">
              Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all duration-300 group relative"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={highlight.image}
                    alt={highlight.text}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="font-sans text-sm font-semibold text-center" style={{ color: '#111827' }}>{highlight.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations Section */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-4">
              Project Configurations
            </h2>
            <p className="text-lg text-neutral-300 font-normal">
              Explore our premium residential options designed for luxurious living
            </p>
          </motion.div>
          <LuxuryConfigAccordion />

          {/* Spatial Configuration Explorer from Drawer */}
          <div className="mt-20 border-t border-white/10 pt-16 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#24421E]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12 text-left">
                <span className="text-[10px] font-mono text-gold tracking-[0.25em] uppercase font-bold block mb-2">
                  ACTIVE LEDGER METRICS
                </span>
                <h3 className="font-mono font-bold text-xl sm:text-3xl uppercase text-white leading-tight">
                  SPATIAL CONFIGURATION EXPLORER
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-mono font-normal">
                  Toggle configurations below to review engineered floor plans, required investments, and structural features.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                {/* Left buttons (4 Columns) */}
                <div className="lg:col-span-4 space-y-3">
                  {VELORA_CONFIGS.map((item, idx) => {
                    const isSelected = activeConfigIndex === idx;
                    return (
                      <div key={idx} className="space-y-2">
                        <button
                          id={`config-btn-${idx}`}
                          onClick={() => setActiveConfigIndex(idx)}
                          className={`w-full py-4 px-6 text-left border rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer ${
                            isSelected 
                              ? "bg-[#24421E] text-white border-[#1c4e36] font-bold" 
                              : "bg-black/40 text-neutral-450 border-white/[0.04] hover:border-white/10 hover:text-white"
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

                                <p className="text-xs text-neutral-350 font-mono font-normal leading-relaxed">
                                  {item.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.04]">
                                  <div>
                                    <span className="block text-[8px] font-mono text-neutral-550 uppercase tracking-widest">ZONED SPACE CAPACITY</span>
                                    <span className="text-[11px] font-mono text-white block mt-0.5">{item.space}</span>
                                  </div>
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
                    const currentConfig = VELORA_CONFIGS[activeConfigIndex] || VELORA_CONFIGS[0];
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
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-4">
              Floor Plans
            </h2>
            <p className="text-lg text-neutral-300 font-normal">
              Explore detailed floor plans with download options
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all group cursor-pointer"
                onClick={() => {
                  setSelectedFloorPlanIndex(index);
                  setIsFloorPlanOpen(true);
                }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white border-t border-gray-100">
                  <h3 className="font-sans text-lg font-semibold mb-1" style={{ color: '#111827' }}>{plan.title}</h3>
                  <p className="text-sm mb-2" style={{ color: '#6B7280' }}>{plan.subtitle}</p>
                  <p className="text-sm font-mono font-bold" style={{ color: '#C9A45C' }}>{plan.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="py-24 bg-[#24421E] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-8">
              Growth Drivers
            </h2>
            <div className="space-y-6">
              {[
                { text: "Immediate frontage on Bangalore Peripheral Ring Road expansion zone", icon: MapPin },
                { text: "Energy-recovery mechanical ventilation reducing utility costs by 45%", icon: Leaf },
                { text: "Exceptional spatial density — premium community living without crowding", icon: Users }
              ].map((driver, index) => {
                const Icon = driver.icon;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-gold mt-1 shrink-0" />
                    </motion.div>
                    <p className="text-neutral-300 font-normal">{driver.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Epicurean Land Ecosystems Section */}
      <section className="py-24 bg-[#0a1209] border-t border-b border-white/[0.05] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-[10px] font-mono text-[#BAA360] tracking-[0.25em] uppercase font-bold block mb-2">
              EPICUREAN LAND ECOSYSTEMS
            </span>
            <h2 className="font-luxury-heading text-2xl sm:text-5xl uppercase text-white leading-tight">
              THE ART OF <span className="text-gold font-bold">ECO-LIVING</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-neutral-455 font-sans font-normal max-w-xl mx-auto">
              Not a concrete jungle. Multi-acre forest pockets, deep bioswales, organic farms, and quiet microclimate lanes planned to enhance human focus and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 hover:cursor-pointer text-left">
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
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_MUT_NURSERY</div>
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
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_CLUB_LOUNGE</div>
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
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_WELLNESS_POD</div>
              </div>
              <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">Therapeutic Water Pools</h4>
              <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
                State of the art mineral pools, biological water filtration lines, and sauna rooms designed strictly to aid physical restoration and premium wellness focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-topographic">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-luxury-heading text-3xl md:text-4xl uppercase mb-6">
              Schedule a Site Visit
            </h2>
            <p className="text-neutral-300 mb-8 font-normal">
              Experience Velora Greens in person. Our team will guide you through this thoughtfully envisioned community.
            </p>
            <Link
              to="/?project=VELORA%20GREENS#visit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Book Your Visit
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} faqType="velora" />
      <FloatingCTA />
      
      <FloorPlanPanel
        isOpen={isFloorPlanOpen}
        onClose={() => setIsFloorPlanOpen(false)}
        floorPlans={floorPlans}
        initialIndex={selectedFloorPlanIndex}
      />
    </div>
  );
}
