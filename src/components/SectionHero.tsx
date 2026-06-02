import { motion } from "motion/react";
import { ChevronDown, Sparkles, Compass } from "lucide-react";
import { ScrollReveal, TextReveal } from "./ScrollReveal";

interface SectionHeroProps {
  onScrollToSection: (id: string) => void;
  heroImage: string;
}

export default function SectionHero({ onScrollToSection, heroImage }: SectionHeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden section-gradient-hero"
    >
      {/* Background Cinematic Drone Video falling back to High-Res Image */}
      <div id="hero-media-wrapper" className="absolute inset-0 z-0">
        <video
          id="hero-background-video"
          src="https://assets.mixkit.co/videos/preview/mixkit-flight-over-dense-green-forest-trees-under-fog-42295-large.mp4"
          poster={heroImage}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
        />
        
        {/* Soft elegant gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24421E] via-black/40 to-black/80 z-10" />
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(36,66,30,0.2)_100%) z-10" />

        {/* Abstract design: Subtle thin technical alignment line */}
        <div className="absolute left-[8%] top-0 bottom-0 w-[0.5px] bg-white/[0.05] z-10 hidden md:block" />
        <div className="absolute right-[8%] top-0 bottom-0 w-[0.5px] bg-white/[0.05] z-10 hidden md:block" />
      </div>

      {/* Main Copy Elements */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        {/* Abstract Gold Pill */}
        <ScrollReveal delay={200}>
          <div
            id="hero-badge"
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-gold/25 rounded-full mb-8 backdrop-blur"
          >
            <Sparkles className="w-3 h-3 text-gold" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-white uppercase font-bold">
              Pristine Botanical Land Reserve
            </span>
          </div>
        </ScrollReveal>

        {/* Massive Headline clamp */}
        <ScrollReveal delay={400}>
          <div
            id="hero-header-group"
            className="space-y-4"
          >
            <TextReveal delay={500}>
              <h1
                id="hero-main-title"
                className="font-display font-extrabold text-white tracking-[0.03em] leading-[1.05] uppercase max-w-5xl mx-auto"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
              >
                Eco-Luxury Sanctuaries In Bangalore East
              </h1>
            </TextReveal>
            <TextReveal delay={600}>
              <p
                id="hero-subtitle"
                className="font-serif italic text-[#BAA360] font-light tracking-wide block leading-tight text-lg sm:text-2xl max-w-3xl mx-auto pt-2"
              >
                Where pristine forestry meets secure institutional real estate.
              </p>
            </TextReveal>
          </div>
        </ScrollReveal>

        {/* Sub-headline */}
        <ScrollReveal delay={800}>
          <p
            id="hero-description"
            className="mt-8 text-neutral-300 font-sans font-light tracking-wide text-xs sm:text-sm uppercase max-w-4xl mx-auto leading-relaxed"
          >
            Premium master-planned estates, low-density residences, and eco-sensitive resort living integrated seamlessly into raw, protected nature corridors.
          </p>
        </ScrollReveal>

        {/* Action Triggers */}
        <ScrollReveal delay={1000}>
          <div
            id="hero-cta-group"
            className="mt-12 flex flex-col xs:flex-row items-center gap-4 justify-center"
          >
            <button
              id="hero-cta-opportunities"
              onClick={() => onScrollToSection("developments")}
              className="w-full xs:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold to-[#A0814C] text-[11px] font-mono tracking-widest uppercase font-bold text-black hover:opacity-95 shadow-lg shadow-gold/20 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 animate-pulse"
            >
              <span>Explore Developments</span>
            </button>

            <button
              id="hero-cta-intelligence"
              onClick={() => onScrollToSection("visit")}
              className="w-full xs:w-auto px-8 py-4 rounded-full border border-white/20 hover:border-gold bg-[#0A0A0A]/85 text-[11px] font-mono tracking-widest uppercase text-white transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 hover:bg-gold/5"
            >
              <Compass className="w-4 h-4 text-gold" />
              <span>Schedule Visit</span>
            </button>
          </div>
        </ScrollReveal>
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
