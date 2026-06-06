import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageSquare, Briefcase, Plus, Quote } from "lucide-react";

export default function SectionTestimonials() {
  const testimonials = [
    {
      id: "test-1",
      initials: "RK",
      type: "Homeowner",
      location: "Legacy Township",
      content: "The attention to detail in infrastructure planning is remarkable. The roads, drainage, and green spaces were all thoughtfully designed. It feels like a community built to last."
    },
    {
      id: "test-2",
      initials: "PS",
      type: "NRI Investor",
      location: "Velora Greens",
      content: "As someone living abroad, I needed a development I could trust. The clear documentation, legal transparency, and regular updates gave me complete confidence in my investment."
    },
    {
      id: "test-3",
      initials: "AM",
      type: "Family Buyer",
      location: "Legacy Township",
      content: "We chose this for our family home because of the focus on long-term community living. The amenities, security, and thoughtful planning exceeded our expectations."
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

  return (
    <section className="relative w-full gradient-bg-forest py-24 sm:py-36 border-t border-white/10 overflow-hidden font-sans section-light-overlay">
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div id="testimonials-intro" className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            RESIDENT <span className="text-gold font-semibold">TESTIMONIALS</span>
          </h2>
          <p className="mt-4 text-neutral-300 font-normal text-xs sm:text-sm tracking-wide max-w-xl">
            Hear from families and investors who have made our communities their home.
          </p>
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-2 mb-12">
          {testimonials.map((test) => {
            const isSelected = activeTestimonial.id === test.id;
            return (
              <button
                id={`testimonial-toggle-btn-${test.id}`}
                key={test.id}
                onClick={() => setActiveTestimonial(test)}
                className={`py-3 px-5 rounded-lg border text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? "bg-gold text-black border-gold font-bold"
                    : "bg-black/35 text-neutral-400 border border-white/10 hover:text-white hover:border-gold/50"
                }`}
              >
                <div className="w-5 h-5 rounded-full bg-black/45 border border-white/10 flex items-center justify-center font-bold text-[9px] text-gold">
                  {test.initials}
                </div>
                <span>{test.type}</span>
              </button>
            );
          })}
        </div>

        {/* Testimonial Display */}
        <AnimatePresence mode="wait">
          <motion.div
            id={`testimonial-visual-${activeTestimonial.id}`}
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111111]/40 border border-white/[0.06] p-6 sm:p-10 rounded-xl shadow-lg shadow-black/15 relative card-glow"
          >
            <div className="absolute right-6 top-6 text-neutral-500 font-mono text-[9px] font-mono">TESTIMONIAL_ID://{activeTestimonial.id.toUpperCase()}</div>

            <div className="space-y-6">
              <Quote className="w-12 h-12 text-gold opacity-20" />
              
              <p className="text-lg sm:text-xl text-neutral-100 font-display italic font-medium leading-relaxed">
                "{activeTestimonial.content}"
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#132210] to-[#BAA360] flex items-center justify-center text-white font-bold text-lg font-mono shadow-md">
                  {activeTestimonial.initials}
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-white uppercase tracking-wider">{activeTestimonial.type}</h3>
                  <p className="text-xs text-gold font-sans uppercase tracking-widest mt-1 font-semibold">{activeTestimonial.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
