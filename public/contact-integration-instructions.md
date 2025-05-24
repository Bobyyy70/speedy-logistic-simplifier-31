
# Instructions d'intégration HubSpot pour Speed E-Log

## Page de contact standalone créée

La page `contact-hubspot-standalone.html` a été créée et reproduit exactement le design de la page React originale, avec les modifications suivantes :

### ✅ Fonctionnalités implémentées :

1. **Design identique** : Même layout, couleurs, animations CSS (reproduisant Framer Motion)
2. **Header/Footer identiques** : Navigation complète reproduite en HTML/CSS
3. **Formulaires HubSpot** : Emplacements prêts pour vos formulaires
4. **Widget Google Calendar** : Bouton de réservation connecté à HubSpot
5. **Google Maps** : Carte de localisation de Port-sur-Saône
6. **Animations CSS** : Effets de fade-in, animations de lettres, effets néon

### 🔧 À configurer dans HubSpot :

1. **Remplacez les valeurs dans le script** :
   ```javascript
   portalId: "YOUR_PORTAL_ID", // Votre Portal ID HubSpot
   formId: "YOUR_CONTACT_FORM_ID", // ID du formulaire principal
   formId: "YOUR_SAV_FORM_ID", // ID du formulaire SAV
   ```

2. **URL de réservation Google Calendar** :
   ```javascript
   window.open('YOUR_HUBSPOT_BOOKING_URL', '_blank');
   ```

### 📁 Fichiers sauvegardés :

Tous les composants React originaux ont été sauvegardés dans :
- `src/components/contact-backup/`

### 🚀 Déploiement :

1. **Importez le fichier** `contact-hubspot-standalone.html` dans HubSpot
2. **Configurez vos identifiants** HubSpot dans le script
3. **Testez les formulaires** avec de vraies données
4. **Vérifiez** que les workflows automatiques fonctionnent

### 🔄 Redirection automatique :

La route `/contact` de votre site React redirige maintenant automatiquement vers la page HTML standalone, garantissant une expérience utilisateur fluide.

### ✨ Avantages :

- ✅ **100% compatible HubSpot** (HTML/CSS/JS vanilla)
- ✅ **Design exactement identique** à l'original
- ✅ **Formulaires directement connectés** au CRM
- ✅ **Navigation cohérente** avec le reste du site
- ✅ **Performances optimales** (pas de framework lourd)
- ✅ **SEO friendly** (HTML sémantique)

La page est maintenant prête à être intégrée dans votre environnement HubSpot !
