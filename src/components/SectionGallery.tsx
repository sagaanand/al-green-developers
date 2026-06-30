import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import { trackAnalyticsEvent } from "../utils/analytics";

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

export default function SectionGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Master Plan",
    "Villa Plots",
    "Clubhouse",
    "Amenities",
    "Construction Progress",
    "Location"
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/images/luxury_villa_interior.png",
      category: "Clubhouse",
      title: "Eco-Luxury Club Lounge",
      description: "Premium social sanctuary featuring warm wood finishes, low-carbon building materials, and panoramic canopy views."
    },
    {
      id: 2,
      src: "/images/gated_community_pathway.png",
      category: "Amenities",
      title: "Landscaped Pathways",
      description: "Paved eco-walkways and organic tree borders lining peaceful neighborhood avenue paths."
    },
    {
      id: 3,
      src: "/images/al_green_hero.png",
      category: "Villa Plots",
      title: "Premium Villa Communities",
      description: "Pre-certified clear DTCP plots ready for custom eco-villa structures with dedicated utilities."
    },
    {
      id: 4,
      src: "/images/al_green_legacy.png",
      category: "Master Plan",
      title: "Integrated Master Plan",
      description: "Self-sustaining gated layouts combining private plots, forest corridors, and zero-waste infrastructure."
    },
    {
      id: 5,
      src: "/images/land_intelligence.png",
      category: "Location",
      title: "Bangalore East Corridor",
      description: "Topographic mapping overlays and spatial alignment plans designed to ensure natural drainage systems."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop",
      category: "Construction Progress",
      title: "Roads & Utilities Laying",
      description: "Active status of high-grade asphalt roads, independent underground power, and rain conduits."
    }
  ];

  // Escape key close handler for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="relative w-full bg-white py-24 sm:py-32 overflow-hidden font-sans border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl text-center mx-auto mb-12">
          <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#BAA360] block font-bold mb-3">
            VISUAL PORTFOLIO
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl uppercase tracking-tight text-neutral-850 leading-tight">
            ESTATE <span className="text-gold font-semibold font-luxury-heading-italic">GALLERY</span>
          </h2>
          <div className="h-[2.5px] w-20 bg-gold mx-auto mt-4 mb-6" />
          <p className="text-neutral-500 font-normal text-sm sm:text-base tracking-wide leading-relaxed">
            Take a visual tour through our pre-verified developments, eco-integrated architectures, and custom estate designs in Bangalore East.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                trackAnalyticsEvent("Gallery Filter Switched", "Interactions", `filter_${cat.toLowerCase().replace(/\s+/g, "_")}`);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-bold transition-all border cursor-pointer focus-premium ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "bg-white text-neutral-600 border-neutral-200 hover:text-neutral-900 hover:border-neutral-450"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid with Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[350px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 bg-neutral-50 cursor-pointer focus-premium"
                tabIndex={0}
                onClick={() => {
                  setSelectedImage(item);
                  trackAnalyticsEvent("Gallery Image Opened", "Interactions", `image_${item.id}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(item);
                    trackAnalyticsEvent("Gallery Image KeyOpen", "Interactions", `image_${item.id}`);
                  }
                }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Category Sticker (Top-Left) */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-neutral-150 px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold text-neutral-800 shadow-sm">
                  {item.category}
                </div>

                {/* Hover Text & Icon */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between text-white z-10">
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm tracking-wide uppercase">{item.title}</h4>
                    <p className="text-[11px] text-neutral-300 font-sans font-light line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-full bg-gold hover:bg-gold-light text-black flex items-center justify-center shadow-md shrink-0 ml-4">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors focus-premium"
              onClick={() => setSelectedImage(null)}
              title="Close Gallery"
              aria-label="Close Gallery Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] flex flex-col md:flex-row bg-[#111827] rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image side */}
              <div className="md:w-2/3 aspect-[4/3] md:aspect-auto md:h-[70vh] bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text side */}
              <div className="md:w-1/3 p-8 flex flex-col justify-between text-white space-y-6">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gold text-[9px] uppercase tracking-wider font-bold font-mono">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                    {selectedImage.title}
                  </h3>
                  <div className="h-[1.5px] w-12 bg-gold" />
                  <p className="text-xs text-neutral-350 leading-relaxed font-sans font-light">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800 space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                    <ImageIcon className="w-4 h-4 text-gold/60" />
                    <span>Verified Real Estate Image</span>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-3 bg-white hover:bg-neutral-100 text-black text-xs font-mono tracking-widest uppercase font-bold rounded-lg transition-all active:scale-[0.98] cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
