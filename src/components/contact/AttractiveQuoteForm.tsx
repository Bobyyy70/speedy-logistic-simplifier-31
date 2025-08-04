import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send, ArrowLeft, ArrowRight, User, Mail, Phone, Building, MapPin, Globe, List, DollarSign, FileText, Database, Sparkles, Target, TrendingUp, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput, validateContent, generateHoneypot, generateCSRFToken, ClientRateLimiter } from "@/lib/security-utils";

// Schéma de validation identique au formulaire original
const contactFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères."
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères."
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide."
  }),
  phone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide."
  }),
  companyName: z.string().min(2, {
    message: "Le nom de l'entreprise doit contenir au moins 2 caractères."
  }),
  companyStatus: z.enum(["creation", "active"], {
    required_error: "Veuillez sélectionner l'état de votre entreprise."
  }),
  city: z.string().min(2, {
    message: "Veuillez indiquer votre ville."
  }),
  postalCode: z.string().min(5, {
    message: "Veuillez entrer un code postal valide."
  }),
  website: z.string().url({
    message: "Veuillez entrer une URL valide."
  }).optional().or(z.literal('')),
  leadSource: z.string({
    required_error: "Veuillez indiquer comment vous nous avez connu."
  }),
  averageBasket: z.string().min(1, {
    message: "Veuillez indiquer le montant moyen du panier."
  }),
  productType: z.string({
    required_error: "Veuillez sélectionner un type d'articles."
  }),
  annualOrders: z.string().min(1, {
    message: "Veuillez indiquer le nombre de commandes par an."
  }),
  stockReferences: z.string().min(1, {
    message: "Veuillez indiquer le nombre de références à stocker."
  }),
  message: z.string().optional()
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mêmes options que le formulaire original
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

// Rate limiter identique
const rateLimiter = new ClientRateLimiter(3, 10 * 60 * 1000);
interface AttractiveQuoteFormProps {
  onFormReady?: () => void;
}
export const AttractiveQuoteForm: React.FC<AttractiveQuoteFormProps> = ({
  onFormReady
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [honeypot, setHoneypot] = useState(generateHoneypot());
  const [csrfToken] = useState(generateCSRFToken());
  const [showHubSpotForm, setShowHubSpotForm] = useState(false);
  const hubspotFormRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const totalSteps = 1;
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

  // Chargement du formulaire HubSpot
  useEffect(() => {
    const loadHubSpotForm = async () => {
      if (scriptLoadedRef.current || window.hbspt?.forms) {
        createHubSpotForm();
        return;
      }
      try {
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/144571109.js';
        script.defer = true;
        script.onload = () => {
          scriptLoadedRef.current = true;
          createHubSpotForm();
        };
        script.onerror = () => {
          console.error('Failed to load HubSpot form script');
        };
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading HubSpot form:', error);
      }
    };
    const createHubSpotForm = () => {
      if (window.hbspt?.forms && hubspotFormRef.current) {
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '144571109',
          formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
          target: hubspotFormRef.current
        });
        onFormReady?.();
      }
    };
    if (showHubSpotForm) {
      loadHubSpotForm();
    }
  }, [showHubSpotForm, onFormReady]);

  // Étapes du formulaire
  const steps = [{
    title: "🙋‍♂️ Qui êtes-vous ?",
    subtitle: "Commençons par faire connaissance",
    fields: ["firstName", "lastName", "email", "phone"],
    icon: <User className="h-6 w-6" />
  }, {
    title: "🏢 Votre entreprise",
    subtitle: "Parlez-nous de votre activité",
    fields: ["companyName", "companyStatus", "city", "postalCode", "website"],
    icon: <Building className="h-6 w-6" />
  }, {
    title: "📊 Votre activité",
    subtitle: "Aidez-nous à mieux vous comprendre",
    fields: ["leadSource", "averageBasket", "productType", "annualOrders", "stockReferences"],
    icon: <TrendingUp className="h-6 w-6" />
  }, {
    title: "✨ Finalisation",
    subtitle: "Derniers détails et récapitulatif",
    fields: ["message"],
    icon: <Target className="h-6 w-6" />
  }];
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
    setIsSubmitting(true);
    try {
      // Vérifications de sécurité identiques au formulaire original
      if (honeypot.value !== '') {
        console.warn("🍯 Honeypot triggered - potential bot");
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive"
        });
        return;
      }
      const clientId = `form_${Date.now()}`;
      if (!rateLimiter.isAllowed(clientId)) {
        toast({
          title: "Trop de tentatives",
          description: "Veuillez patienter avant de renvoyer le formulaire.",
          variant: "destructive"
        });
        return;
      }
      const sanitizedData = {
        ...data,
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        phone: sanitizeInput(data.phone),
        companyName: sanitizeInput(data.companyName),
        city: sanitizeInput(data.city),
        postalCode: sanitizeInput(data.postalCode),
        website: data.website ? sanitizeInput(data.website) : undefined,
        message: data.message ? sanitizeInput(data.message) : undefined,
        csrfToken
      };
      const contentValidation = validateContent(sanitizedData.message || '');
      if (!contentValidation.isValid) {
        toast({
          title: "Contenu non valide",
          description: "Le message contient du contenu non autorisé.",
          variant: "destructive"
        });
        return;
      }
      const result = contactFormSchema.safeParse(sanitizedData);
      if (!result.success) {
        toast({
          title: "Erreur de validation",
          description: "Veuillez vérifier vos informations et réessayer.",
          variant: "destructive"
        });
        return;
      }
      const {
        data: submitData,
        error
      } = await supabase.functions.invoke('secure-contact-form', {
        body: result.data
      });
      if (error) {
        throw error;
      }
      toast({
        title: "🎉 Demande de devis envoyée !",
        description: "Nous vous recontacterons dans les plus brefs délais."
      });

      // Afficher le formulaire HubSpot pour la connexion
      setShowHubSpotForm(true);
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderStepContent = () => {
    return <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.4
    }} className="space-y-6">
        {/* Informations personnelles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="firstName" render={({
          field
        }) => <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Prénom</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <User className="h-4 w-4" />
                      </span>
                      <Input className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" placeholder="Votre prénom" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

          <FormField control={form.control} name="lastName" render={({
          field
        }) => <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Nom</FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <User className="h-4 w-4" />
                      </span>
                      <Input className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" placeholder="Votre nom" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
        </div>

        <FormField control={form.control} name="email" render={({
        field
      }) => <FormItem>
                <FormLabel className="text-gray-700 font-medium">E-mail professionnel</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Mail className="h-4 w-4" />
                    </span>
                    <Input className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" placeholder="votre@email.com" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>} />

        <FormField control={form.control} name="phone" render={({
        field
      }) => <FormItem>
                <FormLabel className="text-gray-700 font-medium">Téléphone</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Phone className="h-4 w-4" />
                    </span>
                    <Input className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" placeholder="Votre numéro de téléphone" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>} />

        {/* Informations entreprise */}
        <FormField control={form.control} name="companyName" render={({
        field
      }) => <FormItem>
                <FormLabel className="text-gray-700 font-medium">Nom de l'entreprise</FormLabel>
                <FormControl>
                  <div className="relative group">
                    <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                      <Building className="h-4 w-4" />
                    </span>
                    <Input className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200" placeholder="Nom de votre entreprise" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>} />

        <FormField control={form.control} name="companyStatus" render={({ field }) => (
          <FormItem>
            <FormLabel>Statut de l'entreprise</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Choisissez le statut" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="creation">En création</SelectItem>
                <SelectItem value="active">Déjà active</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="city" render={({ field }) => (
            <FormItem>
              <FormLabel>Ville</FormLabel>
              <FormControl>
                <Input placeholder="Paris" {...field} className="h-8" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="postalCode" render={({ field }) => (
            <FormItem>
              <FormLabel>Code postal</FormLabel>
              <FormControl>
                <Input placeholder="75001" {...field} className="h-8" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="website" render={({
        field
      }) => <FormItem>
            <FormLabel>Site web</FormLabel>
            <FormControl>
              <Input placeholder="https://www.monsite.com" {...field} className="h-8" />
            </FormControl>
            <FormMessage />
          </FormItem>} />

        {/* Informations activité */}
        <FormField control={form.control} name="leadSource" render={({ field }) => (
          <FormItem>
            <FormLabel>Comment avez-vous entendu parler de nous ?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Sélectionnez une source" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="google">Google</SelectItem>
                <SelectItem value="social">Réseaux sociaux</SelectItem>
                <SelectItem value="referral">Recommandation</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="productType" render={({ field }) => (
          <FormItem>
            <FormLabel>Type de produits</FormLabel>
            <FormControl>
              <Input placeholder="Mode, électronique, beauté..." {...field} className="h-8" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="stockReferences" render={({ field }) => (
          <FormItem>
            <FormLabel>Nombre de références</FormLabel>
            <FormControl>
              <Input placeholder="Ex: 100 références" {...field} className="h-8" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Message (optionnel)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Décrivez votre projet, vos besoins spécifiques..."
                className="min-h-[100px] resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
      </motion.div>;
  };
  if (showHubSpotForm) {
    return <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Merci pour votre demande !</h3>
          <p className="text-gray-600">Connectez-vous avec HubSpot pour finaliser votre demande</p>
        </div>
        
        <div className="w-full">
          <div ref={hubspotFormRef} className="hs-form-frame w-full" data-region="eu1" data-form-id="ebf2ad52-915e-4bfa-b4c0-a2ff8480054f" data-portal-id="144571109" />
        </div>
      </motion.div>;
  }
  return <motion.div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }}>
      {/* En-tête attractif */}
      <div className="text-center mb-8">
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 200
      }} className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4">
          <Sparkles className="h-8 w-8 text-white" />
        </motion.div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Obtenez votre devis personnalisé
        </h2>
        <p className="text-gray-600 text-lg">Réponse sous 2h ouvrées - 100% gratuit et sans engagement</p>
      </div>
      
      {/* Indicateur de progression moderne */}
      <div className="mb-8">
        
        
        <div className="relative">
          
        </div>
        
        <motion.div key={currentStep} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mt-4">
          
          <p className="text-gray-600 text-sm">{steps[currentStep].subtitle}</p>
        </motion.div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Honeypot field */}
          <input type="text" name={honeypot.name} value={honeypot.value} onChange={e => setHoneypot({
          ...honeypot,
          value: e.target.value
        })} style={honeypot.style} tabIndex={-1} autoComplete="off" />
          
          <AnimatePresence mode="wait">
            <motion.div key={currentStep}>
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
          
          {/* Boutons de navigation */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            
            
            <Button type="submit" disabled={isSubmitting} className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg shadow-lg shadow-green-600/25 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none ml-auto">
              {isSubmitting ? <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Envoi en cours...
                </> : <>
                  <Send className="h-4 w-4" />
                  Obtenir mon devis gratuit
                </>}
            </Button>
          </div>
        </form>
      </Form>
      
      {/* Badge de confiance */}
      <motion.div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.8
    }}>
        <Shield className="h-4 w-4" />
        <span>Vos données sont sécurisées et ne seront jamais partagées</span>
      </motion.div>
    </motion.div>;
};