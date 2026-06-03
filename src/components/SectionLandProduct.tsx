import { motion } from "motion/react";
import { Sparkles, Trophy, Gem, Shield, Star, CheckSquare } from "lucide-react";

export default function SectionLandProduct() {
  const coreValues = [
    {
      title: "Excellence in Design & Engineering",
      icon: Gem
    },
    {
      title: "Transparent Business Practices",
      icon: Shield
    },
    {
      title: "Customer-Centric Approach",
      icon: Sparkles
    },
    {
      title: "Sustainable Development",
      icon: Star
    },
    {
      title: "Timely Delivery & Quality Assurance",
      icon: CheckSquare
    }
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full gradient-bg-alt text-[#FAFBF9] py-24 sm:py-36 overflow-hidden font-mono border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Sub-header */}
        <motion.div 
          id="land-philosophy-header" 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-left border-l-2 border-gold pl-6 mb-16 sm:mb-24"
        >
          <h2 className="font-mono font-bold text-2xl sm:text-4xl tracking-tight text-white/90 uppercase leading-[1.1]">
            CORE VALUES
          </h2>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-20 sm:mb-28"
        >
          <h3
            id="manifesto-huge-headline"
            className="font-mono font-bold tracking-tight leading-[0.95] text-left uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 6.5rem)" }}
          >
            REAL ESTATE IS MORE THAN <br />
            <span className="text-neutral-400 font-normal">CONSTRUCTION</span>
          </h3>
          <p className="mt-8 max-w-3xl text-neutral-300 font-mono font-normal text-sm sm:text-base tracking-wide leading-relaxed">
            Enduring lifestyles and thriving communities. Our vision to redefine urban living in India through excellence in design, transparency, and sustainable development.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div id="manifesto-contrast-grid" className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 border border-white/20 p-6 rounded-xl hover:border-gold/40 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <Icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="text-lg font-mono font-bold text-white mb-2">
                  {value.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
