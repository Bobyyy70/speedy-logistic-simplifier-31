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
  Building, MapPin, Globe, List, DollarSign, FileText, Database 
} from "lucide-react";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

// Définition du schéma de validation avec Zod
const contactFormSchema = z.object({
  // Étape 1: Informations personnelles
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  phone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide.",
  }),
  
  // Étape 2: Informations entreprise
  companyName: z.string().min(2, {
    message: "Le nom de l'entreprise doit contenir au moins 2 caractères.",
  }),
  companyStatus: z.enum(["creation", "active"], {
    required_error: "Veuillez sélectionner l'état de votre entreprise.",
  }),
  city: z.string().min(2, {
    message: "Veuillez indiquer votre ville.",
  }),
  postalCode: z.string().min(5, {
    message: "Veuillez entrer un code postal valide.",
  }),
  website: z.string().url({
    message: "Veuillez entrer une URL valide.",
  }).optional().or(z.literal('')),
  
  // Étape 3: Informations activité
  leadSource: z.string({
    required_error: "Veuillez indiquer comment vous nous avez connu.",
  }),
  averageBasket: z.string().min(1, {
    message: "Veuillez indiquer le montant moyen du panier.",
  }),
  productType: z.string({
    required_error: "Veuillez sélectionner un type d'articles.",
  }),
  annualOrders: z.string().min(1, {
    message: "Veuillez indiquer le nombre de commandes par an.",
  }),
  stockReferences: z.string().min(1, {
    message: "Veuillez indiquer le nombre de références à stocker.",
  }),
  
  // Étape 4: Message et confirmation
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Sources pour le menu déroulant "Connu via"
const leadSources = [
  { value: "social-media", label: "Réseaux sociaux" },
  { value: "search-engine", label: "Moteur de recherche" },
  { value: "recommendation", label: "Recommandation" },
  { value: "other", label: "Autre" },
];

// Types d'articles pour le menu déroulant
const productTypes = [
  { value: "cosmetics", label: "Cosmétiques" },
  { value: "fashion", label: "Mode et accessoires" },
  { value: "food-supplements", label: "Compléments alimentaires" },
  { value: "electronics", label: "Électronique" },
  { value: "home-decor", label: "Décoration" },
  { value: "adult-products", label: "Produits pour adultes" },
  { value: "other", label: "Autre" },
];

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      // Étape 1: Informations personnelles
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      
      // Étape 2: Informations entreprise
      companyName: "",
      companyStatus: "active",
      city: "",
      postalCode: "",
      website: "",
      
      // Étape 3: Informations activité
      leadSource: "",
      averageBasket: "",
      productType: "",
      annualOrders: "",
      stockReferences: "",
      
      // Étape 4: Message et confirmation
      message: "",
    },
    mode: "onBlur",
  });
  
  // Étapes du formulaire
  const steps = [
    {
      title: "Vos informations personnelles",
      fields: ["firstName", "lastName", "email", "phone"],
    },
    {
      title: "Votre entreprise",
      fields: ["companyName", "companyStatus", "city", "postalCode", "website"],
    },
    {
      title: "Votre activité",
      fields: ["leadSource", "averageBasket", "productType", "annualOrders", "stockReferences"],
    },
    {
      title: "Votre message et confirmation",
      fields: ["message"],
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
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simuler API call avec timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Demande de devis envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      form.reset();
      setCurrentStep(0);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
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
                      <Textarea 
                        className="min-h-[120px] pl-10 pt-8" 
                        placeholder="Informations complémentaires pour votre devis..."
                        {...field} 
                      />
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
      <p className="text-muted-foreground mb-6">Nous vous recontacterons dans les plus brefs délais</p>
      
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
