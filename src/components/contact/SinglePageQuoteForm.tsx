
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
        className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
        >
          <CheckCircle className="h-10 w-10 text-green-600" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-gray-900 mb-4"
        >
          Demande envoyée avec succès ! 🎉
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-lg mb-6"
        >
          Nous vous recontacterons sous <span className="font-semibold text-blue-600">2h ouvrées</span> pour votre devis personnalisé.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <Shield className="h-4 w-4" />
          <span>Vos données sont sécurisées</span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header engageant */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mb-4"
        >
          <Sparkles className="h-8 w-8 text-white" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
        >
          Votre Devis Personnalisé
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 text-lg"
        >
          Réponse garantie sous 2h • 100% gratuit • Sans engagement
        </motion.p>
      </div>

      {/* Barre de progression dynamique */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Progression</span>
          <motion.span 
            key={completionPercentage}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className="text-sm font-bold text-blue-600"
          >
            {completionPercentage}%
          </motion.span>
        </div>
        
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
        
        {completionPercentage > 70 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1 mt-2 text-sm text-green-600"
          >
            <Star className="h-4 w-4" />
            <span>Presque terminé ! Plus que quelques champs...</span>
          </motion.div>
        )}
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

          {/* Section 1: Informations personnelles */}
          <motion.div 
            className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <User className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Vos informations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Prénom *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <User className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 h-12" 
                          placeholder="Votre prénom" 
                          {...field}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Nom *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <User className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 h-12" 
                          placeholder="Votre nom" 
                          {...field}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">E-mail professionnel *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <Mail className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 h-12" 
                          placeholder="votre@email.com" 
                          {...field}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Téléphone *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <Phone className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 h-12" 
                          placeholder="Votre téléphone" 
                          {...field}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Section 2: Entreprise */}
          <motion.div 
            className="space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Building className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Votre entreprise</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Nom de l'entreprise *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                          <Building className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 h-12" 
                          placeholder="Nom de votre entreprise" 
                          {...field} 
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">État de l'entreprise *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-4 mt-2"
                      >
                        <motion.div 
                          className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <RadioGroupItem value="creation" id="creation" />
                          <FormLabel htmlFor="creation" className="font-normal cursor-pointer">
                            🚀 En création
                          </FormLabel>
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-2 p-3 border-2 border-gray-200 rounded-lg hover:border-purple-300 transition-colors cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <RadioGroupItem value="active" id="active" />
                          <FormLabel htmlFor="active" className="font-normal cursor-pointer">
                            ✅ En activité
                          </FormLabel>
                        </motion.div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Ville *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 h-12" 
                          placeholder="Votre ville" 
                          {...field} 
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Code postal *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 h-12" 
                          placeholder="Code postal" 
                          {...field} 
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Site Web</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                          <Globe className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-200 h-12" 
                          placeholder="https://votre-site.com" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Section 3: Activité */}
          <motion.div 
            className="space-y-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-600 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Votre activité</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="leadSource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Comment nous avez-vous connu ? *</FormLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 z-10">
                        <List className="h-4 w-4" />
                      </span>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="pl-10 border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-200 h-12">
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
                    <FormLabel className="text-gray-700 font-medium">Type d'articles *</FormLabel>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-400 z-10">
                        <List className="h-4 w-4" />
                      </span>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="pl-10 border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-200 h-12">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="averageBasket"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Panier moyen (€) *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-500 transition-colors">
                          <DollarSign className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-200 h-12" 
                          type="number" 
                          placeholder="Montant" 
                          {...field} 
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Commandes/an *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-500 transition-colors">
                          <Database className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-200 h-12" 
                          type="number" 
                          placeholder="Nombre" 
                          {...field} 
                        />
                      </motion.div>
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
                    <FormLabel className="text-gray-700 font-medium">Références stock *</FormLabel>
                    <FormControl>
                      <motion.div 
                        className="relative group"
                        whileFocus={{ scale: 1.02 }}
                      >
                        <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-500 transition-colors">
                          <Database className="h-4 w-4" />
                        </span>
                        <Input 
                          className="pl-10 border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 transition-all duration-200 h-12" 
                          type="number" 
                          placeholder="Nombre" 
                          {...field} 
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </motion.div>

          {/* Section 4: Message */}
          <motion.div 
            className="space-y-6 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-600 rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Votre message</h3>
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Informations complémentaires</FormLabel>
                  <FormControl>
                    <motion.div 
                      className="relative group"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <span className="absolute left-3 top-3 text-gray-400 group-focus-within:text-orange-500 transition-colors">
                        <FileText className="h-4 w-4" />
                      </span>
                      <Textarea 
                        className="min-h-[120px] pl-10 pt-8 border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-200" 
                        placeholder="Décrivez vos besoins spécifiques..." 
                        {...field} 
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Bouton d'envoi */}
          <motion.div 
            className="pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <Button 
              type="submit" 
              disabled={isSubmitting || completionPercentage < 80}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-3 h-5 w-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-3 h-5 w-5" />
                  Obtenir mon devis gratuit maintenant
                </>
              )}
            </Button>
            
            {completionPercentage < 80 && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-sm text-gray-500 mt-3"
              >
                Complétez encore {Math.ceil((80 - completionPercentage) / 7)} champs pour débloquer l'envoi
              </motion.p>
            )}
          </motion.div>

          {/* Badge de confiance */}
          <motion.div 
            className="flex items-center justify-center gap-2 pt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Shield className="h-4 w-4" />
            <span>Données sécurisées • RGPD • SSL • Jamais partagées</span>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};
