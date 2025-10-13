import './style.css';

export const Stats = () => {
  const services = [
    {
      title: "Full Stack",
      icon: "🚀",
      description: "Desenvolvimento de aplicações completas, integrando front-end moderno com back-end robusto. Arquiteturas escaláveis, otimização de performance e integração com APIs externas.",
      color: "#667eea"
    },
    {
      title: "Front-end",
      icon: "🎨",
      description: "Interfaces responsivas e intuitivas usando React, HTML5, CSS3, Tailwind CSS e bibliotecas de UI populares para estilização dinâmica e moderna.",
      color: "#764ba2"
    },
    {
      title: "UI/UX Design",
      icon: "✨",
      description: "Aplicação de princípios de design centrado no usuário para criar interfaces intuitivas e agradáveis, com foco em acessibilidade e usabilidade.",
      color: "#f093fb"
    },
    {
      title: "Back-end",
      icon: "⚙️",
      description: "Desenvolvimento de APIs e CRUDs usando Node.js e Express, integração com bancos de dados, validação de dados e autenticação.",
      color: "#4facfe"
    },
    {
      title: "Banco de Dados",
      icon: "🗄️",
      description: "Modelagem e implementação de bancos de dados relacionais e não-relacionais, otimização de queries e garantia de integridade dos dados.",
      color: "#43e97b"
    },
    {
      title: "Automação",
      icon: "🤖",
      description: "Desenvolvimento de scripts e ferramentas para automatizar tarefas repetitivas, otimizando fluxos de trabalho e aumentando a produtividade.",
      color: "#ff9a9e"
    }
  ];

  return (
    <section className="services">
      <div className="servicesHeader">
        <h1>Serviços</h1>
        <div className="headerDivider"></div>
        <p className="servicesSubtitle">Soluções completas para suas necessidades digitais</p>
      </div>

      <div className="servicesGrid">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="serviceCard"
            style={{ '--card-color': service.color } as React.CSSProperties}
          >
            <div className="cardHeader">
              <div 
                className="serviceIcon"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
            </div>
            <div className="cardContent">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};