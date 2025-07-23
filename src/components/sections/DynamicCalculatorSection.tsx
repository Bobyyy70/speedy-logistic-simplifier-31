import React, { useCallback } from "react";
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
import { useCalculatorState } from "@/hooks/use-calculator-state";
import { useDebounce } from "@/hooks/use-debounce";

export function DynamicCalculatorSection() {
  const {
    state,
    volumetricWeight,
    useVolumetricWeight,
    updateField,
    calculatePrice,
    setError
  } = useCalculatorState();

  // Debounce form validation for better UX
  const debouncedZipCode = useDebounce(state.zipCode, 300);
  const debouncedWeight = useDebounce(state.weight, 300);

  const handleCalculate = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Optimized validation
    if (!state.zipCode || state.zipCode.length < 5) {
      const error = "Veuillez entrer un code postal valide";
      setError(error);
      toast({
        title: "Erreur de validation",
        description: error,
        variant: "destructive"
      });
      return;
    }

    if (!state.service) {
      const error = "Veuillez sélectionner un type de service";
      setError(error);
      toast({
        title: "Erreur de validation",
        description: error,
        variant: "destructive"
      });
      return;
    }

    const weightNum = parseFloat(state.weight);
    if (isNaN(weightNum) || weightNum <= 0 || weightNum > 30) {
      const error = "Le poids doit être entre 0.1 et 30 kg";
      setError(error);
      toast({
        title: "Erreur de validation",
        description: error,
        variant: "destructive"
      });
      return;
    }

    await calculatePrice();
    
    if (state.calculationResult) {
      toast({
        title: "Estimation réussie",
        description: `Tarif estimé : ${state.calculationResult} € TTC${useVolumetricWeight ? ' (basé sur le poids volumétrique)' : ''}`
      });
    }
  }, [state.zipCode, state.service, state.weight, state.calculationResult, calculatePrice, setError, useVolumetricWeight]);

  // Memoized field update handlers
  const handleZipCodeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('zipCode', e.target.value);
  }, [updateField]);

  const handleWeightChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('weight', e.target.value);
  }, [updateField]);

  const handleServiceChange = useCallback((value: string) => {
    updateField('service', value);
  }, [updateField]);

  const handleLengthChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('length', e.target.value);
  }, [updateField]);

  const handleWidthChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('width', e.target.value);
  }, [updateField]);

  const handleHeightChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('height', e.target.value);
  }, [updateField]);

  const handleSignatureChange = useCallback((checked: boolean) => {
    updateField('withSignature', checked);
  }, [updateField]);

  return <section id="calculator" className="bg-gradient-to-r from-orange-200/50 via-white to-blue-100 
                    dark:from-orange-900/30 dark:via-slate-950 dark:to-blue-900/30 py-12 md:py-24 lg:py-32">
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
                  <div className="grid gap-2 py-0">
                    <Label htmlFor="weight">Poids (en kg)</Label>
                    <Input id="weight" type="number" step="0.1" min="0.1" max="30" placeholder="Ex: 1.5" value={state.weight} onChange={handleWeightChange} aria-describedby="weight-error" required className="py-0" />
                    <p className="text-xs text-muted-foreground">Maximum 30 kg</p>
                    {state.error && state.error.includes("poids") && <p id="weight-error" className="text-sm text-destructive">{state.error}</p>}
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
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Longueur */}
                      <div className="space-y-2">
                        <Label htmlFor="length">Longueur (cm)</Label>
                        <Input 
                          id="length" 
                          type="number" 
                          min="1" 
                          step="0.1" 
                          placeholder="Ex: 30" 
                          value={state.length} 
                          onChange={handleLengthChange}
                          className="text-overflow-safe"
                        />
                      </div>
                      
                      {/* Largeur */}
                      <div className="space-y-2">
                        <Label htmlFor="width">Largeur (cm)</Label>
                        <Input 
                          id="width" 
                          type="number" 
                          min="1" 
                          step="0.1" 
                          placeholder="Ex: 20" 
                          value={state.width} 
                          onChange={handleWidthChange}
                          className="text-overflow-safe"
                        />
                      </div>
                      
                      {/* Hauteur */}
                      <div className="space-y-2">
                        <Label htmlFor="height">Hauteur (cm)</Label>
                        <Input 
                          id="height" 
                          type="number" 
                          min="1" 
                          step="0.1" 
                          placeholder="Ex: 15" 
                          value={state.height} 
                          onChange={handleHeightChange}
                          className="text-overflow-safe"
                        />
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
                  <Input id="zip-code" type="text" placeholder="Ex: 75001" value={state.zipCode} onChange={handleZipCodeChange} aria-describedby="zip-code-error" required />
                  {state.error && state.error.includes("code postal") && <p id="zip-code-error" className="text-sm text-destructive">{state.error}</p>}
                </div>
                
                {/* Type de Service */}
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="service">Type de Service</Label>
                    <Select value={state.service} onValueChange={handleServiceChange} required>
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
                    {state.error && state.error.includes("service") && <p id="service-error" className="text-sm text-destructive">{state.error}</p>}
                  </div>
                  
                  {/* Option de signature conditionnelle */}
                  {(state.service === "home" || state.service === "international") && <div className="flex items-center space-x-2">
                      <Checkbox id="signature" checked={state.withSignature} onCheckedChange={handleSignatureChange} />
                      <Label htmlFor="signature" className="text-sm font-normal cursor-pointer">
                        Avec signature à la livraison {state.service === "international" ? "(+3.50€)" : "(+2.00€)"}
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
                  <Button type="submit" className="w-full" disabled={state.loading}>
                    <Calculator className="mr-2 h-4 w-4" />
                    {state.loading ? "Calcul en cours..." : "Estimer le tarif"}
                  </Button>
                </motion.div>
              </form>
              
              {/* Zone de Résultat */}
              <div className="mt-6 pt-4 border-t">
                {state.loading && <p className="text-center text-muted-foreground">Calcul en cours...</p>}
                
                {state.error && !state.error.includes("code postal") && !state.error.includes("poids") && !state.error.includes("dimensions") && !state.error.includes("service") && <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} className="p-3 bg-destructive/10 text-destructive rounded-md text-center">
                    {state.error}
                  </motion.div>}
                
                {!state.loading && !state.error && state.calculationResult && <motion.div className="text-center space-y-2" initial={{
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
                      Tarif estimé : {state.calculationResult} € TTC
                    </div>
                    <p className="text-xs text-muted-foreground max-w-md mx-auto">
                      *Tarif indicatif TTC, basé sur les informations fournies. Le tarif final dépendra des dimensions exactes 
                      et des éventuelles surcharges non incluses dans cette simulation.
                      {useVolumetricWeight && volumetricWeight && <span className="block mt-1">
                          Calcul effectué sur le poids volumétrique de {volumetricWeight.toFixed(2)} kg.
                        </span>}
                      {state.withSignature && <span className="block mt-1">
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
