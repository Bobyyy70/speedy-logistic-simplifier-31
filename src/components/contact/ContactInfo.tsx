import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5,
    delay: 0.1
  }}>
      <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
      
      <div className="space-y-6">
        <motion.div className="flex items-start" initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3,
        delay: 0.2
      }}>
          <Mail className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-muted-foreground">contact@speedelog.net</p>
          </div>
        </motion.div>
        
        <motion.div className="flex items-start" initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3,
        delay: 0.3
      }}>
          <Phone className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Téléphone</h3>
            <p className="text-muted-foreground">+33 6 35 58 40 04</p>
          </div>
        </motion.div>
        
        <motion.div className="flex items-start" initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3,
        delay: 0.4
      }}>
          <MapPin className="w-5 h-5 mt-1 mr-3 text-primary" />
          <div>
            <h3 className="font-medium">Adresse</h3>
            <p className="text-muted-foreground">
              Speed E-Log<br />
              37 rue de Remaucourt<br />
              70170 Port-sur-Saône<br />
              France
            </p>
          </div>
        </motion.div>
      </div>
      
      <motion.div className="mt-8 rounded-lg overflow-hidden h-[300px] shadow-md" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.5
    }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10805.55665035175!2d6.036526308525196!3d47.69024919081746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47920f4259cab0c7%3A0x409ce34b30d1220!2s70170%20Port-sur-Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1681578343811!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation de Speed E-Log à Port-sur-Saône"
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>;
};
