
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Package, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CalculatorDimensionsProps {
  weight: string;
  setWeight: (value: string) => void;
  length: string;
  setLength: (value: string) => void;
  width: string;
  setWidth: (value: string) => void;
  height: string;
  setHeight: (value: string) => void;
  volumetricWeight: number | null;
  useVolumetricWeight: boolean;
  error: string | null;
}

export function CalculatorDimensions({
  weight,
  setWeight,
  length,
  setLength,
  width,
  setWidth,
  height,
  setHeight,
  volumetricWeight,
  useVolumetricWeight,
  error
}: CalculatorDimensionsProps) {
  return (
    <div className="space-y-4 border rounded-md p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Poids et dimensions du colis</h3>
        <Package className="h-4 w-4 text-muted-foreground" />
      </div>
      
      {/* Poids */}
      <div className="grid gap-2 py-0">
        <Label htmlFor="weight">Poids (en kg)</Label>
        <Input 
          id="weight" 
          type="number" 
          step="0.1" 
          min="0.1" 
          max="30" 
          placeholder="Ex: 1.5" 
          value={weight} 
          onChange={e => setWeight(e.target.value)} 
          aria-describedby="weight-error" 
          required 
          className="py-0" 
        />
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
            <Input 
              id="length" 
              type="number" 
              min="1" 
              step="0.1" 
              placeholder="Ex: 30" 
              value={length} 
              onChange={e => setLength(e.target.value)} 
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
              value={width} 
              onChange={e => setWidth(e.target.value)} 
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
              value={height} 
              onChange={e => setHeight(e.target.value)} 
            />
          </div>
        </div>
        
        {volumetricWeight !== null && (
          <p className="text-sm text-muted-foreground mt-2">
            Poids volumétrique calculé: <span className="font-medium">{volumetricWeight.toFixed(2)} kg</span>
            {useVolumetricWeight && (
              <span className="ml-2 text-amber-500 dark:text-amber-400 font-medium">
                (Ce poids sera utilisé car supérieur au poids réel)
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
