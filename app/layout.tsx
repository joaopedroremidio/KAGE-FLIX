import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kage Flix — Seu universo de animes",
  description: "Descubra animes, explore novidades e encontre onde assistir oficialmente.",
  applicationName: "Kage Flix",
  themeColor: "#09090b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
