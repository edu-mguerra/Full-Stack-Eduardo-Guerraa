import React from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics?: string[];
  license?: { name: string } | null;
  fork: boolean;
}

export interface ArchitectureLayer {
  layer: string;
  badge: string;
  description: string;
}

export interface FeaturedProject {
  number: string;
  icon: React.ReactNode;
  name: string;
  tagline: string;
  problem: string;
  architecture: string;
  architectureLayers?: ArchitectureLayer[];
  highlight: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  proprietary: boolean;
}

export interface ContactInfo {
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

export interface EducationItem {
  id: number;
  title: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
  type: "academic" | "engineering" | string;
  tags: string[];
  icon: React.ReactNode;
}

export interface TechCategory {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

export interface SkillItem {
  id?: string;
  name: string;
  src: string;
  style?: React.CSSProperties;
}

export interface SkillCategoryGroup {
  id?: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}
