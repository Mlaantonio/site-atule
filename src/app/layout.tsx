import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Atule Soluções em Tecnologia | Sites e Sistemas Sob Medida",
    template: "%s | Atule Soluções em Tecnologia",
  },
  description:
    "Desenvolvimento de sites profissionais para pequenas empresas, sistemas de pedidos online e plataformas web personalizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}