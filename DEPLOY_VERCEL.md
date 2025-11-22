# Guide de Déploiement sur Vercel

Ce guide vous explique comment déployer votre site CX Systems sur Vercel.

## Prérequis

1. Un compte GitHub, GitLab ou Bitbucket
2. Un compte Vercel (gratuit) : https://vercel.com

## Méthode 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Préparer votre code

1. Assurez-vous que votre code est poussé sur GitHub :
   ```bash
   git add .
   git commit -m "Préparation pour déploiement Vercel"
   git push origin main
   ```

### Étape 2 : Connecter votre projet à Vercel

1. Allez sur https://vercel.com et connectez-vous
2. Cliquez sur **"Add New Project"** ou **"Import Project"**
3. Connectez votre compte GitHub/GitLab/Bitbucket si ce n'est pas déjà fait
4. Sélectionnez le dépôt **CX-Systems**
5. Vercel détectera automatiquement que c'est un projet Next.js

### Étape 3 : Configuration du projet

Vercel détectera automatiquement :
- **Framework Preset** : Next.js
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `.next` (automatique)
- **Install Command** : `npm install` (automatique)

### Étape 4 : Variables d'environnement (si nécessaire)

Si vous avez des variables d'environnement, ajoutez-les dans la section **Environment Variables** :
- Cliquez sur **"Environment Variables"**
- Ajoutez vos variables (ex: `NEXT_PUBLIC_API_URL`, etc.)

### Étape 5 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez que le build se termine (2-5 minutes)
3. Votre site sera disponible sur une URL comme : `https://cx-systems.vercel.app`

## Méthode 2 : Déploiement via CLI Vercel

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter à Vercel

```bash
vercel login
```

### Étape 3 : Déployer

Depuis le répertoire du projet :

```bash
vercel
```

Suivez les instructions :
- **Set up and deploy?** → Y
- **Which scope?** → Sélectionnez votre compte
- **Link to existing project?** → N (pour la première fois)
- **Project name?** → cx-systems (ou le nom de votre choix)
- **Directory?** → ./
- **Override settings?** → N

### Étape 4 : Déploiement en production

Pour déployer en production :

```bash
vercel --prod
```

## Configuration automatique

Vercel détectera automatiquement :
- ✅ Next.js 15
- ✅ React 19
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Scripts de build dans `package.json`

## Vérifications avant déploiement

Assurez-vous que :
- ✅ Tous les fichiers sont commités
- ✅ Le build fonctionne localement : `npm run build`
- ✅ Les images sont dans le dossier `public/`
- ✅ Aucune erreur de lint : `npm run lint`

## Après le déploiement

1. **URL de production** : Vous recevrez une URL comme `https://cx-systems.vercel.app`
2. **Domain personnalisé** : Vous pouvez ajouter votre propre domaine dans les paramètres du projet
3. **Déploiements automatiques** : Chaque push sur la branche `main` déclenchera un nouveau déploiement

## Commandes utiles

```bash
# Voir les logs de déploiement
vercel logs

# Voir les informations du projet
vercel inspect

# Ouvrir le dashboard Vercel
vercel dashboard
```

## Support

- Documentation Vercel : https://vercel.com/docs
- Support Next.js : https://nextjs.org/docs

