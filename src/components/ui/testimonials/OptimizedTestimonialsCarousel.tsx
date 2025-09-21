import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./data";
import { useEnhancedMobile } from "@/hooks/use-enhanced-mobile";
import { useOptimizedAnimation } from "@/hooks/use-optimized-animation";

// Configuration constants
const SCROLL_SPEED = 25; 
const PAUSE_ON_HOVER = true;
const MOBILE_CARD_WIDTH = 280;
const DESKTOP_CARD_WIDTH = 400;
const ANIMATION_FPS = 60;


export function OptimizedTestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const mobile = useEnhancedMobile();
  
  // Memoized calculations
  const { cardWidth, cardGap, containerWidth, duplicatedTestimonials } = useMemo(() => {
    const width = mobile.isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
    const gap = 20;
    const container = testimonials.length * (width + gap);
    const duplicated = [...testimonials, ...testimonials];
    
    return {
      cardWidth: width,
      cardGap: gap,
      containerWidth: container,
      duplicatedTestimonials: duplicated
    };
  }, [mobile.isMobile]);

  // Optimized animation callback
  const animationCallback = useCallback((timestamp: number) => {
    if (isPaused || isTouching) return;
    
    setScrollX((prev) => {
      const newScrollX = prev - SCROLL_SPEED / ANIMATION_FPS;
      // Reset position for seamless loop
      if (newScrollX <= -containerWidth) {
        return 0;
      }
      return newScrollX;
    });
  }, [isPaused, isTouching, containerWidth]);

  const { start, stop, setElement } = useOptimizedAnimation(animationCallback, {
    fps: ANIMATION_FPS,
    pauseOnInvisible: true
  });

  useEffect(() => {
    if (carouselRef.current) {
      setElement(carouselRef.current);
    }
    start();
    
    return () => stop();
  }, [start, stop, setElement]);

  // Optimized touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsTouching(true);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart || !isTouching) return;
    
    const touchCurrent = e.targetTouches[0].clientX;
    const diff = touchStart - touchCurrent;
    
    setScrollX((prev) => {
      const newX = prev - diff * 0.5;
      return Math.max(-containerWidth, Math.min(0, newX));
    });
  }, [touchStart, isTouching, containerWidth]);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);
    setTouchStart(null);
    
    // Resume auto-scrolling after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  }, []);

  // Optimized hover handlers
  const handleMouseEnter = useCallback(() => {
    if (PAUSE_ON_HOVER) setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (PAUSE_ON_HOVER) setIsPaused(false);
  }, []);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden relative touch-manipulation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="flex gap-4 md:gap-6 py-4"
        style={{ 
          x: scrollX,
          willChange: 'transform'
        }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`testimonial-${index}`}
            {...testimonial} 
            isMobile={mobile.isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}