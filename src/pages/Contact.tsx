import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Shield, Sparkles, Linkedin, Instagram, Facebook } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import { LeadSubmission } from "../types";
import { trackAnalyticsEvent } from "../utils/analytics";

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
    trackAnalyticsEvent("Contact Form Submitted", "Conversion", `category_${formData.investorType.toLowerCase().replace(/\s+/g, "_")}`);
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
      value: "Palace Road, Palace Vasant Nagar, Bangalore - 560001",
      desc: "Visit our executive briefing center for parent deed inspection.",
      icon: MapPin,
      actionText: "Get Directions",
      actionUrl: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-850 font-sans overflow-x-hidden">
      {/* Top Navbar */}
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#163A2D]">
        <div className="absolute inset-0 z-0 bg-[#163A2D]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
            SECURE CHANNELS
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-6xl uppercase tracking-wide text-white leading-tight">
            CONTACT <span className="text-[#C6A96B] italic font-display font-light">OUR TEAM</span>
          </h1>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light tracking-wider max-w-2xl mx-auto leading-relaxed">
            Connect with our land mutation registry desks, corporate office managers, and customer relationship officers.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Contact Channels */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
                  COMMUNICATION DESK
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold uppercase text-[#163A2D] leading-tight">
                  ACCENTURE INFRA <br />
                  <span className="text-[#C6A96B] italic font-display font-light">OFFICES</span>
                </h2>
                <div className="h-[2px] w-12 bg-[#C6A96B] mt-3" />
              </div>

              {/* Channels Grid */}
              <div className="space-y-6 pt-4">
                {contactChannels.map((channel, idx) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 bg-white border border-[#163A2D]/5 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[#F8FAF8] rounded-xl border border-[#163A2D]/5 text-[#C6A96B]">
                          <Icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-[#163A2D] text-base">
                            {channel.title}
                          </h3>
                          <span className="block text-[11px] text-neutral-500 font-sans font-light mt-0.5">
                            {channel.desc}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs font-mono text-neutral-800 select-all leading-relaxed bg-[#F8FAF8] p-3 rounded-lg border border-[#163A2D]/5 mb-3 font-semibold">
                        {channel.value}
                      </p>
                      <a
                        href={channel.actionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#C6A96B] uppercase tracking-wider hover:text-[#163A2D] transition-colors"
                      >
                        {channel.actionText}
                        <span>→</span>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Operating hours */}
              <div className="p-5 bg-[#F8FAF8] border-l-2 border-[#C6A96B] rounded-r-xl font-mono text-xs text-neutral-700 space-y-2">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#163A2D]">
                  <Clock className="w-4 h-4 text-[#C6A96B]" />
                  <span>OPERATING WINDOW:</span>
                </div>
                <p className="text-neutral-550 leading-relaxed font-sans font-light">
                  Monday to Saturday: 09:00 AM – 06:30 PM (IST)<br />
                  Sunday: Gated site visits scheduled on prior booking clearance only.
                </p>
              </div>

              {/* Social channels */}
              <div className="p-5 bg-[#F8FAF8] border-l-2 border-[#C6A96B] rounded-r-xl font-mono text-xs text-neutral-700 space-y-3">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#163A2D]">
                  <span>OFFICIAL SOCIAL PORTALS:</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/accenture-infra-bangalore/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#C6A96B] transition-colors text-neutral-600"
                  >
                    <Linkedin className="w-4 h-4 text-[#C6A96B]" />
                    <span>LinkedIn</span>
                  </a>
                  <span className="text-[#163A2D]/10">|</span>
                  <a
                    href="https://www.instagram.com/accentureinfra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#C6A96B] transition-colors text-neutral-600"
                  >
                    <Instagram className="w-4 h-4 text-[#C6A96B]" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-[#163A2D]/10">|</span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61590411426737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-[#C6A96B] transition-colors text-neutral-600"
                  >
                    <Facebook className="w-4 h-4 text-[#C6A96B]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-[20px] border border-[#163A2D]/5 shadow-lg space-y-6 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#163A2D]/2 rounded-full blur-3xl pointer-events-none" />

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#C6A96B] uppercase tracking-widest block font-bold">
                        SECURED SUBMISSION FORM
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#163A2D] uppercase">
                        Send an Enquiry
                      </h3>
                      <p className="text-xs text-neutral-500 font-sans font-light">
                        Submissions are logged into the ledger database instantly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Krishnan"
                          className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C6A96B] focus:bg-white transition-all text-sm font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C6A96B] focus:bg-white transition-all text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. anand@hospital.org"
                          className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C6A96B] focus:bg-white transition-all text-sm font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                          Investor Category *
                        </label>
                        <select
                          value={formData.investorType}
                          onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                          className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-xl text-neutral-800 focus:outline-none focus:border-[#C6A96B] focus:bg-white transition-all text-sm font-sans"
                        >
                          <option value="HNI / Corporate Investor">HNI / Corporate Investor</option>
                          <option value="NRI Capital Allocator">NRI Capital Allocator</option>
                          <option value="Multi-Generational Family Buyer">Multi-Generational Family Buyer</option>
                          <option value="General Buyer">General Buyer</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase font-semibold">
                        Inquiry Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your allocation parameters, budget, or preferred township block..."
                        className="w-full px-4 py-3 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#C6A96B] focus:bg-white transition-all text-sm font-sans resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-luxury-primary w-full py-4 text-[10px] font-mono tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#163A2D]/10 disabled:opacity-50 disabled:cursor-not-allowed focus-premium"
                    >
                      {isSubmitting ? "Processing Ledger Entry..." : "Submit Secure Request"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-[#163A2D]/5 border border-[#163A2D]/15 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8 text-[#C6A96B]" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-bold uppercase text-[#163A2D]">
                        ENTRY LOGGED
                      </h3>
                      <p className="text-xs text-neutral-500 max-w-sm mx-auto font-sans font-light leading-relaxed">
                        Thank you, <strong className="text-neutral-850">{formData.name}</strong>. Your communication dossier entry has been securely registered.
                      </p>
                    </div>
                    <div className="p-4 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-xl max-w-xs mx-auto text-left font-mono text-[10px] space-y-1">
                      <span className="block text-[#C6A96B] font-bold">MUTATION LEDGER REGISTRY:</span>
                      <span className="block text-neutral-500">ID: ALG-LEDG-CONTACT</span>
                      <span className="block text-neutral-500">Status: CONFIRMED QUEUE</span>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-white border border-[#163A2D]/10 hover:border-[#C6A96B] rounded-xl text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer font-bold"
                    >
                      Submit Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Covenants Footer Panel */}
      <section className="py-12 bg-[#F8FAF8] border-t border-neutral-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2 border border-[#163A2D]/10 px-4 py-2 rounded-full bg-white shadow-2xs">
              <Shield className="w-4 h-4 text-[#C6A96B]" /> RERA LICENSE: TN-RERA-N/458
            </span>
            <span className="flex items-center gap-2 border border-[#163A2D]/10 px-4 py-2 rounded-full bg-white shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#C6A96B]" /> 100% MUTATED MUTUAL COMPLIANCE
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
