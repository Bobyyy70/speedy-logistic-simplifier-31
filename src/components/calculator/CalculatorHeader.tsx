
import React from "react";
import { motion } from "framer-motion";

export function CalculatorHeader() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12" 
      initial={{
        opacity: 0,
        y: 20
      }} 
      whileInView={{
        opacity: 1,
        y: 0
      }} 
      viewport={{
        once: true
      }} 
      transition={{
        duration: 0.5
      }}
    >
      <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
        Estimation Tarif Transport
      </div>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Estimez votre coût d'expédition TTC
      </h1>
      <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
        Le juste prix pour chaque envoi. Notre calculateur dynamique sélectionne automatiquement le transporteur le plus économique, avec tarifs TTC variables selon la destination et les surcharges en vigueur.
      </p>
      <p className="text-sm text-muted-foreground">
        Estimation pour un colis au départ de notre entrepôt à Port-sur-Saône.
      </p>
    </motion.div>
  );
}
