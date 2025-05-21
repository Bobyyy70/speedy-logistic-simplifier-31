
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "words" | "letters";
  staggerChildren?: number;
  highlightWords?: string[];
  highlightColor?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  type = "words",
  staggerChildren = 0.03,
  highlightWords = [],
  highlightColor = "text-blue-500 dark:text-blue-400",
}) => {
  // Split the text into words or letters
  const items = type === "words" ? text.split(" ") : Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {items.map((item, index) => {
        // Check if this word should be highlighted
        const isHighlighted = type === "words" && highlightWords.includes(item);
        
        return (
          <motion.span
            key={index}
            variants={child}
            className={`inline-block ${type === "words" ? "mr-1.5" : ""} ${isHighlighted ? highlightColor : ""}`}
            style={{
              display: type === "letters" && item === " " ? "inline-block" : "",
              width: type === "letters" && item === " " ? "0.3em" : "",
            }}
          >
            {item}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
