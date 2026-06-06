interface SectionHeroVideoProps {
  onScrollToSection: (id: string) => void;
  videoSrc?: string;
  posterSrc?: string;
}

export default function SectionHeroVideo({
  videoSrc = "/videos/hero-bg.mp4",
  posterSrc = "/images/al_green_hero.png",
}: SectionHeroVideoProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "#0a0f07" }}
    >
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        <img src={posterSrc} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      </video>

      {/* Subtle bottom fade so the section below blends in */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0f07] to-transparent pointer-events-none" />
    </section>
  );
}
