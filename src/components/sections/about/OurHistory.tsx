
import React from "react";
import { History, Truck } from "lucide-react";

export const OurHistory = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-100/80 via-blue-50/50 to-green-100/50 dark:from-slate-900/80 dark:via-blue-950/30 dark:to-green-950/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center mb-4">
              <History className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Notre Histoire</h2>
            </div>
            <p className="text-muted-foreground">Speed E-Log est née d'une passion pour l'optimisation logistique et d'une compréhension approfondie des défis auxquels sont confrontées les PME du e-commerce.</p>
            <p className="text-muted-foreground">Après plusieurs années d'expérience dans le secteur, Nous avons identifié un besoin crucial : offrir aux entrepreneurs e-commerce une solution logistique adaptée à leur taille, flexible et technologiquement avancée, sans les coûts prohibitifs des grands prestataires.</p>
            <p className="text-muted-foreground">
              Aujourd'hui, notre équipe partage cette vision et travaille chaque jour pour optimiser la chaîne 
              logistique de nos clients et contribuer à leur succès.
            </p>
          </div>
          <div className="md:w-1/2 bg-gradient-to-r from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20 rounded-lg p-6 border border-orange-200/50 dark:border-orange-800/30 shadow-sm">
            <div className="text-center">
              <Truck className="h-16 w-16 text-orange-500 dark:text-orange-400 mx-auto mb-4" />
              <p className="text-xl font-medium">
                "Notre ambition est de démocratiser l'accès à une logistique e-commerce de qualité pour les PME françaises."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
