import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MapPin, Home, Award, Shield, Check, Building2, TreePine, Users, Zap, Lock, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import SectionAmenities from "../components/SectionAmenities";
import SectionConfigurations from "../components/SectionConfigurations";
import FloorPlanPanel from "../components/FloorPlanPanel";

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

export default function LegacyTownship() {
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
  const [activeSectorId, setActiveSectorId] = useState(LEGACY_SECTORS[0].id);

  const highlights = [
    { text: "105 Acres", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop" },
    { text: "2000 Apartments", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=400&auto=format&fit=crop" },
    { text: "750 Villa Plots", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" },
    { text: "1 Lakh Sq Ft Clubhouse", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&auto=format&fit=crop" },
    { text: "80+ Amenities", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop" },
    { text: "Green Spaces", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop" },
    { text: "Smart Infrastructure", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" }
  ];

  const configurations = [
    {
      type: "Apartments",
      options: ["2 BHK", "2.5 BHK", "3 BHK"]
    },
    {
      type: "Villas",
      options: ["Luxury Villas", "Premium Villas", "Signature Villas"]
    }
  ];

  const floorPlans = [
    {
      id: "2bhk-legacy",
      title: "2 BHK Apartment",
      subtitle: "Type A - Standard Configuration",
      area: "1350 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "2.5bhk-legacy",
      title: "2.5 BHK Apartment",
      subtitle: "Type B - Premium Configuration",
      area: "1650 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "3bhk-legacy",
      title: "3 BHK Apartment",
      subtitle: "Type C - Luxury Configuration",
      area: "2100 Sq. Ft.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "villa-legacy",
      title: "Luxury Villa",
      subtitle: "Type D - Premium Villa",
      area: "3500 Sq. Ft.",
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
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
            alt="Legacy Township"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0d1f0c]" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" style={{ color: '#C9A45C' }} />
            <span className="text-xs font-sans font-semibold tracking-widest uppercase" style={{ color: '#C9A45C' }}>Flagship Development</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide uppercase mb-6 text-white"
          >
            Legacy Township
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-display font-medium max-w-3xl mx-auto mb-8"
            style={{ color: '#C9A45C' }}
          >
            A Landmark of Luxury Living
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-neutral-300"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-sans">Whitefield-Hoskote Corridor, Bangalore East</span>
          </motion.div>
        </div>
      </section>

      {/* Project Overview - Visual Statistics */}
      <section className="section-spacing-md section-dark bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-4 text-white">
              By The Numbers
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto">
              A self-sustaining city designed for multi-generational value creation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "105", label: "Total Acres", icon: MapPin },
              { value: "2000", label: "Apartments", icon: Building2 },
              { value: "750", label: "Villa Plots", icon: Home },
              { value: "1 Lakh", label: "Sq Ft Clubhouse", icon: Award }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="premium-card-dark p-8 text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4" style={{ color: '#C9A45C' }} />
                  <div className="text-4xl md:text-5xl font-display font-bold mb-2" style={{ color: '#111827' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-sans uppercase tracking-wider" style={{ color: '#6B7280' }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              <h2 className="font-display font-semibold text-2xl sm:text-4xl uppercase text-white leading-tight">
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
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">45 <span className="text-xs text-gold font-mono uppercase font-bold">Acres</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Total Plotted City Spatial</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">An expansive, low-density zoning community ensuring maximum privacy buffers and continuous airflow across every villa boundary.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">2,000 <span className="text-xs text-gold font-mono uppercase font-bold">Units</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Premium Apartments</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Elegantly spaced multi-aspect homes situated in high-elevation structural blocks utilizing energy recovery grids.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">1 Lakh <span className="text-xs text-gold font-mono uppercase font-bold">Sq Ft</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Grand Lifestyle Clubhouse</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Multi-layered clay-structure hub containing sports systems, virtual workspace lounges, and deep-care wellness zones.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">80+ <span className="text-xs text-gold font-mono uppercase font-bold">Experientials</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Lifestyle Amenities Active</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">From microclimate botanical pathways to automated high-voltage electric grid terminals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing-md section-dark bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl uppercase mb-4 text-white">
              Project Gallery
            </h2>
            <p className="text-lg text-neutral-300 font-normal">
              Visual tour of the development
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-video rounded-xl overflow-hidden border border-white/20 group"
              >
                <motion.img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-topographic">
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
              Thoughtfully designed spaces for modern living
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {configurations.map((config, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/20 rounded-xl p-6"
              >
                <h3 className="font-sans text-xl font-semibold text-white mb-4">
                  {config.type}
                </h3>
                <div className="space-y-2 mb-6">
                  {config.options.map((option, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-300">
                      <span className="text-gold">•</span>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full px-4 py-3 bg-gold/10 border border-gold/30 text-gold rounded-lg hover:bg-gold/20 transition-colors text-sm font-medium">
                  View Details
                </button>
              </motion.div>
            ))}
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
                className="bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-gold/30 transition-all group cursor-pointer"
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
                <div className="p-4 bg-white border border-gray-100 rounded-b-xl">
                  <h3 className="font-sans text-lg font-semibold mb-1" style={{ color: '#111827' }}>{plan.title}</h3>
                  <p className="text-sm mb-2" style={{ color: '#6B7280' }}>{plan.subtitle}</p>
                  <p className="text-sm font-mono font-bold" style={{ color: '#C9A45C' }}>{plan.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spatial Configuration Explorer from Drawer */}
      <section className="py-24 bg-[#0d1f0c] border-t border-white/10 bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-4 relative overflow-hidden text-left">
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#24421E]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
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

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left buttons (4 Columns) */}
                <div className="lg:col-span-4 space-y-3">
                  {LEGACY_CONFIGS.map((item, idx) => {
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
                                    <span className="block text-[8px] font-mono text-neutral-550 uppercase">ACQUISITION CAPEX</span>
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
                                  <div>
                                    <span className="block text-[8px] font-mono text-neutral-550 uppercase tracking-widest font-mono">ASSET CAGR PROJECTION</span>
                                    <span className="text-[11px] text-green-400 block mt-0.5 flex items-center gap-1 font-mono">
                                      <TrendingUp className="w-3.5 h-3.5" />
                                      {item.yield}
                                    </span>
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
                    const currentConfig = LEGACY_CONFIGS[activeConfigIndex] || LEGACY_CONFIGS[0];
                    return (
                      <div className="space-y-6 text-left">
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
                          <div>
                            <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">ASSET GROWTH PROJECTION</span>
                            <span className="text-base font-mono text-green-400 block mt-1 flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {currentConfig.yield}
                            </span>
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

          {/* Interactive Masterplan Explorer from Drawer */}
          <div className="mt-24 border-t border-white/10 pt-16 text-left">
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
                            
                            <p className="text-xs text-neutral-350 font-mono font-normal leading-relaxed">
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
                      <p className="text-xs text-neutral-350 font-mono font-normal leading-relaxed">
                        {section.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-white/[0.04]">
                        <span className="text-[8px] font-mono text-neutral-550 uppercase tracking-widest block">PRIMARY ATTRIBUTED LAYER SPECS</span>
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
                        <span className="text-base text-white font-mono font-bold block mt-0.5">{section.area} Mapped Surface</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 bg-[#24421E] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-4">
              Project Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 group relative"
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
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm font-bold text-white text-center">{highlight.text}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <SectionAmenities />

      {/* Configurations Section */}
      <SectionConfigurations />

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
                { text: "Within 10 minutes of the crucial Kadugodi Metro Station and Hope Farm Junction on the Purple Line", icon: MapPin },
                { text: "Uncompromised legal title mutation deeds verified since 1980", icon: Shield },
                { text: "RERA Approved // Certificate ID: PRM/KA/RERA/1251/Bangalore", icon: Award }
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
              Experience Legacy Township in person. Our team will guide you through the master-planned community.
            </p>
            <Link
              to="/?project=LEGACY%20TOWNSHIP#visit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Book Your Visit
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} faqType="legacy" />
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
