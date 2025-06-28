
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Building, DollarSign, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CalendarSection = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    secteur: '',
    besoins: '',
    budget: '',
    email: '',
    telephone: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📋 Données de pré-qualification:', formData);
    
    // Store form data in localStorage for HubSpot integration
    localStorage.setItem('prequalification_data', JSON.stringify(formData));
    
    // Show the calendar
    setShowCalendar(true);
    
    // Scroll to calendar
    setTimeout(() => {
      const calendarEl = document.querySelector('[data-calendar-embed]');
      if (calendarEl) {
        calendarEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.nom && formData.entreprise && formData.email && formData.besoins;

  return (
    <motion.section 
      className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      data-calendar-section
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 flex items-center justify-center gap-3">
          <Calendar className="h-8 w-8 text-blue-600" />
          Planifiez votre rendez-vous
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {!showCalendar 
            ? "Aidez-nous à mieux préparer votre consultation en complétant ce court formulaire."
            : "Choisissez votre créneau de 15 minutes pour discuter de votre projet logistique."
          }
        </p>
      </div>

      {!showCalendar ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl text-center flex items-center justify-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              Parlez-nous de votre projet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Nom complet *
                  </label>
                  <Input
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Entreprise *
                  </label>
                  <Input
                    value={formData.entreprise}
                    onChange={(e) => handleInputChange('entreprise', e.target.value)}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Téléphone</label>
                  <Input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => handleInputChange('telephone', e.target.value)}
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Secteur d'activité</label>
                <Select value={formData.secteur} onValueChange={(value) => handleInputChange('secteur', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre secteur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="retail">Retail / Distribution</SelectItem>
                    <SelectItem value="mode">Mode / Textile</SelectItem>
                    <SelectItem value="cosmetique">Cosmétique / Beauté</SelectItem>
                    <SelectItem value="alimentaire">Alimentaire</SelectItem>
                    <SelectItem value="electronique">Électronique</SelectItem>
                    <SelectItem value="sport">Sport / Loisirs</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  Budget mensuel logistique
                </label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estimation de votre budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moins-1000">Moins de 1 000€/mois</SelectItem>
                    <SelectItem value="1000-3000">1 000€ - 3 000€/mois</SelectItem>
                    <SelectItem value="3000-5000">3 000€ - 5 000€/mois</SelectItem>
                    <SelectItem value="5000-10000">5 000€ - 10 000€/mois</SelectItem>
                    <SelectItem value="plus-10000">Plus de 10 000€/mois</SelectItem>
                    <SelectItem value="non-defini">Non défini</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Décrivez vos besoins *</label>
                <Textarea
                  value={formData.besoins}
                  onChange={(e) => handleInputChange('besoins', e.target.value)}
                  placeholder="Quels sont vos défis logistiques actuels ? Que cherchez-vous à améliorer ?"
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                disabled={!isFormValid}
              >
                Accéder au calendrier
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-green-800 font-medium">
              ✅ Merci {formData.nom} ! Nous avons bien reçu vos informations.
            </p>
            <p className="text-green-700 text-sm mt-1">
              Choisissez maintenant votre créneau de rendez-vous.
            </p>
          </div>
          
          <div className="min-h-[650px] border border-slate-200 rounded-xl overflow-hidden bg-white" data-calendar-embed>
            {/* Calendrier HubSpot avec données pré-remplies */}
            <div className="meetings-iframe-container w-full h-full min-h-[650px]" data-src="https://meetings-eu1.hubspot.com/falmanzo?embed=true"></div>
          </div>
        </div>
      )}
    </motion.section>
  );
};
