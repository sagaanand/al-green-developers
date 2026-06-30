import { motion } from "motion/react";
import { ShieldCheck, CalendarRange, Map, ArrowRight } from "lucide-react";
import topographicOverlay from "../assets/images/topographic_overlay.png";
import luxuryVillaAmbient from "../assets/images/luxury_villa_ambient.png";
import { trackAnalyticsEvent } from "../utils/analytics";

export default function SectionLandProduct() {
  return (
    <section
      id="manifesto-section"
      className="relative w-full bg-[#FFFFFF] py-20 lg:py-[70px] overflow-hidden font-sans border-t border-neutral-100"
    >
      {/* Background Texture System at 2% opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url(${topographicOverlay})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            01 // THE VISION OF GROUND
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (7 Columns): Framed Editorial Image */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-[#163A2D]/5 rounded-[30px] blur-3xl pointer-events-none" />
            
            <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl bg-neutral-900 group">
              <img 
                src={luxuryVillaAmbient} 
                alt="Accenture Premium Gated Enclave" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#163A2D]/90 backdrop-blur-md border border-white/10 rounded-xl">
                <span className="block text-[9px] font-mono text-[#C6A96B] uppercase tracking-wider font-bold">ESTATE VISUALIZATION // CORRIDOR EAST</span>
                <span className="block text-[11px] text-neutral-300 font-sans mt-1 leading-normal">
                  Eco-engineered residences nestled within natural vegetation pockets, Hoskote Belt.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 Columns): Editorial Copy */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display font-medium text-4xl lg:text-5xl text-[#163A2D] leading-[1.15] tracking-wide uppercase">
                Real estate is <br />
                <span className="text-[#C6A96B] italic font-display font-light">more than construction</span>
              </h3>
              <div className="h-[2px] w-16 bg-[#C6A96B]" />
            </div>

            <p className="text-sm text-neutral-600 font-sans font-light tracking-wide leading-relaxed">
              We approach land not as empty space to be crowded, but as an ecosystem to be preserved. By analyzing local elevations, natural water streams, and native plant life, Al Green Developers establishes estate enclaves that grow in value while remaining carbon-neutral.
            </p>

            {/* Editorial Pull Quote */}
            <div className="pl-4 border-l-2 border-[#C6A96B] py-1 bg-[#F8FAF8] rounded-r-lg">
              <p className="text-xs italic text-[#163A2D] font-display leading-relaxed">
                "Our layouts are structured to secure both financial growth and ecological balance for multi-generational ownership."
              </p>
            </div>

            {/* Micro-Features Row */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#163A2D] font-semibold text-xs tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#C6A96B]" />
                  <span>PRE-MUTATED DEEDS</span>
                </div>
                <p className="text-[10px] text-neutral-500 leading-normal font-sans font-light">
                  100% pre-verified clear title deeds, ready for registration.
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#163A2D] font-semibold text-xs tracking-wide">
                  <CalendarRange className="w-4 h-4 text-[#C6A96B]" />
                  <span>DTCP APPROVED</span>
                </div>
                <p className="text-[10px] text-neutral-500 leading-normal font-sans font-light">
                  Fully compliant layouts with government approvals.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById("developments");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  trackAnalyticsEvent("Manifesto CTA Clicked", "Engagement", "manifesto_explore");
                }}
                className="btn-luxury-primary text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#163A2D]/10 hover:shadow-lg transition-all focus-premium"
              >
                <span>View Gated Layouts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
