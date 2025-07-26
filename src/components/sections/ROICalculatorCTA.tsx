import React from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ROICalculatorCTAProps {
  variant?: "default" | "compact";
  className?: string;
}

export const ROICalculatorCTA: React.FC<ROICalculatorCTAProps> = ({ 
  variant = "default", 
  className = "" 
}) => {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={className}
      >
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Calculez vos économies</h3>
                  <p className="text-sm text-muted-foreground">
                    Estimation gratuite en 2 minutes
                  </p>
                </div>
              </div>
              <Button asChild variant="default" size="sm">
                <Link to="/calculateur-roi-logistique">
                  Calculer <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-16 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 ${className}`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Calculator className="w-4 h-4" />
            Outil gratuit
          </motion.div>

          {/* Title and Description */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Découvrez vos <span className="text-primary">économies potentielles</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Calculez en 2 minutes combien vous pourriez économiser en externalisant 
            votre logistique e-commerce avec Speed E-Log
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-full">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Économies chiffrées</div>
                <div className="text-sm text-muted-foreground">ROI personnalisé</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
              <div className="p-2 bg-blue-100 rounded-full">
                <Calculator className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Calcul instantané</div>
                <div className="text-sm text-muted-foreground">Résultat en 2 min</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-white/50 rounded-lg">
              <div className="p-2 bg-purple-100 rounded-full">
                <ArrowRight className="w-5 h-5 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Rapport détaillé</div>
                <div className="text-sm text-muted-foreground">Par email</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button asChild size="2xl" className="shadow-xl hover:shadow-[#2F68F3]/25 transition-all duration-300">
              <Link to="/calculateur-roi-logistique">
                <Calculator className="w-5 h-5 mr-2" />
                Calculer mon ROI gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground mt-4"
          >
            ✓ Gratuit ✓ Sans engagement ✓ Résultat instantané
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};