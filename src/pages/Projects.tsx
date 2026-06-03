import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-mono">
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#24421E] to-[#0d1f0c]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono font-bold text-5xl md:text-7xl tracking-tight uppercase mb-6"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Premium Developments Across Bangalore East
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover rounded-xl border border-white/10"
                  />
                </div>
                <div className={`order-1 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#BAA360] text-sm font-mono tracking-widest uppercase">
                      {project.tagline}
                    </span>
                    {project.id === "legacy" && (
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">Ongoing</span>
                    )}
                    {(project.id === "velora" || project.id === "hayat") && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-mono">Upcoming</span>
                    )}
                    {project.id === "logistics" && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-mono">Available</span>
                    )}
                  </div>
                  <h2 className="font-mono text-3xl md:text-4xl font-bold uppercase mb-4">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-neutral-400 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-neutral-300 mb-8 leading-relaxed">
                    {project.story}
                  </p>
                  <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Comparison Table */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-4">
              Compare Projects
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Find the perfect development for your lifestyle and investment goals
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 font-mono text-sm uppercase tracking-wider text-gold">Feature</th>
                  <th className="text-center py-4 px-4 font-mono text-sm uppercase tracking-wider text-gold">Legacy Township</th>
                  <th className="text-center py-4 px-4 font-mono text-sm uppercase tracking-wider text-gold">Velora Greens</th>
                  <th className="text-center py-4 px-4 font-mono text-sm uppercase tracking-wider text-gold">Hayat Resort</th>
                  <th className="text-center py-4 px-4 font-mono text-sm uppercase tracking-wider text-gold">Warehousing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-sm text-neutral-300">Type</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Integrated Township</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Boutique Community</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Wellness Resort</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Industrial Logistics</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-sm text-neutral-300">Apartments</td>
                  <td className="py-4 px-4 text-sm text-white text-center">2,000</td>
                  <td className="py-4 px-4 text-sm text-white text-center">90</td>
                  <td className="py-4 px-4 text-sm text-white text-center">-</td>
                  <td className="py-4 px-4 text-sm text-white text-center">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-sm text-neutral-300">Villa Plots</td>
                  <td className="py-4 px-4 text-sm text-white text-center">750</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Yes</td>
                  <td className="py-4 px-4 text-sm text-white text-center">-</td>
                  <td className="py-4 px-4 text-sm text-white text-center">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-sm text-neutral-300">Scale</td>
                  <td className="py-4 px-4 text-sm text-white text-center">105 Acres</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Premium Small</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Forest Buffer</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Industrial Park</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-sm text-neutral-300">Status</td>
                  <td className="py-4 px-4 text-sm text-center"><span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">Ongoing</span></td>
                  <td className="py-4 px-4 text-sm text-center"><span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-mono">Upcoming</span></td>
                  <td className="py-4 px-4 text-sm text-center"><span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-mono">Upcoming</span></td>
                  <td className="py-4 px-4 text-sm text-center"><span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-mono">Available</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-sm text-neutral-300">Starting From</td>
                  <td className="py-4 px-4 text-sm text-white text-center">₹80 Lakhs</td>
                  <td className="py-4 px-4 text-sm text-white text-center">₹1.2 Cr</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Contact</td>
                  <td className="py-4 px-4 text-sm text-white text-center">Contact</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-4">
              Future Projects
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Strategic land acquisitions in high-growth corridors
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-mono text-2xl font-bold uppercase mb-4">
                KADUGODI METRO ROAD STRIP
              </h3>
              <p className="text-neutral-300 mb-6">
                Strategic Land Intelligence Node Acquisition - 120 raw acres secured at pre-announcement valuations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
                <span className="bg-white/10 border border-white/20 rounded px-4 py-2 text-green-50">
                  120 Raw Acres
                </span>
                <span className="bg-white/10 border border-white/20 rounded px-4 py-2 text-green-50">
                  +19.5% Projected Appreciation
                </span>
                <span className="bg-white/10 border border-white/20 rounded px-4 py-2 text-green-50">
                  100% Mutation Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
