import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
export function HeroSection() {
  return <section className="bg-gradient-to-r from-blue-100 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-green-700 py-12 md:py-24 lg:py-32 overflow-hidden xl:py-0 rounded-none mx-0">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-[25px]">
            <div className="mb-2">
              <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">
              La logistique E-commerce, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-500 mx-0">sans les tracas</span>.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
              Externalisez votre logistique et concentrez-vous sereinement sur votre croissance. Speed E-Log simplifie vos expéditions.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[2px]">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                <Link to="/contact">
                  Obtenir un devis personnalisé <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  Découvrir nos services
                </Link>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white"></div>)}
              </div>
              <p className="text-sm text-muted-foreground">
                Déjà <span className="font-medium text-foreground">20+ PME</span> nous font confiance
              </p>
            </div>
          </div>
          
          {/* Visual Column */}
          <div className="lg:order-last relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-20"></div>
            <div className="relative bg-white dark:bg-slate-900 shadow-xl rounded-lg p-6">
              <div className="aspect-video lg:aspect-square bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-green-950 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img alt="Logistique Speed E-Log" className="w-full h-full object-cover" src="/lovable-uploads/2e66f51f-45f3-4ba7-b497-e45a56dad2f7.png" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Une logistique moderne et efficace</h3>
              <p className="text-muted-foreground">
                Notre infrastructure technologique évolue constamment pour vous offrir le meilleur service possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}