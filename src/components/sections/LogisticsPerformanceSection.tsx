import React from "react";
import { Shield, Clock, Truck, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LogisticsPerformanceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-orange-100/10 dark:bg-orange-900/10" />
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Performance & Technologie
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
            Notre engagement envers l'excellence opérationnelle, soutenu par des technologies de pointe
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <Card className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg">
                <Shield className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <CardTitle className="text-lg">Précision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">99.85%</p>
              <p className="text-sm text-muted-foreground">
                Taux de précision sur plus de 2000 colis
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <CardTitle className="text-lg">Délai</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24h</p>
              <p className="text-sm text-muted-foreground">
                Traitement moyen des commandes
                <br />
                <span className="text-xs italic">* peut varier pendant les périodes de forte activité</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg">
                <Truck className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <CardTitle className="text-lg">Livraison France</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24-48h</p>
              <p className="text-sm text-muted-foreground">
                Délai moyen de livraison en France
                <br />
                <span className="text-xs italic">* Europe sous 48-72h</span>
                <br />
                <span className="text-xs italic">* peut varier pendant les périodes de forte activité</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg">
                <MessageCircle className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <CardTitle className="text-lg">Service Client</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2h</p>
              <p className="text-sm text-muted-foreground">
                Temps de réponse moyen
                <br />
                <span className="text-xs italic">* durant les horaires de travail. Chatbot disponible 24/7</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Notre Technologie</h3>
            <div className="space-y-4">
              <Card className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Supplyos - Notre Partenaire Technologique</h4>
                  <p className="text-muted-foreground mb-4">
                    Une suite logicielle intégrée et moderne combinant :
                  </p>
                  <ul className="space-y-2 list-disc pl-4 text-muted-foreground">
                    <li>WMS (Warehouse Management System) pour une gestion optimale des stocks</li>
                    <li>TMS (Transport Management System) pour le suivi des expéditions</li>
                    <li>OMS (Order Management System) pour le traitement des commandes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="h-[500px] w-full flex items-center justify-center relative">
            <div className="absolute -inset-4 bg-orange-100/5 dark:bg-orange-900/5 blur-xl rounded-full" />
            <img
              src="/lovable-uploads/849b9842-3d40-446c-b967-2453cdbea69e.png"
              alt="SupplyOS Logo"
              className="w-[500px] aspect-[2/1] object-contain relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-orange-100/20 dark:bg-orange-900/20" />
    </section>
  );
}
