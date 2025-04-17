
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

  return <div className="bg-gradient-to-br from-blue-100 via-white to-orange-100/30 
                    dark:from-blue-800/20 dark:via-slate-950 dark:to-orange-900/20">
      <Helmet>
        <title>Estimation Tarification & Prix | Speed E-Log</title>
        <meta name="description" content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants." />
        <meta property="og:title" content="Estimation Tarification & Prix | Speed E-Log" />
        <meta property="og:description" content="Estimez rapidement votre coût de transport TTC avec notre calculateur. Tarification logistique transparente pour les e-commerçants." />
      </Helmet>
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-orange-200/50 
                           dark:from-blue-900/30 dark:via-slate-950 dark:to-orange-900/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tarification <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-600 dark:from-blue-400 dark:to-orange-500">Transparente</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Des tarifs clairs et sans surprise pour une gestion logistique sereine.
            Utilisez notre calculateur ci-dessous pour estimer vos frais de transport.
          </p>
        </div>
      </section>
      
      <DynamicCalculatorSection />
      <StaticPricingSection />
      
      <ContactCTA />
    </div>;
};

export default Pricing;
