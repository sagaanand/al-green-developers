import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Compass, CheckCircle2, MessageCircle, Phone, Mail, FileDown, ArrowRight } from "lucide-react";
import { SiteVisitSchedule } from "../types";
import { PROJECTS } from "../data";
import landIntelligence from "../assets/images/land_intelligence_1780310163369.png";
import { trackAnalyticsEvent, captureLeadMetadata } from "../utils/analytics";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const cleanPhone = visitorPhone.replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 10) {
      setErrorText("Please enter a valid phone number (minimum 10 digits).");
      return;
    }
    if (!visitorEmail.trim() || !visitorEmail.includes("@") || !visitorEmail.includes(".")) {
      setErrorText("Please enter a valid corporate email address.");
      return;
    }

    setErrorText("");
    setIsSubmitting(true);
    trackAnalyticsEvent("Site Visit Form Submission Started", "Conversion", "site_visit_start");

    setTimeout(() => {
      // Capture lead UTM/device details
      const meta = captureLeadMetadata("site_visit_form");

      onScheduleVisit({
        name: visitorName,
        visitorType,
        projectSelected,
        visitDate,
        visitTime,
        contactMethod
      });
      
      setIsSubmitting(false);
      setCurrentStep(2);
      
      trackAnalyticsEvent("Site Visit Form Submission Completed", "Conversion", "site_visit_success", 1, {
        projectName: projectSelected,
        contactMethod,
        ...meta
      });
    }, 1200);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setVisitorName("");
    setVisitorEmail("");
    setVisitorPhone("");
  };

  return (
    <section id="visit" className="relative w-full bg-white py-32 sm:py-40 border-t border-neutral-100 overflow-hidden font-sans">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: `url(${landIntelligence})` }}
      />

      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-neutral-200/40 z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-neutral-200/40 z-0 hidden md:block" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div id="booking-intro" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-neutral-850 leading-tight">
            CONNECT <span className="text-gold font-semibold">WITH US</span>
          </h2>
          <p className="mt-4 text-neutral-600 font-normal text-xs sm:text-sm tracking-wide leading-relaxed">
            Get in touch with our team for site inspections, project queries, or personalized consultations.
          </p>
        </div>

        {/* Form / Success Card Container */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl shadow-lg overflow-hidden">
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
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-neutral-200 pb-4">
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-neutral-850 uppercase tracking-wider flex items-center gap-2">
                        <Compass className="w-5 h-5 text-gold" />
                        Inquiry Form
                      </h3>
                      <p className="text-[10px] font-mono text-gold-dark mt-1 uppercase font-bold font-mono">
                        Fill in the fields below and our team will get in touch with you shortly.
                      </p>
                    </div>
                  </div>

                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/15 rounded text-red-600 text-xs font-mono">
                      {errorText}
                    </div>
                  )}

                  {isSubmitting ? (
                    <div className="py-16 flex flex-col items-center justify-center space-y-4 w-full">
                      <div className="w-12 h-12 border-[3px] border-gold/30 border-t-gold rounded-full animate-spin" />
                      <p className="text-sm font-mono text-gold-dark font-bold animate-pulse text-center">
                        Preparing your project information...
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left Column: Attendee Details */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" /> Full Name *
                          </label>
                          <input
                            id="site-visit-input-name"
                            type="text"
                            placeholder="e.g. Dr. Anand Krishnan"
                            value={visitorName}
                            onChange={(e) => setVisitorName(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-gold rounded font-mono text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 transition-colors shadow-sm focus-premium"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5" /> Phone Number *
                          </label>
                          <input
                            id="site-visit-input-phone"
                            type="tel"
                            placeholder="e.g. +91 99999 99999"
                            value={visitorPhone}
                            onChange={(e) => setVisitorPhone(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-gold rounded font-mono text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 transition-colors shadow-sm focus-premium"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> Email Address *
                          </label>
                          <input
                            id="site-visit-input-email"
                            type="email"
                            placeholder="e.g. anand@hospital.com"
                            value={visitorEmail}
                            onChange={(e) => setVisitorEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-gold rounded font-mono text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 transition-colors shadow-sm focus-premium"
                          />
                        </div>
                      </div>

                      {/* Right Column: Project Details */}
                      <div className="space-y-4 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold">
                              Project of Interest
                            </label>
                            <select
                              value={projectSelected}
                              onChange={(e) => setProjectSelected(e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-gold rounded font-mono text-xs text-neutral-850 focus:outline-none transition-colors font-mono shadow-sm focus-premium"
                            >
                              {PROJECTS.map((proj) => (
                                <option key={proj.id} value={proj.title} className="bg-white text-neutral-800 font-mono">
                                  {proj.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold">
                              Preferred Contact Channel
                            </label>
                            <select
                              value={contactMethod}
                              onChange={(e) => setContactMethod(e.target.value)}
                              className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-gold rounded font-mono text-xs text-neutral-850 focus:outline-none transition-colors font-mono shadow-sm focus-premium"
                            >
                              {["Secure WhatsApp", "Direct Call", "Corporate Email"].map((ch, idx) => (
                                <option key={idx} value={ch} className="bg-white text-neutral-850">
                                  {ch}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-neutral-200 flex justify-end">
                          <button
                            type="submit"
                            id="booking-submit-btn"
                            className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all active:scale-[0.98]"
                          >
                            <span>Send Inquiry</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
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
                    <h3 className="font-sans text-xl font-semibold uppercase tracking-wider text-neutral-850">
                      Inquiry Submitted
                    </h3>
                    <p className="text-[10px] font-mono text-gold-dark uppercase tracking-[0.15em] mt-1 font-bold font-mono">
                      OUR TEAM WILL CONNECT WITH YOU SHORTLY
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-mono font-normal max-w-md mx-auto">
                    Thank you, <span className="text-gold-dark font-bold">{visitorName}</span>. Your inquiry for <span className="text-gold-dark font-bold">"{projectSelected}"</span> has been registered. We will coordinate details via <span className="text-gold-dark font-bold">{contactMethod}</span> shortly.
                  </p>

                  <div className="flex gap-2 justify-center">
                    <button
                      id="visit-success-whatsapp-dispatch"
                      onClick={() => {
                        const message = encodeURIComponent(`Al Green Inquiry confirmation. Attending: ${projectSelected}. Preferred Contact: ${contactMethod}`);
                        window.open(`https://wa.me/918042019603?text=${message}`);
                      }}
                      className="py-3 px-5 bg-neutral-100 border border-neutral-250 text-neutral-800 hover:bg-neutral-200 text-xs font-mono tracking-widest uppercase font-bold rounded flex items-center gap-1.5 cursor-pointer font-mono shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-gold" />
                      Connect via WhatsApp
                    </button>
                    <button
                      id="visit-success-restart-btn"
                      onClick={handleRestart}
                      className="py-3 px-5 bg-white border border-neutral-250 text-neutral-700 hover:bg-neutral-50 text-xs font-mono tracking-widest uppercase rounded cursor-pointer font-bold font-mono shadow-sm"
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
