# 📝 Guide : Comment Modifier les Solutions Affichées

## 📍 Localisation

Les solutions sont stockées dans le fichier :
```
src/components/Blog/blogData.tsx
```

## 🔧 Structure d'une Solution

Chaque solution suit cette structure :

```typescript
{
  id: number,                    // Identifiant unique (1, 2, 3, ...)
  title: string,                 // Titre de la solution
  paragraph: string,             // Description courte
  image: string,                 // Chemin vers l'image (dans /public/images/blog/)
  author: {
    name: string,                // Nom de l'auteur
    image: string,               // Photo de l'auteur (dans /public/images/blog/)
    designation: string,         // Fonction/titre de l'auteur
  },
  tags: string[],                // Tableau de tags/catégories
  publishDate: string,           // Date de publication
}
```

## ✏️ Comment Modifier

### 1. **Modifier une Solution Existante**

Ouvrez `src/components/Blog/blogData.tsx` et modifiez les valeurs :

```typescript
{
  id: 1,
  title: "Votre Nouveau Titre",           // ← Modifiez ici
  paragraph: "Votre nouvelle description", // ← Modifiez ici
  image: "/images/blog/blog-01.jpg",      // ← Changez l'image si besoin
  author: {
    name: "Nouveau Nom",                   // ← Modifiez ici
    image: "/images/blog/author-03.png",   // ← Changez la photo
    designation: "Nouveau Titre",          // ← Modifiez ici
  },
  tags: ["nouveau-tag"],                   // ← Modifiez les tags
  publishDate: "2025",                     // ← Modifiez la date
}
```

### 2. **Ajouter une Nouvelle Solution**

Ajoutez un nouvel objet dans le tableau `blogData` :

```typescript
const blogData: Blog[] = [
  // ... solutions existantes ...
  {
    id: 4,  // ← Nouvel ID (incrémentez)
    title: "Ma Nouvelle Solution",
    paragraph: "Description de ma nouvelle solution...",
    image: "/images/blog/blog-01.jpg",  // Utilisez une image existante ou ajoutez-en une
    author: {
      name: "Nom Auteur",
      image: "/images/blog/author-02.png",
      designation: "Expert",
    },
    tags: ["nouvelle-categorie"],
    publishDate: "2025",
  },
];
```

### 3. **Supprimer une Solution**

Supprimez simplement l'objet correspondant du tableau.

### 4. **Réorganiser l'Ordre**

Déplacez les objets dans le tableau pour changer l'ordre d'affichage.

## 🖼️ Images Disponibles

### Images de Blog
- `/images/blog/blog-01.jpg`
- `/images/blog/blog-02.jpg`
- `/images/blog/blog-03.jpg`
- `/images/blog/post-01.jpg`
- `/images/blog/post-02.jpg`
- `/images/blog/post-03.jpg`

### Photos d'Auteurs
- `/images/blog/author-02.png`
- `/images/blog/author-03.png`

### Ajouter une Nouvelle Image

1. Placez votre image dans `public/images/blog/`
2. Utilisez le chemin : `/images/blog/votre-image.jpg`

## 📋 Exemple Complet

```typescript
import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Solution d'Intelligence Artificielle",
    paragraph: "Découvrez comment l'IA transforme l'expérience client...",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sophie Martin",
      image: "/images/blog/author-03.png",
      designation: "Expert IA",
    },
    tags: ["IA", "innovation"],
    publishDate: "Janvier 2025",
  },
  {
    id: 2,
    title: "Automatisation des Processus",
    paragraph: "Automatisez vos workflows pour gagner en efficacité...",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jean Dupont",
      image: "/images/blog/author-02.png",
      designation: "Consultant Digital",
    },
    tags: ["automatisation", "efficacité"],
    publishDate: "Février 2025",
  },
  // Ajoutez autant de solutions que vous voulez...
];

export default blogData;
```

## ⚠️ Points Importants

1. **ID Unique** : Chaque solution doit avoir un `id` unique
2. **Images** : Les chemins d'images commencent par `/images/` (dossier `public`)
3. **Tags** : Utilisez un tableau même pour un seul tag : `["tag"]`
4. **Format** : Respectez la structure TypeScript définie dans `src/types/blog.ts`

## 🔄 Après Modification

1. Sauvegardez le fichier
2. Le serveur de développement rechargera automatiquement
3. Vérifiez la page `/blog` (Solutions) pour voir les changements

## 💡 Astuce

Pour voir tous les types disponibles, consultez :
- `src/types/blog.ts` - Structure des données
- `src/components/Blog/SingleBlog.tsx` - Comment les données sont affichées

