import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileDown, Mail, Phone, User, CheckCircle2, ArrowRight } from "lucide-react";
import { captureLeadMetadata, trackAnalyticsEvent } from "../utils/analytics";
import { LeadSubmission } from "../types";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt">) => void;
  onTriggerVisit: () => void;
}

export default function BrochureModal({ isOpen, onClose, onAddLead, onTriggerVisit }: BrochureModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    // Input Validation
    if (!name.trim()) {
      setErrorText("Please enter your full name.");
      return;
    }
    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 10) {
      setErrorText("Please enter a valid phone number (minimum 10 digits).");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErrorText("Please enter a valid corporate email address.");
      return;
    }

    setIsSubmitting(true);
    trackAnalyticsEvent("Brochure Form Submission Started", "Conversion", "brochure_modal_start");

    // Simulate direct secure ledger and PDF packaging delay
    setTimeout(() => {
      // Capture lead metadata
      const leadMeta = captureLeadMetadata("hero_brochure");
      
      const newLead = {
        name: name,
        phone: phone,
        email: email,
        project: "All Projects (Brochure Request)",
        notes: `CTA Origin: hero_brochure. Device: ${leadMeta.device}. UTM: ${leadMeta.utmSource}/${leadMeta.utmMedium}`
      };

      onAddLead(newLead);
      setIsSubmitting(false);
      setIsSuccess(true);

      trackAnalyticsEvent("Brochure Form Submission Completed", "Conversion", "brochure_modal_success", 1, {
        leadName: name,
        ...leadMeta
      });
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-md bg-white rounded-[20px] shadow-2xl border border-neutral-100 overflow-hidden z-10"
          >
            {/* Header / Accent Bar */}
            <div className="bg-gradient-to-r from-gold to-[#A0814C] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-black">
                <FileDown className="w-5 h-5" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-bold">Project Catalogues</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-black/10 text-black cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl font-semibold text-neutral-850 uppercase">
                      Download Portfolio
                    </h3>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                      Enter your details to receive instant access to floorplans, layouts, and cost worksheets.
                    </p>
                  </div>

                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/15 rounded text-red-600 text-xs font-mono">
                      {errorText}
                    </div>
                  )}

                  {isSubmitting ? (
                    <div className="py-12 flex flex-col items-center justify-center space-y-4">
                      {/* Premium Spinner */}
                      <div className="w-10 h-10 border-[3px] border-gold/30 border-t-gold rounded-full animate-spin" />
                      <p className="text-xs font-mono text-gold-dark font-bold animate-pulse text-center">
                        Preparing your project brochure & pricing sheets...
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[9px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1">
                          <User className="w-3 h-3" /> Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Dr. Anand Krishnan"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-gold rounded font-sans text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 shadow-xs focus-premium"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[9px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1">
                          <Phone className="w-3 h-3" /> Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +91 99999 99999"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-gold rounded font-sans text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 shadow-xs focus-premium"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[9px] font-mono uppercase tracking-widest text-gold-dark mb-1.5 font-bold flex items-center gap-1">
                          <Mail className="w-3 h-3" /> Corporate Email
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. anand@hospital.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-gold rounded font-sans text-xs text-neutral-800 focus:outline-none placeholder-neutral-400 shadow-xs focus-premium"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-[0.98] mt-6"
                      >
                        <FileDown className="w-4 h-4" />
                        <span>Download Portfolio PDF</span>
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div className="text-center py-6 space-y-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold animate-bounce">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>

                  <div>
                    <h3 className="font-sans text-xl font-semibold uppercase tracking-wider text-neutral-850">
                      Portfolio Unlocked
                    </h3>
                    <p className="text-[9px] font-mono text-gold-dark uppercase tracking-widest mt-1.5 font-bold">
                      Your download is ready
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed font-sans max-w-sm mx-auto">
                    A dedicated sales advisor has been assigned to coordinate structural site view allocations and custom specifications worksheets.
                  </p>

                  <div className="space-y-3 pt-4">
                    <button
                      onClick={() => {
                        window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank");
                        trackAnalyticsEvent("Brochure PDF Download Opened", "Conversion", "brochure_pdf_open");
                      }}
                      className="w-full py-3.5 rounded-full bg-black hover:bg-neutral-800 text-xs font-mono tracking-widest uppercase text-white font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-[0.98]"
                    >
                      <FileDown className="w-4 h-4 text-gold" />
                      <span>Download Portfolio PDF</span>
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onTriggerVisit();
                      }}
                      className="w-full py-3.5 rounded-full bg-neutral-100 border border-neutral-250 text-neutral-800 hover:bg-neutral-200 text-xs font-mono tracking-widest uppercase font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-[0.98]"
                    >
                      <span>Schedule Private Tour</span>
                      <ArrowRight className="w-4 h-4 text-gold-dark" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
