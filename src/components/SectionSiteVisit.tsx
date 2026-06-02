import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, User, Compass, Clock, CheckCircle2, Navigation, MessageCircle } from "lucide-react";
import { SiteVisitSchedule } from "../types";
import { PROJECTS } from "../data";

interface SectionSiteVisitProps {
  onScheduleVisit: (visit: Omit<SiteVisitSchedule, "id" | "scheduledAt" | "status">) => void;
  overrideSelectedProject: string;
}

export default function SectionSiteVisit({ onScheduleVisit, overrideSelectedProject }: SectionSiteVisitProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [visitorType, setVisitorType] = useState("NRI Buyer");
  const [projectSelected, setProjectSelected] = useState(overrideSelectedProject || "LEGACY TOWNSHIP");
  const [visitDate, setVisitDate] = useState("2026-06-15");
  const [visitTime, setVisitTime] = useState("11:00 AM");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Direct Call");
  const [errorText, setErrorText] = useState("");

  const visitorTypes = [
    { label: "NRI Investor", desc: "For overseas capital allocators in search of high-yield Indian holdings.", value: "NRI Buyer" },
    { label: "Family Builder", desc: "For buyers seeking generational estate plots with full-service infrastructure.", value: "Family Buyer" },
    { label: "Commercial Builder/Developer", desc: "For raw developers seeking strategic logistics-adjacent nodes.", value: "Enterprise Builder" },
    { label: "Institutional Accredited", desc: "For representatives of funds, sovereign plans, or corporate desks.", value: "Corporate Accredited" }
  ];

  const timeslots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"];

  // Handle autoupdating when custom overrides trigger:
  if (overrideSelectedProject && projectSelected !== overrideSelectedProject && currentStep === 1) {
    setProjectSelected(overrideSelectedProject);
  }

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!visitorName.trim()) {
        setErrorText("Name is mandatory to print personalized gate invitation cards.");
        return;
      }
      if (!visitorPhone.trim()) {
        setErrorText("A valid contact line is required for on-site co-ordination.");
        return;
      }
      if (!visitorEmail.trim() || !visitorEmail.includes("@")) {
        setErrorText("Active email matches are needed for itinerary distribution.");
        return;
      }

      setErrorText("");
      // Execute booking pipeline
      onScheduleVisit({
        name: visitorName,
        visitorType,
        projectSelected,
        visitDate,
        visitTime,
        contactMethod
      });
      setCurrentStep(4);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1 && currentStep < 4) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setVisitorName("");
    setVisitorEmail("");
    setVisitorPhone("");
  };

  return (
    <section id="visit" className="relative w-full gradient-bg-deep py-24 sm:py-36 border-t border-white/10 overflow-hidden font-sans section-light-overlay">
      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div id="booking-intro" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block mb-2 font-bold font-mono">
            09 / ON-GROUND VERIFICATION
          </span>
          <h2 className="font-display font-light text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            SITE VISIT <span className="text-gold font-bold">CONCIERGE</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-sans font-light text-xs sm:text-sm tracking-wide leading-relaxed">
            Experience land intelligence in person. We provide full gated access, title binder review, and luxury site transport coordination.
          </p>
        </div>

        {/* Step-by-Step State Deck Container */}
        <div className="bg-[#111111]/40 border border-white/[0.06] rounded-2xl shadow-lg shadow-black/15 overflow-hidden card-glow">
          {/* Progress Indicator Bar */}
          <div className="bg-black/25 border-b border-white/[0.06] px-6 py-4 flex items-center justify-between text-xs font-mono text-neutral-300 font-mono">
            <span className="text-[10px] tracking-widest text-[#BAA360] font-bold font-mono">STEP {currentStep} OF 4</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((stepNo) => (
                <span
                  key={stepNo}
                  className={`w-12 h-1 rounded transition-all duration-300 ${
                    stepNo <= currentStep ? "bg-gold" : "bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Core Body Container */}
          <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {/* STEP 1: Who Are You? */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <User className="w-5 h-5 text-gold" />
                      Client Categorization & Intent
                    </h3>
                    <p className="text-[10px] font-mono text-gold mt-1 uppercase font-bold font-mono">
                      WE SEGREGATE INTERACTIVE TOURS BY CONCIERGE INTEREST CLASS
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {visitorTypes.map((vt, i) => {
                      const isSelected = visitorType === vt.value;
                      return (
                        <button
                          id={`visitor-type-opt-${i}`}
                          key={i}
                          type="button"
                          onClick={() => setVisitorType(vt.value)}
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer block ${
                            isSelected
                              ? "bg-gold/10 border-gold"
                              : "bg-black/35 border border-white/10 hover:bg-black/45 text-neutral-400 hover:border-gold/50"
                          }`}
                        >
                          <span className={`block font-display text-xs font-bold uppercase tracking-wider ${isSelected ? "text-gold" : "text-white"}`}>
                            {vt.label}
                          </span>
                          <span className="block text-[11px] text-neutral-400 mt-1.5 font-sans font-light leading-snug">
                            {vt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Choose Development & Dates */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Compass className="w-5 h-5 text-gold" />
                      Map Project & Select Ideal Date
                    </h3>
                    <p className="text-[10px] font-mono text-gold mt-1 uppercase font-bold font-mono">
                      CHOOSE FROM OUR REGISTERED INFRASTRUCTURE ECOSYSTEMS
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Choose Project */}
                    <div className="space-y-3">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] font-bold font-mono">Target Development</label>
                      <div className="space-y-2">
                        {PROJECTS.map((proj) => {
                          const isSelected = projectSelected === proj.title;
                          return (
                            <button
                              id={`select-project-btn-${proj.id}`}
                              key={proj.id}
                              type="button"
                              onClick={() => setProjectSelected(proj.title)}
                              className={`w-full p-3 rounded-lg border text-left text-xs font-mono uppercase transition-all tracking-wide flex items-center justify-between cursor-pointer ${
                                isSelected ? "bg-gold text-black font-bold border-gold" : "bg-black/35 text-neutral-400 border border-white/10 hover:border-gold/50"
                              }`}
                            >
                              <span>{proj.title}</span>
                              <span className="text-[9px] font-normal sm:scale-95">{proj.location.split(" ")[0]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date/Time Row */}
                    <div className="space-y-4">
                      {/* Date Select */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 flex items-center gap-1 font-bold font-mono">
                          <Calendar className="w-3.5 h-3.5 text-gold" />
                          Target Private Inspection Date
                        </label>
                        <input
                          id="site-visit-input-date"
                          type="date"
                          value={visitDate}
                          onChange={(e) => setVisitDate(e.target.value)}
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded font-mono text-xs text-white focus:outline-none focus:border-gold font-mono"
                        />
                      </div>

                      {/* Time Grid Select */}
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 flex items-center gap-1 font-bold font-mono">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          Select Time-Window Slot
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeslots.map((slot, i) => {
                            const isSelected = visitTime === slot;
                            return (
                              <button
                                id={`slot-select-btn-${i}`}
                                key={i}
                                type="button"
                                onClick={() => setVisitTime(slot)}
                                className={`py-2 px-3 border rounded text-xs font-mono uppercase transition-all text-center cursor-pointer ${
                                  isSelected ? "bg-gold text-black border-gold font-bold" : "bg-black/35 text-neutral-300 border border-white/10 hover:border-gold/50"
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Complete Personal Details */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Compass className="w-5 h-5 text-gold" />
                      Contact & Concierge Coordinates
                    </h3>
                    <p className="text-[10px] font-mono text-gold mt-1 uppercase font-bold font-mono">
                      SECURE PERSONAL PASSES FOR SITE ENTRY
                    </p>
                  </div>

                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/15 rounded text-red-400 text-xs font-mono font-mono">
                      {errorText}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Attendee Name *
                      </label>
                      <input
                        id="site-visit-input-name"
                        type="text"
                        placeholder="e.g. Dr. Anand Krishnan"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-sans text-xs text-white focus:outline-none placeholder-neutral-500"
                      />
                    </div>

                    {/* Contact details */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Active Phone Line *
                      </label>
                      <input
                        id="site-visit-input-phone"
                        type="tel"
                        placeholder="e.g. +91 99999 99999"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-sans text-xs text-white focus:outline-none placeholder-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Email Address *
                      </label>
                      <input
                        id="site-visit-input-email"
                        type="email"
                        placeholder="e.g. anand@hospital.com"
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-sans text-xs text-white focus:outline-none placeholder-neutral-500"
                      />
                    </div>

                    {/* How to connect */}
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Preferred Dispatch Contact Channel
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {["Secure WhatsApp", "Direct Call", "Corporate Email"].map((ch, idx) => {
                          const isSelected = contactMethod === ch;
                          return (
                            <button
                              id={`contact-channel-btn-${idx}`}
                              key={idx}
                              type="button"
                              onClick={() => setContactMethod(ch)}
                              className={`py-2 px-3 border rounded text-xs font-mono uppercase tracking-wider text-center cursor-pointer ${
                                isSelected ? "bg-gold text-black font-bold border-gold" : "bg-black/35 text-neutral-400 border border-white/10 hover:border-gold font-mono"
                              }`}
                            >
                              {ch}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Success confirmation card */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                      Appointment Registered
                    </h3>
                    <p className="text-[10px] font-mono text-gold uppercase tracking-[0.15em] mt-1 font-bold font-mono">
                      PASS VALIDATED IN SECURITY DATABASE
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light max-w-md mx-auto">
                    Welcome, <span className="text-gold font-bold">{visitorName}</span>. A private concierge pass for <span className="text-gold font-bold">"{projectSelected}"</span> was generated for <span className="text-gold font-bold">{visitDate} @ {visitTime}</span>. Security has mapped this token into your local ledger panel. We will coordinate details via <span className="text-gold font-bold">{contactMethod}</span> shortly.
                  </p>

                  <div className="py-4 bg-black/45 border border-white/[0.05] rounded-lg inline-block w-full max-w-sm">
                    <span className="block text-[8px] font-mono text-neutral-400 uppercase font-bold font-mono">PRIVATE GATE ADMIT PASS:</span>
                    <span className="text-base font-mono text-gold tracking-widest uppercase font-black mt-1 block font-mono">ALG-{(visitorName.slice(0,3)+visitorPhone.slice(-4)).toUpperCase()}</span>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <button
                      id="visit-success-whatsapp-dispatch"
                      onClick={() => {
                        const message = encodeURIComponent(`Al Green Concierge booking confirmation. ID: ALG-${(visitorName.slice(0,3)+visitorPhone.slice(-4)).toUpperCase()}. Attending: ${projectSelected} on ${visitDate}`);
                        window.open(`https://wa.me/919999999999?text=${message}`);
                      }}
                      className="py-3 px-5 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs font-mono tracking-widest uppercase font-bold rounded flex items-center gap-1.5 cursor-pointer font-mono"
                    >
                      <MessageCircle className="w-4 h-4 text-gold" />
                      Dispatch To WhatsApp
                    </button>
                    <button
                      id="visit-success-restart-btn"
                      onClick={handleRestart}
                      className="py-3 px-5 bg-black/35 border border-white/[0.08] text-neutral-300 hover:bg-white/[0.02] text-xs font-mono tracking-widest uppercase rounded cursor-pointer font-bold font-mono"
                    >
                      Book Another Visit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step trigger Button controls */}
            {currentStep < 4 && (
              <div id="booking-controls" className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    id="booking-prev-btn"
                    onClick={handlePrevStep}
                    className="px-5 py-3 rounded-full border border-white/10 hover:border-gold hover:bg-white/5 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-all cursor-pointer font-bold font-mono"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <button
                  id="booking-next-btn"
                  onClick={handleNextStep}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-extrabold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>{currentStep === 3 ? "Generate Pass & Book" : "Secure Next Step"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
