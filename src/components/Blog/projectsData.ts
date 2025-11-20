import { Project } from "@/types/project";

const projectsData: Project[] = [
 
  {    id: 1,
    title: "Plateforme de Gestion Financière Personnelle",
    description:
      "Plateforme personnelle de gestion financière couvrant authentification JWT, wallets partagés, transactions catégorisées, reporting mensuel et stack DevOps Dockerisée (NestJS, Prisma, PostgreSQL, Next.js).",
    image: "/images/projects/expenseTracker.png",
    client: "Projet interne",
    category: "Finance personnelle",
    year: "2025",
    tags: ["Full-stack", "Docker", "Fintech"],
  },
  {
    id: 2,
    title: "Système de Gestion de Réservations Hôtelières",
    description:
      "Application web complète permettant aux établissements hôteliers de gérer leurs réservations en temps réel. Solution intuitive avec interface client pour la consultation et la réservation de chambres, intégration de paiements (Stripe, PayPal), authentification Google, et tableau de bord administrateur personnalisé avec Django Admin.",
    image: "/images/projects/hotelia.png",
    client: "Projet de fin d'études",
    category: "Gestion hôtelière",
    year: "2025",
    tags: ["Django", "PostgreSQL", "Stripe", "PayPal", "Google Auth", "Bootstrap"],
  },
  {
    id: 3,
    title: "GestionAutoPro - Système de Gestion pour Vente de Pièces Automobiles",
    description: "Application desktop complète développée en Python avec PyQt5 permettant aux commerces de pièces automobiles de gérer l'ensemble de leurs opérations en temps réel. Solution intuitive avec point de vente (POS) intégré, gestion complète du catalogue et du stock, système de facturation automatique avec génération de PDF, gestion des crédits clients avec paiements partiels, dashboard financier avec statistiques et graphiques, gestion des fournisseurs et bons de commande, rapports détaillés avec export Excel/PDF, et sauvegarde automatique quotidienne de la base de données.",
    image: "/images/projects/2partsauto.png",
    client: "2R parts auto accessoires",
    category: "Gestion commerciale",
    year: "2025",
    tags: ["PyQt5", "SQLite", "SQLAlchemy", "ReportLab", "Pandas", "Matplotlib", "openpyxl", "Python"],
  },
  
];

export default projectsData;


