"use client";

import { useRef, useState } from "react";
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
import { PiArrowBendRightUpBold } from "react-icons/pi";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PortfolioPage() {
  const [statusMessage, setStatusMessage] = useState<string | null>("未完了");

  const descriptionBoxRef1 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef2 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef3 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef4 = useRef<DescriptionBoxHandle>(null);
  const descriptionBoxRef5 = useRef<DescriptionBoxHandle>(null);

  const handleStartBuildBlog = async () => {
    // try {
    //   const res = await fetch(`https://${process.env.NEXT_PUBLIC_API_URL}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const data = await res.json();
    //   console.log(data.status);
    //   if (data.status === "running") {
    //     setStatusMessage("構築完了");
    //   } else if (data.status === " starting") {
    //     setStatusMessage("構築中");
    //   } else {
    //     console.log("不明なステータス:", data.status);
    //   }
    // } catch (err) {
    //   console.error("API call failed:", err);
    // }
  };

  const confirmAlert = () => {
    const isConfirmed = window.confirm("起動しますか？");
    if (isConfirmed) {
      handleStartBuildBlog();
    }
  };

  return (
    <main className="w-screen h-full  bg-black relative z-20">
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
          <div className="flex flex-col gap-10   min-w-[80vw] bg-green-400 p-8 rounded-xl text-black snap-center ">
            <div>
              <h2 className="text-4xl font-semibold  mb-4 border-b-2">概要</h2>
              <p className="text-2xl  ">
                ビジネスホテルで使用されるリネンシステムです。客室状況の確認や相互連絡が可能です。
              </p>
            </div>
            <div className="mt-40">
              <h2 className="mb-4 text-4xl  font-semibold  border-b-2">機能</h2>
              <ul className="pl-6 text-2xl list-disc ">
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
            <h2 className="mb-6 text-4xl font-semibold border-b-2">使用技術</h2>
            <div className="text-2xl">
              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6  space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>
                    Next.js
                  </li>
                  <li>
                    <span>ライブラリ：</span>Redux
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 text-2xl  space-y-1">
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
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6  space-y-1">
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-green-600 p-8 rounded-xl snap-center">
            <div>
              <h2 className="text-4xl font-bold  mb-4 border-b-2">
                サイトへのリンク
              </h2>
              <div className="flex flex-col gap-4 text-2xl">
                <p className=" font-semibold">
                  <span>URL: </span>
                  <Link
                    href="https://gest-room-moniter.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition"
                  >
                    https://gest-room-moniter.vercel.app/
                  </Link>
                </p>
                <p>Renderの無料枠の制限上、起動直後のデータの取得に約1分ほど掛かることがあります。</p>
              </div>
            </div>

            <div className="mt-40">
              <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
              <div className="flex flex-col gap-4 text-2xl">
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
          </div>

          <div
            onClick={() => descriptionBoxRef1.current?.scrollNext()}
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
          <div className="flex justify-center items-center min-w-[90vw] bg-[url('/images/hotel_room.png')] bg-center bg-cover bg-no-repeat bg-cyan-500 p-8 rounded-xl text-white snap-center">
            <Image
              src={`/images/portfolio2.png`}
              width={300}
              height={300}
              alt="ポートフォリオ"
            />
          </div>

          <div className="flex flex-col gap-5  min-w-[80vw] bg-cyan-400 p-8 rounded-xl text-black snap-center">
            <div>
              <h2 className="text-4xl font-semibold mb-4 border-b-2">概要</h2>
              <p className="text-2xl ">
                ビジネスホテルで使用されるリネンシステムです。客室状況の確認や連絡が可能です。主に客室清掃員が使用することを想定しています。
              </p>
            </div>
            <div className="mt-40">
              <h2 className="mb-4 text-4xl font-semibold border-b-2">機能</h2>
              <ul className="pl-6 text-2xl list-disc">
                <li>客室状況の確認</li>
                <li>客室状況の変更</li>
                <li>清掃員の業務管理</li>
                <li>フロントと清掃員の相互連絡</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[80vw] bg-cyan-500 p-8 rounded-xl text-black snap-center">
            <h2 className="mb-6 text-4xl font-semibold border-b-2">使用技術</h2>
            <div className="text-2xl">
              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6 space-y-1">
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
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6 space-y-1">
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
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  インフラ・その他
                </h3>
                <ul className="pl-6  space-y-1">
                  <li>Vercel / Render</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-cyan-600 p-8 rounded-xl text-black snap-center">
            <h2 className="text-4xl font-bold mb-4 border-b-2">GitHub</h2>
            <div className="flex flex-col gap-4 text-2xl">
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
            onClick={() => descriptionBoxRef2.current?.scrollNext()}
            className="flex justify-center items-center min-w-[80vw] bg-red-600 hover:bg-red-500 duration-300 font-bold text-8xl hover:text-9xl p-8 rounded-xl text-white snap-center cursor-pointer"
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
              src={`/images/blog.png`}
              width={800}
              height={800}
              alt="ポートフォリオ"
            />
          </div>

          <div className="flex flex-col  gap-8 min-w-[80vw] bg-red-500 p-8 rounded-xl text-white snap-center ">
            <div>
              <h2 className="text-4xl font-semibold  mb-4 border-b-2">概要</h2>
              <p className="text-2xl ">
                AWS ECS on
                Fargateを活用してサーバーレスなアーキテクチャで、簡易的なブログを構築しました。
              </p>
            </div>
            <div className="mt-40">
              <h2 className="mb-4 text-4xl  font-semibold  border-b-2">
                インフラ構成
              </h2>
              <ul className="pl-6 text-2xl  list-disc ">
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
          <div className="flex flex-col  min-w-[80vw] bg-red-600 p-8 rounded-xl text-white snap-center">
            <h2 className="mb-6 text-4xl font-semibold border-b-2">
              ブログで使用した技術
            </h2>
            <div className="text-2xl">
              {/* フロントエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                  フロントエンド
                </h3>
                <ul className="pl-6  space-y-1">
                  <li>
                    <span>言語：</span>TypeScript
                  </li>
                  <li>
                    <span>フレームワーク：</span>
                    Next.js
                  </li>
                </ul>
              </div>

              {/* バックエンド */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  バックエンド
                </h3>
                <ul className="pl-6  space-y-1">
                  <li>
                    <span>言語：</span>Ruby
                  </li>
                  <li>
                    <span>フレームワーク：</span>
                    Ruby on Rails
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2 underline underline-offset-2">
                  インフラ・その他
                </h3>
                <ul className="pl-6 space-y-1">
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-red-700 p-8 rounded-xl text-white snap-center">
            <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
            <div className="text-2xl flex flex-col justify-center gap-8 ">
              <h2 className="text-3xl font-semibold underline-offset-3 underline ">
                ブログのリソース
              </h2>
              <p className=" font-semibold">
                <span>フロントエンド:</span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300 transition"
                >
                  https://github.com/TkedaSyuri/my-blog-client
                </Link>
              </p>
              <p className="font-semibold">
                <span>バックエンド:</span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300 transition"
                >
                  https://github.com/TkedaSyuri/my-blog-api
                </Link>
              </p>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef3.current?.scrollNext()}
            className="flex justify-center items-center  min-w-[80vw] bg-pink-600 hover:bg-pink-500 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            Next→
          </div>
        </DescriptionBox>
      </section>
      {/* ポートフォリオ4 */}

      <section className="relative  h-screen bg-cover bg-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-4xl mb-4">
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
          <div className=" flex justify-center items-center min-w-[90vw] bg-[url('/images/aws.png')] bg-center bg-cover bg-no-repeat p-8 rounded-xl snap-center">
            <Image
              src={`/images/portfolio1.png`}
              width={800}
              height={800}
              alt="ポートフォリオ"
            />
          </div>

          <div className="flex flex-col gap-2 justify-evenly min-w-[80vw] bg-pink-500 p-8 rounded-xl text-white snap-center ">
            <h2 className="text-4xl font-semibold border-b-2">概要</h2>
            <div className="text-2xl flex flex-col gap-2">
              <p>
                CDK, API Gateway, Lambda, Code Build, Event Bridgeを用いて「AWS
                ECS on Fargate でブログを構築」を自動で構築・削除します。
              </p>
              <p>
                就活中に運用するAWSのコストを最適化する為にChatGPTを用いて作成しました。
              </p>
              <p>
                「武田珠里のホームページ(このサイト)」にアクセスしたタイミング、またはボタンを押すことで構築が始まり、構築が完了してから1時間後に自動で削除されます。
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-4xl font-semibold   border-b-2">
                インフラ構成
              </h2>
              <ul className="pl-6 text-2xl  list-disc ">
                <li>IaC：CDK</li>
                <li>API：API Gateway</li>
                <li>関数実行：Lambda</li>
                <li>ビルド：CodeBuild</li>
                <li>自動削除トリガー：EventBridge</li>
              </ul>
            </div>
          </div>
          <div className="p-8 flex flex-col  text-white min-w-[80vw] bg-pink-600 rounded-xl snap-center ">
            <div>
              <h2 className="text-4xl font-semibold mb-4 border-b-2">
                サイトへのリンク
              </h2>
              <div className="flex flex-col justify-around gap-5">
                <div className="text-2xl">
                  <p>
                    *
                    URL上のステータスをご確認ください。構築が未完了の場合「未完了」、構築が完了している場合は「構築完了」と表示されます。未完了の場合「起動する」を押すと構築が始まります。構築に時間が約13分掛かります。
                  </p>
                </div>

                <div className="text-2xl">
                  <p>ステータス:{statusMessage}</p>
                </div>
                <div className="text-2xl">
                  <p className="flex not-first: gap-3  ">
                    <span>URL:</span>
                    <Link
                      href="https://blog.syuri-takeda.jp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline hover:text-blue-300 transition"
                    >
                      https://blog.syuri-takeda.jp
                    </Link>
                  </p>
                </div>
                <div className="text-2xl text-center">
                  <button
                    onClick={() => confirmAlert()}
                    className="font-semibold bg-green-500 hover:bg-green-600 duration-300 rounded-xl p-2 px-3"
                  >
                    起動する
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[80vw] bg-pink-500 p-8 rounded-xl text-white snap-center ">
            <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
            <div className="text-2xl flex flex-col gap-4">
              <p className="flex gap-3 font-semibold ">
                <span>CDK:</span>
                <Link
                  href="https://github.com/TkedaSyuri/my-blog-cdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300 transition"
                >
                  https://github.com/TkedaSyuri/my-blog-cdk
                </Link>
              </p>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef4.current?.scrollNext()}
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

          <div className=" justify-evenly min-w-[80vw] bg-orange-400 p-8 rounded-xl text-white snap-center ">
            <div>
              <h2 className="text-4xl font-semibold  mb-4 border-b-2">概要</h2>
              <p className="text-2xl ">
                このサイトでは、自己紹介・ポートフォリオ・アーカイブ(学習記録)を閲覧できます。WebGL
                ライブラリの React Three Fiber
                やアニメーションライブラリのGSAPを用いて、ユーザー体験（UX）を意識した動きのあるUIを作成しました。
              </p>
            </div>
          </div>
          <div className="min-w-[80vw] bg-orange-500 p-8 rounded-xl text-white snap-center">
            <h2 className="mb-6 text-4xl font-semibold border-b-2">使用技術</h2>

            {/* フロントエンド */}
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                フロントエンド
              </h3>
              <ul className="pl-6 text-2xl  space-y-1">
                <li>
                  <span>言語：</span>TypeScript
                </li>
                <li>
                  <span>フレームワーク：</span>
                  Next.js
                </li>
                <li>
                  <span>ライブラリ：</span>React Three Fiber / GSAP
                </li>
              </ul>
            </div>

            {/* インフラ・その他 */}
            <div>
              <h3 className="text-3xl font-semibold mb-2 underline underline-offset-4">
                インフラ・その他
              </h3>
              <ul className="pl-6 text-2xl space-y-1">
                <li>Vercel</li>
              </ul>
            </div>
          </div>

          <div className="min-w-[80vw] bg-orange-600 p-8 rounded-xl text-white snap-center">
            <h2 className="text-4xl font-bold  mb-4 border-b-2">GitHub</h2>
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-semibold">
                <span>フロントエンド:</span>
                <Link
                  href="https://github.com/TkedaSyuri/my-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-300 transition"
                >
                 https://github.com/TkedaSyuri/my-website
                </Link>
              </p>
            </div>
          </div>

          <div
            onClick={() => descriptionBoxRef5.current?.scrollTop()}
            className="flex justify-center items-center  min-w-[80vw] bg-green-500 hover:bg-green-400 duration-300 font-bold text-8xl  hover:text-9xl  p-8 rounded-xl text-white snap-center cursor-pointer"
          >
            TOP
            <PiArrowBendRightUpBold />
          </div>
        </DescriptionBox>
      </section>
    </main>
  );
}
