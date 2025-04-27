
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Carousel } from "./carousel";

const testimonials = [
  {
    quote: "Speed E Log nous a permis de nous concentrer sur notre croissance sans nous soucier de la logistique. Service impeccable et réactif !",
    name: "Marie Dupont",
    title: "Fondatrice, BeautyBox France",
    image: "https://i.pravatar.cc/150?u=marie"
  },
  {
    quote: "La transparence tarifaire et la qualité de préparation des commandes sont remarquables. Nos clients sont ravis des délais de livraison.",
    name: "Thomas Laurent",
    title: "Directeur E-commerce, GreenLife",
    image: "https://i.pravatar.cc/150?u=thomas"
  },
  {
    quote: "L'intégration avec notre boutique Shopify a été d'une simplicité étonnante. Le suivi en temps réel des stocks est un vrai plus.",
    name: "Julie Moreau",
    title: "CEO, FashionTrend",
    image: "https://i.pravatar.cc/150?u=julie"
  },
  {
    quote: "Une équipe à l'écoute qui comprend vraiment les enjeux du e-commerce. Notre partenariat est un vrai succès.",
    name: "Alexandre Martin",
    title: "Founder, TechStyle",
    image: "https://i.pravatar.cc/150?u=alex"
  },
  {
    quote: "La précision dans la préparation des commandes est impressionnante. Zéro erreur depuis 6 mois !",
    name: "Sophie Bernard",
    title: "COO, WellnessBox",
    image: "https://i.pravatar.cc/150?u=sophie"
  },
  {
    quote: "Un accompagnement personnalisé qui fait toute la différence. Merci à toute l'équipe Speed E Log !",
    name: "Paul Dubois",
    title: "Directeur, EcoShop",
    image: "https://i.pravatar.cc/150?u=paul"
  }
];

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(() => testimonials, []);

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 m-5 md:m-36 lg:mx-[19rem] rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}

export { ThreeDPhotoCarousel };
