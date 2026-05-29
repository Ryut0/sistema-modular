import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "InvGate Service Management",
  title: "InvGate Service Management | Plataforma ITSM Enterprise",
  description:
    "Centraliza tickets, SLAs, activos, automatizaciones, conocimiento y analítica en una plataforma ITSM preparada para equipos enterprise.",
  keywords: [
    "ITSM",
    "service desk",
    "mesa de ayuda",
    "software ITSM",
    "gestión de servicios",
    "InvGate Service Management",
    "automatización IT",
    "SLAs",
    "ITIL"
  ],
  openGraph: {
    title: "InvGate Service Management | Plataforma ITSM Enterprise",
    description:
      "Centraliza servicios, automatiza procesos y controla la operación IT con una plataforma preparada para crecer.",
    type: "website",
    locale: "es_CO"
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title: "InvGate Service Management | Plataforma ITSM Enterprise",
    description:
      "Centraliza servicios, automatiza procesos y controla la operación IT con una plataforma preparada para crecer."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
