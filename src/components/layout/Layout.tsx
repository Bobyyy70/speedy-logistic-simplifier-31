
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
        
        {/* Top left blue blob */}
        <div className="absolute -top-40 -left-40 w-3/4 h-3/4 bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-[100px]"></div>
        
        {/* Bottom right blue blob */}
        <div className="absolute -bottom-40 -right-40 w-3/4 h-3/4 bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-[100px]"></div>
        
        {/* Right side purple blob */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-1/3 h-3/4 bg-purple-500/20 dark:bg-purple-700/20 rounded-full blur-[80px]"></div>
        
        {/* Top right green blob - smaller and more transparent */}
        <div className="absolute -top-20 right-1/3 w-1/2 h-1/2 bg-green-500/15 dark:bg-green-700/15 rounded-full blur-[60px]"></div>
        
        {/* Bottom left green blob - smaller and more transparent */}
        <div className="absolute -bottom-20 left-1/3 w-1/2 h-1/2 bg-green-500/15 dark:bg-green-700/15 rounded-full blur-[60px]"></div>
        
        {/* Center blue accent - very subtle to blend with white center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-speedelog-200/20 dark:bg-speedelog-800/10 rounded-full blur-[80px]"></div>
        
        {/* Extra subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
