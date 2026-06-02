import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DownloadCloud, Shield, CheckCircle2, TrendingUp, AlertCircle } from "lucide-react";
import { LeadSubmission } from "../types";

interface SectionInvestorCenterProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt">) => void;
}

export default function SectionInvestorCenter({ onAddLead }: SectionInvestorCenterProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    investorType: "HNI / Corporate Investor",
    selectedReport: "Quarterly Land Corridors Appreciations Report 2026"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");

  const reports = [
    "Quarterly Land Corridors Appreciations Report 2026",
    "Bangalore East Government CapEx Capstone Infrastructure Study",
    "Land Title Due Diligence Legal Charter & Checklist",
    "NRI Luxury Homestead Investment Executive Briefing"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorText("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // High fidelity inputs validation
    if (!formData.name.trim()) {
      setErrorText("Full Name is verified as a mandatory entry.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorText("A valid contact number is required to secure reports.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorText("Active corporate email is needed for cryptographic linkage.");
      return;
    }

    // Call the parent handler
    onAddLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      investorType: formData.investorType,
      reportType: formData.selectedReport
    });

    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      investorType: "HNI / Corporate Investor",
      selectedReport: "Legacy Township Master Plan & Brochure"
    });
    setIsSubmitted(false);
  };

  return (
    <section id="investors" className="relative w-full gradient-bg-forest py-24 sm:py-36 border-t border-white/10 overflow-hidden font-sans section-light-overlay">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-white/[0.04] rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Dashboard Offer details column (6 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block mb-2 font-bold font-mono">
                08 / INFORMATION CENTER
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                PROJECT <br />
                <span className="text-gold font-bold">INFORMATION</span>
              </h2>
              <p className="mt-4 text-neutral-300 font-sans font-light text-sm sm:text-base tracking-wide max-w-xl">
                Access detailed project brochures, layout plans, and development guides for our premium communities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#111111]/40 border border-white/[0.06] rounded-lg shadow-sm">
                <span className="text-gold font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  Project Brochures
                </span>
                <p className="text-xs text-neutral-300 font-light font-sans leading-relaxed">
                  Comprehensive brochures featuring master plans, amenities, and configuration details for each development.
                </p>
              </div>

              <div className="p-4 bg-[#111111]/40 border border-white/[0.06] rounded-lg shadow-sm">
                <span className="text-gold font-mono text-xs uppercase tracking-widest font-bold block mb-1">
                  Investment Guides
                </span>
                <p className="text-xs text-neutral-300 font-light font-sans leading-relaxed">
                  Helpful guides on land ownership, legal documentation, and the home-buying process.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 border border-white/10 bg-white/5 w-fit rounded font-mono text-[9px] text-neutral-300 font-bold">
              <Shield className="w-3.5 h-3.5 text-gold animate-pulse" />
              LICENSED RERA DEVELOPER INTEGRATION REGULATION ID: TN-RERA-N/458
            </div>
          </motion.div>

          {/* Interactive Form column (6 Columns) */}
          <div className="lg:col-span-6 bg-[#111111]/40 border border-white/[0.06] p-6 sm:p-10 rounded-xl relative overflow-hidden shadow-lg shadow-black/15 card-glow">
            {/* Background geometric design patterns */}
            <div className="absolute right-0 top-0 w-48 h-48 bg-white/[0.01] rounded-full blur-2xl z-0 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="investor-intelligence-form"
                  key="form-view"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                >
                  <div>
                    <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                      Request Capital Intelligence
                    </h3>
                    <p className="text-[10px] font-mono text-gold mt-1 uppercase font-bold font-mono">
                      LINK YOUR IDENTITY TO ACTIVATE LEDGER DOWNLOADS
                    </p>
                  </div>

                  {/* Errors feedback */}
                  {errorText && (
                    <div className="p-3 bg-red-500/5 border border-red-500/15 rounded text-red-400 text-xs font-mono flex items-center gap-2 font-mono">
                      <AlertCircle className="w-4 h-4 text-gold shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Client Full Name *
                      </label>
                      <input
                        id="investor-input-name"
                        type="text"
                        name="name"
                        placeholder="e.g. Dr. Anand Krishnan"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded text-white text-xs font-sans placeholder-neutral-500 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    {/* Contact Info (Row) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                          Active Line & Phone *
                        </label>
                        <input
                          id="investor-input-phone"
                          type="tel"
                          name="phone"
                          placeholder="e.g. +91 99999 99999"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded text-white text-xs font-sans placeholder-neutral-500 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                          Corporate Email *
                        </label>
                        <input
                          id="investor-input-email"
                          type="email"
                          name="email"
                          placeholder="e.g. anand@hospital.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded text-white text-xs font-sans placeholder-neutral-500 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Investor Type selection */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Investor Category
                      </label>
                      <select
                        id="investor-input-type"
                        name="investorType"
                        value={formData.investorType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded text-white text-xs font-mono focus:outline-none focus:border-gold transition-colors font-mono"
                      >
                        <option value="HNI / Corporate Investor" className="bg-[#24421E] text-white font-sans">HNI / Corporate Investor</option>
                        <option value="NRI Capital Allocator" className="bg-[#24421E] text-white font-sans">NRI Capital Allocator</option>
                        <option value="Multi-Generational Family Buyer" className="bg-[#24421E] text-white font-sans">Multi-Generational Family Buyer</option>
                        <option value="Institutional Asset Manager" className="bg-[#24421E] text-white font-sans">Institutional Asset Manager</option>
                      </select>
                    </div>

                    {/* Chosen File */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-[#BAA360] mb-1.5 font-bold font-mono">
                        Choose Dossier/Report Package
                      </label>
                      <select
                        id="investor-input-report"
                        name="selectedReport"
                        value={formData.selectedReport}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black/45 border border-white/10 rounded text-white text-xs font-mono focus:outline-none focus:border-gold transition-colors font-mono"
                      >
                        {reports.map((rep, i) => (
                          <option key={i} value={rep} className="bg-[#24421E] text-white font-sans">
                            {rep}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    id="investor-form-submit-btn"
                    type="submit"
                    className="w-full py-4 mt-6 rounded-xl bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <DownloadCloud className="w-4 h-4 text-black shrink-0 font-mono" />
                    <span>Request Information</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  id="investor-success-panel"
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-8 relative z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                      Request Received
                    </h3>
                    <p className="text-xs font-mono text-gold uppercase tracking-[0.1em] font-bold font-mono">
                      INFORMATION PACKAGE CONFIRMED
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed font-sans font-light max-w-sm mx-auto">
                    Thank you for your interest. We have received your request for <span className="text-gold font-mono font-bold">"{formData.selectedReport}"</span>. Our team will send the materials to your email shortly.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      id="investor-success-reset-btn"
                      onClick={handleResetForm}
                      className="flex-1 py-3 bg-black/35 border border-white/[0.08] text-neutral-300 hover:bg-white/[0.02] transition-all text-xs font-mono tracking-widest uppercase rounded cursor-pointer font-mono"
                    >
                      Request Another Package
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
