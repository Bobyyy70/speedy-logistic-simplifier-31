import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { HubspotEmbeddedForm } from "./HubspotEmbeddedForm";
interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const QuoteFormModal: React.FC<QuoteFormModalProps> = ({
  isOpen,
  onClose
}) => {
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Formulaire de demande de devis</DialogTitle>
          <DialogDescription id="dialog-description">
            Remplissez ce formulaire pour obtenir un devis personnalisé pour vos besoins logistiques
          </DialogDescription>
        </DialogHeader>
        <HubspotEmbeddedForm />
      </DialogContent>
    </Dialog>;
};