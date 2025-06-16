
import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck } from "lucide-react";
import { StaticPricingTable } from "@/components/client-portal/pricing/StaticPricingTable";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs | Speed E-Log - Logistique E-commerce pour PME</title>
        <meta
          name="description"
          content="Découvrez nos tarifs transparents pour la logistique e-commerce. Grille tarifaire claire et sans frais cachés pour les PME."
        />
      </Helmet>

      <div className="relative min-h-screen pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-slate-50 dark:from-slate-900 dark:to-slate-900/90 -z-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                <Truck className="w-4 h-4 mr-2" />
                Tarification
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Tarifs <span className="text-blue-600 dark:text-blue-500">transparents</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre grille tarifaire claire et sans frais cachés pour votre logistique e-commerce.
              </p>
            </div>
            
            <StaticPricingTable />
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Besoin d'un devis personnalisé ?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
