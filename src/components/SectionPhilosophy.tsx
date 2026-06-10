import { motion } from "motion/react";
import { Eye, Target, Sparkles } from "lucide-react";
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";
import alGreenHero from "../assets/images/al_green_hero_1780310125091.png";

export default function SectionPhilosophy() {
  const items = [
    { 
      title: "Vision", 
      desc: "Redefining quality standards in modern real estate and construction.", 
      icon: Eye 
    },
    { 
      title: "Mission", 
      desc: "To deliver world-class residential, commercial, and integrated communities through visionary design, precision execution, and an unwavering commitment to excellence.", 
      icon: Target 
    },
    { 
      title: "Philosophy", 
      desc: "Passion in every project. Excellence in every detail.", 
      icon: Sparkles 
    }
  ];

  return (
    <section className="relative w-full section-dark py-32 sm:py-48 overflow-hidden font-sans border-t border-white/10">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${forestCanopyAmbient})` }}
      />

      {/* Absolute high-tech alignment grid */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column (5 Columns): Sticky left panel subtitle with vertical banner image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl pointer-events-none" />
            
            {/* The vertical banner image card */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900">
              <img 
                src={alGreenHero} 
                alt="AL Green Premium Residences" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                loading="lazy"
              />
              {/* Gradient Overlay to ensure text legibility at the top and bottom */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
              
              {/* Top content within the image banner */}
              <div className="absolute top-8 left-8 right-8">
                <motion.h3 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-luxury-heading text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight"
                >
                  OUR <br />
                  <span className="text-gold font-luxury-heading-italic">FOUNDATION</span>
                </motion.h3>
              </div>

              {/* Overlaid stickied foundation text card at the bottom */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
                <span className="text-[10px] font-mono text-gold uppercase block font-bold tracking-widest">CHARTER AUDIT: APPROVED</span>
                <p className="text-[12px] sm:text-xs text-neutral-300 mt-2 leading-relaxed font-sans font-light">
                  Our designs reject standardized urban clutter. We protect terrain elevation, natural waterways, and soil vitality to lock in inherent asset health.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Columns): staggered cards */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  id={`foundation-group-${index}`}
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                  className="space-y-4 group p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-450 font-bold">
                    <span>[0{index + 1}]</span>
                    <div className="h-[0.5px] bg-white/10 w-8 group-hover:w-16 transition-all duration-500" />
                    <Icon className="w-4 h-4 text-gold" />
                  </div>

                  <h4
                    id={`foundation-title-${index}`}
                    className="font-display font-semibold text-white uppercase tracking-tight leading-none text-2xl sm:text-3xl group-hover:text-gold transition-colors duration-300"
                  >
                    {item.title}
                  </h4>

                  <p className="text-sm sm:text-base text-neutral-300 font-sans font-light max-w-2xl leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
