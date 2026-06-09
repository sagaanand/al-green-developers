import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, MapPin, Shield, Leaf, Home, Award, Phone, ArrowRight, X } from "lucide-react";
import logoIcon from "../assets/logo-icon.png";

export default function VeloraGreensLanding() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#0d1f0c] text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"
            alt="Velora Greens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d1f0c]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img src={logoIcon} alt="Logo" className="w-12 h-12 object-contain" />
                <div className="text-center">
                  <span className="block font-sans text-lg tracking-[0.25em] font-normal text-white">
                    ACCENTURE
                  </span>
                  <span className="block font-sans text-lg tracking-[0.25em] font-black text-[#BAA360]">
                    INFRA
                  </span>
                </div>
              </div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                  VELORA GREENS
                </h1>
                <p className="text-xl md:text-2xl text-[#BAA360] font-semibold mb-6">
                  Boutique Residential Community in Bangalore East
                </p>
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <MapPin className="w-5 h-5 text-[#BAA360]" />
                  <span className="text-lg">Sarjapur-Varthur Tech Belt</span>
                </div>
              </motion.div>

              {/* Price Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-[#BAA360] to-[#A0814C] p-6 rounded-2xl max-w-md"
              >
                <p className="text-black text-sm font-mono uppercase tracking-wider mb-2">
                  Starting From
                </p>
                <p className="text-black text-4xl md:text-5xl font-black">
                  ₹16 Lakhs*
                </p>
                <p className="text-black/70 text-xs mt-2">
                  *Limited Time Launch Pricing
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Home, text: "90 Boutique Homes" },
                  { icon: Leaf, text: "Heirloom Forest" },
                  { icon: Shield, text: "RERA Approved" },
                  { icon: Award, text: "9.5 Investment Score" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#BAA360]" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#24421E]/95 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Book Free Site Visit</h2>
                <p className="text-white/70 text-sm">
                  Get exclusive access to Velora Greens with complimentary pickup
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#BAA360] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#BAA360] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#BAA360] to-[#A0814C] hover:from-[#D6C392] hover:to-[#BAA360] text-black font-bold text-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Callback
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-white/50">
                    By submitting, you agree to receive calls from our team
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#BAA360] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-white/70 text-sm">
                    Our team will call you shortly to schedule your free site visit
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d1f0c]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Why Velora Greens?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A meticulously curated boutique sanctuary designed for elevated peace, lower spatial density, and high air exchange
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "90 Boutique Homes",
                description: "Elegant low-rise apartments with climate ventilation for natural airflow",
                icon: Home
              },
              {
                title: "Private Row Housing",
                description: "Custom row housing units with micro-sun decks for personalized living",
                icon: Home
              },
              {
                title: "Villa Plots",
                description: "Exclusive ready-to-build gated estate villa plots with lush surroundings",
                icon: Award
              },
              {
                title: "Heirloom Forest",
                description: "Community green spaces designed for multi-generational value creation",
                icon: Leaf
              },
              {
                title: "PRR Frontage",
                description: "Immediate frontage on Bangalore Peripheral Ring Road expansion zone",
                icon: MapPin
              },
              {
                title: "Energy Efficient",
                description: "45% reduction in utility costs with energy-recovery ventilation",
                icon: Shield
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#BAA360]/50 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-[#BAA360] mb-4" />
                <h3 className="text-xl font-sans font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-[#24421E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">Prime Location</h2>
              <p className="text-white/70 mb-8">
                Located in the Sarjapur-Varthur Tech Belt, one of Bangalore East's fastest-growing corridors with exceptional connectivity and infrastructure development.
              </p>
              <div className="space-y-4">
                {[
                  "Bangalore Peripheral Ring Road Expansion Zone",
                  "21.5% Growth Projection",
                  "Tech SEZs & Corporate Headquarters Nearby",
                  "Proximity to Varthur Lake Ecological Corridor"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#BAA360]" />
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#BAA360] mx-auto mb-4" />
                <h3 className="font-sans text-2xl font-semibold mb-2">Sarjapur-Varthur Tech Belt</h3>
                <p className="text-white/70">Bangalore East</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0d1f0c]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">Don't Miss This Opportunity</h2>
            <p className="text-white/70 mb-8">
              Limited inventory at launch pricing. Book your free site visit today.
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#BAA360] to-[#A0814C] hover:from-[#D6C392] hover:to-[#BAA360] text-black font-bold text-lg rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Book Free Site Visit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#132210] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Accenture Infra Ecosystem Private Limited. RERA Approved.
          </p>
        </div>
      </footer>
    </div>
  );
}
