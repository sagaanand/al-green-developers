import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Home, Award, Shield, Check, Building2, TreePine, Users, Zap, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import SectionAmenities from "../components/SectionAmenities";
import SectionConfigurations from "../components/SectionConfigurations";
import FloorPlanPanel from "../components/FloorPlanPanel";

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
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
      <section className="section-spacing-md section-dark">
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
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-sans text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-spacing-md section-dark">
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
      <section className="py-24 bg-[#0d1f0c]">
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
      <section className="py-24 bg-[#0d1f0c]">
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
                <div className="p-4">
                  <h3 className="font-sans text-lg font-semibold text-white mb-1">{plan.title}</h3>
                  <p className="text-sm text-neutral-400 mb-2">{plan.subtitle}</p>
                  <p className="text-gold font-mono text-sm">{plan.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 bg-[#24421E]">
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
      <section className="py-24 bg-[#24421E]">
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

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1f0c]">
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
              to="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Book Your Visit
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} />
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
