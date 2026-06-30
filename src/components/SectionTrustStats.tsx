import { motion } from "motion/react";
import { Award, ShieldCheck, Users, Map } from "lucide-react";
import { trackAnalyticsEvent } from "../utils/analytics";

export default function SectionTrustStats() {
  const stats = [
    {
      value: "6+",
      label: "Years in Business",
      desc: "Delivering structural value since 2018",
      icon: Award
    },
    {
      value: "4+",
      label: "Flagship Projects",
      desc: "Completed sustainable developments",
      icon: ShieldCheck
    },
    {
      value: "1,200+",
      label: "Families Served",
      desc: "Secure home ownership records",
      icon: Users
    },
    {
      value: "150+",
      label: "Acres Developed",
      desc: "Premium masterplans laid out",
      icon: Map
    }
  ];

  const banks = [
    { name: "State Bank of India", approval: "SBI Approved" },
    { name: "HDFC Bank", approval: "HDFC Approved" },
    { name: "ICICI Bank", approval: "ICICI Approved" },
    { name: "LIC Housing Finance", approval: "LIC Approved" }
  ];

  return (
    <section className="relative w-full bg-[#F8FAF8] py-20 lg:py-[70px] border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="text-left mb-6">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] block font-bold">
            05 // TRUSTED LEADERSHIP & CREDENTIALS
          </span>
        </div>

        {/* Title */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="font-display font-medium text-4xl lg:text-5xl uppercase tracking-wide text-[#163A2D] leading-tight">
            DELIVERING <span className="text-[#C6A96B] italic font-display font-light">CONFIDENCE</span>
          </h2>
          <div className="h-[2px] w-16 bg-[#C6A96B] mt-4 mb-6" />
          <p className="text-sm text-[#4B5563] font-sans font-light leading-relaxed">
            Every square foot is backed by DTCP/BMRDA layouts, 100% legal title mutation clearances, and premium construction timelines.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="card-luxury p-8 rounded-[20px] bg-white border border-[#163A2D]/5 hover:border-[#C6A96B] shadow-md shadow-[#163A2D]/2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#F8FAF8] border border-[#163A2D]/5 w-fit text-[#C6A96B] mb-6">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-numbers font-bold text-[#163A2D] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C6A96B] font-bold mb-3">
                    {stat.label}
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 font-sans font-light leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Banking Partners & Legal Approvals */}
        <div className="pt-10 border-t border-neutral-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="font-sans text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-bold text-center lg:text-left">
                PRE-APPROVED BANKING PARTNERS
              </h3>
              <p className="text-[11px] text-neutral-500 mt-1 max-w-sm text-center lg:text-left">
                Hassle-free loan processing with immediate allocation limits.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              {banks.map((bank, idx) => (
                <div
                  key={idx}
                  onClick={() => trackAnalyticsEvent(`Bank Badge Clicked: ${bank.name}`, "Interactions", `bank_${bank.name.toLowerCase().replace(/\s+/g, "_")}`)}
                  className="px-5 py-2.5 bg-white border border-[#163A2D]/10 rounded-xl text-xs font-mono tracking-wider font-bold text-neutral-750 shadow-sm cursor-pointer hover:border-[#C6A96B] transition-colors"
                >
                  {bank.approval}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
