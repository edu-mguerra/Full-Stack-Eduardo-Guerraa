import { useState, useRef, useEffect } from "react";
import { useGitHubRepos } from "./api";
import "./style.css";
import {
  FiGithub,
  FiStar,
  FiCode,
  FiFolder,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const FEATURED_REPO_NAMES = [
  "fazenda-clima",
  "LaserControl-High-Availability-Production-System",
  "gerenciador-rede-dotnet",
];

export default function Projects() {
  const { loading, projects, error } = useGitHubRepos();
  const [filterLang, setFilterLang] = useState<string>("all");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <div className="projectsLoading"><div className="loadingSpinner"></div><p>Carregando projetos...</p></div>;
  if (error) return <div className="projectsError"><p>Erro: {error}</p></div>;

  const curatedProjects = projects.filter(
    (repo) => !repo.fork && !FEATURED_REPO_NAMES.includes(repo.name)
  );

  const allLanguages = [...new Set(curatedProjects.map(repo => repo.language).filter((lang): lang is string => Boolean(lang)))];
  const filteredLanguages = allLanguages.filter((lang) => lang !== "HTML" && lang !== "CSS");

  const filteredRepos = filterLang === "all"
    ? curatedProjects
    : curatedProjects.filter(repo => repo.language === filterLang);

  const formatRepoName = (name: string) => name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left"
        ? scrollLeft - clientWidth * 0.7
        : scrollLeft + clientWidth * 0.7;

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects">
      <div className="projectsHeader">
        <h2 className="titleProject">Outros Repositórios</h2>
        <div className="headerDivider"></div>
        <p className="projectsSubtitle">
          Experimentos e outros trabalhos disponíveis no GitHub
        </p>
      </div>

      <div className="filterBar">
        <div className="customSelect" ref={dropdownRef}>
          <div
            className={`selectHeader ${isSelectOpen ? "open" : ""}`}
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <span>{filterLang === "all" ? "Todos os projetos" : filterLang}</span>
            <FiChevronDown className={`arrowIcon ${isSelectOpen ? "rotate" : ""}`} />
          </div>

          {isSelectOpen && (
            <ul className="selectOptions">
              <li
                className={filterLang === "all" ? "activeOption" : ""}
                onClick={() => { setFilterLang("all"); setIsSelectOpen(false); }}
              >
                Todos os projetos
              </li>
              {filteredLanguages.map(lang => (
                <li
                  key={lang}
                  className={filterLang === lang ? "activeOption" : ""}
                  onClick={() => { setFilterLang(lang); setIsSelectOpen(false); }}
                >
                  {lang}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="projectsSliderWrapper">
        <button className="sliderBtn left" onClick={() => scroll("left")} aria-label="Anterior">
          <FiChevronLeft size={24} />
        </button>

        <div className="projectsContainer" ref={sliderRef}>
          {filteredRepos.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="cardHeader">
                <div className="projectIcon"><FiFolder size={24} /></div>
                <h3 className="projectTitle">{formatRepoName(project.name)}</h3>
              </div>
              <div className="cardContent">
                <p className="projectDescription">
                  {project.description?.substring(0, 100) || "Projeto em desenvolvimento."}
                </p>
                <div className="projectTech">
                  <span className="techValue">{project.language || "Multiplataforma"}</span>
                </div>
                <div className="projectStats">
                  <div className="stat"><FiStar size={16} /><span className="statCount">{project.stargazers_count}</span></div>
                </div>
              </div>
              <div className="cardActions">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="sliderBtn right" onClick={() => scroll("right")} aria-label="Próximo">
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="projectsFooter">
        <a href="https://github.com/edu-mguerra?tab=repositories" target="_blank" rel="noopener noreferrer" className="allProjectsBtn">
          <span>Ver Todos os Projetos</span><FiGithub size={20} />
        </a>
      </div>
    </section>
  );
}