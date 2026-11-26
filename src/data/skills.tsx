import React from "react";
import { FiCode, FiServer, FiDatabase, FiCpu, FiCloud } from "react-icons/fi";
import { SkillCategoryGroup } from "@/types";

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "ai",
    title: "Engenharia de IA & Agentes Inteligentes",
    color: "#10b981",
    icon: <FiCpu size={24} />,
    skills: [
      {
        name: "Python",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "LangChain",
        src: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
        style: { borderRadius: "6px" },
      },
      {
        name: "LangGraph",
        src: "/icons/langgraph.svg",
      },
      {
        name: "RAG & Embeddings",
        src: "/icons/rag.svg",
      },
      {
        name: "OpenAI & Gemini",
        src: "/icons/openai.svg",
      },
      {
        name: "Fine-Tuning",
        src: "/icons/finetuning.svg",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-End & Sistemas Corporativos",
    color: "#764ba2",
    icon: <FiServer size={24} />,
    skills: [
      {
        id: "csharp",
        name: "C#",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        id: "dotnet",
        name: ".NET / ASP.NET Core",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      },
      {
        id: "nestjs",
        name: "NestJS",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
      },
      {
        id: "nodejs",
        name: "Node.js",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        id: "express",
        name: "Express.js",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-End & Mobile",
    color: "#667eea",
    icon: <FiCode size={24} />,
    skills: [
      {
        name: "React",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        src: "https://www.svgrepo.com/show/368858/nextjs.svg",
        style: { background: "#fff", borderRadius: "100%", padding: "2px" },
      },
      {
        name: "React Native",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        src: "https://www.svgrepo.com/show/353723/expo-icon.svg",
        style: { background: "#fff", borderRadius: "8px", padding: "2px" },
      },
      {
        name: "TypeScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
      },
    ],
  },
  {
    id: "databases",
    title: "Bancos de Dados & Cache",
    color: "#f093fb",
    icon: <FiDatabase size={24} />,
    skills: [
      {
        name: "PostgreSQL",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQL Server",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "MySQL",
        src: "https://www.svgrepo.com/show/373848/mysql.svg",
      },
      {
        name: "SQLite",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "MongoDB",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    id: "devops",
    title: "Cloud, DevOps & Infraestrutura",
    color: "#4facfe",
    icon: <FiCloud size={24} />,
    skills: [
      {
        name: "AWS",
        src: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-aws-icon-svg-download-png-2944772.png?f=webp&w=256",
      },
      {
        name: "Docker",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Linux / VPS",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  },
];
