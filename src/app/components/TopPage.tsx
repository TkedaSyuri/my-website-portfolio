"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

const TopPage = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>();
  // "ビルド実行済み"
  // useEffect(() => {
  //   const BuildMyBlogApi = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://2qsi7kz2ul.execute-api.ap-northeast-1.amazonaws.com/prod/start-build-my-blog",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const data = await res.json();

  //       if (data.status === "done") {
  //         setStatusMessage("構築完了");
  //       } else if (data.status === "starting") {
  //         setStatusMessage("構築中");
  //       } else {
  //         console.log("不明なステータス:", data.status);
  //       }
  //     } catch (err) {
  //       console.error("API call failed:", err);
  //     }
  //   };

  //   BuildMyBlogApi();
  // }, []);

  return (
    <div className="left-0  pointer-events-none inline-block relative z-20">
        <div className="font-semibold text-8xl text-white  ">
          <h1 >Takeda Syuri</h1>
        </div>
        <div>
          <ul className="ml-4 mt-20 grid gap-6 text-5xl font-semibold z-20 text-white  pointer-events-auto ">
            <Link
              href="profile "
              className="hover:text-orange-400 hover:scale-110 duration-500 z-20  w-fit"
            >
              プロフィール
            </Link>
            <Link
              href="portfolio"
              className="hover:text-orange-400 hover:scale-110 duration-500   z-20   w-fit"
            >
              ポートフォリオ
            </Link>
            <Link
              href="record"
              className="hover:text-orange-400 hover:scale-110 duration-500 z-20 w-fit"
            >
              アーカイブ
            </Link>
          </ul>
        </div>
        <p className="text-white">{statusMessage}</p>
      </div>
  );
};

export default TopPage;
