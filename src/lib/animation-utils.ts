
import { MotionProps } from "framer-motion";

// Animation d'entrée avec fondu et déplacement vers le haut
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Animation d'entrée avec fondu et déplacement vers la droite
export const fadeInRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

// Animation d'entrée avec fondu et déplacement vers la gauche
export const fadeInLeft = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
};

// Conteneur pour animation séquentielle des enfants
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animation d'entrée avec effet de pop
export const popIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { 
    type: "spring",
    stiffness: 120,
    damping: 10
  }
};

// Configuration pour animation d'enfants avec décalage
export const staggeredChildren = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay }
});

// Effet de survol pour éléments interactifs
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 }
};
