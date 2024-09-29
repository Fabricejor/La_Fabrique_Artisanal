import type { Metadata } from "next";
// from "next/font/local";
import "./globals.css";
import {Inter} from 'next/font/google';
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LA Fabrique Artisanal",
  description: "Site officiel de la Fabrique Artisanal ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
