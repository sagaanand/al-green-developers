import { motion } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { 
  MapPin, 
  Target, 
  ChevronRight, 
  Activity, 
  ArrowUpRight, 
  FolderGit2, 
  Calendar,
  Compass,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { ScrollReveal, ScrollRevealLeft, ScrollRevealRight } from "./ScrollReveal";

const FUTURE_DEVELOPMENTS = [
  {
    id: "kudos-strip",
    title: "KADUGODI METRO ROAD STRIP",
    location: "Kadugodi Tech-Node Corridor, Bangalore East",
    tagline: "Strategic Land Intelligence Node Acquisition",
    status: "Title Mutation Confirmed // KIADB NOC Achieved",
    details: "120 raw acres of dry, highly elevated flat terrain secured at pre-announcement valuations bordering crucial upcoming Outer Ring Road & STRR highway linkages. Fully cleared for tech and enterprise warehousing developer layout plans.",
    metrics: ["120 Raw Acres", "+19.5% Projected Appreciation", "100% Mutation Security Clearances"]
  },
  {
    id: "hoskote-aerotropolis",
    title: "HOSKOTE AEROTROPOLIS CONDUIT",
    location: "Hoskote Aerospace Hub, Bangalore East",
    tagline: "Industrial Logistics Sovereign Zone Overlay",
    status: "Environmental NOC Approved // KIADB Grade-A Clear",
    details: "85 acres situated with immediate high-speed frontage access to central Bangalore-Chennai Expressway (BCIC) initiatives. Pre-engineered dry docks planned with zero carbon discharge grid design for industrial logistics providers.",
    metrics: ["85 Acres Node", "Industrial Zoned Route", "Zero Dispute Legal Status"]
  }
];

interface SectionDevelopmentsProps {
  onOpenProjectDetail: (projectId: string) => void;
  onOpenSiteVisit: (projectName: string) => void;
}

export default function SectionDevelopments({ onOpenProjectDetail, onOpenSiteVisit }: SectionDevelopmentsProps) {
  return (
    <section id="developments" className="relative w-full gradient-bg-deep py-32 sm:py-40 border-t border-white/10 overflow-hidden ambient-bg-overlay section-light-overlay">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop"
        alt="Architectural ambient"
        className="ambient-bg-image"
        loading="lazy"
      />
      {/* Structural visual guidelines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[0.5px] bg-white/[0.04] z-0 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[0.5px] bg-white/[0.04] z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          id="developments-intro-header" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            ACTIVE <span className="text-gold font-semibold">DEVELOPMENTS</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-normal text-xs sm:text-sm tracking-wide max-w-xl leading-relaxed">
            Accenture Infra is not selling simple apartments or speculative assets. We formulate fully realized community frameworks: flagship integrated townships, boutique eco-developments, luxury hospitality divisions, and high-connectivity commercial logistics networks.
          </p>
        </motion.div>

        {/* Dynamic Project Portfolio Grid List - All visible directly (strictly no filter / finder interface) */}
        <div className="space-y-32 md:space-y-40">
          {PROJECTS.map((project: Project, index) => {
            const isEven = index % 2 === 0;
            const isFlagship = project.id === "legacy";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div
                  id={`portfolio-project-${project.id}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch pt-8 border-t border-white/10 first:border-none first:pt-0 ${
                    isFlagship ? "lg:gap-16" : ""
                  }`}
                >
                  {/* Visual Column - Alternating order on desktop */}
                  <div className={`flex flex-col justify-between space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"} ${isFlagship ? "lg:col-span-8" : "lg:col-span-7"}`}>
                    <div
                      onClick={() => onOpenProjectDetail(project.id)}
                      className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/20 group bg-neutral-900 cursor-pointer shadow-lg transition-shadow hover:shadow-xl"
                    >
                      <img
                        id={`project-showcase-img-${project.id}`}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 filter brightness-[0.88] contrast-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70" />

                      {/* Left vertical location sticker */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded bg-black/90 border border-white/20 z-15">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span className="text-[9px] font-mono tracking-wider text-white uppercase">{project.location}</span>
                      </div>

                      <div className={`absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 border rounded text-[9px] font-mono tracking-widest uppercase font-bold shadow-lg ${
                        project.id === "legacy"
                          ? "bg-gold text-black border-gold"
                          : "bg-white/10 border-gold/40 text-[#D6C392]"
                      }`}>
                        {project.id === "legacy" && <Sparkles className="w-3 h-3 text-black" />}
                        <span>{project.id === "legacy" ? "FLAGSHIP DEVELOPMENT" : "Pre-Audited Zone"}</span>
                      </div>
                    </div>

                    {/* Certified parameters block */}
                    <div className="bg-white/10 border border-white/20 rounded-xl p-6 sm:p-8 space-y-6 shadow-lg">
                      <div>
                        <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                          <FolderGit2 className="w-3.5 h-3.5 text-gold" />
                          CERTIFIED PARAMETERS & SPATIAL PLANS
                        </span>
                        <h4 className="text-white text-sm font-sans font-semibold uppercase mt-2">Physical Layout Design Elements</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.masterplan.map((item, idx) => (
                          <div key={idx} className="p-4 bg-white/5 rounded border border-white/10 transition-colors hover:border-white/20 hover:bg-white/10">
                            <span className="text-gold font-mono text-xs font-bold block mb-1">0{idx + 1}.</span>
                            <p className="text-xs text-neutral-300 font-normal leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Presentation Specs Column - Alternating order on desktop */}
                  <div className={`flex flex-col justify-between space-y-8 ${isEven ? "lg:order-2" : "lg:order-1"} ${isFlagship ? "lg:col-span-4" : "lg:col-span-5"}`}>
                    {/* Title & story */}
                    <div className="space-y-4">
                      <span className="text-[9px] font-mono text-gold uppercase tracking-[0.2em] bg-white/5 px-2.5 py-1 rounded border border-gold/25 w-fit block font-bold">
                        LAND MUTATION TRUST PRE-VERIFIED
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-display font-semibold tracking-wide text-white uppercase leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs font-sans text-neutral-400 tracking-wide uppercase italic">
                        {project.tagline}
                      </p>
                      <div className="h-[1.5px] w-24 bg-gradient-to-r from-gold to-[#A0814C]" />
                      <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    {/* Rating Gauges */}
                    <div className="p-6 bg-[#111111]/40 rounded-xl border border-white/[0.06] space-y-6 card-glow">
                      <span className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                        <Activity className="w-3.5 h-3.5 text-gold" />
                        ACCENTURE INFRA REGULATORY VALUE MODEL
                      </span>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center p-3 border border-white/[0.04] bg-black/40 rounded">
                          <span className="text-[9px] text-neutral-400 font-mono block">CONNECTIVITY</span>
                          <span className="text-sm text-white font-mono font-bold mt-1 block">
                            {project.investmentScore.connectivity} <span className="text-[9px] font-normal text-neutral-400">/ 10</span>
                          </span>
                        </div>
                        <div className="text-center p-3 border border-white/[0.04] bg-black/40 rounded">
                          <span className="text-[9px] text-neutral-400 font-mono block">INFRASTRUCTURE</span>
                          <span className="text-sm text-white font-mono font-bold mt-1 block">
                            {project.investmentScore.infrastructure} <span className="text-[9px] font-normal text-neutral-400">/ 10</span>
                          </span>
                        </div>
                        <div className="text-center p-3 border border-[#BAA360]/30 bg-gold/10 rounded">
                          <span className="text-[9px] text-gold font-mono block font-bold">LIQUIDITY</span>
                          <span className="text-sm text-gold font-mono font-bold mt-1 block">
                            {project.investmentScore.liquidity} <span className="text-[9px] font-semibold text-gold/80">/ 10</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider font-semibold">CUMULATIVE STABILITY SCORE</span>
                        <span className="text-xs text-gold font-mono font-bold tracking-widest">{project.investmentScore.total} VALUE RATING</span>
                      </div>
                    </div>

                    {/* Growth Triggers */}
                    <div className="space-y-4">
                      <span className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest uppercase text-neutral-300 font-bold mb-2">
                        <Target className="w-3.5 h-3.5 text-gold" />
                        PRIMARY TRANSIT & DEVELOPMENT DRIVERS
                      </span>
                      <ul className="space-y-2.5">
                        {project.growthDrivers.map((drv, idx) => (
                          <li key={idx} className="text-xs text-neutral-300 font-normal flex items-start gap-2 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{drv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Book & Details buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {(project.id === "hayat" || project.id === "logistics") ? (
                        <>
                          <button
                            id={`read-more-cta-${project.id}`}
                            onClick={() => onOpenProjectDetail(project.id)}
                            className="py-4 rounded-xl bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-2 group transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                          >
                            <span>Read More</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>

                          <button
                            id={`fast-visit-cta-${project.id}`}
                            onClick={() => onOpenSiteVisit(project.title)}
                            className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono tracking-widest uppercase text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                          >
                            <span>Book Private Tour</span>
                            <Calendar className="w-3.5 h-3.5 text-gold" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            id={`detail-ledg-cta-${project.id}`}
                            onClick={() => onOpenProjectDetail(project.id)}
                            className="py-4 rounded-xl bg-gradient-to-r from-gold to-[#A0814C] hover:from-gold-light hover:to-gold text-xs font-mono tracking-widest uppercase text-black font-bold flex items-center justify-center gap-2 group transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                          >
                            <span>Interactive Ledger</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>

                          <button
                            id={`fast-visit-cta-${project.id}`}
                            onClick={() => onOpenSiteVisit(project.title)}
                            className="py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-mono tracking-widest uppercase text-white font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                          >
                            <span>Book Private Tour</span>
                            <Calendar className="w-3.5 h-3.5 text-gold" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider / Future acquisition nodes header inside developments */}
        <div id="future-acquisition-section" className="mt-36 pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block mb-2 font-bold select-none">
              STRATEGIC LAND BANKING CORRIDORS
            </span>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
              FUTURE Raw Land <span className="text-gold font-semibold">Acquisitions</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-normal max-w-xl">
              We proactively secure raw layouts directly on projected infra spurs, before public tenders go live. This guarantees maximum early-stage cost leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {FUTURE_DEVELOPMENTS.map((fd, i) => (
              <div 
                key={fd.id}
                className="bg-[#111111]/40 border border-white/[0.06] rounded-2xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-gold transition-all duration-500 shadow-sm"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-white/[0.02] transition-colors pointer-events-none" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#BAA360] font-bold font-mono">
                        ZONING & FORENSIC TITLE SECURED
                      </span>
                    </div>
                    <span className="text-xs font-mono text-neutral-400 font-bold">0{i+1}.</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans text-xl font-semibold uppercase text-white tracking-wide">
                      {fd.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-300">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>{fd.location}</span>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10 w-full" />

                  <div className="space-y-4">
                    <div className="p-3 bg-emerald-950/20 border border-emerald-800/30 rounded">
                      <span className="block text-[8px] font-mono text-neutral-400 uppercase tracking-widest font-bold font-mono">MUTATION REGISTRY STATE</span>
                      <span className="block text-xs font-mono text-emerald-400 font-bold mt-1 uppercase flex items-center gap-1 font-mono">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                        {fd.status}
                      </span>
                    </div>
                    
                    <p className="text-xs text-neutral-300 font-normal leading-relaxed">
                      {fd.details}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {fd.metrics.map((m, idx) => (
                      <div key={idx} className="p-2.5 bg-black/35 border border-white/[0.04] rounded text-center">
                        <span className="block text-[8px] font-mono text-neutral-400 uppercase tracking-widest font-semibold font-mono">METRIC_0{idx+1}</span>
                        <span className="block text-[11px] font-mono text-white font-bold mt-1 uppercase truncate font-mono">{m.split(" ").slice(0,2).join(" ")}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    id={`schedule-precognition-visit-${fd.id}`}
                    onClick={() => onOpenSiteVisit(fd.title)}
                    className="w-full py-4 rounded-xl border border-gold/25 bg-white/5 hover:bg-white/10 text-xs font-mono tracking-widest uppercase text-gold font-bold flex items-center justify-center gap-2 group transition-all cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-gold" />
                    <span>Inquire Corridor Access</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
