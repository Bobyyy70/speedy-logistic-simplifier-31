
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { HubSpotQuoteForm } from "./HubSpotQuoteForm";
import { X } from "lucide-react";

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold text-slate-900">
            Demander un devis personnalisé
          </DialogTitle>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </button>
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
