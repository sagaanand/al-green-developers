import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, FolderKanban, FileText, CalendarCheck, User, X, Menu, ChevronDown, Waves, Warehouse } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "../assets/logo-icon.png";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
  onOpenTracker: () => void;
  activeSection: string;
  onOpenProjectDetail?: (id: string) => void;
}

export default function Header({ onScrollToSection, onOpenTracker, activeSection, onOpenProjectDetail }: HeaderProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Hide header when scrolling up, show when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navDropdowns = {
    developments: {
      label: "Developments",
      icon: FolderKanban,
      items: [
        { label: "Velora Greens", desc: "Modern Living & Courtyard Homes in East Bangalore", id: "velora" },
        { label: "Legacy Township", desc: "Flagship 105-Acre Integrated City", id: "legacy" },
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
    { id: "about", label: "About", icon: Sparkles, link: "/about" },
    { id: "visit", label: "Contact", icon: CalendarCheck }
  ];

  const handleDropdownItemClick = (item: { label: string; desc: string; id?: string; scrollId?: string }) => {
    setActiveDropdown(null);
    if (item.id) {
      if (onOpenProjectDetail) {
        onOpenProjectDetail(item.id);
      } else {
        window.location.href = `/project/${item.id}`;
      }
    } else if (item.scrollId) {
      onScrollToSection(item.scrollId);
    }
  };

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "py-4 shadow-sm"
            : "py-6"
        }`}
        style={{
          background: isScrolled ? 'rgba(15, 61, 30, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
        }}
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
            <img 
              src={logoIcon} 
              alt="Logo Icon" 
              className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="text-center">
              <span className="block font-sans text-lg tracking-[0.25em] font-normal text-white group-hover:text-gold transition-colors duration-300">
                ACCENTURE
              </span>
              <span className="block font-sans text-lg tracking-[0.25em] font-black text-[#BAA360] group-hover:text-gold transition-colors duration-300">
                INFRA
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {/* Home link */}
            <Link
              to="/"
              className={`group py-2 flex items-center gap-1 cursor-pointer ${
                location.pathname === "/" ? "text-gold font-bold" : "text-white/80 group-hover:text-white"
              }`}
            >
              <span className="text-sm font-sans tracking-wider uppercase transition-colors">
                Home
              </span>
            </Link>

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
                    className="flex items-center gap-1 text-sm font-sans tracking-wider uppercase text-white/80 hover:text-white transition-colors cursor-pointer"
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
                            <span className="block text-sm font-sans uppercase tracking-wider text-white group-hover:text-gold transition-colors">
                              {item.label}
                            </span>
                            <span className="block text-xs text-white/60 font-sans mt-0.5">
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
              if (item.link) {
                return (
                  <Link
                    to={item.link}
                    key={item.id}
                    className={`relative group py-2 flex items-center gap-1 cursor-pointer ${
                      location.pathname === item.link ? "text-gold font-bold" : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-sans tracking-wider uppercase transition-colors">
                      {item.label}
                    </span>
                  </Link>
                );
              }
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
                    className={`text-sm font-sans tracking-wider uppercase transition-colors ${
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
              className="hidden sm:flex px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-sm font-sans tracking-widest uppercase text-black font-semibold shadow-lg shadow-gold/10 transition-all active:scale-[0.98] cursor-pointer"
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
                <img 
                  src={logoIcon} 
                  alt="Logo Icon" 
                  className="w-10 h-10 object-contain"
                />
                <div className="text-center">
                  <span className="block font-sans text-sm tracking-[0.2em] font-normal text-white">
                    ACCENTURE
                  </span>
                  <span className="block font-sans text-sm tracking-[0.2em] font-bold text-[#BAA360]">
                    INFRA
                  </span>
                </div>
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
            <div className="px-8 py-6 flex flex-col gap-5 overflow-y-auto grow" data-lenis-prevent>
              {/* Core Verticals */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#FAFBF9]/60 block mb-2 font-bold">
                  Business Verticals
                </span>
                
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
                    <span className="block text-lg font-sans uppercase tracking-wider text-white group-hover:text-gold transition-colors">Velora Greens</span>
                    <span className="block text-xs text-neutral-300">Modern Living & Courtyard Homes in East Bangalore</span>
                  </div>
                </button>

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
                    <span className="block text-lg font-sans uppercase tracking-wider text-white group-hover:text-gold transition-colors">Legacy Township</span>
                    <span className="block text-xs text-neutral-300">105-Acre Flagship Integrated City</span>
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
                    <span className="block text-lg font-sans uppercase tracking-wider text-white group-hover:text-gold transition-colors">Hayat Greenz Resort</span>
                    <span className="block text-xs text-neutral-300">Immersive Nature and Wellness Retreat</span>
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
                    <span className="block text-lg font-sans uppercase tracking-wider text-white group-hover:text-gold transition-colors">Warehousing division</span>
                    <span className="block text-xs text-neutral-300">Industrial Logistics Land Nodes</span>
                  </div>
                </button>
              </div>

              {/* General Links */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#FAFBF9]/60 block mb-1 font-bold">
                  Information & Capital links
                </span>
                {simpleNavItems.map((item) => (
                  item.link ? (
                    <Link
                      to={item.link}
                      key={item.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-left py-1 text-lg font-sans uppercase tracking-wide text-white/90 hover:text-gold block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      id={`mobile-simple-link-${item.id}`}
                      key={item.id}
                      onClick={() => {
                        onScrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-1 text-lg font-sans uppercase tracking-wide text-white/90 hover:text-gold"
                    >
                      {item.label}
                    </button>
                  )
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
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-xs font-sans tracking-widest uppercase text-black font-bold text-center"
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
