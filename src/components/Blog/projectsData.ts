import { Project } from "@/types/project";

const projectsData: Project[] = [
  {
    id: 1,
    title: "Plateforme omnicanale CX Flow",
    description:
      "Mise en place d'une plateforme unique synchronisant chat, email et voix pour offrir une expérience fluide et traçable.",
    image: "/images/blog/post-01.jpg",
    client: "Retail+",
    category: "Expérience client",
    year: "2024",
    tags: ["Omnicanal", "Automatisation"],
  },
  {
    id: 2,
    title: "Assistant IA pour agents support",
    description:
      "Déploiement d'un copilote IA enrichi avec la base de connaissances interne pour accélérer les résolutions de tickets.",
    image: "/images/blog/post-02.jpg",
    client: "FinServe",
    category: "Intelligence artificielle",
    year: "2025",
    tags: ["IA", "Service client"],
  },
  {
    id: 3,
    title: "Tableau de bord Voix du Client",
    description:
      "Centralisation des verbatim, NPS et enquêtes à chaud dans un cockpit pilotant les plans d'action CX.",
    image: "/images/blog/post-03.jpg",
    client: "Travelgo",
    category: "Analytics",
    year: "2023",
    tags: ["Insights", "Pilotage"],
  },
  {
    id: 4,
    title: "Full-Stack Expense Tracker",
    description:
      "Plateforme personnelle de gestion financière couvrant authentification JWT, wallets partagés, transactions catégorisées, reporting mensuel et stack DevOps Dockerisée (NestJS, Prisma, PostgreSQL, Next.js).",
    image: "/images/projects/expenseTracker.png",
    client: "Projet interne",
    category: "Finance personnelle",
    year: "2025",
    tags: ["Full-stack", "Docker", "Fintech"],
  },
];

export default projectsData;


