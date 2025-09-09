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
  title: "武田珠里 ホームページ",
  description: "武田珠里のホームページです。",
  keywords: ["武田珠里", "Takeda Syuri", "ポートフォリオ","ホームページ", "エンジニア", "クラウド", "フロントエンド"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "武田珠里 ホームページ",
    description: "エンジニア 武田珠里のポートフォリオサイト。",
    images:"https://my-website-omega-amber.vercel.app/fire.png",
    url: "https://my-website-omega-amber.vercel.app/",
    siteName: "武田珠里 ホームページ",
    type: "website",
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
