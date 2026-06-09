import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Compass, CheckCircle2, MessageCircle, Phone, Mail } from "lucide-react";
import { SiteVisitSchedule } from "../types";
import { PROJECTS } from "../data";
import landIntelligence from "../assets/images/land_intelligence_1780310163369.png";


interface SectionSiteVisitProps {
  onScheduleVisit: (visit: Omit<SiteVisitSchedule, "id" | "scheduledAt" | "status">) => void;
  overrideSelectedProject: string;
}

export default function SectionSiteVisit({ onScheduleVisit, overrideSelectedProject }: SectionSiteVisitProps) {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Form, 2 = Success Card
  const [projectSelected, setProjectSelected] = useState(overrideSelectedProject || "LEGACY TOWNSHIP");
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [contactMethod, setContactMethod] = useState("Direct Call");
  const [errorText, setErrorText] = useState("");

  // Hidden/Defaulted values for type safety compatibility:
  const visitorType = "General Buyer";
  const visitTime = "11:00 AM";
  const visitDate = new Date().toISOString().split("T")[0]; // Today's date

  // Handle autoupdating when custom overrides trigger:
  if (overrideSelectedProject && projectSelected !== overrideSelectedProject && currentStep === 1) {
    setProjectSelected(overrideSelectedProject);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    onScheduleVisit({
      name: visitorName,
      visitorType,
      projectSelected,
      visitDate,
      visitTime,
      contactMethod
    });
    setCurrentStep(2);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setVisitorName("");
    setVisitorEmail("");
    setVisitorPhone("");
  };

  return (
    <section id="visit" className="relative w-full section-dark py-32 sm:py-40 border-t border-white/10 overflow-hidden font-sans">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${landIntelligence})` }}
      />

      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/5 z-0 hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div id="booking-intro" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            CONNECT <span className="text-gold font-semibold">WITH US</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-normal text-xs sm:text-sm tracking-wide leading-relaxed">
            Get in touch with our team for site inspections, project queries, or personalized consultations.
          </p>
        </div>

        {/* Form / Success Card Container */}
        <div className="bg-white/10 border border-white/20 rounded-2xl shadow-lg shadow-black/15 overflow-hidden">
          <div className="p-6 sm:p-10 min-h-[340px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {currentStep === 1 ? (
                <motion.form
                  key="visit-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4">
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                        <Compass className="w-5 h-5 text-gold" />
                        Inquiry Form
                      </h3>
                      <p className="text-[10px] font-mono text-gold mt-1 uppercase font-bold font-mono">
                        Fill in the fields below and our team will get in touch with you shortly.
                      </p>
                    </div>
                  </div>

                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/15 rounded text-red-400 text-xs font-mono">
                      {errorText}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column: Attendee Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" /> Full Name *
                        </label>
                        <input
                          id="site-visit-input-name"
                          type="text"
                          placeholder="e.g. Dr. Anand Krishnan"
                          value={visitorName}
                          onChange={(e) => setVisitorName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-mono text-xs text-white focus:outline-none placeholder-neutral-650 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" /> Phone Number *
                        </label>
                        <input
                          id="site-visit-input-phone"
                          type="tel"
                          placeholder="e.g. +91 99999 99999"
                          value={visitorPhone}
                          onChange={(e) => setVisitorPhone(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-mono text-xs text-white focus:outline-none placeholder-neutral-650 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5" /> Email Address *
                        </label>
                        <input
                          id="site-visit-input-email"
                          type="email"
                          placeholder="e.g. anand@hospital.com"
                          value={visitorEmail}
                          onChange={(e) => setVisitorEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-mono text-xs text-white focus:outline-none placeholder-neutral-650 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold">
                            Project of Interest
                          </label>
                          <select
                            value={projectSelected}
                            onChange={(e) => setProjectSelected(e.target.value)}
                            className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-mono text-xs text-white focus:outline-none transition-colors font-mono"
                          >
                            {PROJECTS.filter(p => p.id === "legacy" || p.id === "velora").map((proj) => (
                              <option key={proj.id} value={proj.title} className="bg-[#111111] text-white font-mono">
                                {proj.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold">
                            Preferred Contact Channel
                          </label>
                          <select
                            value={contactMethod}
                            onChange={(e) => setContactMethod(e.target.value)}
                            className="w-full px-4 py-3 bg-black/45 border border-white/10 focus:border-gold rounded font-mono text-xs text-white focus:outline-none transition-colors font-mono"
                          >
                            {["Secure WhatsApp", "Direct Call", "Corporate Email"].map((ch, idx) => (
                              <option key={idx} value={ch} className="bg-[#111111] text-white">
                                {ch}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex justify-end">
                        <button
                          type="submit"
                          id="booking-submit-btn"
                          className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
                        >
                          <span>Send Inquiry</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="visit-success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="space-y-6 text-center py-6"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>

                  <div>
                    <h3 className="font-sans text-xl font-semibold uppercase tracking-wider text-white">
                      Inquiry Submitted
                    </h3>
                    <p className="text-[10px] font-mono text-gold uppercase tracking-[0.15em] mt-1 font-bold font-mono">
                      OUR TEAM WILL CONNECT WITH YOU SHORTLY
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-mono font-normal max-w-md mx-auto">
                    Thank you, <span className="text-gold font-bold">{visitorName}</span>. Your inquiry for <span className="text-gold font-bold">"{projectSelected}"</span> has been registered. We will coordinate details via <span className="text-gold font-bold">{contactMethod}</span> shortly.
                  </p>

                  <div className="flex gap-2 justify-center">
                    <button
                      id="visit-success-whatsapp-dispatch"
                      onClick={() => {
                        const message = encodeURIComponent(`Al Green Inquiry confirmation. Attending: ${projectSelected}. Preferred Contact: ${contactMethod}`);
                        window.open(`https://wa.me/919999999999?text=${message}`);
                      }}
                      className="py-3 px-5 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-xs font-mono tracking-widest uppercase font-bold rounded flex items-center gap-1.5 cursor-pointer font-mono"
                    >
                      <MessageCircle className="w-4 h-4 text-gold" />
                      Connect via WhatsApp
                    </button>
                    <button
                      id="visit-success-restart-btn"
                      onClick={handleRestart}
                      className="py-3 px-5 bg-black/35 border border-white/[0.08] text-neutral-300 hover:bg-white/[0.02] text-xs font-mono tracking-widest uppercase rounded cursor-pointer font-bold font-mono"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
