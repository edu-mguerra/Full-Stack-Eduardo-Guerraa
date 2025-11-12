import "./style.css";

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
               <div className="statusIndicator"></div>
              <h3>Eduardo Guerra</h3>
              <div className="statusIndicator"></div>
            </div>
            <p className="subtitle">Desenvolvedor Full Stack</p>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepNumber">01</div>
                <br/>
                <div className="stepContent">
                  <h4>Início da Jornada</h4>
                  <p>
                    Sou apaixonado por criar soluções inovadoras no mundo da tecnologia.
                    Comecei minha jornada como autodidata, explorando front-end e me
                    apaixonando pela capacidade de transformar ideias em interfaces interativas.
                  </p>
                </div>
              </div>
              <div className="timelineArrow">→</div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepNumber">02</div>
                <br/>
                <div className="stepContent">
                  <h4>Stack Tecnológica</h4>
                  <p>
                    Atualmente atuo como desenvolvedor full-stack, trabalhando com
                    <span className="highlight"> TypeScript</span>,
                    <span className="highlight"> React.js</span>,
                    <span className="highlight"> Next.js</span> e
                    <span className="highlight"> Node.js</span>.
                    Estou me aprofundando em <span className="highlight">JAVA</span>
                    para expandir meu conhecimento.
                  </p>
                </div>
              </div>
              <div className="timelineArrow">→</div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepNumber">03</div>
                <br/>
                <div className="stepContent">
                  <h4>Foco e Aprendizado</h4>
                  <p>
                    Meu foco é continuar aprendendo e aprimorando minhas habilidades,
                    tanto no front-end quanto no back-end. Tenho grande interesse em
                    como as partes do sistema se conectam para uma experiência completa.
                  </p>
                </div>
              </div>
              <div className="timelineArrow">→</div>
            </div>

            <div className="timelineItem">
              <div className="timelineContent">
                <div className="stepNumber">
                  04
                </div>
                <br/>
                <div className="stepContent">
                  <h4>Missão Pessoal</h4>
                  <p>
                    Busco sempre me desafiar e evoluir como profissional, com o objetivo
                    de criar soluções eficientes e escaláveis que façam a diferença
                    no mundo digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}