import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Sistema Modular",
  title: "Sistema Modular | Soporte, activos y operaciones internas",
  description:
    "Gestiona soporte, activos, SLAs, permisos y automatizaciones en una plataforma modular para operaciones internas.",
  keywords: [
    "Sistema Modular",
    "mesa de ayuda",
    "inventario IT",
    "software de soporte",
    "gestion de activos",
    "automatizacion IT",
    "SLAs",
    "operaciones internas"
  ],
  openGraph: {
    title: "Sistema Modular | Soporte, activos y operaciones internas",
    description:
      "Centraliza soporte, inventario, SLAs, permisos y automatizaciones en una plataforma modular.",
    type: "website",
    locale: "es_CO"
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Modular | Soporte, activos y operaciones internas",
    description:
      "Centraliza soporte, inventario, SLAs, permisos y automatizaciones en una plataforma modular."
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
