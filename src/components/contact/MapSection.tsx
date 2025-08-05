
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  const [mapError, setMapError] = React.useState(false);

  return (
    <motion.section 
      className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-slate-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-slate-900 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
          <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
          Notre Localisation
        </h2>
        <p className="text-sm md:text-base text-slate-600 px-2">
          Speed E-Log - 37 Rue de Rémaucourt, 70170 Port-sur-Saône
        </p>
      </div>
      
      <div className="h-[300px] md:h-[400px] lg:h-[500px] border border-slate-200 rounded-xl overflow-hidden shadow-lg">
        {mapError ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <div className="text-center p-6">
              <p className="text-gray-600 mb-2">🗺️ Carte temporairement indisponible</p>
              <p className="text-sm text-gray-500">37 Rue de Rémaucourt, 70170 Port-sur-Saône</p>
              <a 
                href="https://maps.google.com/maps?q=37+Rue+de+Rémaucourt,+70170+Port-sur-Saône"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        ) : (
          <iframe 
            src="https://storage.googleapis.com/maps-solutions-e7nc7kb2tn/address-selection/nb7a/address-selection.html"
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            loading="lazy"
            title="Sélection d'adresse - Speed E-Log"
            className="w-full h-full"
            data-expected="google-maps"
            onError={() => setMapError(true)}
          />
        )}
      </div>
    </motion.section>
  );
};
