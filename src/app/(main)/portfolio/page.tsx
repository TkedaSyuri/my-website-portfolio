"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageBox1 } from "@/app/components/GSAP/ImageBox1";
import { ImageBox2 } from "@/app/components/GSAP/ImageBox2";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const DescriptionBox = ({ children }: { children: React.ReactNode }) => {
  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(descRef.current, {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: descRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div ref={descRef} className="my-32">
      {children}
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <main className="w-screen min-h-screen overflow-y-auto">
      <div className="h-screen bg-emerald-500 flex items-center justify-center ">
        Section1
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="flex justify-between w-full max-w-4xl space-x-16">
          <ImageBox1>
            <h2>画像Box</h2>
          </ImageBox1>
          <DescriptionBox>
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <h1 className="text-2xl font-bold text-center ">
                「リネンシステム (WEB)」
              </h1>
              <div className="font-semibold space-y-3">
                <p className="text-xl font-bold border-b border-blue-600">
                  説明
                </p>
                <p>
                  ビジネスホテルで使用されるリネンシステムです。
                  <br />
                  客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。
                </p>
                <div>
                  <p className="text-xl font-bold border-b border-blue-600">
                    使用した技術
                  </p>
                  <div className="flex items-center ">
                    <h2>言語：</h2>
                    <p>TypeScript</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>フレームワーク：</h2>
                    <p>Next.js, Express.js</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>ライブラリ：</h2>
                    <p>Redux, Prisma</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>データベース：</h2>
                    <p>Supabase </p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox>
        </div>
        <div className="flex justify-between w-full max-w-4xl space-x-16">
          <ImageBox2>
            <h2>画像Box</h2>
          </ImageBox2>
          <DescriptionBox>
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <h1 className="text-2xl font-bold text-center ">
                「リネンシステム(アプリ)」
              </h1>
              <div className="font-semibold space-y-3">
                <p className="text-xl font-bold border-b border-blue-600">
                  説明
                </p>
                <p>
                  ビジネスホテルで使用されるリネンシステムです。
                  <br />
                  客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。<br/>主に清掃員が使用することを想定しています。
                </p>
                <div>
                  <p className="text-xl font-bold border-b border-blue-600">
                    使用した技術
                  </p>
                  <div className="flex items-center ">
                    <h2>言語：</h2>
                    <p>TypeScript</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>フレームワーク：</h2>
                    <p>React Native, Hono.js</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>ライブラリ：</h2>
                    <p>Jotai, Drizzle, </p>
                  </div>
                  <div className="flex items-center ">
                    <h2>データベース：</h2>
                    <p>Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox>
        </div>
      </div>
      <div className="h-72 flex items-center justify-center bg-purple-300">
        <h2 className="text-3xl font-bold">Section3</h2>
      </div>
    </main>
  );
}
