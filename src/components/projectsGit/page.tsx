import { useGitHubRepos } from "./api";
import "./style.css";

export default function Projects() {
  const { loading, currentProjects, error, nextSlide, prevSlide } = useGitHubRepos();


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div >
      <div className="container">
        <h1 className="titleProject">Meus Projetos</h1>
      </div>
      <div className="central-slider">
        <button onClick={prevSlide} className="nav-btn">{"<"}</button>

        <div className="project-slide">
          {currentProjects.map((project) => (
            <div key={project.id} className="project-item">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{project.name}</h3>
              </a>

              <p>
                {project.description && project.description.length > 200
                  ? `${project.description.substring(0, 200)}...`
                  : project.description || "Sem descrição disponível."
                }
              </p>

              <p>
                <strong>Linguagem:</strong> {project.language || "Desconhecida"}
              </p>
              <p>
                ⭐ {project.stargazers_count} | 🍴 {project.forks_count}
              </p>
              <p>📅 Criado em: {new Date(project.created_at).toLocaleDateString()}</p>
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
