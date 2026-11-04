import { useEffect, useState } from "react";
import { GitHubRepo } from "@/types";

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
