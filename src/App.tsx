import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import RequestTracker from "./components/RequestTracker";
import SectionHeroVideo from "./components/SectionHeroVideo";
import SectionSocialProof from "./components/SectionSocialProof";
import SectionLandProduct from "./components/SectionLandProduct";
import SectionDevelopments from "./components/SectionDevelopments";
import ProjectDetailPage from "./components/ProjectDetailPage";
import SectionPhilosophy from "./components/SectionPhilosophy";
import SectionSiteVisit from "./components/SectionSiteVisit";
import SectionCallbackCTA from "./components/SectionCallbackCTA";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import StickyMobileFooter from "./components/StickyMobileFooter";
import VeloraGreensLanding from "./pages/VeloraGreensLanding";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import LegacyTownship from "./pages/LegacyTownship";
import VeloraGreens from "./pages/VeloraGreens";
import HayatGreenzResort from "./pages/HayatGreenzResort";
import AccentureGreenzWarehousing from "./pages/AccentureGreenzWarehousing";
import HomePage2 from "./pages/HomePage2";
import { LeadSubmission, SiteVisitSchedule } from "./types";
import { Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [visits, setVisits] = useState<SiteVisitSchedule[]>([]);
  const [overrideSelectedProject, setOverrideSelectedProject] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const heroImage = "/images/al_green_hero.png";

  // Handle GitHub Pages SPA routing
  useEffect(() => {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      navigate(redirect);
    }
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 150) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
      setLastScrollY(currentScrollY);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (currentScrollY / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Load client dossier items from LocalStorage on mount
  useEffect(() => {
    try {
      const storedLeads = localStorage.getItem("al_green_leads");
      const storedVisits = localStorage.getItem("al_green_visits");
      if (storedLeads) setLeads(JSON.parse(storedLeads));
      if (storedVisits) setVisits(JSON.parse(storedVisits));
    } catch (e) {
      console.warn("Could not retrieve client dossier items from local storage: ", e);
    }
  }, []);

  // Viewport scroll tracking list to set active tab link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const sections = [
        "hero",
        "philosophy",
        "developments",
        "investors",
        "visit"
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // State Mutators synchronised with LocalStorage
  const handleAddLead = (newLead: Omit<LeadSubmission, "id" | "submittedAt">) => {
    const authenticatedLead: LeadSubmission = {
      ...newLead,
      id: "ALG-LEDG-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      submittedAt: new Date().toLocaleDateString()
    };

    const updatedLeads = [authenticatedLead, ...leads];
    setLeads(updatedLeads);
    localStorage.setItem("al_green_leads", JSON.stringify(updatedLeads));
  };

  const handleScheduleVisit = (newVisit: Omit<SiteVisitSchedule, "id" | "scheduledAt" | "status">) => {
    const authenticatedVisit: SiteVisitSchedule = {
      ...newVisit,
      id: "ALG-PASS-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      scheduledAt: new Date().toLocaleDateString(),
      status: "Confirmed"
    };

    const updatedVisits = [authenticatedVisit, ...visits];
    setVisits(updatedVisits);
    localStorage.setItem("al_green_visits", JSON.stringify(updatedVisits));
  };

  const handleCancelVisit = (id: string) => {
    const filtered = visits.filter((vs) => vs.id !== id);
    setVisits(filtered);
    localStorage.setItem("al_green_visits", JSON.stringify(filtered));
  };

  const handleTriggerDevelopmentBooking = (projectName: string) => {
    setOverrideSelectedProject(projectName);
    setSelectedProjectId(null); // Close the detail page if open to jump to site visit
    handleScrollToSection("visit");
  };

  const hasActivity = leads.length > 0 || visits.length > 0;

  return (
    <Routes>
      {/* Landing Page Route */}
      <Route path="/velora-greens" element={<VeloraGreensLanding />} />
      
      {/* About Us Page */}
      <Route path="/about" element={<AboutUs />} />
      
      {/* Projects Page */}
      <Route path="/projects" element={<Projects />} />
      
      {/* Project Detail Pages */}
      <Route path="/project/legacy" element={<LegacyTownship />} />
      <Route path="/project/velora" element={<VeloraGreens />} />
      <Route path="/project/hayat" element={<HayatGreenzResort />} />
      <Route path="/project/logistics" element={<AccentureGreenzWarehousing />} />
      
      {/* Homepage V2 — Video Hero */}
      <Route path="/home2" element={<HomePage2 />} />

      {/* Main Website Route */}
      <Route path="*" element={
        <div id="root-viewport-shell" className="relative min-h-screen gradient-bg-mesh text-[#FAFBF9]">
          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gold to-[#A0814C] z-[60]"
            style={{ width: `${scrollProgress}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Sticky header navigation */}
          <Header
            onScrollToSection={handleScrollToSection}
            onOpenTracker={() => setIsTrackerOpen(true)}
            activeSection={activeSection}
            onOpenProjectDetail={setSelectedProjectId}
          />

      <main id="main-content-canvas" className="pb-24 lg:pb-0">
        <SectionHeroVideo
          onScrollToSection={handleScrollToSection}
          videoSrc="/videos/hero-bg.mp4"
          posterSrc={heroImage}
        />

        {/* Section 03: Manifesto */}
        <SectionLandProduct />

        {/* Section 06: Active Premium Developments */}
        <SectionDevelopments
          onOpenProjectDetail={setSelectedProjectId}
          onOpenSiteVisit={handleTriggerDevelopmentBooking}
        />

        {/* Section 07: Callback CTA */}
        <SectionCallbackCTA />

        {/* Section 08: Development Philosophy */}
        <SectionPhilosophy />

        {/* Section 06: Social Proof */}
        <SectionSocialProof />

        {/* Section 06: Guided Concierge Site Visit */}
        <SectionSiteVisit
          onScheduleVisit={handleScheduleVisit}
          overrideSelectedProject={overrideSelectedProject}
        />
      </main>

      {/* Section 11: Premium Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* Sticky Mobile Footer */}
      <StickyMobileFooter />

      {/* Interactive Right-Sided Client Ledger Drawer */}
      <RequestTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        leads={leads}
        visits={visits}
        onCancelVisit={handleCancelVisit}
      />

      {/* Embedded Project Overlaid Subroute Views */}
      <AnimatePresence>
        {selectedProjectId && (
          <motion.div
            id="modal-project-subroute"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#24421E]"
          >
            <ProjectDetailPage
              projectId={selectedProjectId}
              onClose={() => setSelectedProjectId(null)}
              onBookTour={handleTriggerDevelopmentBooking}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Small Icon CTA on Bottom Right - Only shows on Up Scrolls */}
      <AnimatePresence>
        {showFloatingCta && !isTrackerOpen && (
          <motion.button
            id="floating-tracker-scroll-cta"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsTrackerOpen(true)}
            className="fixed bottom-6 right-6 z-45 w-12 h-12 rounded-full bg-[#24421E]/95 border border-[#BAA360]/40 text-gold flex items-center justify-center shadow-xl hover:bg-[#132210] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Access Client Dossier"
          >
            <div className="relative flex items-center justify-center">
              <Compass className="w-5.5 h-5.5 text-gold group-hover:rotate-45 transition-transform duration-500" />
              {hasActivity && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 border border-[#FAFBF9] rounded-full animate-pulse" />
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
      } />
    </Routes>
  );
}
