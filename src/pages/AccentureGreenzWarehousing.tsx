import { motion } from "motion/react";
import { MapPin, Warehouse, Truck, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function AccentureGreenzWarehousing() {
  const features = [
    "Industrial Infrastructure",
    "Logistics Support",
    "Commercial Expansion",
    "Strategic Connectivity"
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
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            alt="Accenture Greenz Warehousing"
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
            Accenture Greenz Warehousing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Commercial Division — Future-Ready Industrial & Logistics Infrastructure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-neutral-400"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Budigere-Hoskote Logistics Cluster, Bangalore East</span>
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
              Accenture Infra's heavy-duty industrial and logistics warehousing sector, connecting crucial logistics expressways. Engineered to international freight standards, it features super-cast high load-bearing floors, high-capacity solar grid sub-stations, and state-of-the-art climate-controlled cold storage bays.
            </p>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
              alt="Accenture Greenz Warehousing Overview"
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
                <Warehouse className="w-10 h-10 text-gold mb-4" />
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
                "Reinforced heavy-freight grade internal transport roads",
                "Plug-and-play high-voltage commercial solar substations",
                "Custom temperature-controlled cold logistics hubs & dry storage",
                "Pre-leased multinational corporate modules available for immediate acquisition"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-gold mt-1 shrink-0" />
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
                "Direct frontage borders on major cross-state cargo transit pathways (BCIC)",
                "Pre-negotiated lease options providing secure corporate cashflows",
                "Zoned high-density logistics warehousing layout clearance"
              ].map((driver, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-gold mt-1 shrink-0" />
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
              Explore Commercial Opportunities
            </h2>
            <p className="text-neutral-300 mb-8 font-normal">
              Connect with our team to discuss logistics and warehousing solutions.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
