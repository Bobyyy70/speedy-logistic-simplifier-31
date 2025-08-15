import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map/component";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
export function ContactCTA() {
  const {
    isOpen,
    openModal,
    closeModal
  } = useQuoteModal();

  // Points de livraison internationaux pour la carte simplifiée
  const globalShippingPoints = [{
    start: {
      lat: 48.8566,
      lng: 2.3522,
      label: "France"
    },
    end: {
      lat: 40.7128,
      lng: -74.006,
      label: "New York"
    }
  }, {
    start: {
      lat: 48.8566,
      lng: 2.3522
    },
    end: {
      lat: -33.8688,
      lng: 151.2093,
      label: "Sydney"
    }
  }];
  return;
}