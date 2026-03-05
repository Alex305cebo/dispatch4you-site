import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/src/components/layout/Sidebar";
import Navbar from "@/src/components/layout/Navbar";
import Player from "@/src/components/layout/Player";
import { AudioProvider } from "@/src/context/AudioContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Audio Learning Platform",
  description: "Платформа для обучения с аудио уроками",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <AudioProvider>
          <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
              <Navbar />
              <main className="flex-1 p-6 pb-24">
                {children}
              </main>
            </div>
          </div>
          <Player />
        </AudioProvider>
      </body>
    </html>
  );
}
