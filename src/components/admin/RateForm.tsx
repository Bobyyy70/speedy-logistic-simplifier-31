
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
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

const rateFormSchema = z.object({
  carrier_name: z.string().min(1, "Le transporteur est requis"),
  service_code: z.string().min(1, "Le service est requis"),
  destination_zone: z.string().min(1, "La zone de destination est requise"),
  weight_kg_max: z
    .number()
    .positive("Le poids doit être supérieur à 0")
    .or(z.string().regex(/^[0-9]+(\.[0-9]+)?$/).transform(Number)),
  client_volume_tier: z.string().min(1, "Le palier volume client est requis"),
  base_rate_ht: z
    .number()
    .min(0, "Le tarif doit être positif ou nul")
    .or(z.string().regex(/^[0-9]+(\.[0-9]+)?$/).transform(Number)),
  currency: z.string().default("EUR"),
});

type RateFormValues = z.infer<typeof rateFormSchema>;

interface RateFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function RateForm({ onClose, onSuccess }: RateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<RateFormValues>({
    resolver: zodResolver(rateFormSchema),
    defaultValues: {
      carrier_name: "",
      service_code: "",
      destination_zone: "",
      client_volume_tier: "DEFAULT",
      currency: "EUR",
    },
  });

  // Charger la liste des services disponibles
  const { data: services } = useQuery({
    queryKey: ["transportServices"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transport_services')
        .select("*")
        .order("carrier_name,service_name") as { data: TransportService[] | null, error: any };
      
      if (error) throw error;
      return data || [];
    },
  });

  // Filtrer les services en fonction du transporteur sélectionné
  const selectedCarrier = form.watch("carrier_name");
  const filteredServices = services?.filter(
    (service) => !selectedCarrier || service.carrier_name === selectedCarrier
  ) || [];

  // Récupérer les transporteurs uniques pour le select
  const carriers = services
    ? [...new Set(services.map((service) => service.carrier_name))].sort()
    : [];

  // Mettre à jour automatiquement le transporteur quand on sélectionne un service
  useEffect(() => {
    const serviceCode = form.watch("service_code");
    if (serviceCode) {
      const selectedService = services?.find((s) => s.service_code === serviceCode);
      if (selectedService && selectedService.carrier_name !== form.getValues("carrier_name")) {
        form.setValue("carrier_name", selectedService.carrier_name);
      }
    }
  }, [form.watch("service_code"), services]);

  async function onSubmit(data: RateFormValues) {
    try {
      setIsSubmitting(true);

      // Formatage des données numériques
      const rateData = {
        carrier_name: data.carrier_name,
        service_code: data.service_code,
        destination_zone: data.destination_zone,
        weight_kg_max: Number(data.weight_kg_max),
        client_volume_tier: data.client_volume_tier,
        base_rate_ht: Number(data.base_rate_ht),
        currency: data.currency,
      };

      const { error } = await supabase
        .from('carrier_base_rates')
        .insert(rateData as any);

      if (error) {
        if (error.code === '23505') { // Code de violation de contrainte d'unicité
          toast({
            title: "Erreur",
            description: "Ce tarif existe déjà (même transporteur, service, zone, poids et palier).",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        onSuccess();
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du tarif:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout du tarif.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Ajouter un tarif de transport</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="carrier_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transporteur</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un transporteur" />
                      </SelectTrigger>
                      <SelectContent>
                        {carriers.map((carrier) => (
                          <SelectItem key={carrier} value={carrier}>
                            {carrier}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un service" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredServices.map((service) => (
                          <SelectItem key={service.service_code} value={service.service_code}>
                            {service.service_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="destination_zone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zone de destination</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: FRANCE_METRO, EU_ZONE_1, ES, IT" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight_kg_max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Poids max (kg)</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="number" 
                      step="0.01" 
                      placeholder="Ex: 0.5, 1, 3, 30"
                      onChange={(e) => field.onChange(e.target.value)} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="client_volume_tier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palier volume client</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner un palier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DEFAULT">Par défaut</SelectItem>
                        <SelectItem value="T1">T1 (0-99)</SelectItem>
                        <SelectItem value="T2">T2 (100-499)</SelectItem>
                        <SelectItem value="T3">T3 (500-999)</SelectItem>
                        <SelectItem value="T4">T4 (1000-4999)</SelectItem>
                        <SelectItem value="T5">T5 (5000+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="base_rate_ht"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarif HT</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="number" 
                      step="0.01"
                      placeholder="Ex: 12.50" 
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Devise</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une devise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="USD">USD</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Annuler
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "En cours..." : "Ajouter"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
