import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map/component";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
interface GlobalNetworkSectionProps {
  backgroundVariant?: 'white' | 'site';
}
export function GlobalNetworkSection({
  backgroundVariant = 'site'
}: GlobalNetworkSectionProps) {
  const {
    isOpen,
    openModal,
    closeModal
  } = useQuoteModal();

  // Points de livraison internationaux pour la carte
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
  }, {
    start: {
      lat: 48.8566,
      lng: 2.3522
    },
    end: {
      lat: 35.6762,
      lng: 139.6503,
      label: "Tokyo"
    }
  }, {
    start: {
      lat: 48.8566,
      lng: 2.3522
    },
    end: {
      lat: 55.7558,
      lng: 37.6173,
      label: "Moscow"
    }
  }];
  return;
}