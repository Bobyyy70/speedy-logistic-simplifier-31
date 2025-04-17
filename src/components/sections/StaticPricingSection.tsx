
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export function StaticPricingSection() {
  const services = [
    {
      name: "Colisage (Picking + Packing)",
      price: "1,15 €",
      unit: "par commande",
      details: "Inclut le premier article",
    },
    {
      name: "Article Supplémentaire",
      price: "0,15 €",
      unit: "par article",
      details: "Pour chaque article au-delà du premier dans une commande",
    },
    {
      name: "Stockage",
      price: "20 €",
      unit: "par m³ / mois",
      details: "Emplacement sécurisé en entrepôt",
    },
    {
      name: "Traitement Retour",
      price: "1,50 €",
      unit: "par retour",
      details: "Réception et inspection du retour",
    },
    {
      name: "Restockage",
      price: "0,75 €",
      unit: "par article",
      details: "Remise en stock après retour",
    },
    {
      name: "Édition CN23",
      price: "2,50 €",
      unit: "par document",
      details: "Pour les envois hors UE",
    },
    {
      name: "Déchargement Palette",
      price: "25 €",
      unit: "par palette",
      details: "Réception et déchargement",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm mb-4">
            Tarification
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Tarifs Transparents, Sans Surprises
          </h2>
          <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Notre grille tarifaire clarifie vos coûts logistiques. Tous les prix sont HT et incluent les fournitures standard.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-4 bg-blue-50 dark:bg-blue-950 rounded-t-lg">
              <CardTitle className="text-center text-2xl">Grille Tarifaire 2025</CardTitle>
              <CardDescription className="text-center">
                Prix indicatifs, un devis personnalisé vous sera proposé selon votre activité.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="w-[40%]">Service</TableHead>
                    <TableHead className="text-center">Tarif HT</TableHead>
                    <TableHead className="text-right w-[20%]">Unité</TableHead>
                    <TableHead className="text-right w-[10%]">Info</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell className="text-center font-semibold text-blue-700 dark:text-blue-400">{service.price}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{service.unit}</TableCell>
                      <TableCell className="text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-[200px] text-sm">{service.details}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Notes */}
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p>Les tarifs d'expédition sont variables selon le poids, la destination et le transporteur sélectionné.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p>Les emballages standard sont inclus dans les tarifs de colisage.</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <p>Des solutions d'emballage personnalisées sont disponibles sur demande (tarification spécifique).</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <NavLink to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                    Obtenir un devis personnalisé
                  </Button>
                </NavLink>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
