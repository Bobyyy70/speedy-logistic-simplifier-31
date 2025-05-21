
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
    quote: "J’ai confié mon stock ainsi que toute ma logistique chez Speedelog depuis le début et je ne suis absolument pas déçu. Mes clients reçoivent ce qu’ils ont commandé (ça change de mon ancien prestataire) Francesco est très à l’écoute et surtout réactif quand on a besoin de lui. Je recommande à 200%",
    name: "Sébastien P.",
    rating: 5
  },
  {
    quote: "Je crois que je n’ai jamais eu un logisticien aussi fiable depuis le lancement de mon activité (en 2015), un taux d’erreurs quasiment nul, une super gestion des retours et un Sav existant contrairement a beaucoup d’autres ;)Merci beaucoup, grâce à speedElog je peux maintenant me consacrer pleinement à mon activité sans me soucier des contraintes logistiques. Allez y les yeux fermés",
    name: "Julie B.",
    rating: 5
  },
  {
    quote: "Entreprise à taille humaine, avec de vrais valeurs et proches de ses clients, qui sait nous conseiller sur les meilleures solutions de transport ! je fais clairement des économies depuis que j’ai externalisé ma logistique chez eux",
    name: "Mathis H.",
    rating: 4
  },
  {
    quote: "Je viens de lancer mon activité e-commerce et j’ai eu du mal à trouver un logisticien avec le peu d’expédition que nous avons.. mais speedElog nous a fait tout de suite confiance en intégrant notre stock chez eux. Cerise sur le gâteux ils nous donnent de vrais conseils pour nous développer",
    name: "Mathieu M.",
    rating: 5
  },
  {
    quote: " Tarifs justes, professionnalisme, et hyper sympa ! Il y a encore des gens passionnés et impliqués, À su gérer récemment un gros pic d’activité sans baisser la qualité du service", 
    name: "Cédric M.",
    rating: 5
  },
  {
    quote: "En tant qu’e-commerçant actif sur Amazon, Cdiscount et d’autres plateformes, j’ai besoin d’un logisticien sur qui je peux vraiment compter. Ce que j’apprécie particulièrement chez lui, c’est sa réactivité exceptionnelle : que ce soit un dimanche soir ou un jour férié, il est toujours là pour répondre présent. Il sait s’adapter à toutes les situations, toujours avec professionnalisme et efficacité. Les tarifs sont compétitifs, mais surtout, le service est irréprochable. C’est rare de trouver un partenaire aussi fiable, et pour moi, c’est devenu un pilier de mon activité.",
    name: "Fred P.",
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
