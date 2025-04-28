
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
        {/* Main vertical gradient - dark at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-speedelog-600/80 via-speedelog-400/50 to-speedelog-200/40 dark:from-speedelog-900/90 dark:via-speedelog-700/60 dark:to-speedelog-500/40"></div>
        
        {/* Complementary green gradient - dark at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 via-green-400/50 to-green-200/40 dark:from-green-900/90 dark:via-green-700/60 dark:to-green-500/40 mix-blend-overlay"></div>
        
        {/* Background radial gradient - white only in center, reduced size */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent scale-75 opacity-60"></div>
        
        {/* Vertical blend: Left blue gradient */}
        <div className="absolute left-0 inset-y-0 w-1/2 bg-gradient-to-r from-speedelog-500/70 via-speedelog-400/50 to-transparent"></div>
        
        {/* Vertical blend: Right green gradient */}
        <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-green-600/70 via-green-400/50 to-transparent"></div>
        
        {/* Diagonal blend: blue to green */}
        <div className="absolute h-full w-full bg-gradient-to-br from-speedelog-500/60 via-white/20 to-green-600/60"></div>
        
        {/* Upper left blue blob - larger and darker at bottom */}
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-speedelog-600/40 dark:bg-speedelog-800/50 rounded-full blur-3xl"></div>
        
        {/* Bottom right green blob - larger and darker */}
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-green-600/50 dark:bg-green-800/50 rounded-full blur-3xl"></div>
        
        {/* Upper region blue blob - lighter */}
        <div className="absolute top-0 left-10 w-1/2 h-1/2 bg-speedelog-300/30 dark:bg-speedelog-600/40 rounded-full blur-3xl"></div>
        
        {/* Upper region green blob - lighter */}
        <div className="absolute top-0 right-10 w-1/2 h-1/2 bg-green-300/30 dark:bg-green-600/30 rounded-full blur-3xl"></div>
        
        {/* Middle transition blob */}
        <div className="absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-white/20 dark:bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Additional intensity for bottom area */}
        <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-speedelog-700/30 via-speedelog-600/20 to-transparent mix-blend-multiply"></div>
        <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-green-700/30 via-green-600/20 to-transparent mix-blend-multiply"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
