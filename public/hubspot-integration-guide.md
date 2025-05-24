
# Guide d'intégration HubSpot pour la page Contact

## Configuration requise

### 1. Identifiants HubSpot à remplacer dans `contact-hubspot.html`

- `YOUR_PORTAL_ID` : Votre Portal ID HubSpot
- `YOUR_CONTACT_FORM_ID` : ID du formulaire de contact/devis
- `YOUR_SAV_FORM_ID` : ID du formulaire SAV
- `YOUR_HUBSPOT_BOOKING_URL` : URL de votre page de réservation HubSpot

### 2. Création des formulaires dans HubSpot

#### Formulaire principal de contact/devis
Créez un formulaire avec les champs suivants :
- Prénom (firstName)
- Nom (lastName)
- Email (email)
- Téléphone (phone)
- Nom de l'entreprise (companyName)
- État de l'entreprise (companyStatus) - Radio buttons
- Ville (city)
- Code postal (postalCode)
- Site Web (website) - optionnel
- Comment nous avez-vous connu (leadSource) - Menu déroulant
- Valeur moyenne du panier (averageBasket)
- Type d'articles (productType) - Menu déroulant
- Nombre de commandes/an (annualOrders)
- Nombre de références à stocker (stockReferences)
- Message (message) - optionnel

#### Formulaire SAV
Créez un formulaire avec les champs suivants :
- Nom complet (fullName)
- Email (email)
- Numéro de commande (orderNumber)
- Téléphone (phone) - optionnel
- Date d'achat (purchaseDate)
- Référence produit (productReference)
- Catégorie du problème (issueCategory) - Menu déroulant
- Description du problème (description) - Zone de texte
- Méthode de contact préférée (preferredContact) - Radio buttons
- Meilleur moment pour contacter (bestTimeToContact) - Menu déroulant

### 3. Configuration Google Calendar

Pour remplacer Cal.com par l'intégration Google Calendar de HubSpot :

1. **Dans HubSpot** :
   - Allez dans Marketing > Lead Capture > Meetings
   - Créez un nouveau lien de réservation
   - Configurez votre calendrier Google
   - Définissez la durée (15 minutes)
   - Personnalisez les créneaux disponibles

2. **Intégration sur la page** :
   - Remplacez `YOUR_HUBSPOT_BOOKING_URL` par l'URL de votre page de réservation
   - Ou utilisez le widget HubSpot intégré si disponible

### 4. Avantages de l'intégration HubSpot vs Cal.com

#### Avec HubSpot :
- ✅ Synchronisation automatique avec le CRM
- ✅ Lead scoring automatique
- ✅ Workflows d'automatisation
- ✅ Suivi unifié des interactions
- ✅ Reporting intégré
- ✅ Segmentation avancée des contacts

#### Avec Cal.com :
- ❌ Intégration manuelle nécessaire
- ❌ Données dispersées
- ❌ Pas de lead scoring natif
- ❌ Workflows limités

### 5. Déploiement

1. **Téléchargez le fichier** `contact-hubspot.html`
2. **Remplacez les identifiants** HubSpot
3. **Créez les formulaires** dans HubSpot
4. **Configurez Google Calendar** dans HubSpot
5. **Testez l'intégration** complète
6. **Déployez** sur votre domaine ou hébergez dans HubSpot

### 6. Suivi et optimisation

- Configurez les workflows d'email automatique
- Mettez en place le lead scoring
- Créez des listes dynamiques basées sur les réponses
- Configurez les notifications pour l'équipe commerciale
- Analysez les taux de conversion avec HubSpot Analytics

## Design préservé

Cette version HTML/CSS/JS vanilla maintient exactement le même design que la version React :
- ✅ Même layout et couleurs
- ✅ Animations CSS équivalentes aux animations Framer Motion
- ✅ Google Maps intégrée
- ✅ Design responsive identique
- ✅ Styling des cartes et boutons préservé
