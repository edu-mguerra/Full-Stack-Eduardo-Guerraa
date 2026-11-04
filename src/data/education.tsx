import React from "react";
import { FiBookOpen, FiCpu, FiLayout, FiServer, FiDatabase, FiGitBranch, FiMonitor } from "react-icons/fi";
import { EducationItem, TechCategory } from "@/types";

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Análise e Desenvolvimento de Sistemas",
    degree: "Graduação",
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
    degree: "Bacharelado",
    institution: "Unicesumar",
    period: "2025 - 2029",
    status: "Em andamento",
    type: "engineering",
    tags: ["Engenharia", "Software", "Arquitetura"],
    icon: <FiCpu size={24} />,
  },
];

export const techStack: TechCategory[] = [
  { category: "Front-end", icon: <FiLayout size={18} />, items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"] },
  { category: "Back-end", icon: <FiServer size={18} />, items: ["Node.js", "Express", "C#", ".Net"] },
  { category: "Banco de Dados & Dados", icon: <FiDatabase size={18} />, items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "DevOps/Infra", icon: <FiGitBranch size={18} />, items: ["Linux", "Git", "Docker", "AWS"] },
  { category: "Outros", icon: <FiMonitor size={18} />, items: ["Clean Code", "SOLID", "Clean Architecture", "Scrum"] },
];
