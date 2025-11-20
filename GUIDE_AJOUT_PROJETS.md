# 📝 Guide : Comment Ajouter des Projets

## 📍 Localisation

Les projets sont stockés dans le fichier :
```
src/components/Blog/projectsData.ts
```

## 🔧 Structure d'un Projet

Chaque projet suit cette structure :

```typescript
{
  id: number,                    // Identifiant unique (1, 2, 3, ...)
  title: string,                 // Titre du projet
  description: string,           // Description du projet
  image: string,                 // Chemin vers l'image (dans /public/images/)
  client: string,                // Nom du client
  category: string,              // Catégorie du projet
  year: string,                  // Année de réalisation
  tags: string[],                // Tableau de tags/technologies
}
```

## ✏️ Comment Ajouter un Nouveau Projet

### 1. Ouvrez le fichier `src/components/Blog/projectsData.ts`

### 2. Ajoutez un nouvel objet dans le tableau `projectsData`

```typescript
const projectsData: Project[] = [
  // ... projets existants ...
  {
    id: 5,  // ← Nouvel ID (incrémentez)
    title: "Mon Nouveau Projet",
    description: "Description détaillée de mon projet...",
    image: "/images/projects/mon-projet.jpg",  // Chemin vers l'image
    client: "Nom du Client",
    category: "Catégorie",
    year: "2025",
    tags: ["Tag1", "Tag2", "Tag3"],
  },
];
```

## 📋 Exemple Complet

```typescript
import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Plateforme omnicanale CX Flow",
    description: "Mise en place d'une plateforme unique synchronisant chat, email et voix pour offrir une expérience fluide et traçable.",
    image: "/images/blog/post-01.jpg",
    client: "Retail+",
    category: "Expérience client",
    year: "2024",
    tags: ["Omnicanal", "Automatisation"],
  },
  {
    id: 2,
    title: "Assistant IA pour agents support",
    description: "Déploiement d'un copilote IA enrichi avec la base de connaissances interne pour accélérer les résolutions de tickets.",
    image: "/images/blog/post-02.jpg",
    client: "FinServe",
    category: "Intelligence artificielle",
    year: "2025",
    tags: ["IA", "Service client"],
  },
  // Ajoutez vos nouveaux projets ici...
];
```

## 🖼️ Images des Projets

### Emplacement des Images

Placez vos images dans :
```
public/images/projects/
```

### Formats Supportés

- **PNG** - `.png` (recommandé)
- **JPG/JPEG** - `.jpg`, `.jpeg`
- **WebP** - `.webp`

### Exemple de Structure

```
public/
  └── images/
      └── projects/
          ├── projet-1.jpg
          ├── projet-2.png
          └── mon-projet.jpg
```

### Utilisation dans le Code

```typescript
image: "/images/projects/mon-projet.jpg"  // Chemin relatif depuis public/
```

## 📐 Dimensions Recommandées

- **Ratio** : 16:9 ou 4:3
- **Largeur minimale** : 800px
- **Hauteur** : Adaptée au ratio

Les images sont affichées avec une hauteur de 220px et s'adaptent à la largeur de la carte.

## 🏷️ Tags et Catégories

### Catégories Suggérées

- "Expérience client"
- "Intelligence artificielle"
- "Analytics"
- "Automatisation"
- "Finance personnelle"
- "E-commerce"
- etc.

### Tags

Les tags peuvent être :
- Technologies : "React", "Node.js", "Docker"
- Domaines : "E-commerce", "Fintech", "Healthcare"
- Concepts : "IA", "Omnicanal", "Automatisation"

## ⚠️ Points Importants

1. **ID Unique** : Chaque projet doit avoir un `id` unique
2. **Images** : Les chemins d'images commencent par `/images/` (dossier `public`)
3. **Tags** : Utilisez un tableau même pour un seul tag : `["tag"]`
4. **Format** : Respectez la structure TypeScript définie dans `src/types/project.ts`

## 🔄 Après Modification

1. Sauvegardez le fichier `projectsData.ts`
2. Le serveur de développement rechargera automatiquement
3. Vérifiez la page `/blog` pour voir vos nouveaux projets

## 📍 Où Sont Affichés les Projets ?

Les projets sont affichés sur :
- **Page principale des projets** : `/blog`
- Accessible via le menu "Projets" dans la navigation

## 💡 Astuce

Pour voir tous les types disponibles, consultez :
- `src/types/project.ts` - Structure des données
- `src/components/Blog/ProjectCard.tsx` - Comment les projets sont affichés

## 📝 Exemple d'Ajout Complet

```typescript
{
  id: 5,
  title: "Application Mobile E-commerce",
  description: "Développement d'une application mobile native pour une plateforme e-commerce avec paiement intégré et suivi de commandes en temps réel.",
  image: "/images/projects/ecommerce-app.jpg",
  client: "ShopTech",
  category: "E-commerce",
  year: "2025",
  tags: ["React Native", "Mobile", "E-commerce", "Paiement"],
}
```

