import { Phone, ArrowRight } from "lucide-react";
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";
import { trackAnalyticsEvent } from "../utils/analytics";

export default function SectionCallbackCTA() {
  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 lg:py-[70px] border-t border-neutral-100 overflow-hidden">
      {/* Background Texture System at 2% opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url(${forestCanopyAmbient})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            06 // PRIVATE ADVISOR CONSULTATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: CTA Info */}
          <div className="lg:col-span-7 text-left space-y-8">
            <h2 className="font-display font-medium text-4xl lg:text-5xl uppercase text-[#163A2D] leading-[1.15]">
              Discover the Future of <br />
              <span className="text-[#C6A96B] italic font-display font-light">Luxury Living</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B]" />
            
            <p className="text-[#4B5563] font-sans font-light text-sm sm:text-base max-w-2xl leading-relaxed">
              Be a part of a landmark township designed to redefine modern living with elegance, comfort, and world-class experiences. Connect directly with our private concierge team to review plot mutation deeds, master plans, and site availability.
            </p>
            
            <div className="border-l-2 border-[#C6A96B] pl-6 py-2 bg-[#F8FAF8] rounded-r-lg">
              <span className="font-display font-semibold text-lg text-[#163A2D] block">
                Legacy Township by Accenture Infra
              </span>
              <p className="text-[#6B7280] text-[10px] mt-1 font-mono tracking-widest uppercase">
                Luxury Beyond Expectations
              </p>
            </div>

            <div>
              <button
                onClick={() => {
                  document.getElementById("visit")?.scrollIntoView({ behavior: "smooth" });
                  trackAnalyticsEvent("Callback CTA Clicked", "Conversion", "callback_cta");
                }}
                className="btn-luxury-primary text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#163A2D]/10 hover:shadow-lg transition-all focus-premium"
              >
                <Phone className="w-4 h-4 text-[#C6A96B]" />
                <span>Schedule a Callback</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Pictorial Image Representation */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#C6A96B]/5 rounded-[30px] blur-3xl pointer-events-none" />
            
            <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl bg-neutral-900 group">
              <img 
                src={forestCanopyAmbient} 
                alt="Estate Living Canopy Rendering" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-750"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#163A2D]/90 backdrop-blur-md border border-white/10 rounded-xl">
                <span className="block text-[9px] font-mono text-[#C6A96B] uppercase tracking-wider font-bold">AMBIENT DESIGN // FC-9921</span>
                <span className="block text-[11px] text-neutral-350 font-sans mt-1 leading-normal">
                  Sustainably integrated canopy systems offering continuous shade and clean air circulation.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
