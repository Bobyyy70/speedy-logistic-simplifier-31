
import React, { useEffect } from "react";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { SavForm } from "./SavForm";

export const ContactInfo = () => {
  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        "namespace": "15min",
        "embedJsUrl": "https://calcom.speedelog.space/embed/embed.js"
      });
      cal("ui", {
        "theme": "light",
        "hideEventTypeDetails": true,
        "layout": "month_view"
      });
    })();
  }, []);
  
  return <motion.div initial={{
    opacity: 0,
    x: -20
  }} animate={{
    opacity: 1,
    x: 0
  }} transition={{
    duration: 0.5,
    delay: 0.1
  }} className="space-y-6">
      <Card className="overflow-hidden border-blue-200 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
        <CardContent className="pt-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Planifiez un rendez-vous</h3>
            <p className="text-muted-foreground mb-5">
              Réservez une consultation de 15 minutes pour discuter de vos besoins logistiques
            </p>
            <Button data-cal-namespace="15min" data-cal-link="admin-speedelog.net/15min" data-cal-origin="https://calcom.speedelog.space" data-cal-config='{"layout":"month_view","theme":"light"}' size="lg" className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Service Après-Vente (SAV) Form */}
      <SavForm />
      
      {/* Contact Information and Map in grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information Card */}
        <motion.div 
          className="rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-white to-blue-50 h-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="border-blue-200 h-full">
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Nos coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-muted-foreground">
                      Speed E-Log<br />
                      70170 Port-sur-Saône<br />
                      France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@speedelog.net" className="text-blue-600 hover:underline">
                      contact@speedelog.net
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+33384701234" className="text-blue-600 hover:underline">
                      +33 3 84 70 12 34
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Heures d'ouverture</p>
                    <p className="text-muted-foreground">
                      Lun-Ven: 9h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Google Maps iframe */}
        <motion.div 
          className="rounded-lg overflow-hidden h-[300px] shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
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
      </div>
    </motion.div>;
};
