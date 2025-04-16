
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PackageCheck, Truck, FileCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    icon: PackageCheck,
    title: "Intégration",
    description: "Nous nous connectons à votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...).",
    details: "Une intégration technique simple et rapide avec votre boutique en ligne. Nos équipes s'occupent de tout pour garantir une connexion fiable entre nos systèmes."
  },
  {
    step: "2",
    icon: FileCheck,
    title: "Réception",
    description: "Nous réceptionnons et contrôlons vos produits avant de les intégrer dans notre système.",
    details: "Envoyez-nous votre stock et nous vérifions chaque article avec soin avant de le référencer dans notre système de gestion d'entrepôt."
  },
  {
    step: "3",
    icon: Truck,
    title: "Traitement",
    description: "Nous préparons et expédions vos commandes rapidement via les meilleurs transporteurs.",
    details: "Dès qu'une commande est passée sur votre boutique, nous la préparons, l'emballons et l'expédions selon vos préférences et avec les transporteurs les plus adaptés."
  },
  {
    step: "4",
    icon: BarChart3,
    title: "Suivi",
    description: "Suivez en temps réel vos stocks et commandes sur votre espace client dédié.",
    details: "Accédez à votre tableau de bord personnalisé pour consulter vos niveaux de stock, l'état de vos commandes, générer des rapports et bien plus encore."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/40 dark:from-slate-900 dark:via-green-950/20 dark:to-blue-950/30 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm">
            Processus Simplifié
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Comment ça marche ?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Un processus en 4 étapes simples pour externaliser votre logistique e-commerce
            sans tracas et sans interruption de votre activité.
          </p>
        </div>
        
        {/* Process Steps - Mobile View (Timeline) */}
        <div className="md:hidden">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:to-green-400">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-sm shadow-md">
                  {step.step}
                </div>
                <div className="ml-4 pb-5">
                  <div className="flex items-center mb-1">
                    <step.icon className="w-4 h-4 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Process Steps - Desktop View (Cards) */}
        <div className="hidden md:block">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-lg p-6 shadow-sm border border-blue-100/70 dark:border-blue-900/30"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4 mx-auto md:mx-0">
                      <step.icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <span className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 mr-4 font-bold">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-lg mb-2">{step.description}</p>
                      <p className="text-muted-foreground">{step.details}</p>
                    </div>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="absolute left-[2.75rem] top-full h-8 w-px bg-gradient-to-b from-blue-200 to-green-300 dark:from-blue-700 dark:to-green-700 hidden md:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Démarrer l'externalisation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
