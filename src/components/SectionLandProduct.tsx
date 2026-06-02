import { motion } from "motion/react";
import { Sparkles, Trophy, Gem, Shield, Star, CheckSquare } from "lucide-react";

export default function SectionLandProduct() {
  const brandCovenants = [
    {
      wrong: "Traditional builders focus only on selling land.",
      right: "We carefully plan every aspect of community living for the long term.",
      icon: Gem
    },
    {
      wrong: "Many projects promise amenities that are never delivered.",
      right: "We build communities designed to serve generations of families.",
      icon: Shield
    },
    {
      wrong: "Standard developers prioritize quantity over quality.",
      right: "We focus on legal clarity, sustainable design, and thoughtful planning.",
      icon: Sparkles
    }
  ];

  return (
    <section
      id="philosophy"
      className="relative w-full gradient-bg-alt text-[#FAFBF9] py-24 sm:py-36 overflow-hidden font-sans border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Sub-header */}
        <motion.div 
          id="land-philosophy-header" 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl text-left border-l-2 border-gold pl-6 mb-16 sm:mb-24"
        >
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block mb-2 font-bold animate-pulse">
            01 / COVENANT DEVELOPER POSITIONING
          </span>
          <h2 className="font-display font-light text-2xl sm:text-4xl tracking-tight text-white/90 uppercase leading-[1.1]">
            WE OPERATE OUTSIDE OF TRADITIONAL SPECULATIVE BOUNDARIES.
          </h2>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-20 sm:mb-28"
        >
          <h3
            id="manifesto-huge-headline"
            className="font-display font-bold tracking-tight leading-[0.95] text-left uppercase text-white"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 6.5rem)" }}
          >
            WE DON’T BUILD PROJECTS. <br />
            <span className="text-neutral-400 font-light">WE BUILD DESTINATIONS.</span>
          </h3>
          <p className="mt-8 max-w-3xl text-neutral-300 font-sans font-light text-sm sm:text-base tracking-wide leading-relaxed">
            When you invest in a home with us, you're not just buying property. You're securing a future for your family. We build communities with verified legal titles, quality infrastructure, and thoughtful design that lasts for generations.
          </p>
        </motion.div>

        {/* Contrast Grid (Conventional vs Al Green) */}
        <div id="manifesto-contrast-grid" className="max-w-5xl space-y-12 sm:space-y-16">
          {brandCovenants.map((line, index) => {
            const Icon = line.icon;
            return (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center border-t border-white/10 pt-10 group"
              >
                {/* Metric/Index */}
                <div className="lg:col-span-1 text-xs font-mono font-medium text-neutral-300 group-hover:text-gold transition-colors">
                  [0{index + 1}]
                </div>

                {/* Traditional Perspective */}
                <div className="lg:col-span-4">
                  <span className="block text-[9px] uppercase font-mono tracking-widest text-white/40 mb-1 font-bold">CONVENTIONAL DEVELOPERS</span>
                  <span className="text-sm sm:text-base font-normal text-white/40 line-through tracking-tight block">
                    {line.wrong}
                  </span>
                </div>

                {/* Separator / Icon */}
                <div className="hidden lg:flex lg:col-span-1 justify-center">
                  <Icon className="w-5 h-5 text-gold shrink-0 scale-105" />
                </div>

                {/* Al Green standard */}
                <div className="lg:col-span-6 pl-0 lg:pl-6 border-l-0 lg:border-l lg:border-[#BAA360]/30">
                  <span className="block text-[9px] uppercase font-mono tracking-widest text-gold font-extrabold mb-1">THE ACCENTURE INFRA STANDARD</span>
                  <span className="text-base sm:text-xl md:text-2xl font-display text-white font-bold tracking-tight block leading-tight">
                    {line.right}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* THE FIDUCIARY TRUST CARD */}
        <div className="mt-24 p-8 sm:p-12 rounded-xl bg-gradient-to-br from-[#1E3B18] to-[#12240E] text-white border border-[#24421E]/25 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-gold font-mono text-[9px] tracking-[0.2em] uppercase font-bold block mb-2">OUR COMMITMENT TO YOU</span>
            <h4 className="text-2xl font-display font-medium uppercase tracking-wide text-white">SECURED LEGAL TITLES</h4>
            <p className="mt-4 text-xs sm:text-sm text-green-100/80 font-sans font-light leading-relaxed">
              We stand behind every property we sell. Every plot comes with verified legal titles, DTCP-approved layouts, environmental clearances, and complete documentation for your peace of mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
              <span className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-green-50">✓ 40-YEAR MUTATION VERIFICATION</span>
              <span className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-green-50">✓ DTCP LAYOUT COMPLIANT</span>
              <span className="bg-[#BAA360]/30 border border-[#BAA360]/45 rounded px-3 py-1.5 text-[#FFE0A3] flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-gold inline fill-gold" />
                RERA REGISTERED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
