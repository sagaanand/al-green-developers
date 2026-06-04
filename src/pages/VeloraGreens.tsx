import { motion, useScroll, useTransform } from "motion/react";
import { MapPin, Home, Check, Leaf, Building2, Shield, Trees, Users, Sparkles, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import SectionConfigurations from "../components/SectionConfigurations";

export default function VeloraGreens() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(heroScrollProgress, [0, 1], [0, 300]);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const highlights = [
    { text: "Premium Gated Community", icon: Shield },
    { text: "90 Apartments Across 6 Blocks", icon: Building2 },
    { text: "Elegant Row Housing", icon: Home },
    { text: "Premium Villa Plots", icon: Trees },
    { text: "Spacious 2 & 3 BHK Residences", icon: Building2 },
    { text: "Modern Architecture", icon: Sparkles },
    { text: "Open Green Spaces", icon: Trees },
    { text: "Lifestyle-Focused Planning", icon: Users },
    { text: "Secure & Family-Friendly", icon: Lock }
  ];

  const configurations = [
    "2 BHK",
    "3 BHK",
    "Row Housing",
    "Villa Plots"
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-mono">
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
            className="font-mono font-bold text-5xl md:text-7xl tracking-tight uppercase mb-6"
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
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-8">
              Overview
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              A premium boutique residential community offering elegant apartments, contemporary row housing, and premium villa plots within a green and lifestyle-oriented environment. Designed for modern families and discerning investors, the project combines urban comfort with open spaces, wellness amenities, and refined living experiences.
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

      {/* Highlights */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-4">
              Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-gold/30 hover:bg-white/10 transition-all group"
                >
                  <Icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-normal">{highlight.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
            <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-8">
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

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-6">
              Schedule a Site Visit
            </h2>
            <p className="text-neutral-300 mb-8 font-normal">
              Experience Velora Greens in person. Our team will guide you through this boutique community.
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
    </div>
  );
}
