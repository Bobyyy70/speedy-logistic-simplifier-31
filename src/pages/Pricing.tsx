
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DynamicCalculatorSection } from "@/components/sections/DynamicCalculatorSection";
import { StaticPricingSection } from "@/components/sections/StaticPricingSection";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-100/40 dark:from-slate-900 dark:via-green-950/20 dark:to-blue-950/30">
      <Helmet>
        <title>Estimation Tarif Transport & Tarification | Speed E-Log</title>
        <meta 
          name="description" 
          content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants."
        />
        <meta property="og:title" content="Estimation Tarif Transport & Tarification | Speed E-Log" />
        <meta 
          property="og:description" 
          content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants."
        />
      </Helmet>
      <DynamicCalculatorSection />
      <StaticPricingSection />
      
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white/80 dark:bg-slate-800/50 shadow-sm p-6 rounded-lg border border-green-100/70 dark:border-green-900/30">
          <h3 className="text-xl font-semibold mb-3">Information importante</h3>
          <p className="text-muted-foreground">
            La grille tarifaire complète de nos prestations (colisage, stockage, préparation de commandes...) 
            ainsi que le service d'impression d'étiquettes sont disponibles pour nos clients après connexion à l'espace client.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Pour plus d'informations ou pour obtenir un devis personnalisé, n'hésitez pas à nous contacter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
