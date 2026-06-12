import { motion } from "motion/react";

interface TextSegment {
  text: string;
  className?: string;
}

interface TypingHeaderProps {
  segments: TextSegment[];
  className?: string;
  speed?: number;
}

export default function TypingHeader({ segments, className = "", speed = 0.05 }: TypingHeaderProps) {
  // Parse segments into a list of words to preserve word boundaries during line wrap
  const words: { characters: { char: string; className?: string }[]; isSpace: boolean }[] = [];
  let currentWordChars: { char: string; className?: string }[] = [];

  segments.forEach((seg) => {
    const chars = Array.from(seg.text);
    chars.forEach((c) => {
      if (c === " ") {
        if (currentWordChars.length > 0) {
          words.push({ characters: currentWordChars, isSpace: false });
          currentWordChars = [];
        }
        words.push({ characters: [{ char: " ", className: seg.className }], isSpace: true });
      } else {
        currentWordChars.push({ char: c, className: seg.className });
      }
    });
  });

  if (currentWordChars.length > 0) {
    words.push({ characters: currentWordChars, isSpace: false });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, wIdx) => {
        if (word.isSpace) {
          return (
            <span key={wIdx} style={{ display: "inline-block", whiteSpace: "pre" }}>
              <motion.span variants={letterVariants}> </motion.span>
            </span>
          );
        }
        return (
          <span key={wIdx} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {word.characters.map((charObj, cIdx) => (
              <motion.span
                key={cIdx}
                variants={letterVariants}
                className={charObj.className}
              >
                {charObj.char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.h1>
  );
}
