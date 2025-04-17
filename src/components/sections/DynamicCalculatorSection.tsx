
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { CalculatorHeader } from "@/components/calculator/CalculatorHeader";
import { CalculatorForm } from "@/components/calculator/CalculatorForm";

export function DynamicCalculatorSection() {
  // États pour le formulaire
  const [zipCode, setZipCode] = useState("");
  const [weight, setWeight] = useState("");
  const [service, setService] = useState("");

  // États pour les dimensions (poids volumétrique)
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  // État pour la signature à la livraison
  const [withSignature, setWithSignature] = useState(false);

  // États pour la logique de calcul
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);
  const [volumetricWeight, setVolumetricWeight] = useState<number | null>(null);
  const [useVolumetricWeight, setUseVolumetricWeight] = useState(false);

  // Calcul du poids volumétrique à chaque modification des dimensions
  useEffect(() => {
    const volWeight = calculateVolumetricWeight();
    setVolumetricWeight(volWeight);
  }, [length, width, height]);

  // Déterminer si le poids volumétrique doit être utilisé
  useEffect(() => {
    if (volumetricWeight && parseFloat(weight)) {
      setUseVolumetricWeight(volumetricWeight > parseFloat(weight));
    } else {
      setUseVolumetricWeight(false);
    }
  }, [volumetricWeight, weight]);

  const calculateVolumetricWeight = () => {
    if (!length || !width || !height) return null;
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (isNaN(l) || isNaN(w) || isNaN(h)) return null;

    // Formule standard: (L x l x h en cm) / 5000 = poids volumétrique en kg
    return l * w * h / 5000;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation basique
    if (!zipCode || zipCode.length < 5) {
      setError("Veuillez entrer un code postal valide");
      toast({
        title: "Erreur de validation",
        description: "Veuillez entrer un code postal valide",
        variant: "destructive"
      });
      return;
    }
    if (!service) {
      setError("Veuillez sélectionner un type de service");
      toast({
        title: "Erreur de validation",
        description: "Veuillez sélectionner un type de service",
        variant: "destructive"
      });
      return;
    }
    let weightNum: number;

    // Vérification du poids réel
    if (!weight || parseFloat(weight) <= 0 || parseFloat(weight) > 30) {
      setError("Le poids doit être entre 0.1 et 30 kg");
      toast({
        title: "Erreur de validation",
        description: "Le poids doit être entre 0.1 et 30 kg",
        variant: "destructive"
      });
      return;
    }
    weightNum = parseFloat(weight);

    // Si les dimensions sont remplies, calculer et comparer le poids volumétrique
    const volWeight = calculateVolumetricWeight();
    if (volWeight !== null) {
      if (volWeight > weightNum) {
        weightNum = volWeight; // On utilise le poids le plus élevé
      }
    }

    // Réinitialiser les états
    setError(null);
    setCalculationResult(null);
    setLoading(true);

    // Simuler un appel API avec setTimeout
    setTimeout(() => {
      try {
        // Logique de calcul simulée
        let basePrice: number;

        // Calcul selon le type de service
        switch (service) {
          case "relay":
            basePrice = 4.5 + weightNum * 0.8;
            break;
          case "express":
            basePrice = 8.9 + weightNum * 1.5;
            break;
          case "international":
            basePrice = 12.5 + weightNum * 2.0;
            // Surcoût pour signature internationale
            if (withSignature) {
              basePrice += 3.5;
            }
            break;
          default:
            // Service à domicile standard
            basePrice = 5.9 + weightNum * 1.2;
            // Surcoût pour signature nationale
            if (withSignature) {
              basePrice += 2.0;
            }
            break;
        }

        // Ajustement selon le code postal (simulé)
        const zipNum = parseInt(zipCode.substring(0, 2));
        if (service === "international") {
          // Ajustements pour les destinations internationales basés sur le code postal
          if (zipNum <= 20) {
            // Europe proche (simulation)
            basePrice = basePrice * 1.2;
          } else if (zipNum <= 50) {
            // Europe éloignée (simulation)
            basePrice = basePrice * 1.5;
          } else if (zipNum <= 80) {
            // USA/Canada (simulation)
            basePrice = basePrice * 2.0;
          } else {
            // Reste du monde (simulation)
            basePrice = basePrice * 2.5;
          }
        } else {
          // Pour les livraisons nationales
          if (zipNum >= 97) {
            // DOM-TOM
            basePrice = basePrice * 2.5;
          } else if (zipNum >= 20 && zipNum <= 20) {
            // Corse
            basePrice = basePrice * 1.5;
          }
        }

        // Arrondir et formatter le résultat
        const finalPrice = Math.round(basePrice * 100) / 100;
        setCalculationResult(finalPrice.toFixed(2));

        // Notification de succès
        toast({
          title: "Estimation réussie",
          description: `Tarif estimé : ${finalPrice.toFixed(2)} € TTC${useVolumetricWeight ? ' (basé sur le poids volumétrique)' : ''}`
        });
      } catch (err) {
        setError("Une erreur est survenue lors du calcul. Veuillez réessayer.");
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors du calcul",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <section 
      id="calculator" 
      className="bg-gradient-to-r from-orange-200/50 via-white to-blue-100 
                dark:from-orange-900/30 dark:via-slate-950 dark:to-blue-900/30 py-12 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <CalculatorHeader />

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <CalculatorForm 
                zipCode={zipCode}
                setZipCode={setZipCode}
                weight={weight}
                setWeight={setWeight}
                service={service}
                setService={setService}
                length={length}
                setLength={setLength}
                width={width}
                setWidth={setWidth}
                height={height}
                setHeight={setHeight}
                withSignature={withSignature}
                setWithSignature={setWithSignature}
                loading={loading}
                error={error}
                calculationResult={calculationResult}
                volumetricWeight={volumetricWeight}
                useVolumetricWeight={useVolumetricWeight}
                handleCalculate={handleCalculate}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
