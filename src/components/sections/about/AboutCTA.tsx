
import React from "react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/moving-border";

export const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Envie de travailler avec nous ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Découvrez comment Speed E Log peut devenir votre partenaire logistique
          et vous accompagner dans la croissance de votre entreprise e-commerce.
        </p>
        <AnimatedButton 
          asChild
          className="shadow-lg hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20"
        >
          <Link to="/contact">Demander un Devis Personnalisé</Link>
        </AnimatedButton>
      </div>
    </section>
  );
};
