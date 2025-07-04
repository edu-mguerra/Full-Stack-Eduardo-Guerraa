import './style.css';

export const Certificatee = () => {
  return (
    <div className="certifications">
      <h3>Habilidades</h3>

      <div className="skills-row">
        <div className="skills-category1">
          <h4>Front-End</h4>
          <div className="skills-icons">

        
            {[
              { name: 'HTML', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
              { name: 'CSS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
              { name: 'Tailwind', src: 'https://alunos.b7web.com.br/media/courses/logo/tailwindcss.jpg' },
              { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
              { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
              { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
              { name: 'React Native', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
              { name: 'Next.js', src: 'https://www.svgrepo.com/show/368858/nextjs.svg', style: { background: '#fff', borderRadius: '100%' } },
              { name: 'Vue.js', src: 'https://br.vuejs.org/images/logo.svg' }
            ].map(skill => (
              <div key={skill.name} style={{ display: 'inline-block', textAlign: 'center', margin: '0 5px' }}>
                <img
                  alt={skill.name}
                  height="30"
                  width="40"
                  src={skill.src}
                  style={skill.style}
                />
                <div style={{ fontSize: '10px' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category2">
          <h4>Back-End</h4>
          <div className="skills-icons">
            {[
              { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
              { name: 'PHP', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg' },
              { name: 'Firebase', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' }
            ].map(skill => (
              <div key={skill.name} style={{ display: 'inline-block', textAlign: 'center', margin: '0 5px' }}>
                <img alt={skill.name} height="30" width="40" src={skill.src} />
                <div style={{ fontSize: '10px' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-row">
        <div className="skills-category3">
          <h4>Banco de Dados</h4>
          <div className="skills-icons">
            {[
              { name: 'MySQL', src: 'https://www.svgrepo.com/show/373848/mysql.svg' },
              { name: 'SQL', src: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
              { name: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
              { name: 'SQLite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' }
            ].map(skill => (
              <div key={skill.name} style={{ display: 'inline-block', textAlign: 'center', margin: '0 5px' }}>
                <img alt={skill.name} height="40" width="40" src={skill.src} />
                <div style={{ fontSize: '10px' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category4">
          <h4>Outros</h4>
          <div className="skills-icons">
            {[
              { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
              { name: 'Figma', src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg' },
              { name: 'WordPress', src: 'https://cdn-icons-png.flaticon.com/512/174/174881.png' }
            ].map(skill => (
              <div key={skill.name} style={{ display: 'inline-block', textAlign: 'center', margin: '0 5px' }}>
                <img alt={skill.name} height="30" width="40" src={skill.src} />
                <div style={{ fontSize: '10px' }}>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
