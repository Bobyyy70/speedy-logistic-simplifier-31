
# Instructions de Migration vers speedelog.net

## Vue d'ensemble
Cette migration prépare le site Speed E-Log pour être hébergé sur Cloudflare avec le domaine speedelog.net.

## Fichiers préparés pour Cloudflare

### 1. Fichiers HTML autonomes (Cloudflare-ready)
- `contact-hubspot-cloudflare.html` - Page de contact principale avec URLs absolues
- `header-shell-cloudflare.html` - Header avec navigation et URLs mises à jour
- `menu-contact-cloudflare.html` - Menu de navigation avec liens absolus
- `footer-shell-cloudflare.html` - Footer avec liens et images mis à jour

### 2. Modifications effectuées

#### URLs et liens mis à jour :
- Tous les liens relatifs (`/`) remplacés par des URLs absolues (`https://speedelog.net/`)
- Logo : `https://speedelog.net/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png`
- Navigation : tous les liens pointent vers speedelog.net
- Email de contact : `contact@speedelog.net`

#### Iframes mis à jour :
```html
<!-- Header -->
<iframe src="https://speedelog.net/header-shell.html">

<!-- Footer -->
<iframe src="https://speedelog.net/footer-shell.html">

<!-- Menu dans le header -->
<iframe src="https://speedelog.net/menu-contact.html">
```

## Étapes de migration

### 1. Préparation du domaine
- [ ] Configurer speedelog.net sur Cloudflare
- [ ] Pointer le DNS vers les serveurs Cloudflare
- [ ] Configurer les certificats SSL

### 2. Upload des fichiers
- [ ] Uploader tous les fichiers `-cloudflare.html` sur speedelog.net
- [ ] Renommer les fichiers (retirer le suffixe `-cloudflare`) :
  - `contact-hubspot-cloudflare.html` → `contact-hubspot.html`
  - `header-shell-cloudflare.html` → `header-shell.html`
  - `menu-contact-cloudflare.html` → `menu-contact.html`
  - `footer-shell-cloudflare.html` → `footer-shell.html`

### 3. Upload des assets
- [ ] Uploader le dossier `/lovable-uploads/` avec toutes les images
- [ ] Vérifier que le logo est accessible : `https://speedelog.net/lovable-uploads/5c1b4538-57b0-4f38-af9e-dda22195de74.png`

### 4. Site principal React
- [ ] Builder le site principal React (npm run build)
- [ ] Uploader les fichiers buildés sur speedelog.net
- [ ] Configurer les redirections pour les routes React

### 5. Tests post-migration
- [ ] Vérifier que `https://speedelog.net/contact-hubspot.html` s'affiche correctement
- [ ] Tester les iframes (header, footer, menu)
- [ ] Vérifier tous les liens de navigation
- [ ] Tester l'affichage sur mobile et desktop
- [ ] Vérifier que les images se chargent correctement

### 6. Integration HubSpot
- [ ] Dans HubSpot, créer une nouvelle page
- [ ] Copier le contenu de `contact-hubspot.html`
- [ ] Remplacer les placeholders par les modules HubSpot :
  - Formulaire de contact principal
  - Module de planification de rendez-vous
  - Formulaire SAV

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
1. Les URLs des iframes sont correctes et accessibles
2. Les permissions CORS si nécessaire
3. Les certificats SSL sont valides
4. Les DNS pointent correctement vers Cloudflare
