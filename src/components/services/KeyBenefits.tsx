
import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, CheckCircle2 } from "lucide-react";

const benefitItems = [
  { 
    title: "Gagnez en efficacité", 
    description: "Optimisez votre chaîne logistique et réduisez vos coûts opérationnels avec nos solutions d'automatisation.",
    icon: <Package className="w-10 h-10 text-blue-600" />
  },
  { 
    title: "Scaling flexible", 
    description: "Notre infrastructure s'adapte à votre croissance, que ce soit pour gérer des pics saisonniers ou une expansion continue.",
    icon: <Truck className="w-10 h-10 text-blue-600" />
  },
  { 
    title: "Transparence totale", 
    description: "Suivez vos stocks et commandes en temps réel avec nos outils de reporting avancés et notre grille tarifaire sans surprise.",
    icon: <CheckCircle2 className="w-10 h-10 text-blue-600" />
  }
];

export const KeyBenefits: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative bg-gradient-to-b from-transparent to-slate-50/30 dark:to-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
