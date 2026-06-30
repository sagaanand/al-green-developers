import { ShieldCheck, Trees, Sparkles, Heart } from "lucide-react";
import communityPathway from "../assets/images/gated_community_pathway.png";
import luxuryInterior from "../assets/images/luxury_villa_interior.png";

export default function SectionLifestyle() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-[70px] overflow-hidden font-sans border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            03 // THE LIFESTYLE OF GREEN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (5 Columns): Editorial details */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display font-medium text-4xl lg:text-5xl text-[#163A2D] leading-[1.15] tracking-wide uppercase">
                Designed to let <br />
                <span className="text-[#C6A96B] italic font-display font-light">nature breathe</span>
              </h3>
              <div className="h-[2px] w-16 bg-[#C6A96B]" />
            </div>

            <p className="text-sm text-neutral-600 font-sans font-light tracking-wide leading-relaxed">
              Every detail of the Al Green development is structured to inspire calm. Native tree canopies line our avenues to filter light, while low-glare outdoor illumination creates a peaceful twilight atmosphere for evening walks.
            </p>

            {/* Overlap Details List */}
            <div className="space-y-4 pt-2">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded bg-[#F8FAF8] text-[#C6A96B] shrink-0 border border-[#163A2D]/5">
                  <Trees className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-mono font-bold text-[#163A2D] uppercase tracking-wide">Botanical Microforests</h4>
                  <p className="text-[10px] text-neutral-500 font-sans font-light mt-0.5">25,000+ native tree species surrounding walking tracks to cool the regional climate.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 rounded bg-[#F8FAF8] text-[#C6A96B] shrink-0 border border-[#163A2D]/5">
                  <Heart className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-mono font-bold text-[#163A2D] uppercase tracking-wide">Multi-Generational Leisure</h4>
                  <p className="text-[10px] text-neutral-500 font-sans font-light mt-0.5">Quiet study enclaves, sports tracks, and clay playgrounds built using zero-waste materials.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Columns): Overlapping Editorial Images */}
          <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
            {/* Background blur */}
            <div className="absolute inset-0 bg-[#C6A96B]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Back Image (Large) */}
            <div className="col-span-8 rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl aspect-[4/3] bg-neutral-100 relative z-10">
              <img 
                src={communityPathway} 
                alt="Estate Pathways" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Front Image (Overlay, shifted down and right) */}
            <div className="col-span-6 -mt-20 ml-auto -mr-4 rounded-[20px] overflow-hidden border-2 border-white shadow-2xl aspect-[4/3] bg-neutral-150 relative z-20">
              <img 
                src={luxuryInterior} 
                alt="Villa Interiors" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
