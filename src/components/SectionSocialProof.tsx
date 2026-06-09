import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import alGreenHero from "../assets/images/al_green_hero_1780310125091.png";

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

  return (
    <section className="relative w-full bg-[#0d1f0c] py-24 border-t border-white/10">
      {/* Background Image with 10% Transparency */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${alGreenHero})` }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury-heading text-3xl md:text-5xl uppercase mb-4 text-white">
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
              className="premium-card-dark p-8"
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
      </div>
    </section>
  );
}
