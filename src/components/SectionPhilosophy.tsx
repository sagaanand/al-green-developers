import { motion } from "motion/react";
import { Eye, Target, Compass, Sparkles } from "lucide-react";
import forestCanopyAmbient from "../assets/images/forest_canopy_ambient.png";
import alGreenHero from "../assets/images/al_green_hero_1780310125091.png";

export default function SectionPhilosophy() {
  const items = [
    { 
      title: "Vision of Land Preservation", 
      desc: "To create carbon-neutral residential communities that enhance local biodiversity by 300% while setting new benchmarks for premium gated developments.", 
      icon: Eye 
    },
    { 
      title: "Direct Mutation Clearances", 
      desc: "Every plot features pre-certified DTCP/BMRDA clearances, instant mutation records, and pre-stamped title reports directly matching production database checks.", 
      icon: Target 
    },
    { 
      title: "Sustainable Community Grids", 
      desc: "Rejecting standard urban density. Our communities combine low-carbon building materials, independent power microgrids, and local water recharge beds.", 
      icon: Sparkles 
    }
  ];

  return (
    <section className="relative w-full bg-[#F8FAF8] py-20 lg:py-[70px] overflow-hidden font-sans border-t border-neutral-100">
      {/* Background Texture System at 2% opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url(${forestCanopyAmbient})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            02 // THE PHILOSOPHY OF DESIGN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (5 Columns): Framed Editorial Banner */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#C6A96B]/5 rounded-[30px] blur-3xl pointer-events-none" />
            
            <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden border border-[#163A2D]/5 shadow-xl bg-neutral-900">
              <img 
                src={alGreenHero} 
                alt="AL Green Premium Residences" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
              
              <div className="absolute top-8 left-8 right-8">
                <h3 className="font-display font-medium text-3xl sm:text-4xl uppercase tracking-wider text-white leading-tight">
                  OUR <br />
                  <span className="text-[#C6A96B] italic font-display font-light">FOUNDATION</span>
                </h3>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#163A2D]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                <span className="text-[9px] font-mono text-[#C6A96B] uppercase block font-bold tracking-widest">CHARTER AUDIT: APPROVED</span>
                <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed font-sans font-light">
                  Our designs reject standardized urban clutter. We protect terrain elevation, natural waterways, and soil vitality to lock in inherent asset health.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Columns): Luxury Staggered Cards */}
          <div className="lg:col-span-7 space-y-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="card-luxury p-8 rounded-[20px] bg-white border border-[#163A2D]/5 hover:border-[#C6A96B] shadow-md shadow-[#163A2D]/2 hover:shadow-xl transition-all duration-300 flex gap-6 items-start"
                >
                  {/* Icon Area */}
                  <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#163A2D]/5 shrink-0 text-[#C6A96B]">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#C6A96B] font-bold">[0{index + 1}]</span>
                      <h4 className="font-display font-semibold text-lg text-[#163A2D] uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed font-sans font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
