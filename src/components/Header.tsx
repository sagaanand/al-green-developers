import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Sparkles, FolderKanban, FileText, CalendarCheck, User, X, Menu, ChevronDown, Waves, Warehouse } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoNewIcon from "../assets/logo-new-icon.png";
import logoNewInfra from "../assets/logo-new-infra.png";

interface HeaderProps {
  onScrollToSection: (id: string) => void;
  onOpenTracker: () => void;
  activeSection: string;
  onOpenProjectDetail?: (id: string) => void;
  onDownloadBrochure?: () => void;
}

export default function Header({ onScrollToSection, onOpenTracker, activeSection, onOpenProjectDetail, onDownloadBrochure }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomepage = location.pathname === "/" || location.pathname === "";
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleVisitClick = () => {
    setActiveDropdown(null);
    if (location.pathname === "/" || location.pathname === "") {
      onScrollToSection("visit");
    } else {
      navigate("/#visit");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { id: "contact", label: "Contact", icon: CalendarCheck, link: "/contact" }
  ];

  const handleDropdownItemClick = (item: { label: string; desc: string; id?: string; scrollId?: string }) => {
    setActiveDropdown(null);
    if (item.id) {
      navigate(`/project/${item.id}`);
    } else if (item.scrollId) {
      if (location.pathname === "/" || location.pathname === "") {
        onScrollToSection(item.scrollId);
      } else {
        navigate(`/#${item.scrollId}`);
      }
    }
  };

  return (
    <>
      <header
        id="main-nav-header"
        className="fixed top-0 left-0 w-full z-[99999] transform translate-z-0 will-change-transform py-3 transition-all duration-300"
        style={{
          background: 'transparent',
          backdropFilter: 'none',
          borderBottom: 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              if (location.pathname === "/" || location.pathname === "") {
                onScrollToSection("hero");
              } else {
                navigate("/");
              }
              setActiveDropdown(null);
            }}
            className={`flex items-center gap-3 cursor-pointer group ${
              isHomepage ? 'absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : ''
            }`}
          >
            <img 
              src={logoNewIcon} 
              alt="Logo Icon" 
              className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <img 
              src={logoNewInfra} 
              alt="Infra Logo" 
              className={`h-6 w-auto object-contain group-hover:scale-105 transition-transform duration-300 ${isScrolled ? '' : 'invert'}`}
            />
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className={`${isHomepage ? "hidden" : "hidden lg:flex"} items-center gap-6`}>
            {/* Home link */}
            <Link
              to="/"
              className={`group py-2 flex items-center gap-1 cursor-pointer relative ${
                location.pathname === "/" ? "text-[#163A2D] font-bold" : "text-[#163A2D]/80 hover:text-[#163A2D] hover:font-medium"
              }`}
            >
              <span className="text-sm font-sans tracking-wider uppercase transition-colors">
                Home
              </span>
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C6A96B]" />
              )}
            </Link>

            {/* Dropdown triggers */}
            {Object.entries(navDropdowns).map(([key, value]) => {
              const isHovered = activeDropdown === key;
              const isDropdownActive = (key === 'developments' && location.pathname.startsWith('/project/'));
              return (
                <div
                  key={key}
                  className={`relative py-2 group ${isHovered ? 'z-[100000]' : 'z-10'}`}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    id={`nav-dropdown-trigger-${key}`}
                    className={`flex items-center gap-1 text-sm font-sans tracking-wider uppercase transition-colors cursor-pointer relative ${
                      isDropdownActive ? "text-[#163A2D] font-bold" : "text-[#163A2D]/80 hover:text-[#163A2D] hover:font-medium"
                    }`}
                  >
                    <span>{value.label}</span>
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-[#163A2D]/60" />
                    {isDropdownActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C6A96B]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        id={`nav-dropdown-menu-${key}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-64 z-[100000] transform translate-z-0"
                      >
                        <div className="p-3 rounded-[15px] shadow-2xl bg-white border border-neutral-200/80 space-y-1">
                          {value.items.map((item, idx) => (
                            <button
                              id={`dropdown-item-${key}-${idx}`}
                              key={idx}
                              onClick={() => handleDropdownItemClick(item)}
                              className="w-full text-left p-2 rounded-lg border border-transparent transition-all cursor-pointer group hover:bg-[#F8FAF8]"
                            >
                              <span className="block text-sm font-sans uppercase tracking-wider text-neutral-800 group-hover:text-[#C6A96B] transition-colors">
                                {item.label}
                              </span>
                              <span className="block text-xs font-sans mt-0.5 text-neutral-500">
                                {item.desc}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Simple navigation links */}
            {simpleNavItems.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  to={item.link}
                  key={item.id}
                  className={`relative group py-2 flex items-center gap-1 cursor-pointer ${
                    isActive ? "text-[#163A2D] font-bold" : "text-[#163A2D]/80 hover:text-[#163A2D] hover:font-medium"
                  }`}
                >
                  <span className="text-sm font-sans tracking-wider uppercase transition-colors">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C6A96B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons & Portal Access */}
          <div className="flex items-center gap-3 ml-auto z-10">
            {!isHomepage && onDownloadBrochure && (
              <button
                onClick={onDownloadBrochure}
                className="hidden md:flex px-4 py-2 rounded-full border border-[#163A2D]/35 hover:border-[#163A2D] hover:bg-[#163A2D]/5 text-[#163A2D] text-xs font-sans tracking-widest uppercase font-semibold transition-all active:scale-[0.98] cursor-pointer focus-premium"
                aria-label="Download Project Brochure"
              >
                Brochure
              </button>
            )}
            {!isHomepage && (
              <button
                id="header-hero-cta"
                onClick={handleVisitClick}
                className="hidden sm:flex px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-sm font-sans tracking-widest uppercase text-black font-semibold shadow-lg shadow-gold/10 transition-all active:scale-[0.98] cursor-pointer focus-premium"
              >
                Private Tour
              </button>
            )}

            {/* Mobile Open Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`${isHomepage ? "flex" : "lg:hidden flex"} p-2 text-[#163A2D] hover:text-[#C6A96B] transition-colors`}
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
            className="fixed inset-0 bg-white/98 text-neutral-800 backdrop-blur-md z-50 flex flex-col justify-between"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname === "/" || location.pathname === "") {
                    onScrollToSection("hero");
                  } else {
                    navigate("/");
                  }
                }}
                className="flex items-center gap-2 cursor-pointer text-left"
              >
                <img 
                  src={logoNewIcon} 
                  alt="Logo Icon" 
                  className="h-8 w-auto object-contain"
                />
                <img 
                  src={logoNewInfra} 
                  alt="Infra Logo" 
                  className="h-4 w-auto object-contain invert"
                />
              </button>
              <button
                id="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Links list */}
            <div className="px-8 py-6 flex flex-col gap-5 overflow-y-auto grow" data-lenis-prevent>
              {/* Core Verticals */}
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-neutral-500 block mb-2 font-bold">
                  Business Verticals
                </span>
                
                {/* Velora */}
                <button
                  id="mobile-nav-velora"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/project/velora");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-neutral-100 group"
                >
                  <div>
                    <span className="block text-lg font-sans uppercase tracking-wider text-neutral-800 group-hover:text-gold transition-colors">Velora Greens</span>
                    <span className="block text-xs text-neutral-500">Modern Living & Courtyard Homes in East Bangalore</span>
                  </div>
                </button>

                {/* Legacy */}
                <button
                  id="mobile-nav-legacy"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/project/legacy");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-neutral-100 group"
                >
                  <div>
                    <span className="block text-lg font-sans uppercase tracking-wider text-neutral-800 group-hover:text-gold transition-colors">Legacy Township</span>
                    <span className="block text-xs text-neutral-500">105-Acre Flagship Integrated City</span>
                  </div>
                </button>

                {/* Hayat */}
                <button
                  id="mobile-nav-hayat"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/project/hayat");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-neutral-100 group"
                >
                  <div>
                    <span className="block text-lg font-sans uppercase tracking-wider text-neutral-800 group-hover:text-gold transition-colors">Hayat Greenz Resort</span>
                    <span className="block text-xs text-neutral-500">Immersive Nature and Wellness Retreat</span>
                  </div>
                </button>

                {/* Logistics */}
                <button
                  id="mobile-nav-logistics"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigate("/project/logistics");
                  }}
                  className="w-full text-left flex justify-between items-center py-2 border-b border-neutral-100 group"
                >
                  <div>
                    <span className="block text-lg font-sans uppercase tracking-wider text-neutral-800 group-hover:text-gold transition-colors">Warehousing division</span>
                    <span className="block text-xs text-neutral-500">Industrial Logistics Land Nodes</span>
                  </div>
                </button>
              </div>

              {/* General Links */}
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-neutral-500 block mb-1 font-bold">
                  Information & Capital links
                </span>
                {simpleNavItems.map((item) => (
                  item.link ? (
                    <Link
                      to={item.link}
                      key={item.id}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full text-left py-1 text-lg font-sans uppercase tracking-wide text-neutral-750 hover:text-gold block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      id={`mobile-simple-link-${item.id}`}
                      key={item.id}
                      onClick={handleVisitClick}
                      className="w-full text-left py-1 text-lg font-sans uppercase tracking-wide text-neutral-750 hover:text-gold"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="px-6 py-8 border-t border-neutral-200 bg-neutral-50 flex flex-col gap-4">
              <button
                id="mobile-drawer-cta-btn"
                onClick={() => {
                  handleVisitClick();
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
