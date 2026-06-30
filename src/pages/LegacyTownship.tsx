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
import TypingHeader from "../components/TypingHeader";

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
    <div className="min-h-screen bg-luxury-township-light text-neutral-850 font-sans">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-[#C6A96B] z-[60]"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#163A2D]/10 rounded-full mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#C6A96B]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C6A96B]">Flagship Development</span>
          </motion.div>
          <TypingHeader
            className="font-display font-medium text-5xl md:text-7xl tracking-wide uppercase mb-6 text-[#163A2D]"
            segments={[{ text: "Legacy Township" }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-display font-light italic max-w-3xl mx-auto mb-8 text-[#C6A96B]"
          >
            A Landmark of Luxury Living
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-neutral-500"
          >
            <MapPin className="w-4 h-4 text-[#C6A96B]" />
            <span className="text-sm font-sans font-light">Whitefield-Hoskote Corridor, Bangalore East</span>
          </motion.div>
        </div>
      </section>

      {/* Project Overview - Visual Statistics */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] border-b border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">01 // PROJECT SCALE</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase tracking-wide text-[#163A2D] leading-tight">
              By The <span className="text-[#C6A96B] italic font-display font-light">Numbers</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4 mb-4" />
            <p className="text-sm text-neutral-500 font-sans font-light leading-relaxed max-w-2xl mx-auto">
              A self-sustaining city designed for multi-generational value preservation.
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
                <div
                  key={index}
                  className="card-luxury p-8 rounded-[20px] bg-white border border-[#163A2D]/5 hover:border-[#C6A96B] shadow-sm hover:shadow-md transition-all text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-[#C6A96B]" strokeWidth={1.5} />
                  <div className="text-3xl md:text-4xl font-numbers font-bold mb-2 text-[#163A2D]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mutual Value Hypothesis Section */}
      <section className="py-20 lg:py-[70px] bg-white border-t border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
                02 // THE MUTUAL VALUE HYPOTHESIS
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase text-[#163A2D] leading-tight">
                WHY SECURE AN ASSET WITH <span className="text-[#C6A96B] italic font-display font-light">ACCENTURE INFRA?</span>
              </h2>
              <div className="h-[2px] w-12 bg-[#C6A96B]" />
              <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
                A real estate investment of ₹50 Lakhs to ₹2 Crore is not a purchase of brick and mortar; it is the physical allocation of your family's financial future. Speculative builders inflate prices with fake amenities. Accenture Infra establishes capital preservation nodes built strictly upon audited spatial demand, clear legal mutation history, and climate-adaptive physical master-planning.
              </p>
              <div className="p-4 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#C6A96B] mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs font-sans font-bold text-[#163A2D] uppercase">100% Legal Mutation Immunity</span>
                  <span className="block text-[11px] text-neutral-500 font-sans font-light mt-1">
                    Every sq ft is backed by a 40-year parent deed trace and DTCP single-window RERA registry layout clearance order pre-secured.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">45 <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Acres</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Total Plotted City Spatial</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">An expansive, low-density zoning community ensuring maximum privacy buffers and continuous airflow across every villa boundary.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">2,000 <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Units</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Premium Apartments</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Elegantly spaced multi-aspect homes situated in high-elevation structural blocks utilizing energy recovery grids.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">1 Lakh <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Sq Ft</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Grand Lifestyle Clubhouse</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Multi-layered clay-structure hub containing sports systems, virtual workspace lounges, and deep-care wellness zones.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">80+ <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Experientials</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Lifestyle Amenities Active</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">From microclimate botanical pathways to automated high-voltage electric grid terminals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">03 // IMMERSIVE GALLERY</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D]">
              Project <span className="text-[#C6A96B] italic font-display font-light">Gallery</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-3 mb-4" />
            <p className="text-sm text-neutral-500 font-sans font-light">
              Visual tour of the development layouts and botanical reserves.
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
              <div
                key={idx}
                className="aspect-video rounded-[20px] overflow-hidden border border-[#163A2D]/5 group shadow-sm"
              >
                <motion.img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Overview Section */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">04 // LAYOUT OVERVIEW</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D]">
              Spatial <span className="text-[#C6A96B] italic font-display font-light">Typologies</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-3 mb-4" />
            <p className="text-sm text-neutral-500 font-sans font-light">
              Thoughtfully designed spaces for modern estate living.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {configurations.map((config, idx) => (
              <div
                key={idx}
                className="card-luxury p-8 rounded-[20px] bg-white border border-[#163A2D]/5 shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-[#163A2D] mb-4">
                  {config.type}
                </h3>
                <div className="space-y-2 mb-6">
                  {config.options.map((option, i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-600 font-sans font-light text-sm">
                      <span className="text-[#C6A96B] font-bold">•</span>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    document.getElementById("config-explorer")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 text-[#163A2D] rounded-xl hover:bg-[#C6A96B] hover:text-white transition-colors text-xs font-mono font-bold tracking-wider uppercase cursor-pointer"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] relative border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">05 // TECHNICAL BLUEPRINTS</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D]">
              Floor <span className="text-[#C6A96B] italic font-display font-light">Plans</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-3 mb-4" />
            <p className="text-sm text-neutral-500 font-sans font-light">
              Explore detailed floor plans with download options.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {floorPlans.map((plan, index) => (
              <div
                key={plan.id}
                className="bg-white border border-[#163A2D]/10 rounded-[20px] overflow-hidden hover:border-[#C6A96B] transition-all group cursor-pointer shadow-sm"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spatial Configuration Explorer from Drawer */}
      <section id="config-explorer" className="py-20 lg:py-[70px] bg-[#F8FAF8] border-t border-neutral-150 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-4 relative overflow-hidden text-left">
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-12">
                <span className="text-[10px] font-mono text-[#C6A96B] tracking-[0.25em] uppercase font-bold block mb-2">
                  ACTIVE LEDGER METRICS
                </span>
                <h3 className="font-display font-semibold text-xl sm:text-3xl uppercase text-[#163A2D] leading-tight">
                  SPATIAL CONFIGURATION EXPLORER
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-sans font-light">
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
                          className={`w-full py-4 px-6 text-left border rounded-xl transition-all duration-300 flex justify-between items-center cursor-pointer ${
                            isSelected 
                              ? "bg-[#163A2D] text-white border-[#163A2D] font-bold shadow-sm" 
                              : "bg-white text-neutral-800 border-[#163A2D]/10 hover:border-[#C6A96B] hover:text-[#163A2D]"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-display font-semibold block uppercase">{item.type}</span>
                            <span className={`text-[10px] font-mono block mt-0.5 ${isSelected ? "text-[#C6A96B]" : "text-neutral-400"}`}>{item.space}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[9px] font-mono transition-transform duration-300 block lg:hidden ${isSelected ? "rotate-90 text-[#C6A96B]" : "text-neutral-400"}`}>
                              {isSelected ? "▲" : "▼"}
                            </span>
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 hidden lg:block ${isSelected ? "translate-x-1 text-[#C6A96B]" : "opacity-30"}`} />
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
                              <div className="p-5 bg-white border border-[#163A2D]/10 rounded-xl space-y-4 shadow-sm">
                                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-neutral-100 pb-3">
                                  <h4 className="text-base font-display font-semibold text-[#163A2D]">{item.type}</h4>
                                  <div className="text-right">
                                    <span className="block text-[8px] font-mono text-neutral-450 uppercase">ACQUISITION CAPEX</span>
                                    <span className="text-sm font-numbers font-bold text-[#C6A96B]">{item.invest}</span>
                                  </div>
                                </div>

                                <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                                  {item.desc}
                                </p>

                                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                                  <div>
                                    <span className="block text-[8px] font-mono text-neutral-450 uppercase tracking-widest">ZONED SPACE CAPACITY</span>
                                    <span className="text-[11px] font-mono text-[#163A2D] block mt-0.5">{item.space}</span>
                                  </div>
                                  <div>
                                    <span className="block text-[8px] font-mono text-neutral-450 uppercase tracking-widest">ASSET CAGR PROJECTION</span>
                                    <span className="text-[11px] text-[#163A2D] block mt-0.5 flex items-center gap-1 font-mono font-semibold">
                                      <TrendingUp className="w-3.5 h-3.5 text-[#C6A96B]" />
                                      {item.yield}
                                    </span>
                                  </div>
                                </div>

                                <div className="p-3 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-lg space-y-1">
                                  <span className="text-[8px] font-mono text-[#C6A96B] uppercase tracking-widest block font-bold">ACCENTURE INFRA COVENANTS:</span>
                                  <ul className="text-[10px] text-neutral-500 font-sans font-light space-y-1">
                                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#C6A96B] shrink-0" /> Pre-tested soil bearing parameters</li>
                                    <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#C6A96B] shrink-0" /> Clear title mutation certificates included</li>
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
                <div className="hidden lg:block lg:col-span-8 bg-white border border-[#163A2D]/10 p-8 sm:p-10 rounded-[20px] space-y-8 shadow-sm">
                  {(() => {
                    const currentConfig = LEGACY_CONFIGS[activeConfigIndex] || LEGACY_CONFIGS[0];
                    return (
                      <div className="space-y-6 text-left">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest block">SECURE SYSTEM PARADIGM // CONFIG_EXPLORER</span>
                        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-100 pb-5">
                          <h4 className="text-2xl sm:text-3xl font-display font-semibold text-[#163A2D]">{currentConfig.type}</h4>
                          <div className="text-right">
                            <span className="block text-[9px] font-mono text-neutral-450 uppercase">ACQUISITION CAPEX</span>
                            <span className="text-xl font-numbers font-bold text-[#C6A96B]">{currentConfig.invest}</span>
                          </div>
                        </div>

                        <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
                          {currentConfig.desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                          <div>
                            <span className="block text-[8px] font-mono text-neutral-400 uppercase tracking-widest">ZONED SPACE CAPACITY</span>
                            <span className="text-base font-mono text-[#163A2D] block mt-1">{currentConfig.space} Mapped Surface</span>
                          </div>
                          <div>
                            <span className="block text-[8px] font-mono text-neutral-400 uppercase tracking-widest">ASSET GROWTH PROJECTION</span>
                            <span className="text-base font-mono text-[#163A2D] block mt-1 flex items-center gap-1 font-semibold">
                              <TrendingUp className="w-4 h-4 text-[#C6A96B]" />
                              {currentConfig.yield}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-xl space-y-2 mt-6">
                          <span className="text-[8px] font-mono text-[#C6A96B] uppercase tracking-widest block font-bold">GUARANTEED STRUCTURAL INTEGRITY COVENANTS</span>
                          <ul className="text-xs text-neutral-500 font-sans font-light space-y-1">
                            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#C6A96B]" /> Pre-tested soil bearing parameters</li>
                            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#C6A96B]" /> Individual water pressure index and telemetry pre-secured</li>
                            <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-[#C6A96B]" /> Clear title MUTATION CERTIFICATE included</li>
                          </ul>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Masterplan Explorer */}
          <div className="mt-24 border-t border-neutral-150 pt-16 text-left">
            <div className="max-w-3xl mb-12">
              <span className="text-[10px] font-mono text-[#C6A96B] tracking-[0.25em] uppercase font-bold block mb-2">
                06 // SPATIAL ENGINEERING
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase text-[#163A2D] leading-tight">
                INTERACTIVE MASTERPLAN <span className="text-[#C6A96B] italic font-display font-light">EXPLORER</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-neutral-550 font-sans font-light leading-relaxed">
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

            <div className="hidden lg:grid grid-cols-12 gap-8 items-center bg-white border border-[#163A2D]/10 rounded-[20px] p-6 sm:p-10 relative w-full shadow-sm">
              <div className="col-span-7 space-y-6">
                {/* Virtual Isometric Grid Mockup for Masterplan */}
                <div className="aspect-[16/10] bg-[#F8FAF8] rounded-xl p-6 border border-[#163A2D]/5 relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-neutral-400">SCHEMATIC_MAP_INTEGRATION_ENG_V1.9</div>
                  
                  {/* Visual Representation of Masterplan Districts */}
                  <div className="grid grid-cols-2 gap-4 w-full h-[80%] my-auto z-10">
                    {LEGACY_SECTORS.map((sec) => {
                      const isSelected = activeSectorId === sec.id;
                      return (
                        <button
                          id={`sector-grid-btn-${sec.id}`}
                          key={sec.id}
                          onClick={() => setActiveSectorId(sec.id)}
                          className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                            isSelected
                              ? "bg-[#163A2D]/10 border-[#163A2D] shadow-inner text-[#163A2D] font-bold"
                              : "bg-white border-[#163A2D]/10 hover:border-[#C6A96B]"
                          }`}
                        >
                          <div className="absolute top-0 right-0 w-8 h-8 bg-[#C6A96B]/15 rounded-bl-full flex items-center justify-center font-mono text-[8px] text-[#C6A96B] font-bold transition-all group-hover:scale-105">
                             {sec.area.split(" ")[0]}
                          </div>
                          <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSelected ? "text-[#163A2D] font-bold" : "text-neutral-500"}`}>
                            {sec.name.split(" ")[0]}
                          </span>
                          <span className="text-[9px] text-neutral-400 font-mono block mt-3">
                            {sec.status}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-neutral-450">
                    <span>SCALE: NOT ACCURATE // PHYSICAL SPATIAL DATA BOUND</span>
                    <span className="text-[#C6A96B] uppercase flex items-center gap-1 font-bold">🟢 LIVE BLUEPRINT METRICS ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Sector details displaying on click */}
              <div className="col-span-5 space-y-6">
                {(() => {
                  const section = LEGACY_SECTORS.find((s) => s.id === activeSectorId) || LEGACY_SECTORS[0];
                  return (
                    <div className="space-y-4">
                      <span className="text-[#C6A96B] font-mono text-xs uppercase tracking-wider block font-bold">MUTATION STATUS // {section.status.toUpperCase()}</span>
                      <h4 className="text-xl sm:text-2xl font-display font-semibold text-[#163A2D]">{section.name}</h4>
                      <div className="h-[2px] w-12 bg-[#C6A96B]" />
                      <p className="text-xs text-neutral-600 font-sans font-light leading-relaxed">
                        {section.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-neutral-100">
                        <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block font-bold">PRIMARY ATTRIBUTED LAYER SPECS</span>
                        <ul className="grid grid-cols-1 gap-2">
                          {section.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-neutral-650 font-sans font-light flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#C6A96B] shrink-0" strokeWidth={1.5} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <span className="text-[9px] font-mono text-neutral-450 uppercase font-semibold">TOTAL ESTIMATED SURFACE AREA</span>
                        <span className="text-base text-[#163A2D] font-mono font-bold block mt-0.5">{section.area} Mapped Surface</span>
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
      <section className="py-20 lg:py-[70px] bg-[#163A2D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">07 // MASTERPLAN FEATURES</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-white leading-tight">
              Project <span className="text-[#C6A96B] italic font-display font-light">Highlights</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[20px] overflow-hidden hover:border-[#C6A96B] transition-all duration-300 group relative shadow-sm"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4">
                  <p className="text-xs font-mono font-bold text-white uppercase tracking-wider text-center w-full">{highlight.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <SectionAmenities />

      {/* Configurations Section */}
      <SectionConfigurations />

      {/* Growth Drivers */}
      <section className="py-20 lg:py-[70px] bg-white border-b border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">08 // REGULATORY CLEARANCES</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D] mb-8 leading-tight">
              Growth <span className="text-[#C6A96B] italic font-display font-light">Drivers</span>
            </h2>
            <div className="space-y-6">
              {[
                { text: "Within 10 minutes of the Kadugodi Metro Station and Hope Farm Junction on the Purple Line.", icon: MapPin },
                { text: "Uncompromised legal title mutation deeds verified since 1980.", icon: Shield },
                { text: "RERA Approved // Certificate ID: PRM/KA/RERA/1251/Bangalore.", icon: Award }
              ].map((driver, index) => {
                const Icon = driver.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4"
                  >
                    <Icon className="w-5 h-5 text-[#C6A96B] mt-1 shrink-0" strokeWidth={1.5} />
                    <p className="text-neutral-600 font-sans font-light text-sm">{driver.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Epicurean Land Ecosystems Section */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] border-b border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-[10px] font-mono text-[#C6A96B] tracking-[0.25em] uppercase font-bold block mb-2">
              09 // EPICUREAN LAND ECOSYSTEMS
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-5xl uppercase text-[#163A2D] leading-tight">
              THE ART OF <span className="text-[#C6A96B] italic font-display font-light">ECO-LIVING</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4 mb-4" />
            <p className="text-xs sm:text-sm text-neutral-500 font-sans font-light max-w-xl mx-auto leading-relaxed">
              Not a concrete jungle. Multi-acre forest pockets, deep bioswales, organic farms, and quiet microclimate lanes planned to enhance human focus and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 hover:cursor-pointer text-left">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden border border-[#163A2D]/5 relative group bg-black shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" 
                  alt="Native Tree Garden" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono tracking-wider text-neutral-300">SEC_MUT_NURSERY</div>
              </div>
              <h4 className="text-[#163A2D] font-display text-lg font-semibold uppercase tracking-wider">Native Forest Commons</h4>
              <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                Every Accenture Infra property features a state-of-the-art native botany nursery. Up to 2,500 mature, indigenous trees and shrubs are nurtured on-site to build high-end microclimate layers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden border border-[#163A2D]/5 relative group bg-black shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
                  alt="Double height lobby lounge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono tracking-wider text-neutral-300">SEC_CLUB_LOUNGE</div>
              </div>
              <h4 className="text-[#163A2D] font-display text-lg font-semibold uppercase tracking-wider">The Grand Vault Lounges</h4>
              <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                Quiet double-height wooden study libraries, meeting chambers, and organic juice bars crafted for remote tech executives, business operators, and multigenerational adopters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden border border-[#163A2D]/5 relative group bg-black shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=600&auto=format&fit=crop" 
                  alt="Premium Wellness Spa Bath" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-[10px] font-mono tracking-wider text-neutral-300">SEC_WELLNESS_POD</div>
              </div>
              <h4 className="text-[#163A2D] font-display text-lg font-semibold uppercase tracking-wider">Therapeutic Water Pools</h4>
              <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">
                State of the art mineral pools, biological water filtration lines, and sauna rooms designed strictly to aid physical restoration and premium wellness focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-[70px] bg-[#163A2D] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
            PRIVATE BRIEFING SCHEDULE
          </span>
          <h2 className="font-display font-medium text-3xl md:text-4xl uppercase text-white leading-tight">
            Schedule a <span className="text-[#C6A96B] italic font-display font-light">Site Visit</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Experience Legacy Township in person. Our private concierge team will guide you through clear titles, terrain elevations, and botanical parks.
          </p>
          <div className="pt-4">
            <Link
              to="/?project=LEGACY%20TOWNSHIP#visit"
              className="btn-luxury-gold text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#C6A96B]/15 hover:shadow-lg transition-all focus-premium mx-auto w-fit"
            >
              <span>Book Your Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
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
