import { useState } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi, I'm interested in Accenture Infra projects. Please share details.");
    window.open(`https://wa.me/918042019603?text=${msg}`);
  };

  const handleCall = () => {
    window.open("tel:+918042019603");
  };

  const handleSchedule = () => {
    // Scroll to site visit section or open modal
    const visitSection = document.getElementById("visit");
    if (visitSection) {
      visitSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2">
          <button
            onClick={handleSchedule}
            className="flex items-center gap-3 px-4 py-3 bg-[#24421E] text-white rounded-lg shadow-lg hover:bg-[#1a3319] transition-all group"
          >
            <Calendar className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Schedule Visit</span>
          </button>
          <button
            onClick={handleCall}
            className="flex items-center gap-3 px-4 py-3 bg-[#24421E] text-white rounded-lg shadow-lg hover:bg-[#1a3319] transition-all group"
          >
            <Phone className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium">Call Now</span>
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-3 px-4 py-3 bg-[#24421E] text-white rounded-lg shadow-lg hover:bg-[#1a3319] transition-all group"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-gold to-[#A0814C] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <span className="text-black text-2xl font-bold">×</span>
        ) : (
          <Phone className="w-6 h-6 text-black" />
        )}
      </button>
    </div>
  );
}
