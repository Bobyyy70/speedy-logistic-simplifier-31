
import React from "react";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Truck } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', value: 450 },
  { month: 'Fév', value: 380 },
  { month: 'Mar', value: 520 },
  { month: 'Avr', value: 490 },
  { month: 'Mai', value: 540 },
  { month: 'Juin', value: 580 },
];

export function LogisticsPerformanceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-100 via-white to-blue-200 dark:from-green-950 dark:via-slate-900 dark:to-blue-900">
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
          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-100/20">
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

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-100/20">
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
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-100/20">
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
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-100/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2.5 rounded-lg">
                <Truck className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <CardTitle className="text-lg">Livraison Europe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">48-72h</p>
              <p className="text-sm text-muted-foreground">
                Délai moyen de livraison en Europe
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Notre Technologie</h3>
            <div className="space-y-4">
              <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-orange-100/20">
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
          <div className="h-[300px] w-full">
            <ChartContainer className="h-full" config={{}}>
              <AreaChart data={performanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#f97316" 
                  fill="url(#colorValue)" 
                />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

