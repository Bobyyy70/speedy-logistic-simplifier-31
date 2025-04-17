
import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CalculatorServiceTypeProps {
  service: string;
  setService: (value: string) => void;
  withSignature: boolean;
  setWithSignature: (value: boolean) => void;
  error: string | null;
}

export function CalculatorServiceType({ 
  service, 
  setService, 
  withSignature, 
  setWithSignature, 
  error 
}: CalculatorServiceTypeProps) {
  return (
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
        {error && error.includes("service") && (
          <p id="service-error" className="text-sm text-destructive">{error}</p>
        )}
      </div>
      
      {/* Option de signature conditionnelle */}
      {(service === "home" || service === "international") && (
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="signature" 
            checked={withSignature} 
            onCheckedChange={checked => setWithSignature(checked === true)} 
          />
          <Label htmlFor="signature" className="text-sm font-normal cursor-pointer">
            Avec signature à la livraison {service === "international" ? "(+3.50€)" : "(+2.00€)"}
          </Label>
        </div>
      )}
    </div>
  );
}
