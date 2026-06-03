import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

interface QuickEnquireFormProps {
  projectName?: string;
}

export default function QuickEnquireForm({ projectName = "Accenture Infra Projects" }: QuickEnquireFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [projectInterest, setProjectInterest] = useState(projectName);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = encodeURIComponent(
      `Hi, I'm ${name.trim()}.\n\nI'm interested in ${projectInterest}.\n\nPlease share more details.\n\nPhone: ${phone.trim()}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");

    // Reset form
    setName("");
    setPhone("");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white/5 border border-white/20 rounded-xl p-8">
      <h3 className="font-mono text-2xl font-bold text-white mb-2">
        Quick Enquiry
      </h3>
      <p className="text-neutral-300 mb-6">
        Share your details and we'll connect with you on WhatsApp
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
            required
          />
        </div>

        <div>
          <label htmlFor="project" className="block text-sm font-medium text-neutral-300 mb-2">
            Project Interest
          </label>
          <select
            id="project"
            value={projectInterest}
            onChange={(e) => setProjectInterest(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
          >
            <option value="Legacy Township">Legacy Township</option>
            <option value="Velora Greens">Velora Greens</option>
            <option value="Hayat Greenz Resort">Hayat Greenz Resort</option>
            <option value="Accenture Greenz Warehousing">Accenture Greenz Warehousing</option>
            <option value="All Projects">All Projects</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-[#A0814C] text-black font-semibold rounded-lg hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Connecting...</span>
          ) : (
            <>
              <MessageCircle className="w-5 h-5" />
              <span>Request Callback on WhatsApp</span>
            </>
          )}
        </button>

        <p className="text-xs text-neutral-400 text-center">
          By submitting, you agree to receive communication via WhatsApp
        </p>
      </form>
    </div>
  );
}
