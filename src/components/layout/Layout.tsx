
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
      <div className="fixed inset-0 -z-10">
        {/* Top Left Quadrant - Blue */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100 via-blue-50/90 to-white/95 dark:from-slate-900 dark:via-slate-800/90 dark:to-white/5" />
        
        {/* Top Right Quadrant - Green */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-green-200 via-green-50/90 to-white/95 dark:from-green-800 dark:via-green-900/90 dark:to-white/5" />
        
        {/* Bottom Left Quadrant - Green */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-200 via-green-50/90 to-white/95 dark:from-green-800 dark:via-green-900/90 dark:to-white/5" />
        
        {/* Bottom Right Quadrant - Blue */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-100 via-blue-50/90 to-white/95 dark:from-slate-900 dark:via-slate-800/90 dark:to-white/5" />
        
        {/* Center Cross - Vertical */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/80 to-white/0 dark:from-white/0 dark:via-white/10 dark:to-white/0" />
        
        {/* Center Cross - Horizontal */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/0 via-white/80 to-white/0 dark:from-white/0 dark:via-white/10 dark:to-white/0" />
      </div>

      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
