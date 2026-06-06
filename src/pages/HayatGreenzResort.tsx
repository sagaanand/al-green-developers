import { motion } from "motion/react";
import { MapPin, Leaf, Droplet, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function HayatGreenzResort() {
  const features = [
    "Hospitality",
    "Wellness",
    "Nature-Centric Living",
    "Premium Leisure Spaces"
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-sans">
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
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop"
            alt="Hayat Greenz Resort"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1f0c]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-semibold text-5xl md:text-7xl tracking-wide uppercase mb-6"
          >
            Hayat Greenz Resort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Hospitality & Wellness — Nature Inspired Ecological Retreat
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-neutral-400"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Scenic Hoskote Forest Fringe, Bangalore East</span>
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
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Overview
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              An immersive wellness retreat built strictly within a permanent forest buffer zone. Combining nature-integrated premium eco-cabins, dynamic thermal mineral spas, organic estate dining, and high-level retreat amenities designed to safeguard local ecology while generating stable hospitality yields.
            </p>
            <img
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop"
              alt="Hayat Greenz Resort Overview"
              className="w-full h-96 object-cover rounded-xl border border-white/20"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-4">
              Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl"
              >
                <Droplet className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-sans text-xl font-semibold uppercase">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterplan */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Masterplan
            </h2>
            <div className="space-y-4">
              {[
                "Eco-sensitive low-impact luxury wooden cabins & forest suites",
                "Bio-retention organic pools & thermal outdoor mineral spas",
                "15 acres of permanent high-elevation protected botanical sanctuary",
                "Premium wellness lounges, meditation pavilions & raw pathways"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <TreePine className="w-6 h-6 text-gold mt-1 shrink-0" />
                  <p className="text-neutral-300 font-normal">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Growth Drivers
            </h2>
            <div className="space-y-6">
              {[
                "High-yielding secure fractional ownership program adjacent to protected reserves",
                "Uncompromised environmental NOC layouts pre-obtained from forest authorities",
                "+14.2% verified annual baseline passive returns"
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
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase mb-6">
              Experience the Retreat
            </h2>
            <p className="text-neutral-300 mb-8 font-normal">
              Schedule a visit to experience wellness in nature.
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
