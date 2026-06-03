import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hammer, Users, TrendingUp, Landmark, Milestone, ArrowRight } from "lucide-react";

export default function SectionGrowthEngine() {
  const [activeStep, setActiveStep] = useState(0);

  const engineSteps = [
    {
      index: 0,
      title: "1. Infrastructure",
      sub: "Government CapEx & Public Outflow",
      desc: "Capital expansion projects (airports, high-tech industrial corridors, mega SEZs, and bypass roads) are established using state funds. This immediately raises the structural valuation floor of adjacent raw acreage.",
      fact: "Every ₹1,000 Cr of public infrastructure CapEx expands surrounding land appreciation potential by up to 12.4%.",
      icon: Hammer,
      chartValue: "₹45,000 Cr CapEx Outflow"
    },
    {
      index: 1,
      title: "2. Connectivity",
      sub: "Transit Speeds & Reduced Commute",
      desc: "New expressways and metro lines slash physical transport latency. Land plots that were once considered distant and quiet suddenly become 20-minute commutes from primary commercial districts.",
      fact: "A 40-minute commute reduction is proven to draw 2.5x residential housing demand to fringe corridors.",
      icon: Milestone,
      chartValue: "Travel Time: -60% Slashed"
    },
    {
      index: 2,
      title: "3. Population Growth",
      sub: "Talent Migration & Talent Clusters",
      desc: "With industries scaling up and connectivity unlocked, highly paid engineers, tech specialists, and executives migrate to the node. Local high-end employment centers grow fast.",
      fact: "Corridors attract high disposable-income buyers, creating demand for institutional-grade communities.",
      icon: Users,
      chartValue: "+150k Specialists Inbound"
    },
    {
      index: 3,
      title: "4. Acute Market Demand",
      sub: "Prisinte Land Supply Constraints",
      desc: "As residential and commercial construction rises, raw, legally clean, fully partitioned high-integrity land becomes scarce. A severe supply deficit triggers competitive bidding cycles.",
      fact: "Approved DTCP layout plots see a steeper demand curve than high-density unpartitioned agricultural reserves.",
      icon: Landmark,
      chartValue: "Supply deficit index: 8.8/10"
    },
    {
      index: 4,
      title: "5. Compounding Appreciation",
      sub: "Outperforming Asset Performance",
      desc: "Capital appreciation accelerates as the mature ecosystem establishes itself. Early landowners who acquired properties during infrastructure phases lock in life-changing wealth compounds.",
      fact: "An Al Green community acquired adjacent to infrastructure nodes has historical compound appreciation exceeding 22% annually.",
      icon: TrendingUp,
      chartValue: "Target CAGR: 22.4%"
    }
  ];

  return (
    <section id="growth-engine-sec" className="relative w-full gradient-bg-forest py-24 sm:py-36 border-t border-white/10 section-light-overlay">
      {/* Background Decorative Tech Grid upgraded for dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-80 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-mono">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <h2 className="font-mono font-bold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            THE GROWTH <span className="text-gold font-bold font-mono">ENGINE</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-mono font-normal text-sm sm:text-base tracking-wide max-w-xl">
            We do not engage in speculative buy-and-hold models. We acquire land mapped exclusively onto structural growth corridor triggers.
          </p>
        </motion.div>

        {/* Compound Flow-Line SVG (Responsive desktop grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Compound flow cards list with inline mobile accordion details */}
          <div className="lg:col-span-5 space-y-4">
            {engineSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.index;

              return (
                <div key={step.index} className="space-y-2">
                  <button
                    id={`growth-step-btn-${step.index}`}
                    onClick={() => setActiveStep(step.index)}
                    className={`w-full text-left p-5 rounded-lg border cursor-pointer block relative transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.05] border-gold shadow-lg shadow-gold/10 text-white"
                        : "bg-[#111111]/40 border-white/[0.04] text-neutral-400 hover:border-white/10 hover:text-white"
                    }`}
                  >
                    {/* Glowing active notch */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gold rounded-r" />
                    )}

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-colors ${
                            isActive
                              ? "bg-gold text-black font-bold"
                              : "bg-white/5 text-gold border border-gold/10"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4
                            className={`text-sm font-mono font-semibold transition-colors uppercase tracking-wider ${
                              isActive ? "text-white font-bold" : "text-neutral-400"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <p className="text-[11px] font-mono text-neutral-400 mt-0.5">{step.sub}</p>
                        </div>
                      </div>

                      {/* Micro arrow or dynamic indicator for mobile visibility */}
                      <span className={`text-[10px] font-mono transition-transform duration-300 block lg:hidden ${isActive ? "rotate-90 text-gold font-bold" : "text-neutral-400"}`}>
                        {isActive ? "CLOSE ▲" : "OPEN ▼"}
                      </span>
                    </div>
                  </button>

                  {/* Inline Mobile Accordion Expansion Panel - Smooth Height animations via motion */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`mobile-accordion-${step.index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="block lg:hidden overflow-hidden"
                      >
                        <div className="p-5 bg-black/60 rounded-lg border border-gold/30 shadow-inner space-y-4">
                          <span className="text-[9px] uppercase font-mono tracking-widest text-[#BAA360] font-bold block">
                            INTELLIGENCE DOSSIER // PHASE 0{step.index + 1}
                          </span>
                          <p className="text-xs text-neutral-300 leading-relaxed font-mono font-normal">
                            {step.desc}
                          </p>
                          
                          <div className="p-3.5 bg-white/[0.02] border border-white/[0.04] rounded space-y-1">
                            <span className="block text-[8px] font-mono text-neutral-400 uppercase font-semibold">
                              COMPUTED CORRIDOR TELEMETRY:
                            </span>
                            <span className="text-xs font-mono font-bold text-white tracking-wider block">
                              {step.chartValue}
                            </span>
                          </div>

                          <div className="p-3.5 bg-gold/5 border border-gold/20 rounded space-y-1">
                            <span className="block text-[8px] font-mono text-gold uppercase font-bold">
                              LAND INTELLIGENCE HIGHLIGHT:
                            </span>
                            <p className="text-xs text-neutral-200 font-mono font-normal leading-snug">
                              {step.fact}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right panel: Live blueprint detail widget - Hidden on mobile, perfectly matches desktop layout */}
          <div className="hidden lg:flex lg:col-span-7 bg-[#111111]/40 border border-white/[0.06] rounded-xl p-6 sm:p-10 relative overflow-hidden flex-col justify-between min-h-[420px] shadow-sm">
            {/* Background design elements */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl z-0" />
            <div className="absolute right-6 top-6 font-mono text-[9px] text-neutral-500">SYSTEMS://GROWTH_TRACES</div>

            <AnimatePresence mode="wait">
              <motion.div
                id={`blueprint-panel-content-${activeStep}`}
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex-1 flex flex-col justify-between space-y-8"
              >
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold font-bold">
                    Interactive Deep Drive / Phase {activeStep + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase tracking-tight mt-3">
                    {engineSteps[activeStep].title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#BAA360] mt-1 font-semibold italic">
                    {engineSteps[activeStep].sub}
                  </p>

                  <p className="mt-6 text-sm text-neutral-300 leading-relaxed font-mono font-normal">
                    {engineSteps[activeStep].desc}
                  </p>
                </div>

                {/* Micro-Visualization (technical specs / data) */}
                <div className="p-4 bg-black/40 border border-white/[0.04] rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[8px] font-mono text-neutral-400 uppercase">
                        COMPUTED TELEMETRY:
                      </span>
                      <span className="text-sm font-mono font-bold text-white tracking-widest mt-1 block">
                        {engineSteps[activeStep].chartValue}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] font-mono text-gold uppercase font-bold">
                        LAND INTELLIGENCE HIGHLIGHT:
                      </span>
                      <span className="text-[11px] text-neutral-200 font-mono font-normal leading-snug mt-1 block">
                        {engineSteps[activeStep].fact}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Transition Trigger Guidance */}
                {activeStep < 4 ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors">
                    <button
                      id={`next-step-trigger-${activeStep}`}
                      onClick={() => setActiveStep((prev) => (prev + 1) % 5)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <span>Trigger Phase {activeStep + 2} Shift Sequence</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-mono text-gold">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                    <span>Appreciation Loop Fully Synthesized & Compounding</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
