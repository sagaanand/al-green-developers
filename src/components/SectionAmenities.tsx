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
    <section className="relative w-full section-dark section-spacing-lg border-t border-white/10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4" style={{ color: '#C9A45C' }} />
            <span className="text-xs font-sans font-semibold tracking-widest uppercase" style={{ color: '#C9A45C' }}>80+ Amenities</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold uppercase mb-6 text-white">
            Lifestyle <span style={{ color: '#C9A45C' }}>Amenities</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            World-class amenities designed for every age group, from kids to seniors
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="premium-card-dark p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/10">
                    <Icon className="w-6 h-6" style={{ color: '#C9A45C' }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 font-sans flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A45C' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
