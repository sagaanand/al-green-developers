import { useState } from "react";
import { motion } from "motion/react";
import { 
  Compass, 
  Building2, 
  ExternalLink, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Layers,
  ArrowLeft,
  CalendarCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoNewIcon from "../assets/logo-new-icon.png";
import logoNewInfra from "../assets/logo-new-infra.png";

export default function Linktree() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const projects = [
    {
      title: "Velora Greens",
      subtitle: "Modern Living & Courtyard Homes",
      location: "Sarjapur-Varthur Tech Belt",
      path: "/project/velora",
      icon: Layers,
      highlight: "Courtyard Residences & Row Houses",
      tag: "Residential"
    },
    {
      title: "Legacy Township",
      subtitle: "105-Acre Flagship Integrated City",
      location: "Whitefield-Hoskote Corridor",
      path: "/project/legacy",
      icon: Building2,
      highlight: "80+ Premium Indoor & Outdoor Amenities",
      tag: "Township"
    },
    {
      title: "Hayat Greenz Resort",
      subtitle: "Nature-Inspired Ecological Retreat",
      location: "Scenic Hoskote Forest Fringe",
      path: "/project/hayat",
      icon: Compass,
      highlight: "Wellness Mineral Spas & Eco-Cabins",
      tag: "Hospitality"
    },
    {
      title: "Accenture Greenz Warehousing",
      subtitle: "Future-Ready Logistics Infrastructure",
      location: "Budigere-Hoskote Logistics Cluster",
      path: "/project/logistics",
      icon: ShieldCheck,
      highlight: "High-Capacity Solar Grid & Cargo Nodes",
      tag: "Commercial"
    }
  ];

  const primaryActions = [
    {
      title: "Visit Main Website",
      desc: "Explore interactive maps, legal mutation deeds, and community galleries.",
      path: "/",
      icon: Sparkles
    },
    {
      title: "About Our Heritage & Team",
      desc: "Understand our 40-year clear title record and sustainable land strategy.",
      path: "/about",
      icon: Building2
    },
    {
      title: "Explore All Developments",
      desc: "Compare investment scores, connectivity ratings, and masterplans.",
      path: "/projects",
      icon: Compass
    },
    {
      title: "Schedule Site Visit / Consultation",
      desc: "Arrange a priority HNI concierge tour or inspect parent deeds.",
      path: "/contact",
      icon: CalendarCheck,
      featured: true
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/accenture-infra-bangalore/",
      icon: Linkedin,
      label: "Accenture Infra"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/accentureinfra/",
      icon: Instagram,
      label: "@accentureinfra"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61590411426737",
      icon: Facebook,
      label: "Accenture Infra Bangalore"
    }
  ];

  const companyHighlights = [
    {
      question: "Why choose Accenture Infra (Al Green Developers)?",
      answer: "We are real estate pioneers focusing strictly on hyper-growth corridors in Bangalore East. By acquiring lands directly without middle-agency speculation, we secure clean 40-year clear parent titles, single-window RERA permissions, and build high-integrity infrastructure designed to appreciate across generations."
    },
    {
      question: "What makes our land verification different?",
      answer: "We run a triple legal validation protocol for every acre. Our in-house mutation registry desks and retained senior legal advocates compile comprehensive title intelligence reports, verifying chain deeds back to 1980 before any development is launched."
    },
    {
      question: "What types of real estate do we offer?",
      answer: "Our portfolio spans four key categories: Master-planned residential townships (Legacy Township), boutique modern courtyard homes (Velora Greens), eco-sensitive hospitality assets (Hayat Greenz Resort), and institutional-grade warehousing networks (Accenture Greenz Warehousing)."
    }
  ];

  return (
    <div className="relative min-h-screen gradient-bg-mesh text-[#FAFBF9] font-sans pb-16 overflow-x-hidden ambient-light">
      
      {/* Floating Back to Home button */}
      <div className="absolute top-4 left-4 z-10">
        <Link 
          to="/"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/10 text-neutral-300 hover:text-gold hover:border-gold/30 hover:bg-white/5 transition-all text-xs font-mono font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Website</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-md sm:max-w-xl mx-auto px-4 pt-16 flex flex-col items-center">
        
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mt-4 mb-8"
        >
          {/* Glowing Avatar Frame */}
          <div className="relative w-20 h-20 rounded-full flex items-center justify-center p-[2px] bg-gradient-to-tr from-gold via-gold/40 to-white/10 shadow-2xl mb-4 group hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-charcoal-dark flex items-center justify-center overflow-hidden border border-white/5">
              <img 
                src={logoNewIcon} 
                alt="Accenture Infra Brand Icon" 
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* Ambient Pulse Ring */}
            <span className="absolute inset-0 rounded-full border border-gold/30 animate-pulse" />
          </div>

          <div className="flex items-center gap-2 mb-1 justify-center">
            <img 
              src={logoNewInfra} 
              alt="Accenture Infra Logo text" 
              className="h-4 sm:h-5 object-contain"
            />
          </div>
          
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#C6A96B] uppercase font-bold mb-2.5 block">
            AL GREEN DEVELOPERS
          </span>
          
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed px-4">
            Pioneering premium integrated townships, luxury gated enclaves, ecological resorts, and logistics hubs in Bangalore East.
          </p>
        </motion.div>

        {/* Dynamic Navigation Sections */}
        <div className="w-full space-y-8">
          
          {/* Section: Premium Developments */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C6A96B]">
                PREMIUM DEVELOPMENTS
              </h2>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Interactive Portals</span>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {projects.map((proj, idx) => {
                const IconComponent = proj.icon;
                return (
                  <motion.div
                    key={proj.title}
                    whileHover={{ scale: 1.015, y: -2 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => navigate(proj.path)}
                    className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/5 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-start gap-3.5 pr-2">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-gold group-hover:bg-[#24421E]/30 group-hover:border-gold/30 transition-all shrink-0">
                        <IconComponent className="w-5 h-5 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-medium text-base text-white group-hover:text-gold transition-colors">
                            {proj.title}
                          </h3>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-400 group-hover:bg-gold/15 group-hover:text-gold-light border border-white/5 group-hover:border-gold/25 transition-colors">
                            {proj.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 font-mono tracking-tight leading-tight">
                          {proj.location}
                        </p>
                        <p className="text-xs text-neutral-300 font-light mt-0.5">
                          {proj.subtitle}
                        </p>
                        <p className="text-[10px] text-[#C6A96B] font-light italic mt-1 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                          {proj.highlight}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Section: Quick Utilities & Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C6A96B]">
                QUICK ACCESS & BOOKINGS
              </h2>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Action Center</span>
            </div>

            <div className="space-y-2.5">
              {primaryActions.map((act) => {
                const IconComponent = act.icon;
                return (
                  <motion.div
                    key={act.title}
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => navigate(act.path)}
                    className={`p-3.5 rounded-xl cursor-pointer flex items-center justify-between group transition-all ${
                      act.featured 
                        ? "bg-[#24421E]/60 border border-gold/30 shadow-[0_4px_20px_-5px_rgba(186,163,96,0.2)] hover:bg-[#24421E]/80 hover:border-gold/50" 
                        : "glass-panel glass-panel-hover border border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        act.featured 
                          ? "bg-gold/15 text-gold border border-gold/25" 
                          : "bg-white/[0.03] text-neutral-300 border border-white/10 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-[#24421E]/20"
                      } transition-colors`}>
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div className="text-left">
                        <h4 className={`text-sm font-medium font-sans group-hover:text-gold transition-colors ${
                          act.featured ? "text-gold font-semibold" : "text-white"
                        }`}>
                          {act.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug max-w-sm">
                          {act.desc}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors shrink-0" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Section: Company At a Glance */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C6A96B]">
                COMPANY AT A GLANCE
              </h2>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Brief Guide</span>
            </div>

            <div className="glass-panel rounded-xl border border-white/5 p-4 space-y-3.5">
              {companyHighlights.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group py-1"
                    >
                      <span className="text-xs sm:text-sm font-medium text-white group-hover:text-gold transition-colors pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-gold shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-gold shrink-0 transition-colors" />
                      )}
                    </button>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-xs text-neutral-300 font-light leading-relaxed font-sans"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Section: Secure Communication Channels */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C6A96B]">
                SECURE CONCIERGE CHANNELS
              </h2>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Direct Lines</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/918042019603"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-3.5 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#24421E]/40 border border-[#C6A96B]/20 flex items-center justify-center text-gold mb-2 group-hover:border-gold/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-white group-hover:text-gold transition-colors">WhatsApp Link</span>
                <span className="text-[9px] text-neutral-400 font-mono mt-0.5">+91 80420 19603</span>
              </a>

              <a
                href="mailto:alliances@accentureinfra.com"
                className="glass-panel glass-panel-hover p-3.5 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#24421E]/40 border border-[#C6A96B]/20 flex items-center justify-center text-gold mb-2 group-hover:border-gold/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-white group-hover:text-gold transition-colors">Corporate Email</span>
                <span className="text-[9px] text-neutral-400 font-mono mt-0.5">alliances@...</span>
              </a>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/5 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-medium text-white">Registered Headquarters</span>
                <p className="text-[10.5px] text-neutral-400 mt-0.5 leading-snug">
                  Palace Road, Palace Vasant Nagar, Bangalore - 560001
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section: Social Portals */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C6A96B]">
                SOCIAL PORTALS
              </h2>
              <span className="text-[9px] font-mono text-neutral-500 uppercase">Connect With Us</span>
            </div>

            <div className="space-y-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-panel glass-panel-hover px-4 py-3 rounded-xl border border-white/5 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/[0.02] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-gold group-hover:border-gold/30 group-hover:bg-[#24421E]/10 transition-colors shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-mono font-bold text-white group-hover:text-gold transition-colors">
                          {social.name.toUpperCase()}
                        </span>
                        <p className="text-[10px] text-neutral-400 leading-none mt-0.5">
                          {social.label}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase group-hover:text-gold transition-colors">Follow</span>
                      <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-gold transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Footer Credit */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center space-y-2"
        >
          <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Accenture Infra. All Rights Reserved.
          </p>
          <p className="text-[9px] text-[#BAA360] font-mono tracking-widest uppercase">
            uncompromising land security
          </p>
        </motion.div>

      </div>
    </div>
  );
}
