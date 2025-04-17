import React from "react";
export function LogisticsFeatureSection() {
  return <div className="py-16 bg-gradient-to-r from-blue-50 to-white bg-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-slate-900 shadow-xl rounded-lg p-6">
                <div className="aspect-video bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-green-950 rounded-md mb-4 flex items-center justify-center overflow-hidden">
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
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Stockage sécurisé adapté à vos produits</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Préparation rapide des commandes</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Gestion proactive des retours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}