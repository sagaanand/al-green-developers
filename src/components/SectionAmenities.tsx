import { motion } from "motion/react";
import { Dumbbell, Gamepad2, Trophy, Users, Waves, Sparkles } from "lucide-react";

const amenityCategories = [
  {
    id: "wellness",
    title: "Wellness",
    icon: Dumbbell,
    items: ["Gym", "Cross-fit corner", "Yoga/Dance floor", "Interactive gym", "Spa", "Steam & sauna", "Salon", "Outdoor gym", "Meditation zone", "Reflexology walkway"]
  },
  {
    id: "recreation",
    title: "Recreation",
    icon: Gamepad2,
    items: ["Video games", "Gaming arcade", "AV room", "Board games room", "Indoor play area", "Squash court", "Art and craft room", "Business centre", "Sky cinema", "Terrace hobby corner"]
  },
  {
    id: "sports",
    title: "Sports",
    icon: Trophy,
    items: ["Basketball court", "Multipurpose court", "Skating arena", "Cricket practice net", "Golf putting green", "Rock climbing wall", "Squash court", "Jogging track"]
  },
  {
    id: "family",
    title: "Family",
    icon: Users,
    items: ["Creche", "Double-height kids play area", "Kids adventure zone", "Story telling nook", "Kids gym", "Mini library", "Learning centre", "Senior citizen pavilion", "Nanny's corner"]
  },
  {
    id: "water",
    title: "Water Experiences",
    icon: Waves,
    items: ["Adult pool", "Kids pool", "Kids splash pool", "Poolside loungers", "Rain curtain", "Poolside party deck with barbeque corner", "Interactive water jets", "Pool side movie screen facility"]
  }
];

export default function SectionAmenities() {
  return (
    <section className="relative w-full py-20 lg:py-[70px] bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8FAF8] border border-[#163A2D]/10 rounded-full mb-6 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-[#C6A96B]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#C6A96B]">80+ Amenities</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-medium uppercase mb-6 text-[#163A2D]">
            Lifestyle <span className="text-[#C6A96B] italic font-display font-light">Amenities</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#C6A96B] mx-auto mt-4 mb-4" />
          <p className="text-neutral-500 text-sm max-w-3xl mx-auto leading-relaxed font-sans font-light">
            World-class amenities designed for every age group, from kids to seniors.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="card-luxury p-8 bg-white border border-[#163A2D]/10 rounded-[20px] shadow-sm hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-[#F8FAF8] border border-[#163A2D]/5">
                    <Icon className="w-6 h-6 text-[#C6A96B]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#163A2D]">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm font-sans flex items-center gap-2 text-neutral-600 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C6A96B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
