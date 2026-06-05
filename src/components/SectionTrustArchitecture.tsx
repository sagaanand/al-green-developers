import { motion } from "motion/react";
import { FileCheck, Award, Building2, ShieldCheck, Download, Eye, Map, Zap, Droplets, Route } from "lucide-react";

export default function SectionTrustArchitecture() {
  const approvals = [
    {
      icon: Award,
      title: "RERA Registration",
      number: "PRM/KA/RERA/1251/Bangalore",
      description: "All projects registered with Karnataka RERA Authority",
      status: "verified"
    },
    {
      icon: FileCheck,
      title: "DTCP Compliance",
      number: "Layout Approved",
      description: "Verified legal titles and environmental clearances",
      status: "verified"
    },
    {
      icon: ShieldCheck,
      title: "Environmental NOC",
      number: "KSPCB Cleared",
      description: "State Pollution Control Board environmental clearance",
      status: "verified"
    },
    {
      icon: Building2,
      title: "BBMP Approvals",
      number: "Sanctioned Plans",
      description: "Building plan approvals from Bruhat Bengaluru Mahanagara Palike",
      status: "verified"
    }
  ];

  const constructionUpdates = [
    {
      phase: "Phase 1 - Legacy Township",
      status: "65% Complete",
      date: "As of June 2026",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
      highlights: ["Earthwork Complete", "Foundation Work In Progress", "Boundary Wall Erected"]
    },
    {
      phase: "Site Infrastructure",
      status: "80% Complete",
      date: "As of June 2026",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
      highlights: ["Internal Roads Laid", "Drainage System Installed", "Electrical Grid Connected"]
    }
  ];

  const masterplans = [
    {
      title: "Legacy Township Master Plan",
      size: "105 Acres",
      description: "Complete layout with residential, commercial, and amenity zones",
      available: true
    },
    {
      title: "Velora Greens Site Plan",
      size: "25 Acres",
      description: "Boutique eco-development with villa plots and row houses",
      available: true
    },
    {
      title: "Hayat Greenz Resort Layout",
      size: "18 Acres",
      description: "Wellness retreat with eco-cabins and spa facilities",
      available: true
    }
  ];

  const infrastructure = [
    {
      icon: Route,
      title: "Road Network",
      description: "40ft and 60ft black-topped internal roads with street lighting"
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Underground water supply system with overhead tanks and rainwater harvesting"
    },
    {
      icon: Zap,
      title: "Electrical Infrastructure",
      description: "Underground cabling, transformer stations, and street lighting"
    },
    {
      icon: Map,
      title: "Drainage System",
      description: "Storm water drains and sewage treatment plant (STP)"
    }
  ];

  return (
    <section className="relative w-full section-dark py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase mb-6">
            Trust & Transparency
          </h2>
          <p className="text-neutral-200 text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Verified approvals, documented construction progress, and transparent masterplans.
            Every aspect of our development is backed by official documentation.
          </p>
        </motion.div>

        {/* Approvals Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-white mb-8"
          >
            Official Approvals
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approvals.map((approval, index) => {
              const Icon = approval.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="premium-card-dark p-6 cursor-pointer"
                >
                  <Icon className="w-10 h-10 text-gold mb-4" />
                  <h4 className="font-sans text-lg font-semibold text-white mb-2">
                    {approval.title}
                  </h4>
                  <p className="text-sm font-mono text-gold mb-3">
                    {approval.number}
                  </p>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {approval.description}
                  </p>
                  <span className="inline-block mt-4 text-xs font-mono font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded">
                    {approval.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Construction Progress Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-white mb-8"
          >
            Construction Progress
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {constructionUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="premium-card-dark rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={update.image}
                    alt={update.phase}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-mono text-gold bg-gold/20 px-2 py-1 rounded">
                      {update.date}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-sans text-lg font-semibold text-white mb-2">
                    {update.phase}
                  </h4>
                  <p className="text-sm font-semibold text-green-400 mb-4">
                    {update.status}
                  </p>
                  <ul className="space-y-2">
                    {update.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Masterplans Section */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-white mb-8"
          >
            Masterplans & Documentation
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {masterplans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="premium-card-dark p-6 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-sans text-lg font-semibold text-white mb-1">
                      {plan.title}
                    </h4>
                    <p className="text-sm font-mono text-gold">
                      {plan.size}
                    </p>
                  </div>
                  {plan.available && (
                    <span className="text-xs font-mono font-semibold text-green-400 bg-green-500/20 px-2 py-1 rounded">
                      Available
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 text-gold rounded-lg hover:bg-gold/20 transition-colors text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-semibold text-white mb-8"
          >
            Site Infrastructure
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="premium-card-dark p-6 cursor-pointer"
                >
                  <Icon className="w-10 h-10 text-gold mb-4" />
                  <h4 className="font-sans text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.description}
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
