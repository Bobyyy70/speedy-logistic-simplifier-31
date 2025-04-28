
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

      {/* Unified Gradient Background Container */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main radial gradient for white center */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white/95 to-transparent dark:from-slate-950 dark:via-slate-900/95 dark:to-transparent"></div>
        
        {/* Large top left blue blob - expanded */}
        <div className="absolute -top-[30%] -left-[30%] w-[120%] h-[120%] bg-speedelog-600/25 dark:bg-speedelog-700/25 rounded-full blur-[120px]"></div>
        
        {/* Large bottom right blue blob - expanded */}
        <div className="absolute -bottom-[30%] -right-[30%] w-[120%] h-[120%] bg-speedelog-600/25 dark:bg-speedelog-700/25 rounded-full blur-[120px]"></div>
        
        {/* Large right side purple blob - more visible */}
        <div className="absolute top-1/2 -right-[15%] -translate-y-1/2 w-2/3 h-[90%] bg-purple-500/20 dark:bg-purple-700/20 rounded-full blur-[100px]"></div>
        
        {/* Top right green blob - subtle */}
        <div className="absolute -top-[10%] right-1/4 w-2/3 h-2/3 bg-green-500/10 dark:bg-green-700/10 rounded-full blur-[90px]"></div>
        
        {/* Bottom left green blob - subtle */}
        <div className="absolute -bottom-[10%] left-1/4 w-2/3 h-2/3 bg-green-500/10 dark:bg-green-700/10 rounded-full blur-[90px]"></div>
        
        {/* Center white-blue accent to enhance the center brightness */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/30 dark:bg-slate-900/30 rounded-full blur-[100px]"></div>
        
        {/* Central blue tint - very subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-speedelog-200/10 dark:bg-speedelog-800/10 rounded-full blur-[60px]"></div>
        
        {/* Extra subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
