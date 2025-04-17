
import React from "react";
import { motion } from "framer-motion";
import { Testimonials } from "@/components/ui/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-900 py-12 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            Nos Clients Témoignent
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ils nous font confiance
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Découvrez comment Speed E Log a aidé d'autres e-commerçants à simplifier leur logistique et accélérer leur croissance.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>

        {/* Client Logos Section - Commented out for now */}
        {/*
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-4">
            Quelques unes des marques qui nous font confiance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+1" alt="Client Logo 1" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+2" alt="Client Logo 2" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+3" alt="Client Logo 3" className="h-10"/>
            <img src="https://placehold.co/120x40/e2e8f0/334155?text=Logo+4" alt="Client Logo 4" className="h-10"/>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
