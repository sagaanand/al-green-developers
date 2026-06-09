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

interface SectionDevelopmentsProps {
  onOpenProjectDetail: (projectId: string) => void;
  onOpenSiteVisit: (projectName: string) => void;
}

export default function SectionDevelopments({ onOpenProjectDetail, onOpenSiteVisit }: SectionDevelopmentsProps) {
  // Only display Legacy Township and Velora Greens
  const activeProjects = PROJECTS.filter(p => p.id === "legacy" || p.id === "velora");

  return (
    <section id="developments" className="relative w-full section-dark py-32 sm:py-40 border-t border-white/10 overflow-hidden">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${luxuryVillaAmbient})` }}
      />

      {/* Structural visual guidelines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/[0.04] z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/[0.04] z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Section Header */}
        <motion.div 
          id="developments-intro-header" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center mx-auto mb-20 sm:mb-28"
        >
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            ACTIVE <span className="text-gold font-semibold">DEVELOPMENTS</span>
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-300 font-normal text-xs sm:text-sm tracking-wide leading-relaxed">
            Accenture Infra is not selling simple apartments or speculative assets. We formulate fully realized community frameworks: flagship integrated townships and boutique eco-developments.
          </p>
        </motion.div>

        {/* Alternate split layout for active projects */}
        <div className="space-y-24 md:space-y-36">
          {activeProjects.map((project: Project, index) => {
            const isEven = index % 2 === 0;
            const progress = project.id === "legacy" ? 35 : 20;
            const progressStatus = project.id === "legacy" ? "Foundation Work Complete" : "Land Development in Progress";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="pt-12 border-t border-white/10 first:border-none first:pt-0"
              >
                <div
                  id={`portfolio-project-${project.id}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Left/Right visual column */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden group bg-neutral-900 shadow-xl">
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
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 z-15 shadow-md">
                        <MapPin className="w-4 h-4 text-gold" />
                        <span className="text-xs font-sans font-medium tracking-wide text-neutral-800">{project.location}</span>
                      </div>

                      {/* Badge on Image */}
                      <div className="absolute top-6 right-6 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase bg-white text-gray-800 shadow-md">
                        {project.id === "legacy" && <Sparkles className="w-4 h-4 text-gold" />}
                        <span>{project.id === "legacy" ? "Flagship" : "Premium"}</span>
                      </div>
                    </div>
                    {/* Dummy RERA Registration No below the image */}
                    <div className="mt-4 text-[9px] font-mono tracking-widest text-gold/80 uppercase bg-white/5 py-1.5 px-4 rounded-full border border-white/10 w-fit mx-auto shadow-sm backdrop-blur-sm">
                      RERA NO: {project.id === "legacy" ? "PRM/KA/RERA/1251/L-1251" : "PRM/KA/RERA/1251/V-2364"}
                    </div>
                  </div>

                  {/* Left/Right details column */}
                  <div className={`space-y-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit block text-gold">
                        Land Mutation Trust Pre-Verified
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-semibold tracking-wide text-white uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-450 font-mono tracking-wider uppercase">
                        {project.tagline}
                      </p>
                      <div className="h-[1.5px] w-16 bg-gold" />
                      <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    {/* Physical Details: Top 4 parameters grid */}
                    <div className="space-y-2">
                      <span className="block text-[10px] font-mono tracking-wider text-neutral-400 uppercase font-bold">
                        Certified Specifications
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.masterplan.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-start gap-2">
                            <span className="font-mono text-xs font-bold text-gold">0{idx + 1}.</span>
                            <p className="text-xs text-neutral-300 leading-snug">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Construction Progress */}
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-400 flex items-center gap-1.5 uppercase font-bold">
                          <Construction className="w-4 h-4 text-gold" />
                          Construction Progress
                        </span>
                        <span className="text-gold font-bold">{progress}% Complete</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-gold to-[#A0814C] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        Current Status: {progressStatus}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-2">
                      <button
                        id={`learn-more-cta-${project.id}`}
                        onClick={() => onOpenProjectDetail(project.id)}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-2 group transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                      >
                        <span>Learn more</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
