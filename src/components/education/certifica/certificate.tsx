import "./style.css";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
  FiChevronRight,
  FiLayers,
  FiBox,
  FiCloud,
  FiMonitor,
} from "react-icons/fi";

export const Certificatee = () => {
  const skillCategories = [
    {
      title: "Front-End",
      color: "#667eea",
      icon: <FiCode size={24} />,
      skills: [
        {
          name: "HTML",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind",
          src: "https://alunos.b7web.com.br/media/courses/logo/tailwindcss.jpg",
        },
        {
          name: "JavaScript",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "React",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "React Native",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          src: "https://www.svgrepo.com/show/368858/nextjs.svg",
          style: { background: "#fff", borderRadius: "100%", padding: "2px" },
        },
        { name: "Vue.js", src: "https://br.vuejs.org/images/logo.svg" },
      ],
    },
    {
      title: "Back-End",
      color: "#764ba2",
      icon: <FiServer size={24} />,
      skills: [
        {
          name: "Node.js",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
          name: "Java",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "Spring Boot",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
        },
        {
          name: "Firebase",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "Banco de Dados",
      color: "#f093fb",
      icon: <FiDatabase size={24} />,
      skills: [
        { name: "MySQL", src: "https://www.svgrepo.com/show/373848/mysql.svg" },
        {
          name: "PostgreSQL",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "SQL Server",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "MongoDB",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "SQLite",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        },
      ],
    },
    {
      title: "Sistemas & DevOps",
      color: "#4facfe",
      icon: <FiCpu size={24} />,
      skills: [
        {
          name: "Linux",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        },
        {
          name: "Apache",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
        },
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Figma",
          src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        },
        {
          name: "WordPress",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        },
      ],
    },
  ];

  return (
    <div className="certifications">
      <div className="certificationsHeader">
        <h3 className="certificationsTitle">Habilidades & Tecnologias</h3>
        <div className="headerDivider"></div>
        <p className="certificationsSubtitle">
          Tecnologias que domino e utilizo no meu dia a dia
        </p>
      </div>

      <div className="skillsGrid">
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="skillCategory"
            style={
              { "--category-color": category.color } as React.CSSProperties
            }
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="categoryHeader">
              <div
                className="categoryIconWrapper"
                style={{
                  backgroundColor: `${category.color}20`,
                  border: `2px solid ${category.color}40`,
                }}
              >
                {category.icon}
              </div>
              <div className="categoryTitleWrapper">
                <h4 className="categoryTitle">{category.title}</h4>
                <span className="categoryCount">
                  {category.skills.length} tecnologias
                </span>
              </div>
              <FiChevronRight className="chevronIcon" />
            </div>

            <div className="skillsContainer">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skillItem" title={skill.name}>
                  <div className="skillIconWrapper">
                    <img
                      alt={skill.name}
                      src={skill.src}
                      className="skillIcon"
                      style={skill.style}
                      loading="lazy"
                    />
                    <div className="skillOverlay">
                      <span>+</span>
                    </div>
                  </div>
                  <span className="skillName">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="categoryFooter">
              <div className="footerIcons">
                <FiLayers size={14} />
                <FiBox size={14} />
                <FiCloud size={14} />
                <FiMonitor size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skillsLegend">
        <div className="legendItem">
          <div className="legendDot" style={{ background: "#667eea" }}></div>
          <span>Front-End</span>
        </div>
        <div className="legendItem">
          <div className="legendDot" style={{ background: "#764ba2" }}></div>
          <span>Back-End</span>
        </div>
        <div className="legendItem">
          <div className="legendDot" style={{ background: "#f093fb" }}></div>
          <span>Banco de Dados</span>
        </div>
        <div className="legendItem">
          <div className="legendDot" style={{ background: "#4facfe" }}></div>
          <span>DevOps</span>
        </div>
      </div>
    </div>
  );
};
