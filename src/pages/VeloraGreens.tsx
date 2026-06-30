import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { MapPin, Home, Check, Leaf, Building2, Shield, Trees, Users, Sparkles, Lock, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import LuxuryConfigAccordion from "../components/LuxuryConfigAccordion";
import FloorPlanPanel from "../components/FloorPlanPanel";
import TypingHeader from "../components/TypingHeader";

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
    <div className="min-h-screen bg-luxury-legacy-light text-neutral-850 font-sans">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-white" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <TypingHeader
            className="font-display font-medium text-5xl md:text-7xl tracking-wide uppercase mb-6 text-[#163A2D]"
            segments={[{ text: "Velora Greens" }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#C6A96B] italic font-display font-light max-w-3xl mx-auto"
          >
            Thoughtfully Crafted For Elevated Living
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-neutral-500"
          >
            <MapPin className="w-4 h-4 text-[#C6A96B]" />
            <span className="text-sm font-sans font-light">Sarjapur-Varthur Tech Belt, Bangalore East</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] border-b border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">01 // PROJECT OVERVIEW</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D] mb-8">
              Overview
            </h2>
            <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed mb-8 font-normal">
              A thoughtfully envisioned community in East Bangalore offering Modern Living Residences and distinctive Velora Greens Courtyard Homes. Designed for modern families and discerning investors, the project combines urban comfort with open spaces, wellness amenities, and refined living experiences.
            </p>
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
              alt="Velora Greens Overview"
              className="w-full h-96 object-cover rounded-[20px] border border-[#163A2D]/5 shadow-sm hover:scale-[1.01] transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
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
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">Boutique <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Zoning</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">True Scale Intimacy</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Designed for peace. Only 90 elegant residences allowing an absolute maximum privacy factor and minimum population densities.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">Row <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Housing</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Bespoke Architectural Forms</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Carefully crafted multi-level block houses featuring private open skylights and intimate wooden sundecks.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">Exclusive <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Plots</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Raw Premium Soil Blocks</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Gravel-bedded, direct high-pressure water grid plots with a historic +21% annual local growth projection.</p>
              </div>
              <div className="p-6 bg-white border border-[#163A2D]/10 rounded-[20px] space-y-3 shadow-xs">
                <span className="text-3xl font-numbers font-bold text-[#163A2D] block">Green <span className="text-xs text-[#C6A96B] font-mono uppercase font-bold">Living</span></span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">Carbon Sequestration Layout</span>
                <p className="text-xs text-neutral-500 font-sans font-light leading-relaxed">Featuring a gorgeous common botanical garden containing 800+ indigenous trees to naturally lower local temperatures by 3°C.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-[70px] bg-[#163A2D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">03 // MASTERPLAN ENCLAVE HIGHLIGHTS</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-white leading-tight">
              Project <span className="text-[#C6A96B] italic font-display font-light">Highlights</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[20px] overflow-hidden hover:border-[#C6A96B] transition-all duration-300 group relative shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.text}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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



      {/* Floor Plans Section */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] relative border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">04 // TECHNICAL BLUEPRINTS</span>
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
                className="bg-white border border-[#163A2D]/10 rounded-[20px] overflow-hidden hover:border-[#C6A96B] transition-all group cursor-pointer shadow-xs"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="py-20 lg:py-[70px] bg-white border-b border-neutral-100 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">05 // REGULATORY CLEARANCES</span>
            <h2 className="font-display font-medium text-3xl md:text-5xl uppercase text-[#163A2D] mb-8 leading-tight">
              Growth <span className="text-[#C6A96B] italic font-display font-light">Drivers</span>
            </h2>
            <div className="space-y-6">
              {[
                { text: "Immediate frontage on Bangalore Peripheral Ring Road expansion zone.", icon: MapPin },
                { text: "Energy-recovery mechanical ventilation reducing utility costs by 45%.", icon: Leaf },
                { text: "Exceptional spatial density — premium community living without crowding.", icon: Users }
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
              06 // EPICUREAN LAND ECOSYSTEMS
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
            Experience Velora Greens in person. Our private concierge team will guide you through clear titles, terrain elevations, and botanical parks.
          </p>
          <div className="pt-4">
            <Link
              to="/?project=VELORA%20GREENS#visit"
              className="btn-luxury-gold text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#C6A96B]/15 hover:shadow-lg transition-all focus-premium mx-auto w-fit"
            >
              <span>Book Your Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
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
