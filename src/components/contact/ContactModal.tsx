
import React, { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHubSpot } from "@/hooks/useHubSpot";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { createContactForm } = useHubSpot();
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && formContainerRef.current) {
      // Clear any existing form
      formContainerRef.current.innerHTML = '';
      
      // Create the HubSpot form
      setTimeout(() => {
        createContactForm('hubspot-contact-form');
      }, 100);
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
        <div className="min-h-[400px] w-full">
          <div id="hubspot-contact-form" ref={formContainerRef}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
