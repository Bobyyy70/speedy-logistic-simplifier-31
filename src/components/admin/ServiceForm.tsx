
import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";

const serviceFormSchema = z.object({
  service_code: z.string().min(1, "Le code est requis"),
  service_name: z.string().min(1, "Le nom est requis"),
  carrier_name: z.string().min(1, "Le nom du transporteur est requis"),
  is_active: z.boolean().default(true),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

interface ServiceFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export function ServiceForm({ onClose, onSuccess }: ServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceFormSchema),
    defaultValues: {
      service_code: "",
      service_name: "",
      carrier_name: "",
      is_active: true,
    },
  });

  async function onSubmit(data: ServiceFormValues) {
    try {
      setIsSubmitting(true);
      
      // Création d'un objet avec les champs requis garantis comme non-optionnels
      const serviceData = {
        service_code: data.service_code,
        service_name: data.service_name,
        carrier_name: data.carrier_name,
        is_active: data.is_active,
      };
      
      const { error } = await supabase
        .from("transport_services")
        .insert(serviceData);
      
      if (error) throw error;
      onSuccess();
    } catch (error) {
      console.error("Erreur lors de l'ajout du service:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un service de transport</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="carrier_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du transporteur</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: Colissimo" />
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
                  <FormLabel>Code du service</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: COLISSIMO_RELAIS" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom du service</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Ex: Colissimo Point Relais" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="!mt-0">Service actif</FormLabel>
                </FormItem>
              )}
            />

            <div className="flex justify-end space-x-2">
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
