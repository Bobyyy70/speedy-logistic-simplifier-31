
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HomeLogoWithText } from "@/components/ui/LogoIcon";
import { WorldMap } from "@/components/ui/world-map/component";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-slate-900 py-12 md:py-24 lg:py-32 overflow-hidden xl:py-0 rounded-none mx-0">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-25 overflow-hidden">
        <WorldMap 
          dots={[
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: 40.7128, lng: -74.0060}}, // Paris - New York
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: -33.8688, lng: 151.2093}}, // Paris - Sydney
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: 35.6762, lng: 139.6503}}, // Paris - Tokyo
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: 55.7558, lng: 37.6173}}, // Paris - Moscow
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: -15.7975, lng: -47.8919}}, // Paris - Brazil
            {start: {lat: 48.8566, lng: 2.3522}, end: {lat: -1.2921, lng: 36.8219}} // Paris - Kenya
          ]} 
          lineColor="#F3BA2F" // Couleur orange secondaire
        />
      </div>
      
      <div className="container mx-auto relative z-10 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] gap-6 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left px-[25px]">
            <div className="mb-2">
              <HomeLogoWithText className="w-36 lg:self-start mx-auto lg:mx-0" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">
              La logistique E-commerce, <br />
              <span className="text-speedelog-500 dark:text-speedelog-400">sans les tracas</span>.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
              Externalisez votre logistique avec Speed E-Log.<br />
              Libérez votre temps, boostez votre croissance.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start px-[4px]">
              <Button asChild size="lg" className="bg-speedelog-500 hover:bg-speedelog-600 text-white">
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
                  <AvatarImage alt="Logo HEFA Group" className="p-1 object-cover" src="/lovable-uploads/44a63774-38e6-47c0-bddf-56c2d10f5e6c.png" />
                  <AvatarFallback>HG</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-8 w-8 border-2 border-white">
                  <AvatarImage alt="Logo THOMAS" className="p-1 object-cover" src="/lovable-uploads/95fcf84f-8ddc-4c7d-9f92-d3790f0586eb.png" />
                  <AvatarFallback>TH</AvatarFallback>
                </Avatar>
                <Avatar className="inline-block h-8 w-8 border-2 border-white">
                  <AvatarImage alt="Logo Heatzy" className="p-1 object-cover" src="/lovable-uploads/f35f65b6-a18b-454c-bc6c-0deebc8ed6e6.png" />
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
            <div className="absolute -inset-1 bg-gradient-to-r from-speedelog-500 to-orange-500 rounded-lg blur opacity-20"></div>
            <div className="relative bg-white dark:bg-slate-900 shadow-xl p-6 backdrop-blur-sm border border-gray-100 dark:border-slate-800 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Speed E-Log vous accompagne dans la gestion complète de votre e-commerce.</h3>
              <p className="text-muted-foreground">Notre expertise logistique garantit une optimisation maximale de votre chaîne d'approvisionnement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
