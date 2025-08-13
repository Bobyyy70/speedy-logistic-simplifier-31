import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
        <HubspotEmbeddedForm />
      </DialogContent>
    </Dialog>;
};