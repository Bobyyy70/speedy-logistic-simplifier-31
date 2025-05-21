
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plug, Warehouse, ClipboardList, Truck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AnimatedText from "@/components/ui/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";

// Définition des étapes du processus
const steps = [
  {
    id: "step1",
    number: "01",
    shortTitle: "Intégration",
    title: "Intégration Facile",
    description: "Connexion simple avec votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...) ou via notre API. Nos solutions techniques s'adaptent à votre infrastructure existante pour un démarrage rapide.",
    icon: Plug
  },
  {
    id: "step2",
    number: "02",
    shortTitle: "Réception",
    title: "Envoyez vos produits",
    description: "Vos produits sont réceptionnés, contrôlés et référencés dans notre système de gestion d'entrepôt. Chaque article est vérifié et stocké dans des conditions optimales, prêt à être expédié.",
    icon: Warehouse
  },
  {
    id: "step3",
    number: "03",
    shortTitle: "Préparation",
    title: "Préparation Commandes",
    description: "Nous préparons, emballons et vérifions chaque commande avec rapidité et précision. Nos procédures de contrôle qualité garantissent que vos clients reçoivent exactement ce qu'ils ont commandé.",
    icon: ClipboardList
  },
  {
    id: "step4",
    number: "04",
    shortTitle: "Expédition",
    title: "Expédition Rapide",
    description: "Vos commandes sont expédiées via les meilleurs transporteurs avec suivi en temps réel pour vos clients. Notre réseau de partenaires permet d'optimiser les délais et les coûts de livraison.",
    icon: Truck
  }
];

export function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("step1");
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleTabChange = (value: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(value);
      setIsAnimating(false);
    }, 300);
  };
  
  return (
    <section id="how-it-works" className="py-12 md:py-24 relative overflow-hidden bg-white dark:bg-slate-950 lg:py-32">
      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pin-badge text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30"
          >
            Le processus
          </motion.div>
          
          <AnimatedText
            text="Comment ça marche ?"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white"
            delay={0.2}
          />
          
          <motion.p
            className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Intégration simple et rapide pour une externalisation sans friction.
          </motion.p>
        </div>

        {/* Tabs pour les étapes */}
        <Card className="max-w-5xl mx-auto border-0 shadow-lg bg-white dark:bg-slate-900/70 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <Tabs defaultValue="step1" value={activeTab} onValueChange={handleTabChange} className="w-full h-full">
              <TabsList className="grid w-full h-full grid-cols-4 mb-8 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-full">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TabsTrigger 
                      value={step.id}
                      className="flex flex-col items-center py-10 px-1 sm:px-4 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-500 data-[state=active]:shadow-md dark:data-[state=active]:from-blue-600 dark:data-[state=active]:to-blue-400 font-medium text-base rounded-full z-10 relative transition-all duration-200"
                    >
                      <span className="text-sm sm:text-base font-medium">{step.number}</span>
                      <span className="text-xs hidden sm:block mt-1">{step.shortTitle}</span>
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
              
              {steps.map((step) => (
                <TabsContent key={step.id} value={step.id} className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isAnimating ? 0 : 1, y: isAnimating ? 10 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-400 mb-4 mx-auto md:mx-0 relative overflow-hidden shadow-md">
                        <step.icon className="h-8 w-8 text-white relative z-10" />
                        <motion.div
                          className="absolute inset-0"
                          animate={{ 
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-center md:text-left text-slate-900 dark:text-white">
                          Étape {step.number.replace(/^0/, '')}: {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800/30 to-transparent" />
      </div>
    </section>
  );
}
