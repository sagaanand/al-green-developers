import { Mail, Landmark, Compass, FolderKanban, Shield, KeyRound, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleWhatsappSim = () => {
    const msg = encodeURIComponent("Hello Al Green, I would like to schedule a virtual consulting session.");
    window.open(`https://wa.me/919999999999?text=${msg}`);
  };

  return (
    <footer id="footer-section" className="relative w-full bg-[#24421E] text-[#FAFBF9] pt-20 pb-28 sm:pb-24 border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16">
          {/* Logo Brand / Pitch Column (5 Columns) */}
          <div className="md:col-span-5 space-y-6">
            <button
              id="footer-brand-btn"
              onClick={() => onScrollToSection("hero")}
              className="flex items-center gap-3 cursor-pointer text-left group"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-gold rounded-full transform group-hover:rotate-45 transition-transform duration-700">
                <span className="font-mono text-gold font-bold text-sm">AI</span>
              </div>
              <div>
                <span className="block font-display text-lg tracking-[0.15em] font-extrabold text-white group-hover:text-gold transition-colors">
                  ACCENTURE INFRA
                </span>
                <span className="block text-[8px] font-mono tracking-[0.3em] text-neutral-400 font-mono">
                  ECOSYSTEM DEVELOPER
                </span>
              </div>
            </button>

            <p className="text-sm text-neutral-300 font-sans font-light max-w-sm leading-relaxed">
              Accenture Infra is a land intelligence and community development company that happens to build real estate projects. Built to safeguard capital, protect the environment, and establish sustainable multi-generational community grids.
            </p>

            <div className="pt-2 text-[10px] font-mono text-neutral-400 space-y-1 font-mono">
              <span className="block">© {new Date().getFullYear()} ACCENTURE INFRA ECOSYSTEM PRIVATE LIMITED.</span>
              <span className="block text-[#BAA360]">RERA APPROVED // COMPLIANT ID: PRM/KA/RERA/1251/Bangalore</span>
            </div>
          </div>

          {/* Quick jump menu (3 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block font-bold font-mono">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-mono text-xs font-mono">
              {[
                { id: "philosophy", label: "ABOUT MANIFESTO", icon: Compass },
                { id: "developments", label: "BUSINESS DEVELOPMENTS", icon: FolderKanban },
                { id: "intelligence", label: "CORRIDOR INTELLIGENCE", icon: Shield },
                { id: "investors", label: "INVESTOR CENTRE", icon: Landmark },
                { id: "visit", label: "SCHEDULE EXPERIENCES", icon: KeyRound },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      id={`footer-nav-link-${item.id}`}
                      onClick={() => onScrollToSection(item.id)}
                      className="text-neutral-400 hover:text-gold flex items-center gap-2 cursor-pointer transition-colors group"
                    >
                      <Icon className="w-3.5 h-3.5 text-gold/45 group-hover:text-gold transition-colors" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details (4 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block font-bold font-mono">
              OFFICIAL CORRESPONDENCES
            </span>

            <div className="space-y-4 font-mono text-xs text-neutral-300 font-mono">
              <div>
                <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">HEADQUARTERS</span>
                <span className="text-white block font-sans font-medium">
                  Level 8, Aman Signature Tower, <span className="block font-sans font-medium">Whitefield East Road, Bangalore, Karnataka, 560066.</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">DIRECT CONTACT</span>
                  <a href="tel:+919999999999" className="text-white hover:text-gold block font-sans font-medium">
                    +91 99999 99999
                  </a>
                </div>
                <div>
                  <span className="block text-[9px] text-[#BAA360] uppercase tracking-wider mb-1 font-bold font-mono">SECURE DISPATCH</span>
                  <a href="mailto:advisor@algreendevelopers.com" className="text-white hover:text-gold block font-sans font-medium flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    advisor@algreen
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
                href="mailto:advisor@algreendevelopers.com"
                className="py-2.5 rounded border border-white/10 hover:border-gold hover:bg-white/5 text-[10px] font-mono tracking-widest text-gold uppercase font-bold text-center flex items-center justify-center gap-1 px-3 font-mono"
              >
                <span>Secure Email</span>
                <Mail className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote branding */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 font-mono">
          <span>ACCENTURE INFRA IS A LICENSED REGISTERED INCORPORATED LAND ECOSYSTEM SYSTEM</span>
          <span className="mt-2 sm:mt-0 uppercase text-[9px] tracking-widest text-gold font-bold">
            MADE FOR KARNATAKA GROWTH CORRIDORS
          </span>
        </div>
      </div>
    </footer>
  );
}
