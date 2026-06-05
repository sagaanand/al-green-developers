import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sparkles, Compass, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal, TextReveal } from "./ScrollReveal";
import { useState, useEffect } from "react";

interface SectionHeroProps {
  onScrollToSection: (id: string) => void;
  heroImage: string;
}

const banners = [
  {
    id: 3,
    title: "Building Communities Beyond Generations",
    subtitle: "Integrated Townships • Luxury Residences • Hospitality • Commercial Infrastructure",
    description: "Experience premium living thoughtfully designed for elevated lifestyles",
    badge: "Flagship Development",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour"
  },
  {
    id: 2,
    title: "Velora Greens",
    subtitle: "Thoughtfully Crafted for Elevated Living",
    description: "90 Elegant Apartments • Premium Row Housing • Exclusive Villa Plots • Lifestyle Clubhouse & Curated Amenities",
    badge: "Premium Community",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour"
  },
  {
    id: 1,
    title: "Accenture Infra",
    subtitle: "Redefining Modern Living",
    description: "A premium real estate developer shaping future-ready communities through exceptional engineering, refined luxury, and thoughtfully planned urban infrastructure",
    badge: "Premium Developer",
    cta: "Explore Projects",
    ctaSecondary: "Schedule Private Tour"
  }
];

export default function SectionHero({ onScrollToSection, heroImage }: SectionHeroProps) {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const banner = banners[currentBanner];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden section-gradient-hero"
    >
      {/* Background Cinematic Drone Video falling back to High-Res Image */}
      <motion.div
        id="hero-media-wrapper"
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <video
          id="hero-background-video"
          src="https://assets.mixkit.co/videos/preview/mixkit-flight-over-dense-green-forest-trees-under-fog-42295-large.mp4"
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        
        {/* Reduced overlay for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/15 to-black/20 z-10" />

        {/* Abstract design: Subtle thin technical alignment line */}
        <div className="absolute left-[8%] top-0 bottom-0 w-[0.5px] bg-white/[0.05] z-10 hidden md:block" />
        <div className="absolute right-[8%] top-0 bottom-0 w-[0.5px] bg-white/[0.05] z-10 hidden md:block" />
      </motion.div>

      {/* Carousel Navigation */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        <button
          onClick={prevBanner}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        <button
          onClick={nextBanner}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentBanner ? "bg-gold w-8" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Main Copy Elements */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Abstract Gold Pill */}
            <div
              id="hero-badge"
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-gold/30 rounded-full mb-8"
            >
              <Sparkles className="w-3 h-3 text-gold" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold">
                {banner.badge}
              </span>
            </div>

            {/* Massive Headline clamp */}
            <h1
              id="hero-headline"
              className="font-luxury-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[1.05] mb-6"
            >
              {banner.title}
            </h1>

            {/* Subheadline */}
            <h2
              id="hero-subheadline"
              className="font-luxury-heading-italic text-xl sm:text-2xl md:text-3xl text-[#BAA360] tracking-wide mb-8"
            >
              {banner.subtitle}
            </h2>

            {/* Description */}
            <div
              id="hero-description"
              className="mt-8 font-sans font-light tracking-wide text-sm sm:text-base max-w-4xl mx-auto leading-relaxed" style={{ color: '#D1D5DB' }}
            >
              {banner.description}
            </div>

            {/* Action Triggers */}
            <motion.div
              id="hero-cta-group"
              className="mt-12 flex flex-col xs:flex-row items-center gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                id="hero-cta-primary"
                onClick={() => onScrollToSection("developments")}
                className="w-full xs:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-sm font-sans tracking-widest uppercase font-semibold text-black hover:opacity-95 shadow-lg shadow-gold/20 transition-all active:scale-[0.98] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banner.cta}
              </motion.button>

              <motion.button
                id="hero-cta-secondary"
                onClick={() => onScrollToSection("visit")}
                className="w-full xs:w-auto px-8 py-4 rounded-full border-2 border-gold text-sm font-sans tracking-widest uppercase font-semibold text-gold hover:bg-gold hover:text-black transition-all active:scale-[0.98] cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {banner.ctaSecondary}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Down Chevron trigger */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.button
          id="hero-scroll-prompt"
          onClick={() => onScrollToSection("philosophy")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-neutral-500 hover:text-gold transition-colors flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.button>
      </div>
    </section>
  );
}
