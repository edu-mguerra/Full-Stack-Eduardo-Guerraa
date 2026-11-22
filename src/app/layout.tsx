import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduardo Guerra | Desenvolvedor Full Stack & Engenheiro de IA",
  description:
    "Portfólio de Eduardo Guerra: Desenvolvedor Full Stack (.NET, Next.js, Python), Engenharia de IA (RAG, Agentes, LLMs) e arquiteturas de alta disponibilidade.",
  keywords: [
    "Eduardo Guerra",
    "Desenvolvedor Full Stack",
    "Engenheiro de IA",
    "LangChain",
    "LangGraph",
    "RAG",
    "Python",
    ".NET",
    "ASP.NET Core",
    "Next.js",
    "React Native",
    "Offline-First",
  ],
  authors: [{ name: "Eduardo Guerra" }],
  creator: "Eduardo Guerra",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://eduardo-guerra.vercel.app",
    title: "Eduardo Guerra | Desenvolvedor Full Stack & Engenheiro de IA",
    description:
      "Portfólio de Eduardo Guerra: Desenvolvedor Full Stack (.NET, Next.js, Python), Engenharia de IA (RAG, Agentes, LLMs) e arquiteturas de alta disponibilidade.",
    siteName: "Eduardo Guerra - Portfólio",
  },
  icons: {
    icon: "images/E.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
