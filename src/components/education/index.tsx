import React from 'react';
import './style.css';
import { Certificatee } from './certifica/certificate';
import { Stats } from './stats/page';
import { motion } from 'framer-motion';
import { 
  FiBookOpen, FiBriefcase, FiCode, FiCpu, FiDatabase, FiServer, 
  FiLayout, FiPenTool, FiGitBranch, FiMonitor, FiAward, FiTrendingUp, 
  FiCalendar, FiMapPin, FiCheckCircle
} from 'react-icons/fi';

const educationData = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas",
    degree: "Graduação",
    institution: "Universidade Federal do Vale do São Francisco (UNIVASF)",
    period: "2024 - 2027",
    status: "Em andamento",
    type: "academic",
    tags: ["Tecnologia", "Desenvolvimento", "Software"],
    icon: <FiBookOpen size={24} />
  },
  {
    id: 2,
    title: "Engenharia de Software",
    degree: "Bacharelado",
    institution: "Unicesumar",
    period: "2025 - 2029",
    status: "Em andamento",
    type: "engineering",
    tags: ["Engenharia", "Software", "Arquitetura"],
    icon: <FiCpu size={24} />
  }
];

const techStack = [
  { category: "Front-end", icon: <FiLayout size={18} />, items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"] },
  { category: "Back-end", icon: <FiServer size={18} />, items: ["Node.js", "Express", "Java", "NestJS"] },
  { category: "Banco de Dados", icon: <FiDatabase size={18} />, items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"] },
  { category: "DevOps/Infra", icon: <FiGitBranch size={18} />, items: ["Linux", "Git", "Docker", "AWS Basic"] },
  { category: "Design", icon: <FiPenTool size={18} />, items: ["Figma", "UI/UX", "Prototipagem"] },
  { category: "Outros", icon: <FiMonitor size={18} />, items: ["Clean Code", "SOLID", "Scrum"] },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5 }
  }
};

export default function Education() {
  return (
    <section className="education">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>

      <div className="educationHeader">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="educationTitle">Formação & Experiência</h2>
          <div className="headerLine"></div>
          <p className="educationSubtitle">Minha jornada acadêmica e profissional em tecnologia</p>
        </motion.div>
      </div>

      <div className="educationContent">
        <motion.div 
          className="educationSection"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="sectionHeader">
            <div className="sectionIconWrapper">
              <FiBookOpen size={28} />
            </div>
            <h3 className="sectionTitle">Formação Acadêmica</h3>
          </div>
          
          <div className="educationItems">
            {educationData.map((edu) => (
              <motion.div key={edu.id} className="educationCard" variants={itemVariants}>
                <div className="educationIcon">
                  <div className={`iconWrapper ${edu.type}`}>
                    {edu.icon}
                  </div>
                </div>
                <div className="educationDetails">
                  <div className="educationHeaderRow">
                    <h3>{edu.title}</h3>
                    <span className="badge">{edu.degree}</span>
                  </div>
                  <p className="institution">
                    <FiMapPin size={16} />
                    {edu.institution}
                  </p>
                  <div className="educationMeta">
                    <div className="metaItem">
                      <FiCalendar size={16} />
                      <span className="date">{edu.period}</span>
                    </div>
                    <div className="metaItem">
                      <FiCheckCircle size={16} />
                      <span className="status inProgress">{edu.status}</span>
                    </div>
                  </div>
                  <div className="educationTags">
                    {edu.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="educationSection"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="sectionHeader">
            <div className="sectionIconWrapper">
              <FiBriefcase size={28} />
            </div>
            <h3 className="sectionTitle">Experiência Profissional</h3>
          </div>
          
          <div className="educationItems">
            <div className="experienceCard">
              <div className="experienceTimeline">
                <div className="timelineDot pulsate"></div>
                <div className="timelineLine"></div>
              </div>
              
              <div className="experienceContentWrapper">
                <div className="experienceMainInfo">
                  
                  
                  <div className="experienceDetails">
                    <div className="experienceHeader">
                      <div className="experienceHeaderRow">
                        <h3>Desenvolvedor Full Stack</h3>
                        <span className="badge active">Ativo</span>
                      </div>
                      <p className="company">
                        <FiMapPin size={16} /> GrandValle
                      </p>
                      <div className="experienceMeta">
                        <div className="metaItem">
                          <FiCalendar size={16} /> <span className="date">2025 - Presente</span>
                        </div>
                      </div>
                    </div>

                    <div className="techSection">
                      <div className="techHeader">
                        <FiCode size={20} />
                        <h4>Tecnologias & Ferramentas</h4>
                      </div>
                      
                      <div className="techGrid">
                        {techStack.map((tech, idx) => (
                          <motion.div 
                            key={idx} 
                            className="techCategory"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                          >
                            <div className="techCategoryHeader">
                              {tech.icon}
                              <h5>{tech.category}</h5>
                            </div>
                            <div className="techItems">
                              {tech.items.map(item => (
                                <span key={item} className="techItem">{item}</span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="componentsContainer">
          <Certificatee />
          <Stats />
        </div>
      </div>
    </section>
  );
}