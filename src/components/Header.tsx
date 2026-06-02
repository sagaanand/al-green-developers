import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, FolderKanban, FileText, CalendarCheck, User, X, Menu, ChevronDown, Landmark, Waves, Warehouse, Volume2 } from "lucide-react";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
  onOpenTracker: () => void;
  activeSection: string;
  onOpenProjectDetail?: (id: string) => void;
}

export default function Header({ onScrollToSection, onOpenTracker, activeSection, onOpenProjectDetail }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navDropdowns = {
    developments: {
      label: "Developments",
      icon: FolderKanban,
      items: [
        { label: "Legacy Township", desc: "Flagship 105-Acre Integrated City", id: "legacy" },
        { label: "Velora Greens", desc: "Boutique Residential Enclave", id: "velora" },
        { label: "Future Projects", desc: "STRR & Kadugodi Express Corridors", scrollId: "developments" }
      ]
    },
    experiences: {
      label: "Experiences",
      icon: Waves,
      items: [
        { label: "Hayat Greenz Resort", desc: "Wellness, Nature, and Retreat", id: "hayat" },
        { label: "Club Life", desc: "1 Lakh Sq Ft Member Privileges", scrollId: "developments" }
      ]
    },
    commercial: {
      label: "Commercial",
      icon: Warehouse,
      items: [
        { label: "Accenture Greenz Warehousing", desc: "Strategic Cold & Dry Storage", id: "logistics" },
        { label: "Industrial Parks", desc: "High-Load Infrastructure Nodes", scrollId: "developments" }
      ]
    }
  };

  const simpleNavItems = [
    { id: "philosophy", label: "About", icon: Sparkles },
    { id: "investors", label: "Investors", icon: Landmark },
    { id: "timeline", label: "Media Centre", icon: Volume2 },
    { id: "visit", label: "Contact", icon: CalendarCheck }
  ];

  const handleDropdownItemClick = (item: { label: string; desc: string; id?: string; scrollId?: string }) => {
    setActiveDropdown(null);
    if (item.id && onOpenProjectDetail) {
      onOpenProjectDetail(item.id);
    } else if (item.scrollId) {
      onScrollToSection(item.scrollId);
    }
  };

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#24421E]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              onScrollToSection("hero");
              setActiveDropdown(null);
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-white/20 group-hover:border-gold rounded-full transform group-hover:rotate-45 transition-transform duration-700" />
              <span className="font-mono text-white group-hover:text-gold font-bold text-sm">AI</span>
            </div>
            <div>
              <span className="block font-display text-base tracking-[0.25em] font-black text-white group-hover:text-gold transition-colors duration-300">
                ACCENTURE INFRA
              </span>
              <span className="block text-[8px] font-mono tracking-[0.3em] text-[#BAA360] font-bold">
                ECOSYSTEM DEVELOPER
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {/* Home link */}
            <button
              id="nav-link-home"
              onClick={() => {
                onScrollToSection("hero");
                setActiveDropdown(null);
              }}
              className="group py-2 flex items-center gap-1 cursor-pointer"
            >
              <span className={`text-[11px] font-mono tracking-wider uppercase transition-colors ${activeSection === "hero" ? "text-gold font-bold" : "text-white/80 group-hover:text-white"}`}>
                Home
              </span>
            </button>

            {/* Dropdown triggers */}
            {Object.entries(navDropdowns).map(([key, value]) => {
              const isHovered = activeDropdown === key;
              return (
                <div
                  key={key}
                  className="relative py-2 group"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    id={`nav-dropdown-trigger-${key}`}
                    className="flex items-center gap-1 text-[11px] font-mono tracking-wider uppercase text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{value.label}</span>
                    <ChevronDown className="w-3 h-3 text-white/50 transition-transform group-hover:rotate-180" />
                  </button>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        id={`nav-dropdown-menu-${key}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-[#132210] border border-white/10 p-3 rounded-lg shadow-2xl z-50 space-y-1"
                      >
                        {value.items.map((item, idx) => (
                          <button
                            id={`dropdown-item-${key}-${idx}`}
                            key={idx}
                            onClick={() => handleDropdownItemClick(item)}
                            className="w-full text-left p-2 hover:bg-[#24421E]/60 rounded border border-transparent hover:border-gold/30 transition-all cursor-pointer group"
                          >
                            <span className="block text-xs font-mono uppercase tracking-wider text-white group-hover:text-gold transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-[9px] text-white/60 font-sans mt-0.5">
                              {item.desc}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Simple navigation links */}
            {simpleNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => {
                    onScrollToSection(item.id);
                    setActiveDropdown(null);
                  }}
                  className="relative group py-2 flex items-center gap-1 cursor-pointer"
                >
                  <span
                    className={`text-[11px] font-mono tracking-wider uppercase transition-colors ${
                      isActive ? "text-gold font-bold" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Portal Access */}
          <div className="flex items-center gap-3">
            <button
              id="header-hero-cta"
              onClick={() => onScrollToSection("visit")}
              className="hidden sm:flex px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-semibold shadow-lg shadow-gold/10 transition-all active:scale-[0.98] cursor-pointer"
            >
              Private Tour
            </button>

            {/* Mobile Open Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#24421E]/98 backdrop-blur-md z-50 flex flex-col justify-between text-white"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-white/30 rounded-full">
                  <span className="font-mono text-white font-bold text-sm">AI</span>
                </div>
                <span className="font-display text-base tracking-[0.2em] font-bold text-white">
                  ACCENTURE INFRA
                </span>
              </div>
              <button
                id="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-300 hover:text-white transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Links list */}
            <div className="px-8 py-6 flex flex-col gap-5 overflow-y-auto grow">
              {/* Core Verticals */}
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#FAFBF9]/60 block mb-2 font-bold">
                  Business Verticals
                </span>
                
                {/* Legacy */}
                <button
                  id="mobile-nav-legacy"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenProjectDetail) onOpenProjectDetail("legacy");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-white/10 group"
                >
                  <div>
                    <span className="block text-md font-display uppercase tracking-wider text-white group-hover:text-gold transition-colors">Legacy Township</span>
                    <span className="block text-[10px] text-neutral-300">105-Acre Flagship Integrated City</span>
                  </div>
                </button>

                {/* Velora */}
                <button
                  id="mobile-nav-velora"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenProjectDetail) onOpenProjectDetail("velora");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-white/10 group"
                >
                  <div>
                    <span className="block text-md font-display uppercase tracking-wider text-white group-hover:text-gold transition-colors">Velora Greens</span>
                    <span className="block text-[10px] text-neutral-300">Boutique Residential Enclave</span>
                  </div>
                </button>

                {/* Hayat */}
                <button
                  id="mobile-nav-hayat"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenProjectDetail) onOpenProjectDetail("hayat");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-white/10 group"
                >
                  <div>
                    <span className="block text-md font-display uppercase tracking-wider text-white group-hover:text-gold transition-colors">Hayat Greenz Resort</span>
                    <span className="block text-[10px] text-neutral-300">Immersive Nature and Wellness Retreat</span>
                  </div>
                </button>

                {/* Logistics */}
                <button
                  id="mobile-nav-logistics"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (onOpenProjectDetail) onOpenProjectDetail("logistics");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-white/10 group"
                >
                  <div>
                    <span className="block text-md font-display uppercase tracking-wider text-white group-hover:text-gold transition-colors">Warehousing division</span>
                    <span className="block text-[10px] text-neutral-300">Industrial Logistics Land Nodes</span>
                  </div>
                </button>
              </div>

              {/* General Links */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#FAFBF9]/60 block mb-1 font-bold">
                  Information & Capital links
                </span>
                {simpleNavItems.map((item) => (
                  <button
                    id={`mobile-simple-link-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      onScrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-1 text-md font-display uppercase tracking-wide text-white/90 hover:text-gold"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="px-6 py-8 border-t border-white/10 bg-[#132210] flex flex-col gap-4">
              <button
                id="mobile-drawer-cta-btn"
                onClick={() => {
                  onScrollToSection("visit");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-xs font-mono tracking-widest uppercase text-black font-bold text-center"
              >
                Schedule Private Onsite Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
