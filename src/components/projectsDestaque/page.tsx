import "./style.css";
import {
  FiCloudRain,
  FiMapPin,
  FiCpu,
  FiTarget,
  FiLayers,
  FiChevronRight,
  FiLock,
  FiClock,
} from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    icon: <FiCloudRain size={20} />,
    name: "FazendaClima",
    tagline: "Monitoramento de risco operacional agrícola baseado em clima",
    problem:
      "Operações agrícolas precisam antecipar riscos climáticos (chuva, vento, temperatura) por talhão, cruzando geolocalização real com previsão meteorológica confiável — sem depender de planilhas ou verificação manual.",
    architecture:
      "Backend em ASP.NET Core (.NET 8) processa os dados geográficos e consulta a Visual Crossing API. Frontend em Next.js/TypeScript renderiza os talhões num mapa interativo com Leaflet, exibindo o risco por área.",
    highlight:
      "Parsing de arquivos KMZ (XML compactado) para extrair os polígonos geográficos dos talhões e cruzar cada coordenada com os dados climáticos correspondentes, sem depender de conversão externa.",
    stack: [".NET 8", "ASP.NET Core", "Next.js", "TypeScript", "Leaflet", "Visual Crossing API"],
    githubUrl: "https://github.com/edu-mguerra/fazenda-clima",
    demoUrl: "",
    proprietary: false,
  },
  {
    number: "02",
    icon: <FiMapPin size={20} />,
    name: "Análise Fitossanitária e Mapa de Calor",
    tagline: "Coleta de campo offline-first com visualização geográfica de ocorrências",
    problem:
      "Fazendas precisavam registrar ocorrências de pragas e doenças diretamente em campo, muitas vezes sem conexão à internet, e depois visualizar essas ocorrências geograficamente para identificar rapidamente as regiões com maior incidência.",
    architecture:
      "Aplicativo mobile em React Native captura a geolocalização de cada inspeção e armazena os registros localmente com AsyncStorage. Assim que identifica conexão Wi-Fi, o app sincroniza automaticamente esses dados com o banco através de uma API REST em Node.js/Express, que processa e organiza as informações exibidas numa aplicação web através de mapas de calor.",
    highlight:
      "Sincronização offline-first: os registros coletados em campo sem conexão ficam armazenados localmente e sincronizam automaticamente com a API assim que o dispositivo identifica rede Wi-Fi disponível, sem exigir ação manual do usuário.",
    stack: ["React Native", "Node.js", "Express.js", "React", "AsyncStorage", "Geolocalização", "MySQL/PostgreSQL"],
    githubUrl: "",
    demoUrl: "",
    proprietary: true,
  },
  {
    number: "03",
    icon: <FiCpu size={20} />,
    name: "LaserControl",
    tagline: "Controle de máquina a laser com operação offline-first",
    problem:
      "O ambiente de produção tem conexão instável, mas a operação da máquina não pode parar. O sistema precisa continuar funcionando mesmo sem rede e sincronizar depois, sem perder comandos.",
    architecture:
      "Aplicação desktop em C#/WinForms se comunica diretamente com o hardware via SerialPort. Uma API em ASP.NET Core cuida da sincronização em background assim que a conexão é restabelecida.",
    highlight:
      "SQLite como fila local: cada comando e leitura é persistido no disco antes de ser sincronizado, garantindo que nenhum dado se perca mesmo com quedas de conexão prolongadas.",
    stack: ["C#", "WinForms", "ASP.NET Core", "SQLite", "SerialPort"],
    githubUrl: "https://github.com/edu-mguerra/LaserControl-High-Availability-Production-System",
    demoUrl: "",
    proprietary: false,
  },
  {
    number: "04",
    icon: <FiLayers size={20} />,
    name: "Network Guardian API",
    tagline: "Mapeamento, auditoria e controle de dispositivos em redes locais",
    problem:
      "Redes locais careciam de visibilidade centralizada: não havia como saber quais dispositivos estavam ativos, o que trafegava pela rede, nem uma forma programática de isolar um dispositivo suspeito sem acesso físico ao roteador.",
    architecture:
      "API REST em .NET 8 combina um scanner ARP assíncrono (camada 2) para descoberta contínua de dispositivos com um sniffer de pacotes IPv4 em modo promíscuo via SharpPcap/PacketDotNet, persistindo estados (Conectou, Desconectou, BloqueadoPeloAdmin) em MySQL via Entity Framework Core.",
    highlight:
      "Isolamento de escopo com IServiceScopeFactory dentro de BackgroundServices garante thread-safety do DbContext ao processar milhares de pacotes simultâneos. Um ConcurrentDictionary atua como camada de throttle, agrupando pacotes em memória para proteger o MySQL de exaustão de conexões durante picos de tráfego.",
    stack: [".NET 8", "C#", "SharpPcap", "PacketDotNet", "Entity Framework Core", "MySQL", "Swagger"],
    githubUrl: "https://github.com/edu-mguerra/gerenciador-rede-dotnet",
    demoUrl: "",
    proprietary: false,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="projects">
      <div className="projectsHeader">
        <h2 className="titleProjects">Projetos em Destaque</h2>
        <div className="headerDivider"></div>
        <p className="sectionSubtitle">
          Soluções reais, do problema à arquitetura implementada
        </p>
      </div>

      <div className="containerProjects">
        <div className="projectsContent">
          {projects.map((project) => (
            <div className="projectItem" key={project.number}>
              <div className="projectContent">
                <div className="stepIndicator">
                  <div className="stepNumber">{project.number}</div>
                  <div className="stepIcon">{project.icon}</div>
                </div>

                <div className="projectBody">
                  <div className="projectTitleRow">
                    <h3>{project.name}</h3>
                    <div className="projectLinks">
                      {project.proprietary ? (
                        <span className="proprietaryBadge" title="Projeto corporativo — código não público">
                          <FiLock size={14} />
                          corporativo
                        </span>
                      ) : (
                        project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="projectLink"
                            aria-label="Repositório no GitHub"
                          >
                            <FaGithub size={20} />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                  <p className="projectTagline">{project.tagline}</p>

                  <div className="projectSection">
                    <div className="projectSectionHeader">
                      <FiTarget className="sectionIcon" />
                      <span>O Problema</span>
                    </div>
                    <p>{project.problem}</p>
                  </div>

                  <div className="projectSection">
                    <div className="projectSectionHeader">
                      <FiLayers className="sectionIcon" />
                      <span>Arquitetura</span>
                    </div>
                    <p>{project.architecture}</p>
                  </div>

                  <div className="projectSection highlightSection">
                    <div className="projectSectionHeader">
                      <FiChevronRight className="sectionIcon" />
                      <span>Destaque Técnico</span>
                    </div>
                    <p>{project.highlight}</p>
                  </div>

                  <div className="techStack">
                    {project.stack.map((tech) => (
                      <span className="techItem" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}