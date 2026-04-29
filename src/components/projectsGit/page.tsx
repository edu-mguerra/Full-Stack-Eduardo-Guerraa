import { useState } from "react";
import { useGitHubRepos } from "./api";
import "./style.css";
import {
  FiGithub,
  FiStar,
  FiCode,
  FiExternalLink,
  FiFolder,
} from "react-icons/fi";

export default function Projects() {
  const { loading, projects, error } = useGitHubRepos();
  const [filterLang, setFilterLang] = useState<string>("all");

  if (loading) return <div className="projectsLoading"><div className="loadingSpinner"></div><p>Carregando projetos...</p></div>;
  if (error) return <div className="projectsError"><p>Erro: {error}</p></div>;

  const allLanguages = [...new Set(projects.map(repo => repo.language).filter(Boolean))];
  const filteredLanguages = allLanguages.filter(lang => lang !== "HTML" && lang !== "CSS");
  const filteredRepos = filterLang === "all" 
    ? projects 
    : projects.filter(repo => repo.language === filterLang);

  const formatRepoName = (name: string) => name.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <section className="projects">
      <div className="projectsHeader">
        <h1 className="titleProject">Meus Projetos</h1>
        <div className="headerDivider"></div>
        <p className="projectsSubtitle">Confira alguns dos meus trabalhos no GitHub</p>
      </div>

      <div className="filterBar">
        <select 
          value={filterLang} 
          onChange={(e) => setFilterLang(e.target.value)}
          className="techSelect"
        >
          <option value="all">Todos os projetos</option>
          {filteredLanguages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>

      <div className="projectsSlider">
        <div className="projectsContainer">
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
                  <span className="techLabel"><FiCode size={16} /><span>Tecnologia:</span></span>
                  <span className="techValue">{project.language || "Multiplataforma"}</span>
                </div>
                <div className="projectStats">
                  <div className="stat"><FiStar size={16} /><span className="statCount">{project.stargazers_count}</span></div>
                </div>
              </div>
              <div className="cardActions">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="projectLink">
                  <span>Ver no GitHub</span><FiExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="projectsFooter">
        <a href="https://github.com/edu-mguerra?tab=repositories" target="_blank" rel="noopener noreferrer" className="allProjectsBtn">
          <span>Ver Todos os Projetos</span><FiGithub size={20} />
        </a>
      </div>
    </section>
  );
}