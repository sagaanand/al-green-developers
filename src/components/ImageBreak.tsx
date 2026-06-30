import { motion } from "motion/react";

interface ImageBreakProps {
  imageSrc: string;
  captionTitle?: string;
  captionDesc?: string;
  numberStamp?: string;
}

export default function ImageBreak({ imageSrc, captionTitle, captionDesc, numberStamp }: ImageBreakProps) {
  return (
    <section className="relative w-full h-[50vh] lg:h-[65vh] overflow-hidden bg-neutral-900 border-t border-b border-[#163A2D]/5">
      {/* Parallax image container using fixed background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-90 transition-transform duration-1000"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Forest overlay to bind the color balance */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#163A2D]/60 via-[#163A2D]/20 to-transparent z-10" />

      {/* Floating caption details */}
      {(captionTitle || captionDesc || numberStamp) && (
        <div className="absolute bottom-10 left-6 sm:left-12 max-w-lg z-20 text-left text-white space-y-2">
          {numberStamp && (
            <span className="block text-[9px] font-mono tracking-widest text-[#C6A96B] font-bold">
              {numberStamp}
            </span>
          )}
          {captionTitle && (
            <h4 className="font-display font-medium text-2xl tracking-wide uppercase text-white">
              {captionTitle}
            </h4>
          )}
          {captionDesc && (
            <p className="text-[11px] text-neutral-355 font-sans font-light leading-relaxed">
              {captionDesc}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
