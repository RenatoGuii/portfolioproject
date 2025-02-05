import type { Metadata } from "next";
import { Geist, Geist_Mono, Rationale } from "next/font/google";
import "./globals.css";

const rationale = Rationale({
  variable: "--font-rationale",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renato Guimarães | Full Stack",
  description: "Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rationale.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
