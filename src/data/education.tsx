import React from "react";
import { FiBookOpen, FiCpu, FiLayout, FiServer, FiDatabase, FiGitBranch, FiMonitor } from "react-icons/fi";
import { EducationItem, TechCategory } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas",
    degree: "",
    institution: "Universidade Federal do Vale do São Francisco (UNIVASF)",
    period: "2024 - 2027",
    status: "Em andamento",
    type: "academic",
    tags: ["Tecnologia", "Desenvolvimento", "Software"],
    icon: <FiBookOpen size={24} />,
  },
  {
    id: 2,
    title: "Engenharia de Software",
    degree: "",
    institution: "Unicesumar",
    period: "2025 - 2029",
    status: "Em andamento",
    type: "engineering",
    tags: ["Engenharia", "Software", "Arquitetura"],
    icon: <FiCpu size={24} />,
  },
];

export const techStack: TechCategory[] = [
  { category: "IA & Agentes", icon: <FiCpu size={18} />, items: ["Python", "LangChain", "LangGraph", "RAG", "LLMs", "Fine-Tuning"] },
  { category: "Back-end", icon: <FiServer size={18} />, items: ["C#", ".NET Core", "NestJS", "Node.js", "Express", "APIs REST"] },
  { category: "Front-end & Mobile", icon: <FiLayout size={18} />, items: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS"] },
  { category: "Banco de Dados & Cache", icon: <FiDatabase size={18} />, items: ["PostgreSQL", "SQL Server", "MySQL", "SQLite", "MongoDB", "Redis"] },
  { category: "Cloud & DevOps", icon: <FiGitBranch size={18} />, items: ["AWS", "Docker", "Linux / VPS", "Git"] },
];
