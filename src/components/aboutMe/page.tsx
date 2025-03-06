import "./style.css";

export default function About() {

  return (
    <>
      <h3 className="titleAbout">Quem sou</h3>
      <div className="containerAbout">
        <div className="aboutMe">

          <p>
            Olá, sou Eduardo Guerra, desenvolvedor full-stack apaixonado por tecnologia. Comecei minha jornada na programação por curiosidade, com foco no front-end, o que me ajudou a entender as bases do desenvolvimento web. Hoje, trabalho com TypeScript, React.js, Next.js e Node.js no back-end, além de estudar Java para expandir meus conhecimentos.
            <br />
            Embora tenha preferência por atuar como desenvolvedor full-stack, tenho interesse em explorar tanto o front-end quanto o back-end. Meu principal objetivo é me tornar um profissional cada vez melhor, sempre focado no aprendizado contínuo e em alcançar ótimos resultados em cada desafio.
          </p>


        </div>
        <div className="img">
          <img src="images/img3.jpg" />
        </div>
      </div>
    </>
  )
}
