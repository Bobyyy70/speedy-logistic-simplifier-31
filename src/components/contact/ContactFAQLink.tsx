
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const ContactFAQLink = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-xl font-semibold mb-4">Vous avez d'autres questions ?</h2>
      <p className="mb-6">Consultez notre <Link to="/faq" className="text-primary hover:underline">FAQ</Link> ou contactez-nous directement.</p>
      <Button asChild>
        <Link to="/services">Découvrir nos services</Link>
      </Button>
    </div>
  );
};
