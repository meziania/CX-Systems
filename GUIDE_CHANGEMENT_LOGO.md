# 🎨 Guide : Comment Changer le Logo

## 📍 Emplacement des Logos

Les logos sont stockés dans :
```
public/images/logo/
```

Il y a **deux logos** pour supporter les thèmes clair et sombre :
- **`logo-2.svg`** → Logo pour le **thème clair** (visible en mode clair)
- **`logo.svg`** → Logo pour le **thème sombre** (visible en mode sombre)

## 🔧 Méthode 1 : Remplacer les Fichiers Existants (Recommandé)

### Étapes :

1. **Préparez vos nouveaux logos**
   - Créez deux versions de votre logo :
     - Une version pour fond clair (logo-2.svg)
     - Une version pour fond sombre (logo.svg)

2. **Remplacez les fichiers**
   - Allez dans `public/images/logo/`
   - Remplacez `logo-2.svg` par votre logo pour thème clair
   - Remplacez `logo.svg` par votre logo pour thème sombre
   - **Important** : Gardez les mêmes noms de fichiers !

3. **Vérifiez les dimensions**
   - Les logos sont affichés avec `width={140}` et `height={30}`
   - Assurez-vous que votre logo a un bon ratio pour ces dimensions

## 🔧 Méthode 2 : Utiliser de Nouveaux Fichiers

Si vous voulez utiliser des fichiers avec des noms différents :

### 1. Ajoutez vos logos dans `public/images/logo/`
   - Exemple : `mon-logo-clair.svg` et `mon-logo-sombre.svg`

### 2. Modifiez le Header (`src/components/Header/index.tsx`)

Lignes 59-72, remplacez :

```typescript
<Image
  src="/images/logo/logo-2.svg"  // ← Changez ici
  alt="logo"
  width={140}
  height={30}
  className="w-full dark:hidden"
/>
<Image
  src="/images/logo/logo.svg"    // ← Changez ici
  alt="logo"
  width={140}
  height={30}
  className="hidden w-full dark:block"
/>
```

Par :

```typescript
<Image
  src="/images/logo/mon-logo-clair.svg"  // ← Votre nouveau logo clair
  alt="logo"
  width={140}
  height={30}
  className="w-full dark:hidden"
/>
<Image
  src="/images/logo/mon-logo-sombre.svg"  // ← Votre nouveau logo sombre
  alt="logo"
  width={140}
  height={30}
  className="hidden w-full dark:block"
/>
```

### 3. Modifiez le Footer (`src/components/Footer/index.tsx`)

Lignes 14-27, faites la même modification :

```typescript
<Image
  src="/images/logo/mon-logo-clair.svg"  // ← Votre nouveau logo clair
  alt="logo"
  className="w-full dark:hidden"
  width={140}
  height={30}
/>
<Image
  src="/images/logo/mon-logo-sombre.svg"  // ← Votre nouveau logo sombre
  alt="logo"
  className="hidden w-full dark:block"
  width={140}
  height={30}
/>
```

## 📐 Formats Supportés

Next.js Image supporte :
- **SVG** (recommandé pour les logos) - `.svg`
- **PNG** - `.png`
- **JPG/JPEG** - `.jpg`, `.jpeg`
- **WebP** - `.webp`

## 💡 Conseils

1. **Format SVG recommandé** : Meilleure qualité à toutes les tailles
2. **Dimensions** : Les logos sont affichés à 140x30px, mais le SVG s'adapte
3. **Couleurs** :
   - Logo clair : Utilisez des couleurs sombres (visible sur fond clair)
   - Logo sombre : Utilisez des couleurs claires (visible sur fond sombre)
4. **Transparence** : Les SVG peuvent avoir un fond transparent

## 🔄 Après Modification

1. Sauvegardez les fichiers
2. Le serveur de développement rechargera automatiquement
3. Vérifiez le logo dans :
   - Le header (en haut de la page)
   - Le footer (en bas de la page)
   - Testez en mode clair ET sombre (bouton de thème)

## ⚠️ Important

- Si vous utilisez des formats autres que SVG, ajustez les dimensions si nécessaire
- Assurez-vous que les fichiers sont bien dans `public/images/logo/`
- Les chemins commencent par `/images/logo/` (pas besoin de `public/`)

## 📝 Exemple de Structure

```
public/
  └── images/
      └── logo/
          ├── logo-2.svg    (logo thème clair)
          └── logo.svg      (logo thème sombre)
```

