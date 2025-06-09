
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHubSpot } from "@/hooks/useHubSpot";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { createContactForm } = useHubSpot();

  useEffect(() => {
    if (open) {
      createContactForm("contact-form-container");
    }
  }, [open, createContactForm]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Formulaire de Contact</DialogTitle>
          <DialogDescription>
            Parlez-nous de votre projet et obtenez une réponse personnalisée sous 24h.
          </DialogDescription>
        </DialogHeader>
        <div id="contact-form-container" className="min-h-[400px]"></div>
      </DialogContent>
    </Dialog>
  );
};
