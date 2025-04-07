
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DynamicCalculatorSection() {
  // États pour le formulaire
  const [zipCode, setZipCode] = useState("");
  const [weight, setWeight] = useState("");
  const [service, setService] = useState("");
  
  // États pour la logique de calcul
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [calculationResult, setCalculationResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    const weightNum = parseFloat(weight);
    if (!zipCode || zipCode.length < 5) {
      setError("Veuillez entrer un code postal valide");
      toast({
        title: "Erreur de validation",
        description: "Veuillez entrer un code postal valide",
        variant: "destructive"
      });
      return;
    }
    if (!weightNum || weightNum <= 0 || weightNum > 30) {
      setError("Le poids doit être entre 0.1 et 30 kg");
      toast({
        title: "Erreur de validation",
        description: "Le poids doit être entre 0.1 et 30 kg",
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
            break;
          default:
            // Service à domicile standard
            basePrice = 5.9 + weightNum * 1.2;
            break;
        }
        
        // Ajustement selon le code postal (simulé)
        const zipNum = parseInt(zipCode.substring(0, 2));
        
        if (service === "international") {
          // Ajustements pour les destinations internationales basés sur le code postal
          // Pour la simulation, on va considérer le code postal comme une indication du pays
          if (zipNum <= 20) { // Europe proche (simulation)
            basePrice = basePrice * 1.2;
          } else if (zipNum <= 50) { // Europe éloignée (simulation)
            basePrice = basePrice * 1.5;
          } else if (zipNum <= 80) { // USA/Canada (simulation)
            basePrice = basePrice * 2.0;
          } else { // Reste du monde (simulation)
            basePrice = basePrice * 2.5;
          }
        } else {
          // Pour les livraisons nationales
          if (zipNum >= 97) { // DOM-TOM
            basePrice = basePrice * 2.5;
          } else if (zipNum >= 20 && zipNum <= 20) { // Corse
            basePrice = basePrice * 1.5;
          }
        }
        
        // Arrondir et formatter le résultat
        const finalPrice = Math.round(basePrice * 100) / 100;
        setCalculationResult(finalPrice.toFixed(2));
        
        // Notification de succès
        toast({
          title: "Estimation réussie",
          description: `Tarif estimé : ${finalPrice.toFixed(2)} € TTC`,
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
    <section id="calculator" className="bg-muted/40 dark:bg-slate-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            Estimation Tarif Transport
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Estimez votre coût d'expédition TTC
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Le juste prix pour chaque envoi. Notre calculateur dynamique trouve le meilleur tarif TTC, 
            transporteur anonymisé. Zéro prise de tête, transparence totale.
          </p>
          <p className="text-sm text-muted-foreground">
            Estimation pour un colis au départ de notre entrepôt à Port-sur-Saône.
          </p>
        </motion.div>

        {/* Calculateur */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleCalculate} className="space-y-4">
                {/* Code Postal */}
                <motion.div 
                  className="grid gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Label htmlFor="zip-code">Code Postal de destination</Label>
                  <Input
                    id="zip-code"
                    type="text"
                    placeholder="Ex: 75001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    aria-describedby="zip-code-error"
                    required
                  />
                  {error && error.includes("code postal") && (
                    <p id="zip-code-error" className="text-sm text-destructive">{error}</p>
                  )}
                </motion.div>
                
                {/* Poids */}
                <motion.div 
                  className="grid gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Label htmlFor="weight">Poids (en kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    min="0.1"
                    max="30"
                    placeholder="Ex: 1.5"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    aria-describedby="weight-error"
                    required
                  />
                  <p className="text-xs text-muted-foreground">Maximum 30 kg</p>
                  {error && error.includes("poids") && (
                    <p id="weight-error" className="text-sm text-destructive">{error}</p>
                  )}
                </motion.div>
                
                {/* Type de Service */}
                <motion.div 
                  className="grid gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Label htmlFor="service">Type de Service</Label>
                  <Select 
                    value={service} 
                    onValueChange={setService}
                    required
                  >
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
                  {error && error.includes("service") && (
                    <p id="service-error" className="text-sm text-destructive">{error}</p>
                  )}
                </motion.div>
                
                {/* Bouton Calculer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={loading}
                  >
                    <Calculator className="mr-2 h-4 w-4" />
                    {loading ? "Calcul en cours..." : "Estimer le tarif"}
                  </Button>
                </motion.div>
              </form>
              
              {/* Zone de Résultat */}
              <div className="mt-6 pt-4 border-t">
                {loading && (
                  <p className="text-center text-muted-foreground">Calcul en cours...</p>
                )}
                
                {error && !error.includes("code postal") && !error.includes("poids") && !error.includes("service") && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-destructive/10 text-destructive rounded-md text-center"
                  >
                    {error}
                  </motion.div>
                )}
                
                {!loading && !error && calculationResult && (
                  <motion.div 
                    className="text-center space-y-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                    </p>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
