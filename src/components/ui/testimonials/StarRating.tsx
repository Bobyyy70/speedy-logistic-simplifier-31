
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className = "" }: StarRatingProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={`${
            index < rating ? "fill-orange-500 text-orange-500" : "text-muted-foreground/20"
          }`}
        />
      ))}
    </div>
  );
}
