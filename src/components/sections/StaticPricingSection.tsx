
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PackageCheck, Building, Undo2, Recycle, FileText, HandCoins, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type PricingItem = {
  id: string;
  icon: React.ReactNode;
  service: string;
  description: string;
  price: string;
};

export function StaticPricingSection() {
  // Pricing data based on Francesco's information
  const pricingItems: PricingItem[] = [{
    id: "colisage",
    icon: <PackageCheck className="h-5 w-5 text-primary" />,
    service: "Colisage",
    description: "Préparation de la commande (picking, packing, fournitures standard)",
    price: "1,00 € / commande"
  }, {
    id: "article-supp",
    icon: <PackageCheck className="h-5 w-5 text-primary" />,
    service: "Article Suppl.",
    description: "Par article supplémentaire dans la même commande",
    price: "0,20 € / article"
  }, {
    id: "stockage",
    icon: <Building className="h-5 w-5 text-primary" />,
    service: "Stockage",
    description: "Stockage sécurisé de vos produits",
    price: "5,50 € / m² / mois"
  }, {
    id: "traitement-retour",
    icon: <Undo2 className="h-5 w-5 text-primary" />,
    service: "Traitement Retour",
    description: "Réception, contrôle et traitement administratif du retour",
    price: "2,00 € / retour"
  }, {
    id: "restockage-article",
    icon: <Recycle className="h-5 w-5 text-primary" />,
    service: "Restockage Article",
    description: "Remise en stock d'un article retourné (si applicable)",
    price: "0,20 € / article"
  }, {
    id: "edition-cn23",
    icon: <FileText className="h-5 w-5 text-primary" />,
    service: "Édition CN23",
    description: "Génération et impression du formulaire douanier CN23",
    price: "0,20 € / document"
  }, {
    id: "dechargement-palette",
    icon: <HandCoins className="h-5 w-5 text-primary" />,
    service: "Déchargement Palette",
    description: "Manutention pour déchargement de palette à la réception",
    price: "2,00 € / palette"
  }, {
    id: "transport",
    icon: <Truck className="h-5 w-5 text-primary" />,
    service: "Transport",
    description: "Frais d'expédition (variables selon poids, destination, service)",
    price: "Sur devis"
  }];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-orange-200/50 
                       dark:from-blue-900/30 dark:via-slate-950 dark:to-orange-900/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Tarification <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500 dark:from-orange-400 dark:to-blue-400">Transparente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre grille tarifaire claire sans frais cachés vous permet de prévoir vos coûts logistiques avec précision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Grille Tarifaire</CardTitle>
              <CardDescription className="text-center">Tous nos tarifs sont indiqués Hors Taxes (HT)</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Tarif HT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.icon}</TableCell>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell className="text-right">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            *Les fournitures standard incluent : cartons, papier bulle, scotch, étiquettes. Fournitures spécifiques sur devis.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Demander un devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
