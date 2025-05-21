
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

  // Utiliser des animations individuelles plus simples sans staggering complexe
  return (
    <div className={`${className}`}>
      {items.map((item, index) => {
        const isHighlighted = type === "words" && highlightWords.includes(item);
        
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: delay + (index * 0.05),
              ease: "easeOut"
            }}
            className={`inline-block ${type === "words" ? "mr-1.5" : ""} ${isHighlighted ? highlightColor : ""}`}
            style={{
              display: type === "letters" && item === " " ? "inline-block" : undefined,
              width: type === "letters" && item === " " ? "0.3em" : undefined,
            }}
          >
            {item}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedText;
