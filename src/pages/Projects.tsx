import { motion } from "motion/react";
import { MapPin, ArrowRight, Sparkles, LayoutGrid, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";
import topographicOverlay from "../assets/images/topographic_overlay.png";
import { trackAnalyticsEvent } from "../utils/analytics";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-neutral-850 font-sans overflow-x-hidden">
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#163A2D]">
        <div className="absolute inset-0 z-0 bg-[#163A2D]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold block">
            PORTFOLIO OVERVIEW
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-6xl uppercase tracking-wide text-white leading-tight">
            OUR <span className="text-[#C6A96B] italic font-display font-light">DEVELOPMENTS</span>
          </h1>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto my-4" />
          <p className="text-xs sm:text-sm text-neutral-300 font-sans font-light tracking-wider max-w-2xl mx-auto leading-relaxed">
            Premium developments, luxury enclaves, and self-sustaining township grids across Bangalore East.
          </p>
        </div>
      </section>

      {/* Featured Projects Listing */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        {/* Background Texture System at 2% opacity */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `url(${topographicOverlay})` }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-24">
            {PROJECTS.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className="pt-16 border-t border-neutral-150 first:border-none first:pt-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left/Right image column (Template B/C alternate) */}
                    <div className={`order-2 lg:order-${isEven ? '1' : '2'}`}>
                      <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden shadow-lg border border-[#163A2D]/5 group">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-103"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-150 shadow-sm">
                          <MapPin className="w-3.5 h-3.5 text-[#C6A96B]" />
                          <span className="text-[10px] font-mono font-bold tracking-wider text-[#163A2D] uppercase">{project.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Left/Right text content column */}
                    <div className={`order-1 lg:order-${isEven ? '2' : '1'} space-y-6 text-left`}>
                      <div className="flex items-center gap-3">
                        <span className="text-[#C6A96B] text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-md">
                          {project.tagline}
                        </span>
                        {project.id === "legacy" && (
                          <span className="bg-[#163A2D]/10 text-[#163A2D] border border-[#163A2D]/20 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider">Ongoing</span>
                        )}
                        {(project.id === "velora" || project.id === "hayat") && (
                          <span className="bg-[#C6A96B]/15 text-[#C6A96B] border border-[#C6A96B]/30 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider">Upcoming</span>
                        )}
                        {project.id === "logistics" && (
                          <span className="bg-[#4A7C59]/15 text-[#4A7C59] border border-[#4A7C59]/30 px-3 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider">Available</span>
                        )}
                      </div>

                      <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase text-[#163A2D]">
                        {project.title}
                      </h2>
                      <div className="h-[2px] w-12 bg-[#C6A96B]" />
                      
                      <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
                        {project.story}
                      </p>

                      <div className="pt-2">
                        <button
                          onClick={() => {
                            navigate(`/project/${project.id}`);
                            trackAnalyticsEvent("Projects Navigation Clicked", "Navigation", `project_${project.id}`);
                          }}
                          className="btn-luxury-primary text-[10px] font-mono tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md shadow-[#163A2D]/10 focus-premium"
                        >
                          <span>View Layout Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Comparison Table */}
      <section className="py-20 lg:py-[70px] bg-[#F8FAF8] relative border-t border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          
          <div className="mb-12">
            <h2 className="font-display font-medium text-3xl md:text-4xl uppercase text-[#163A2D]">
              Compare <span className="text-[#C6A96B] italic font-display font-light">Specifications</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mt-3 mb-4" />
            <p className="text-sm text-neutral-600 font-sans font-light max-w-2xl leading-relaxed">
              Find the perfect development aligned with your multi-generational wealth preservation and lifestyle goals.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[20px] border border-[#163A2D]/10 shadow-sm bg-white p-4">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#163A2D]/10">
                  <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#C6A96B]">Feature Parameter</th>
                  <th className="text-center py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#163A2D] font-bold">Legacy Township</th>
                  <th className="text-center py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#163A2D] font-bold">Velora Greens</th>
                  <th className="text-center py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#163A2D] font-bold">Hayat Resort</th>
                  <th className="text-center py-4 px-4 font-mono text-[10px] uppercase tracking-wider text-[#163A2D] font-bold">Industrial Logistics</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-xs font-mono text-neutral-500 uppercase tracking-wide">Development Type</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Integrated Township</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Boutique Community</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Wellness Retreat</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Industrial Logistics</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-xs font-mono text-neutral-500 uppercase tracking-wide">Scale Area</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">105 Acres</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">45 Acres</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Forest Buffer zone</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Industrial Park</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-xs font-mono text-neutral-500 uppercase tracking-wide">RERA Clearance</td>
                  <td className="py-4 px-4 text-xs text-center"><span className="bg-[#163A2D]/10 text-[#163A2D] px-3 py-1 rounded-md text-[10px] font-mono font-bold">Approved</span></td>
                  <td className="py-4 px-4 text-xs text-center"><span className="bg-[#163A2D]/10 text-[#163A2D] px-3 py-1 rounded-md text-[10px] font-mono font-bold">Approved</span></td>
                  <td className="py-4 px-4 text-xs text-center"><span className="bg-[#C6A96B]/15 text-[#C6A96B] px-3 py-1 rounded-md text-[10px] font-mono font-bold">In Progress</span></td>
                  <td className="py-4 px-4 text-xs text-center"><span className="bg-[#163A2D]/10 text-[#163A2D] px-3 py-1 rounded-md text-[10px] font-mono font-bold">Approved</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-xs font-mono text-neutral-500 uppercase tracking-wide">Starting From</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-numbers font-medium">₹80 Lakhs</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-numbers font-medium">₹1.2 Cr</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Contact Advisor</td>
                  <td className="py-4 px-4 text-xs text-neutral-800 text-center font-sans font-light">Contact Advisor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future Projects Pipeline */}
      <section className="py-20 lg:py-[70px] bg-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display font-medium text-3xl md:text-4xl uppercase text-[#163A2D]">
              Future <span className="text-[#C6A96B] italic font-display font-light">Acquisitions</span>
            </h2>
            <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-3 mb-4" />
            <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
              Strategic land intelligence allocations in high-growth corridors of East Bengaluru.
            </p>
          </div>

          <div className="max-w-4xl mx-auto card-luxury p-8 md:p-12 border border-[#163A2D]/5 shadow-md bg-[#F8FAF8] rounded-[20px]">
            <div className="text-center space-y-6">
              <h3 className="font-display text-2xl font-semibold uppercase text-[#163A2D] tracking-wide">
                KADUGODI METRO ROAD STRIP
              </h3>
              <p className="text-sm text-neutral-600 font-sans font-light max-w-xl mx-auto leading-relaxed">
                Strategic Land Intelligence Node Acquisition - 120 raw acres secured at pre-announcement valuations to maximize appreciation reserves.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-[10px] font-mono font-bold tracking-wider uppercase">
                <span className="bg-white border border-[#163A2D]/10 rounded-md px-4 py-2 text-[#163A2D] shadow-2xs">
                  120 Raw Acres
                </span>
                <span className="bg-white border border-[#163A2D]/10 rounded-md px-4 py-2 text-[#163A2D] shadow-2xs">
                  +19.5% Appreciation Projections
                </span>
                <span className="bg-white border border-[#163A2D]/10 rounded-md px-4 py-2 text-[#163A2D] shadow-2xs">
                  100% Mutation Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
