
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
        {/* Background radial gradient - white in center */}
        <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900/90 dark:to-transparent"></div>
        
        {/* Left blue gradient - using speedelog-400/40 instead of speedelog-600/30 */}
        <div className="absolute left-0 inset-y-0 w-2/3 bg-gradient-to-r from-speedelog-400/40 to-transparent"></div>
        
        {/* Right blue gradient - using speedelog-400/40 */}
        <div className="absolute right-0 inset-y-0 w-2/3 bg-gradient-to-l from-speedelog-400/40 to-transparent"></div>
        
        {/* Diagonal blue gradient - top left to bottom right */}
        <div className="absolute h-full w-full bg-gradient-to-br from-speedelog-400/30 via-transparent to-transparent"></div>
        
        {/* Diagonal blue gradient - bottom left to top right */}
        <div className="absolute h-full w-full bg-gradient-to-tr from-transparent via-transparent to-speedelog-400/30"></div>
        
        {/* Top left green blob */}
        <div className="absolute -top-20 -left-20 w-2/3 h-2/3 bg-green-500/20 dark:bg-green-700/20 rounded-full blur-3xl"></div>
        
        {/* Bottom right green blob */}
        <div className="absolute -bottom-20 -right-20 w-2/3 h-2/3 bg-green-500/20 dark:bg-green-700/20 rounded-full blur-3xl"></div>

        {/* Additional diagonal blue blob */}
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-speedelog-400/20 rounded-full blur-3xl"></div>
        
        {/* Additional vertical blue blob */}
        <div className="absolute bottom-1/3 left-1/4 w-1/2 h-1/2 bg-speedelog-400/20 rounded-full blur-3xl"></div>
        
        {/* Extra subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.02] bg-repeat mix-blend-overlay"></div>
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
