import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, MessageSquare, Shield, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import TypingHeader from "../components/TypingHeader";
import { LeadSubmission } from "../types";

interface ContactProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt">) => void;
}

export default function Contact({ onAddLead }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investorType: "General Buyer",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Submit lead details to match RequestTracker ledger drawer
    onAddLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      investorType: formData.investorType,
      reportType: `Contact Message: "${formData.message.substring(0, 30)}${formData.message.length > 30 ? "..." : ""}"`
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactChannels = [
    {
      title: "WhatsApp & Direct Call",
      value: "+91 98765 43210",
      desc: "Instant connection for priority HNIs and NRI inquiries.",
      icon: Phone,
      actionText: "Chat Now",
      actionUrl: "https://wa.me/919876543210"
    },
    {
      title: "Corporate Email",
      value: "alliances@accentureinfra.com",
      desc: "For institutional allocations, mutations deeds audits, and partnerships.",
      icon: Mail,
      actionText: "Send Email",
      actionUrl: "mailto:alliances@accentureinfra.com"
    },
    {
      title: "Registered Headquarters",
      value: "Level 14, Prestige Trade Tower, Palace Road, Bangalore, KA, India - 560001",
      desc: "Visit our executive briefing center for parent deed inspection.",
      icon: MapPin,
      actionText: "Get Directions",
      actionUrl: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F0A] text-white font-sans overflow-hidden">
      {/* Top Navbar */}
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 bg-[#0E150E] border-b border-white/[0.05] bg-overlay-topographic">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
              SECURE CHANNELS
            </span>
            <TypingHeader
              className="font-display font-semibold text-4xl sm:text-6xl tracking-wide uppercase leading-tight text-white"
              segments={[
                { text: "CONTACT " },
                { text: "OUR TEAM", className: "text-gold" }
              ]}
            />
            <div className="h-[2px] w-20 bg-gold mx-auto" />
            <p className="text-base text-neutral-350 max-w-xl mx-auto font-sans font-light">
              Connect with our land mutation registry desks, corporate office managers, and customer relationship officers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 sm:py-28 bg-[#0A0F0A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            {/* Left Column - Contact Channels */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                  COMMUNICATION DESK
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-white leading-tight">
                  ACCENTURE INFRA <span className="text-gold">OFFICES</span>
                </h2>
                <div className="h-[2px] w-16 bg-gold mt-3" />
              </div>

              {/* Channels Grid */}
              <div className="space-y-6 pt-4">
                {contactChannels.map((channel, idx) => {
                  const Icon = channel.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 bg-white/[0.02] border border-white/[0.08] rounded-2xl space-y-4 hover:border-gold/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#132210] rounded-xl border border-white/10 group-hover:border-gold/40 transition-colors">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-sans font-bold text-white text-base group-hover:text-gold transition-colors">
                            {channel.title}
                          </h3>
                          <span className="block text-xs text-neutral-400 font-sans mt-0.5">
                            {channel.desc}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm font-mono text-neutral-250 select-all leading-relaxed bg-black/40 p-3 rounded-lg border border-white/[0.04]">
                        {channel.value}
                      </p>
                      <a
                        href={channel.actionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gold uppercase tracking-wider hover:text-white transition-colors"
                      >
                        {channel.actionText}
                        <span>→</span>
                      </a>
                    </motion.div>
                  );
                })}
              </div>

              {/* Operating hours */}
              <div className="p-5 bg-white/[0.01] border-l-2 border-gold rounded-r-xl font-mono text-xs text-gold/90 space-y-2">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>OPERATING TIME WINDOW:</span>
                </div>
                <p className="text-neutral-400">
                  Monday to Saturday: 09:00 AM – 06:30 PM (IST)<br />
                  Sunday: Gated site visits scheduled on prior booking clearance only.
                </p>
              </div>
            </div>

            {/* Right Column - Premium Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#111611]/80 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl space-y-6 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#24421E]/10 rounded-full blur-3xl pointer-events-none" />

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono text-gold uppercase tracking-widest block font-bold">
                        SECURED SUBMISSION FORM
                      </span>
                      <h3 className="font-display text-2xl font-bold text-white uppercase">
                        SEND AN ENQUIRY
                      </h3>
                      <p className="text-xs text-neutral-450 font-sans">
                        Submissions are logged into the ledger database instantly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Krishnan"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-gold focus:bg-white/[0.07] transition-all text-sm font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-gold focus:bg-white/[0.07] transition-all text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. anand@hospital.org"
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-gold focus:bg-white/[0.07] transition-all text-sm font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                          Investor Category *
                        </label>
                        <select
                          value={formData.investorType}
                          onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                          className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold focus:bg-white/[0.07] transition-all text-sm font-sans [&>option]:text-black"
                        >
                          <option value="HNI / Corporate Investor">HNI / Corporate Investor</option>
                          <option value="NRI Capital Allocator">NRI Capital Allocator</option>
                          <option value="Multi-Generational Family Buyer">Multi-Generational Family Buyer</option>
                          <option value="General Buyer">General Buyer</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neutral-400 uppercase font-semibold">
                        Inquiry Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your allocation parameters, budget, or preferred township block..."
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-gold focus:bg-white/[0.07] transition-all text-sm font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-black font-bold font-mono text-xs tracking-widest uppercase rounded-xl hover:shadow-xl hover:shadow-gold/15 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Processing Ledger Entry..." : "Submit Secure Request"}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 bg-gold/15 border border-gold/40 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <CheckCircle2 className="w-8 h-8 text-gold" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold uppercase text-white">
                        ENTRY LOGGED
                      </h3>
                      <p className="text-sm text-neutral-300 max-w-sm mx-auto font-sans font-light leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Your communication dossier entry has been securely registered in local storage database.
                      </p>
                    </div>
                    <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded-xl max-w-xs mx-auto text-left font-mono text-xs space-y-1">
                      <span className="block text-gold font-bold">MUTATION LEDGER REGISTRY:</span>
                      <span className="block text-neutral-400">ID: ALG-LEDG-CONTACT</span>
                      <span className="block text-neutral-400">Status: CONFIRMED QUEUE</span>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-white/5 border border-white/10 hover:border-gold/30 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Covenants Footer Panel */}
      <section className="py-16 bg-[#0E150E] border-t border-white/[0.05] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full bg-white/[0.01]">
              <Shield className="w-4 h-4 text-gold" /> RERA LICENSE: TN-RERA-N/458
            </span>
            <span className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full bg-white/[0.01]">
              <Sparkles className="w-4 h-4 text-gold" /> 100% MUTATED MUTUAL COMPLIANCE
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
