import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet-async";
import { SecurityHeaders } from "@/components/security/SecurityHeaders";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll vers le haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SecurityHeaders />
      <div className="min-h-screen bg-background">
        <Helmet>
          <html lang="fr" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="canonical" href="https://speedelog.fr" />
          <meta name="format-detection" content="telephone=yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
