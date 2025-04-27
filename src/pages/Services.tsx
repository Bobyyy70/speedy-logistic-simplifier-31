import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  Package,
  PiggyBank,
  Rocket,
  ShieldCheck,
  Timer,
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-100/90 via-white to-green-200/90 dark:from-slate-900 dark:via-slate-950 dark:to-green-800/90">
      <Helmet>
        <title>Nos Services Logistiques E-commerce | Speed E-Log</title>
        <meta
          name="description"
          content="Découvrez nos services logistiques sur mesure pour e-commerce : stockage, préparation de commandes, expédition rapide et gestion des retours. Optimisez votre chaîne logistique avec Speed E-Log."
        />
        <meta
          property="og:title"
          content="Nos Services Logistiques E-commerce | Speed E-Log"
        />
        <meta
          property="og:description"
          content="Découvrez nos services logistiques sur mesure pour e-commerce : stockage, préparation de commandes, expédition rapide et gestion des retours. Optimisez votre chaîne logistique avec Speed E-Log."
        />
      </Helmet>

      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre gamme complète de services logistiques adaptés aux
            besoins des PME e-commerce.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1: Stockage */}
            <Card className="bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-900/10 dark:to-blue-800/5 border-blue-200/50 dark:border-blue-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <CardTitle className="text-xl">Stockage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solutions de stockage flexibles et sécurisées pour vos
                  produits.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2: Préparation de commandes */}
            <Card className="bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-900/10 dark:to-green-800/5 border-green-200/50 dark:border-green-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Package className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <CardTitle className="text-xl">
                  Préparation de commandes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Préparation rapide et soignée de vos commandes pour une
                  satisfaction client optimale.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3: Expédition */}
            <Card className="bg-gradient-to-br from-orange-50/50 to-orange-100/30 dark:from-orange-900/10 dark:to-orange-800/5 border-orange-200/50 dark:border-orange-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Rocket className="h-5 w-5 text-orange-500 dark:text-orange-400 mr-2" />
                <CardTitle className="text-xl">Expédition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expédition rapide et fiable de vos produits vers vos clients,
                  partout en France.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 4: Gestion des retours */}
            <Card className="bg-gradient-to-br from-blue-50/50 to-green-100/30 dark:from-blue-900/10 dark:to-green-800/5 border-blue-200/50 dark:border-green-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <CardTitle className="text-xl">Gestion des retours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gestion efficace de vos retours pour une expérience client
                  sans souci.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 5: Suivi personnalisé */}
            <Card className="bg-gradient-to-br from-orange-50/50 to-blue-100/30 dark:from-orange-900/10 dark:to-blue-800/5 border-orange-200/50 dark:border-blue-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <Timer className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <CardTitle className="text-xl">Suivi personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un suivi personnalisé de vos expéditions pour une
                  tranquillité d'esprit totale.
                </p>
              </CardContent>
            </Card>

            {/* Service Card 6: Tarification transparente */}
            <Card className="bg-gradient-to-br from-green-50/50 to-orange-100/30 dark:from-green-900/10 dark:to-orange-800/5 border-green-200/50 dark:border-orange-700/30">
              <CardHeader className="pb-2 flex flex-row items-center space-y-0">
                <PiggyBank className="h-5 w-5 text-orange-500 dark:text-orange-400 mr-2" />
                <CardTitle className="text-xl">Tarification transparente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Une tarification claire et sans surprise pour une gestion
                  budgétaire maîtrisée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à optimiser votre logistique e-commerce ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et
            obtenir un devis personnalisé.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white"
            asChild
          >
            <Link to="/contact">Demander un Devis Personnalisé</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
