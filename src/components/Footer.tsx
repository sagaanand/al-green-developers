import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Landmark, Compass, FolderKanban, Shield, KeyRound, ArrowUpRight, ChevronDown, X } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";
import { Link } from "react-router-dom";

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onOpenProjectDetail?: (id: string) => void;
  faqType?: "velora" | "legacy" | "hayat" | "logistics" | "none";
}

export default function Footer({ onScrollToSection, onOpenProjectDetail, faqType }: FooterProps) {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const handleWhatsappSim = () => {
    const msg = encodeURIComponent("Hello Al Green, I would like to schedule a virtual consulting session.");
    window.open(`https://wa.me/918042019603?text=${msg}`);
  };

  const getFaqs = () => {
    switch (faqType) {
      case "velora":
        return [
          {
            question: "What are the configuration types available at Velora Greens?",
            answer: "Velora Greens offers 2 BHK and 3 BHK Boutique Residences, Premium Row Houses, and Master-planned Villa Plots. Plots range from 1,200 to 3,000 Sq Ft."
          },
          {
            question: "Where is Velora Greens located?",
            answer: "The project is situated in the high-growth Sarjapur-Varthur Tech Belt in East Bangalore, providing direct connectivity to key IT parks, Outer Ring Road, and educational institutions."
          },
          {
            question: "What is a 'Courtyard Home' design?",
            answer: "Our signature Courtyard Homes feature an integrated open-sky central court that optimizes daylight penetration and enhances natural ventilation pathways throughout the living areas."
          },
          {
            question: "What is the RERA approval status for Velora Greens?",
            answer: "Velora Greens has received RERA approvals. The compliance documents, DTCP clearances, and mutation deeds are fully pre-stamped and available for inspection."
          }
        ];
      case "legacy":
        return [
          {
            question: "How large is the Legacy Township development?",
            answer: "Legacy Township is a premier 105-acre self-sustaining integrated township in Bangalore East, featuring dedicated apartment zones, luxury villa plots, and commercial centers."
          },
          {
            question: "What amenities are featured in the 100,000 Sq Ft Clubhouse?",
            answer: "The Grand Clubhouse features an Olympic-pro cooling pool, business meeting auditoriums, a wellness spa, athletic circuits, and an organic estate nursery culinary bar."
          },
          {
            question: "Are the villa plots ready for immediate construction?",
            answer: "Yes, all villa plots inside Legacy Township are flat-laid, DTCP approved, have pre-certified clear titles, and feature independent water lines and grid connections."
          },
          {
            question: "What is the projected appreciation and yield for Legacy?",
            answer: "Legacy Township is located in the Whitefield-Hoskote growth corridor. Plots and residences are highly rated for capital preservation, showing historical double-digit annual appreciation."
          }
        ];
      case "hayat":
        return [
          {
            question: "What is the core concept of Hayat Greenz Resort?",
            answer: "Hayat Greenz Resort is a wellness-focused ecological retreat situated on the scenic Hoskote forest fringe, blending natural luxury, biological therapy, and member-exclusive club privileges."
          },
          {
            question: "What kind of wellness facilities are available?",
            answer: "Facilities include therapeutic mineral hot-pools, biological water filtration lagoons, sensory walk pathways, sauna rooms, and organic juice bars."
          },
          {
            question: "Who can access the wellness amenities?",
            answer: "Access is granted to property owners and registered club members, securing maximum privacy, safety, and community exclusivity."
          },
          {
            question: "How does the resort support local ecology?",
            answer: "The project maintains a native forest corridor, nursery-raising over 2,500 indigenous trees to safeguard local microclimates and enhance regional biodiversity."
          }
        ];
      case "logistics":
        return [
          {
            question: "What logistics features does the warehousing park offer?",
            answer: "We offer state-of-the-art dry and cold storage warehouses, high-load concrete floor plates, automated dock levelers, and dedicated EV charging docks for commercial transport."
          },
          {
            question: "Where is the commercial warehousing park located?",
            answer: "It is strategically located within the Budigere-Hoskote Logistics Cluster in Bangalore East, offering rapid transit access to the STRR, Bangalore Airport, and major highway routes."
          },
          {
            question: "Are the logistics warehouses ready for leasing?",
            answer: "Yes, we have ready-to-occupy built-to-suit blocks as well as industrial layouts cleared with high-voltage grid connections and fire regulatory compliances."
          },
          {
            question: "What is the investment yield potential for commercial plots?",
            answer: "Due to the high corridor demand, industrial assets within our logistics park yield stable, long-term rental income backed by verified corporate lease contracts."
          }
        ];
      default:
        return [];
    }
  };

  const faqs = getFaqs();

  const policies: Record<string, { title: string; content: string[] }> = {
    privacy: {
      title: "Privacy Policy",
      content: [
        "Accenture Infra Ecosystem Private Limited is committed to respecting and protecting your privacy. This policy outlines how we handle personal data collected through our website forms, consultations, and site visits.",
        "Data Collected: We collect standard identification data including name, phone number, email address, and project interests purely to schedule site visits, verify callback inquiries, and manage project registration updates.",
        "Consent & Communication: By providing your details, you consent to receive communications, project brochures, and booking notifications from our sales representatives via call, SMS, or WhatsApp.",
        "Data Protection: We employ secure local servers to safeguard your information. We do not sell, rent, or lease customer databases to third-party marketing companies.",
        "Opt-out: You may unsubscribe from further updates at any point by sending an email with your registered details to info@accentureinfra.com."
      ]
    },
    terms: {
      title: "Terms & Conditions",
      content: [
        "Use of this website is governed by these Terms and Conditions. By browsing this website, you accept these terms in full.",
        "Intellectual Property: All texts, layout grids, site plans, render graphics, animations, and typography are owned by or licensed to Accenture Infra. Reproduction is strictly prohibited.",
        "Valuations & Availability: Pricing ranges, unit availability, and yields shown are indicative projections based on current master-planning and market corridor rates. Final price terms are lock-secured only upon official booking deposit clearance.",
        "Legal Discretion: This website is a digital guide. In the event of any discrepancies between website depictions and formal booking deeds, the final bilateral construction agreements executed at our headquarters will prevail."
      ]
    },
    rera: {
      title: "RERA Compliance Mandates",
      content: [
        "Accenture Infra developments comply with the Real Estate (Regulation and Development) Act, 2016 (RERA) and Karnataka State rules.",
        "Layout Approvals: Layout design parameters, unit numbers, common spaces, and infrastructure networks correspond strictly to the layout plans cleared by DTCP / BMRDA / local development boards and registered under RERA.",
        "Visual Disclaimer: Renderings, virtual animations, mockups, and landscaped courtyard pictures are artistic designs created to help prospective buyers visualize the finished environment. They do not constitute actual commitments.",
        "Verifiable Registration IDs: All buyers are encouraged to visit the official RERA portal and inspect approved plans, mutation status, and regulatory filings under registration ID: PRM/KA/RERA/1251/Bangalore."
      ]
    },
    disclaimer: {
      title: "Disclaimer",
      content: [
        "General Information: All text, data, maps, and specifications on this website are provided for informational purposes only. While we try to keep information correct and updated, we make no representations of absolute guarantees.",
        "Physical Boundaries: All site measurements, elevations, and botanical parameters are subject to minor layout adjustments during final ground construction under surveyor supervision.",
        "Corridor Yields: References to Corridors appreciation, growth trends, or warehousing yields are projections based on historical data. They do not guarantee future investment returns."
      ]
    }
  };

  return (
    <footer id="footer-section" className="relative w-full bg-[#24421E] text-[#FAFBF9] pt-20 pb-28 sm:pb-24 border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* FAQs Accordion Section */}
        {faqs.length > 0 && (
          <div className="border-b border-white/10 pb-16 mb-16 text-left">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#BAA360] block font-bold mb-6">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/20 transition-all"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-sm sm:text-base text-white hover:text-gold transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-xs sm:text-sm text-neutral-355 font-sans font-light leading-relaxed border-t border-white/5 pt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          {/* Logo Brand / Pitch Column (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <button
              id="footer-brand-btn"
              onClick={() => onScrollToSection("hero")}
              className="flex items-center gap-3 cursor-pointer text-left group"
            >
              <img
                src={logoIcon}
                alt="Logo Icon"
                className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center">
                <span className="block font-sans text-lg tracking-[0.15em] font-normal text-white group-hover:text-gold transition-colors">
                  ACCENTURE
                </span>
                <span className="block font-sans text-lg tracking-[0.15em] font-bold text-[#BAA360] group-hover:text-gold transition-colors">
                  INFRA
                </span>
              </div>
            </button>

            <p className="text-sm text-neutral-300 font-normal max-w-sm leading-relaxed">
              Accenture Infra is a land intelligence and community development company that happens to build real estate projects. Built to safeguard capital, protect the environment, and establish sustainable multi-generational community grids.
            </p>

            <div className="pt-2 text-[10px] font-mono text-neutral-400 space-y-1 font-mono">
              <span className="block">© {new Date().getFullYear()} ACCENTURE INFRA ECOSYSTEM PRIVATE LIMITED.</span>
              <span className="block text-[#BAA360]">RERA APPROVED // COMPLIANT ID: PRM/KA/RERA/1251/Bangalore</span>
            </div>
          </div>

          {/* Projects Menu (4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#BAA360] block font-bold">
              PROJECTS
            </span>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: "legacy", label: "LEGACY TOWNSHIP", desc: "105-Acre Integrated City" },
                { id: "velora", label: "VELORA GREENS", desc: "Modern Living & Courtyard Homes in East Bangalore" },
                { id: "hayat", label: "HAYAT GREENZ RESORT", desc: "Wellness & Nature Retreat" },
                { id: "logistics", label: "WAREHOUSING", desc: "Industrial Logistics Infrastructure" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (onOpenProjectDetail) {
                        onOpenProjectDetail(item.id);
                      } else {
                        window.location.href = `/project/${item.id}`;
                      }
                    }}
                    className="text-neutral-400 hover:text-gold flex flex-col cursor-pointer transition-colors group text-left w-full"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-neutral-400">{item.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#BAA360] block font-bold">
              OFFICIAL CORRESPONDENCES
            </span>

            <div className="space-y-4 text-xs text-neutral-300">
              <div>
                <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">HEADQUARTERS</span>
                <span className="text-white block font-mono font-medium">
                  2nd floor, No. 4AM, 501/1, Outer Ring Rd, <span className="block font-mono font-medium">HRBR Layout, Bengaluru, Karnataka 560043.</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">DIRECT CONTACT</span>
                  <a href="tel:+918042019603" className="text-white hover:text-gold block font-mono font-medium">
                    +91 80 4201 9603
                  </a>
                </div>
                <div>
                  <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">SECURE DISPATCH</span>
                  <a href="mailto:info@accentureinfra.com" className="text-white hover:text-gold block font-mono font-medium flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    info@accentureinfra.com
                  </a>
                </div>
              </div>
            </div>

            {/* Micro-interactive social triggers */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
              <button
                id="footer-action-chat"
                onClick={handleWhatsappSim}
                className="py-2.5 rounded border border-white/10 hover:border-gold hover:bg-white/5 text-[10px] font-mono tracking-widest text-gold uppercase font-bold text-center flex items-center justify-center gap-1 px-3 cursor-pointer font-mono"
              >
                <span>WhatsApp Shell</span>
                <ArrowUpRight className="w-3 h-3 text-gold" />
              </button>
              <a
                id="footer-action-email"
                href="mailto:info@accentureinfra.com"
                className="py-2.5 rounded border border-white/10 hover:border-gold hover:bg-white/5 text-[10px] font-mono tracking-widest text-gold uppercase font-bold text-center flex items-center justify-center gap-1 px-3 font-mono"
              >
                <span>Secure Email</span>
                <Mail className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start text-[10px] font-mono text-neutral-400">
          <button onClick={() => setActivePolicy("privacy")} className="hover:text-gold uppercase tracking-wider font-bold cursor-pointer">Privacy Policy</button>
          <span className="text-white/20">•</span>
          <button onClick={() => setActivePolicy("terms")} className="hover:text-gold uppercase tracking-wider font-bold cursor-pointer">Terms & Conditions</button>
          <span className="text-white/20">•</span>
          <button onClick={() => setActivePolicy("rera")} className="hover:text-gold uppercase tracking-wider font-bold cursor-pointer">RERA Compliance</button>
          <span className="text-white/20">•</span>
          <button onClick={() => setActivePolicy("disclaimer")} className="hover:text-gold uppercase tracking-wider font-bold cursor-pointer">Disclaimer</button>
        </div>

        {/* Footnote branding */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 font-mono">
          <span>ACCENTURE INFRA IS A LICENSED REGISTERED INCORPORATED LAND ECOSYSTEM SYSTEM</span>
          <span className="mt-2 sm:mt-0 uppercase text-[9px] tracking-widest text-gold font-bold">
            MADE FOR KARNATAKA GROWTH CORRIDORS
          </span>
        </div>
      </div>

      {/* Policy Modal Overlay */}
      <AnimatePresence>
        {activePolicy && policies[activePolicy] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActivePolicy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0b1a12] border border-white/20 p-6 sm:p-8 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl relative text-left space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-gold font-bold">
                  {policies[activePolicy].title}
                </h3>
                <button
                  onClick={() => setActivePolicy(null)}
                  className="p-1 rounded-full border border-white/10 hover:border-gold hover:text-gold text-neutral-400 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                {policies[activePolicy].content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-right">
                <button
                  onClick={() => setActivePolicy(null)}
                  className="px-6 py-2.5 rounded bg-white/5 border border-white/10 hover:border-gold hover:text-gold text-xs font-mono tracking-widest uppercase text-white cursor-pointer transition-colors"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

