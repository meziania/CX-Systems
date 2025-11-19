# 🛠️ Guide : Mettre à jour vos projets

## 📁 Localisation
Les projets affichés sur la page `/blog/projects` sont décrits dans :
```
src/components/Blog/projectsData.ts
```

## 🧱 Structure d’un projet
```typescript
{
  id: number,           // identifiant unique
  title: string,        // titre du projet
  description: string,  // résumé ou résultats clés
  image: string,        // chemin vers l’image (dossier /public)
  client: string,       // nom du client ou secteur
  category: string,     // type de projet
  year: string,         // année de réalisation
  tags: string[],       // mots-clés
}
```

## ✏️ Modifier ou ajouter
1. Ouvrez `projectsData.ts`.
2. Ajustez les champs souhaités.
3. Pour ajouter un projet, copiez un bloc existant et changez les valeurs (pensez à incrémenter `id`).

## 🖼️ Images
- Placez vos visuels dans `public/images/projects/` (à créer si besoin).
- Référencez-les via `/images/projects/mon-image.jpg`.

## ✅ Vérification
1. Sauvegardez le fichier.
2. Lancez `npm run dev` (si pas déjà en cours).
3. Ouvrez `http://localhost:3000/blog/projects` pour contrôler l’affichage.

## 💡 Astuce
Utilisez des descriptions orientées résultats (ex : *“+18% de NPS en 3 mois”*) et limitez les tags à 2-3 mots clés per projet pour garder la carte lisible.



