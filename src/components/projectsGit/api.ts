import { useEffect, useState } from "react";

// Tipagem para os dados dos repositórios no GitHub
type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics?: string[];
  license?: {
    name: string;
  } | null;
};

// Hook customizado para buscar os repositórios do GitHub
export const useGitHubRepos = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const projectsPerSlide = 3;

  const gitMyApi = "https://api.github.com/users/edu-mguerra/repos";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(gitMyApi);
        if (!response.ok) throw new Error("Erro ao buscar os projetos!");
        const data: GitHubRepo[] = await response.json();
        setProjects(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);



  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(projects.length / projectsPerSlide));
  };

  // Voltar para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(projects.length / projectsPerSlide) - 1 : prevIndex - 1
    );
  };

  const currentProjects = projects.slice(
    currentIndex * projectsPerSlide,
    (currentIndex + 1) * projectsPerSlide
  );

  return { projects, loading, error, currentProjects, nextSlide, prevSlide };
};
