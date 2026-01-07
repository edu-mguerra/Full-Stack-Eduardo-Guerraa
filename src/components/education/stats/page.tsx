import { AiFillRocket } from "react-icons/ai";
import "./style.css";
import {
  FiLayout,
  FiHexagon,
  FiServer,
  FiDatabase,
  FiZap,
  FiCode,
  FiCpu,
} from "react-icons/fi";

export const Stats = () => {
  const services = [
    {
      title: "Full Stack",
      icon: <AiFillRocket size={28} />,
      description:
        "Desenvolvimento end-to-end de aplicações web, desde o design da interface até a lógica de negócio e persistência de dados. Implementação de arquiteturas escaláveis, consumo e criação de APIs REST, autenticação, controle de permissões e otimização de performance.",
      color: "#667eea",
    },
    {
      title: "Front-end",
      icon: <FiLayout size={28} />,
      description:
        "Criação de interfaces modernas, responsivas e performáticas utilizando React. Componentização reutilizável, integração com APIs, gerenciamento de estado, animações e estilização com Tailwind CSS, seguindo boas práticas de UX e SEO.",
      color: "#764ba2",
    },
    {
      title: "UI/UX Design",
      icon: <FiHexagon size={28} />,
      description:
        "Design de interfaces focadas na experiência do usuário, com wireframes, protótipos e definição de fluxos. Aplicação de princípios de usabilidade, hierarquia visual, acessibilidade (WCAG) e consistência visual para maximizar conversão e engajamento.",
      color: "#f093fb",
    },
    {
      title: "Back-end",
      icon: <FiServer size={28} />,
      description:
        "Desenvolvimento de APIs RESTful com Node.js/Express e Java/Spring, incluindo autenticação JWT, middleware de validação, implementação de regras de negócio, controle de permissões e integrações externas. Arquitetura orientada à segurança, escalabilidade e fácil manutenção.",
      color: "#4facfe",
    },
    {
      title: "Banco de Dados",
      icon: <FiDatabase size={28} />,
      description:
        "Modelagem, implementação e manutenção de bancos de dados SQL e NoSQL. Criação de schemas eficientes, relacionamentos, índices, otimização de queries e garantia de integridade e segurança das informações.",
      color: "#43e97b",
    },
    {
      title: "Automação",
      icon: <FiZap size={28} />,
      description:
        "Automação de processos e rotinas com scripts personalizados, integrações entre sistemas e otimização de fluxos operacionais. Redução de tarefas manuais, aumento de produtividade e minimização de erros.",
      color: "#ff9a9e",
    },
  ];

  return (
    <section className="services">
      <div className="servicesHeader">
        <h1 className="servicesTitle">Serviços</h1>
        <div className="headerDivider"></div>
        <p className="servicesSubtitle">
          Soluções completas para suas necessidades digitais
        </p>
      </div>

      <div className="servicesGrid">
        {services.map((service) => (
          <div
            key={service.title}
            className="serviceCard"
            style={{ "--card-color": service.color } as React.CSSProperties}
          >
            <div className="cardHeader">
              <div
                className="serviceIcon"
                style={{
                  backgroundColor: `${service.color}20`,
                  border: `2px solid ${service.color}40`,
                }}
              >
                {service.icon}
              </div>
              <h3 className="serviceTitle">{service.title}</h3>
            </div>
            <div className="cardContent">
              <p className="serviceDescription">{service.description}</p>
            </div>
            <div className="cardFooter">
              <FiCode className="footerIcon" />
              <FiCpu className="footerIcon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
