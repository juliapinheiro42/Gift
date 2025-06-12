import type { Metadata } from "next";
import { MedievalSharp } from "next/font/google";
import  TopMenu  from '../app/Components/MenuComponent';
import "./globals.css";

const medievalFont = MedievalSharp({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-medieval",
});

export const metadata: Metadata = {
  title: "Para o meu ursinho",
  description: "Um presente especial de Dia dos Namorados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={medievalFont.variable}>
        <TopMenu></TopMenu>
        {children}
      </body>
    </html>
  );
}
