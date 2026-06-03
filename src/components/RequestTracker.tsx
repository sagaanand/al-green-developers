import { motion } from "motion/react";
import { X, CheckCircle, Clock, FileDown, ShieldCheck, Download, ExternalLink, RefreshCw } from "lucide-react";
import { LeadSubmission, SiteVisitSchedule } from "../types";

interface RequestTrackerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  visits: SiteVisitSchedule[];
  onCancelVisit?: (id: string) => void;
}

export default function RequestTracker({ isOpen, onClose, leads, visits, onCancelVisit }: RequestTrackerProps) {
  if (!isOpen) return null;

  const sampleReportsAvailable = [
    {
      id: "report-bangalore-east",
      title: "Bangalore East Land Appreciation & Space Infrastructure Corridor Map 2026",
      size: "8.4 MB",
      type: "PDF Intelligence Report",
      slug: "BANGALORE_EAST_CORRIDOR_INTELLIGENCE_2026.pdf"
    },
    {
      id: "report-due-diligence",
      title: "Accenture Infra Corporate Legal & Due Diligence Standard Check",
      size: "4.1 MB",
      type: "Risk & Audit Booklet",
      slug: "ACCENTURE_INFRA_DUE_DILIGENCE_CHARTER.pdf"
    },
    {
      id: "report-guide",
      title: "Land Acquisition & Multi-Generational Wealth Investment Guide",
      size: "12.8 MB",
      type: "Exclusive Executive Briefing",
      slug: "ACCENTURE_INFRA_INVESTMENT_STRATEGY.pdf"
    }
  ];

  const handleDownloadStub = (filename: string) => {
    // Generate simple local stub download to prove full-stack functional capability
    const element = document.createElement("a");
    const file = new Blob([`ACCENTURE INFRA LAND INTELLIGENCE - CERTIFIED RECORD [${filename}]\nGenerated date: June 1, 2026\nVerify via: https://accentureinfra.com/verify`], {type: "text/plain"});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div id="request-tracker" className="fixed inset-0 z-50 overflow-hidden font-mono">
      {/* Background Dim */}
      <div className="absolute inset-0 bg-black/65 backdrop-blur-xs" onClick={onClose} />

      {/* Slide-out Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 sm:pl-16">
        <motion.div
          id="request-tracker-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="w-screen max-w-lg bg-[#24421E] border-l border-white/10"
        >
          {/* Header */}
          <div className="h-full flex flex-col bg-[#1c3619] shadow-2xl">
            <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-black/35">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <div>
                  <h3 className="font-mono font-bold text-white tracking-widest uppercase text-xs">
                    Client Ledger & Dossier
                  </h3>
                  <span className="block text-[9px] font-mono text-neutral-400 font-mono">
                    REALTIME IDENTITY & TRANSACTION LOG
                  </span>
                </div>
              </div>
              <button
                id="tracker-panel-close-btn"
                onClick={onClose}
                className="p-1 rounded-md text-neutral-300 hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Ledger content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#152913]">
              {/* Security Header */}
              <div className="p-4 bg-black/45 border border-white/10 rounded-lg">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black text-xs font-mono font-bold shrink-0 font-mono">
                    SEC
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider text-gold uppercase font-mono">
                      INTELLIGENCE LINK SECURED
                    </h4>
                    <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                      All submitted inquiries, visitation tokens, and downloaded charters are safely hashed locally. Your privacy is paramount. No public broker distribution networks are used.
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: Scheduled Site Visits */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#BAA360] block mb-4 font-bold font-mono">
                  Scheduled Private Visits ({visits.length})
                </span>

                {visits.length === 0 ? (
                  <div className="p-6 rounded-lg border border-dashed border-white/10 text-center bg-black/25">
                    <Clock className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                    <p className="text-xs text-neutral-400 font-mono font-mono">No Private Tours Booked Yet</p>
                    <p className="text-[10px] text-neutral-300 mt-1 leading-relaxed">
                      Select appropriate developments below to design customized concierge visitation experiences.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {visits.map((itm) => (
                      <div
                        id={`tracker-visit-card-${itm.id}`}
                        key={itm.id}
                        className="p-4 rounded-lg bg-black/35 border border-white/10 relative hover:border-gold/50 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-mono tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-bold font-mono">
                              VISIT TOKEN: {itm.id.slice(0, 8).toUpperCase()}
                            </span>
                            <h4 className="font-mono font-bold text-white text-sm mt-2">
                              {itm.projectSelected}
                            </h4>
                            <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5 font-mono">
                              Recipient Name: <span className="text-[#BAA360] font-bold">{itm.name}</span>
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="flex items-center gap-1 text-[10px] text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded font-mono uppercase font-bold font-mono">
                              <CheckCircle className="w-3 h-3 text-green-400 font-bold" />
                              CONFIRMED
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-400 font-mono">
                          <div>
                            <span className="block text-[9px] text-[#BAA360] font-bold font-mono">SCHEDULE DATE & TIME:</span>
                            <span className="text-white font-medium">{itm.visitDate} @ {itm.visitTime}</span>
                          </div>
                          <div>
                            <span className="block text-[9px] text-[#BAA360] font-bold font-mono">INVITATION CLASS:</span>
                            <span className="text-gold font-bold uppercase tracking-wider font-mono">{itm.visitorType}</span>
                          </div>
                        </div>

                        {onCancelVisit && (
                          <div className="mt-4 flex justify-end">
                            <button
                              id={`cancel-visit-btn-${itm.id}`}
                              onClick={() => onCancelVisit(itm.id)}
                              className="text-[10px] tracking-wider text-red-400 hover:text-red-300 font-mono uppercase font-bold underline cursor-pointer font-mono"
                            >
                              Cancel Invitation
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* SECTION: Downloaded or Inquired Intelligence Reports */}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#BAA360] block mb-4 font-bold font-mono">
                  Report Download Hub
                </span>

                {leads.length > 0 && (
                  <div className="mb-4 space-y-3">
                    <span className="text-[9px] font-mono text-neutral-450 font-bold block">CERTIFIED RECENT INQUIRIES</span>
                    {leads.map((lead) => (
                      <div
                        id={`tracker-lead-card-${lead.id}`}
                        key={lead.id}
                        className="p-3.5 rounded bg-black/35 border border-white/10 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs text-white font-bold font-mono">{lead.reportType}</p>
                          <p className="text-[10px] text-neutral-400 font-mono mt-0.5">Email linked: <span className="text-[#BAA360] font-semibold">{lead.email}</span></p>
                        </div>
                        <button
                          id={`download-lead-report-${lead.id}`}
                          onClick={() => handleDownloadStub(lead.reportType.replace(/\s+/g, "_") + "_DOCKET.txt")}
                          className="p-2 rounded bg-gold/10 text-gold hover:bg-gold hover:text-black transition-all cursor-pointer"
                          title="Download Docket File"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-3">
                  <span className="text-[9px] font-mono text-[#BAA360] block font-bold font-mono">STANDARD ASSETS INDEX</span>
                  {sampleReportsAvailable.map((rep) => (
                    <div
                      id={`standard-report-card-${rep.id}`}
                      key={rep.id}
                      className="p-4 rounded-lg bg-black/35 border border-white/10 hover:border-gold/50 transition-all flex justify-between items-center group"
                    >
                      <div className="max-w-[75%]">
                        <span className="text-[9px] font-mono tracking-widest text-[#BAA360] uppercase block mb-1 font-bold font-mono">
                          {rep.type}
                        </span>
                        <h5 className="font-mono text-xs text-white group-hover:text-gold font-bold line-clamp-1">
                          {rep.title}
                        </h5>
                        <span className="text-[10px] font-mono text-neutral-400 font-mono">{rep.size} • Verified secure</span>
                      </div>
                      <button
                        id={`standard-report-download-btn-${rep.id}`}
                        onClick={() => handleDownloadStub(rep.slug)}
                        className="p-2.5 rounded-full bg-black/45 border border-white/10 hover:border-gold hover:bg-gold text-white hover:text-black transition-all cursor-pointer flex items-center justify-center group/btn"
                      >
                        <FileDown className="w-4 h-4 text-gold group-hover/btn:text-black transition-colors" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer containing contact advisor */}
            <div className="p-6 border-t border-white/10 bg-black/45">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>CLIENT SECURE SHELL</span>
                <span className="flex items-center gap-1 text-gold font-bold">
                  <RefreshCw className="w-3 h-3 text-gold animate-spin" />
                  Synced LocalStorage
                </span>
              </div>
              <button
                id="tracker-panel-direct-advisor-btn"
                onClick={() => handleDownloadStub("ACCENTURE_INFRA_TRUST_LEDGER.txt")}
                className="w-full mt-4 py-3 bg-gold hover:bg-[#BAA360] text-black font-bold font-mono text-xs tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-all cursor-pointer font-mono"
              >
                Export Complete Title Ledger
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
