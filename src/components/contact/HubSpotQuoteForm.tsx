import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface HubSpotQuoteFormProps {
  onFormReady?: () => void;
}

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export const HubSpotQuoteForm: React.FC<HubSpotQuoteFormProps> = ({ onFormReady }) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitToHubSpot = async (data: FormData) => {
    const hubspotData = {
      portalId: '144571109',
      formId: 'ebf2ad52-915e-4bfa-b4c0-a2ff8480054f',
      fields: [
        { name: 'firstname', value: data.firstname },
        { name: 'lastname', value: data.lastname },
        { name: 'email', value: data.email },
        { name: 'company', value: data.company },
        { name: 'phone', value: data.phone },
        { name: 'message', value: data.message }
      ]
    };

    // Soumettre via l'API HubSpot Forms
    const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/144571109/ebf2ad52-915e-4bfa-b4c0-a2ff8480054f`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotData)
    });

    if (!response.ok) {
      throw new Error(`Erreur de soumission: ${response.status}`);
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstname || !formData.lastname || !formData.email) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await submitToHubSpot(formData);
      setIsSubmitted(true);
      console.log('Formulaire soumis avec succès à HubSpot');
    } catch (err) {
      console.error('Erreur lors de la soumission:', err);
      setError('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6">
        <div className="mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Demande envoyée avec succès !</h3>
          <p className="text-gray-600 mt-2">
            Nous avons bien reçu votre demande de devis. Notre équipe vous contactera sous 24h.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-1">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <div className="w-5 h-5 text-red-500 mt-0.5">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstname" className="text-sm font-medium text-gray-700">
            Prénom <span className="text-red-500">*</span>
          </Label>
          <Input
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastname" className="text-sm font-medium text-gray-700">
            Nom <span className="text-red-500">*</span>
          </Label>
          <Input
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          placeholder="votre@email.fr"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium text-gray-700">
            Entreprise
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Votre entreprise"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Téléphone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isSubmitting}
            className="h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
          Décrivez vos besoins logistiques
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          placeholder="Ex: Volume mensuel, types de produits, destinations, services souhaités..."
          disabled={isSubmitting}
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
        />
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full h-12 bg-[#2F68F3] hover:bg-[#2057E2] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Envoi en cours...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <span>Envoyer la demande de devis</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
      </p>
    </form>
  );
};