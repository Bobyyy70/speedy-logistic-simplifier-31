
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-slate-900 flex items-center justify-center gap-3">
          <MapPin className="h-6 w-6 text-blue-600" />
          Notre Localisation
        </h2>
        <p className="text-slate-600">
          Speed E-Log - 37 Rue de Rémaucourt, 70170 Port-sur-Saône
        </p>
      </div>
      
      <div className="h-96 border border-slate-200 rounded-xl overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10805.55665035175!2d6.036526308525196!3d47.69024919081746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47920f4259cab0c7%3A0x409ce34b30d1220!2s70170%20Port-sur-Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1681578343811!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation de Speed E-Log à Port-sur-Saône"
          className="w-full h-full"
        />
      </div>
    </motion.section>
  );
};
