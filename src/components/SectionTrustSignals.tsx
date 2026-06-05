import { motion } from "motion/react";
import { Award, FileCheck, Building2, ShieldCheck } from "lucide-react";

export default function SectionTrustSignals() {
  const trustSignals = [
    {
      icon: Award,
      title: "RERA Approved",
      description: "Compliant ID: PRM/KA/RERA/1251/Bangalore",
      status: "verified"
    },
    {
      icon: FileCheck,
      title: "DTCP Layout Compliant",
      description: "All projects have verified legal titles and environmental clearances",
      status: "verified"
    },
    {
      icon: Building2,
      title: "Construction Updates",
      description: "Regular progress reports with photo documentation",
      status: "ongoing"
    },
    {
      icon: ShieldCheck,
      title: "Developer Credentials",
      description: "Registered with Karnataka RERA Authority",
      status: "verified"
    }
  ];

  return (
    <section className="relative w-full bg-[#24421E] py-32 border-t border-white/10 ambient-bg-overlay">
      <img
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop"
        alt="Architectural ambient"
        className="ambient-bg-image"
        loading="lazy"
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase mb-6">
            Trust & Compliance
          </h2>
          <p className="text-neutral-200 text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Verified approvals, transparent documentation, and regular construction updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/20 p-8 rounded-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className="w-10 h-10 text-gold" />
                  <span className={`text-sm font-mono font-semibold uppercase px-3 py-1.5 rounded ${
                    signal.status === 'verified'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {signal.status}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-white mb-3">
                  {signal.title}
                </h3>
                <p className="text-base text-neutral-300 leading-relaxed">
                  {signal.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
