
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

export function CarrierRatesAdmin() {
  const [isAddingRate, setIsAddingRate] = useState(false);
  const { toast } = useToast();

  const { data: rates, isLoading, refetch } = useQuery({
    queryKey: ["carrierRates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("carrier_base_rates")
        .select(`
          *,
          transport_services (
            service_name,
            carrier_name
          )
        `)
        .order("carrier_name");
      
      if (error) throw error;
      return data;
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
              <TableCell>{rate.transport_services?.service_name}</TableCell>
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
