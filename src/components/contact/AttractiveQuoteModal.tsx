import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { AttractiveQuoteForm } from "./AttractiveQuoteForm";
import { X, Sparkles, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AttractiveQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AttractiveQuoteModal: React.FC<AttractiveQuoteModalProps> = ({ isOpen, onClose }) => {
  // 🔍 [DEBUG] Log modal state
  console.log("🔍 [DEBUG] AttractiveQuoteModal state:", { isOpen });
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0 bg-transparent border-none shadow-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative"
        >
          {/* Effet de fond avec particules flottantes */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 rounded-3xl backdrop-blur-sm" />
          
          {/* Particules animées décoratives */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  x: [-5, 5, -5],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Bouton de fermeture stylisé */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="h-4 w-4 text-gray-600" />
          </motion.button>

          {/* Header attractif */}
          <DialogHeader className="relative z-10 text-center py-8 px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {/* Badge promotionnel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                <Star className="h-4 w-4" />
                <span>Offre spéciale - Devis gratuit sous 2h</span>
                <Sparkles className="h-4 w-4" />
              </motion.div>

              {/* Titre principal */}
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Transformez votre logistique
              </motion.h1>

              {/* Sous-titre */}
              <motion.p 
                className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Obtenez un devis personnalisé pour optimiser vos coûts et améliorer votre efficacité
              </motion.p>

              {/* Points de valeur */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mt-6"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Sans engagement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Réponse rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Expert dédié</span>
                </div>
              </motion.div>
            </motion.div>
          </DialogHeader>
          
          {/* Formulaire principal */}
          <div className="relative z-10 px-6 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <AttractiveQuoteForm />
            </motion.div>
          </div>

          {/* Footer avec avantages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative z-10 px-8 pb-8"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Réponse ultra-rapide</h3>
                  <p className="text-sm text-gray-600">Devis personnalisé sous 2h ouvrées</p>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Expertise reconnue</h3>
                  <p className="text-sm text-gray-600">+500 entreprises nous font confiance</p>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Solutions sur-mesure</h3>
                  <p className="text-sm text-gray-600">Adaptées à votre secteur d'activité</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};