
import React from "react";
import { History, Truck } from "lucide-react";

export const HistorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center mb-4">
              <History className="h-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
            </div>
            <p className="text-muted-foreground">
              Fondée par Francesco Almanzo, Speed E-Log est née d'une passion pour l'optimisation logistique et d'une 
              compréhension approfondie des défis auxquels sont confrontées les PME du e-commerce.
            </p>
            <p className="text-muted-foreground">
              Après plusieurs années d'expérience dans le secteur, Francesco a identifié un besoin crucial : 
              offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et 
              technologiquement avancée, sans les coûts prohibitifs des grands prestataires.
            </p>
            <p className="text-muted-foreground">
              Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
              logistique de nos clients et contribuer à leur succès.
            </p>
          </div>
          <div className="md:w-1/2 bg-muted rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <Truck className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <p className="text-xl font-medium">
                "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Francesco Almanzo, Fondateur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
