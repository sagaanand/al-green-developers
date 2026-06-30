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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 lg:hidden shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handleSchedule}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-100 shadow-xs"
        >
          <Calendar className="w-5 h-5 text-gold-dark" />
          <span className="text-xs font-semibold text-neutral-800">Visit</span>
        </button>
        <button
          onClick={handleCall}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors border border-neutral-100 shadow-xs"
        >
          <Phone className="w-5 h-5 text-gold-dark" />
          <span className="text-xs font-semibold text-neutral-800">Call Now</span>
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center gap-1 py-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors border border-green-100 shadow-xs"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          <span className="text-xs font-semibold text-green-800">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
