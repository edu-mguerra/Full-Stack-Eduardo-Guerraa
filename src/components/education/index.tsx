import './style.css';
import { Certificatee } from './certifica/certificate';
import { Stats } from './stats/page';

export default function Education() {
  return (
    <section className="education">
      <div className="educationHeader">
        <h2>Formação & Experiência</h2>
        <div className="headerLine"></div>
      </div>

      <div className="educationContent">
        {/* Formação Acadêmica */}
        <div className="educationSection">
          <h3 className="sectionTitle">🎓 Formação Acadêmica</h3>
          <div className="educationItems">
            <div className="educationItem">
              <div className="educationIcon">🏫</div>
              <div className="educationDetails">
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <p className="institution">Universidade Federal do Vale do São Francisco (UNIVASF)</p>
                <div className="educationMeta">
                  <span className="date">2024 - 2027</span>
                  <span className="status">Em andamento</span>
                </div>
              </div>
            </div>

            <div className="educationItem">
              <div className="educationIcon">🎯</div>
              <div className="educationDetails">
                <h3>Engenharia de Software</h3>
                <p className="institution">Unicesumar</p>
                <div className="educationMeta">
                  <span className="date">2025 - 2029</span>
                  <span className="status">Em andamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experiência Profissional */}
  
        <div className="educationSection">
          <h3 className="sectionTitle">💼 Experiência Profissional</h3>
          <div className="educationItems">
            <div className="educationItem">
              <div className="educationIcon">🚀</div>
              <div className="educationDetails">
                <h3>Desenvolvedor full stack</h3>
                <p className="institution">GrandValle</p>
                <div className="educationMeta">
                  <span className="date">2025 - Presente</span>
                  <span className="status experience">Ativo</span>
                </div>
        
               
                <div className="techSection">
                  <h4 className="techTitle">Principais tecnologias e ferramentas:</h4>
                  <ul className="techList">
                    <li><span className="techCategory">Front-end:</span> React, Next.js, React Native</li>
                    <li><span className="techCategory">Back-end:</span> Node.js, Express, APIs</li>
                    <li><span className="techCategory">Banco de dados:</span> SQL Server, MongoDB, conexões e integrações</li>
                    <li><span className="techCategory">ERP:</span> TOTVS</li>
                    <li><span className="techCategory">Design e prototipação:</span> Figma</li>
                    <li><span className="techCategory">Outros:</span> Automação de processos e integração de sistemas</li>
                  </ul>
                </div>
                
              </div> 
            </div>
          </div>
        </div>
              

        <div className="componentsContainer">
          <Certificatee />
          <Stats />
        </div>
      </div>
    </section>
  );
}
