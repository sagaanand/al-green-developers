import { motion } from "motion/react";
import { Star, Quote, Construction, TrendingUp } from "lucide-react";

export default function SectionSocialProof() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Legacy Township",
      rating: 5,
      text: "The transparency in documentation and regular construction updates gave us complete confidence. The quality of work is exceptional."
    },
    {
      name: "Priya Sharma",
      location: "Velora Greens",
      rating: 5,
      text: "The attention to detail in planning and the sustainable approach to development is exactly what we were looking for."
    },
    {
      name: "Amit Patel",
      location: "Legacy Township",
      rating: 5,
      text: "From booking to possession, the entire process was smooth. The team's professionalism and commitment to timelines is commendable."
    }
  ];

  const constructionUpdates = [
    {
      project: "Legacy Township",
      status: "Foundation Work Complete",
      progress: 35,
      icon: Construction
    },
    {
      project: "Velora Greens",
      status: "Land Development in Progress",
      progress: 20,
      icon: TrendingUp
    }
  ];

  return (
    <section className="relative w-full bg-[#0d1f0c] py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl md:text-5xl font-bold uppercase mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto font-normal">
            Real experiences from our valued customers
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/20 p-8 rounded-xl"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-neutral-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-neutral-400">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Construction Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-mono text-2xl md:text-3xl font-bold uppercase mb-4">
            Construction Progress
          </h3>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Stay updated with our latest project developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {constructionUpdates.map((update, index) => {
            const Icon = update.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/20 p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-gold" />
                  <div>
                    <div className="font-bold text-white">{update.project}</div>
                    <div className="text-sm text-neutral-400">{update.status}</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-gold to-[#A0814C] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${update.progress}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gold mt-2">{update.progress}% Complete</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
