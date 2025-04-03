
import React from "react";
import { motion } from "framer-motion";
import { Plug, Warehouse, ClipboardList, Truck } from "lucide-react";

// Définition des étapes du processus
const steps = [
  {
    number: "01",
    title: "Intégration Facile",
    description: "Connexion simple avec votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...) ou via notre API.",
    icon: Plug,
  },
  {
    number: "02",
    title: "Envoyez vos produits",
    description: "Vos produits sont réceptionnés, contrôlés et référencés dans notre système de gestion d'entrepôt.",
    icon: Warehouse,
  },
  {
    number: "03",
    title: "Préparation Commandes",
    description: "Nous préparons, emballons et vérifions chaque commande avec rapidité et précision.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Expédition Rapide",
    description: "Vos commandes sont expédiées via les meilleurs transporteurs avec suivi en temps réel pour vos clients.",
    icon: Truck,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/40 dark:bg-slate-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <motion.div 
            className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Le Processus
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p 
            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Intégration simple et rapide pour une externalisation sans friction.
          </motion.p>
        </div>

        {/* Étapes */}
        <div className="relative mx-auto max-w-5xl">
          {/* Ligne de connexion verticale (desktop uniquement) */}
          <div 
            className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-border -translate-x-1/2 hidden md:block" 
            aria-hidden="true"
          ></div>
          
          {/* Grille des étapes */}
          <div className="grid gap-8 md:grid-cols-4 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4 shadow-lg z-10">
                  {step.number}
                </div>
                <div className="mt-2 mb-3">
                  <step.icon className="h-8 w-8 text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
