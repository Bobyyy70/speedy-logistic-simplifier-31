
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { CalculatorDimensions } from "./CalculatorDimensions";
import { CalculatorDestination } from "./CalculatorDestination";
import { CalculatorServiceType } from "./CalculatorServiceType";
import { CalculatorResults } from "./CalculatorResults";

interface CalculatorFormProps {
  zipCode: string;
  setZipCode: (value: string) => void;
  weight: string;
  setWeight: (value: string) => void;
  service: string;
  setService: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  width: string;
  setWidth: (value: string) => void;
  height: string;
  setHeight: (value: string) => void;
  withSignature: boolean;
  setWithSignature: (value: boolean) => void;
  loading: boolean;
  error: string | null;
  calculationResult: string | null;
  volumetricWeight: number | null;
  useVolumetricWeight: boolean;
  handleCalculate: (e: React.FormEvent) => void;
}

export function CalculatorForm({
  zipCode,
  setZipCode,
  weight,
  setWeight,
  service,
  setService,
  length,
  setLength,
  width,
  setWidth,
  height,
  setHeight,
  withSignature,
  setWithSignature,
  loading,
  error,
  calculationResult,
  volumetricWeight,
  useVolumetricWeight,
  handleCalculate
}: CalculatorFormProps) {
  return (
    <form onSubmit={handleCalculate} className="space-y-6">
      <CalculatorDimensions
        weight={weight}
        setWeight={setWeight}
        length={length}
        setLength={setLength}
        width={width}
        setWidth={setWidth}
        height={height}
        setHeight={setHeight}
        volumetricWeight={volumetricWeight}
        useVolumetricWeight={useVolumetricWeight}
        error={error}
      />
      
      <CalculatorDestination
        zipCode={zipCode}
        setZipCode={setZipCode}
        error={error}
      />
      
      <CalculatorServiceType
        service={service}
        setService={setService}
        withSignature={withSignature}
        setWithSignature={setWithSignature}
        error={error}
      />
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.3, delay: 0.4 }} 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
      >
        <Button type="submit" className="w-full" disabled={loading}>
          <Calculator className="mr-2 h-4 w-4" />
          {loading ? "Calcul en cours..." : "Estimer le tarif"}
        </Button>
      </motion.div>
      
      <CalculatorResults
        loading={loading}
        error={error}
        calculationResult={calculationResult}
        useVolumetricWeight={useVolumetricWeight}
        volumetricWeight={volumetricWeight}
        withSignature={withSignature}
      />
    </form>
  );
}
