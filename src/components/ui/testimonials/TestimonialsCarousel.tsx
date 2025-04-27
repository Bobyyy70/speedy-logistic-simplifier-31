
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialCard as TestimonialCardType } from "./types";

const SCROLL_SPEED = 25; // pixels per second
const PAUSE_ON_HOVER = true;

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

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (!isPaused) {
        const deltaTime = currentTime - lastTime;
        setScrollX((prev) => {
          const newScrollX = prev - (SCROLL_SPEED * deltaTime) / 1000;
          const containerWidth = testimonials.length * 420; // card width + gap
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
  }, [isPaused]);

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => PAUSE_ON_HOVER && setIsPaused(true)}
      onMouseLeave={() => PAUSE_ON_HOVER && setIsPaused(false)}
    >
      <motion.div
        className="flex gap-5 py-4"
        style={{ x: scrollX }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
}
