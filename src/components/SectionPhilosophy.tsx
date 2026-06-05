import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function SectionPhilosophy() {
  const principles = [
    { text: "Every Road Matters.", desc: "Our arterial grids are engineered, not just paved. Custom dual-layer asphalt with embedded rain channels designed for heavy logistics and century-long durability." },
    { text: "Every Tree Matters.", desc: "We restrict raw clearing. Over 2,500 species of native canopy trees are cataloged, conserved, or root-balled for strategic micro-forest integration." },
    { text: "Every Family Matters.", desc: "We design security, water buffers, and electrical redundancy directly into the property line. Your home represents generations of peace." },
    { text: "Every Community Matters.", desc: "Ecosystems that unite minds. Private business lounges, wellness groves, and physical spaces designed to cultivate future collaborative intelligence." }
  ];

  return (
    <section className="relative w-full section-dark py-32 sm:py-48 overflow-hidden font-sans border-t border-white/10">
      {/* Absolute high-tech alignment grid */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky left panel subtitle */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-between min-h-[150px] lg:min-h-[300px]"
          >
            <div>
              <h3 className="font-luxury-heading text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                DEVELOPMENT <br />
                <span className="text-gold font-luxury-heading-italic">PHILOSOPHY</span>
              </h3>
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-md border-l-2 border-gold max-w-xs mt-6 lg:mt-0 shadow-lg">
              <span className="text-[9px] font-mono text-neutral-450 uppercase block font-bold">CHARTER AUDIT: APPROVED</span>
              <p className="text-[11px] text-neutral-300 mt-1 leading-normal font-sans font-light">
                Our designs reject standardized urban clutter. We protect terrain elevation, natural waterways, and soil vitality to lock in inherent asset health.
              </p>
            </div>
          </motion.div>

          {/* Right panel with huge staggering sentences */}
          <div className="lg:col-span-8 space-y-16 lg:space-y-24">
            {principles.map((pr, index) => {
              return (
                <motion.div
                  id={`principle-group-${index}`}
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                  className="space-y-4 group"
                >
                  <motion.div 
                    className="flex items-center gap-3 text-xs font-mono text-neutral-450 font-bold"
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  >
                    <span>[0{index + 1}]</span>
                    <motion.div 
                      className="h-[0.5px] bg-white/10 group-hover:bg-gold transition-all duration-500"
                      initial={{ width: 32 }}
                      whileHover={{ width: 64 }}
                    />
                    <Sparkles className="w-3 h-3 text-gold/45 group-hover:text-gold transition-colors" />
                  </motion.div>

                  <motion.h4
                    id={`principle-title-${index}`}
                    className="font-display font-semibold text-white uppercase tracking-tight leading-none text-3xl sm:text-4xl md:text-5xl group-hover:text-gold transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                  >
                    {pr.text}
                  </motion.h4>

                  <motion.p 
                    className="text-sm text-neutral-300 font-sans font-light max-w-xl leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                  >
                    {pr.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
