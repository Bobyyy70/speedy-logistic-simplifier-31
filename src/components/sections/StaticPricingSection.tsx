
import React from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function StaticPricingSection() {
  return (
    <section id="pricing" className="bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Introduction */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300 px-3 py-1 text-sm">
            Tarification
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Une tarification transparente et adaptée
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Pas de frais cachés, une structure de coûts simple pour vous aider à planifier. (Tarifs indicatifs HT)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Card className="bg-white/80 dark:bg-slate-800/50 shadow-sm border border-blue-100 dark:border-blue-900/30">
            <CardHeader>
              <CardTitle>Disponibilité des tarifs</CardTitle>
              <CardDescription>
                Notre grille tarifaire complète est disponible sur demande
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                Pour obtenir notre tarification détaillée et adaptée à vos besoins spécifiques, 
                n'hésitez pas à nous contacter. Nous vous proposerons une offre personnalisée 
                en fonction de votre volume, du type de produits et de vos exigences logistiques.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-500/90">
            <Link to="/contact">Demandez votre devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
