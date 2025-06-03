
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
import { ServiceForm } from "./ServiceForm";
import { useToast } from "@/hooks/use-toast";

// Définir les types manuellement
type TransportService = {
  id: string;
  carrier_name: string;
  service_code: string;
  service_name: string;
  is_active: boolean;
  created_at?: string;
}

export function TransportServicesAdmin() {
  const [isAddingService, setIsAddingService] = useState(false);
  const { toast } = useToast();

  const { data: services, isLoading, error, refetch } = useQuery({
    queryKey: ["transportServices"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transport_services')
        .select("*")
        .order("service_name") as { data: TransportService[] | null, error: any };
      
      if (error) {
        console.error("Error fetching transport services:", error);
        throw error;
      }
      return data || [];
    },
  });

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 mb-4">
          Erreur lors du chargement des services de transport.
        </p>
        <p className="text-sm text-gray-600">
          Assurez-vous d'être connecté avec les bonnes permissions.
        </p>
      </div>
    );
  }

  if (isLoading) return <div>Chargement des services...</div>;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Services de Transport</h2>
        <Button onClick={() => setIsAddingService(true)}>
          <Plus className="mr-2 h-4 w-4" /> Ajouter un service
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transporteur</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Nom du Service</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services?.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.carrier_name}</TableCell>
              <TableCell>{service.service_code}</TableCell>
              <TableCell>{service.service_name}</TableCell>
              <TableCell>
                {service.is_active ? "Actif" : "Inactif"}
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

      {isAddingService && (
        <ServiceForm 
          onClose={() => setIsAddingService(false)}
          onSuccess={() => {
            setIsAddingService(false);
            refetch();
            toast({
              title: "Service ajouté",
              description: "Le service de transport a été ajouté avec succès.",
            });
          }}
        />
      )}
    </div>
  );
}
