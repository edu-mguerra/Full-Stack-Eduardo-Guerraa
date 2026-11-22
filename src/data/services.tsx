import React from "react";
import { AiFillRocket } from "react-icons/ai";
import { FiLayout, FiSmartphone, FiServer, FiDatabase, FiCpu } from "react-icons/fi";
import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    title: "Full Stack",
    icon: <AiFillRocket size={28} />,
    description:
      "Condução de projetos ponta a ponta, unindo dois ecossistemas: .NET/C# e Node.js/React/Next.js. Arquitetura de soluções onde front-end e back-end são desenhados juntos, com decisões técnicas que consideram performance, manutenção e escala desde o início.",
    color: "#667eea",
  },
  {
    title: "Engenheiro de IA",
    icon: <FiCpu size={28} />,
    description:
      "Desenvolvimento de agentes autônomos e fluxos inteligentes com Python, LangChain e LangGraph. Implementação de arquiteturas RAG (Retrieval-Augmented Generation) para busca semântica sobre documentos e bases corporativas, integração de LLMs (OpenAI, Gemini) a bancos de dados e APIs existentes, e automação inteligente de processos.",
    color: "#10b981",
  },
  {
    title: "Back-end",
    icon: <FiServer size={28} />,
    description:
      "APIs RESTful com C#/.NET e Node.js (NestJS/Express), incluindo autenticação JWT, RBAC, validação de dados e regras de negócio. Integrações com ERPs corporativos, serviços externos e construção de microsserviços seguros e escaláveis.",
    color: "#4facfe",
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
      "Aplicativos móveis multiplataforma com React Native e Expo. Interfaces nativas performáticas, integração com APIs, arquitetura offline-first resiliente, gerenciamento de estado e publicação em lojas (Google Play e App Store).",
    color: "#38bdf8",
  },
  {
    title: "Banco de Dados & Engenharia de Dados",
    icon: <FiDatabase size={28} />,
    description:
      "Modelagem relacional e NoSQL, otimização avançada de queries e estruturação de pipelines de dados (ETL/ELT). Criação de fluxos de ingestão, consolidação de dados entre microsserviços, cache distribuído com Redis e garantia de integridade, disponibilidade e performance analítica.",
    color: "#43e97b",
  },
];
