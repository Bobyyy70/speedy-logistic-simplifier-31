
import React from "react";
import { Check } from "lucide-react";

export function LogisticsFeatureSection() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-200 via-white to-blue-100 dark:from-green-800 dark:via-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-white via-white to-white/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/80 shadow-xl rounded-lg p-6">
                <div className="aspect-video bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                  <img alt="Logistique Speed E-Log" className="w-full h-full object-cover" src="/lovable-uploads/2e66f51f-45f3-4ba7-b497-e45a56dad2f7.png" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Une logistique moderne et efficace</h3>
                <p className="text-muted-foreground">
                  Notre infrastructure technologique évolue constamment pour vous offrir le meilleur service possible.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Infrastructure Optimisée</h2>
            <p className="text-muted-foreground text-lg">
              Notre entrepôt est spécialement conçu pour traiter efficacement les commandes e-commerce. 
              Avec des processus optimisés et une technologie de pointe, nous garantissons rapidité et précision.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-1 mr-2 mt-1">
                  <Check className="h-4 w-4 text-orange-600 dark:text-orange-500" />
                </div>
                <span>Stockage sécurisé adapté à vos produits</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-1 mr-2 mt-1">
                  <Check className="h-4 w-4 text-orange-600 dark:text-orange-500" />
                </div>
                <span>Préparation rapide des commandes</span>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-full p-1 mr-2 mt-1">
                  <Check className="h-4 w-4 text-orange-600 dark:text-orange-500" />
                </div>
                <span>Gestion proactive des retours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
