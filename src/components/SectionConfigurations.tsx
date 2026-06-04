import { motion } from "motion/react";

export default function SectionConfigurations() {
  return (
    <section className="relative w-full bg-[#24421E] py-24 sm:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase mb-6 text-white">
            Project <span className="text-gold">Configurations</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Thoughtfully designed residences catering to diverse lifestyle needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Apartment Configurations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 border border-white/20 rounded-xl p-8"
          >
            <h3 className="font-mono text-2xl font-bold text-gold mb-6">Apartment Configurations</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-medium">2 BHK</span>
                <span className="text-neutral-300">Approx. 1200 Sq. Ft.</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-medium">3 BHK</span>
                <span className="text-neutral-300">Approx. 1600 Sq. Ft.</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-mono text-lg font-bold text-white mb-4">Structure</h4>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• Basement + Ground + 14 Floors</li>
                <li>• Premium Elevation & Contemporary Architecture</li>
                <li>• Spacious Balconies & Natural Ventilation</li>
              </ul>
            </div>
          </motion.div>

          {/* Villa Configurations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/20 rounded-xl p-8"
          >
            <h3 className="font-mono text-2xl font-bold text-gold mb-6">Villa Layouts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-medium">Luxury Villas</span>
                <span className="text-neutral-300">Private Swimming Pool</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-medium">Premium Villas</span>
                <span className="text-neutral-300">Landscaped Outdoor Spaces</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white font-medium">Signature Villas</span>
                <span className="text-neutral-300">Resort-Inspired Design</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-mono text-lg font-bold text-white mb-4">Residential Mix</h4>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li>• 6 Blocks</li>
                <li>• 15 Apartments Per Block</li>
                <li>• Row Housing</li>
                <li>• Villa Plots</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
