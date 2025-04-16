
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/50">
      <Helmet>
        <title>404 - Page Non Trouvée | Speed E Log</title>
        <meta 
          name="description" 
          content="La page que vous recherchez n'existe pas. Revenez à l'accueil du site Speed E Log pour découvrir nos services de logistique e-commerce."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center bg-white/80 dark:bg-slate-800/70 p-12 rounded-lg shadow-sm border border-blue-100/70 dark:border-blue-900/30">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Cette page n'existe pas</p>
        <a href="/" className="text-primary hover:text-primary/90 underline">
          Retourner à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
