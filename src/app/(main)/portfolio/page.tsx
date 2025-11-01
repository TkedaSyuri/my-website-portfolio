"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  DescriptionBox,
  DescriptionBoxHandle,
} from "@/app/components/GSAP/DescriptionBox";

import SlideButton from "@/app/components/SlideButton";
import { PiArrowBendRightUpBold } from "react-icons/pi";
import { FaExternalLinkAlt } from "react-icons/fa";

// import { startBuild } from "@/app/lib/api/startBuild";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioPage() {
  const [statusMessage, setStatusMessage] = useState<string | null>("未完了");

  const descriptionBoxRef1 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef2 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef3 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef4 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef5 = useRef<DescriptionBoxHandle>(null);

  // const handleStartBuild = async () => {
  //   try {
  //     const data = await startBuild();
  //     console.log(data.status);
  //     if (data.status === "starting") {
  //       setStatusMessage("構築中");
  //     } else if (data.status === "running") {
  //       setStatusMessage("構築完了");
  //     } else {
  //       console.log("不明なステータス:", data.status);
  //     }
  //   } catch (err) {
  //     console.error("API call failed:", err);
  //   }
  // };

  // const confirmAlert = () => {
  //   const isConfirmed = window.confirm("起動しますか？");
  //   if (isConfirmed) {
  //     handleStartBuild();
  //   }
  // };

  return (
    <main className="w-screen h-full  bg-black relative z-20">
      {/* ポートフォリオ1 */}
      <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-xl sm:text-4xl mb-4">
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
          <div className="relative flex justify-center items-center min-w-[90vw] p-8 rounded-xl snap-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hotel_front.png')] bg-center bg-cover bg-no-repeat scale-110 z-0" />
            <div className="relative z-10">
              <Image
                src="/images/portfolio1.png"
                width={900}
                height={900}
                alt="ポートフォリオ"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>

          <div className=" p-8  text-black  flex flex-col min-w-[80vw] bg-green-400 rounded-xl snap-center ">
            <div>
              <p className="text-xl md:text-3xl font-semibold  mb-4 border-b-2 ">
                概要
              </p>
              <p className=" text-base md:text-2xl">
                ビジネスホテルで使用されるリネンシステムです。客室状況の確認や相互連絡が可能です。
              </p>
            </div>
            <div className="mt-15">
              <h2 className="mb-4 text-xl md:text-3xl  font-semibold  border-b-2">
                機能
              </h2>
              <ul className="pl-6 text-base md:text-2xl list-disc ">
                <li>客室状況の確認</li>
                <li>客室状況の変更</li>
                <li>
                  清掃員の業務管理(フロントスタッフのみ業務の追加と削除ができます。)
                </li>
                <li>フロントスタッフと清掃員の相互連絡</li>
                <li>認証機能</li>
              </ul>
            </div>
          </div>
          <div className="min-w-[80vw] bg-green-500 p-8 rounded-xl text-black snap-center">
            <h2 className="mb-6 text-xl md:text-3xl font-semibold border-b-2">
              使用技術
            </h2>
            <div>
              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl  font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl space-y-1 ">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>
                    Next.js
                  </li>
                  <li>
                    <span>ライブラリ：</span>Redux / Socket.io / Zod / React
                    Hook Form
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl  space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>
                    Express.js
                  </li>
                  <li>
                    <span>ライブラリ：</span>Prisma ORM
                  </li>
                  <li>
                    <span>データベース：</span>Supabase
                  </li>
                </ul>
              </div>

              {/* インフラ・その他 */}
              <div>
                <h3 className="text-xl md:text-2xl  font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6 text-xl md:text-2xl space-y-1">
                  <li>Vercel</li>
                  <li>Render</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-green-600 p-8 rounded-xl snap-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold  mb-4 border-b-2">
                サイトへのリンク
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-base md:text-2xl font-semibold">
                  <span>URL: </span>
                  <Link
                    href="https://gest-room-moniter.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700  underline hover:text-blue-500 transition"
                  >
                    https://gest-room-moniter.vercel.app/
                  </Link>
                </p>
                <p className="text-sm md:text-2xl">
                  Renderの無料枠の制限上、起動直後のデータの取得に約1分ほど掛かることがあります。
                </p>
              </div>
            </div>

            <div className="mt-15">
              <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-2">
                GitHub
              </h2>
              <div className="text-base md:text-2xl flex flex-col gap-4 ">
                <p className="font-semibold break-words">
                  <span>フロントエンド: </span>
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
                  <span>バックエンド: </span>
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
          </div>

          <div
            onClick={() => descriptionBoxRef1.current?.scrollNext()}
            className=" text-6xl md:text-8xl font-bold  flex justify-center items-center  min-w-[80vw] bg-cyan-500 hover:bg-cyan-400 duration-300  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            Next→
          </div>
        </DescriptionBox>
      </section>

      {/* ポートフォリオ2*/}
      <section className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-xl sm:text-4xl mb-4">
          リネンシステム (アプリ)
        </h2>

        {/* スライドボタン */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50">
          <SlideButton
            direction="right"
            textColor={"cyan"}
            targetRef={descriptionBoxRef2}
          />
        </div>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50">
          <SlideButton
            direction="left"
            textColor={"cyan"}
            targetRef={descriptionBoxRef2}
          />
        </div>

        <DescriptionBox ref={descriptionBoxRef2}>
          <div className="relative flex justify-center items-center min-w-[90vw] p-8 rounded-xl snap-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hotel_room.png')] bg-center bg-cover bg-no-repeat scale-110 z-0" />
            <div className="relative z-10">
              <Image
                src="/images/portfolio2.png"
                width={300}
                height={300}
                alt="ポートフォリオ"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>

          <div className="p-8 text-black flex flex-col min-w-[80vw] bg-cyan-400 rounded-xl snap-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
                概要
              </p>
              <p className="text-base md:text-2xl">
                ビジネスホテルで使用されるリネンシステムです。客室状況の確認や連絡が可能です。主に客室清掃員が使用することを想定しています。
              </p>
            </div>
            <div className="mt-15">
              <h2 className="mb-4 text-xl md:text-3xl font-semibold border-b-2">
                機能
              </h2>
              <ul className="pl-6 text-base md:text-2xl list-disc">
                <li>客室状況の確認</li>
                <li>客室状況の変更</li>
                <li>清掃員の業務管理</li>
                <li>フロントと清掃員の相互連絡</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[80vw] bg-cyan-500 p-8 rounded-xl text-black snap-center">
            <h2 className="mb-6 text-xl md:text-3xl font-semibold border-b-2">
              使用技術
            </h2>
            <div className="text-2xl">
              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>React Native
                  </li>
                  <li>
                    <span>ライブラリ：</span>Jotai
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>Hono.js
                  </li>
                  <li>
                    <span>ライブラリ：</span>Drizzle ORM
                  </li>
                  <li>
                    <span>データベース：</span>Supabase
                  </li>
                </ul>
              </div>

              {/* インフラ・その他 */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6 text-xl md:text-2xl space-y-1">
                  <li>Vercel / Render</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] flex flex-col justify-around text-black bg-cyan-600 p-8 rounded-xl  snap-center ">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-2">
                GitHub
              </h2>
              <div className="text-base md:text-2xl flex flex-col gap-4">
                <p className="font-semibold break-words">
                  <span>フロントエンド: </span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-system-mobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition"
                  >
                    https://github.com/TkedaSyuri/grm-system-mobile
                  </Link>
                </p>
                <p className="font-semibold">
                  <span>バックエンド: </span>
                  <Link
                    href="https://github.com/TkedaSyuri/grm-moniter-mobile-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition"
                  >
                    https://github.com/TkedaSyuri/grm-moniter-mobile-api
                  </Link>
                </p>
              </div>
            </div>
            <div className="font-bold  ">
              <h2 className="text-xl md:text-3xl mb-4 border-b-2">EAS</h2>
              <div className="">
                <div className="text-base md:text-2xl flex items-center ">
                  <div>
                    <Link
                      href="https://expo.dev/preview/update?message=preview&updateRuntimeVersion=1.0.0&createdAt=2025-10-22T14%3A23%3A34.488Z&slug=exp&projectId=08fc4b7e-ad95-421f-87fa-4dd0826e75b3&group=4cd70742-026e-44a8-8864-2793ae5f55e9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-500 transition"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                  <p className="text-sm md:text-2xl">
                    Renderの無料枠の制限上、起動直後のデータの取得に約1分ほど掛かることがあります。
                  </p>
                </div>
                <div>
                  <p className=" text-base md:text-2xl">アプリのQRコード</p>
                  <p className="font-sm text-sm">
                    EXPO GO からアプリの挙動を確認できます。
                  </p>
                  <Image
                    src="/images/app-qr.png"
                    width={300}
                    height={300}
                    alt="App QR"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef2.current?.scrollNext()}
            className="text-6xl md:text-8xl font-bold flex justify-center items-center min-w-[80vw] bg-red-500 hover:bg-red-400 duration-300 hover:text-9xl p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            Next→
          </div>
        </DescriptionBox>
      </section>

      {/* ポートフォリオ3 */}
      <section className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-white  text-xl sm:text-4xl mb-4">
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
          <div className="relative flex justify-center items-center min-w-[90vw] p-8 rounded-xl snap-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/aws-blog-diagram.png')] blur-sm md:blur-sm scale-110 opacity-90 bg-center bg-cover bg-no-repeat z-0" />
            <div className="relative z-10">
              <Image
                src="/images/portfolio3.png"
                width={900}
                height={900}
                alt="ポートフォリオ"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>

          <div className="p-8 text-black flex flex-col min-w-[80vw] bg-red-500 rounded-xl snap-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
                概要
              </p>
              <p className="text-base md:text-2xl">
                AWS ECS on
                Fargateを活用してサーバーレスなアーキテクチャで、簡易的なブログを構築しました。
              </p>
            </div>
            <div className="mt-15">
              <h2 className="mb-4 text-xl md:text-3xl font-semibold border-b-2">
                インフラ構成
              </h2>
              <ul className="pl-6 text-base md:text-2xl list-disc">
                <li>
                  ECS (Fargate):フロントエンド/バックエンドをそれぞれ Fargate
                  サービスで構築。
                </li>
                <li>
                  ALB + Route 53 + ACM: HTTPS
                  対応のロードバランサを用いて独自ドメインで運用。
                </li>
                <li>
                  RDS (PostgreSQL):SSM Parameter Store で安全に認証情報を管理。
                </li>
                <li>ECR + VPC エンドポイント：ECR からのイメージ取得。</li>
                <li>CloudWatch Logs:各コンテナのログを取得。</li>
              </ul>
            </div>
          </div>

          <div className="p-8 text-black flex flex-col justify-around min-w-[80vw] bg-red-500 rounded-xl snap-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
                AWS 構成図
              </p>
            </div>
            <Image
              src="/images/aws-blog-diagram.png"
              width={900}
              height={900}
              alt="aws 構成図"
              className="w-full h-auto"
              priority={true}
            />
          </div>

          <div className="min-w-[80vw] bg-red-600 p-8 rounded-xl text-black snap-center">
            <h2 className="mb-6 text-xl md:text-3xl font-semibold border-b-2">
              ブログで使用した技術
            </h2>
            <div className="text-2xl">
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>Next.js
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-base md:text-2xl space-y-1">
                  <li>
                    <span>言語：</span>Ruby
                  </li>
                  <li>
                    <span>フレームワーク：</span>Ruby on Rails
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-2">
                  インフラ・その他
                </h3>
                <ul className="pl-6 text-xl md:text-2xl space-y-1">
                  <li>AWS / Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-red-700 p-8 rounded-xl text-black snap-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-2">
              GitHub
            </h2>
            <div className="text-base md:text-2xl flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold underline underline-offset-4">
                ブログのリソース
              </h3>
              <p className="font-semibold break-words">
                <span>フロントエンド: </span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-500 transition break-normal break-words"
                >
                  https://github.com/TkedaSyuri/my-blog-client
                </Link>
              </p>
              <p className="font-semibold">
                <span>バックエンド: </span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-500 transition break-normal break-words"
                >
                  https://github.com/TkedaSyuri/my-blog-api
                </Link>
              </p>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef3.current?.scrollNext()}
            className="text-6xl md:text-8xl font-bold flex justify-center items-center min-w-[80vw] bg-pink-500 hover:bg-pink-400 duration-300 hover:text-9xl p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            Next→
          </div>
        </DescriptionBox>
      </section>

      {/* ポートフォリオ4 */}
      <section className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-xl sm:text-4xl mb-4">
          CDK × AWSリソース で「AWS ECS on Fargate
          でブログを構築」を一括構築・削除
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
          {/* スライド1 - 画像 */}
          <div className="relative flex justify-center items-center min-w-[90vw] p-8 rounded-xl snap-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/aws.png')] blur-sm md:blur-sm scale-110 opacity-90 bg-center bg-cover bg-no-repeat z-0" />
            <div className="relative z-10">
              <Image
                src="/images/portfolio4.png"
                width={900}
                height={900}
                alt="ポートフォリオ"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>

          <div className="p-8 text-black flex flex-col min-w-[80vw] bg-pink-500 rounded-xl snap-center">
            <div>
              <p className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
                概要
              </p>
              <p className="text-base md:text-2xl">
                CDK, AWSリソース(API Gateway, Lambda, Code Build, Event
                Bridge)を用いて「AWS ECS on
                Fargateでブログを構築」を自動で構築・削除します。就活中に運用する際の労力とコストを最適化する為に作成しました。
              </p>
              <p className="text-base md:text-2xl mt-4">
                CDK・LambdaのコーディングにはChatGPTを使用しています。
              </p>
              <p className="text-base md:text-2xl mt-4">
                次のスライドの「起動する」ボタンを押すことで構築が始まり、構築が完了してから1時間後に自動で削除されます。
              </p>
            </div>
            <div className="mt-15">
              <h2 className="mb-4 text-xl md:text-3xl font-semibold border-b-2">
                インフラ構成
              </h2>
              <ul className="pl-6 text-base md:text-2xl list-disc">
                <li>IaC：CDK</li>
                <li>API：API Gateway</li>
                <li>関数実行：Lambda</li>
                <li>ビルド：CodeBuild</li>
                <li>自動削除トリガー：EventBridge</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[80vw] bg-pink-600 p-8 rounded-xl text-black snap-center">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
              サイトへのリンク
            </h2>
            <div className="flex flex-col gap-5">
              <p className="text-base md:text-2xl">
                *
                URL上のステータスをご確認ください。構築が未完了の場合「未完了」、構築が完了している場合は「完了」と表示されます。
                未完了の場合「起動する」を押すと構築が始まります。構築に時間が約13分掛かります。
              </p>

              <p className="text-base md:text-2xl">
                ステータス:{statusMessage}
              </p>

              <p className="text-base md:text-2xl flex gap-3">
                <span>URL:</span>
                <Link
                  href="https://blog.syuri-takeda.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-500 transition break-normal break-words"
                >
                  https://blog.syuri-takeda.jp
                </Link>
              </p>

              <div className="text-center">
                <button
                  // onClick={() => confirmAlert()}
                  className="font-semibold bg-green-500 hover:bg-green-600 duration-300 rounded-xl p-2 px-3"
                >
                  起動する
                </button>
              </div>
            </div>
          </div>

          {/* スライド4 - GitHub */}
          <div className="min-w-[80vw] bg-pink-500 p-8 rounded-xl text-black snap-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-2">
              GitHub
            </h2>
            <div className="text-base md:text-2xl flex flex-col gap-4">
              <p className="font-semibold break-words">
                <span>CDK: </span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-cdk-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-500 transition break-normal break-words"
                >
                  https://github.com/TkedaSyuri/my-blog-cdk-portfolio
                </Link>
              </p>
            </div>
          </div>

          {/* スライド5 - Next */}
          <div
            onClick={() => descriptionBoxRef4.current?.scrollNext()}
            className="text-6xl md:text-8xl font-bold flex justify-center items-center min-w-[80vw] bg-orange-500 hover:bg-orange-400 duration-300 hover:text-9xl p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            Next→
          </div>
        </DescriptionBox>
      </section>

      {/* ポートフォリオ5 */}
      <section className="relative h-screen bg-cover bg-center  flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-xl sm:text-4xl mb-4">
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
          <div className="relative flex justify-center items-center min-w-[90vw] p-8 rounded-xl snap-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/portfolio5.png')] blur-sm md:blur-sm scale-110 opacity-90 bg-center bg-cover bg-no-repeat z-0" />
            <div className="relative z-10">
              <Image
                src="/images/portfolio5.png"
                width={900}
                height={900}
                alt="ポートフォリオ"
                className="w-full h-auto"
                priority={true}
              />
            </div>
          </div>

          <div className="p-8 text-black min-w-[80vw] bg-orange-400 rounded-xl snap-center">
            <div>
              <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2">
                概要
              </h2>
              <div className="text-base md:text-2xl">
                <p>
                  このサイトでは、自己紹介・ポートフォリオ・アーカイブ(学習記録)を閲覧できます。WebGL
                  ライブラリの React Three Fiber
                  やアニメーションライブラリのGSAPを用いて、ユーザー体験（UX）を意識した動きのあるUIを作成しました。
                </p>
                <p>焚き火のオブジェクトの作成にはChatGPTを使用しています。</p>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-orange-500 p-8 rounded-xl text-black snap-center">
            <h2 className="mb-6 text-xl md:text-3xl font-semibold border-b-2">
              使用技術
            </h2>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-4">
                フロントエンド
              </h3>
              <ul className="pl-6 text-base md:text-2xl space-y-1">
                <li>
                  <span>言語：</span>TypeScript
                </li>
                <li>
                  <span>フレームワーク：</span>Next.js
                </li>
                <li>
                  <span>ライブラリ：</span>React Three Fiber / GSAP
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 underline underline-offset-4">
                インフラ・その他
              </h3>
              <ul className="pl-6 text-xl md:text-2xl space-y-1">
                <li>Vercel</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[80vw] bg-orange-600 p-8 rounded-xl text-black snap-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4 border-b-2">
              GitHub
            </h2>
            <div className="text-base md:text-2xl flex flex-col gap-4">
              <p className="font-semibold">
                <span>フロントエンド: </span>
                <Link
                  href="https://github.com/TkedaSyuri/my-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-500 transition break-normal break-words"
                >
                  https://github.com/TkedaSyuri/my-website
                </Link>
              </p>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef5.current?.scrollTop()}
            className="text-6xl md:text-8xl font-bold flex justify-center items-center min-w-[80vw] bg-green-500 hover:bg-green-400 duration-300 hover:text-9xl p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            TOP
            <PiArrowBendRightUpBold />
          </div>
        </DescriptionBox>
      </section>
    </main>
  );
}
