import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass } from "lucide-react";
import Header from "../components/Header";
import SectionHeroVideo from "../components/SectionHeroVideo";
import SectionCredibilityMetrics from "../components/SectionCredibilityMetrics";
import SectionTrustSignals from "../components/SectionTrustSignals";
import SectionTrustArchitecture from "../components/SectionTrustArchitecture";
import SectionSocialProof from "../components/SectionSocialProof";
import SectionLandProduct from "../components/SectionLandProduct";
import SectionDevelopments from "../components/SectionDevelopments";
import ProjectDetailPage from "../components/ProjectDetailPage";
import SectionPhilosophy from "../components/SectionPhilosophy";
import SectionTimeline from "../components/SectionTimeline";
import SectionSiteVisit from "../components/SectionSiteVisit";
import SectionCallbackCTA from "../components/SectionCallbackCTA";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import StickyMobileFooter from "../components/StickyMobileFooter";
import RequestTracker from "../components/RequestTracker";
import { LeadSubmission, SiteVisitSchedule } from "../types";

export default function HomePage2() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [visits, setVisits] = useState<SiteVisitSchedule[]>([]);
  const [overrideSelectedProject, setOverrideSelectedProject] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ── Floating CTA + scroll progress ──────────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowFloatingCta(currentScrollY < lastScrollY && currentScrollY > 150);
      setLastScrollY(currentScrollY);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(Math.min((currentScrollY / docHeight) * 100, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ── Active section tracking ──────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY + window.innerHeight / 3;
      const ids = ["hero", "philosophy", "developments", "timeline", "investors", "visit"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Persist leads / visits in localStorage ───────────
  useEffect(() => {
    try {
      const s = localStorage.getItem("al_green_leads");
      const v = localStorage.getItem("al_green_visits");
      if (s) setLeads(JSON.parse(s));
      if (v) setVisits(JSON.parse(v));
    } catch {}
  }, []);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  const handleAddLead = (newLead: Omit<LeadSubmission, "id" | "submittedAt">) => {
    const lead: LeadSubmission = {
      ...newLead,
      id: "ALG-LEDG-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      submittedAt: new Date().toLocaleDateString(),
    };
    const updated = [lead, ...leads];
    setLeads(updated);
    localStorage.setItem("al_green_leads", JSON.stringify(updated));
  };

  const handleScheduleVisit = (newVisit: Omit<SiteVisitSchedule, "id" | "scheduledAt" | "status">) => {
    const visit: SiteVisitSchedule = {
      ...newVisit,
      id: "ALG-PASS-" + Math.random().toString(36).substring(2, 10).toUpperCase(),
      scheduledAt: new Date().toLocaleDateString(),
      status: "Confirmed",
    };
    const updated = [visit, ...visits];
    setVisits(updated);
    localStorage.setItem("al_green_visits", JSON.stringify(updated));
  };

  const handleCancelVisit = (id: string) => {
    const filtered = visits.filter((v) => v.id !== id);
    setVisits(filtered);
    localStorage.setItem("al_green_visits", JSON.stringify(filtered));
  };

  const handleTriggerDevelopmentBooking = (projectName: string) => {
    setOverrideSelectedProject(projectName);
    setSelectedProjectId(null);
    handleScrollToSection("visit");
  };

  const hasActivity = leads.length > 0 || visits.length > 0;

  return (
    <div className="relative min-h-screen gradient-bg-mesh text-[#FAFBF9]">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#BAA360] to-[#A0814C] z-[60]"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Header */}
      <Header
        onScrollToSection={handleScrollToSection}
        onOpenTracker={() => setIsTrackerOpen(true)}
        activeSection={activeSection}
        onOpenProjectDetail={setSelectedProjectId}
      />

      {/* ── VIDEO HERO ── drop your video at /videos/hero-bg.mp4 ── */}
      <main className="pb-24 lg:pb-0">
        <SectionHeroVideo
          onScrollToSection={handleScrollToSection}
          videoSrc="/videos/hero-bg.mp4"
          posterSrc="/images/al_green_hero.png"
        />

        <SectionCredibilityMetrics />
        <SectionLandProduct />
        <SectionTrustSignals />
        <SectionTrustArchitecture />
        <SectionSocialProof />

        <SectionDevelopments
          onOpenProjectDetail={setSelectedProjectId}
          onOpenSiteVisit={handleTriggerDevelopmentBooking}
        />

        <SectionCallbackCTA />
        <SectionPhilosophy />
        <SectionTimeline />

        <SectionSiteVisit
          onScheduleVisit={handleScheduleVisit}
          overrideSelectedProject={overrideSelectedProject}
        />
      </main>

      <Footer onScrollToSection={handleScrollToSection} />
      <FloatingCTA />
      <StickyMobileFooter />

      {/* Request tracker drawer */}
      <RequestTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        leads={leads}
        visits={visits}
        onCancelVisit={handleCancelVisit}
      />

      {/* Project detail modal */}
      <AnimatePresence>
        {selectedProjectId && (
          <motion.div
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

      {/* Floating compass CTA */}
      <AnimatePresence>
        {showFloatingCta && !isTrackerOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsTrackerOpen(true)}
            className="fixed bottom-6 right-6 z-45 w-12 h-12 rounded-full bg-[#24421E]/95 border border-[#BAA360]/40 flex items-center justify-center shadow-xl hover:bg-[#132210] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Access Client Dossier"
          >
            <div className="relative flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#BAA360] group-hover:rotate-45 transition-transform duration-500" />
              {hasActivity && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 border border-white rounded-full animate-pulse" />
              )}
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
