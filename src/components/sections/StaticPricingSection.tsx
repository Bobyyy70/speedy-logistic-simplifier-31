
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PackageCheck, 
  Building, 
  Undo2, 
  Recycle, 
  FileText, 
  HandCoins, 
  Truck 
} from "lucide-react";
import { Link } from "react-router-dom";

type PricingItem = {
  id: string;
  icon: React.ReactNode;
  service: string;
  description: string;
  price: string;
  color: string;
};

export function StaticPricingSection() {
  // Pricing data based on Francesco's information
  const pricingItems: PricingItem[] = [
    {
      id: "colisage",
      icon: <PackageCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      service: "Colisage",
      description: "Préparation de la commande (picking, packing, fournitures standard)",
      price: "1,00 € / commande",
      color: "blue"
    },
    {
      id: "article-supp",
      icon: <PackageCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      service: "Article Suppl.",
      description: "Par article supplémentaire dans la même commande",
      price: "0,20 € / article",
      color: "blue"
    },
    {
      id: "stockage",
      icon: <Building className="h-5 w-5 text-green-600 dark:text-green-400" />,
      service: "Stockage",
      description: "Stockage sécurisé de vos produits",
      price: "5,50 € / m² / mois",
      color: "green"
    },
    {
      id: "traitement-retour",
      icon: <Undo2 className="h-5 w-5 text-green-600 dark:text-green-400" />,
      service: "Traitement Retour",
      description: "Réception, contrôle et traitement administratif du retour",
      price: "2,00 € / retour",
      color: "green"
    },
    {
      id: "restockage-article",
      icon: <Recycle className="h-5 w-5 text-green-600 dark:text-green-400" />,
      service: "Restockage Article",
      description: "Remise en stock d'un article retourné (si applicable)",
      price: "0,20 € / article",
      color: "green"
    },
    {
      id: "edition-cn23",
      icon: <FileText className="h-5 w-5 text-orange-500 dark:text-orange-400" />,
      service: "Édition CN23",
      description: "Génération et impression du formulaire douanier CN23",
      price: "0,20 € / document",
      color: "orange"
    },
    {
      id: "dechargement-palette",
      icon: <HandCoins className="h-5 w-5 text-orange-500 dark:text-orange-400" />,
      service: "Déchargement Palette",
      description: "Manutention pour déchargement de palette à la réception",
      price: "2,00 € / palette",
      color: "orange"
    },
    {
      id: "transport",
      icon: <Truck className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      service: "Transport",
      description: "Frais d'expédition (variables selon poids, destination, service)",
      price: "Sur devis",
      color: "blue"
    }
  ];

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "blue": return "text-blue-600 dark:text-blue-400";
      case "green": return "text-green-600 dark:text-green-400";
      case "orange": return "text-orange-500 dark:text-orange-400";
      default: return "text-primary";
    }
  };

  return (
    <section id="pricing" className="bg-gradient-to-r from-blue-50/30 via-white to-green-50/30 dark:from-slate-900/80 dark:via-slate-950 dark:to-green-950/30 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Introduction */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 px-3 py-1 text-sm">
            Tarification
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Une tarification <span className="text-blue-600 dark:text-blue-400">transparente</span> et <span className="text-green-600 dark:text-green-400">adaptée</span>
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Pas de frais cachés, une structure de coûts simple pour vous aider à planifier. (Tarifs indicatifs HT)
          </p>
        </div>

        {/* Pricing Table */}
        <Card className="max-w-4xl mx-auto border border-blue-200/50 dark:border-blue-900/30">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 rounded-t-lg">
            <CardTitle>Grille tarifaire indicative</CardTitle>
            <CardDescription>
              Tous les prix sont hors taxes (HT) et incluent les fournitures d'emballage standard
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Table>
              <TableHeader className="bg-blue-50/50 dark:bg-blue-950/20">
                <TableRow>
                  <TableHead className="w-[200px]">Service</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Tarif HT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingItems.map((item, index) => (
                  <TableRow key={item.id} className={index % 2 === 0 ? "bg-white dark:bg-slate-950/50" : "bg-blue-50/30 dark:bg-blue-950/10"}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <span className={getIconColorClass(item.color)}>{item.icon}</span>
                        <span>{item.service}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell className="text-right font-medium">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-4">
              *Les tarifs de transport dépendent du poids, de la destination et du niveau de service choisi. Contactez-nous pour un devis précis.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
            <Link to="/contact">Demandez votre devis personnalisé</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
