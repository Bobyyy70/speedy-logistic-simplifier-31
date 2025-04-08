import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
      
      <div className="space-y-6">
        <motion.div 
          className="flex items-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">contact@speedelog.fr</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Téléphone</h3>
            <p className="text-muted-foreground">+33 3 84 XX XX XX</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Adresse</h3>
            <p className="text-muted-foreground">
              Speed E Log<br />
              70170 Port-sur-Saône<br />
              Bourgogne-Franche-Comté<br />
              France
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-8 bg-muted rounded-lg h-[300px] flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="text-muted-foreground">Carte Google Maps à intégrer</p>
      </motion.div>
    </motion.div>
  );
};
