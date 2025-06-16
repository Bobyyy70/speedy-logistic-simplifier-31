
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Intégration",
    description: "Connexion facile avec votre plateforme e-commerce (Shopify, WooCommerce, Prestashop...) ou via notre API.",
  },
  {
    number: "02",
    title: "Réception",
    description: "Envoyez-nous vos produits qui seront réceptionnés, contrôlés et référencés dans notre système.",
  },
  {
    number: "03",
    title: "Traitement",
    description: "Nous préparons, emballons et expédions vos commandes avec rapidité et précision via les meilleurs transporteurs.",
  },
  {
    number: "04",
    title: "Suivi",
    description: "Suivez en temps réel l'évolution de vos stocks et le statut de vos commandes sur votre espace client dédié.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-12 md:py-20">
      <div className="section-container">
        <h2 className="section-title">Comment ça marche ?</h2>
        <p className="section-subtitle">
          Un processus simple et transparent pour une logistique e-commerce sans souci.
        </p>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-0 right-0 top-24 h-0.5 bg-gradient-to-r from-blue-400/60 via-white/60 to-blue-500/60 dark:from-blue-600 dark:via-white/20 dark:to-blue-600/60"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-600 dark:to-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-center text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-6 transform translate-x-1/2 text-blue-500 dark:text-blue-400">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
