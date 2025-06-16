
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react";

export const WhyChooseUsSection = () => {
  const advantages = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Transparence Totale",
      description: "Tarifs clairs, pas de frais cachés. Vous savez exactement ce que vous payez."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Réactivité 24h",
      description: "Réponse garantie sous 24h et support client disponible quand vous en avez besoin."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Évolutif",
      description: "Nos solutions s'adaptent à votre croissance, de 10 à 10 000 commandes par mois."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Spécialisé PME",
      description: "Conçu spécifiquement pour les besoins et budgets des petites et moyennes entreprises."
    }
  ];

  return (
    <motion.section 
      className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-blue-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
          Pourquoi Choisir Speed E-Log ?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Découvrez les avantages qui font de Speed E-Log le partenaire logistique idéal pour votre e-commerce
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {advantage.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                <p className="text-slate-600 text-sm">{advantage.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
