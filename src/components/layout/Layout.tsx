
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
        {/* Base background gradient - radial from white center */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white/95 to-white/90 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-900/90"></div>
        
        {/* Main blue gradient that covers top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-speedelog-600/30 via-transparent to-speedelog-600/30 dark:from-speedelog-700/30 dark:via-transparent dark:to-speedelog-700/30"></div>
        
        {/* Large blue blob at bottom */}
        <div className="absolute -bottom-[30%] left-0 right-0 w-full h-[80%] bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Large blue blob at top */}
        <div className="absolute -top-[30%] left-0 right-0 w-full h-[80%] bg-speedelog-600/30 dark:bg-speedelog-700/30 rounded-full blur-3xl"></div>
        
        {/* Subtle purple blob on right side */}
        <div className="absolute right-0 top-1/3 w-[50%] h-[40%] bg-purple-500/20 dark:bg-purple-700/20 rounded-full blur-3xl"></div>
        
        {/* Subtle green blobs for depth */}
        <div className="absolute left-0 top-1/4 w-[40%] h-[30%] bg-green-500/10 dark:bg-green-700/10 rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[30%] h-[30%] bg-green-500/10 dark:bg-green-700/10 rounded-full blur-3xl"></div>
        
        {/* Extra subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
