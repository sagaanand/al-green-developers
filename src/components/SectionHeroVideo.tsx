import { useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Download, ArrowRight, ShieldCheck, Landmark, Calendar, FileCheck } from "lucide-react";
import { trackAnalyticsEvent } from "../utils/analytics";

interface SectionHeroVideoProps {
  onScrollToSection: (id: string) => void;
  onDownloadBrochure?: () => void;
  videoSrc?: string;
  posterSrc?: string;
}

export default function SectionHeroVideo({
  onScrollToSection,
  onDownloadBrochure,
  videoSrc = "/videos/hero-bg.mp4",
  posterSrc = "/images/al_green_hero.png",
}: SectionHeroVideoProps) {
  // Preload hero poster image for LCP optimization
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = posterSrc;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [posterSrc]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#163A2D" }}
    >
      {/* Video Background */}
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videoSrc} type="video/mp4" />
        <img src={posterSrc} alt="Hero Backdrop" className="absolute inset-0 w-full h-full object-cover z-0" />
      </video>



      {/* Ambient Gold Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C6A96B]/15 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2B5D4C]/30 rounded-full blur-[150px] pointer-events-none z-10" />



      {/* Bouncing Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-neutral-400 font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#C6A96B]" />
      </motion.div>

      {/* Bottom organic fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

