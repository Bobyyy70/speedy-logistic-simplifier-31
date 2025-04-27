
import { motion } from "framer-motion";
import { StarRating } from "./StarRating";
import type { TestimonialCard as TestimonialCardType } from "./types";

export function TestimonialCard({ quote, name, rating }: TestimonialCardType) {
  return (
    <motion.div
      className="min-w-[300px] md:min-w-[400px] p-6 rounded-xl glass-effect transition-transform duration-300 hover:scale-110 hover:z-10"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      whileHover={{ scale: 1.1 }}
    >
      <StarRating rating={rating} className="mb-4" />
      <blockquote className="text-sm md:text-base italic mb-4 flex-grow">
        "{quote}"
      </blockquote>
      <div className="text-right">
        <p className="font-semibold">{name}</p>
      </div>
    </motion.div>
  );
}
