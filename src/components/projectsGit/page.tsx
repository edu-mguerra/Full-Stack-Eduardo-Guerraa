import { useGitHubRepos } from "./api";
import "./style.css";

export default function Projects() {
  const { loading, currentProjects, error, nextSlide, prevSlide } = useGitHubRepos();

  if (loading) return (
    <div className="projectsLoading">
      <div className="loadingSpinner"></div>
      <p>Carregando projetos...</p>
    </div>
  );
  
  if (error) return (
    <div className="projectsError">
      <p>Erro ao carregar projetos: {error}</p>
    </div>
  );

  function formatRepoName(name: string) {
    return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  return (
    <section className="projects">
      <div className="projectsHeader">
        <h1 className="titleProject">Meus Projetos</h1>
        <div className="headerDivider"></div>
        <p className="projectsSubtitle">Confira alguns dos meus trabalhos no GitHub</p>
      </div>

      <div className="projectsSlider">
        <button onClick={prevSlide} className="nav-btn prev-btn">
          <span>‹</span>
        </button>

        <div className="projectsContainer">
          {currentProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="cardHeader">
                <div className="projectIcon">💻</div>
                <h3 className="projectTitle">{formatRepoName(project.name)}</h3>
              </div>

              <div className="cardContent">
                <p className="projectDescription">
                  {project.description && project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description || "Projeto em desenvolvimento."}
                </p>

                <div className="projectTech">
                  <span className="techLabel">Tecnologia:</span>
                  <span className="techValue">{project.language || "Multiplataforma"}</span>
                </div>

                <div className="projectStats">
                  <div className="stat">
                    <span className="statIcon">⭐</span>
                    <span className="statCount">{project.stargazers_count}</span>
                  </div>
                  <div className="stat">
                    <span className="statIcon">🍴</span>
                    <span className="statCount">{project.forks_count}</span>
                  </div>
                </div>
              </div>

              <div className="cardActions">
                <a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  <span>Ver no GitHub</span>
                  <span className="linkArrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="nav-btn next-btn">
          <span>›</span>
        </button>
      </div>

      <div className="projectsFooter">
        <a 
          href="https://github.com/edu-mguerra?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="allProjectsBtn"
        >
          <span>Ver Todos os Projetos</span>
          <span className="btnIcon">↗</span>
        </a>
      </div>
    </section>
  );
}