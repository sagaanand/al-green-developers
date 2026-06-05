import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Ruler, Home, Shield } from "lucide-react";
import { useState } from "react";

interface ConfigItem {
  id: string;
  title: string;
  image: string;
  specs: {
    area: string;
    bedrooms: string;
    bathrooms: string;
    features: string[];
  };
}

const configItems: ConfigItem[] = [
  {
    id: "2bhk",
    title: "2 BHK",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    specs: {
      area: "1200 Sq. Ft.",
      bedrooms: "2 Bedrooms",
      bathrooms: "2 Bathrooms",
      features: ["Spacious Living Room", "Modern Kitchen", "Balcony", "Parking"]
    }
  },
  {
    id: "3bhk",
    title: "3 BHK",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    specs: {
      area: "1600 Sq. Ft.",
      bedrooms: "3 Bedrooms",
      bathrooms: "3 Bathrooms",
      features: ["Master Suite", "Open Kitchen", "2 Balconies", "Study Room", "Parking"]
    }
  },
  {
    id: "row-house",
    title: "Row Housing",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    specs: {
      area: "1800 Sq. Ft.",
      bedrooms: "3 Bedrooms",
      bathrooms: "3 Bathrooms",
      features: ["Duplex Design", "Private Garden", "Terrace", "Parking"]
    }
  },
  {
    id: "villa-plot",
    title: "Villa Plots",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    specs: {
      area: "2400 Sq. Ft.",
      bedrooms: "Customizable",
      bathrooms: "Customizable",
      features: ["Premium Plot", "Landscaped Surroundings", "Clear Title", "Infrastructure Ready"]
    }
  }
];

export default function LuxuryConfigAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      {configItems.map((item) => (
        <div key={item.id} className="mb-4">
          <motion.button
            onClick={() => toggleItem(item.id)}
            className="w-full bg-[#0F2418] border border-[#D4AF37]/30 rounded-lg p-6 flex items-center justify-between hover:border-[#D4AF37] transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span className="text-2xl font-luxury-heading text-[#D4AF37] uppercase tracking-wide">
              {item.title}
            </span>
            <motion.div
              animate={{ rotate: openItem === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {openItem === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0F2418] border border-[#D4AF37]/30 rounded-lg mt-2 p-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-luxury-heading text-[#D4AF37] mb-6 uppercase">
                      {item.title} Details
                    </h3>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Ruler className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white/90">{item.specs.area}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white/90">{item.specs.bedrooms}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-white/90">{item.specs.bathrooms}</span>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-luxury-heading text-[#D4AF37] mb-3">Features</h4>
                      <ul className="space-y-2">
                        {item.specs.features.map((feature, index) => (
                          <li key={index} className="text-white/80 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-[#1A3322] font-bold py-4 px-8 rounded-lg uppercase tracking-wider text-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      Book a Tour
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

