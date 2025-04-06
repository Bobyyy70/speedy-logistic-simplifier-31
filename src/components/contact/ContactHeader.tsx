
import React from "react";

export const ContactHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm mb-2">
          Contactez-Nous
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">Prêt à simplifier votre logistique ?</h1>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé ou discuter de vos besoins spécifiques. 
          Notre équipe vous répondra dans les plus brefs délais.
        </p>
      </div>
    </>
  );
};
