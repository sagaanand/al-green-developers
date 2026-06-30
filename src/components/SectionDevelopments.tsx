import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Construction
} from "lucide-react";
import luxuryVillaAmbient from "../assets/images/luxury_villa_ambient.png";
import { trackAnalyticsEvent } from "../utils/analytics";

interface SectionDevelopmentsProps {
  onOpenProjectDetail: (projectId: string) => void;
  onOpenSiteVisit: (projectName: string) => void;
}

export default function SectionDevelopments({ onOpenProjectDetail, onOpenSiteVisit }: SectionDevelopmentsProps) {
  // Only display Legacy Township and Velora Greens
  const activeProjects = PROJECTS.filter(p => p.id === "legacy" || p.id === "velora");

  return (
    <section id="developments" className="relative w-full bg-white py-20 lg:py-[70px] border-t border-neutral-100 overflow-hidden">
      {/* Background Texture System at 2% opacity */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url(${luxuryVillaAmbient})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            04 // ACTIVE PREMIUM DEVELOPMENTS
          </span>
        </div>

        {/* Centered Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <h2 className="font-display font-medium text-4xl lg:text-5xl uppercase tracking-wide text-[#163A2D] leading-tight">
            ESTATE <span className="text-[#C6A96B] italic font-display font-light">DEVELOPMENTS</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#C6A96B] mt-4 mb-6" />
          <p className="text-sm text-neutral-600 font-sans font-light max-w-2xl leading-relaxed">
            Accenture Infra is not selling simple apartments or speculative assets. We formulate fully realized community frameworks: flagship integrated townships and boutique eco-developments.
          </p>
        </div>

        {/* Alternate split layout for active projects */}
        <div className="space-y-24">
          {activeProjects.map((project: Project, index) => {
            const isEven = index % 2 === 0;
            const progress = project.id === "legacy" ? 35 : 20;
            const progressStatus = project.id === "legacy" ? "Foundation Work Complete" : "Land Development in Progress";

            return (
              <div
                key={project.id}
                className="pt-16 border-t border-neutral-150 first:border-none first:pt-0"
              >
                <div
                  id={`portfolio-project-${project.id}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Left/Right visual column */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden group bg-neutral-100 shadow-md border border-[#163A2D]/5">
                      <img
                        id={`project-showcase-img-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Location Sticker on Image */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-150 z-15 shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A96B]" />
                        <span className="text-[10px] font-mono font-bold tracking-wider text-[#163A2D] uppercase">{project.location}</span>
                      </div>

                      {/* Badge on Image */}
                      <div className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#163A2D] text-white shadow-sm">
                        {project.id === "legacy" && <Sparkles className="w-3.5 h-3.5 text-[#C6A96B]" />}
                        <span>{project.id === "legacy" ? "Flagship" : "Premium"}</span>
                      </div>
                    </div>
                    {/* Dummy RERA Registration No below the image */}
                    <div className="mt-4 text-[9px] font-mono tracking-widest text-[#C6A96B] uppercase bg-[#F8FAF8] py-1.5 px-4 rounded-full border border-neutral-200 w-fit mx-auto shadow-sm">
                      RERA NO: {project.id === "legacy" ? "PRM/KA/RERA/1251/L-1251" : "PRM/KA/RERA/1251/V-2364"}
                    </div>
                  </div>

                  {/* Left/Right details column */}
                  <div className={`space-y-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"} text-left`}>
                    <div className="space-y-3">
                      <span className="inline-block text-[9px] font-mono uppercase tracking-widest font-bold px-3 py-1 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-md text-[#C6A96B]">
                        Land Mutation Trust Verified
                      </span>
                      <h3 className="text-3xl font-display font-semibold tracking-wide text-[#163A2D] uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-mono tracking-wider uppercase">
                        {project.tagline}
                      </p>
                      <div className="h-[2px] w-12 bg-[#C6A96B]" />
                      <p className="text-sm text-neutral-650 font-sans font-light leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    {/* Physical Details: Top 4 parameters grid */}
                    <div className="space-y-2">
                      <span className="block text-[9px] font-mono tracking-wider text-neutral-500 uppercase font-bold">
                        Certified Specifications
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.masterplan.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="p-3 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-xl flex items-start gap-2">
                            <span className="font-mono text-xs font-bold text-[#C6A96B]">0{idx + 1}.</span>
                            <p className="text-xs text-neutral-600 leading-snug font-sans font-light">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Construction Progress */}
                    <div className="p-4 bg-[#F8FAF8] border border-[#163A2D]/5 rounded-xl space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-500 flex items-center gap-1.5 uppercase font-bold">
                          <Construction className="w-4 h-4 text-[#C6A96B]" />
                          Construction Progress
                        </span>
                        <span className="text-[#C6A96B] font-bold">{progress}% Complete</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#C6A96B] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-neutral-500 font-mono">
                        Current Status: {progressStatus}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-2">
                      <button
                        id={`learn-more-cta-${project.id}`}
                        onClick={() => {
                          onOpenProjectDetail(project.id);
                          trackAnalyticsEvent("Project Learn More Clicked", "Navigation", `details_${project.id}`);
                        }}
                        className="btn-luxury-primary text-[10px] font-mono tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#163A2D]/10 focus-premium w-full"
                      >
                        <span>Learn more</span>
                        <ArrowUpRight className="w-4 h-4" />
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
  );
}
