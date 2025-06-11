
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Formulaire de Contact</DialogTitle>
          <DialogDescription>
            Parlez-nous de votre projet et obtenez une réponse personnalisée sous 24h.
          </DialogDescription>
        </DialogHeader>
        <div className="min-h-[400px] w-full">
          {/* Formulaire de contact HubSpot avec votre code d'intégration */}
          <div className="hs-form-frame" data-region="eu1" data-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f" data-portal-id="144571109"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
