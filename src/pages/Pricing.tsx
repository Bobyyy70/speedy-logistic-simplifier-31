
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Truck } from "lucide-react";

// Types pour les services de tarification
type PricingService = {
  name: string;
  description: string;
  price: string;
  unit: string;
};

// Données des services
const pricingServices: PricingService[] = [
  {
    name: "Colisage",
    description: "Préparation et emballage de votre commande",
    price: "1,80€",
    unit: "par colis",
  },
  {
    name: "Article supplémentaire",
    description: "Chaque article ajouté au colis",
    price: "0,15€",
    unit: "par article",
  },
  {
    name: "Stockage",
    description: "Stockage sécurisé de vos produits",
    price: "19,90€",
    unit: "par m³/mois",
  },
  {
    name: "Traitement retour",
    description: "Gestion des produits retournés",
    price: "1,80€",
    unit: "par retour",
  },
  {
    name: "Restockage",
    description: "Remise en stock d'un article retourné",
    price: "0,30€",
    unit: "par article",
  },
  {
    name: "Édition CN23",
    description: "Documents douaniers pour l'international",
    price: "2,90€",
    unit: "par document",
  },
  {
    name: "Déchargement palette",
    description: "Réception et déchargement",
    price: "9,90€",
    unit: "par palette",
  },
];

// Composant pour les tarifs
const Pricing = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Nos tarifs</h1>
          
          <div className="text-center mb-12">
            <p className="text-lg mb-4">
              Chez Speed E Log, nous croyons en la transparence totale des tarifs. Voici notre grille tarifaire indicative pour nos services de logistique e-commerce.
            </p>
            <p className="text-muted-foreground">
              Tous les prix sont indiqués hors taxes (HT) et incluent les fournitures d'emballage standard.
            </p>
          </div>

          {/* Grille tarifaire sous forme de tableau */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Grille tarifaire</CardTitle>
              <CardDescription>
                Tarifs indicatifs pour les services logistiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>
                  * Les tarifs de transport varient selon le poids, les dimensions et la destination.
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">Service</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Tarif HT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingServices.map((service) => (
                    <TableRow key={service.name}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell>{service.description}</TableCell>
                      <TableCell className="text-right">
                        {service.price} <span className="text-muted-foreground text-sm">{service.unit}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Section transport */}
          <Card className="mb-12 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="h-5 w-5 text-primary" />
                <CardTitle>Transport</CardTitle>
              </div>
              <CardDescription>
                Expédition nationale et internationale
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4">
                Les tarifs de transport sont variables et dépendent de plusieurs facteurs :
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Poids et dimensions du colis</li>
                <li>Destination (France, Europe, International)</li>
                <li>Niveau de service choisi (standard, express, etc.)</li>
                <li>Options supplémentaires (assurance, signature, etc.)</li>
              </ul>
              <p>
                Nous travaillons avec plusieurs transporteurs nationaux et internationaux pour vous offrir le meilleur rapport qualité/prix. Les tarifs de transport sont communiqués sur devis personnalisé.
              </p>
            </CardContent>
          </Card>

          {/* CTA Devis personnalisé */}
          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <h2 className="text-2xl font-semibold mb-4">Besoin d'un devis personnalisé ?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Chaque entreprise e-commerce a des besoins spécifiques. Contactez-nous pour obtenir un devis adapté à votre volume de commandes, vos produits et vos exigences particulières.
            </p>
            <Button size="lg" className="font-medium">
              Demander un devis personnalisé
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
