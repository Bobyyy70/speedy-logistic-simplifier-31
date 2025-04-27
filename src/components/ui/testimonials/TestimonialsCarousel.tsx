
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
    title: "Fondatrice, BeautyBox France",
    rating: 5
  },
  {
    quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
    name: "Thomas L.",
    title: "Directeur E-commerce, GreenLife",
    rating: 5
  },
  {
    quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus.",
    name: "Julie M.",
    title: "CEO, FashionTrend",
    rating: 4
  },
  {
    quote: "Une équipe à l'écoute qui comprend vraiment les enjeux du e-commerce. Notre partenariat est un vrai succès.",
    name: "Alex M.",
    title: "Founder, TechStyle",
    rating: 5
  },
  {
    quote: "La précision dans la préparation des commandes est impressionnante. Zéro erreur depuis 6 mois !",
    name: "Sophie B.",
    title: "COO, WellnessBox",
    rating: 5
  },
  {
    quote: "Un accompagnement personnalisé qui fait toute la différence. Merci à toute l'équipe Speed E Log !",
    name: "Paul D.",
    title: "Directeur, EcoShop",
    rating: 5
  }
];

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
          return newScrollX <= -containerWidth ? 0 : newScrollX;
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
      className="overflow-hidden"
      onMouseEnter={() => PAUSE_ON_HOVER && setIsPaused(true)}
      onMouseLeave={() => PAUSE_ON_HOVER && setIsPaused(false)}
    >
      <motion.div
        className="flex gap-5 py-4"
        style={{ x: scrollX }}
        transition={{ type: "tween", ease: "linear" }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
}
