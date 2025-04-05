
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
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
      return;
    }
    if (!weightNum || weightNum <= 0 || weightNum > 30) {
      setError("Le poids doit être entre 0.1 et 30 kg");
      return;
    }
    if (!service) {
      setError("Veuillez sélectionner un type de service");
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
        if (service === "relay") {
          basePrice = 4.5 + weightNum * 0.8;
        } else {
          // Service à domicile un peu plus cher
          basePrice = 5.9 + weightNum * 1.2;
        }
        
        // Ajustement selon le code postal (simulé)
        // Zones plus éloignées (DOM-TOM et Corse) plus chères
        const zipNum = parseInt(zipCode.substring(0, 2));
        if (zipNum >= 97) { // DOM-TOM
          basePrice = basePrice * 2.5;
        } else if (zipNum >= 20 && zipNum <= 20) { // Corse
          basePrice = basePrice * 1.5;
        }
        
        // Arrondir et formatter le résultat
        const finalPrice = Math.round(basePrice * 100) / 100;
        setCalculationResult(finalPrice.toFixed(2));
      } catch (err) {
        setError("Une erreur est survenue lors du calcul. Veuillez réessayer.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <section id="calculator" className="bg-muted/40 dark:bg-slate-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            Estimation Tarif Transport
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Estimez votre coût d'expédition TTC
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Le juste prix pour chaque envoi. Notre calculateur dynamique trouve le meilleur tarif TTC, 
            transporteur anonymisé. Zéro prise de tête, transparence totale.
          </p>
          <p className="text-sm text-muted-foreground">
            Estimation pour un colis au départ de notre entrepôt à Port-sur-Saône.
          </p>
        </div>

        {/* Calculateur */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Code Postal */}
              <div className="grid gap-2">
                <Label htmlFor="zip-code">Code Postal de destination</Label>
                <Input
                  id="zip-code"
                  type="text"
                  placeholder="Ex: 75001"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
              
              {/* Poids */}
              <div className="grid gap-2">
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
                  required
                />
                <p className="text-xs text-muted-foreground">Maximum 30 kg</p>
              </div>
              
              {/* Type de Service */}
              <div className="grid gap-2">
                <Label htmlFor="service">Type de Service</Label>
                <Select 
                  value={service} 
                  onValueChange={setService}
                  required
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relay">Point Relais</SelectItem>
                    <SelectItem value="home">Domicile Standard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Bouton Calculer */}
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading}
              >
                <Calculator className="mr-2 h-4 w-4" />
                {loading ? "Calcul en cours..." : "Estimer le tarif"}
              </Button>
            </form>
            
            {/* Zone de Résultat */}
            <div className="mt-6 pt-4 border-t">
              {loading && (
                <p className="text-center text-muted-foreground">Calcul en cours...</p>
              )}
              
              {error && (
                <div className="p-3 bg-destructive/10 text-destructive rounded-md text-center">
                  {error}
                </div>
              )}
              
              {!loading && !error && calculationResult && (
                <div className="text-center space-y-2">
                  <div className="font-bold text-2xl">
                    Tarif estimé : {calculationResult} € TTC
                  </div>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    *Tarif indicatif TTC, basé sur les informations fournies. Le tarif final dépendra des dimensions exactes 
                    et des éventuelles surcharges non incluses dans cette simulation.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
