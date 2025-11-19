/**
 * Performance Stats Section
 * Based on specifications: Display key performance metrics
 * Grid 2x2 with animated numbers
 */

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    number: "2",
    suffix: "M+",
    label: "Colis traités"
  },
  {
    number: "99.7",
    suffix: "%",
    label: "Précision garantie"
  },
  {
    number: "5",
    suffix: "",
    label: "Entrepôts actifs"
  },
  {
    number: "99.2",
    suffix: "%",
    label: "Livraisons à temps"
  }
];

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber = ({ value, suffix = "" }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Handle decimal numbers (like 99.7)
        if (value % 1 !== 0) {
          ref.current.textContent = latest.toFixed(1);
        } else {
          ref.current.textContent = Math.floor(latest).toString();
        }
      }
    });

    return unsubscribe;
  }, [springValue, value]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref} className="tabular-nums">
        {value}
      </span>
      {suffix && <span className="text-5xl md:text-6xl ml-1">{suffix}</span>}
    </span>
  );
};

export const PerformanceStatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-primary-500 mb-2 font-heading">
                  <AnimatedNumber
                    value={parseFloat(stat.number)}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-lg md:text-xl font-semibold text-gray-900 mt-2">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
