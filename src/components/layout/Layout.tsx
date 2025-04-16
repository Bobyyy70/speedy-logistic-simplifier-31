
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
  return <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-200 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-800">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0074E4" />
        <link rel="canonical" href="https://speedelog.fr" />
      </Helmet>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>;
};
