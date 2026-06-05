import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TIMELINE_STAGES } from "../data";
import { ShieldCheck, CalendarRange, FolderLock, ListPlus, Receipt, FileSearch, ArrowRightCircle } from "lucide-react";

export default function SectionTimeline() {
  const [activeStageId, setActiveStageId] = useState<string>(TIMELINE_STAGES[0].id);

  const stageIcons: Record<string, any> = {
    "stage-1": FileSearch,
    "stage-2": FolderLock,
    "stage-3": Receipt,
    "stage-4": ShieldCheck,
    "stage-5": ListPlus,
    "stage-6": ArrowRightCircle,
  };

  const currentStage = TIMELINE_STAGES.find((stg) => stg.id === activeStageId) || TIMELINE_STAGES[0];
  const CurrentIcon = stageIcons[currentStage.id] || ShieldCheck;

  return (
    <section className="relative w-full bg-[#24421E] py-32 sm:py-40 border-t border-white/10 overflow-hidden ambient-bg-overlay">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
        alt="Architectural ambient"
        className="ambient-bg-image"
        loading="lazy"
      />
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-[#FAFBF9]/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        {/* Section Header */}
        <motion.div 
          id="timeline-intro" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            TRANSPARENCY <span className="text-gold font-semibold">TIMELINE</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-normal text-sm sm:text-base tracking-wide max-w-xl">
            Uncompromising structural validation. Every acre we list undergoes our signature triple auditing process before developer pre-launch.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Vertical step controls (5 Columns) */}
          <div className="lg:col-span-5 relative space-y-3 lg:pl-6 lg:border-l lg:border-white/10 pl-0 border-none">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isSelected = activeStageId === stage.id;
              const Icon = stageIcons[stage.id] || ShieldCheck;

              return (
                <div key={stage.id} className="space-y-2">
                  <motion.button
                    id={`timeline-step-${stage.id}`}
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-lg border text-xs font-mono transition-all duration-300 relative uppercase cursor-pointer flex items-center justify-between group ${
                      isSelected
                        ? "bg-gold/90 text-black border-gold font-bold shadow-lg shadow-gold/20"
                        : "bg-white/5 border-white/20 text-neutral-400 hover:text-white hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    {/* Glowing vertical node marker dot */}
                    <span
                      className={`absolute -left-[28.5px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 hidden lg:flex items-center justify-center ${
                        isSelected
                          ? "bg-gold border-black scale-110 shadow"
                          : "bg-[#111111] border-neutral-600 group-hover:border-gold"
                      }`}
                    >
                      <span className="w-1 h-1 bg-white rounded-full font-mono" />
                    </span>

                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-black" : "text-[#BAA360]"}`} />
                      <span>{stage.stageName}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold ${isSelected ? "text-black/70" : "text-neutral-400"}`}>
                        {stage.duration}
                      </span>
                      {/* Micro arrow or indicator for mobile visibility */}
                      <span className={`text-[9px] font-mono transition-transform duration-300 block lg:hidden ${isSelected ? "rotate-90 text-black font-semibold" : "text-neutral-400"}`}>
                        {isSelected ? "▲" : "▼"}
                      </span>
                    </div>
                  </motion.button>

                  {/* Inline Mobile Stage Details Accordion */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        id={`mobile-timeline-accordion-${stage.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="block lg:hidden overflow-hidden w-full"
                      >
                        <div className="p-5 bg-[#111111]/90 border border-gold/25 rounded-l shadow-inner space-y-5">
                          <div className="flex items-center gap-2 text-[8px] font-mono text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded w-fit font-bold">
                            <CalendarRange className="w-3 h-3 text-gold" />
                            <span>Active Stage Schedule: {stage.duration}</span>
                          </div>
                          
                          <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                            {stage.description}
                          </p>

                          {/* Protocols list */}
                          <div className="p-4 rounded-lg bg-white/5 border border-white/20 space-y-2">
                            <span className="block text-[8px] font-mono tracking-wider text-neutral-400 uppercase font-bold">
                              CERTIFIED ON-GROUND PROTOCOLS:
                            </span>
                            <ul className="space-y-1.5 text-[11px] font-mono font-normal text-neutral-300">
                              {stage.actions.map((act, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-gold font-mono font-bold font-mono">•</span>
                                  <span>{act}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Documentation abstract */}
                          <div className="p-3 rounded bg-white/10 border border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                            <div className="space-y-1">
                              <span className="block text-[8px] font-mono text-gold uppercase tracking-widest font-bold">
                                ISSUED CERTIFICATION RECORD:
                              </span>
                              <span className="text-xs font-mono font-bold text-white block whitespace-normal">
                                {stage.documentation}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#BAA360] bg-[#BAA360]/10 backdrop-blur-sm border border-gold/30 px-2 py-1 rounded w-fit font-bold shrink-0 self-start sm:self-center">
                              <Icon className="w-3.5 h-3.5" />
                              DTCP CLEAR
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Expanded stage blueprint dossier (7 Columns) */}
          <div className="hidden lg:flex lg:col-span-7 bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-10 rounded-xl min-h-[480px] flex-col justify-between shadow-lg relative">
            <div className="absolute right-6 top-6 font-mono text-[9px] text-neutral-500">DUE_DILIGENCE_CHARTER://REV3.0</div>

            <AnimatePresence mode="wait">
              <motion.div
                id={`timeline-blueprint-content-${currentStage.id}`}
                key={currentStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Heading */}
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded w-fit font-bold">
                    <CalendarRange className="w-3 h-3 text-gold" />
                    <span>Active Stage Schedule: {currentStage.duration}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white uppercase tracking-tight mt-4">
                    {currentStage.stageName.split(".")[1]}
                  </h3>
                  <div className="h-[2px] w-16 bg-gold mt-3" />
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Verified Auditing Protocols */}
                <div className="p-4 rounded-lg bg-black/40 border border-white/[0.04] space-y-3">
                  <span className="block text-[9px] font-mono tracking-wider text-neutral-400 uppercase font-bold">
                    CERTIFIED ON-GROUND PROTOCOLS:
                  </span>
                  <ul className="space-y-2 text-xs font-mono font-normal text-neutral-300">
                    {currentStage.actions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-gold font-mono font-bold mt-0.5">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secure Documentation Abstract Card */}
                <div className="p-4 rounded bg-gradient-to-r from-black/50 to-black/30 border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="block text-[8px] font-mono text-gold uppercase tracking-widest font-bold">
                      ISSUED VERIFIABLE TITLE RECORD:
                    </span>
                    <span className="text-xs font-mono font-bold text-white truncate max-w-[280px] block mt-1 font-mono">
                      {currentStage.documentation}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#BAA360] bg-[#BAA360]/5 border border-[#BAA360]/20 px-2 py-1 rounded select-none font-bold font-mono">
                    <CurrentIcon className="w-3.5 h-3.5" />
                    DTCP MATCHED
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="font-mono">ACCENTURE INFRA TITLES DEPT</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                100% REGULATORY COMPLIANT
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
