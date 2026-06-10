import { motion } from "motion/react";
import { Sparkles, Gem, Shield, Star, CheckSquare } from "lucide-react";
import topographicOverlay from "../assets/images/topographic_overlay.png";
import luxuryVillaAmbient from "../assets/images/luxury_villa_ambient.png";

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
      className="relative w-full section-dark py-24 sm:py-36 overflow-hidden font-sans border-t border-white/10"
    >
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${topographicOverlay})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column (7 Columns): Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Editorial Sub-header */}
            <motion.div 
              id="land-philosophy-header" 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-luxury-heading text-lg sm:text-xl tracking-widest text-[#BAA360] uppercase leading-[1.1]">
                CORE VALUES
              </h2>
            </motion.div>

            {/* Editorial Headline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <h3
                id="manifesto-huge-headline"
                className="font-luxury-heading tracking-wider leading-tight uppercase text-white mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                REAL ESTATE IS MORE THAN <br />
                <span className="text-gold font-luxury-heading-italic">CONSTRUCTION</span>
              </h3>
              <p className="max-w-2xl text-neutral-300 font-sans font-light text-sm sm:text-base tracking-wide leading-relaxed">
                Enduring lifestyles and thriving communities. Our vision to redefine urban living in India through excellence in design, transparency, and sustainable development.
              </p>
            </motion.div>
          </div>

          {/* Right Column (5 Columns): Pictorial Representation */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl pointer-events-none" />
            
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
              <img 
                src={luxuryVillaAmbient} 
                alt="Accenture Premium Gated Enclave" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-xs border border-white/10 rounded-lg">
                <span className="block text-[9px] font-mono text-gold uppercase tracking-wider font-bold">PICTORIAL MODEL // PR-2364</span>
                <span className="block text-[10px] text-neutral-300 font-mono mt-0.5 leading-normal">
                  Eco-engineered residences set in dense botanical pockets.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Text Banner (Full width below the split) */}
        <div className="relative w-full overflow-hidden py-8 bg-white/5 border-y border-white/10 mt-16 sm:mt-24">
          {/* Subtle gradient overlays to fade the edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d1f0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d1f0c] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap gap-12 text-white items-center"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {/* Render items twice to ensure a seamless infinite scroll loop */}
            {[...coreValues, ...coreValues].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 text-xs sm:text-base uppercase tracking-widest font-mono text-neutral-200 select-none shrink-0"
                >
                  <Icon className="w-5 h-5 text-gold" />
                  <span>{value.title}</span>
                  <span className="text-gold/40 mx-4">•</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
