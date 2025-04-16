import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Package, Info } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    const volumeWeight = l * w * h / 5000;
    return volumeWeight;
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
  return <section 
    id="calculator" 
    className="py-12 md:py-24 lg:py-32 
               bg-gradient-to-br 
               from-green-50 
               via-blue-100/50 
               to-teal-100/30 
               dark:from-green-950/40 
               dark:via-blue-950/30 
               dark:to-teal-900/50"
  >
    <div className="container mx-auto px-4 md:px-6">
      {/* Introduction */}
      <motion.div className="flex flex-col items-center justify-center space-y-4 text-center mb-12" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
          Estimation Tarif Transport
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Estimez votre coût d'expédition TTC
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
          Le juste prix pour chaque envoi. Notre calculateur dynamique sélectionne automatiquement le transporteur le plus économique, avec tarifs TTC variables selon la destination et les surcharges en vigueur.
        </p>
        <p className="text-sm text-muted-foreground">
          Estimation pour un colis au départ de notre entrepôt à Port-sur-Saône.
        </p>
      </motion.div>

      {/* Calculateur */}
      <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Section poids et dimensions dans la même zone */}
              <div className="space-y-4 border rounded-md p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Poids et dimensions du colis</h3>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </div>
                
                {/* Poids */}
                <div className="grid gap-2">
                  <Label htmlFor="weight">Poids (en kg)</Label>
                  <Input id="weight" type="number" step="0.1" min="0.1" max="30" placeholder="Ex: 1.5" value={weight} onChange={e => setWeight(e.target.value)} aria-describedby="weight-error" required />
                  <p className="text-xs text-muted-foreground">Maximum 30 kg</p>
                  {error && error.includes("poids") && <p id="weight-error" className="text-sm text-destructive">{error}</p>}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Dimensions (pour calcul du poids volumétrique)</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Le poids volumétrique est calculé selon la formule (L × l × h) ÷ 5000.
                            Si celui-ci est supérieur au poids réel, il sera utilisé pour le calcul du tarif.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {/* Longueur */}
                    <div className="space-y-2">
                      <Label htmlFor="length">Longueur (cm)</Label>
                      <Input id="length" type="number" min="1" step="0.1" placeholder="Ex: 30" value={length} onChange={e => setLength(e.target.value)} />
                    </div>
                    
                    {/* Largeur */}
                    <div className="space-y-2">
                      <Label htmlFor="width">Largeur (cm)</Label>
                      <Input id="width" type="number" min="1" step="0.1" placeholder="Ex: 20" value={width} onChange={e => setWidth(e.target.value)} />
                    </div>
                    
                    {/* Hauteur */}
                    <div className="space-y-2">
                      <Label htmlFor="height">Hauteur (cm)</Label>
                      <Input id="height" type="number" min="1" step="0.1" placeholder="Ex: 15" value={height} onChange={e => setHeight(e.target.value)} />
                    </div>
                  </div>
                  
                  {volumetricWeight !== null && <p className="text-sm text-muted-foreground mt-2">
                      Poids volumétrique calculé: <span className="font-medium">{volumetricWeight.toFixed(2)} kg</span>
                      {useVolumetricWeight && <span className="ml-2 text-amber-500 dark:text-amber-400 font-medium">
                          (Ce poids sera utilisé car supérieur au poids réel)
                        </span>}
                    </p>}
                </div>
              </div>
              
              {/* Code Postal */}
              <div className="grid gap-2">
                <Label htmlFor="zip-code">Code Postal de destination</Label>
                <Input id="zip-code" type="text" placeholder="Ex: 75001" value={zipCode} onChange={e => setZipCode(e.target.value)} aria-describedby="zip-code-error" required />
                {error && error.includes("code postal") && <p id="zip-code-error" className="text-sm text-destructive">{error}</p>}
              </div>
              
              {/* Type de Service */}
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="service">Type de Service</Label>
                  <Select value={service} onValueChange={setService} required>
                    <SelectTrigger id="service" aria-describedby="service-error">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relay">Point Relais</SelectItem>
                      <SelectItem value="home">Domicile Standard</SelectItem>
                      <SelectItem value="express">Livraison Express</SelectItem>
                      <SelectItem value="international">Livraison Internationale</SelectItem>
                    </SelectContent>
                  </Select>
                  {error && error.includes("service") && <p id="service-error" className="text-sm text-destructive">{error}</p>}
                </div>
                
                {/* Option de signature conditionnelle */}
                {(service === "home" || service === "international") && <div className="flex items-center space-x-2">
                    <Checkbox id="signature" checked={withSignature} onCheckedChange={checked => setWithSignature(checked === true)} />
                    <Label htmlFor="signature" className="text-sm font-normal cursor-pointer">
                      Avec signature à la livraison {service === "international" ? "(+3.50€)" : "(+2.00€)"}
                    </Label>
                  </div>}
              </div>
              
              {/* Bouton Calculer */}
              <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.3,
                delay: 0.4
              }} whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                <Button type="submit" className="w-full" disabled={loading}>
                  <Calculator className="mr-2 h-4 w-4" />
                  {loading ? "Calcul en cours..." : "Estimer le tarif"}
                </Button>
              </motion.div>
            </form>
            
            {/* Zone de Résultat */}
            <div className="mt-6 pt-4 border-t">
              {loading && <p className="text-center text-muted-foreground">Calcul en cours...</p>}
              
              {error && !error.includes("code postal") && !error.includes("poids") && !error.includes("dimensions") && !error.includes("service") && <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="p-3 bg-destructive/10 text-destructive rounded-md text-center">
                {error}
              </motion.div>}
              
              {!loading && !error && calculationResult && <motion.div className="text-center space-y-2" initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 120
              }}>
                <div className="font-bold text-2xl">
                  Tarif estimé : {calculationResult} € TTC
                </div>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  *Tarif indicatif TTC, basé sur les informations fournies. Le tarif final dépendra des dimensions exactes 
                  et des éventuelles surcharges non incluses dans cette simulation.
                  {useVolumetricWeight && volumetricWeight && <span className="block mt-1">
                      Calcul effectué sur le poids volumétrique de {volumetricWeight.toFixed(2)} kg.
                    </span>}
                  {withSignature && <span className="block mt-1">
                      Incluant le supplément pour livraison avec signature.
                    </span>}
                </p>
              </motion.div>}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>;
}
