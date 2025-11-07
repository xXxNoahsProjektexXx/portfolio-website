import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {AnimatedBackground} from "@/components/AnimatedBackground";
import {PoliceLightBackground} from "@/components/PoliceLightBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weixelbaum | Portfolio",
  description: "Portfolio über mich :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">

      <body
        className={`relative text-gray-100 min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <Navbar />
      <PoliceLightBackground />
      <AnimatedBackground />


      <main className="flex-1 z-10 px-6 py-8">{children}</main>



      <Footer />


      </body>
    </html>
  );
}
