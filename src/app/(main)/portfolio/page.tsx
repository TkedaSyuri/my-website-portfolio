"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DescriptionBox,
  DescriptionBoxHandle,
} from "@/app/components/GSAP/DescriptionBox";
import SlideButton from "@/app/components/SlideButton";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioPage() {
  const descriptionBoxRef1 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef2 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef3 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef4 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef5 = useRef<DescriptionBoxHandle>(null);

  return (
    // mainタグを後ほど修正
    <main className="w-screen h-full overflow-y-auto bg-black">
      <main className="w-screen h-full overflow-y-auto bg-black">
        {/* ポートフォリオ1 */}
        <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-4xl mb-4">
            リネンシステム (Web)
          </h2>

          {/* スライドボタン */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="right"
              textColor={"green"}
              targetRef={descriptionBoxRef1}
            />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="left"
              textColor={"green"}
              targetRef={descriptionBoxRef1}
            />
          </div>

          <DescriptionBox ref={descriptionBoxRef1}>
            <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/hotel_front.png')] bg-center bg-cover bg-no-repeat bg-green-500 p-8 rounded-xl text-white snap-center">
              <Image
                src={`/images/portfolio1.png`}
                width={800}
                height={800}
                alt="ポートフォリオ"
              />
            </div>

            <div className="flex flex-col gap-5  justify-evenly min-w-[80vw] bg-green-400 p-8 rounded-xl text-black snap-center ">
              <div>
                <h2 className="text-4xl font-semibold  mb-4 border-b-2">
                  概要
                </h2>
                <p className="text-2xl font-semibold ">
                  ビジネスホテルで使用されるリネンシステムです。客室状況の確認や連絡が可能です。。
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                  機能
                </h2>
                <ul className="pl-6 text-2xl font-semibold list-disc ">
                  <li>客室状況の確認</li>
                  <li>客室状況の変更</li>
                  <li>清掃員の業務管理</li>
                  <li>フロントと清掃員の相互連絡</li>
                  <li>認証機能</li>
                </ul>
              </div>
            </div>
            <div className="min-w-[80vw] bg-green-500 p-8 rounded-xl text-black snap-center">
              <h2 className="mb-6 text-4xl font-semibold border-b-2">
                使用技術
              </h2>
              <div className="text-2xl">
                {/* フロントエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                    フロントエンド
                  </h3>
                  <ul className="pl-6 font-semibold  space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>TypeScript
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      Next.js
                    </li>
                    <li>
                      <span className="font-bold">ライブラリ：</span>Redux ,
                      Tailwind CSS
                    </li>
                  </ul>
                </div>

                {/* バックエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                    バックエンド
                  </h3>
                  <ul className="pl-6 font-semibold  space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>TypeScript
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      Express.js
                    </li>
                    <li>
                      <span className="font-bold">ライブラリ：</span>Prisma ORM
                    </li>
                    <li>
                      <span className="font-bold">データベース：</span>Supabase
                    </li>
                  </ul>
                </div>

                {/* インフラ・その他 */}
                <div>
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                    インフラ・その他
                  </h3>
                  <ul className="pl-6 font-semibold space-y-1">
                    <li>Vercel</li>
                    <li>Render</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="min-w-[80vw] bg-green-600 p-8 rounded-xl snap-center">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="flex flex-col gap-4 text-3xl">
                <p className=" font-semibold">
                  <span>フロントエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system
                  </Link>
                </p>
                <p className="font-semibold">
                  <span>バックエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-server
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => descriptionBoxRef1.current?.scrollDown()}
              className="flex justify-center items-center  min-w-[80vw] bg-cyan-500 hover:bg-cyan-400 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
            >
              Next→
            </div>
          </DescriptionBox>
        </section>

        {/* ポートフォリオ2 */}
        <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-4xl mb-4">
            リネンシステム (アプリ)
          </h2>

          {/* スライドボタン(右) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="right"
              textColor={"cyan"}
              targetRef={descriptionBoxRef2}
            />
          </div>
          {/* スライドボタン(左) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="left"
              textColor={"cyan"}
              targetRef={descriptionBoxRef2}
            />
          </div>

          <DescriptionBox ref={descriptionBoxRef2}>
            <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/hotel_room.png')] bg-center bg-cover bg-no-repeat p-8 rounded-xl  snap-center">
              <Image
                src={`/images/portfolio2.png`}
                width={400}
                height={400}
                alt="ポートフォリオ"
              />
            </div>

            <div className="flex flex-col gap-5 justify-evenly min-w-[80vw] bg-cyan-400 p-8 rounded-xl text-black snap-center ">
              <div>
                <h2 className="text-4xl font-semibold  mb-4 border-b-2">
                  概要
                </h2>
                <p className="text-2xl font-semibold">
                  ビジネスホテルで使用されるリネンシステムです。客室状況の確認や連絡が可能です。主に客室清掃員が使用することを想定しています。
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                  機能
                </h2>
                <ul className="pl-6 text-2xl font-semibold list-disc ">
                  <li>客室状況の確認</li>
                  <li>客室状況の変更</li>
                  <li>清掃員の業務管理</li>
                  <li>フロントと清掃員の相互連絡</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-around min-w-[80vw] bg-cyan-500 p-8 rounded-xl text-black snap-center">
              <h2 className="mb-6 text-4xl font-semibold border-b-2">
                使用技術
              </h2>
              <div className="text-2xl">
                {/* フロントエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                    フロントエンド
                  </h3>
                  <ul className="pl-6  font-semibold  space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>TypeScript
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      React Native
                    </li>
                    <li>
                      <span className="font-bold">ライブラリ：</span>Jotai
                    </li>
                  </ul>
                </div>

                {/* バックエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                    バックエンド
                  </h3>
                  <ul className="pl-6  font-semibold   space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>TypeScript
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      Hono.js
                    </li>
                    <li>
                      <span className="font-bold">ライブラリ：</span>Drizzle ORM
                    </li>
                    <li>
                      <span className="font-bold">データベース：</span>Supabase
                    </li>
                  </ul>
                </div>

                {/* インフラ・その他 */}
                <div>
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                    インフラ・その他
                  </h3>
                  <ul className="pl-6  font-semibold space-y-1">
                    <li>Vercel</li>
                    <li>Render</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="min-w-[80vw] bg-cyan-600 p-8 rounded-xl text-black snap-center">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="text-3xl flex flex-col gap-8 ">
                <p className="font-semibold">
                  <span>フロントエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-mobile
                  </Link>
                </p>
                <p className="font-semibold">
                  <span>バックエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-moniter-mobile-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-moniter-mobile-api
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => descriptionBoxRef2.current?.scrollDown()}
              className="flex justify-center items-center  min-w-[80vw] bg-red-600 hover:bg-red-500 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
            >
              Next→
            </div>
          </DescriptionBox>
        </section>

        {/* ポートフォリオ3 */}
        <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-4xl mb-4">
            AWS ECS on Fargate でブログを構築
          </h2>

          {/* スライドボタン */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="right"
              textColor={"red"}
              targetRef={descriptionBoxRef3}
            />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="left"
              textColor={"red"}
              targetRef={descriptionBoxRef3}
            />
          </div>

          <DescriptionBox ref={descriptionBoxRef3}>
            <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/hotel_room.png')] bg-center bg-cover bg-no-repeat  p-8 rounded-xl  snap-center">
              <Image
                src={`/images/portfolio1.png`}
                width={800}
                height={800}
                alt="ポートフォリオ"
              />
            </div>

            <div className="flex flex-col justify-around gap-8 min-w-[80vw] bg-red-500 p-8 rounded-xl text-white snap-center ">
              <div>
                <h2 className="text-4xl font-semibold  mb-4 border-b-2">
                  概要
                </h2>
                <p className="text-2xl font-semibold">
                  AWS ECS on
                  Fargateを活用してサーバーレスなアーキテクチャで、簡易的なブログを構築しました。
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                  インフラ構成
                </h2>
                <ul className="pl-6 text-2xl font-semibold list-disc ">
                  <li>
                    ECS (Fargate):フロントエンド/バックエンドをそれぞれ Fargate
                    サービスで構築。
                  </li>
                  <li>
                    ALB + Route 53 + ACM: HTTPS
                    対応のロードバランサを用いて独自ドメインで運用。
                  </li>
                  <li>
                    RDS (PostgreSQL):SSM Parameter Store
                    で安全に認証情報を管理。
                  </li>
                  <li>ECR + VPC エンドポイント：ECR からのイメージ取得。</li>
                  <li>CloudWatch Logs:各コンテナのログを取得。</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col  justify-around min-w-[80vw] bg-red-600 p-8 rounded-xl text-white snap-center">
              <h2 className="mb-6 text-4xl font-semibold border-b-2">
                ブログで使用した技術
              </h2>
              <div className="text-2xl">
                {/* フロントエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                    フロントエンド
                  </h3>
                  <ul className="pl-6  font-semibold  space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>TypeScript
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      Next.js
                    </li>
                    <li>
                      <span className="font-bold">ライブラリ：</span>Redux ,
                      Tailwind CSS
                    </li>
                  </ul>
                </div>

                {/* バックエンド */}
                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                    バックエンド
                  </h3>
                  <ul className="pl-6 font-semibold space-y-1">
                    <li>
                      <span className="font-bold">言語：</span>Ruby
                    </li>
                    <li>
                      <span className="font-bold">フレームワーク：</span>
                      Ruby on Rails
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                    インフラ・その他
                  </h3>
                  <ul className="pl-6 font-semibold   space-y-1">
                    <li>
                      <span className="font-bold"></span>
                      Docker
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="min-w-[80vw] bg-red-700 p-8 rounded-xl text-white snap-center">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="text-3xl flex flex-col gap-8 ">
                <p className=" font-semibold">
                  <span>フロントエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system
                  </Link>
                </p>
                <p className="font-semibold">
                  <span>バックエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-server
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => descriptionBoxRef3.current?.scrollDown()}
              className="flex justify-center items-center  min-w-[80vw] bg-pink-600 hover:bg-pink-500 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
            >
              Next→
            </div>
          </DescriptionBox>
        </section>
        {/* ポートフォリオ4 */}

        <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-4xl mb-4">
            CDK × API Gateway × Lambda で ECS on Fargate ブログを一括構築・削除
          </h2>

          {/* スライドボタン */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="right"
              textColor={"pink"}
              targetRef={descriptionBoxRef4}
            />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="left"
              textColor={"pink"}
              targetRef={descriptionBoxRef4}
            />
          </div>

          <DescriptionBox ref={descriptionBoxRef4}>
            <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/aws.png')] bg-center bg-cover bg-no-repeat p-8 rounded-xl snap-center">
              <Image
                src={`/images/portfolio1.png`}
                width={800}
                height={800}
                alt="ポートフォリオ"
              />
            </div>

            <div className="flex flex-col gap-5  justify-evenly min-w-[80vw] bg-pink-500 p-8 rounded-xl text-white snap-center ">
              <div>
                <h2 className="text-4xl font-semibold  mb-4 border-b-2">
                  概要
                </h2>
                <p className="text-2xl font-semibold">
          CDK, API Gateway, Lambda,CodeBuildを用いて「AWS ECS on Fargate でブログを構築」を自動で構築・削除します。 就活中のAWSのコストを抑えるために作成しました。
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                  機能
                </h2>
                <ul className="pl-6 text-2xl font-semibold list-disc ">
                  <li>客室状況の確認</li>
                  <li>客室状況の変更</li>
                  <li>清掃員の業務管理</li>
                  <li>フロントと清掃員の相互連絡</li>
                  <li>認証機能</li>
                </ul>
              </div>
            </div>
            <div className="min-w-[80vw] bg-pink-600 p-8 rounded-xl text-white snap-center">
              <h2 className="mb-6 text-4xl font-semibold border-b-2">
                使用技術
              </h2>

              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 text-xl font-semibold  space-y-1">
                  <li>
                    <span className="font-bold">言語：</span>TypeScript
                  </li>
                  <li>
                    <span className="font-bold">フレームワーク：</span>
                    Next.js
                  </li>
                  <li>
                    <span className="font-bold">ライブラリ：</span>Redux ,
                    Tailwind CSS
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-xl font-semibold   space-y-1">
                  <li>
                    <span className="font-bold">言語：</span>TypeScript
                  </li>
                  <li>
                    <span className="font-bold">フレームワーク：</span>
                    Express.js
                  </li>
                  <li>
                    <span className="font-bold">ライブラリ：</span>Prisma ORM
                  </li>
                  <li>
                    <span className="font-bold">データベース：</span>Supabase
                  </li>
                </ul>
              </div>

              {/* インフラ・その他 */}
              <div>
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6 text-xl font-semibold space-y-1">
                  <li>Vercel</li>
                  <li>Render</li>
                </ul>
              </div>
            </div>

            <div className="min-w-[80vw] bg-pink-700 p-8 rounded-xl text-white snap-center">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">
                  <span>フロントエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system
                  </Link>
                </p>
                <p className="text-2xl font-semibold">
                  <span>バックエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-server
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => descriptionBoxRef4.current?.scrollDown()}
              className="flex justify-center items-center  min-w-[80vw] bg-orange-500 hover:bg-orange-400 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
            >
              Next→
            </div>
          </DescriptionBox>
        </section>
        {/* ポートフォリオ5 */}

        <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
          <h2 className="font-bold text-white text-4xl mb-4">
            武田珠里　ホームページ
          </h2>

          {/* スライドボタン */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="right"
              textColor={"orange"}
              targetRef={descriptionBoxRef5}
            />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
            <SlideButton
              direction="left"
              textColor={"orange"}
              targetRef={descriptionBoxRef5}
            />
          </div>

          <DescriptionBox ref={descriptionBoxRef5}>
            <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/hotel_room.png')] bg-center bg-cover bg-no-repeat  p-8 rounded-xl  snap-center">
              <Image
                src={`/images/portfolio5.png`}
                width={800}
                height={800}
                alt="ポートフォリオ"
              />
            </div>

            <div className="flex flex-col gap-5  justify-evenly min-w-[80vw] bg-orange-400 p-8 rounded-xl text-white snap-center ">
              <div>
                <h2 className="text-4xl font-semibold  mb-4 border-b-2">
                  概要
                </h2>
                <p className="text-2xl font-semibold">
                  ビジネスホテルで使用されるリネンシステムです。客室状況の確認や連絡が可能です。。
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                  機能
                </h2>
                <ul className="pl-6 text-2xl font-semibold list-disc ">
                  <li>客室状況の確認</li>
                  <li>客室状況の変更</li>
                  <li>清掃員の業務管理</li>
                  <li>フロントと清掃員の相互連絡</li>
                  <li>認証機能</li>
                </ul>
              </div>
            </div>
            <div className="min-w-[80vw] bg-orange-500 p-8 rounded-xl text-white snap-center">
              <h2 className="mb-6 text-4xl font-semibold border-b-2">
                使用技術
              </h2>

              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 text-xl font-semibold  space-y-1">
                  <li>
                    <span className="font-bold">言語：</span>TypeScript
                  </li>
                  <li>
                    <span className="font-bold">フレームワーク：</span>
                    Next.js
                  </li>
                  <li>
                    <span className="font-bold">ライブラリ：</span>Redux ,
                    Tailwind CSS
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-xl font-semibold   space-y-1">
                  <li>
                    <span className="font-bold">言語：</span>TypeScript
                  </li>
                  <li>
                    <span className="font-bold">フレームワーク：</span>
                    Express.js
                  </li>
                  <li>
                    <span className="font-bold">ライブラリ：</span>Prisma ORM
                  </li>
                  <li>
                    <span className="font-bold">データベース：</span>Supabase
                  </li>
                </ul>
              </div>

              {/* インフラ・その他 */}
              <div>
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6 text-xl font-semibold space-y-1">
                  <li>Vercel</li>
                  <li>Render</li>
                </ul>
              </div>
            </div>

            <div className="min-w-[80vw] bg-orange-600 p-8 rounded-xl text-white snap-center">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-semibold">
                  <span>フロントエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system
                  </Link>
                </p>
                <p className="text-2xl font-semibold">
                  <span>バックエンド:</span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline hover:text-blue-300 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-server
                  </Link>
                </p>
              </div>
            </div>

            <div
              onClick={() => descriptionBoxRef5.current?.scrollDown()}
              className="flex justify-center items-center  min-w-[80vw] bg-green-600 hover:bg-green-500 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
            >
              TOP
            </div>
          </DescriptionBox>
        </section>
      </main>

      {/* ポートフォリオ2 */}
      {/* <PortfolioCard
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
      /> */}

      {/* ポートフォリオ3 */}
      {/* <PortfolioCard
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
      /> */}

      {/* ポートフォリオ4 */}
      {/* <PortfolioCard
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
      /> */}
      {/* ポートフォリオ5 */}
      {/* <PortfolioCard
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
      /> */}
    </main>
  );
}

// "use client"
// HorizontalScroll.tsx
// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function HorizontalScroll() {
//   useEffect(() => {
//     const sections = gsap.utils.toArray(".panel");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".horizontal-wrapper",
//         pin: true,
//         scrub: 1,
//         end: () => "+=" + window.innerWidth * sections.length,
//       },
//     });
//   }, []);

//   return (
//     <div className="horizontal-wrapper h-screen overflow-hidden">
//       <div className="flex w-[400vw] h-full">
//         <section className="panel w-screen h-full flex items-center justify-center bg-red-300 text-5xl">
//           1
//         </section>
//         <section className="panel w-screen h-full flex items-center justify-center bg-green-300 text-5xl">
//           2
//         </section>
//         <section className="panel w-screen h-full flex items-center justify-center bg-blue-300 text-5xl">
//           3
//         </section>
//         <section className="panel w-screen h-full flex items-center justify-center bg-yellow-300 text-5xl">
//           4
//         </section>
//       </div>
//     </div>
//   );
// }
