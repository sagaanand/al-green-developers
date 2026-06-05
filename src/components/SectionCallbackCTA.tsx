import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";

export default function SectionCallbackCTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#0d1f0c] to-[#24421E] py-24 sm:py-36 border-t border-white/10 overflow-hidden ambient-bg-overlay">
      {/* Background merged luxury villa outline */}
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
        alt="Luxury villa ambient"
        className="ambient-bg-image"
        loading="lazy"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 text-white leading-tight">
            Discover the Future of <span className="text-gold italic">Luxury Living</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Be a part of a landmark township designed to redefine modern living with elegance, comfort, and world-class experiences.
          </p>
          
          <div className="mb-8">
            <span className="font-display text-2xl md:text-3xl font-bold text-gold">
              Legacy Township by Accenture Infra
            </span>
            <p className="text-neutral-400 text-sm md:text-base mt-2 font-mono tracking-widest uppercase">
              Luxury Beyond Expectations
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm md:text-base font-mono tracking-widest uppercase shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Schedule a Callback</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
