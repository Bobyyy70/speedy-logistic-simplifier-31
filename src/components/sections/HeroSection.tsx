
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { WorldMap } from "@/components/ui/world-map/component";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return <section className="relative site-background py-12 md:py-24 lg:py-32 overflow-hidden xl:py-0 rounded-none mx-0">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-25 overflow-hidden">
        <WorldMap dots={[{
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: 40.7128,
          lng: -74.0060
        } // New York
      }, {
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: -33.8688,
          lng: 151.2093
        } // Sydney
      }, {
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: 35.6762,
          lng: 139.6503
        } // Tokyo
      }, {
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: 55.7558,
          lng: 37.6173
        } // Moscow
      }, {
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: -15.7975,
          lng: -47.8919
        } // Brazil (Brasília)
      }, {
        start: {
          lat: 48.8566,
          lng: 2.3522
        },
        // Paris, France
        end: {
          lat: -1.2921,
          lng: 36.8219
        } // Nairobi, Kenya
      }]} lineColor="#FEC6A1" /* Soft orange color */ />
      </div>
      
      <div className="container mx-auto relative z-10 px-0">
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
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[4px]">
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
                <Avatar className="inline-block h-8 w-8 border-2 border-white">
                  <AvatarImage src="/lovable-uploads/95b27dc0-a84b-4b24-a5d0-c8c2a0d909c1.png" alt="Logo HEFA Group" className="object-contain p-1" />
                  <AvatarFallback>HG</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-8 w-8 border-2 border-white">
                  <AvatarImage src="/lovable-uploads/24c83f4f-ee17-4c4b-83dd-8c2eb376882a.png" alt="Logo THOMAS" className="object-contain p-1" />
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-8 w-8 border-2 border-white">
                  <AvatarImage src="/lovable-uploads/d1503c04-c44a-4c14-83dd-e67f034c9e5d.png" alt="Logo Heatzy" className="object-contain p-1" />
                  <AvatarFallback>HZ</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground">
                Déjà <span className="font-medium text-foreground">20+ PME</span> nous font confiance
              </p>
            </div>
          </div>
          
          {/* Visual Column */}
          <div className="lg:order-last relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-20"></div>
            <div className="relative bg-gradient-to-r from-blue-100 via-blue-50 to-blue-200 dark:from-slate-900 dark:via-slate-950 dark:to-blue-900 shadow-xl p-6 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 rounded">
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
