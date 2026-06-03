import { motion } from "motion/react";

const indoorAmenities = [
  "Multipurpose hall", "Creche", "Double-height kids play area", "Kids adventure zone",
  "Story telling nook", "Kids gym", "Mini library", "Learning centre",
  "Gym", "Cross-fit corner", "Yoga/Dance floor", "Interactive gym",
  "Art and craft room", "Business centre", "Video games", "Gaming arcade",
  "AV room", "Board games room", "Indoor play area", "Squash court",
  "Salon", "Spa", "Steam & sauna"
];

const facilities = [
  "Drivers/Maid dormitory", "Ironing shop", "Convenience store", "Association room",
  "Air filling station", "Car wash bay", "Car charging station"
];

const outdoorAmenities = [
  "Entrance plaza", "Bus waiting bay", "Jogging track", "Play mounds",
  "Amphitheatre", "Bonfire pits", "Pet park", "Golf putting green",
  "Cycle rack with bicycle", "Basketball court", "Sports viewing gallery", "Nanny's corner",
  "Multipurpose court", "Leisure seating zone", "Outdoor gym", "Skating arena",
  "DIY garden", "Co-working space", "Hammock garden", "Reflexology walkway",
  "Rock climbing wall", "Children's play area", "Kids obstacle park", "Meditation zone",
  "Party lawn", "Central tree plaza", "Senior citizen pavilion", "Sandpit",
  "Jungle gym", "Cognitive play area", "Tot Lot", "Interactive floor games zone",
  "Maze garden", "Chalk board wall", "Hopscotch", "Giant chess",
  "Trampoline", "Cricket practice net", "Sculpture court", "Natural Trail",
  "Adult pool", "Kids pool", "Poolside loungers", "Rain curtain",
  "Kids splash pool", "Poolside party deck with barbeque corner", "Interactive water jets", "Pool side movie screen facility"
];

const terraceAmenities = [
  "Terrace party corner", "Terrace hangout plaza", "Sky cinema",
  "Terrace hobby corner", "Terrace infinity walkway"
];

export default function SectionAmenities() {
  return (
    <section className="relative w-full bg-[#0d1f0c] py-24 sm:py-36 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-4xl md:text-5xl font-bold uppercase mb-6 text-white">
            80+ <span className="text-gold">Lifestyle Amenities</span>
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto leading-relaxed">
            World-class amenities designed for every age group, from kids to seniors
          </p>
        </motion.div>

        {/* Indoor Club Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="font-mono text-2xl font-bold text-gold mb-6">INDOOR CLUB AMENITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {indoorAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(186, 163, 96, 0.1)" }}
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-center cursor-pointer transition-all"
              >
                <span className="text-sm text-neutral-300 font-mono">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="font-mono text-2xl font-bold text-gold mb-6">FACILITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(186, 163, 96, 0.1)" }}
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-center cursor-pointer transition-all"
              >
                <span className="text-sm text-neutral-300 font-mono">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outdoor Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="font-mono text-2xl font-bold text-gold mb-6">OUTDOOR AMENITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {outdoorAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.015, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(186, 163, 96, 0.1)" }}
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-center cursor-pointer transition-all"
              >
                <span className="text-sm text-neutral-300 font-mono">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terrace Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-mono text-2xl font-bold text-gold mb-6">TERRACE AMENITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {terraceAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(186, 163, 96, 0.1)" }}
                className="bg-white/5 border border-white/10 p-4 rounded-lg text-center cursor-pointer transition-all"
              >
                <span className="text-sm text-neutral-300 font-mono">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
