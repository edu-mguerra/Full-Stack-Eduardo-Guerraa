import React from "react";
import { FiMapPin, FiCpu, FiShield } from "react-icons/fi";
import { FeaturedProject } from "@/types";

export const FEATURED_REPO_NAMES = [
  "LaserControl-High-Availability-Production-System",
  "SentinelMonitor",
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
    tagline: "Ecossistema Full Stack para monitoramento agronômico com coleta de campo offline e mapas de calor",
    problem:
      "Identificação e combate a pragas em áreas rurais remotas sem internet. A dependência de fichas manuais atrasava a tomada de decisão em dias e impedia a visão espacial dos focos por talhão.",
    architecture:
      "Ecossistema integrado em 3 camadas: app mobile offline-first para campo, API RESTful para processamento geoespacial e dashboard web com mapas de calor interativos:",
    architectureLayers: [
      {
        layer: "Front-end Web",
        badge: "Next.js & React",
        description:
          "Dashboard analítico em Next.js e React com mapas de calor (Leaflet). Cruza coordenadas GPS, severidade de infestação e filtros dinâmicos por talhão e cultura.",
      },
      {
        layer: "Mobile",
        badge: "React Native (Offline-First)",
        description:
          "App em React Native concebido para operação 100% offline em campo. Salva coletas em fila local (AsyncStorage) e sincroniza automaticamente assim que detecta conexão.",
      },
      {
        layer: "Back-end & API",
        badge: "Node.js & TypeScript",
        description:
          "API RESTful em camadas de serviço (Clean Architecture). Responsável pela ingestão em lote, resolução de conflitos de sincronização e validação geoespacial.",
      },
    ],
    highlight:
      "Pipeline completo Offline-First: da coleta georreferenciada no campo sem conectividade à sincronização resiliente na API e visualização em tempo real em mapas de calor, eliminando 100% das fichas manuais.",
    stack: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
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
    tagline: "Sistema industrial de alta disponibilidade (Offline-First) para chão de fábrica e controle de máquinas",
    problem:
      "Oscilações ou quedas de internet não podiam paralisar máquinas industriais a laser. O chão de fábrica exigia operação 100% autônoma sem rede, integração Serial direta e rastreabilidade estrita entre operadores.",
    architecture:
      "Arquitetura distribuída em 3 camadas (Desktop Client, Web API intermediária e Shared Library), projetada sob o padrão Offline-First para produção contínua:",
    architectureLayers: [
      {
        layer: "Desktop App",
        badge: "C# (.NET) & ReaLTaiizor UI",
        description:
          "Interface em C# WinForms com Material UI. Envia comandos via porta Serial (RS-232/COM) com modo simulador integrado e mantém fila de contingência em cofre local SQLite.",
      },
      {
        layer: "Back-end & Web API",
        badge: "ASP.NET Core & MySQL",
        description:
          "API REST intermediária com RBAC, senhas em BCrypt e banco MySQL. Inclui Auto-Migration e Seed inicial automático, dispensando execução manual de scripts SQL.",
      },
      {
        layer: "LaserProduction.Shared",
        badge: "Class Library & DTOs",
        description:
          "Biblioteca de classes compartilhada contendo entidades de domínio, validações e DTOs tipados. Garante consistência estrita de contratos trafegados entre desktop e servidor.",
      },
    ],
    highlight:
      "Guardião Offline em 4 etapas: rotina em background verifica a rede a cada 60s, drena a fila do SQLite, despacha em lote para a Web API e expurga os registros locais apenas após confirmação HTTP 200 OK.",
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
    icon: <FiShield size={20} />,
    name: "Sentinel Monitor — Observabilidade & Agentes Multi-Tenant",
    tagline: "Plataforma SaaS para monitoramento de servidores VPS, agentes autônomos em Python e sondas sintéticas",
    problem:
      "Monitoramento de servidores VPS em múltiplos provedores sem expor portas vulneráveis de entrada (inbound). Soluções comuns não tinham proteção anti-SSRF em testes sintéticos nem buffer para quedas de rede.",
    architecture:
      "Arquitetura distribuída de microsserviços integrando agentes de telemetria em Python, backend assíncrono em FastAPI e dashboard moderno em Next.js 15:",
    architectureLayers: [
      {
        layer: "Agente Autônomo Multiplataforma",
        badge: "Python 3.10+ & psutil",
        description:
          "Daemon leve em Python (Linux systemd, macOS e Windows) operando em modo 100% outbound. Coleta CPU, RAM, I/O, portas e Docker, com buffer local criptografado para contingência offline.",
      },
      {
        layer: "Back-end & API Assíncrona",
        badge: "FastAPI & SQLAlchemy 2.0 Async",
        description:
          "API RESTful assíncrona em FastAPI e SQLAlchemy 2.0. Possui sondas sintéticas (HTTP/TCP) com blindagem Anti-SSRF (bloqueio pós-DNS de IPs privados e metadados de nuvem) e despachante SMTP.",
      },
      {
        layer: "Front-end & Dashboard SaaS",
        badge: "Next.js 15 & Tailwind CSS",
        description:
          "Painel SaaS multi-tenant em Next.js 15 com RBAC. Renderiza telemetria em tempo real, gráficos de latência com Recharts, histórico de incidentes e pipeline de updates.",
      },
    ],
    highlight:
      "Segurança de Borda e Anti-SSRF: Agentes operam 100% outbound sem portas expostas e com buffer criptografado. Sondas sintéticas contam com bloqueio pós-resolução DNS contra ataques SSRF em redes privadas.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js 15",
      "TypeScript",
      "SQLAlchemy Async",
      "PostgreSQL / MySQL",
      "Pydantic v2",
      "Docker",
      "Tailwind CSS",
      "Recharts",
    ],
    githubUrl: "https://github.com/edu-mguerra/SentinelMonitor",
    demoUrl: "",
    proprietary: false,
  },
];
