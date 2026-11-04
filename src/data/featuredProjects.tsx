import React from "react";
import { FiMapPin, FiCpu, FiLayers } from "react-icons/fi";
import { FeaturedProject } from "@/types";

export const FEATURED_REPO_NAMES = [
  "LaserControl-High-Availability-Production-System",
  "gerenciador-rede-dotnet",
];

export const IGNORED_REPO_NAMES = [
  "edu-mguerra",
  "Full-Stack-Eduardo-Guerraa",
  "mini-mario",
  "pokedex",
];

export const featuredProjects: FeaturedProject[] = [
  {
    number: "01",
    icon: <FiMapPin size={20} />,
    name: "Análise Fitossanitária e Mapa de Calor",
    tagline: "Ecossistema Full Stack para monitoramento agronômico com coleta de campo offline e inteligência geoespacial",
    problem:
      "Equipes agrícolas enfrentavam gargalos críticos na identificação e combate a pragas: a coleta em campo ocorria em áreas rurais remotas sem sinal de internet, dependendo de formulários físicos ou anotações manuais. Havia atraso de dias até a consolidação dos dados pela gestão, inviabilizando ações preventivas rápidas e impedindo a visualização espacial de focos de contaminação por talhão.",
    architecture:
      "Solução Full Stack modularizada em três camadas integradas: aplicativo móvel offline-first para vistoria em campo, API RESTful de alta disponibilidade para ingestão e processamento de dados geoespaciais, e aplicação web moderna com dashboards analíticos e renderização de mapas de calor.",
    architectureLayers: [
      {
        layer: "Front-end Web",
        badge: "Next.js & React",
        description:
          "Plataforma web analítica desenvolvida em Next.js e React com TypeScript. Utiliza Server Components para renderização veloz de métricas agronômicas e Client Components para mapas interativos com Leaflet. Renderiza mapas de calor (heatmaps) dinâmicos cruzando coordenadas geográficas, intensidade de infestação e filtros multicritério por talhão e cultura.",
      },
      {
        layer: "Mobile",
        badge: "React Native (Offline-First)",
        description:
          "App mobile em React Native concebido com arquitetura Offline-First para operação em zonas rurais sem cobertura de rede. Captura geolocalização precisa (GPS) de cada vistoria e persiste as ocorrências em fila local com AsyncStorage. Possui sincronizador inteligente que realiza reconciliação automática e idempotente em background assim que identifica sinal Wi-Fi ou 4G.",
      },
      {
        layer: "Back-end & API",
        badge: "Node.js & Express",
        description:
          "API RESTful em Node.js com Express e TypeScript estruturada em camadas de serviço (Clean Architecture). Responsável pela ingestão segura em lote (batch ingestion), resolução de conflitos temporais de sincronização, validação de integridade espacial das coordenadas e processamento estatístico das ocorrências persistidas em banco relacional.",
      },
    ],
    highlight:
      "Pipeline Full Stack Integrado com Resiliência Offline-First: desde a coleta georreferenciada no campo sem conectividade até a sincronização bidirecional na API e a projeção visual em tempo real em mapas de calor no Next.js/React, eliminando 100% dos registros manuais e acelerando a tomada de decisão da equipe agronômica.",
    stack: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL / MySQL",
      "Leaflet",
      "AsyncStorage",
      "Offline-First",
    ],
    githubUrl: "",
    demoUrl: "",
    proprietary: true,
  },
  {
    number: "02",
    icon: <FiCpu size={20} />,
    name: "LaserControl — Sistema de Produção a Laser",
    tagline: "Sistema industrial de alta disponibilidade (Offline-First) para chão de fábrica, integração Serial Port e sincronização resiliente",
    problem:
      "Em linhas industriais de gravação a laser, oscilações ou quedas totais de conectividade não podem paralisar o chão de fábrica. O sistema precisava operar de forma 100% autônoma sem rede, integrar-se diretamente a hardware via porta Serial (RS-232), eliminar riscos de perda ou duplicação de ordens de serviço e rastrear com precisão a transferência de peças e a responsabilidade entre operadores.",
    architecture:
      "Arquitetura distribuída e modular em três camadas fundamentais (Desktop Client, Web API intermediária e Shared Library), projetada sob a filosofia Offline-First para manter a fábrica ativa ininterruptamente:",
    architectureLayers: [
      {
        layer: "Desktop App",
        badge: "C# (.NET) & ReaLTaiizor UI",
        description:
          "Aplicação Windows Forms com Material UI desenvolvida para operadores industriais. Responsável pela interface operacional em tempo real, envio de comandos via porta Serial (RS-232/COM) para máquinas de gravação a laser (com Modo Simulador inteligente para testes sem hardware) e persistência de contingência em cofre local SQLite (producao_offline.db).",
      },
      {
        layer: "Back-end & Web API",
        badge: "ASP.NET Core & MySQL",
        description:
          "API REST intermediária que centraliza as regras de negócio de produção, controle de acesso baseado em perfis (RBAC com Master e Operadores) e segurança com hash de senhas via BCrypt. Gerencia o banco de dados principal MySQL com rotina de Auto-Migration e Seed inicial automático, dispensando execução manual de scripts SQL.",
      },
      {
        layer: "LaserProduction.Shared",
        badge: "Class Library & DTOs",
        description:
          "Biblioteca de classes compartilhada entre o Desktop e a Web API que unifica entidades de domínio, contratos e DTOs (UsuarioDto, NovaProducaoDto, ProducaoOffline). Assegura tipagem estrita, consistência contratual e validações idênticas em toda a comunicação entre cliente e servidor.",
      },
    ],
    highlight:
      "Guardião Offline e Sincronização em 4 Etapas: A cada 60s, uma rotina em background realiza health checks na API. Ao identificar o restabelecimento da rede, resgata a fila de TAGs retidas no SQLite local, despacha a carga para a Web API (MySQL) e, mediante retorno HTTP 200 OK, expurga com segurança o registro local. Inclui ainda fluxo atômico de transferência entre máquinas com retenção de status ('Aguardando Início') para garantir auditoria operacional estrita.",
    stack: [
      "C#",
      ".NET",
      "Windows Forms",
      "ReaLTaiizor",
      "ASP.NET Core",
      "MySQL",
      "SQLite",
      "SerialPort (RS-232)",
      "BCrypt",
      "Offline-First",
    ],
    githubUrl: "https://github.com/edu-mguerra/LaserControl-High-Availability-Production-System",
    demoUrl: "",
    proprietary: false,
  },
  {
    number: "03",
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
