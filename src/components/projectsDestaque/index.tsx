"use client";

import { useState } from "react";
import "./style.css";
import {
  FiChevronRight,
  FiChevronLeft,
  FiTarget,
  FiLayers,
  FiLock,
  FiMonitor,
  FiSmartphone,
  FiServer,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects } from "@/data/featuredProjects";

const getLayerIcon = (layerName: string) => {
  const normalized = layerName.toLowerCase();
  if (normalized.includes("mobile")) return <FiSmartphone size={16} />;
  if (normalized.includes("back") || normalized.includes("api") || normalized.includes("server")) return <FiServer size={16} />;
  if (normalized.includes("shared") || normalized.includes("layer")) return <FiLayers size={16} />;
  return <FiMonitor size={16} />;
};

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = featuredProjects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < featuredProjects.length - 1 ? prev + 1 : prev));
  };

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
        <div className="projectTabs">
          {featuredProjects.map((p, idx) => (
            <button
              key={p.number}
              type="button"
              className={`projectTabBtn ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <span className="tabIndex">{p.number}</span>
              <span className="tabTitle">{p.name.split("—")[0].trim()}</span>
            </button>
          ))}
        </div>

        <div className="projectsContent">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="projectItem"
            >
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
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="projectPagination">
          <button
            type="button"
            className="paginationBtn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Projeto anterior"
          >
            <FiChevronLeft size={18} />
            <span>Anterior</span>
          </button>

          <div className="paginationIndicators">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`paginationDot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver projeto ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="paginationBtn"
            onClick={handleNext}
            disabled={currentIndex === featuredProjects.length - 1}
            aria-label="Próximo projeto"
          >
            <span>Próximo</span>
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
