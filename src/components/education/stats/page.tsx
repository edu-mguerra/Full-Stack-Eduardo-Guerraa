import './style.css';

export const Stats = () => {
  return (
    <>

      <h1>Serviços</h1>
      <div className='container-all'>
        <div className='hab'>
          <h1>Full Stack</h1>
          <p>
            Desenvolvimento de aplicações completas, integrando front-end moderno com back-end robusto.<br />
            Arquiteturas escaláveis, otimização de performance, integração com APIs externas<br />

          </p>
        </div>

        <div className='hab'>
          <h1>Front-end </h1>
          <p>
            Interfaces responsivas e intuitivas usando React, HTML5, CSS3, Tailwind CSS, Material Icons,<br />
            bibliotecas de UI populares e styled-components para estilização dinâmica.
          </p>
        </div>

        <div className='hab'>
          <h1>UI/UX Design</h1>
          <p>
            Aplicação de princípios de design centrado no usuário para criar interfaces intuitivas e agradáveis,<br />
            com foco em acessibilidade, usabilidade e experiência do usuário.
          </p>
        </div>
      </div>

      <div className='container-all'>
        <div className='hab'>
          <h1>Back-end</h1>
          <p>
            Desenvolvimento de APIs e CRUDs usando Node.js e Express,<br />
            integração com bancos de dados, validação de dados com Zod,<br />
            uso do Firebase para autenticação e serviços em nuvem.<br /><br />

          </p>
        </div>

        <div className='hab'>
          <h1>Banco de Dados</h1>
          <p>
            Desenvolvimento de APIs e CRUDs usando Node.js e Express,<br />
            integração com bancos de dados, validação de dados com Zod,<br />
            e uso do Firebase para autenticação e serviços em nuvem.
          </p>
        </div>

        <div className='hab'>
          <h1>Automação de Processos</h1>
          <p>
            Desenvolvimento de scripts e ferramentas para automatizar<br />
            tarefas repetitivas, otimizando fluxos de trabalho e aumentando a produtividade.
          </p>
        </div>
      </div>
    </>
  );
};
