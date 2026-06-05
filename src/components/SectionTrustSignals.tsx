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
    <section className="relative w-full section-light py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-luxury-heading text-4xl md:text-5xl uppercase mb-6" style={{ color: '#0F3D1E' }}>
            Trust & Compliance
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed font-normal" style={{ color: '#5F6368' }}>
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
                className="premium-card p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <Icon className="w-10 h-10" style={{ color: '#C9A45C' }} />
                  <span className="status-badge-success">
                    {signal.status}
                  </span>
                </div>
                <h3 className="font-sans text-xl font-semibold mb-3" style={{ color: '#1A1A1A' }}>
                  {signal.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#5F6368' }}>
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
