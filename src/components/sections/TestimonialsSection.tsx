
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import { OptimizedTestimonialsCarousel } from "@/components/ui/testimonials/OptimizedTestimonialsCarousel";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pin-badge text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 mb-4"
          >
            Témoignages
          </motion.div>
          
          <AnimatedText
            text="Ils nous font confiance"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
            delay={0.2}
          />
          
          <motion.p
            className="max-w-[700px] mx-auto mt-4 text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Découvrez comment Speed E-Log aide d'autres e-commerçants à simplifier leur logistique.
          </motion.p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <OptimizedTestimonialsCarousel />
        </div>
      </div>
    </section>
  );
}
