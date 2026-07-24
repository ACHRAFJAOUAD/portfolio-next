import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Jawad Achraf — Software Developer",
  description: "Portfolio of Jawad Achraf, Software Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="min-h-screen overflow-hidden bg-[#1e1e1e] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
