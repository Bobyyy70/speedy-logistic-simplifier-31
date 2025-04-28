
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  return <div className="flex flex-col min-h-screen">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0074E4" />
        <link rel="canonical" href="https://speedelog.fr" />
      </Helmet>

      {/* Gradient Background Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient - Dark at bottom, light at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-speedelog-800/90 via-speedelog-600/70 via-speedelog-400/50 to-speedelog-100/30 dark:from-speedelog-900/95 dark:via-speedelog-700/70 dark:via-speedelog-500/50 dark:to-speedelog-300/30"></div>
        
        {/* Complementary green gradient - Offset to create movement */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 via-green-600/70 via-green-400/50 to-green-100/30 dark:from-green-900/95 dark:via-green-700/70 dark:via-green-500/50 dark:to-green-300/30 mix-blend-overlay"></div>
        
        {/* Left side blue flow effect */}
        <div className="absolute left-0 bottom-0 h-full w-2/3 bg-gradient-to-tr from-speedelog-700/80 via-speedelog-500/50 to-transparent"></div>
        
        {/* Right side green flow effect */}
        <div className="absolute right-0 bottom-0 h-full w-2/3 bg-gradient-to-tl from-green-700/80 via-green-500/50 to-transparent"></div>
        
        {/* Moving blue from left to right in middle section */}
        <div className="absolute left-0 top-1/3 h-1/3 w-full bg-gradient-to-r from-speedelog-600/30 via-speedelog-400/40 to-transparent"></div>
        
        {/* Moving green from right to left in upper section */}
        <div className="absolute right-0 top-1/4 h-1/4 w-full bg-gradient-to-l from-green-600/30 via-green-400/40 to-transparent"></div>
        
        {/* Lower region intensity boost for darker bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-speedelog-900/70 via-speedelog-800/40 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-green-900/70 via-green-800/40 to-transparent mix-blend-multiply"></div>
        
        {/* Diagonal blend creating movement */}
        <div className="absolute inset-0 bg-gradient-to-br from-speedelog-600/40 via-transparent to-green-600/40"></div>
        
        {/* Upper left blue blob - creates depth and movement */}
        <div className="absolute top-0 left-0 w-1/2 h-1/3 bg-speedelog-400/30 dark:bg-speedelog-600/40 rounded-full blur-3xl"></div>
        
        {/* Bottom right green blob - creates depth and movement */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-green-500/40 dark:bg-green-700/50 rounded-full blur-3xl"></div>
        
        {/* Bottom left blue blob - stronger intensity at bottom */}
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-speedelog-700/50 dark:bg-speedelog-900/60 rounded-full blur-3xl"></div>
        
        {/* Upper right green blob - lighter intensity at top */}
        <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-green-300/30 dark:bg-green-600/40 rounded-full blur-3xl"></div>
        
        {/* Middle transition blob - creates swirling effect */}
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Additional depth for bottom area */}
        <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-speedelog-900/50 via-speedelog-800/30 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-green-900/50 via-green-800/30 to-transparent mix-blend-multiply"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.03] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
