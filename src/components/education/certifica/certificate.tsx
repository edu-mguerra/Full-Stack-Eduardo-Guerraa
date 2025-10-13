import './style.css';

export const Certificatee = () => {
  const skillCategories = [
    {
      title: "Front-End",
      color: "#667eea",
      skills: [
        { name: 'HTML', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'Tailwind', src: 'https://alunos.b7web.com.br/media/courses/logo/tailwindcss.jpg' },
        { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
        { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'React Native', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Next.js', src: 'https://www.svgrepo.com/show/368858/nextjs.svg', style: { background: '#fff', borderRadius: '100%', padding: '2px' } },
        { name: 'Vue.js', src: 'https://br.vuejs.org/images/logo.svg' }
      ]
    },
    {
      title: "Back-End",
      color: "#764ba2",
      skills: [
        { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'PHP', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
        { name: 'Firebase', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' }
      ]
    },
    {
      title: "Banco de Dados",
      color: "#f093fb",
      skills: [
        { name: 'MySQL', src: 'https://www.svgrepo.com/show/373848/mysql.svg' },
        { name: 'SQL', src: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
        { name: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'SQLite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
      ]
    },
    {
      title: "Ferramentas",
      color: "#4facfe",
      skills: [
        { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
        { name: 'WordPress', src: 'https://cdn-icons-png.flaticon.com/512/174/174881.png' }
      ]
    }
  ];

  return (
    <div className="certifications">
      <div className="certificationsHeader">
        <h3>Habilidades & Tecnologias</h3>
        <div className="headerDivider"></div>
      </div>

      <div className="skillsGrid2x2">
        <div className="skillsColumn">
          <div 
            className="skillCategory"
            style={{ '--category-color': skillCategories[0].color } as React.CSSProperties}
          >
            <div className="categoryHeader">
              <div 
                className="categoryIcon"
                style={{ backgroundColor: skillCategories[0].color }}
              >
                1
              </div>
              <h4>{skillCategories[0].title}</h4>
            </div>
            
            <div className="skillsContainer">
              {skillCategories[0].skills.map(skill => (
                <div key={skill.name} className="skillItem">
                  <div className="skillIcon">
                    <img
                      alt={skill.name}
                      src={skill.src}
                      style={skill.style}
                    />
                  </div>
                  <span className="skillName">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="skillCategory"
            style={{ '--category-color': skillCategories[2].color } as React.CSSProperties}
          >
            <div className="categoryHeader">
              <div 
                className="categoryIcon"
                style={{ backgroundColor: skillCategories[2].color }}
              >
                3
              </div>
              <h4>{skillCategories[2].title}</h4>
            </div>
            
            <div className="skillsContainer">
              {skillCategories[2].skills.map(skill => (
                <div key={skill.name} className="skillItem">
                  <div className="skillIcon">
                    <img
                      alt={skill.name}
                      src={skill.src}
                      style={skill.style}
                    />
                  </div>
                  <span className="skillName">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skillsColumn">
          <div 
            className="skillCategory"
            style={{ '--category-color': skillCategories[1].color } as React.CSSProperties}
          >
            <div className="categoryHeader">
              <div 
                className="categoryIcon"
                style={{ backgroundColor: skillCategories[1].color }}
              >
                2
              </div>
              <h4>{skillCategories[1].title}</h4>
            </div>
            
            <div className="skillsContainer">
              {skillCategories[1].skills.map(skill => (
                <div key={skill.name} className="skillItem">
                  <div className="skillIcon">
                    <img
                      alt={skill.name}
                      src={skill.src}
                      style={skill.style}
                    />
                  </div>
                  <span className="skillName">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="skillCategory"
            style={{ '--category-color': skillCategories[3].color } as React.CSSProperties}
          >
            <div className="categoryHeader">
              <div 
                className="categoryIcon"
                style={{ backgroundColor: skillCategories[3].color }}
              >
                4
              </div>
              <h4>{skillCategories[3].title}</h4>
            </div>
            
            <div className="skillsContainer">
              {skillCategories[3].skills.map(skill => (
                <div key={skill.name} className="skillItem">
                  <div className="skillIcon">
                    <img
                      alt={skill.name}
                      src={skill.src}
                      style={skill.style}
                    />
                  </div>
                  <span className="skillName">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};