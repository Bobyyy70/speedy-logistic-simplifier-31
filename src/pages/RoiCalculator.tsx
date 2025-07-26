import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calculator, TrendingUp, Clock, Euro, Download, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const calculatorSchema = z.object({
  monthlyOrders: z.number().min(1, "Le nombre de commandes doit être positif"),
  timePerOrder: z.number().min(1, "Le temps par commande doit être positif"),
  hourlyRate: z.number().min(1, "Le coût horaire doit être positif"),
  currentStorageCost: z.number().min(0, "Le coût de stockage ne peut pas être négatif"),
  shippingCost: z.number().min(0, "Le coût d'expédition ne peut pas être négatif"),
  email: z.string().email("Veuillez entrer une adresse email valide").optional(),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

interface ROIResults {
  currentMonthlyCost: number;
  speedELogMonthlyCost: number;
  monthlySavings: number;
  annualSavings: number;
  timesSavedPerMonth: number;
  timesSavedPerYear: number;
  roiPercentage: number;
}

const RoiCalculator: React.FC = () => {
  const [results, setResults] = useState<ROIResults | null>(null);
  const [emailCaptured, setEmailCaptured] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      monthlyOrders: 500,
      timePerOrder: 15,
      hourlyRate: 25,
      currentStorageCost: 800,
      shippingCost: 8.5,
    },
  });

  const watchedValues = watch();

  const calculateROI = (data: CalculatorValues): ROIResults => {
    // Current costs calculation
    const currentMonthlyPreparationCost = (data.monthlyOrders * data.timePerOrder * data.hourlyRate) / 60;
    const currentMonthlyShippingCost = data.monthlyOrders * data.shippingCost;
    const currentMonthlyCost = currentMonthlyPreparationCost + data.currentStorageCost + currentMonthlyShippingCost;

    // Speed E-Log costs (simplified pricing model)
    const speedELogPreparationCost = data.monthlyOrders * 1.5; // €1.50 per order
    const speedELogStorageCost = Math.max(data.currentStorageCost * 0.7, 200); // 30% reduction, minimum €200
    const speedELogShippingCost = data.monthlyOrders * (data.shippingCost * 0.85); // 15% reduction on shipping
    const speedELogMonthlyCost = speedELogPreparationCost + speedELogStorageCost + speedELogShippingCost;

    // Savings calculation
    const monthlySavings = currentMonthlyCost - speedELogMonthlyCost;
    const annualSavings = monthlySavings * 12;

    // Time savings
    const timesSavedPerMonth = (data.monthlyOrders * data.timePerOrder) / 60; // hours
    const timesSavedPerYear = timesSavedPerMonth * 12;

    // ROI percentage
    const roiPercentage = (monthlySavings / currentMonthlyCost) * 100;

    return {
      currentMonthlyCost,
      speedELogMonthlyCost,
      monthlySavings,
      annualSavings,
      timesSavedPerMonth,
      timesSavedPerYear,
      roiPercentage,
    };
  };

  const onSubmit = (data: CalculatorValues) => {
    const calculatedResults = calculateROI(data);
    setResults(calculatedResults);

    // If email is provided, capture the lead
    if (data.email && !emailCaptured) {
      handleEmailCapture(data.email, calculatedResults);
    }
  };

  const handleEmailCapture = async (email: string, results: ROIResults) => {
    try {
      // TODO: Integrate with HubSpot API to capture lead
      console.log("Capturing lead:", { email, results });
      
      setEmailCaptured(true);
      toast({
        title: "Rapport envoyé !",
        description: "Vous recevrez votre rapport détaillé par email sous quelques minutes.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le rapport. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatHours = (hours: number) => {
    return `${Math.round(hours)}h`;
  };

  return (
    <>
      <Helmet>
        <title>Calculateur ROI Logistique E-commerce | Speed E-Log</title>
        <meta 
          name="description" 
          content="Calculez vos économies potentielles en externalisant votre logistique e-commerce. Estimation gratuite et personnalisée en quelques clics." 
        />
        <meta name="keywords" content="calculateur ROI, logistique e-commerce, externalisation, économies, 3PL" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            Outil gratuit
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Calculateur ROI <span className="text-primary">Logistique</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez combien vous pourriez économiser en externalisant votre logistique e-commerce avec Speed E-Log
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Vos données actuelles
                </CardTitle>
                <CardDescription>
                  Remplissez ces informations pour obtenir votre estimation personnalisée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="monthlyOrders">Commandes mensuelles</Label>
                    <Input
                      id="monthlyOrders"
                      type="number"
                      {...register("monthlyOrders", { valueAsNumber: true })}
                      className={errors.monthlyOrders ? "border-red-500" : ""}
                    />
                    {errors.monthlyOrders && (
                      <p className="text-sm text-red-500">{errors.monthlyOrders.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timePerOrder">Temps par commande (minutes)</Label>
                    <Input
                      id="timePerOrder"
                      type="number"
                      {...register("timePerOrder", { valueAsNumber: true })}
                      className={errors.timePerOrder ? "border-red-500" : ""}
                    />
                    {errors.timePerOrder && (
                      <p className="text-sm text-red-500">{errors.timePerOrder.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Coût horaire de votre équipe (€)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      {...register("hourlyRate", { valueAsNumber: true })}
                      className={errors.hourlyRate ? "border-red-500" : ""}
                    />
                    {errors.hourlyRate && (
                      <p className="text-sm text-red-500">{errors.hourlyRate.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentStorageCost">Coût de stockage mensuel (€)</Label>
                    <Input
                      id="currentStorageCost"
                      type="number"
                      {...register("currentStorageCost", { valueAsNumber: true })}
                      className={errors.currentStorageCost ? "border-red-500" : ""}
                    />
                    {errors.currentStorageCost && (
                      <p className="text-sm text-red-500">{errors.currentStorageCost.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="shippingCost">Coût moyen par expédition (€)</Label>
                    <Input
                      id="shippingCost"
                      type="number"
                      step="0.1"
                      {...register("shippingCost", { valueAsNumber: true })}
                      className={errors.shippingCost ? "border-red-500" : ""}
                    />
                    {errors.shippingCost && (
                      <p className="text-sm text-red-500">{errors.shippingCost.message}</p>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email (optionnel)
                      <span className="text-sm text-muted-foreground ml-2">
                        Pour recevoir le rapport détaillé
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="votre.email@entreprise.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculer mon ROI
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {results ? (
              <div className="space-y-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <TrendingUp className="w-5 h-5" />
                      Vos économies potentielles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Euro className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium text-muted-foreground">Économies/mois</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          {formatCurrency(results.monthlySavings)}
                        </div>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-medium text-muted-foreground">Temps économisé/mois</span>
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {formatHours(results.timesSavedPerMonth)}
                        </div>
                      </div>
                    </div>

                    <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
                      <div className="text-sm font-medium text-muted-foreground mb-2">
                        Économies annuelles totales
                      </div>
                      <div className="text-4xl font-bold text-primary">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        ROI de {results.roiPercentage.toFixed(1)}%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Comparaison détaillée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Coût actuel (mensuel)</span>
                        <span className="font-bold text-red-600">
                          {formatCurrency(results.currentMonthlyCost)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Avec Speed E-Log (mensuel)</span>
                        <span className="font-bold text-green-600">
                          {formatCurrency(results.speedELogMonthlyCost)}
                        </span>
                      </div>
                    </div>

                    {watchedValues.email && !emailCaptured && (
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="font-medium text-primary">Rapport détaillé</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Soumettez le formulaire pour recevoir un rapport complet par email avec des recommandations personnalisées.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
                  <Calculator className="w-16 h-16 text-muted-foreground/50 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Calculez votre ROI</h3>
                  <p className="text-muted-foreground">
                    Remplissez le formulaire ci-contre pour découvrir vos économies potentielles
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default RoiCalculator;