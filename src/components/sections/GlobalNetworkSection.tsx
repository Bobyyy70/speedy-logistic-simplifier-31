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
export default function GlobalNetworkSection({
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

  return (
    <div className={`relative min-h-[600px] ${backgroundVariant === 'white' ? 'bg-white' : 'bg-site'}`}>
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20">
        <WorldMap 
          dots={globalShippingPoints}
          lineColor="#3b82f6"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Prêt à optimiser votre logistique ?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Rejoignez plus de 500 entreprises qui ont fait confiance à Speed E Log pour 
              transformer leur chaîne logistique. Notre réseau international vous permet 
              d'expédier partout dans le monde avec une efficacité optimale.
            </p>

            <div className="flex flex-col gap-4 justify-center items-center">
              <Button 
                onClick={openModal}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={openModal}
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Réponse sous 24h • Sans engagement
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteFormModal 
        isOpen={isOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}