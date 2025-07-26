import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quoteFormSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  website: z.string().url("Veuillez entrer une URL valide").optional().or(z.literal("")),
  monthlyOrders: z.string().min(1, "Veuillez sélectionner votre volume"),
  platform: z.string().min(1, "Veuillez sélectionner votre plateforme"),
  message: z.string().optional(),
  phone: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface MultiStepQuoteFormProps {
  onSubmit?: (data: QuoteFormValues) => void;
}

export const MultiStepQuoteForm: React.FC<MultiStepQuoteFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const steps = [
    {
      title: "Vos informations",
      description: "Commençons par faire connaissance",
      fields: ["firstName", "lastName", "email"] as const,
    },
    {
      title: "Votre activité",
      description: "Parlez-nous de votre e-commerce",
      fields: ["website", "monthlyOrders", "platform"] as const,
    },
    {
      title: "Vos besoins",
      description: "Finalisez votre demande de devis",
      fields: ["message", "phone"] as const,
    },
  ];

  const currentStepData = steps[currentStep - 1];
  const progress = (currentStep / steps.length) * 100;

  const validateCurrentStep = async () => {
    const fieldsToValidate = currentStepData.fields;
    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };

  const goToNextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onFormSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        onSubmit(data);
      }

      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons sous 24h avec votre devis personnalisé.",
      });

      // Reset form
      setCurrentStep(1);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom *</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Jean"
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Nom *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Dupont"
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email professionnel *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="jean.dupont@entreprise.com"
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <p className="text-sm text-muted-foreground">
              <CheckCircle className="inline w-4 h-4 mr-1 text-green-500" />
              Nous respectons votre vie privée. Aucun spam.
            </p>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="website">Site web de votre entreprise</Label>
              <Input
                id="website"
                {...register("website")}
                placeholder="https://monsite.com"
                className={errors.website ? "border-red-500" : ""}
              />
              {errors.website && (
                <p className="text-sm text-red-500">{errors.website.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyOrders">Volume de commandes mensuel *</Label>
              <Select onValueChange={(value) => setValue("monthlyOrders", value)}>
                <SelectTrigger className={errors.monthlyOrders ? "border-red-500" : ""}>
                  <SelectValue placeholder="Sélectionnez votre volume" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100">0 à 100 commandes</SelectItem>
                  <SelectItem value="100-500">100 à 500 commandes</SelectItem>
                  <SelectItem value="500-1000">500 à 1000 commandes</SelectItem>
                  <SelectItem value="1000-5000">1000 à 5000 commandes</SelectItem>
                  <SelectItem value="5000+">Plus de 5000 commandes</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyOrders && (
                <p className="text-sm text-red-500">{errors.monthlyOrders.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="platform">Plateforme e-commerce *</Label>
              <Select onValueChange={(value) => setValue("platform", value)}>
                <SelectTrigger className={errors.platform ? "border-red-500" : ""}>
                  <SelectValue placeholder="Sélectionnez votre plateforme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shopify">Shopify</SelectItem>
                  <SelectItem value="woocommerce">WooCommerce</SelectItem>
                  <SelectItem value="prestashop">PrestaShop</SelectItem>
                  <SelectItem value="magento">Magento</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
              {errors.platform && (
                <p className="text-sm text-red-500">{errors.platform.message}</p>
              )}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="message">Décrivez vos besoins logistiques</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Produits vendus, défis actuels, objectifs..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone (optionnel)</Label>
              <Input
                id="phone"
                {...register("phone")}
                placeholder="+33 1 23 45 67 89"
              />
              <p className="text-sm text-muted-foreground">
                Pour un appel personnalisé plus rapide
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">Étape {currentStep} sur {steps.length}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      {/* Step Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
        <p className="text-muted-foreground">{currentStepData.description}</p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            className="min-w-[120px]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Précédent
          </Button>

          {currentStep < steps.length ? (
            <Button
              type="button"
              onClick={goToNextStep}
              className="min-w-[120px] bg-primary hover:bg-primary/90"
            >
              Étape suivante
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="min-w-[120px] bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Envoi..." : "Recevoir mon devis"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};