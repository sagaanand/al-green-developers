import { motion } from "motion/react";
import { MapPin, Warehouse, Truck, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import TypingHeader from "../components/TypingHeader";

export default function AccentureGreenzWarehousing() {
  const features = [
    "Industrial Infrastructure",
    "Logistics Support",
    "Commercial Expansion",
    "Strategic Connectivity"
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-sans">
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            alt="Accenture Greenz Warehousing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1f0c]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <TypingHeader
            className="font-display font-semibold text-5xl md:text-7xl tracking-wide uppercase mb-6 text-white"
            segments={[{ text: "Accenture Greenz Warehousing" }]}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Commercial Division — Future-Ready Industrial & Logistics Infrastructure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-6 text-neutral-400"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Budigere-Hoskote Logistics Cluster, Bangalore East</span>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Overview
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 font-normal">
              Accenture Infra's heavy-duty industrial and logistics warehousing sector, connecting crucial logistics expressways. Engineered to international freight standards, it features super-cast high load-bearing floors, high-capacity solar grid sub-stations, and state-of-the-art climate-controlled cold storage bays.
            </p>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
              alt="Accenture Greenz Warehousing Overview"
              className="w-full h-96 object-cover rounded-xl border border-white/20"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Mutual Value Hypothesis Section */}
      <section className="py-24 bg-[#0a1209] border-t border-white/[0.05] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                THE MUTUAL VALUE HYPOTHESIS
              </span>
              <h2 className="font-display font-semibold text-2xl sm:text-4xl uppercase text-white leading-tight">
                WHY SECURE AN ASSET WITH <span className="text-gold">ACCENTURE INFRA?</span>
              </h2>
              <div className="h-[2px] w-20 bg-gold font-normal" />
              <p className="text-sm text-neutral-400 font-mono font-normal leading-relaxed">
                A real estate investment of ₹50 Lakhs to ₹2 Crore is not a purchase of brick and mortar; it is the physical allocation of your family's financial future. Speculative builders inflate prices with fake amenities. Accenture Infra establishes capital preservation nodes built strictly upon audited spatial demand, clear legal mutation history, and climate-adaptive physical master-planning.
              </p>
              <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-mono text-white uppercase font-bold">100% Legal Mutation Immunity</span>
                  <span className="block text-[11px] text-neutral-500 font-mono font-normal mt-1">
                    Every sq ft is backed by a 40-year parent deed trace and DTCP single-window RERA registry layout clearance order pre-secured.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Strategic <span className="text-xs text-gold font-mono uppercase font-bold">Logistics</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Connectivity Interlocking Nodes</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Immediate direct frontage on crucial high-speed express corridors linking national industrial complexes.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Future-Ready <span className="text-xs text-gold font-mono uppercase font-bold">CapEx</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Heavy Pre-Cast Foundations</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Reinforced load-bearing earth with integrated fiber trunks, solar substations, and wide-turn freight logistics routes.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Zero <span className="text-xs text-gold font-mono uppercase font-bold">Bottleneck</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">Automated Customs Registry</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Customized layout plans matching international container standards with fast-track single-window customs links.</p>
              </div>
              <div className="p-6 bg-[#111111]/45 border border-white/[0.08] rounded-xl space-y-3">
                <span className="text-3xl font-mono font-normal text-white block">Institutional <span className="text-xs text-gold font-mono uppercase font-bold">Liquidity</span></span>
                <span className="text-xs font-mono text-[#BAA360] tracking-wider uppercase block">MNC Tenancies Pre-Cleared</span>
                <p className="text-xs text-neutral-400 font-mono font-normal">Direct legal lease options lined up with top-tier international logistics and warehousing clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#24421E] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-4">
              Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-xl"
              >
                <Warehouse className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-sans text-xl font-semibold uppercase">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterplan */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Masterplan
            </h2>
            <div className="space-y-4">
              {[
                "Reinforced heavy-freight grade internal transport roads",
                "Plug-and-play high-voltage commercial solar substations",
                "Custom temperature-controlled cold logistics hubs & dry storage",
                "Pre-leased multinational corporate modules available for immediate acquisition"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-gold mt-1 shrink-0" />
                  <p className="text-neutral-300 font-normal">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="py-24 bg-[#24421E] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Growth Drivers
            </h2>
            <div className="space-y-6">
              {[
                "Direct frontage borders on major cross-state cargo transit pathways (BCIC)",
                "Pre-negotiated lease options providing secure corporate cashflows",
                "Zoned high-density logistics warehousing layout clearance"
              ].map((driver, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-gold mt-1 shrink-0" />
                  <p className="text-neutral-300 font-normal">{driver}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Epicurean Land Ecosystems Section */}
      <section className="py-24 bg-[#0a1209] border-t border-b border-white/[0.05] bg-overlay-canopy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-[10px] font-mono text-[#BAA360] tracking-[0.25em] uppercase font-bold block mb-2">
              EPICUREAN LAND ECOSYSTEMS
            </span>
            <h2 className="font-luxury-heading text-2xl sm:text-5xl uppercase text-white leading-tight">
              THE ART OF <span className="text-gold font-bold">ECO-LIVING</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-neutral-455 font-sans font-normal max-w-xl mx-auto">
              Not a concrete jungle. Multi-acre forest pockets, deep bioswales, organic farms, and quiet microclimate lanes planned to enhance human focus and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 hover:cursor-pointer text-left">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop" 
                  alt="Native Tree Garden" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_MUT_NURSERY</div>
              </div>
              <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">Native Forest Commons</h4>
              <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
                Every Accenture Infra property features a state-of-the-art native botany nursery. Up to 2,500 mature, indigenous trees and shrubs are nurtured on-site to build high-end microclimate layers.
              </p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
                  alt="Double height lobby lounge" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_CLUB_LOUNGE</div>
              </div>
              <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">The Grand Vault Lounges</h4>
              <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
                Quiet double-height wooden study libraries, meeting chambers, and organic juice bars crafted for remote tech executives, business operators, and multigenerational adopters.
              </p>
            </div>

            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.08] relative group bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=600&auto=format&fit=crop" 
                  alt="Premium Wellness Spa Bath" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono tracking-wider text-neutral-350">SEC_WELLNESS_POD</div>
              </div>
              <h4 className="text-white font-sans text-lg font-bold uppercase tracking-wider">Therapeutic Water Pools</h4>
              <p className="text-xs text-neutral-400 font-sans font-normal leading-relaxed">
                State of the art mineral pools, biological water filtration lines, and sauna rooms designed strictly to aid physical restoration and premium wellness focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1f0c] bg-overlay-topographic">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase mb-6">
              Explore Commercial Opportunities
            </h2>
            <p className="text-neutral-300 mb-8 font-normal">
              Connect with our team to discuss logistics and warehousing solutions.
            </p>
            <Link
              to="/?project=ACCENTURE%20GREENZ%20WAREHOUSING#visit"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} faqType="logistics" />
      <FloatingCTA />
    </div>
  );
}
