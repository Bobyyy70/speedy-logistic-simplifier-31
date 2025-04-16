
import React from "react";

export const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50/80 to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm mb-4">
          À Propos
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Qui Sommes-Nous ?
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Speed E-Log est un partenaire logistique spécialisé pour les PME e-commerce françaises.
          Notre mission est de vous permettre de vous concentrer sur la croissance de votre entreprise
          en gérant votre logistique de manière fiable et efficace.
        </p>
      </div>
    </section>
  );
};
