
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialCard as TestimonialCardType } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";

const SCROLL_SPEED = 25; // pixels per second
const PAUSE_ON_HOVER = true;
const MOBILE_CARD_WIDTH = 280; // smaller width on mobile
const DESKTOP_CARD_WIDTH = 400; // larger width on desktop

const testimonials: TestimonialCardType[] = [
  {
    quote: "Speed E Log nous a permis de nous concentrer sur notre croissance sans nous soucier de la logistique. Service impeccable et réactif !",
    name: "Marie D.",
    rating: 5
  },
  {
    quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
    name: "Thomas L.",
    rating: 5
  },
  {
    quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus.",
    name: "Julie M.",
    rating: 4
  },
  {
    quote: "Une équipe à l'écoute qui comprend vraiment les besoins de ses clients. Notre partenariat est un vrai succès.",
    name: "Alex M.",
    rating: 5
  },
  {
    quote: "La précision dans la préparation des commandes est impressionnante. Zéro erreur depuis 6 mois !",
    name: "Sophie B.",
    rating: 5
  },
  {
    quote: "Un accompagnement personnalisé qui fait toute la différence. Merci à toute l'équipe !",
    name: "Paul D.",
    rating: 5
  }
];

// Double the array for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function TestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const cardWidth = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
  const cardGap = 20; // Gap between cards
  
  // Touch handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isPaused) {
        const deltaTime = currentTime - lastTime;
        setScrollX((prev) => {
          const newScrollX = prev - (SCROLL_SPEED * deltaTime) / 1000;
          const containerWidth = testimonials.length * (cardWidth + cardGap);
          // Reset position when reaching the end of first set
          if (newScrollX <= -containerWidth) {
            return 0;
          }
          return newScrollX;
        });
      }
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, cardWidth]);

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsPaused(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      // Swipe left: scroll forward
      setScrollX(prev => prev - (cardWidth + cardGap));
    } else if (isRightSwipe) {
      // Swipe right: scroll backward
      setScrollX(prev => prev + (cardWidth + cardGap));
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    
    // Resume auto-scrolling after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden relative touch-none"
      onMouseEnter={() => PAUSE_ON_HOVER && setIsPaused(true)}
      onMouseLeave={() => PAUSE_ON_HOVER && setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="flex gap-5 py-4"
        style={{ x: scrollX }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index} 
            {...testimonial} 
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
