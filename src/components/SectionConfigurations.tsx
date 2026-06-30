import { motion } from "motion/react";
import { Building2, Home, TreePine, Layers } from "lucide-react";

export default function SectionConfigurations() {
  return (
    <section className="relative w-full bg-[#F8FAF8] py-20 lg:py-[70px] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block mb-2">04 // CONFIGURATION TYPOLOGIES</span>
          <h2 className="font-display text-4xl md:text-5xl font-medium uppercase mb-4 text-[#163A2D]">
            Project <span className="text-[#C6A96B] italic font-display font-light">Configurations</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4 mb-4" />
          <p className="text-neutral-500 text-sm max-w-3xl mx-auto leading-relaxed font-sans font-light">
            Thoughtfully designed residences catering to diverse lifestyle and investment metrics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Apartment Configurations */}
          <div
            className="card-luxury bg-white border border-[#163A2D]/10 rounded-[20px] p-8 shadow-xs hover:shadow-sm transition-all"
          >
            <h3 className="font-display text-2xl font-semibold text-[#163A2D] mb-6">Apartment Configurations</h3>
            <div className="space-y-4">
              <div
                className="flex justify-between items-center border-b border-neutral-100 pb-4 p-4 rounded-xl hover:bg-[#F8FAF8] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Building2 className="w-5 h-5 text-[#C6A96B]" strokeWidth={1.5} />
                  <span className="text-[#163A2D] font-sans font-medium">2 BHK Residences</span>
                </div>
                <span className="relative z-10 text-neutral-500 font-sans font-light text-sm">Approx. 1200 Sq. Ft.</span>
              </div>
              <div
                className="flex justify-between items-center border-b border-neutral-100 pb-4 p-4 rounded-xl hover:bg-[#F8FAF8] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Building2 className="w-5 h-5 text-[#C6A96B]" strokeWidth={1.5} />
                  <span className="text-[#163A2D] font-sans font-medium">3 BHK Residences</span>
                </div>
                <span className="relative z-10 text-neutral-500 font-sans font-light text-sm">Approx. 1600 Sq. Ft.</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-100 text-left">
              <h4 className="font-display text-base font-semibold mb-4 text-[#163A2D]">Structure</h4>
              <ul className="space-y-2 text-sm text-neutral-500 font-sans font-light">
                <li>• Basement + Ground + 14 Floors</li>
                <li>• Premium Elevation & Contemporary Architecture</li>
                <li>• Spacious Balconies & Natural Ventilation</li>
              </ul>
            </div>
          </div>

          {/* Villa Configurations */}
          <div
            className="card-luxury bg-white border border-[#163A2D]/10 rounded-[20px] p-8 shadow-xs hover:shadow-sm transition-all"
          >
            <h3 className="font-display text-2xl font-semibold text-[#163A2D] mb-6">Villa Layouts</h3>
            <div className="space-y-4">
              <div
                className="flex justify-between items-center border-b border-neutral-100 pb-4 p-4 rounded-xl hover:bg-[#F8FAF8] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Home className="w-5 h-5 text-[#C6A96B]" strokeWidth={1.5} />
                  <span className="text-[#163A2D] font-sans font-medium">Luxury Villas</span>
                </div>
                <span className="relative z-10 text-neutral-500 font-sans font-light text-sm">Private Swimming Pool</span>
              </div>
              <div
                className="flex justify-between items-center border-b border-neutral-100 pb-4 p-4 rounded-xl hover:bg-[#F8FAF8] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <TreePine className="w-5 h-5 text-[#C6A96B]" strokeWidth={1.5} />
                  <span className="text-[#163A2D] font-sans font-medium">Premium Villas</span>
                </div>
                <span className="relative z-10 text-neutral-500 font-sans font-light text-sm">Landscaped Outdoor Spaces</span>
              </div>
              <div
                className="flex justify-between items-center border-b border-neutral-100 pb-4 p-4 rounded-xl hover:bg-[#F8FAF8] transition-all duration-300 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center gap-3 relative z-10">
                  <Layers className="w-5 h-5 text-[#C6A96B]" strokeWidth={1.5} />
                  <span className="text-[#163A2D] font-sans font-medium">Signature Villas</span>
                </div>
                <span className="relative z-10 text-neutral-500 font-sans font-light text-sm">Resort-Inspired Design</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 text-left">
              <h4 className="font-display text-base font-semibold mb-4 text-[#163A2D]">Residential Mix</h4>
              <ul className="space-y-2 text-sm text-neutral-500 font-sans font-light">
                <li>• 6 Blocks</li>
                <li>• 15 Apartments Per Block</li>
                <li>• Row Housing</li>
                <li>• Villa Plots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
