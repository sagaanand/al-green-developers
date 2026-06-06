import { motion } from "motion/react";
import { Sparkles, Gem, Shield, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCTA from "../components/FloatingCTA";

export default function AboutUs() {
  const coreValues = [
    {
      title: "Excellence in Design & Engineering",
      icon: Gem
    },
    {
      title: "Transparent Business Practices",
      icon: Shield
    },
    {
      title: "Customer-Centric Approach",
      icon: Sparkles
    },
    {
      title: "Sustainable Development",
      icon: Gem
    },
    {
      title: "Timely Delivery & Quality Assurance",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-sans">
      <Header 
        onScrollToSection={() => {}}
        onOpenTracker={() => {}}
        activeSection=""
        onOpenProjectDetail={() => {}}
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#24421E] to-[#0d1f0c]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-semibold text-5xl md:text-7xl tracking-wide uppercase mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#BAA360] font-semibold max-w-3xl mx-auto"
          >
            Real Estate is more than Construction
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Enduring Lifestyles and Thriving Communities
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              At Accenture Infra, we believe that real estate is about more than just buildings. It's about creating spaces where families grow, communities thrive, and memories are made. Our vision is to redefine urban living in India through excellence in design, transparency, and sustainable development.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Founded with a commitment to engineering excellence and environmental stewardship, we have developed over 105 acres of premium land across Bangalore East. Our projects integrate cutting-edge infrastructure with nature-centric design, creating communities that thrive for generations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Our Vision
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              To be India's most trusted developer by engineering sustainable communities that protect capital, preserve environment, and create multi-generational value for our customers and stakeholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-gold mb-2">105+</div>
                <div className="text-sm text-neutral-400">Acres Developed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-gold mb-2">2000+</div>
                <div className="text-sm text-neutral-400">Premium Homes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-mono font-bold text-gold mb-2">80+</div>
                <div className="text-sm text-neutral-400">Amenities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              To deliver world-class real estate projects that exceed customer expectations through innovative design, transparent processes, and unwavering commitment to quality and sustainability.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-300">Build sustainable communities that respect and enhance the natural environment</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-300">Maintain complete transparency in all our dealings with customers and stakeholders</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-300">Deliver projects on time with the highest quality standards</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-300">Create long-term value for our customers through thoughtful planning and execution</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-semibold uppercase mb-4">
              Core Values
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-gold/30 transition-all group"
                >
                  <Icon className="w-12 h-12 text-gold mb-4" />
                  <h3 className="text-xl font-sans font-semibold text-white">
                    {value.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0d1f0c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-neutral-300 mb-8">
              Explore our projects and discover what makes Accenture Infra different.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-bold text-sm tracking-widest uppercase rounded-lg hover:opacity-95 transition-all"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer onScrollToSection={() => {}} />
      <FloatingCTA />
    </div>
  );
}
