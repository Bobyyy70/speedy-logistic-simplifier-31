
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CalendarBookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarBookingPopup = ({ isOpen, onClose }: CalendarBookingPopupProps) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [formLoading, setFormLoading] = useState(true);
  const [formError, setFormError] = useState<string | null>(null);

  // Fonction pour attendre que HubSpot soit chargé
  const waitForHubSpot = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      let attempts = 0;
      const maxAttempts = 20;
      
      const checkHubSpot = () => {
        attempts++;
        console.log(`🔍 Tentative ${attempts} de chargement HubSpot...`);
        
        if (window.hbspt && window.hbspt.forms) {
          console.log('✅ HubSpot chargé avec succès');
          resolve();
        } else if (attempts >= maxAttempts) {
          console.error('❌ Timeout: HubSpot ne s\'est pas chargé');
          reject(new Error('HubSpot failed to load'));
        } else {
          setTimeout(checkHubSpot, 500);
        }
      };
      
      checkHubSpot();
    });
  };

  // Charger le formulaire HubSpot
  const loadHubSpotForm = async () => {
    if (!isOpen || showCalendar) return;
    
    setFormLoading(true);
    setFormError(null);
    
    try {
      await waitForHubSpot();
      
      // Attendre que le conteneur soit dans le DOM
      setTimeout(() => {
        const container = document.getElementById('hubspot-form-container');
        if (container) {
          // Nettoyer le conteneur avant de créer le formulaire
          container.innerHTML = '';
          
          console.log('📋 Création du formulaire HubSpot...');
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "144571109",
            formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
            target: "#hubspot-form-container",
            onFormReady: () => {
              console.log('✅ Formulaire HubSpot prêt');
              setFormLoading(false);
            },
            onFormSubmitted: (form: any) => {
              console.log('📋 Formulaire soumis:', form);
              setSubmittedData(form);
              setTimeout(() => {
                setShowCalendar(true);
              }, 500);
            }
          });
        } else {
          throw new Error('Conteneur du formulaire introuvable');
        }
      }, 100);
      
    } catch (error) {
      console.error('❌ Erreur lors du chargement du formulaire:', error);
      setFormError('Erreur de chargement du formulaire. Veuillez rafraîchir la page.');
      setFormLoading(false);
    }
  };

  // Charger le formulaire quand la popup s'ouvre
  useEffect(() => {
    if (isOpen && !showCalendar) {
      loadHubSpotForm();
    }
  }, [isOpen, showCalendar]);

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
    setFormLoading(true);
    setFormError(null);
    onClose();
  };

  // Styles pour le formulaire HubSpot
  const hubspotFormStyles = `
    .hubspot-form-wrapper .hs-form {
      font-family: inherit !important;
    }
    
    .hubspot-form-wrapper .hs-form fieldset {
      max-width: none !important;
    }
    
    .hubspot-form-wrapper .hs-form .hs-field-desc {
      color: #64748b !important;
      font-size: 14px !important;
    }
    
    .hubspot-form-wrapper .hs-form .hs-input {
      border: 1px solid #e2e8f0 !important;
      border-radius: 8px !important;
      padding: 12px !important;
      font-size: 16px !important;
      transition: border-color 0.2s ease !important;
    }
    
    .hubspot-form-wrapper .hs-form .hs-input:focus {
      border-color: #3b82f6 !important;
      outline: none !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }
    
    .hubspot-form-wrapper .hs-form .hs-button {
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
    
    .hubspot-form-wrapper .hs-form .hs-button:hover {
      background: linear-gradient(to right, #1d4ed8, #1e40af) !important;
      transform: translateY(-1px) !important;
    }
  `;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <Calendar className="h-6 w-6 text-blue-600" />
            {!showCalendar ? "Planifiez votre rendez-vous" : "Choisissez votre créneau"}
          </DialogTitle>
        </DialogHeader>

        {/* Injection des styles CSS */}
        <style dangerouslySetInnerHTML={{ __html: hubspotFormStyles }} />

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
              <div className="hubspot-form-wrapper">
                <div 
                  id="hubspot-form-container"
                  style={{ minHeight: '400px' }}
                  className="relative"
                >
                  {formLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                      <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        <p className="text-slate-600">Chargement du formulaire...</p>
                      </div>
                    </div>
                  )}
                  
                  {formError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                      <div className="text-center p-6">
                        <p className="text-red-600 mb-4">{formError}</p>
                        <button 
                          onClick={loadHubSpotForm}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          Réessayer
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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
