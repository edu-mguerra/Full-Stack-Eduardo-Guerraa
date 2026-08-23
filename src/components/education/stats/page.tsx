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
  FiSmartphone,
} from "react-icons/fi";

export const Stats = () => {
  const services = [
    {
      title: "Full Stack",
      icon: <AiFillRocket size={28} />,
      description:
        "Condução de projetos ponta a ponta, unindo dois ecossistemas: .NET/C# e Node.js/React/Next.js. Arquitetura de soluções onde front-end e back-end são desenhados juntos, com decisões técnicas que consideram performance, manutenção e escala desde o início.",
      color: "#667eea",
    },
    {
      title: "Front-end",
      icon: <FiLayout size={28} />,
      description:
        "Interfaces modernas, responsivas e performáticas com React e Next.js. Componentização reutilizável, integração com APIs, gerenciamento de estado, animações e estilização com Tailwind CSS, com foco em boas práticas de UX e SEO.",
      color: "#764ba2",
    },
    {
      title: "Mobile",
      icon: <FiSmartphone size={28} />,
      description:
        "Aplicativos móveis multiplataforma com React Native. Interfaces nativas performáticas, integração com APIs, uso de recursos do dispositivo, gerenciamento de estado e publicação em lojas (Google Play e App Store).",
      color: "#38bdf8",
    },
    {
      title: "UI/UX Design",
      icon: <FiHexagon size={28} />,
      description:
        "Design de interfaces orientado à experiência do usuário: wireframes, protótipos e definição de fluxos. Aplicação de princípios de usabilidade, hierarquia visual e acessibilidade (WCAG) na construção das próprias interfaces que desenvolvo.",
      color: "#f093fb",
    },
    {
      title: "Back-end",
      icon: <FiServer size={28} />,
      description:
        "APIs RESTful com Node.js/Express e C#/.NET, incluindo autenticação JWT, middlewares, validação de dados e regras de negócio. Integração com serviços externos e construção de aplicações seguras e escaláveis.",
      color: "#4facfe",
    },
    {
      title: "Banco de Dados",
      icon: <FiDatabase size={28} />,
      description:
        "Modelagem, implementação e manutenção de bancos SQL e NoSQL. Criação de schemas eficientes, relacionamentos, índices, otimização de queries e garantia de integridade e segurança das informações.",
      color: "#43e97b",
    },
    {
      title: "Automação",
      icon: <FiZap size={28} />,
      description:
        "Automação de processos e rotinas com scripts e integrações entre sistemas. Redução de tarefas manuais, aumento de produtividade e minimização de erros operacionais.",
      color: "#ff9a9e",
    },
  ];

  return (
    <section className="services">
      <div className="servicesHeader">
        <h1 className="servicesTitle">Áreas de Atuação</h1>
        <div className="headerDivider"></div>
        <p className="servicesSubtitle">
          Onde atuo com mais profundidade técnica
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