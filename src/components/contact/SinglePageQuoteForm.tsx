
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { 
  Loader2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  Globe, 
  List, 
  DollarSign, 
  FileText, 
  Database,
  Sparkles,
  Shield,
  Star,
  Zap,
  CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput, validateContent, generateHoneypot, generateCSRFToken, ClientRateLimiter } from "@/lib/security-utils";

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

const leadSources = [
  { value: "social-media", label: "Réseaux sociaux" },
  { value: "search-engine", label: "Moteur de recherche" },
  { value: "recommendation", label: "Recommandation" },
  { value: "other", label: "Autre" }
];

const productTypes = [
  { value: "cosmetics", label: "Cosmétiques" },
  { value: "fashion", label: "Mode et accessoires" },
  { value: "food-supplements", label: "Compléments alimentaires" },
  { value: "electronics", label: "Électronique" },
  { value: "home-decor", label: "Décoration" },
  { value: "adult-products", label: "Produits pour adultes" },
  { value: "other", label: "Autre" }
];

const rateLimiter = new ClientRateLimiter(3, 10 * 60 * 1000);

interface SinglePageQuoteFormProps {
  onFormReady?: () => void;
}

export const SinglePageQuoteForm: React.FC<SinglePageQuoteFormProps> = ({ onFormReady }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(generateHoneypot());
  const [csrfToken] = useState(generateCSRFToken());
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
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
    mode: "onChange"
  });

  const watchedValues = form.watch();
  const completionPercentage = Math.round(
    (Object.values(watchedValues).filter(value => value !== "").length / Object.keys(watchedValues).length) * 100
  );

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      if (honeypot.value !== '') {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      const clientId = `form_${Date.now()}`;
      if (!rateLimiter.isAllowed(clientId)) {
        toast({
          title: "Trop de tentatives",
          description: "Veuillez patienter avant de renvoyer le formulaire.",
          variant: "destructive",
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
          variant: "destructive",
        });
        return;
      }

      const result = contactFormSchema.safeParse(sanitizedData);
      if (!result.success) {
        toast({
          title: "Erreur de validation",
          description: "Veuillez vérifier vos informations et réessayer.",
          variant: "destructive",
        });
        return;
      }

      const { data: submitData, error } = await supabase.functions.invoke(
        'secure-contact-form',
        {
          body: result.data,
        }
      );

      if (error) {
        throw error;
      }

      setShowSuccess(true);
      
    } catch (error) {
      console.error("❌ Erreur lors de l'envoi:", error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-md mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3"
        >
          <CheckCircle className="h-6 w-6 text-green-600" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-bold text-gray-900 mb-2"
        >
          Demande envoyée ! 🎉
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-sm mb-3"
        >
          Réponse sous <span className="font-semibold text-blue-600">2h ouvrées</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-xs text-gray-500"
        >
          <Shield className="h-3 w-3" />
          <span>Données sécurisées</span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header ultra compact */}
      <div className="text-center mb-3">
        <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full mb-2">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Devis personnalisé
        </h2>
        
        <p className="text-gray-600 text-xs">
          Réponse sous 2h
        </p>
      </div>

      {/* Barre de progression ultra compacte */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-600">Progression</span>
          <span className="text-xs font-bold text-blue-600">
            {completionPercentage}%
          </span>
        </div>
        
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot */}
          <input
            type="text"
            name={honeypot.name}
            value={honeypot.value}
            onChange={(e) => setHoneypot({...honeypot, value: e.target.value})}
            style={honeypot.style}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Tous les champs dans un seul bloc unifié */}
          <div className="space-y-2">
            {/* Tous les champs en colonne unique */}
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Prénom *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <User className="h-4 w-4" />
                        </span>
                         <Input 
                           className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                           placeholder="Votre prénom" 
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Nom *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <User className="h-4 w-4" />
                        </span>
                         <Input 
                           className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                           placeholder="Votre nom" 
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">E-mail professionnel *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Mail className="h-4 w-4" />
                        </span>
                         <Input 
                           className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                           placeholder="votre@email.com" 
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Téléphone *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Phone className="h-4 w-4" />
                        </span>
                         <Input 
                           className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                           placeholder="Votre téléphone" 
                           {...field}
                         />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Entreprise */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Nom de l'entreprise *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Building className="h-4 w-4" />
                        </span>
                         <Input 
                           className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                           placeholder="Nom de votre entreprise" 
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
                name="companyStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">État de l'entreprise *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4 mt-2"
                      >
                        <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded-lg">
                          <RadioGroupItem value="creation" id="creation" />
                          <FormLabel htmlFor="creation" className="text-sm cursor-pointer">
                            🚀 En création
                          </FormLabel>
                        </div>
                        <div className="flex items-center space-x-2 p-2 border border-gray-300 rounded-lg">
                          <RadioGroupItem value="active" id="active" />
                          <FormLabel htmlFor="active" className="text-sm cursor-pointer">
                            ✅ En activité
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
                    <FormLabel className="text-gray-700 text-sm">Ville *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          placeholder="Votre ville" 
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
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Code postal *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          placeholder="Code postal" 
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
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Site Web</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Globe className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          placeholder="https://votre-site.com" 
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
                name="leadSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Comment nous avez-vous connu ? *</FormLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 z-10">
                        <List className="h-4 w-4" />
                      </span>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                            <SelectValue placeholder="Choisir..." />
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
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Type d'articles *</FormLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 z-10">
                        <List className="h-4 w-4" />
                      </span>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
                            <SelectValue placeholder="Choisir..." />
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
                name="averageBasket"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Panier moyen (€) *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <DollarSign className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          type="number" 
                          placeholder="Montant" 
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
                name="annualOrders"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Commandes/an *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Database className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          type="number" 
                          placeholder="Nombre" 
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
                name="stockReferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Références stock *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <Database className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 h-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          type="number" 
                          placeholder="Nombre" 
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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 text-sm">Informations complémentaires</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-400">
                          <FileText className="h-4 w-4" />
                        </span>
                        <Textarea 
                          className="min-h-[60px] pl-10 pt-8 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" 
                          placeholder="Décrivez vos besoins spécifiques..." 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Bouton d'envoi */}
          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={isSubmitting || completionPercentage < 80}
              className="w-full h-11 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Obtenir mon devis gratuit
                </>
              )}
            </Button>
            
            {completionPercentage < 80 && (
              <p className="text-xs text-gray-500 text-center mt-2">
                Complétez encore {Math.ceil((80 - completionPercentage) / 100 * Object.keys(watchedValues).length)} champs pour activer l'envoi
              </p>
            )}
          </div>

          {/* Badges de sécurité compacts */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-green-600" />
                <span>Sécurisé</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-blue-600" />
                <span>Réponse 2h</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-orange-600" />
                <span>Gratuit</span>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </motion.div>
  );
};
