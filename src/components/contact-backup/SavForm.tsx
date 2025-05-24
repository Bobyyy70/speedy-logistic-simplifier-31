// Backup of SavForm component
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
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Définition du schéma de validation avec Zod
const savFormSchema = z.object({
  // Étape 1: Informations personnelles
  fullName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  orderNumber: z.string().min(3, {
    message: "Veuillez entrer un numéro de commande valide.",
  }),
  phone: z.string().optional(),
  
  // Étape 2: Détails de la commande
  purchaseDate: z.date({
    required_error: "Veuillez sélectionner une date d'achat.",
  }),
  productReference: z.string().min(2, {
    message: "Veuillez indiquer une référence produit.",
  }),
  issueCategory: z.string({
    required_error: "Veuillez sélectionner une catégorie de problème.",
  }),
  
  // Étape 3: Description du problème
  description: z.string().min(10, {
    message: "Veuillez décrire le problème en détail (10 caractères minimum).",
  }),
  
  // Étape 4: Informations supplémentaires
  preferredContact: z.enum(["email", "phone"], {
    required_error: "Veuillez sélectionner votre méthode de contact préférée.",
  }),
  bestTimeToContact: z.string().optional(),
});

type SavFormValues = z.infer<typeof savFormSchema>;

// Catégories de problèmes pour le menu déroulant
const issueCategories = [
  { value: "defective-product", label: "Produit défectueux" },
  { value: "missing-parts", label: "Pièces manquantes" },
  { value: "shipping-damage", label: "Dommages pendant le transport" },
  { value: "return-request", label: "Demande de retour" },
  { value: "other", label: "Autre" },
];

// Heures de contact pour le menu déroulant
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
      // Étape 1: Informations personnelles
      fullName: "",
      email: "",
      orderNumber: "",
      phone: "",
      
      // Étape 2: Détails de la commande
      purchaseDate: undefined,
      productReference: "",
      issueCategory: "",
      
      // Étape 3: Description du problème
      description: "",
      
      // Étape 4: Informations supplémentaires
      preferredContact: "email",
      bestTimeToContact: "",
    },
    mode: "onBlur",
  });
  
  // Étapes du formulaire
  const steps = [
    {
      title: "Vos informations",
      fields: ["fullName", "email", "orderNumber", "phone"],
    },
    {
      title: "Détails de la commande",
      fields: ["purchaseDate", "productReference", "issueCategory"],
    },
    {
      title: "Description du problème",
      fields: ["description"],
    },
    {
      title: "Préférences de contact",
      fields: ["preferredContact", "bestTimeToContact"],
    },
  ];

  // Validation de l'étape actuelle
  const validateCurrentStep = async () => {
    const currentFields = steps[currentStep].fields;
    const result = await form.trigger(currentFields as any);
    return result;
  };

  // Navigation vers l'étape suivante
  const goToNextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // Navigation vers l'étape précédente
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Soumission du formulaire
  const onSubmit = async (data: SavFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simuler API call avec timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("SAV Form submitted:", data);
      
      toast({
        title: "Demande SAV envoyée !",
        description: "Un conseiller vous contactera dans les plus brefs délais.",
      });
      
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi de votre demande. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("SAV Form submission error:", error);
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
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <User className="h-4 w-4" />
                      </span>
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
              name="orderNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numéro de commande</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Package className="h-4 w-4" />
                      </span>
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
              name="purchaseDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date d'achat</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={`w-full pl-10 text-left font-normal relative ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          <span className="absolute left-3 top-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                          </span>
                          {field.value ? (
                            format(field.value, "PPP", { locale: fr })
                          ) : (
                            <span>Sélectionnez une date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date > new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productReference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Référence produit</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <Package className="h-4 w-4" />
                      </span>
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
                  <FormLabel>Catégorie du problème</FormLabel>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-muted-foreground z-10">
                      <AlertTriangle className="h-4 w-4" />
                    </span>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description détaillée du problème</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                      </span>
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
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="preferredContact"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Méthode de contact préférée</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                      <span className="absolute left-3 top-3 text-muted-foreground z-10">
                        <Clock className="h-4 w-4" />
                      </span>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                <p><span className="font-medium">Numéro de commande:</span> {form.getValues("orderNumber")}</p>
                <p><span className="font-medium">Produit:</span> {form.getValues("productReference")}</p>
                <p>
                  <span className="font-medium">Catégorie du problème:</span> 
                  {issueCategories.find(cat => cat.value === form.getValues("issueCategory"))?.label || form.getValues("issueCategory")}
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
      <h2 className="text-xl font-semibold mb-2">Besoin d'assistance ?</h2>
      <p className="text-muted-foreground mb-6">Remplissez ce formulaire pour toute demande de Service Après-Vente</p>
      
      {/* Étapes et progression */}
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
          {/* Contenu de l'étape actuelle */}
          {renderStepContent()}
          
          {/* Navigation des étapes */}
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
