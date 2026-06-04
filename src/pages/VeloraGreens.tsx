import { motion } from "motion/react";
import { MapPin, Home, Check, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import SectionConfigurations from "../components/SectionConfigurations";

export default function VeloraGreens() {
  const highlights = [
    "Premium Gated Community",
    "90 Apartments Across 6 Blocks",
    "Elegant Row Housing",
    "Premium Villa Plots",
    "Spacious 2 & 3 BHK Residences",
    "Modern Architecture",
    "Open Green Spaces",
    "Lifestyle-Focused Planning",
    "Secure & Family-Friendly"
  ];

  const configurations = [
    "2 BHK",
    "3 BHK",
    "Row Housing",
    "Villa Plots"
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-mono">
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
            alt="Velora Greens"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1f0c]" />
        </div>
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
              className="w-full h-96 object-cover rounded-xl border border-white/20"
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
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
              >
                <Home className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-sm font-normal">{highlight}</p>
              </motion.div>
            ))}
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
                "Immediate frontage on Bangalore Peripheral Ring Road expansion zone",
                "Energy-recovery mechanical ventilation reducing utility costs by 45%",
                "Exceptional spatial density — premium community living without crowding"
              ].map((driver, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-gold mt-1 shrink-0" />
                  <p className="text-neutral-300 font-normal">{driver}</p>
                </div>
              ))}
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
