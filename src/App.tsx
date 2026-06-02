import { useState, useEffect } from "react";
import Header from "./components/Header";
import RequestTracker from "./components/RequestTracker";
import SectionHero from "./components/SectionHero";
import SectionLandProduct from "./components/SectionLandProduct";
import SectionDevelopments from "./components/SectionDevelopments";
import ProjectDetailPage from "./components/ProjectDetailPage";
import SectionPhilosophy from "./components/SectionPhilosophy";
import SectionTimeline from "./components/SectionTimeline";
import SectionInvestorCenter from "./components/SectionInvestorCenter";
import SectionSiteVisit from "./components/SectionSiteVisit";
import SectionTestimonials from "./components/SectionTestimonials";
import Footer from "./components/Footer";
import { LeadSubmission, SiteVisitSchedule } from "./types";
import { Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [visits, setVisits] = useState<SiteVisitSchedule[]>([]);
  const [overrideSelectedProject, setOverrideSelectedProject] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const heroImage = "/src/assets/images/al_green_hero_1780310125091.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 150) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
      setLastScrollY(currentScrollY);
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
        "intelligence",
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
    <div id="root-viewport-shell" className="relative min-h-screen gradient-bg-mesh text-[#FAFBF9] select-none">
      {/* Sticky header navigation */}
      <Header
        onScrollToSection={handleScrollToSection}
        onOpenTracker={() => setIsTrackerOpen(true)}
        activeSection={activeSection}
        onOpenProjectDetail={setSelectedProjectId}
      />

      {/* Main interactive section segments */}
      <main id="main-content-canvas" className="pb-24 lg:pb-0">
        {/* Section 01: Hero */}
        <SectionHero onScrollToSection={handleScrollToSection} heroImage={heroImage} />

        {/* Section 02: Manifesto */}
        <SectionLandProduct />

        {/* Section 03: Active Premium Developments */}
        <SectionDevelopments 
          onOpenProjectDetail={setSelectedProjectId}
          onOpenSiteVisit={handleTriggerDevelopmentBooking} 
        />

        {/* Section 06: Development Philosophy */}
        <SectionPhilosophy />

        {/* Section 07: Development Steps / Transparency Vertical Timeline */}
        <SectionTimeline />

        {/* Section 08: Lead Delivery Core */}
        <SectionInvestorCenter onAddLead={handleAddLead} />

        {/* Section 09: Guided Concierge Site Visit */}
        <SectionSiteVisit
          onScheduleVisit={handleScheduleVisit}
          overrideSelectedProject={overrideSelectedProject}
        />

        {/* Section 10: Cinematic Testimonies */}
        <SectionTestimonials />
      </main>

      {/* Section 11: Premium Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

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
  );
}
