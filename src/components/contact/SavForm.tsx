import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { 
  Loader2, Send, ArrowLeft, ArrowRight, User, Mail, Phone, 
  FileText, Calendar, Package, AlertTriangle, Clock, MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";

// Schéma de validation simplifié
const savFormSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez entrer une adresse email valide."),
  orderNumber: z.string().min(1, "Le numéro de commande est requis."),
  phone: z.string().optional(),
  purchaseDate: z.string().min(1, "La date d'achat est requise."),
  productReference: z.string().min(1, "La référence produit est requise."),
  issueCategory: z.string().min(1, "Veuillez sélectionner une catégorie."),
  description: z.string().min(10, "Veuillez décrire le problème (minimum 10 caractères)."),
  preferredContact: z.enum(["email", "phone"], {
    required_error: "Veuillez sélectionner votre méthode de contact préférée.",
  }),
  bestTimeToContact: z.string().optional(),
});

type SavFormValues = z.infer<typeof savFormSchema>;

const issueCategories = [
  { value: "defective-product", label: "Produit défectueux" },
  { value: "missing-parts", label: "Pièces manquantes" },
  { value: "shipping-damage", label: "Dommages pendant le transport" },
  { value: "return-request", label: "Demande de retour" },
  { value: "other", label: "Autre" },
];

const contactTimes = [
  { value: "morning", label: "Matin (9h-12h)" },
  { value: "afternoon", label: "Après-midi (14h-17h)" },
  { value: "evening", label: "Fin de journée (17h-19h)" },
];

export const SavForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;
  
  const form = useForm<SavFormValues>({
    resolver: zodResolver(savFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      orderNumber: "",
      phone: "",
      purchaseDate: "",
      productReference: "",
      issueCategory: "",
      description: "",
      preferredContact: "email",
      bestTimeToContact: "",
    },
    mode: "onChange",
  });
  
  const steps = [
    {
      title: "Vos informations",
      fields: ["fullName", "email", "orderNumber", "phone"] as const,
    },
    {
      title: "Détails de la commande",
      fields: ["purchaseDate", "productReference", "issueCategory"] as const,
    },
    {
      title: "Description du problème",
      fields: ["description"] as const,
    },
    {
      title: "Préférences de contact",
      fields: ["preferredContact", "bestTimeToContact"] as const,
    },
  ];

  const validateCurrentStep = async () => {
    const currentFields = steps[currentStep].fields;
    const isValid = await form.trigger(currentFields);
    
    // Pour l'étape 3 (préférences de contact), on vérifie si le téléphone est requis
    if (currentStep === 3) {
      const preferredContact = form.getValues("preferredContact");
      const phone = form.getValues("phone");
      
      if (preferredContact === "phone" && !phone) {
        form.setError("phone", {
          type: "manual",
          message: "Le numéro de téléphone est requis si vous choisissez d'être contacté par téléphone."
        });
        return false;
      }
    }
    
    return isValid;
  };

  const goToNextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: SavFormValues) => {
    console.log("📋 Début de soumission du formulaire SAV", data);
    setIsSubmitting(true);
    
    try {
      console.log("🔄 Appel de la fonction Supabase SAV...");
      
      const { data: result, error } = await supabase.functions.invoke('secure-sav-form', {
        body: data
      });

      console.log("📨 Réponse de la fonction SAV:", { result, error });

      if (error) {
        console.error("❌ Erreur de la fonction SAV:", error);
        throw error;
      }

      console.log("✅ Formulaire SAV soumis avec succès");
      
      toast({
        title: "Demande SAV envoyée !",
        description: "Un conseiller vous contactera dans les plus brefs délais.",
      });
      
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("💥 Erreur lors de la soumission SAV:", error);
      
      toast({
        title: "Erreur",
        description: "Un problème est survenu. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Votre nom complet" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="votre@email.com" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="orderNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de commande *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Package className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Ex: CMD-123456" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone (facultatif)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Votre numéro de téléphone" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="purchaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date d'achat *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        className="pl-10" 
                        type="date" 
                        placeholder="Sélectionnez une date"
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productReference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Référence produit *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Package className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="Ex: REF-123456" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="issueCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie du problème *</FormLabel>
                  <div className="relative">
                    <AlertTriangle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {issueCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description détaillée du problème *</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Textarea 
                        className="min-h-[150px] pl-10 pt-8" 
                        placeholder="Décrivez votre problème en détail..."
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="preferredContact"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Méthode de contact préférée *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <FormLabel htmlFor="email" className="font-normal">
                          Email
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <FormLabel htmlFor="phone" className="font-normal">
                          Téléphone
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.watch("preferredContact") === "phone" && (
              <FormField
                control={form.control}
                name="bestTimeToContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meilleur moment pour vous contacter</FormLabel>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Sélectionnez un créneau horaire" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {contactTimes.map((time) => (
                            <SelectItem key={time.value} value={time.value}>
                              {time.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="font-medium mb-2">Récapitulatif de votre demande SAV</h3>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Nom:</span> {form.getValues("fullName")}</p>
                <p><span className="font-medium">Email:</span> {form.getValues("email")}</p>
                <p><span className="font-medium">Commande:</span> {form.getValues("orderNumber")}</p>
                <p><span className="font-medium">Produit:</span> {form.getValues("productReference")}</p>
                <p>
                  <span className="font-medium">Problème:</span> 
                  {" " + (issueCategories.find(cat => cat.value === form.getValues("issueCategory"))?.label || form.getValues("issueCategory"))}
                </p>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="bg-card rounded-lg p-6 shadow-md"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-xl font-semibold mb-2">Service Après-Vente</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande SAV</p>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`text-xs font-medium ${currentStep >= index 
                ? "text-primary" 
                : "text-muted-foreground"}`}
            >
              Étape {index + 1}
            </div>
          ))}
        </div>
        <Progress value={(currentStep + 1) / totalSteps * 100} className="h-2" />
        <p className="text-sm text-center mt-2 font-medium">{steps[currentStep].title}</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            <Button
              type="button"
              variant="outline"
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
            
            {currentStep < totalSteps - 1 ? (
              <Button type="button" onClick={goToNextStep}>
                Suivant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer ma demande
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default SavForm;
