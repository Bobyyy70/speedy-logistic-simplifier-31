import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialCard as TestimonialCardType } from "./types";
import { useIsMobile } from "@/hooks/use-mobile";
import { useOptimizedAnimation } from "@/hooks/use-optimized-animation";

// Configuration constants
const SCROLL_SPEED = 25; 
const PAUSE_ON_HOVER = true;
const MOBILE_CARD_WIDTH = 280;
const DESKTOP_CARD_WIDTH = 400;
const ANIMATION_FPS = 60;

const testimonials: TestimonialCardType[] = [
  {
    quote: "Service au top ! Très satisfait de Speedelog : l'équipe est réactive, accessible et vraiment à l'écoute. À chaque imprévu, ils trouvent une solution rapidement. On sent qu'on peut compter sur eux, même en dernière minute. Autre point fort : les livraisons sont toujours rapides et ponctuelles, ce qui fait une vraie différence au quotidien.",
    name: "Alexandre. Z.",
    rating: 4
  },
  {
    quote: "En tant qu'e-commerçant actif sur Amazon, Cdiscount et d'autres plateformes, j'ai besoin d'un logisticien sur qui je peux vraiment compter. Ce que j'apprécie particulièrement chez lui, c'est sa réactivité exceptionnelle : que ce soit un dimanche soir ou un jour férié, il est toujours là pour répondre présent. Il sait s'adapter à toutes les situations, toujours avec professionnalisme et efficacité. Les tarifs sont compétitifs, mais surtout, le service est irréprochable. C'est rare de trouver un partenaire aussi fiable, et pour moi, c'est devenu un pilier de mon activité !",
    name: "Fred P.",
    rating: 5
  },
  {
    quote: "Pour mon activité e-commerce et trouver un logisticien avec le peu de moyens que nous avons... mais speedElog nous a tout de suite confiance en intégrant nos produits chez eux. Cerise sur le gâteau ils nous donnent de vrais conseils pour nous aider.",
    name: "Mathieu M.",
    rating: 5
  },
  {
    quote: "Je crois que je n'ai jamais eu un logisticien aussi fiable depuis le lancement de mon activité (en 2015), un taux d'erreurs quasiment nul, une super gestion des retours et un Sav existant contrairement a beaucoup d'autres ;) Merci beaucoup, grâce à speedElog je peux maintenant me consacrer pleinement à mon activité sans me soucier des contraintes logistiques. Allez y les yeux fermés",
    name: "Julie B.",
    rating: 5
  },
  {
    quote: "Entreprise à taille humaine, avec de vrais valeurs et proches de ses clients, qui sait nous conseiller sur les meilleures solutions de transport ! je fais clairement des économies depuis que j'ai externalisé ma logistique chez eux",
    name: "Mathis H.",
    rating: 4
  },
  {
    quote: "Je viens de lancer mon activité e-commerce et j'ai eu du mal à trouver un logisticien avec le peu d'expédition que nous avons.. mais speedElog nous a fait tout de suite confiance en intégrant notre stock chez eux. Cerise sur le gâteau ils nous donnent de vrais conseils pour nous développer",
    name: "Mathieu M.",
    rating: 5
  }
];

export function OptimizedTestimonialsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [isTouching, setIsTouching] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Memoized calculations
  const { cardWidth, cardGap, containerWidth, duplicatedTestimonials } = useMemo(() => {
    const width = isMobile ? MOBILE_CARD_WIDTH : DESKTOP_CARD_WIDTH;
    const gap = 20;
    const container = testimonials.length * (width + gap);
    const duplicated = [...testimonials, ...testimonials];
    
    return {
      cardWidth: width,
      cardGap: gap,
      containerWidth: container,
      duplicatedTestimonials: duplicated
    };
  }, [isMobile]);

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
      className="overflow-hidden relative touch-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        className="flex gap-5 py-4"
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
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}