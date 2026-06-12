import { motion } from "motion/react";
import { Sparkles, Gem, Shield, Trophy, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import TypingHeader from "../components/TypingHeader";

// Import premium pictorial assets
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";
import luxuryVillaAmbient from "../assets/images/luxury_villa_ambient.png";
import landIntelligence from "../assets/images/land_intelligence_1780310163369.png";
import alGreenLegacy from "../assets/images/al_green_legacy_1780310147200.png";
import topographicOverlay from "../assets/images/topographic_overlay.png";
import mdPortrait from "../assets/images/managing_director_portrait.png";

export default function AboutUs() {
  const coreValues = [
    {
      title: "Excellence in Design & Engineering",
      desc: "Creating structural works that stand the test of time using climate-responsive engineering.",
      icon: Gem
    },
    {
      title: "Transparent Business Practices",
      desc: "100% mutation-clear parent deeds, DTCP approvals, and verified titles.",
      icon: Shield
    },
    {
      title: "Customer-Centric Approach",
      desc: "Tailored spatial layouts and dedicated property management portfolios.",
      icon: Sparkles
    },
    {
      title: "Sustainable Development",
      desc: "Native botany nurseries, zero carbon setups, and heavy rainwater harvesting systems.",
      icon: Gem
    },
    {
      title: "Timely Delivery & Quality Assurance",
      desc: "Stringent timeline controls with pre-tested structural standards.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F0A] text-white font-sans overflow-hidden">
      {/* Top Navbar */}
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* 1. Hero Section with Parallax Background */}
      <section className="relative min-h-[75vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={luxuryVillaAmbient} 
            alt="Luxury Villa Backdrop" 
            className="w-full h-full object-cover scale-105 opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0A]/90 via-[#0A0F0A]/50 to-[#0A0F0A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl max-w-3xl mx-auto shadow-2xl"
          >
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block mb-3">
              ABOUT
            </span>
            <TypingHeader
              className="font-display font-semibold text-3xl sm:text-5xl tracking-wide uppercase mb-6 leading-tight text-white"
              segments={[
                { text: "ACCENTURE INFRA", className: "text-gold" }
              ]}
            />
            <div className="h-[2px] w-20 bg-gold mx-auto mb-6" />
            <p className="text-lg text-neutral-300 font-mono font-light leading-relaxed max-w-xl mx-auto">
              Real Estate is more than Construction. It is the physical preservation of your family's future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview with Split Pictorial Layout */}
      <section className="py-24 sm:py-32 bg-[#0A0F0A] relative border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                WHO WE ARE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
                ENDURING LIFESTYLES & <span className="text-gold">THRIVING COMMUNITIES</span>
              </h2>
              <div className="h-[2px] w-24 bg-gold" />
              <div className="space-y-6 text-neutral-300 font-sans font-light text-base leading-relaxed">
                <p>
                  At Accenture Infra, we believe that real estate is about more than just buildings. It's about creating spaces where families grow, communities thrive, and memories are made. Our vision is to redefine quality standards in modern real estate and construction.
                </p>
                <p>
                  Founded with a commitment to engineering excellence and environmental stewardship, we have developed over 105 acres of premium land across Bangalore East. Our projects integrate cutting-edge infrastructure with nature-centric design, creating communities that thrive for generations.
                </p>
              </div>
              <div className="p-5 bg-white/[0.02] border-l-2 border-gold rounded-r-xl font-mono text-xs text-gold/90 max-w-2xl">
                "Our designs reject standardized urban clutter. We protect terrain elevation, natural waterways, and soil vitality to lock in inherent asset health."
              </div>
            </div>

            {/* Right Pictorial Column */}
            <div className="lg:col-span-5 relative">
              {/* Background abstract mesh */}
              <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl pointer-events-none" />
              
              {/* Framed Graphic Representation */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                <img 
                  src={landIntelligence} 
                  alt="Land Development Intelligence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Visual topographic lines decoration */}
                <div 
                  className="absolute inset-0 z-10 bg-cover opacity-20 mix-blend-overlay pointer-events-none"
                  style={{ backgroundImage: `url(${topographicOverlay})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Interactive Sticker Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-mono text-gold uppercase tracking-wider font-bold">SPATIAL INTEL STATUS</span>
                  <span className="block text-[11px] text-neutral-300 font-mono font-normal mt-1 leading-normal">
                    Satellite land survey mutation pre-cleared for direct physical plotting.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Message from Our Managing Director with Split Pictorial Layout */}
      <section className="py-24 sm:py-32 bg-[#0E150E] relative border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Column (5 Columns): Portrait Frame */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gold/5 rounded-3xl blur-3xl pointer-events-none" />
              
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                <img 
                  src={mdPortrait} 
                  alt="Ashfak Ahmed, Managing Director" 
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Sticker Info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl text-left">
                  <span className="block text-sm font-display text-gold uppercase tracking-wider font-bold">Ashfak Ahmed</span>
                  <span className="block text-[11px] text-neutral-300 font-mono font-normal mt-0.5 uppercase tracking-widest">
                    Managing Director // Accenture Infra
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 Columns): MD Message content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                LEADERSHIP NOTE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
                A MESSAGE FROM OUR <br />
                <span className="text-gold">MANAGING DIRECTOR</span>
              </h2>
              <div className="h-[2px] w-24 bg-gold mb-6" />
              
              <div className="space-y-4 text-neutral-300 font-sans font-light text-sm sm:text-base leading-relaxed">
                <p>
                  At Accenture Infra, we believe that every development begins with a dream—a dream of a better home, a stronger community, and a brighter future.
                </p>
                <p>
                  Our journey has been built on a simple yet powerful foundation: <strong>trust</strong>. Trust from families who choose us to build their homes. Trust from investors who believe in our vision. And trust from partners who share our commitment to excellence.
                </p>
                <p>
                  In an industry that is constantly evolving, our purpose remains unchanged—to create thoughtfully planned communities that enrich lives and stand the test of time. We are not merely constructing buildings; we are shaping environments where people can connect, grow, and create lasting memories.
                </p>
                
                {/* Highlight Quote Block */}
                <div className="py-4 border-y border-white/10 my-6">
                  <p className="font-luxury-heading text-lg sm:text-2xl text-gold text-center uppercase tracking-wider">
                    "Building Trust. Creating Communities. Shaping the Future."
                  </p>
                </div>
                
                <p>
                  Every project we undertake reflects our dedication to quality, innovation, transparency, and customer satisfaction. Whether it is Velora Greens in East Bangalore, featuring thoughtfully crafted Modern Living Residences and signature Velora Greens Courtyard Homes, or a landmark integrated development such as Legacy Township, our focus remains the same: delivering exceptional value while creating spaces that inspire a better way of living.
                </p>
                <p>
                  We understand that purchasing a home is one of the most important decisions in a person's life. That understanding drives us to uphold the highest standards in planning, design, execution, and customer service. Every promise we make is guided by our responsibility to earn and maintain the confidence of those who place their trust in us.
                </p>
                <p>
                  As we continue to grow, our vision extends beyond creating landmark developments. We aspire to build communities that contribute positively to the future of our cities and create opportunities for generations to come.
                </p>
                <p>
                  I extend my heartfelt gratitude to our customers, partners, employees, and well-wishers who have been an integral part of our journey. Your support inspires us to continue pushing boundaries and setting new benchmarks in modern living.
                </p>
                <p>
                  Together, we are building more than homes. We are building trust, creating value, and shaping a lasting legacy.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col items-start">
                <span className="text-neutral-400 font-sans font-light text-sm leading-none">Warm Regards,</span>
                <span className="font-luxury-heading text-xl text-white mt-2 mb-0.5 tracking-wide">Ashfak Ahmed</span>
                <span className="font-mono text-xs text-gold uppercase tracking-wider">Managing Director, Accenture Infra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision Section with Reverse Split Layout */}
      <section className="py-24 sm:py-32 bg-[#0A0F0A] relative border-t border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 lg:order-1 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                <img 
                  src={alGreenLegacy} 
                  alt="Legacy Township Rendering" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Sticker */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-mono text-gold uppercase tracking-wider font-bold">FLAGSHIP LANDMARK</span>
                  <span className="block text-[11px] text-neutral-300 font-mono font-normal mt-1 leading-normal">
                    105-acre self-sustaining integrated city designed for generations.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 lg:order-2 space-y-8 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                OUR PROMISE
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
                OUR <span className="text-gold">VISION</span>
              </h2>
              <div className="h-[2px] w-24 bg-gold" />
              <p className="text-lg text-neutral-300 font-sans font-light leading-relaxed">
                Redefining quality standards in modern real estate and construction.
              </p>

              {/* Statistics counter block styled as premium card grids */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-center space-y-2">
                  <div className="text-4xl font-mono font-bold text-gold">105+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-450 font-bold font-mono">Acres Developed</div>
                </div>
                <div className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-center space-y-2">
                  <div className="text-4xl font-mono font-bold text-gold">2000+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-450 font-bold font-mono">Premium Homes</div>
                </div>
                <div className="p-6 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-center space-y-2">
                  <div className="text-4xl font-mono font-bold text-gold">80+</div>
                  <div className="text-xs uppercase tracking-wider text-neutral-450 font-bold font-mono">Amenities Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Mission with Split Pictorial Layout */}
      <section className="py-24 sm:py-32 bg-[#0E150E] relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
                OUR OPERATIONS
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
                OUR <span className="text-gold">MISSION</span>
              </h2>
              <div className="h-[2px] w-24 bg-gold" />
              <p className="text-lg text-neutral-300 font-sans font-light leading-relaxed">
                To deliver world-class residential, commercial, and integrated communities through visionary design, precision execution, and an unwavering commitment to excellence.
              </p>

              {/* Commitments checklist with custom check icons */}
              <div className="space-y-4 pt-4">
                {[
                  "Build sustainable communities that respect and enhance the natural environment",
                  "Maintain complete transparency in all our dealings with customers and stakeholders",
                  "Deliver projects on time with the highest quality standards",
                  "Create long-term value for our customers through thoughtful planning and execution"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-neutral-350 font-sans font-light text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Pictorial Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-neutral-900 group">
                <img 
                  src={forestCanopyAmbient} 
                  alt="Ecology Forest Canopy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                
                {/* Sticker */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl">
                  <span className="block text-[10px] font-mono text-gold uppercase tracking-wider font-bold">ECO REGULATORY SEAL</span>
                  <span className="block text-[11px] text-neutral-300 font-mono font-normal mt-1 leading-normal">
                    Preserving local microclimates by nursery-raising 2,500+ indigenous trees.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values Section */}
      <section className="py-24 sm:py-32 bg-[#0A0F0A] relative border-b border-white/[0.05] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block mb-3">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
              CORE <span className="text-gold">VALUES</span>
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto mt-4 mb-4" />
            <p className="text-neutral-300 max-w-2xl mx-auto font-sans font-light text-sm sm:text-base">
              The ethical systems and design architectures guiding our capital allocations.
            </p>
          </motion.div>
        </div>

        {/* Sliding Card Track Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Ambient fade-out overlays on edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-[#0A0F0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-[#0A0F0A] to-transparent z-10 pointer-events-none" />

          {/* Infinite sliding track */}
          <motion.div
            className="flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            style={{ width: "fit-content" }}
          >
            {/* Render 3 times to guarantee smooth continuous cycle on large resolutions */}
            {[...coreValues, ...coreValues, ...coreValues].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between w-[280px] sm:w-[360px] shrink-0 whitespace-normal select-none"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[10px] font-mono text-neutral-600 font-bold">[0{(index % coreValues.length) + 1}]</span>
                    </div>
                    <h3 className="text-lg font-sans font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans font-light">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA Section with Background Banner */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={topographicOverlay} 
            alt="Topographic Lines" 
            className="w-full h-full object-cover scale-105 opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-[#0A0F0A]/95 backdrop-blur-xs" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#BAA360] uppercase font-bold block">
            ACCENTURE DEVELOPMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold uppercase text-white leading-tight">
            READY TO EXPERIENCE THE <span className="text-gold">DIFFERENCE?</span>
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto font-sans font-light leading-relaxed text-sm sm:text-base">
            Explore our micro-planned boutique row houses, high-end villa plots, and integrated township borders. Let's walk the physical boundaries.
          </p>
          <div className="pt-4">
            <Link
              to="/"
              className="inline-block px-10 py-5 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold font-mono text-xs tracking-widest uppercase rounded-xl hover:shadow-xl hover:shadow-gold/15 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
            >
              Explore Active Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
