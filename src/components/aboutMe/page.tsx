import "./style.css";
import { 
  FiUser,
  FiCode,
  FiTarget,
  FiAward,
  FiChevronRight,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
  FiCpu,
  FiGlobe,
  FiZap,
  FiBookOpen
} from "react-icons/fi";

export default function About() {
  return (
    <section className="about">
      <div className="aboutHeader">
        <h2 className="titleAbout">Quem Sou</h2>
        <div className="headerDivider"></div>
        <p className="sectionSubtitle">Conheça um pouco da minha jornada e paixão pela tecnologia</p>
      </div>

      <div className="containerAbout">
        <div className="aboutContent">
          <div className="textHeader">
            <div className="nameBadge">
              <div className="statusIndicator active"></div>
              <div className="nameContainer">
                <h3>Eduardo Guerra</h3>
              </div>
              <div className="statusIndicator active"></div>
            </div>
            <p className="subtitle">
              <FiCode className="subtitleIcon" />
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepIndicator">
                  <div className="stepNumber">01</div>
                  <div className="stepIcon">
                    <FiBookOpen size={20} />
                  </div>
                </div>
                <div className="stepContent">
                  <div className="stepHeader">
                    <FiStar className="stepHeaderIcon" />
                    <h4>Início da Jornada</h4>
                  </div>
                  <p>
                    Sou apaixonado por criar soluções inovadoras no mundo da tecnologia.
                    Comecei minha jornada como autodidata, explorando front-end e me
                    apaixonando pela capacidade de transformar ideias em interfaces interativas.
                  </p>
                  <div className="stepTags">
                    <span className="tag">Autodidata</span>
                    <span className="tag">Paixão</span>
                    <span className="tag">Front-end</span>
                  </div>
                </div>
              </div>
              <div className="timelineArrow">
                <FiChevronRight size={24} />
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepIndicator">
                  <div className="stepNumber">02</div>
                  <div className="stepIcon">
                    <FiCpu size={20} />
                  </div>
                </div>
                <div className="stepContent">
                  <div className="stepHeader">
                    <FiZap className="stepHeaderIcon" />
                    <h4>Stack Tecnológica</h4>
                  </div>
                  <p>
                    Atualmente atuo como desenvolvedor full-stack, trabalhando com
                    <span className="highlight"> TypeScript</span>,
                    <span className="highlight"> React.js</span>,
                    <span className="highlight"> Next.js</span> e
                    <span className="highlight"> Node.js</span>.
                    Estou me aprofundando em <span className="highlight">JAVA</span>
                    para expandir meu conhecimento.
                  </p>
                  <div className="techStack">
                    <span className="techItem">TypeScript</span>
                    <span className="techItem">React</span>
                    <span className="techItem">Next.js</span>
                    <span className="techItem">Node.js</span>
                    <span className="techItem">JAVA</span>
                  </div>
                </div>
              </div>
              <div className="timelineArrow">
                <FiChevronRight size={24} />
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepIndicator">
                  <div className="stepNumber">03</div>
                  <div className="stepIcon">
                    <FiTarget size={20} />
                  </div>
                </div>
                <div className="stepContent">
                  <div className="stepHeader">
                    <FiTrendingUp className="stepHeaderIcon" />
                    <h4>Foco e Aprendizado</h4>
                  </div>
                  <p>
                    Meu foco é continuar aprendendo e aprimorando minhas habilidades,
                    tanto no front-end quanto no back-end. Tenho grande interesse em
                    como as partes do sistema se conectam para uma experiência completa.
                  </p>
                  <div className="focusAreas">
                    <div className="focusItem">
                      <div className="focusDot"></div>
                      <span>Aprendizado Contínuo</span>
                    </div>
                    <div className="focusItem">
                      <div className="focusDot"></div>
                      <span>Full-Stack</span>
                    </div>
                    <div className="focusItem">
                      <div className="focusDot"></div>
                      <span>Integração de Sistemas</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timelineArrow">
                <FiChevronRight size={24} />
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepIndicator">
                  <div className="stepNumber">04</div>
                  <div className="stepIcon">
                    <FiAward size={20} />
                  </div>
                </div>
                <div className="stepContent">
                  <div className="stepHeader">
                    <FiGlobe className="stepHeaderIcon" />
                    <h4>Missão Pessoal</h4>
                  </div>
                  <p>
                    Busco sempre me desafiar e evoluir como profissional, com o objetivo
                    de criar soluções eficientes e escaláveis que façam a diferença
                    no mundo digital.
                  </p>
                  <div className="missionStats">
                    <div className="stat">
                      <span className="statNumber">100%</span>
                      <span className="statLabel">Dedicado</span>
                    </div>
                    <div className="stat">
                      <span className="statNumber">∞</span>
                      <span className="statLabel">Evolução</span>
                    </div>
                    <div className="stat">
                      <span className="statNumber">★</span>
                      <span className="statLabel">Excelência</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="journeyEnd">
                <FiArrowRight size={20} />
                <span>Jornada Contínua</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}