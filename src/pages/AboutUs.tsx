import { motion } from "motion/react";
import { Sparkles, Gem, Shield, Trophy, CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import ImageBreak from "../components/ImageBreak";
import { trackAnalyticsEvent } from "../utils/analytics";

// Import premium pictorial assets
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";
import luxuryVillaAmbient from "../assets/images/luxury_villa_ambient.png";
import landIntelligence from "../assets/images/land_intelligence_1780310163369.png";
import alGreenLegacy from "../assets/images/al_green_legacy_1780310147200.png";
import topographicOverlay from "../assets/images/topographic_overlay.png";
import mdPortrait from "../assets/images/managing_director_portrait.png";

export default function AboutUs() {
  const navigate = useNavigate();

  const coreValues = [
    {
      title: "Excellence in Design",
      desc: "Creating structural works that stand the test of time using climate-responsive engineering.",
      icon: Gem
    },
    {
      title: "Transparent Mutation",
      desc: "100% mutation-clear parent deeds, DTCP approvals, and verified titles.",
      icon: Shield
    },
    {
      title: "Customer-Centric Spacing",
      desc: "Tailored spatial layouts and dedicated property management portfolios.",
      icon: Sparkles
    },
    {
      title: "Sustainable Grids",
      desc: "Native botany nurseries, zero carbon setups, and heavy rainwater harvesting systems.",
      icon: Gem
    },
    {
      title: "Timely Delivery Quality",
      desc: "Stringent timeline controls with pre-tested structural standards.",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-forest-light text-neutral-850 font-sans overflow-x-hidden">
      {/* Top Navbar */}
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* 1. Hero Section with Parallax Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#163A2D]">
        <div className="absolute inset-0 z-0">
          <img 
            src={luxuryVillaAmbient} 
            alt="Luxury Villa Backdrop" 
            className="w-full h-full object-cover scale-102 opacity-25"
          />
          <div className="absolute inset-0 bg-[#163A2D]/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
              ESTATE BUILDERS
            </span>
            <h1 className="font-display font-medium text-4xl sm:text-6xl uppercase tracking-wide text-white leading-tight">
              OUR <span className="text-[#C6A96B] italic font-display font-light">JOURNEY</span>
            </h1>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto my-6" />
            <p className="text-sm sm:text-base text-neutral-300 font-sans font-light tracking-wider leading-relaxed max-w-xl mx-auto">
              Real estate is more than construction. It is the physical preservation of your family's future.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Overview with Split Pictorial Layout */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        {/* Background Texture System at 2% opacity */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `url(${topographicOverlay})` }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Editorial Section Number */}
          <div className="text-left mb-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
              01 // COMPANY OVERVIEW & ETHICS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase text-[#163A2D] leading-tight">
                Enduring lifestyles & <br />
                <span className="text-[#C6A96B] italic font-display font-light">thriving communities</span>
              </h2>
              <div className="h-[2px] w-16 bg-[#C6A96B]" />
              
              <div className="space-y-6 text-neutral-600 font-sans font-light text-sm sm:text-base leading-relaxed">
                <p>
                  At Accenture Infra, we believe that real estate is about more than just buildings. It's about creating spaces where families grow, communities thrive, and memories are made. Our vision is to redefine quality standards in modern real estate and construction.
                </p>
                <p>
                  Founded with a commitment to engineering excellence and environmental stewardship, we have developed over 150 acres of premium land across Bangalore East. Our projects integrate cutting-edge infrastructure with nature-centric design, creating communities that thrive for generations.
                </p>
              </div>
              <div className="p-5 bg-[#F8FAF8] border-l-2 border-[#C6A96B] rounded-r-xl font-display italic text-xs text-neutral-600 max-w-2xl leading-relaxed">
                "Our designs reject standardized urban clutter. We protect terrain elevation, natural waterways, and soil vitality to lock in inherent asset health."
              </div>
            </div>

            {/* Right Pictorial Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#C6A96B]/5 rounded-[30px] blur-3xl pointer-events-none" />
              
              <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl bg-neutral-900 group">
                <img 
                  src={landIntelligence} 
                  alt="Land Development Intelligence" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#163A2D]/95 backdrop-blur-md border border-white/10 rounded-xl text-left">
                  <span className="block text-[9px] font-mono text-[#C6A96B] uppercase tracking-wider font-bold">SPATIAL INTEL</span>
                  <span className="block text-[11px] text-neutral-300 font-sans font-light mt-1 leading-normal">
                    Satellite land survey mutation pre-cleared for direct physical plotting.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break 1 */}
      <ImageBreak 
        imageSrc={alGreenLegacy} 
        captionTitle="105-Acre Legacy Township Layout" 
        captionDesc="Flagship integrated township combining private estates, forest corridors, and zero-waste infrastructure." 
        numberStamp="ESTATE PORTFOLIO // L-01" 
      />

      {/* 3. Message from Our Managing Director with Split Layout */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Editorial Section Number */}
          <div className="text-left mb-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
              02 // DIRECT CONCIERGE STATEMENT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column (5 Columns): Portrait Frame */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#C6A96B]/5 rounded-[30px] blur-3xl pointer-events-none" />
              
              <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl bg-neutral-900 group">
                <img 
                  src={mdPortrait} 
                  alt="Ashfak Ahmed, Managing Director" 
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#163A2D]/95 backdrop-blur-md border border-white/10 rounded-xl text-left">
                  <span className="block text-sm font-display text-white uppercase tracking-wider font-bold">Ashfak Ahmed</span>
                  <span className="block text-[10px] text-neutral-300 font-mono mt-0.5 uppercase tracking-widest">
                    Managing Director // Accenture Infra
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (7 Columns): MD Message content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase text-[#163A2D] leading-tight">
                A message from our <br />
                <span className="text-[#C6A96B] italic font-display font-light">Managing Director</span>
              </h2>
              <div className="h-[2px] w-16 bg-[#C6A96B]" />
              
              <div className="space-y-4 text-neutral-600 font-sans font-light text-sm sm:text-base leading-relaxed">
                <p>
                  At Accenture Infra, we believe that every development begins with a dream—a dream of a better home, a stronger community, and a brighter future.
                </p>
                <p>
                  Our journey has been built on a simple yet powerful foundation: <strong>trust</strong>. Trust from families who choose us to build their homes. Trust from investors who believe in our vision. And trust from partners who share our commitment to excellence.
                </p>
                <p>
                  In an industry that is constantly evolving, our purpose remains unchanged—to create thoughtfully planned communities that enrich lives and stand the test of time. We are not merely constructing buildings; we are shaping environments where people can connect, grow, and create lasting memories.
                </p>
              </div>

              {/* Highlight Quote Block */}
              <div className="py-4 border-y border-neutral-200 my-6">
                <p className="font-display text-lg italic text-[#C6A96B] tracking-wide">
                  "Building Trust. Creating Communities. Shaping the Future."
                </p>
              </div>

              <div className="space-y-4 text-neutral-650 font-sans font-light text-sm leading-relaxed">
                <p>
                  Every project we undertake reflects our dedication to quality, innovation, transparency, and customer satisfaction. Whether it is Velora Greens in East Bangalore, featuring thoughtfully crafted Modern Living Residences and signature Velora Greens Courtyard Homes, or a landmark integrated development such as Legacy Township, our focus remains the same: delivering exceptional value while creating spaces that inspire a better way of living.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-200 flex flex-col items-start">
                <span className="text-neutral-500 font-sans font-light text-sm">Warm Regards,</span>
                <span className="font-display text-xl text-[#163A2D] mt-2 mb-0.5 tracking-wide uppercase font-semibold">Ashfak Ahmed</span>
                <span className="font-mono text-[10px] text-[#C6A96B] uppercase tracking-wider font-bold">Managing Director, Accenture Infra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break 2 */}
      <ImageBreak 
        imageSrc={forestCanopyAmbient} 
        captionTitle="Eco Regulatory Seal & Botanical Nursery" 
        captionDesc="Preserving local microclimates by nursery-raising 2,500+ indigenous trees surrounding the layouts." 
        numberStamp="ENVIRONMENTAL CHARTER // L-02" 
      />

      {/* 4. Core Values Section */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-left">
          
          {/* Editorial Section Number */}
          <div className="text-left mb-6">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
              03 // ETHICAL DEVELOPMENT PHILOSOPHY
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase text-[#163A2D] leading-tight">
            CORE <span className="text-[#C6A96B] italic font-display font-light">VALUES</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#C6A96B] mt-4 mb-4" />
          <p className="text-neutral-600 max-w-2xl font-sans font-light text-sm sm:text-base leading-relaxed">
            The ethical systems and design architectures guiding our capital allocations.
          </p>
        </div>

        {/* Sliding Card Track Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
            {[...coreValues, ...coreValues, ...coreValues].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-luxury p-8 rounded-[20px] bg-white border border-[#163A2D]/5 hover:border-[#C6A96B] transition-all duration-300 flex flex-col justify-between w-[280px] sm:w-[360px] shrink-0 whitespace-normal select-none"
                >
                  <div className="text-left">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#163A2D]/5 w-fit text-[#C6A96B]">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 font-bold">[0{(index % coreValues.length) + 1}]</span>
                    </div>
                    <h3 className="text-base font-display font-semibold text-[#163A2D] uppercase tracking-wide mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans font-light">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Section with Background Banner */}
      <section className="relative py-20 lg:py-[70px] overflow-hidden bg-[#163A2D]">
        <div className="absolute inset-0 z-0">
          <img 
            src={topographicOverlay} 
            alt="Topographic Lines" 
            className="w-full h-full object-cover scale-102 opacity-5 mix-blend-overlay"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
            ACCENTURE DEVELOPMENTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-medium uppercase text-white leading-tight">
            Ready to experience the <br />
            <span className="text-[#C6A96B] italic font-display font-light">difference?</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto my-4" />
          <p className="text-neutral-300 max-w-xl mx-auto font-sans font-light leading-relaxed text-xs sm:text-sm">
            Explore our micro-planned boutique row houses, high-end villa plots, and integrated township borders. Let's walk the physical boundaries.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                navigate("/#developments");
                trackAnalyticsEvent("About CTA Clicked", "Navigation", "about_cta_explore");
              }}
              className="btn-luxury-gold text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#C6A96B]/15 hover:shadow-lg transition-all focus-premium mx-auto"
            >
              <span>Explore Active Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
