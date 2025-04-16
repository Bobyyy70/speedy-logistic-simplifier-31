
import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { DynamicCalculatorSection } from "@/components/sections/DynamicCalculatorSection";
import { StaticPricingSection } from "@/components/sections/StaticPricingSection";
import { ContactCTA } from "@/components/home/ContactCTA";

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-100/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
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
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tarification <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Transparente</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Des tarifs clairs et sans surprise pour une gestion logistique sereine.
            Utilisez notre calculateur ci-dessous pour estimer vos frais de transport.
          </p>
        </div>
      </section>
      
      <DynamicCalculatorSection />
      <StaticPricingSection />
      
      <div className="container mx-auto py-12 px-4 text-center mb-12">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 p-6 rounded-lg border border-orange-200/50 dark:border-orange-800/30 shadow-sm">
          <h3 className="text-xl font-semibold mb-3 text-orange-700 dark:text-orange-400">Information importante</h3>
          <p className="text-muted-foreground">
            La grille tarifaire complète de nos prestations (colisage, stockage, préparation de commandes...) 
            ainsi que le service d'impression d'étiquettes sont disponibles pour nos clients après connexion à l'espace client.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Pour plus d'informations ou pour obtenir un devis personnalisé, n'hésitez pas à nous contacter.
          </p>
        </div>
      </div>
      
      <ContactCTA />
    </div>
  );
};

export default Pricing;
