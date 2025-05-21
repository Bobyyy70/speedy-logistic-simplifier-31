
import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { MapFeature } from "@/components/ui/MapFeature";

export function LogisticsFeatureSection() {
  // Définition des points de livraison internationaux
  const globalShippingPoints = [
    {
      start: { lat: 48.8566, lng: 2.3522, label: "France" },
      end: { lat: 40.7128, lng: -74.006, label: "New York" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }
    },
    {
      start: { lat: 48.8566, lng: 2.3522 },
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const checkItems = [
    "Stockage sécurisé adapté à vos produits",
    "Préparation rapide des commandes",
    "Gestion proactive des retours"
  ];

  return (
    <div className="py-16 site-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-100/10 to-blue-100/10 dark:from-green-900/10 dark:to-blue-900/10 pointer-events-none" />
      
      <MapFeature 
        title="Infrastructure Optimisée sur une Portée Mondiale"
        description="Notre entrepôt est spécialement conçu pour traiter efficacement les commandes e-commerce à l'échelle internationale. Avec des processus optimisés et une technologie de pointe, nous garantissons rapidité et précision pour vos livraisons partout dans le monde."
        mapDots={globalShippingPoints}
        image="/lovable-uploads/486a69e8-fb37-4b81-92e0-79dc5d772590.png"
      />
      
      <div className="container mx-auto px-4 mt-12">
        <motion.div 
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-3">Nos avantages clés</h3>
          <p className="text-muted-foreground max-w-2xl">
            Des solutions adaptées aux besoins spécifiques de votre e-commerce
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {checkItems.map((item, index) => (
            <motion.div
              key={index}
              className="section-box bg-white align-center dark:bg-slate-800/20 backdrop-blur-sm rounded-10 rounded-lg p-6 shadow-sm border border-gray-100/20 dark:border-gray-700/20"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariants}
            >
              <div className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-2 mr-3 mt-1">
                  <Check className="h-5 w-5 text-orange-600 dark:text-orange-500" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
