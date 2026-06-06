import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface SectionHeroVideoProps {
  onScrollToSection: (id: string) => void;
  videoSrc?: string;
  posterSrc?: string;
}

const banners = [
  {
    id: 1,
    title: "Building Communities Beyond Generations",
    subtitle: "Integrated Townships • Luxury Residences • Hospitality • Commercial Infrastructure",
    description: "Experience premium living thoughtfully designed for elevated lifestyles",
    badge: "Flagship Development",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour",
  },
  {
    id: 2,
    title: "Velora Greens",
    subtitle: "Thoughtfully Crafted for Elevated Living",
    description: "90 Elegant Apartments • Premium Row Housing • Exclusive Villa Plots • Lifestyle Clubhouse & Curated Amenities",
    badge: "Premium Community",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour",
  },
  {
    id: 3,
    title: "Accenture Infra",
    subtitle: "Redefining Modern Living",
    description: "A premium real estate developer shaping future-ready communities through exceptional engineering, refined luxury, and thoughtfully planned urban infrastructure",
    badge: "Premium Developer",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour",
  },
];

export default function SectionHeroVideo({
  onScrollToSection,
  videoSrc = "/videos/hero-bg.mp4",
  posterSrc = "/images/al_green_hero.png",
}: SectionHeroVideoProps) {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[currentBanner];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0f07" }}
    >
      {/* ── Fixed video background ─────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterSrc}
          className="w-full h-full object-cover"
          style={{ position: "absolute", inset: 0 }}
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback: show poster image if video can't play */}
          <img src={posterSrc} alt="Hero background" className="w-full h-full object-cover" />
        </video>

        {/* Dark overlay — same Velora style */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#0a0f07]" />
        {/* Extra depth at very top to protect header */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* ── Carousel nav arrows ────────────────────────── */}
      <button
        onClick={() => setCurrentBanner((p) => (p - 1 + banners.length) % banners.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentBanner((p) => (p + 1) % banners.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dot indicators ─────────────────────────────── */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBanner(i)}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === currentBanner ? "bg-[#BAA360] w-8" : "bg-white/30 w-2 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Hero copy ──────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#BAA360]/30 rounded-full mb-8">
              <Sparkles className="w-3 h-3 text-[#BAA360]" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold">
                {banner.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-luxury-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[1.05] mb-6 drop-shadow-lg">
              {banner.title}
            </h1>

            {/* Subheadline */}
            <h2 className="font-luxury-heading-italic text-xl sm:text-2xl md:text-3xl text-[#BAA360] tracking-wide mb-8">
              {banner.subtitle}
            </h2>

            {/* Description */}
            <p className="font-sans font-light tracking-wide text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-white/70">
              {banner.description}
            </p>

            {/* CTA buttons */}
            <motion.div
              className="mt-12 flex flex-col xs:flex-row items-center gap-4 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                onClick={() => onScrollToSection("developments")}
                className="w-full xs:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#BAA360] to-[#A0814C] text-sm font-sans tracking-widest uppercase font-semibold text-black shadow-lg shadow-[#BAA360]/20 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banner.cta}
              </motion.button>

              <motion.button
                onClick={() => onScrollToSection("visit")}
                className="w-full xs:w-auto px-8 py-4 rounded-full border-2 border-[#BAA360] text-sm font-sans tracking-widest uppercase font-semibold text-[#BAA360] hover:bg-[#BAA360] hover:text-black transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banner.ctaSecondary}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Scroll prompt ──────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.button
          onClick={() => onScrollToSection("philosophy")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-neutral-500 hover:text-[#BAA360] transition-colors flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#BAA360]" />
        </motion.button>
      </div>
    </section>
  );
}
