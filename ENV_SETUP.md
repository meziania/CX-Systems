# Configuration des Variables d'Environnement

## Variables Requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# URL du site (obligatoire pour SEO et métadonnées)
NEXT_PUBLIC_SITE_URL=https://cxsystems.vercel.app

# Google Analytics (optionnel)
# Obtenez votre ID de mesure sur https://analytics.google.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification (optionnel)
# Code de vérification pour Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

## Configuration Google Analytics

1. Créez un compte Google Analytics 4
2. Créez une propriété pour votre site
3. Copiez votre ID de mesure (format: `G-XXXXXXXXXX`)
4. Ajoutez-le dans `.env.local` comme `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Configuration Google Search Console

1. Allez sur [Google Search Console](https://search.google.com/search-console)
2. Ajoutez votre propriété
3. Choisissez la méthode de vérification "Balise HTML"
4. Copiez le code de vérification
5. Ajoutez-le dans `.env.local` comme `NEXT_PUBLIC_GOOGLE_VERIFICATION`

## Note

- Les variables `NEXT_PUBLIC_*` sont exposées au client
- Ne commitez jamais le fichier `.env.local` (déjà dans `.gitignore`)
- Pour Vercel, ajoutez ces variables dans les paramètres du projet

