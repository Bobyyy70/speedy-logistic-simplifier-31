
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
        {/* Background mesh gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white/90 to-white/80 dark:from-slate-950 dark:via-slate-900/90 dark:to-slate-900/80"></div>
        
        {/* Top left blue blob */}
        <div className="absolute -top-20 -left-20 w-2/3 h-2/3 bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Bottom right blue blob */}
        <div className="absolute -bottom-20 -right-20 w-2/3 h-2/3 bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Top right green blob */}
        <div className="absolute -top-20 -right-20 w-2/3 h-2/3 bg-green-500/20 dark:bg-green-700/20 rounded-full blur-3xl"></div>
        
        {/* Bottom left green blob */}
        <div className="absolute -bottom-20 -left-20 w-2/3 h-2/3 bg-green-500/20 dark:bg-green-700/20 rounded-full blur-3xl"></div>
        
        {/* Extra subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
