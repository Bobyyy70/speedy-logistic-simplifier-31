
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DynamicCalculatorSection } from "@/components/sections/DynamicCalculatorSection";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-orange-950/20">
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

      <div className="container mx-auto py-16 px-4">
        <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm mb-4 mx-auto">
          Tarification
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-6">
          Tarification Transparente
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Estimez rapidement vos coûts de transport avec notre calculateur. Des tarifs clairs sans mauvaises surprises.
        </p>
      </div>
      
      <DynamicCalculatorSection />
      
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto bg-orange-50/50 p-6 rounded-lg border border-orange-100/50">
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
