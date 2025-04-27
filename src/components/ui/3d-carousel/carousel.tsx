
import { memo } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useMediaQuery } from "./hooks";

type TestimonialCard = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string) => void;
    controls: any;
    cards: TestimonialCard[];
    isCarouselActive: boolean;
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const rotation = useMotionValue(0);
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((card, i) => (
            <motion.div
              key={`key-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(card.image)}
            >
              <motion.div
                layoutId={`card-${i}`}
                className="w-full h-full rounded-xl overflow-hidden glass-effect"
                initial={{ filter: "blur(4px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{card.name}</h3>
                      <p className="text-sm text-muted-foreground">{card.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic flex-grow">
                    "{card.quote}"
                  </blockquote>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

export { Carousel };
