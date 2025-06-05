// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PenguinWorld | Services et solutions pour voyageurs & aventuriers modernes",
  description:
    "Découvrez PenguinWorld : des solutions de voyage sur mesure pour les entreprises, les professionnels et les voyageurs exigeants. Organisation, flexibilité et expertise au service de vos déplacements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
