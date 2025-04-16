
import React from "react";
import { MapPin } from "lucide-react";

export const LocationSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 order-2 md:order-1 bg-muted/50 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center p-4">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <p className="text-lg font-medium">
                Port-sur-Saône, Bourgogne-Franche-Comté
              </p>
              <p className="text-sm text-muted-foreground">
                {/* Placeholder for future map integration */}
                Image de la carte ou de l'entrepôt à venir
              </p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-4 order-1 md:order-2">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-orange-500 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Basés à Port-sur-Saône</h2>
            </div>
            <p className="text-muted-foreground">
              Notre entrepôt est situé en Bourgogne-Franche-Comté, à Port-sur-Saône, une position 
              stratégique qui nous permet d'optimiser la distribution de vos produits sur l'ensemble 
              du territoire français et européen.
            </p>
            <p className="text-muted-foreground">
              Cette localisation offre un excellent équilibre entre accessibilité, coûts optimisés 
              et efficacité logistique, des avantages que nous répercutons directement sur la qualité 
              de nos services et nos tarifs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
