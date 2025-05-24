
import React, { useEffect } from "react";

const ContactStandalone = () => {
  useEffect(() => {
    // Redirection immédiate vers la page HTML standalone
    window.location.href = "/contact-hubspot-standalone.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirection vers la page de contact...</p>
      </div>
    </div>
  );
};

export default ContactStandalone;
