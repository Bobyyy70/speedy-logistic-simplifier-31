# Speed E-Log - Guide de Déploiement

## Vue d'ensemble

Site web Speed E-Log déployé sur **Cloudflare Workers** avec le domaine speedelog.net.

**Dernière mise à jour :** 14 juillet 2025 - Force deploy

## 🚀 Déploiement Automatique

### Prérequis

- Repository GitHub connecté à Cloudflare Workers
- Node.js v20+ configuré dans `.nvmrc`
- Configuration Cloudflare avec npm (pas bun)
- Wrangler configuré pour le déploiement

### Étapes pour déployer une nouvelle version

1. **Faire vos modifications localement**

   ```bash
   # Développement local
   npm install
   npm run dev
   ```

2. **Tester le build localement**

   ```bash
   npm run build
   ```

3. **Committer et pousser les changements**

   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```

4. **Le déploiement se fait automatiquement** ⏳

   - Cloudflare détecte le push GitHub
   - Build automatique avec `npm run build`
   - Déploiement via `npx wrangler deploy`
   - Attendre 3-5 minutes pour la propagation

## 🔧 Configuration Cloudflare Workers

### Paramètres de Build

- **Commande de build :** `npm install && npm run build`
- **Commande de déploiement :** `npx wrangler deploy`
- **Répertoire de sortie :** `dist`
- **Version Node.js :** `20.10.0` (via `.nvmrc`)
- **Gestionnaire de paquets :** npm (pas bun)

### URLs

- **Production :** <https://www.speedelog.net>
- **Aperçu Workers :** <https://speedelog-real-site.red-hill-ec42.workers.dev>

## 🐛 Résolution de problèmes

### Si le déploiement échoue

1. Vérifier que le build fonctionne localement : `npm run build`
2. S'assurer qu'il n'y a pas de fichier `bun.lockb`
3. Vérifier que `.nvmrc` contient `20.10.0`
4. Vérifier la configuration `wrangler.toml`
5. Forcer un nouveau déploiement en modifiant la version dans `package.json`

### Si l'ancien site est encore visible

1. **Vider le cache Cloudflare :**
   - Dashboard Cloudflare → Domaine → Mise en cache → Purger tout
2. **Tester en navigation privée**
3. **Forcer le refresh :** Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)
4. **Attendre 5-10 minutes** pour la propagation DNS

### Si le site affiche "There is nothing here yet"

- **Normal pendant le déploiement** - attendre 3-5 minutes
- Vérifier les logs de build dans Cloudflare Workers Dashboard

## 📁 Structure du projet

```text
├── src/                 # Code source React
├── public/             # Assets statiques
├── dist/               # Build de production (généré)
├── .nvmrc              # Version Node.js (20.10.0)
├── package.json        # Dépendances et scripts
├── wrangler.toml       # Configuration Cloudflare Workers
└── README.md           # Ce fichier
```

## 🔄 Workflow de développement

1. **Développement local :** `npm run dev`
2. **Test du build :** `npm run build`
3. **Push vers main :** Déploiement automatique via Wrangler
4. **Vérification :** Attendre et tester sur speedelog.net

## 📞 Support

En cas de problème, vérifier :

- Les logs de build dans Cloudflare Workers Dashboard
- Que le repository GitHub est bien connecté
- Que les paramètres de build utilisent npm et non bun
- La configuration `wrangler.toml`