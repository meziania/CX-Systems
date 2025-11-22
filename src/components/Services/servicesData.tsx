import { Feature } from "@/types/feature";

const servicesData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0L0 10v10c0 10 7 19.5 17 22 10-2.5 17-12 17-22V10L20 0zm0 4.5L33 10v10c0 7.5-5.2 15-13 17-7.8-2-13-9.5-13-17V10l13-5.5z"/>
        <path d="M15 20l5 5 10-10-2.5-2.5L20 20l-2.5-2.5L15 20z"/>
      </svg>
    ),
    title: "Développement Web",
    paragraph: "Création d'applications web modernes et performantes avec React, Next.js et TypeScript. Développement de sites vitrines, applications web complexes et plateformes interactives."
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5c-2.757 0-5 2.243-5 5v20c0 2.757 2.243 5 5 5h30c2.757 0 5-2.243 5-5V10c0-2.757-2.243-5-5-5zM5 8h30c1.103 0 2 .897 2 2v3H3v-3c0-1.103.897-2 2-2zm30 24H5c-1.103 0-2-.897-2-2V16h34v14c0 1.103-.897 2-2 2z"/>
        <path d="M8 20h8v4H8zM22 20h10v2H22zM22 24h6v2h-6z"/>
      </svg>
    ),
    title: "Applications Desktop",
    paragraph: "Développement d'applications desktop complètes avec Python et PyQt5. Solutions de gestion d'entreprise, systèmes de point de vente et outils métier sur mesure."
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2L5 8v12c0 10.55 7.3 20.74 17 23 9.7-2.26 17-12.45 17-23V8L20 2zm0 4.32L33 10v10c0 8.11-5.61 16.78-13 19-7.39-2.22-13-10.89-13-19V10l13-3.68z"/>
        <path d="M18 24l-6-6 2.83-2.83L18 18.34l7.17-7.17L28 14l-10 10z"/>
      </svg>
    ),
    title: "APIs & Backend",
    paragraph: "Conception et développement d'APIs RESTful robustes avec NestJS, Django et Node.js. Intégration de bases de données, authentification sécurisée et architecture scalable."
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
        <path d="M25 15h-5V10c0-1.104-.896-2-2-2s-2 .896-2 2v5h-5c-1.104 0-2 .896-2 2s.896 2 2 2h5v5c0 1.104.896 2 2 2s2-.896 2-2v-5h5c1.104 0 2-.896 2-2s-.896-2-2-2z"/>
      </svg>
    ),
    title: "Consulting & Accompagnement",
    paragraph: "Accompagnement dans la conception et la mise en œuvre de solutions digitales. Conseil en architecture logicielle, optimisation de performance et bonnes pratiques de développement."
  }
];

export default servicesData;