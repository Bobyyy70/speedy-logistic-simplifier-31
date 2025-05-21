
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plug, Warehouse, ClipboardList, Truck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AnimatedText from "@/components/ui/AnimatedText";

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
    <section id="how-it-works" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 lg:py-32">
      {/* Lignes de connexion décoratives */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
      
      <div className="container mx-auto px-4 rounded-full">
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

        {/* Connexion visuelle entre les étapes */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 transform -translate-y-4 bg-gradient-to-r from-orange-300/20 via-blue-500/20 to-green-400/20" />

        {/* Tabs pour les étapes */}
        <div className="max-w-4xl mx-auto relative">
          <Tabs defaultValue="step1" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 relative">
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
                    className="flex flex-col items-center py-3 px-1 sm:px-4 data-[state=active]:text-orange-600 dark:data-[state=active]:text-orange-400 bg-orange-200 hover:bg-orange-100 font-extrabold text-base rounded-full z-10 relative"
                  >
                    <span className="text-sm sm:text-base font-medium">{step.number}</span>
                    <span className="text-xs hidden sm:block mt-1">{step.shortTitle}</span>
                    
                    {/* Point de progression */}
                    <motion.div 
                      className={`absolute -bottom-3 w-4 h-4 rounded-full ${activeTab === step.id ? 'bg-orange-500' : 'bg-orange-200 dark:bg-orange-900'}`}
                      animate={activeTab === step.id ? 
                        { scale: [1, 1.2, 1], backgroundColor: ["#f97316", "#fb923c", "#f97316"] } : 
                        { scale: 1 }
                      }
                      transition={{ duration: 2, repeat: activeTab === step.id ? Infinity : 0 }}
                    />
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
                  className="section-box"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-4 mx-auto md:mx-0 relative overflow-hidden">
                      <step.icon className="h-8 w-8 text-orange-600 dark:text-orange-500 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-400 dark:from-orange-800/30 dark:to-orange-600/50"
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
        </div>
      </div>
      
      {/* Particules décoratives animées */}
      <motion.div
        className="absolute bottom-10 left-1/4 w-3 h-3 rounded-full bg-orange-400/30"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-blue-400/30"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
