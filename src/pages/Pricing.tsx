
import { useEffect } from "react";
import { Info, Check, Package, FileText, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingItems = [
  {
    name: "Colisage",
    price: "3,50 €",
    unit: "par colis",
    icon: Package,
    description: "Préparation, emballage et étiquetage de votre colis",
  },
  {
    name: "Article Supplémentaire",
    price: "0,30 €",
    unit: "par article",
    icon: Package,
    description: "Coût pour chaque article additionnel dans un même colis",
  },
  {
    name: "Stockage",
    price: "15,00 €",
    unit: "par m³/mois",
    icon: FileText,
    description: "Stockage de vos produits dans notre entrepôt sécurisé",
  },
  {
    name: "Traitement Retour",
    price: "2,50 €",
    unit: "par colis",
    icon: Clock,
    description: "Réception et traitement d'un colis retour",
  },
  {
    name: "Restockage",
    price: "0,50 €",
    unit: "par article",
    icon: Package,
    description: "Remise en stock d'un article retourné après contrôle",
  },
  {
    name: "Édition CN23",
    price: "1,50 €",
    unit: "par document",
    icon: FileText,
    description: "Création et impression des documents douaniers",
  },
  {
    name: "Déchargement Palette",
    price: "15,00 €",
    unit: "par palette",
    icon: Package,
    description: "Réception et déchargement d'une palette de marchandises",
  },
];

const transportInfo = [
  "Tarifs négociés avec nos partenaires transporteurs",
  "Prix variables selon destination, poids et dimensions",
  "Devis personnalisé en fonction de votre volume",
  "Livraison en France et international",
  "Options express disponibles",
];

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-sky-50 pt-32 pb-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tarification Transparente
              </h1>
              <p className="text-xl text-muted-foreground">
                Des prix clairs et sans surprise pour une gestion sereine de votre budget logistique. Tous nos tarifs sont indiqués hors taxes (HT).
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Grille Tarifaire Indicative
            </h2>

            <div className="overflow-x-auto rounded-lg border shadow-sm mb-12">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">Service</TableHead>
                    <TableHead>Prix HT</TableHead>
                    <TableHead className="hidden md:table-cell">Unité</TableHead>
                    <TableHead className="text-right">
                      <span className="sr-only">Info</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium flex items-center gap-2">
                        <div className="bg-primary/10 w-8 h-8 rounded-md flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        {item.name}
                      </TableCell>
                      <TableCell className="font-bold">{item.price}</TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">
                        {item.unit}
                      </TableCell>
                      <TableCell className="text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{item.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border mb-12">
              <h3 className="text-xl font-semibold mb-4">Précisions Importantes :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les fournitures standard d'emballage sont incluses (carton, film bulle, adhésif).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les emballages personnalisés à votre marque sont facturés au prix coûtant.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Le stockage est calculé sur l'espace réellement occupé (volume) et non au mètre carré.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Aucun frais d'activation ou d'intégration n'est facturé pour les plateformes standards.</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Tarifs de Transport
              </h3>
              <p className="mb-4">
                Les frais de transport sont variables et dépendent de plusieurs facteurs. Nous avons négocié des tarifs avantageux avec nos partenaires transporteurs.
              </p>
              <ul className="space-y-2">
                {transportInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Demander un devis personnalisé <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Nous vous répondrons sous 24h ouvrées avec une proposition adaptée à vos besoins.
              </p>
            </div>
          </div>
        </section>

        {/* Volume Discount */}
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Tarifs Dégressifs selon Volume
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Plus votre volume de commandes est important, plus nos tarifs sont avantageux. Contactez-nous pour une grille tarifaire personnalisée.
              </p>
              <Button asChild>
                <Link to="/contact">Discuter de votre volume</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PricingPage;
