import React from "react";
import { FiCode, FiServer, FiDatabase, FiCpu } from "react-icons/fi";
import { SkillCategoryGroup } from "@/types";

export const skillCategories: SkillCategoryGroup[] = [
  {
    title: "Front-End",
    color: "#667eea",
    icon: <FiCode size={24} />,
    skills: [
      {
        name: "React",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        src: "https://www.svgrepo.com/show/368858/nextjs.svg",
        style: { background: "#fff", borderRadius: "100%", padding: "2px" },
      },
      {
        name: "Tailwind",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "JavaScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Figma",
        src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    color: "#764ba2",
    icon: <FiServer size={24} />,
    skills: [
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
      {
        id: "csharp",
        name: "C#",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        id: "dotnet",
        name: ".NET",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      },
    ],
  },
  {
    title: "Banco de Dados & Engenharia de Dados",
    color: "#f093fb",
    icon: <FiDatabase size={24} />,
    skills: [
      {
        name: "PostgreSQL",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        src: "https://www.svgrepo.com/show/373848/mysql.svg",
      },
      {
        name: "SQL Server",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "MongoDB",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "SQLite",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
    ],
  },
  {
    title: "Sistemas & DevOps",
    color: "#4facfe",
    icon: <FiCpu size={24} />,
    skills: [
      {
        name: "Docker",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        src: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-aws-icon-svg-download-png-2944772.png?f=webp&w=256",
      },
      {
        name: "Linux",
        src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
      {
        name: "Apache",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "WordPress",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
    ],
  },
];
