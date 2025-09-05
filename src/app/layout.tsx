import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SceneCanvas from "./components/Three/SceneCanvas";
import LoadingOverlay from "./components/Three/LoadingOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Takeda Syuri",
  description: "My website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white  antialiased  relative w-full h-full `}
      >
        
        <div className="bg-black  inset-0 z-10 pointer-events-none absolute ">
          <SceneCanvas />
        </div>
         <LoadingOverlay />
        <div className="relative ">{children}</div>
      </body>
    </html>
  );
}
