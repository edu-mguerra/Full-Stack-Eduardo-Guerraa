import { useGitHubRepos } from "./api";
import "./style.css";

export default function Projects() {
  const { loading, currentProjects, error, nextSlide, prevSlide } = useGitHubRepos();


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  function formatRepoName(name : string) {
  return name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

  return (
    <div >
      <div className="container">
        <h1 className="titleProject">Meus Projetos</h1>
      </div>
      <div className="central-slider">
        <button onClick={prevSlide} className="nav-btn">{"<"}</button>

        <div className="project-slide">
          {currentProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{formatRepoName(project.name)}</h3>

              <p className="project-description">
                {project.description && project.description.length > 80
                  ? `${project.description.substring(0, 80)}...`
                  : project.description || "Sem descrição disponível."}
              </p>

              <p className="project-stack">
                <strong>Stack:</strong> {project.language || "Desconhecida"}
              </p>

              <div className="project-meta">
                ⭐ {project.stargazers_count} | 🍴 {project.forks_count}
              </div>

              <div className="project-links">
                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                  🔗 Ver no GitHub
                </a>
               
              </div>
            </div>

          ))}

        </div>

        <button onClick={nextSlide} className="nav-btn">{">"}</button>
      </div>
      <div className="containerButton">

        <button className="buttonMedia"><a href="https://github.com/edu-mguerra?tab=repositories">Projetos</a></button>
      </div>
    </div>
  );
}
