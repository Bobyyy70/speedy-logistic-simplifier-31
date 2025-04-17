
import React from "react";
import { motion } from "framer-motion";

interface CalculatorResultsProps {
  loading: boolean;
  error: string | null;
  calculationResult: string | null;
  useVolumetricWeight: boolean;
  volumetricWeight: number | null;
  withSignature: boolean;
}

export function CalculatorResults({
  loading,
  error,
  calculationResult,
  useVolumetricWeight,
  volumetricWeight,
  withSignature
}: CalculatorResultsProps) {
  return (
    <div className="mt-6 pt-4 border-t">
      {loading && <p className="text-center text-muted-foreground">Calcul en cours...</p>}
      
      {error && !error.includes("code postal") && !error.includes("poids") && 
        !error.includes("dimensions") && !error.includes("service") && (
          <motion.div 
            initial={{
              opacity: 0,
              scale: 0.95
            }} 
            animate={{
              opacity: 1,
              scale: 1
            }} 
            className="p-3 bg-destructive/10 text-destructive rounded-md text-center"
          >
            {error}
          </motion.div>
        )}
      
      {!loading && !error && calculationResult && (
        <motion.div 
          className="text-center space-y-2" 
          initial={{
            opacity: 0,
            scale: 0.9
          }} 
          animate={{
            opacity: 1,
            scale: 1
          }} 
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 120
          }}
        >
          <div className="font-bold text-2xl">
            Tarif estimé : {calculationResult} € TTC
          </div>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            *Tarif indicatif TTC, basé sur les informations fournies. Le tarif final dépendra des dimensions exactes 
            et des éventuelles surcharges non incluses dans cette simulation.
            {useVolumetricWeight && volumetricWeight && (
              <span className="block mt-1">
                Calcul effectué sur le poids volumétrique de {volumetricWeight.toFixed(2)} kg.
              </span>
            )}
            {withSignature && (
              <span className="block mt-1">
                Incluant le supplément pour livraison avec signature.
              </span>
            )}
          </p>
        </motion.div>
      )}
    </div>
  );
}
