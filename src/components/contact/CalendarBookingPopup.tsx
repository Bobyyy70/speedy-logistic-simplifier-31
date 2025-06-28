
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendarBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarBookingPopup = ({ isOpen, onClose }: CalendarBookingPopupProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  useEffect(() => {
    // Écouter les événements HubSpot pour détecter la soumission du formulaire
    const handleHubSpotMessage = (event: MessageEvent) => {
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        console.log('📋 Formulaire HubSpot soumis:', event.data);
        
        // Stocker les données soumises pour affichage
        setSubmittedData(event.data.data || {});
        
        // Afficher le calendrier après un court délai
        setTimeout(() => {
          setShowCalendar(true);
        }, 500);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('message', handleHubSpotMessage);

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener('message', handleHubSpotMessage);
    };
  }, []);

  // Réinitialiser l'état lors de la fermeture
  const handleClose = () => {
    setShowCalendar(false);
    setSubmittedData(null);
    onClose();
  };

  // Charger le formulaire HubSpot quand la popup s'ouvre
  useEffect(() => {
    if (isOpen && !showCalendar && window.hbspt) {
      // Attendre un peu que la popup soit complètement ouverte
      setTimeout(() => {
        try {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
            target: "#hubspot-form-container"
          });
        } catch (error) {
          console.error('Erreur lors du chargement du formulaire HubSpot:', error);
        }
      }, 300);
    }
  }, [isOpen, showCalendar]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            {!showCalendar ? "Planifiez votre rendez-vous" : "Choisissez votre créneau"}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!showCalendar ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <p className="text-slate-600">
                  Aidez-nous à mieux préparer votre consultation en complétant ce court formulaire.
                </p>
              </div>

              {/* Conteneur pour le formulaire HubSpot */}
              <div 
                id="hubspot-form-container" 
                className="hubspot-form-wrapper"
                style={{
                  minHeight: '400px'
                }}
              >
                {/* Le formulaire HubSpot sera injecté ici */}
              </div>

              {/* Style personnalisé pour le formulaire HubSpot */}
              <style jsx>{`
                .hubspot-form-wrapper :global(.hs-form) {
                  font-family: inherit !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form fieldset) {
                  max-width: none !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form .hs-field-desc) {
                  color: #64748b !important;
                  font-size: 14px !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form .hs-input) {
                  border: 1px solid #e2e8f0 !important;
                  border-radius: 8px !important;
                  padding: 12px !important;
                  font-size: 16px !important;
                  transition: border-color 0.2s ease !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form .hs-input:focus) {
                  border-color: #3b82f6 !important;
                  outline: none !important;
                  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form .hs-button) {
                  background: linear-gradient(to right, #2563eb, #1d4ed8) !important;
                  border: none !important;
                  border-radius: 8px !important;
                  color: white !important;
                  font-weight: 600 !important;
                  padding: 12px 24px !important;
                  font-size: 16px !important;
                  cursor: pointer !important;
                  transition: all 0.2s ease !important;
                  width: 100% !important;
                }
                
                .hubspot-form-wrapper :global(.hs-form .hs-button:hover) {
                  background: linear-gradient(to right, #1d4ed8, #1e40af) !important;
                  transform: translateY(-1px) !important;
                }
              `}</style>
            </motion.div>
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 font-medium">
                  ✅ Merci ! Nous avons bien reçu vos informations.
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Choisissez maintenant votre créneau de rendez-vous.
                </p>
              </div>
              
              <div className="min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white">
                {/* Calendrier HubSpot */}
                <div className="meetings-iframe-container w-full h-full min-h-[650px]" data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
