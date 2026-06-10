import { motion } from "motion/react";
import { Phone, ArrowRight } from "lucide-react";
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";

export default function SectionCallbackCTA() {
  return (
    <section className="relative w-full section-dark py-24 sm:py-36 border-t border-white/10">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${forestCanopyAmbient})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: CTA Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left space-y-8"
          >
            <h2 className="font-luxury-heading text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-tight">
              Discover the Future of <span className="text-gold font-luxury-heading-italic">Luxury Living</span>
            </h2>
            
            <p className="text-neutral-300 font-sans font-light text-base sm:text-lg max-w-2xl leading-relaxed">
              Be a part of a landmark township designed to redefine modern living with elegance, comfort, and world-class experiences.
            </p>
            
            <div className="border-l-2 border-gold pl-6 py-2">
              <span className="font-luxury-heading text-xl sm:text-2xl text-gold block">
                Legacy Township by Accenture Infra
              </span>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-mono tracking-widest uppercase">
                Luxury Beyond Expectations
              </p>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm md:text-base font-mono tracking-widest uppercase shadow-lg shadow-gold/20 hover:shadow-gold/30 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                <span>Schedule a Callback</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Pictorial Image Representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl pointer-events-none" />
            
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
              <img 
                src={forestCanopyAmbient} 
                alt="Estate Living Canopy Rendering" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-xs border border-white/10 rounded-lg">
                <span className="block text-[9px] font-mono text-gold uppercase tracking-wider font-bold">AMBIENT DESIGN // FC-9921</span>
                <span className="block text-[10px] text-neutral-300 font-mono mt-0.5 leading-normal">
                  Sustainably integrated canopy systems offering continuous shade and clean air circulation.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
