"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DescriptionBox } from "@/app/components/GSAP/DescriptionBox";
import PortfolioCard from "@/app/components/PortfolioCard";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioPage() {
  return (
    <main className="w-screen h-full overflow-y-auto bg-black">
      {/* ポートフォリオ1 */}
      <PortfolioCard
        bgImg="hotel_room.png"
        imgSrc="Portfolio1.png"
        imgSizeX={500}
        imgSizeY={500}
        direction="x"
        directionValue={200}
        start="90"
        end="60"
        triggerScroll={false}
        DescriptionBox={
          <DescriptionBox
            direction="x"
            directionValue={150}
            start="90"
            end="60"
            triggerScroll={false}
          >
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-green-600 p-6 px-8 rounded-2xl space-y-2">
                <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                  タイトル
                </p>
                <div className="font-bold flex items-center">
                  <p>リネンシステム(web)</p>
                </div>
                <div>
                  <p className="text-xl text-white font-bold border-b-2 my-2">
                    説明
                  </p>
                  <p>ビジネスホテルで使用されるリネンシステムです。</p>
                  <p>
                    客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。
                  </p>
                </div>
                <div>
                  <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
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
          </DescriptionBox>
        }
      />

      {/* ポートフォリオ2 */}
      <PortfolioCard
        bgImg="hotel_corridor.png"
        imgSrc="Portfolio2.png"
        imgSizeX={400}
        imgSizeY={400}
        direction="x"
        directionValue={200}
        start="90"
        end="60"
        triggerScroll={true}
        DescriptionBox={
          <DescriptionBox
            direction="x"
            directionValue={150}
            start="90"
            end="60"
            triggerScroll={true}
          >
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-cyan-500 p-6 px-8 rounded-2xl space-y-2">
                <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                  タイトル
                </p>
                <div className=" font-bold flex  items-center">
                  <p>リネンシステム(アプリ)</p>
                </div>
                <div>
                  <p className="text-xl text-white font-bold border-b-2 my-2">
                    説明
                  </p>
                  <p>
                    {" "}
                    ビジネスホテルで使用されるリネンシステムのアプリ版です。
                  </p>
                  <p>
                    客室状況の確認や、フロントスタッフと清掃員の相互連絡が可能です。主に清掃員が使用します。
                  </p>
                </div>
                <div>
                  <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
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
          </DescriptionBox>
        }
      />

      {/* ポートフォリオ3 */}
      <PortfolioCard
        bgImg="hotel_room.png"
        imgSrc="Portfolio2.png"
        direction="y"
        directionValue={200}
        start="90"
        end="60"
        triggerScroll={true}
        DescriptionBox={
          <DescriptionBox
            direction="y"
            directionValue={150}
            start="90"
            end="60"
            triggerScroll={true}
          >
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-red-600 p-6 px-8 rounded-2xl space-y-2">
                <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                  タイトル
                </p>
                <div className=" font-bold ">
                  <p>AWS ECS on Fargate でブログを構築</p>
                </div>
                <div>
                  <p className="text-xl text-white font-bold border-b-2 my-2">
                    説明
                  </p>
                  <p>AWS ECS on Fargateでブログを構築しました。</p>
                </div>
                <div>
                  <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                    使用した技術
                  </p>
                  <div className="flex items-center ">
                    <h2>言語：</h2>
                    <p>TypeScript, Ruby</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>フレームワーク：</h2>
                    <p>Next.js, Ruby on Rails</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>インフラ：</h2>
                    <p>AWS, Docker</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox>
        }
      />

      {/* ポートフォリオ4 */}
      <PortfolioCard
        bgImg="aws.png"
        imgSrc="Portfolio2.png"
        direction="y"
        directionValue={-200}
        start="50"
        end="30"
        triggerScroll={true}
        DescriptionBox={
          <DescriptionBox
            direction="y"
            directionValue={150}
            start="90"
            end="60"
            triggerScroll={true}
          >
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-pink-500 p-6 px-8 rounded-2xl space-y-2">
                <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                  タイトル
                </p>
                <div className="font-bold flex justify-center items-center">
                  <p>
                    CDK × API Gateway で ECS on Fargate ブログを一括構築・削除
                  </p>
                </div>
                <div>
                  <p className="text-xl text-white font-bold border-b-2 my-2">
                    説明
                  </p>
                  <p>
                    CDK × API Gatewayで「ECS on
                    Fargateで構築したブログ」を自動で構築・削除
                  </p>
                </div>
                <div>
                  <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                    使用した技術
                  </p>
                  <div className="flex items-center ">
                    <h2>インフラ：</h2>
                    <p>AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox>
        }
      />
      {/* ポートフォリオ5 */}
      <PortfolioCard
        bgImg="my-homepage.png"
        imgSrc="Portfolio5.png"
        imgSizeX={600}
        imgSizeY={600}
        direction="x"
        directionValue={200}
        start="90"
        end="60"
        triggerScroll={true}
        DescriptionBox={
          <DescriptionBox
            direction="x"
            directionValue={150}
            start="90"
            end="60"
            triggerScroll={true}
          >
            <div className="flex flex-col items-center justify-evenly space-y-4">
              <div className="font-semibold bg-orange-500 p-6 px-8 rounded-2xl space-y-2">
                <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                  タイトル
                </p>
                <div className=" font-bold flex  items-center">
                  <p> 武田珠里　ホームページ</p>
                </div>
                <div>
                  <p className="text-xl text-white font-bold border-b-2 my-2">
                    説明
                  </p>
                  <p>
                    自己紹介やポートフォリオ,過去に学習した技術の学習記録などを掲載しています。
                  </p>
                </div>
                <div>
                  <p className="text-xl text-white mt-5 font-bold border-b-2 my-2">
                    使用した技術
                  </p>
                  <div className="flex items-center ">
                    <h2>言語：</h2>
                    <p>TypeScript</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>フレームワーク：</h2>
                    <p>Next.js</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>ライブラリ：</h2>
                    <p>Three React Fiber, GSAP</p>
                  </div>
                  <div className="flex items-center ">
                    <h2>データベース：</h2>
                    <p>Supabase</p>
                  </div>
                </div>
              </div>
            </div>
          </DescriptionBox>
        }
      />
    </main>
  );
}
