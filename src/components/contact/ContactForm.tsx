
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send, ArrowLeft, ArrowRight, User, Mail, Phone, Building, MapPin, Globe, List, DollarSign, FileText, Database } from "lucide-react";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";

// Définition du schéma de validation avec Zod
const contactFormSchema = z.object({
  firstName: z.string()
    .min(2, "Le prénom doit contenir au moins 2 caractères.")
    .max(50, "Le prénom ne peut pas dépasser 50 caractères.")
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le prénom ne peut contenir que des lettres, espaces, tirets et apostrophes."),
  lastName: z.string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(50, "Le nom ne peut pas dépasser 50 caractères.")
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le nom ne peut contenir que des lettres, espaces, tirets et apostrophes."),
  email: z.string()
    .email("Veuillez entrer une adresse email valide.")
    .max(100, "L'email ne peut pas dépasser 100 caractères."),
  phone: z.string()
    .min(10, "Le numéro de téléphone doit contenir au moins 10 caractères.")
    .max(15, "Le numéro de téléphone ne peut pas dépasser 15 caractères.")
    .regex(/^[\d\s+()-]+$/, "Format de téléphone invalide."),
  companyName: z.string()
    .min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères.")
    .max(100, "Le nom de l'entreprise ne peut pas dépasser 100 caractères."),
  companyStatus: z.enum(["creation", "active"], {
    required_error: "Veuillez sélectionner l'état de votre entreprise."
  }),
  city: z.string()
    .min(2, "Veuillez indiquer votre ville.")
    .max(50, "Le nom de la ville ne peut pas dépasser 50 caractères.")
    .regex(/^[a-zA-ZÀ-ÿ\s-']+$/, "Le nom de la ville ne peut contenir que des lettres, espaces, tirets et apostrophes."),
  postalCode: z.string()
    .min(5, "Le code postal doit contenir au moins 5 caractères.")
    .max(10, "Le code postal ne peut pas dépasser 10 caractères.")
    .regex(/^[\d\s-]+$/, "Le code postal ne peut contenir que des chiffres, espaces et tirets."),
  website: z.string()
    .url("Veuillez entrer une URL valide.")
    .max(200, "L'URL ne peut pas dépasser 200 caractères.")
    .optional()
    .or(z.literal('')),
  leadSource: z.string({
    required_error: "Veuillez indiquer comment vous nous avez connu."
  }),
  averageBasket: z.string()
    .min(1, "Veuillez indiquer le montant moyen du panier.")
    .regex(/^\d+$/, "Le montant doit être un nombre entier."),
  productType: z.string({
    required_error: "Veuillez sélectionner un type d'articles."
  }),
  annualOrders: z.string()
    .min(1, "Veuillez indiquer le nombre de commandes par an.")
    .regex(/^\d+$/, "Le nombre de commandes doit être un nombre entier."),
  stockReferences: z.string()
    .min(1, "Veuillez indiquer le nombre de références à stocker.")
    .regex(/^\d+$/, "Le nombre de références doit être un nombre entier."),
  message: z.string()
    .max(1000, "Le message ne peut pas dépasser 1000 caractères.")
    .optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Sources pour le menu déroulant "Connu via"
const leadSources = [{
  value: "social-media",
  label: "Réseaux sociaux"
}, {
  value: "search-engine",
  label: "Moteur de recherche"
}, {
  value: "recommendation",
  label: "Recommandation"
}, {
  value: "other",
  label: "Autre"
}];

const productTypes = [{
  value: "cosmetics",
  label: "Cosmétiques"
}, {
  value: "fashion",
  label: "Mode et accessoires"
}, {
  value: "food-supplements",
  label: "Compléments alimentaires"
}, {
  value: "electronics",
  label: "Électronique"
}, {
  value: "home-decor",
  label: "Décoration"
}, {
  value: "adult-products",
  label: "Produits pour adultes"
}, {
  value: "other",
  label: "Autre"
}];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      companyName: "",
      companyStatus: "active",
      city: "",
      postalCode: "",
      website: "",
      leadSource: "",
      averageBasket: "",
      productType: "",
      annualOrders: "",
      stockReferences: "",
      message: ""
    },
    mode: "onBlur"
  });

  // Étapes du formulaire
  const steps = [{
    title: "Vos informations personnelles",
    fields: ["firstName", "lastName", "email", "phone"]
  }, {
    title: "Votre entreprise",
    fields: ["companyName", "companyStatus", "city", "postalCode", "website"]
  }, {
    title: "Votre activité",
    fields: ["leadSource", "averageBasket", "productType", "annualOrders", "stockReferences"]
  }, {
    title: "Votre message et confirmation",
    fields: ["message"]
  }];

  // Validation de l'étape actuelle
  const validateCurrentStep = async () => {
    const currentFields = steps[currentStep].fields;
    const result = await form.trigger(currentFields as any);
    return result;
  };

  const goToNextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    console.log("📋 Début de soumission du formulaire contact", data);
    setIsSubmitting(true);
    
    try {
      console.log("🔄 Appel de la fonction Supabase...");
      
      const { data: result, error } = await supabase.functions.invoke('secure-contact-form', {
        body: data
      });

      console.log("📨 Réponse de la fonction:", { result, error });

      if (error) {
        console.error("❌ Erreur de la fonction:", error);
        throw error;
      }

      console.log("✅ Formulaire soumis avec succès");
      
      toast({
        title: "Demande de devis envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais."
      });
      
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      console.error("💥 Erreur lors de la soumission:", error);
      
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour rendre le contenu de chaque étape
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <User className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="Votre prénom" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <User className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="Votre nom" {...field} />
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
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="votre@email.com" {...field} />
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
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                      </span>
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom de l'entreprise</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Building className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="Nom de votre entreprise" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyStatus"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>État de l'entreprise</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="creation" id="creation" />
                        <FormLabel htmlFor="creation" className="font-normal">
                          En cours de création
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="active" />
                        <FormLabel htmlFor="active" className="font-normal">
                          En activité
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ville</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="Votre ville" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code postal</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="Votre code postal" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Site Web (facultatif)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Globe className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" placeholder="https://votre-site.com" {...field} />
                    </div>
                  </FormControl>
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="leadSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment nous avez-vous connu ?</FormLabel>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground z-10">
                      <List className="h-4 w-4" />
                    </span>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Choisir dans le menu déroulant" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {leadSources.map((source) => (
                          <SelectItem key={source.value} value={source.value}>
                            {source.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="averageBasket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valeur moyenne du panier (€)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" type="number" placeholder="Montant en €" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type d'articles</FormLabel>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground z-10">
                      <List className="h-4 w-4" />
                    </span>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Choisir dans le menu déroulant" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {productTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="annualOrders"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de commandes/an</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Database className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" type="number" placeholder="Nombre estimé" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stockReferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre de références à stocker</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Database className="h-4 w-4" />
                      </span>
                      <Input className="pl-10" type="number" placeholder="Nombre total de références" {...field} />
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre message (facultatif)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <FileText className="h-4 w-4" />
                      </span>
                      <Textarea className="min-h-[120px] pl-10 pt-8" placeholder="Informations complémentaires pour votre devis..." {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-6 p-4 bg-muted rounded-md">
              <h3 className="font-medium mb-2">Récapitulatif de votre demande</h3>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Nom:</span> {form.getValues("lastName")}</p>
                <p><span className="font-medium">Prénom:</span> {form.getValues("firstName")}</p>
                <p><span className="font-medium">E-mail:</span> {form.getValues("email")}</p>
                <p><span className="font-medium">Entreprise:</span> {form.getValues("companyName")}</p>
                <p><span className="font-medium">Valeur moyenne panier:</span> {form.getValues("averageBasket")}€</p>
                <p><span className="font-medium">Commandes/an:</span> {form.getValues("annualOrders")}</p>
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
      <h2 className="text-xl font-semibold mb-2">Votre Devis</h2>
      <p className="text-muted-foreground mb-6">Vous recevez votre devis dans peu de temps</p>
      
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
