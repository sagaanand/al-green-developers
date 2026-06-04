import { motion, AnimatePresence } from "motion/react";
import { X, Download, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface FloorPlan {
  id: string;
  title: string;
  subtitle: string;
  area: string;
  image: string;
  downloadUrl?: string;
}

interface FloorPlanPanelProps {
  isOpen: boolean;
  onClose: () => void;
  floorPlans: FloorPlan[];
  initialIndex?: number;
}

export default function FloorPlanPanel({ isOpen, onClose, floorPlans, initialIndex = 0 }: FloorPlanPanelProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  const currentPlan = floorPlans[currentIndex];

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const handlePrevious = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : floorPlans.length - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev < floorPlans.length - 1 ? prev + 1 : 0);
  };

  const handleDownload = (format: 'pdf' | 'image') => {
    // In a real implementation, this would trigger a download
    console.log(`Downloading ${currentPlan.title} as ${format}`);
    alert(`Downloading ${currentPlan.title} as ${format}`);
  };

  if (!currentPlan) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-4 md:inset-8 bg-[#0d1f0c] rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#24421E]">
              <div>
                <h2 className="font-mono text-2xl font-bold text-white uppercase">{currentPlan.title}</h2>
                <p className="text-[#BAA360] text-sm mt-1">{currentPlan.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Floor Plan Image */}
              <div className="flex-1 bg-[#0d1f0c] flex items-center justify-center p-8 overflow-auto">
                <div className="relative">
                  <motion.img
                    src={currentPlan.image}
                    alt={currentPlan.title}
                    className="max-w-full max-h-[60vh] lg:max-h-full object-contain rounded-lg border border-white/20"
                    style={{ scale: zoom }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Zoom Controls */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <button
                      onClick={handleZoomOut}
                      disabled={zoom <= 0.5}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30"
                    >
                      <ZoomOut className="w-5 h-5 text-white" />
                    </button>
                    <span className="text-white text-sm font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoom >= 2}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-30"
                    >
                      <ZoomIn className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Maximize2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-80 bg-[#24421E] border-l border-white/10 p-6 flex flex-col">
                {/* Plan Details */}
                <div className="mb-6">
                  <h3 className="font-mono text-lg font-bold text-gold mb-4">Plan Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 text-sm">Area</span>
                      <span className="text-white font-mono">{currentPlan.area}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-400 text-sm">Type</span>
                      <span className="text-white font-mono">{currentPlan.title}</span>
                    </div>
                  </div>
                </div>

                {/* Download Options */}
                <div className="mb-6">
                  <h3 className="font-mono text-lg font-bold text-gold mb-4">Download Options</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleDownload('pdf')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gold/10 border border-gold/30 text-gold rounded-lg hover:bg-gold/20 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                    <button
                      onClick={() => handleDownload('image')}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
                    >
                      <Download className="w-4 h-4" />
                      Download Image
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                {floorPlans.length > 1 && (
                  <div className="mt-auto">
                    <h3 className="font-mono text-lg font-bold text-gold mb-4">Other Plans</h3>
                    <div className="space-y-2">
                      {floorPlans.map((plan, index) => (
                        <button
                          key={plan.id}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                            index === currentIndex
                              ? 'bg-gold/20 border border-gold/30 text-gold'
                              : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                          }`}
                        >
                          <div className="font-medium text-sm">{plan.title}</div>
                          <div className="text-xs opacity-70 mt-1">{plan.area}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {floorPlans.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
