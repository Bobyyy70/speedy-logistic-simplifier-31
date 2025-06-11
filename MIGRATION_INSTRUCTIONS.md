
# Instructions de Migration vers speedelog.net

## Vue d'ensemble
Cette migration prépare le site Speed E-Log pour être hébergé sur Cloudflare avec le domaine speedelog.net.

## Étapes de migration

### 1. Préparation du domaine
- [ ] Configurer speedelog.net sur Cloudflare
- [ ] Pointer le DNS vers les serveurs Cloudflare
- [ ] Configurer les certificats SSL

### 2. Site principal React
- [ ] Builder le site principal React (npm run build)
- [ ] Uploader les fichiers buildés sur speedelog.net
- [ ] Configurer les redirections pour les routes React

### 3. Upload des assets
- [ ] Uploader le dossier `/lovable-uploads/` avec toutes les images
- [ ] Vérifier que le logo est accessible : `https://speedelog.net/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png`

### 4. Tests post-migration
- [ ] Vérifier que `https://speedelog.net` s'affiche correctement
- [ ] Tester toutes les pages (accueil, services, contact, etc.)
- [ ] Vérifier tous les liens de navigation
- [ ] Tester l'affichage sur mobile et desktop
- [ ] Vérifier que les images se chargent correctement

### 5. Integration HubSpot
- [ ] Vérifier le fonctionnement des formulaires de contact
- [ ] Tester le calendrier de rendez-vous
- [ ] Vérifier le formulaire SAV
- [ ] Contrôler le chat HubSpot

## Points d'attention

### Configuration Cloudflare
- Activer la compression et la minification
- Configurer le cache pour les assets statiques
- Vérifier les règles de sécurité (SSL/TLS)

### Sauvegardes
- Garder une copie des fichiers originaux
- Tester sur un sous-domaine avant la mise en production

### SEO
- Configurer les redirections 301 si nécessaire
- Mettre à jour le sitemap.xml
- Vérifier les balises meta et les URLs canoniques

## Support
En cas de problème, vérifier :
1. Les certificats SSL sont valides
2. Les DNS pointent correctement vers Cloudflare
3. Les intégrations HubSpot fonctionnent
4. Les formulaires React sont opérationnels
