import { motion } from "motion/react";
import { Building2, Home, TreePine, Layers } from "lucide-react";

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
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase mb-6 text-white">
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
            className="bg-white border border-gray-100 rounded-xl p-8 hover:border-gray-200 transition-all"
          >
            <h3 className="font-sans text-2xl font-semibold text-gold mb-6">Apartment Configurations</h3>
            <div className="space-y-4">
              <motion.div
                className="flex justify-between items-center border-b border-gray-100 pb-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-white font-medium">2 BHK</span>
                </div>
                <span className="relative z-10" style={{ color: '#6B7280' }}>Approx. 1200 Sq. Ft.</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="flex justify-between items-center border-b border-gray-100 pb-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Building2 className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-white font-medium">3 BHK</span>
                </div>
                <span className="relative z-10" style={{ color: '#6B7280' }}>Approx. 1600 Sq. Ft.</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-sans text-lg font-semibold mb-4" style={{ color: '#111827' }}>Structure</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
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
            className="bg-white border border-gray-100 rounded-xl p-8 hover:border-gray-200 transition-all"
          >
            <h3 className="font-sans text-2xl font-semibold text-gold mb-6">Villa Layouts</h3>
            <div className="space-y-4">
              <motion.div
                className="flex justify-between items-center border-b border-gray-100 pb-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Home className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-white font-medium">Luxury Villas</span>
                </div>
                <span className="relative z-10" style={{ color: '#6B7280' }}>Private Swimming Pool</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="flex justify-between items-center border-b border-gray-100 pb-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TreePine className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-white font-medium">Premium Villas</span>
                </div>
                <span className="relative z-10" style={{ color: '#6B7280' }}>Landscaped Outdoor Spaces</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.div
                className="flex justify-between items-center border-b border-gray-100 pb-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Layers className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="text-white font-medium">Signature Villas</span>
                </div>
                <span className="relative z-10" style={{ color: '#6B7280' }}>Resort-Inspired Design</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-sans text-lg font-semibold mb-4" style={{ color: '#111827' }}>Residential Mix</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
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
