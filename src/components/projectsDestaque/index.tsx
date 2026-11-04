import "./style.css";
import {
  FiChevronRight,
  FiTarget,
  FiLayers,
  FiLock,
  FiMonitor,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { featuredProjects } from "@/data/featuredProjects";

const getLayerIcon = (layerName: string) => {
  const normalized = layerName.toLowerCase();
  if (normalized.includes("mobile")) return <FiSmartphone size={16} />;
  if (normalized.includes("back")) return <FiServer size={16} />;
  return <FiMonitor size={16} />;
};

export default function FeaturedProjects() {
  return (
    <section className="projects" id="projects">
      <div className="projectsHeader">
        <h2 className="titleProjects">Projetos em Destaque</h2>
        <div className="headerDivider"></div>
        <p className="sectionSubtitle">
          Soluções reais, do problema à arquitetura implementada
        </p>
      </div>

      <div className="containerProjects">
        <div className="projectsContent">
          {featuredProjects.map((project) => (
            <div className="projectItem" key={project.number}>
              <div className="projectContent">
                <div className="stepIndicator">
                  <div className="stepNumber">{project.number}</div>
                  <div className="stepIcon">{project.icon}</div>
                </div>

                <div className="projectBody">
                  <div className="projectTitleRow">
                    <h3>{project.name}</h3>
                    <div className="projectLinks">
                      {project.proprietary ? (
                        <span className="proprietaryBadge" title="Projeto corporativo — código não público">
                          <FiLock size={14} />
                          corporativo
                        </span>
                      ) : (
                        project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="projectLink"
                            aria-label="Repositório no GitHub"
                          >
                            <FaGithub size={20} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <p className="projectTagline">{project.tagline}</p>

                  <div className="projectSection">
                    <div className="projectSectionHeader">
                      <FiTarget className="sectionIcon" />
                      <span>O Problema</span>
                    </div>
                    <p>{project.problem}</p>
                  </div>

                  <div className="projectSection">
                    <div className="projectSectionHeader">
                      <FiLayers className="sectionIcon" />
                      <span>Arquitetura da Solução</span>
                    </div>
                    <p className="architectureIntro">{project.architecture}</p>

                    {project.architectureLayers && (
                      <div className="architectureLayersGrid">
                        {project.architectureLayers.map((layer) => (
                          <div key={layer.layer} className="architectureLayerCard">
                            <div className="layerCardHeader">
                              <div className="layerTitleGroup">
                                <span className="layerIconWrapper">
                                  {getLayerIcon(layer.layer)}
                                </span>
                                <span className="layerName">{layer.layer}</span>
                              </div>
                              <span className="layerBadge">{layer.badge}</span>
                            </div>
                            <p className="layerDescription">{layer.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="projectSection highlightSection">
                    <div className="projectSectionHeader">
                      <FiChevronRight className="sectionIcon" />
                      <span>Destaque Técnico</span>
                    </div>
                    <p>{project.highlight}</p>
                  </div>

                  <div className="techStack">
                    {project.stack.map((tech) => (
                      <span className="techItem" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
