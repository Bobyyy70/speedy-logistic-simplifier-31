import React from "react";
import { motion } from "framer-motion";
import { Plug, Warehouse, ClipboardList, Truck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Définition des étapes du processus
const steps = [{
  id: "step1",
  number: "01",
  shortTitle: "Intégration",
  title: "Intégration Facile",
  description: "Connexion simple avec votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...) ou via notre API. Nos solutions techniques s'adaptent à votre infrastructure existante pour un démarrage rapide.",
  icon: Plug
}, {
  id: "step2",
  number: "02",
  shortTitle: "Réception",
  title: "Envoyez vos produits",
  description: "Vos produits sont réceptionnés, contrôlés et référencés dans notre système de gestion d'entrepôt. Chaque article est vérifié et stocké dans des conditions optimales, prêt à être expédié.",
  icon: Warehouse
}, {
  id: "step3",
  number: "03",
  shortTitle: "Préparation",
  title: "Préparation Commandes",
  description: "Nous préparons, emballons et vérifions chaque commande avec rapidité et précision. Nos procédures de contrôle qualité garantissent que vos clients reçoivent exactement ce qu'ils ont commandé.",
  icon: ClipboardList
}, {
  id: "step4",
  number: "04",
  shortTitle: "Expédition",
  title: "Expédition Rapide",
  description: "Vos commandes sont expédiées via les meilleurs transporteurs avec suivi en temps réel pour vos clients. Notre réseau de partenaires permet d'optimiser les délais et les coûts de livraison.",
  icon: Truck
}];
export function HowItWorksSection() {
  return <section id="how-it-works" className="py-12 md:py-24 lg:py-0 bg-blue-100">
      <div className="container mx-auto px-4 bg-emerald-100 rounded-full">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-block bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm rounded-3xl">
            Le Processus
          </motion.div>
          <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            Comment ça marche ?
          </motion.h2>
          <motion.p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            Intégration simple et rapide pour une externalisation sans friction.
          </motion.p>
        </div>

        {/* Tabs pour les étapes */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {steps.map(step => <TabsTrigger key={step.id} value={step.id} className="flex flex-col items-center py-3 px-1 sm:px-4 data-[state=active]:text-orange-600 dark:data-[state=active]:text-orange-400">
                  <span className="text-sm sm:text-base font-medium">{step.number}</span>
                  <span className="text-xs hidden sm:block mt-1">{step.shortTitle}</span>
                </TabsTrigger>)}
            </TabsList>
            
            {steps.map(step => <TabsContent key={step.id} value={step.id} className="mt-6">
                <motion.div initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3
            }} className="bg-card rounded-lg p-6 shadow-sm border">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4 mx-auto md:mx-0">
                      <step.icon className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-center md:text-left">
                        Étape {step.number.replace(/^0/, '')}: {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>)}
          </Tabs>
        </div>
      </div>
    </section>;
}