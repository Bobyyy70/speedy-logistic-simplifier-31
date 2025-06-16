
import { motion } from "framer-motion";
import { StarRating } from "./StarRating";
import type { TestimonialCard as TestimonialCardType } from "./types";

interface TestimonialCardProps extends TestimonialCardType {
  isMobile?: boolean;
}

export function TestimonialCard({ quote, name, rating, isMobile }: TestimonialCardProps) {
  return (
    <motion.div
      className={`${isMobile ? 'min-w-[280px]' : 'min-w-[300px] md:min-w-[400px]'} p-4 md:p-6 rounded-xl bg-green-50/80 border border-green-100 shadow-sm transition-transform duration-300 hover:scale-105 hover:z-10`}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      whileHover={{ scale: isMobile ? 1.05 : 1.05 }}
    >
      <StarRating rating={rating} className="mb-3 md:mb-4" />
      <blockquote className="text-sm md:text-base italic mb-3 md:mb-4 flex-grow text-slate-700">
        "{quote}"
      </blockquote>
      <div className="text-right">
        <p className="font-semibold text-sm md:text-base text-slate-900">{name}</p>
      </div>
    </motion.div>
  );
}
