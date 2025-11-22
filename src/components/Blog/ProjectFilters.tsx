"use client";

import { useState, useMemo } from "react";
import { Project } from "@/types/project";

type ProjectFiltersProps = {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
};

const ProjectFilters = ({ projects, onFilterChange }: ProjectFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extraire toutes les catégories, années et tags uniques
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, [projects]);

  const years = useMemo(() => {
    const yrs = new Set(projects.map((p) => p.year));
    return ["all", ...Array.from(yrs).sort().reverse()];
  }, [projects]);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    projects.forEach((p) => {
      p.tags.forEach((tag) => allTags.add(tag));
    });
    return ["all", ...Array.from(allTags).sort()];
  }, [projects]);

  // Filtrer les projets
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
      const matchesYear = selectedYear === "all" || project.year === selectedYear;
      const matchesTag = selectedTag === "all" || project.tags.includes(selectedTag);
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesYear && matchesTag && matchesSearch;
    });
  }, [projects, selectedCategory, selectedYear, selectedTag, searchQuery]);

  // Notifier le parent des changements
  useMemo(() => {
    onFilterChange(filteredProjects);
  }, [filteredProjects, onFilterChange]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedYear("all");
    setSelectedTag("all");
    setSearchQuery("");
  };

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedYear !== "all" ? 1 : 0) +
    (selectedTag !== "all" ? 1 : 0) +
    (searchQuery !== "" ? 1 : 0);

  return (
    <div className="mb-12 space-y-6">
      {/* Barre de recherche */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un projet..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-base text-dark shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-dark dark:text-white"
        />
        <svg
          className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-body-color"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap items-center gap-4">
        {/* Filtre Catégorie */}
        <div className="flex-1 min-w-[150px]">
          <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
            Catégorie
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-dark shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-dark dark:text-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Toutes les catégories" : cat}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre Année */}
        <div className="flex-1 min-w-[150px]">
          <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
            Année
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-dark shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-dark dark:text-white"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === "all" ? "Toutes les années" : year}
              </option>
            ))}
          </select>
        </div>

        {/* Filtre Tag */}
        <div className="flex-1 min-w-[150px]">
          <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
            Technologie
          </label>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base text-dark shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-dark dark:text-white"
          >
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag === "all" ? "Toutes les technologies" : tag}
              </option>
            ))}
          </select>
        </div>

        {/* Bouton Reset */}
        {activeFiltersCount > 0 && (
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="rounded-lg border-2 border-gray-300 bg-white px-6 py-2 text-base font-medium text-dark transition-all hover:border-primary hover:bg-gray-50 hover:text-primary dark:border-gray-600 dark:bg-gray-dark dark:text-white dark:hover:border-primary"
            >
              Réinitialiser
            </button>
          </div>
        )}
      </div>

      {/* Compteur de résultats */}
      <div className="text-sm text-body-color dark:text-body-color-dark">
        {filteredProjects.length} projet{filteredProjects.length > 1 ? "s" : ""} trouvé
        {filteredProjects.length !== projects.length ? ` sur ${projects.length}` : ""}
      </div>
    </div>
  );
};

export default ProjectFilters;

