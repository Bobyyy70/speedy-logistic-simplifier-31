import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PackageCheck, Building, Undo2, Recycle, FileText, HandCoins, Truck } from "lucide-react";
import { Link } from "react-router-dom";
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
  return <section id="pricing" className="bg-muted/40 dark:bg-slate-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm dark:bg-slate-800">
            Tarification
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Une tarification transparente et adaptée
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Pas de frais cachés, une structure de coûts simple pour vous aider à planifier. (Tarifs indicatifs HT)
          </p>
        </div>

        {/* Pricing Table */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Grille tarifaire indicative</CardTitle>
            
          </CardHeader>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Service</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Tarif HT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingItems.map(item => <TableRow key={item.id}>
                    
                    
                    <TableCell className="text-right">{item.price}</TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              *Les tarifs de transport dépendent du poids, de la destination et du niveau de service choisi. Contactez-nous pour un devis précis.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link to="/contact">Demandez votre devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </section>;
}