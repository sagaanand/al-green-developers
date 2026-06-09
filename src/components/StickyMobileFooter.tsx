import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function StickyMobileFooter() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi, I'm interested in Accenture Infra projects. Please share details.");
    window.open(`https://wa.me/918042019603?text=${msg}`);
  };

  const handleCall = () => {
    window.open("tel:+918042019603");
  };

  const handleSchedule = () => {
    const visitSection = document.getElementById("visit");
    if (visitSection) {
      visitSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0d1f0c] border-t border-white/20 px-4 py-3 lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handleSchedule}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Calendar className="w-5 h-5 text-gold" />
          <span className="text-xs font-medium text-white">Schedule Visit</span>
        </button>
        <button
          onClick={handleCall}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Phone className="w-5 h-5 text-gold" />
          <span className="text-xs font-medium text-white">Call Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-green-600/20 rounded-lg hover:bg-green-600/30 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-green-400" />
          <span className="text-xs font-medium text-white">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
