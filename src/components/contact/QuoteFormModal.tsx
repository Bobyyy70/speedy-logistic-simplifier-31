
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HubSpotQuoteForm } from "./HubSpotQuoteForm";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-slate-900">
            Demander un devis personnalisé
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-slate-600">
            Remplissez ce formulaire pour recevoir un devis personnalisé adapté à vos besoins logistiques.
          </p>
          
          <HubSpotQuoteForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
