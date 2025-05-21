
import { motion } from "framer-motion";
import { StarRating } from "./StarRating";
import type { TestimonialCard as TestimonialCardType } from "./types";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps extends TestimonialCardType {
  isMobile?: boolean;
}

export function TestimonialCard({ quote, name, rating, isMobile }: TestimonialCardProps) {
  // For long quotes, truncate text
  const isTruncated = quote.length > 200;
  const truncatedQuote = isTruncated ? quote.substring(0, 180) + "..." : quote;
  
  return (
    <motion.div
      className={`${isMobile ? 'min-w-[280px]' : 'min-w-[300px] md:min-w-[400px]'} p-4 md:p-6 rounded-xl glass-effect transition-transform duration-300 relative`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      whileHover={{ 
        scale: isMobile ? 1.02 : 1.05,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        y: -5
      }}
      transition={{
        scale: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <motion.div 
        className="absolute -top-3 -right-3 text-blue-500 dark:text-blue-400 opacity-50"
        initial={{ rotate: -15 }}
        whileHover={{ 
          rotate: 0,
          scale: 1.1,
          opacity: 0.8
        }}
      >
        <QuoteIcon size={32} />
      </motion.div>
      
      <StarRating rating={rating} className="mb-3 md:mb-4" />
      
      <motion.blockquote 
        className="text-sm md:text-base italic mb-3 md:mb-4 flex-grow"
        initial={{ opacity: 0.5 }}
        whileHover={{ opacity: 1 }}
      >
        "{truncatedQuote}"
        {isTruncated && (
          <motion.span 
            className="text-blue-500 dark:text-blue-400 cursor-pointer ml-1 not-italic font-medium"
            whileHover={{ scale: 1.05 }}
          >
            voir plus
          </motion.span>
        )}
      </motion.blockquote>
      
      <div className="text-right flex items-center justify-end">
        <motion.div 
          className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 rounded-full flex items-center justify-center text-white mr-2 text-sm font-bold"
          whileHover={{ scale: 1.1 }}
        >
          {name.charAt(0)}
        </motion.div>
        <p className="font-semibold text-sm md:text-base">{name}</p>
      </div>
      
      <motion.div 
        className="absolute -bottom-1.5 -right-1.5 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-green-400/20 blur-xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
