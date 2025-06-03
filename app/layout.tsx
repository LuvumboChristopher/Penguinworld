// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PenguinWorld | Services et solutions pour voyageurs & aventuriers modernes",
  description:
    "Découvrez PenguinWorld : des solutions de voyage sur mesure pour les entreprises, les professionnels et les voyageurs exigeants. Organisation, flexibilité et expertise au service de vos déplacements.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
