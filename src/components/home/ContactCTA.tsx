import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map/component";
import { Button } from "@/components/ui/button";
import { QuoteFormModal } from "@/components/contact/QuoteFormModal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
export default function ContactCTA() {
  const {
    isOpen,
    openModal,
    closeModal
  } = useQuoteModal();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à révolutionner votre logistique ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Rejoignez des centaines d'entreprises qui font confiance à Speed E Log
          </p>
          <Button 
            onClick={openModal}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-50"
          >
            Demander un devis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <QuoteFormModal 
        isOpen={isOpen} 
        onClose={closeModal} 
      />
    </section>
  );
}