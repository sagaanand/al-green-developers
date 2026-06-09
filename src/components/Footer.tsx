import { Mail, Landmark, Compass, FolderKanban, Shield, KeyRound, ArrowUpRight } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";
import { Link } from "react-router-dom";

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const handleWhatsappSim = () => {
    const msg = encodeURIComponent("Hello Al Green, I would like to schedule a virtual consulting session.");
    window.open(`https://wa.me/918042019603?text=${msg}`);
  };

  return (
    <footer id="footer-section" className="relative w-full bg-[#24421E] text-[#FAFBF9] pt-20 pb-28 sm:pb-24 border-t border-white/10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                { id: "velora", label: "VELORA GREENS", desc: "Boutique Residential Community" },
                { id: "hayat", label: "HAYAT GREENZ RESORT", desc: "Wellness & Nature Retreat" },
                { id: "logistics", label: "WAREHOUSING", desc: "Industrial Logistics Infrastructure" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/project/${item.id}`}
                    className="text-neutral-400 hover:text-gold flex flex-col cursor-pointer transition-colors group"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-[10px] text-neutral-500 group-hover:text-neutral-400">{item.desc}</span>
                  </Link>
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
