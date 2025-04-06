
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">contact@speedelog.fr</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Téléphone</h3>
            <p className="text-muted-foreground">+33 3 84 XX XX XX</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Adresse</h3>
            <p className="text-muted-foreground">
              Speed E Log<br />
              Port-sur-Saône<br />
              70170 Bourgogne-Franche-Comté<br />
              France
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-muted rounded-lg h-[300px] flex items-center justify-center">
        <p className="text-muted-foreground">Carte Google Maps à intégrer</p>
      </div>
    </div>
  );
};
