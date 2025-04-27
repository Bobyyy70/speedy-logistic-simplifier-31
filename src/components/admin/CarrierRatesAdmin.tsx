
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { RateForm } from "./RateForm";
import { useToast } from "@/hooks/use-toast";

// Définir les types manuellement puisque nous ne pouvons pas modifier les types générés
type CarrierBaseRate = {
  id: string;
  carrier_name: string;
  service_code: string;
  destination_zone: string;
  weight_kg_max: number;
  client_volume_tier: string;
  base_rate_ht: number;
  currency: string;
  created_at?: string;
}

type TransportService = {
  id: string;
  carrier_name: string;
  service_code: string;
  service_name: string;
  is_active: boolean;
  created_at?: string;
}

type RateWithService = CarrierBaseRate & {
  transport_services?: TransportService;
}

export function CarrierRatesAdmin() {
  const [isAddingRate, setIsAddingRate] = useState(false);
  const { toast } = useToast();

  const { data: rates, isLoading, refetch } = useQuery({
    queryKey: ["carrierRates"],
    queryFn: async () => {
      // Utiliser 'from' avec un type générique pour éviter les erreurs TypeScript
      const { data: ratesData, error: ratesError } = await supabase
        .from('carrier_base_rates')
        .select("*")
        .order("carrier_name") as { data: CarrierBaseRate[] | null, error: any };
      
      if (ratesError) throw ratesError;
      
      // Même approche pour les services
      const { data: servicesData, error: servicesError } = await supabase
        .from('transport_services')
        .select("*") as { data: TransportService[] | null, error: any };
        
      if (servicesError) throw servicesError;
      
      // Map services by their service_code for easy lookup
      const servicesMap = (servicesData || []).reduce<Record<string, TransportService>>((acc, service) => {
        acc[service.service_code] = service;
        return acc;
      }, {});
      
      // Combine the data
      return (ratesData || []).map(rate => ({
        ...rate,
        transport_services: servicesMap[rate.service_code] || { service_name: "Service inconnu", carrier_name: rate.carrier_name }
      })) as RateWithService[];
    },
  });

  if (isLoading) return <div>Chargement des tarifs...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Tarifs de Base</h2>
        <Button onClick={() => setIsAddingRate(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un tarif
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transporteur</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Zone</TableHead>
            <TableHead>Poids Max (kg)</TableHead>
            <TableHead>Palier Volume</TableHead>
            <TableHead>Tarif HT</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates?.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell>{rate.carrier_name}</TableCell>
              <TableCell>{rate.transport_services?.service_name || "Service inconnu"}</TableCell>
              <TableCell>{rate.destination_zone}</TableCell>
              <TableCell>{rate.weight_kg_max}</TableCell>
              <TableCell>{rate.client_volume_tier}</TableCell>
              <TableCell>
                {rate.base_rate_ht} {rate.currency}
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Modifier
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isAddingRate && (
        <RateForm 
          onClose={() => setIsAddingRate(false)}
          onSuccess={() => {
            setIsAddingRate(false);
            refetch();
            toast({
              title: "Tarif ajouté",
              description: "Le tarif a été ajouté avec succès.",
            });
          }}
        />
      )}
    </div>
  );
}
