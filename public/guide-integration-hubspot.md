
# Guide d'intégration HubSpot pour Speed E-Log

## Étapes de configuration dans HubSpot

### 1. Création du formulaire principal de contact/devis

Dans HubSpot, allez dans **Marketing > Lead Capture > Forms** et créez un formulaire avec les champs suivants :

#### Champs obligatoires :
- **firstName** (Prénom) - Texte court
- **lastName** (Nom) - Texte court  
- **email** (Email) - Email
- **phone** (Téléphone) - Numéro de téléphone
- **companyName** (Nom de l'entreprise) - Texte court
- **city** (Ville) - Texte court
- **postalCode** (Code postal) - Texte court

#### Champs de segmentation :
- **companyStatus** (État de l'entreprise) - Radio buttons
  - Option 1: "En cours de création" (valeur: creation)
  - Option 2: "En activité" (valeur: active)

- **leadSource** (Comment nous avez-vous connu ?) - Menu déroulant
  - Réseaux sociaux
  - Moteur de recherche  
  - Recommandation
  - Autre

- **productType** (Type d'articles) - Menu déroulant
  - Cosmétiques
  - Mode et accessoires
  - Compléments alimentaires
  - Électronique
  - Décoration
  - Produits pour adultes
  - Autre

#### Champs business :
- **averageBasket** (Valeur moyenne du panier €) - Nombre
- **annualOrders** (Nombre de commandes/an) - Nombre
- **stockReferences** (Nombre de références à stocker) - Nombre
- **website** (Site Web) - URL (optionnel)
- **message** (Message) - Zone de texte multi-lignes (optionnel)

### 2. Création du formulaire SAV

Créez un second formulaire pour le Service Après-Vente avec :

#### Champs SAV :
- **fullName** (Nom complet) - Texte court
- **email** (Email) - Email
- **orderNumber** (Numéro de commande) - Texte court
- **phone** (Téléphone) - Numéro de téléphone (optionnel)
- **purchaseDate** (Date d'achat) - Date
- **productReference** (Référence produit) - Texte court
- **description** (Description du problème) - Zone de texte multi-lignes

- **issueCategory** (Catégorie du problème) - Menu déroulant
  - Produit défectueux
  - Pièces manquantes
  - Dommages pendant le transport
  - Demande de retour
  - Autre

- **preferredContact** (Méthode de contact préférée) - Radio buttons
  - Email
  - Téléphone

- **bestTimeToContact** (Meilleur moment pour contacter) - Menu déroulant
  - Matin (9h-12h)
  - Après-midi (14h-17h)
  - Fin de journée (17h-19h)

### 3. Configuration Google Calendar

1. Dans HubSpot, allez dans **Marketing > Lead Capture > Meetings**
2. Créez un nouveau lien de réservation
3. Connectez votre compte Google Calendar
4. Configurez :
   - Durée : 15 minutes
   - Titre : "Consultation logistique Speed E-Log"
   - Description : Discussion des besoins logistiques
   - Créneaux disponibles selon vos préférences

### 4. Intégration dans le fichier HTML

Une fois vos formulaires créés, récupérez les IDs et modifiez dans `contact-vanilla.html` :

```javascript
// Remplacez ces valeurs par vos vraies données HubSpot
portalId: "VOTRE_PORTAL_ID_HUBSPOT",
formId: "ID_FORMULAIRE_CONTACT", // Pour le formulaire principal
formId: "ID_FORMULAIRE_SAV", // Pour le formulaire SAV
```

Et pour Google Calendar :
```javascript
// Remplacez par l'URL de votre page de réservation HubSpot
window.open('VOTRE_URL_RESERVATION_HUBSPOT', '_blank');
```

### 5. Configuration des workflows automatiques (Recommandé)

#### Pour le formulaire principal :
- Email automatique de confirmation de réception
- Notification à l'équipe commerciale
- Lead scoring basé sur les réponses
- Ajout aux listes de prospection selon le type d'activité

#### Pour le formulaire SAV :
- Email automatique d'accusé de réception
- Création automatique d'un ticket de support
- Notification à l'équipe SAV
- Workflow de suivi selon la catégorie du problème

### 6. Avantages de cette intégration

✅ **Synchronisation CRM complète** : Tous les contacts sont automatiquement dans HubSpot
✅ **Lead scoring automatique** : Qualification automatique des prospects selon leurs réponses
✅ **Workflows d'nurturing** : Emails automatiques personnalisés selon le profil
✅ **Reporting unifié** : Tableau de bord centralisé des conversions
✅ **Segmentation avancée** : Création de listes dynamiques pour le marketing
✅ **Suivi des performances** : Analytics détaillés des formulaires et conversions

### 7. Test de l'intégration

1. Importez le fichier `contact-vanilla.html` dans HubSpot
2. Configurez vos identifiants dans le code
3. Testez les formulaires avec de vraies données
4. Vérifiez que les contacts apparaissent bien dans votre CRM
5. Testez les workflows automatiques

### 8. Mise en production

Une fois les tests validés, vous pouvez :
- Héberger la page dans HubSpot directement
- Ou l'intégrer sur votre site principal avec vos vrais identifiants HubSpot
