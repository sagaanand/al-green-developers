import { motion, useInView } from "motion/react";
import { Building2, Home, MapPin, Layers } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function SectionCredibilityMetrics() {
  const metrics = [
    {
      value: 105,
      label: "Acres Under Development",
      icon: MapPin
    },
    {
      value: 2000,
      label: "Premium Apartments",
      icon: Building2
    },
    {
      value: 750,
      label: "Villa Plots",
      icon: Home
    },
    {
      value: 80,
      label: "Amenities",
      icon: Layers,
      suffix: "+"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const timer = setInterval(() => {
        setCounters((prev) => {
          const newCounters = prev.map((count, index) => {
            const target = metrics[index].value;
            const increment = target / steps;
            return Math.min(count + increment, target);
          });
          return newCounters;
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const formatNumber = (num: number, suffix?: string) => {
    if (suffix === "+") return `${Math.floor(num)}+`;
    return num.toLocaleString();
  };

  return (
    <section className="relative w-full bg-[#24421E] py-24 border-b border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="premium-card-dark text-center"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-10 h-10 text-gold mx-auto mb-4" />
                </motion.div>
                <motion.div
                  className="font-mono text-5xl md:text-6xl font-bold text-white mb-3"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                >
                  {formatNumber(counters[index], metric.suffix)}
                </motion.div>
                <div className="text-sm md:text-base text-neutral-300 font-sans font-semibold uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
