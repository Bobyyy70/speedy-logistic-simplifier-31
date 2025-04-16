
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AboutCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Envie de travailler avec nous ?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Découvrez comment Speed E Log peut devenir votre partenaire logistique
          et vous accompagner dans la croissance de votre entreprise e-commerce.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            <Link to="/contact">Nous Contacter</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400">
            <Link to="/services">Nos Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
