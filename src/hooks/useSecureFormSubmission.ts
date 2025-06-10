
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { sanitizeInput, isValidEmail, isValidName, isValidPhoneNumber } from '@/lib/security';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  companyName?: string;
  message?: string;
}

interface SubmissionResult {
  success: boolean;
  error?: string;
  id?: string;
}

export const useSecureFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateContactForm = (data: ContactFormData): string | null => {
    // Validation du prénom
    if (!isValidName(data.firstName)) {
      return "Le prénom doit contenir entre 2 et 50 caractères et ne contenir que des lettres.";
    }

    // Validation du nom
    if (!isValidName(data.lastName)) {
      return "Le nom doit contenir entre 2 et 50 caractères et ne contenir que des lettres.";
    }

    // Validation de l'email
    if (!isValidEmail(data.email)) {
      return "Veuillez entrer une adresse email valide.";
    }

    // Validation du téléphone (optionnel)
    if (data.phone && !isValidPhoneNumber(data.phone)) {
      return "Veuillez entrer un numéro de téléphone français valide.";
    }

    return null;
  };

  const submitContactForm = async (data: ContactFormData): Promise<SubmissionResult> => {
    setIsSubmitting(true);
    
    try {
      // Validation des données
      const validationError = validateContactForm(data);
      if (validationError) {
        return { success: false, error: validationError };
      }

      // Sanitisation des données
      const sanitizedData = {
        first_name: sanitizeInput(data.firstName),
        last_name: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        phone: data.phone ? sanitizeInput(data.phone) : null,
        company_name: data.companyName ? sanitizeInput(data.companyName) : null,
        message: data.message ? sanitizeInput(data.message) : null,
        created_at: new Date().toISOString(),
      };

      // Insertion directe dans la table contact_submissions
      const { data: result, error } = await supabase
        .from('contact_submissions')
        .insert([sanitizedData])
        .select('id')
        .single();

      if (error) {
        console.error('Supabase error:', error);
        return { success: false, error: "Erreur lors de l'envoi du formulaire." };
      }

      return { 
        success: true, 
        id: result?.id,
        error: undefined 
      };
    } catch (error) {
      console.error('Submission error:', error);
      return { success: false, error: "Une erreur inattendue s'est produite." };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitContactForm,
    isSubmitting,
  };
};
