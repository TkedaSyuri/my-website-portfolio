"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageBox1 } from "@/app/components/GSAP/ImageBox1";
import { ImageBox2 } from "@/app/components/GSAP/ImageBox2";
import { DescriptionBox1 } from "@/app/components/GSAP/DescriptionBox1";
import { DescriptionBox2 } from "@/app/components/GSAP/DescriptionBox2";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioPage() {
  return (
    <main className="w-screen h-full overflow-y-auto bg-black">
      {/* セクション１ */}
      <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hotel_room.png')] bg-cover bg-center filter blur-sm"></div>
        <div className="flex items-center justify-center w-full max-w-4xl space-x-16">
          <div>
            <ImageBox1 />
          </div>
          <DescriptionBox1>
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-white p-6 px-10 rounded-2xl space-y-2">
                <div className="mt-2 text-green-400 text-3xl font-bold flex justify-center items-center">
                  <p>リネンシステム</p>
                  <p className="text-black text-xl">( WEB )</p>
                </div>
                <div>
                  <p className="text-xl font-bold border-b-2 my-2">説明</p>
                  <p>
                    ビジネスホテルで使用されるリネンシステムです。
                    <br />
                    客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。
                  </p>
                </div>
                <div>
                  <p className="text-xl mt-5 font-bold border-b-2 my-2">
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
                    <p>Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox1>
        </div>
      </section>

      {/* セクション2 */}
      <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hotel_corridor.png')] bg-cover bg-center filter blur-sm"></div>
        <div className="flex items-center justify-center w-full max-w-4xl space-x-16">
          <div className="w-1/2 h-full">
            <ImageBox2 />
          </div>
          <DescriptionBox2>
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-white p-6 px-8 rounded-2xl space-y-2">
                <div className="mt-2 text-cyan-500 text-3xl font-bold flex justify-center items-center">
                  <p>リネンシステム</p>
                  <p className=" text-xl text-black">( アプリ )</p>
                </div>
                <div>
                  <p className="text-xl font-bold border-b-2 my-2">説明</p>
                  <p>
                    ビジネスホテルで使用されるリネンシステムです。
                    <br />
                    客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。
                    <br />
                    主に清掃員が使用することを想定しています。
                  </p>
                </div>
                <div>
                  <p className="text-xl mt-5 font-bold border-b-2 my-2">
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
                    <p>Jotai, Drizzle ORM</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>データベース：</h2>
                    <p>Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox2>
        </div>
      </section>
      {/* セクション3 */}
      <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hotel_corridor.png')] bg-cover bg-center filter blur-sm"></div>
        <div className="flex w-auto  items-center justify-center  max-w-4xl space-x-16">
          <DescriptionBox2>
            <div className="flex flex-col items-center justify-evenly space-y-6">
              {/* 説明 */}
              <div className="w-full max-w-5xl py-6 px-8 font-medium bg-white rounded-2xl space-y-6">
                <div className="text-orange-500 text-2xl font-bold flex justify-center items-center">
                  <p className="whitespace-nowrap">
                    CDK×API Gateway で ECS on Fargate ブログを一括構築・削除
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-bold border-b-2">説明</p>
                  <p>
                    AWSのECS on Fargate(ブログ)をデプロイしました。
                    <br />
                    フロントエンドからバックエンドまでを統合的に構築しています。
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-bold border-b-2">使用した技術</p>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-x-2">
                    <p className="min-w-[120px]">言語：</p>
                    <p>TypeScript, Ruby</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-x-2">
                    <p className="min-w-[120px]">フレームワーク：</p>
                    <p>Next.js, Ruby on Rails</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox2>
          <div className="w-1/2 h-full">
            <ImageBox2 />
          </div>
        </div>
      </section>
      {/* セクション3 */}
      <section className="h-screen flex flex-col items-center justify-between py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hotel_corridor.png')] bg-cover bg-center filter blur-sm"></div>
        <section className="flex items-center justify-center w-full max-w-4xl space-x-16">
          <div className="w-1/2 h-full">
            <ImageBox2 />
          </div>
          <DescriptionBox2>
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-white p-6 px-8 rounded-2xl space-y-2">
                <div className="mt-2 text-orange-500 text-2xl font-bold flex justify-center items-center">
                  <p>
                    「 CDK×API Gateway で ECS on Fargate ブログを一括構築・削除{" "}
                    」で利用したブログサイト
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold border-b-2 my-2">説明</p>
                  <p>ECS on Fargateで構築した</p>
                </div>
                <div>
                  <p className="text-xl mt-5 font-bold border-b-2 my-2">
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
                    <p>Jotai, Drizzle ORM</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>データベース：</h2>
                    <p>Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox2>
        </section>
      </section>
    </main>
  );
}
