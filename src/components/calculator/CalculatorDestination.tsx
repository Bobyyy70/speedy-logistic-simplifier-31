
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface CalculatorDestinationProps {
  zipCode: string;
  setZipCode: (value: string) => void;
  error: string | null;
}

export function CalculatorDestination({ zipCode, setZipCode, error }: CalculatorDestinationProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="zip-code">Code Postal de destination</Label>
      <Input 
        id="zip-code" 
        type="text" 
        placeholder="Ex: 75001" 
        value={zipCode} 
        onChange={e => setZipCode(e.target.value)} 
        aria-describedby="zip-code-error" 
        required 
      />
      {error && error.includes("code postal") && (
        <p id="zip-code-error" className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
