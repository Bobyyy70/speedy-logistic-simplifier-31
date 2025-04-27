
import React from "react";

export const AboutHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Qui <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">Sommes-Nous</span> ?
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
