
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

export function StaticPricingTable() {
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
    <Card>
      <CardHeader>
        <CardTitle>Grille Tarifaire Speed E-Log</CardTitle>
        <CardDescription>Tarifs indicatifs pour nos services logistiques</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Prix HT</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricingItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="flex items-center gap-2">
                  {item.icon}
                  {item.service}
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
