import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"], // you can add "latin-ext" if needed
});

const interTight = Inter_Tight({
  variable: "--font-inter-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaboraGruppenAb",
  description: "We deliver solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <Navbar title="mainNav"/>
        {children}
      </body>
    </html>
  );
}
