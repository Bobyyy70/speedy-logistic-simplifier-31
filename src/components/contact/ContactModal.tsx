
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
        <div className="min-h-[500px]">
          <iframe 
            src="https://share-eu1.hsforms.com/1ebf2ad52-915e-4bfa-b4c0-a2ff8480054fFalmanzo"
            width="100%" 
            height="500" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Formulaire de contact Speed E-Log"
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
