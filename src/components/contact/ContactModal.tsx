
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  useEffect(() => {
    if (open) {
      // Charger le script HubSpot quand la modal s'ouvre
      const script = document.createElement('script');
      script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
      script.defer = true;
      script.id = 'hs-contact-script';
      
      // Supprimer le script existant s'il y en a un
      const existingScript = document.getElementById('hs-contact-script');
      if (existingScript) {
        existingScript.remove();
      }
      
      document.head.appendChild(script);
      
      // Créer le formulaire une fois le script chargé
      script.onload = () => {
        if ((window as any).hbspt?.forms) {
          setTimeout(() => {
            try {
              (window as any).hbspt.forms.create({
                region: "eu1",
                portalId: "144571109",
                formId: "ebf2ad52-915e-4bfa-b4c0-a2ff8480054f",
                target: "#hubspot-contact-form"
              });
            } catch (error) {
              console.error('Erreur lors du chargement du formulaire de contact HubSpot:', error);
            }
          }, 100);
        }
      };
      
      return () => {
        // Nettoyage du script quand la modal se ferme
        const scriptToRemove = document.getElementById('hs-contact-script');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Demande de Devis - Speed E-Log</DialogTitle>
          <DialogDescription>
            Parlez-nous de votre projet logistique et obtenez une réponse personnalisée sous 24h.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px]">
          <div id="hubspot-contact-form"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
