"use client";
import { useEffect, useState } from "react";

import Link from "next/link";

const TopPage = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(
    // "ビルド実行済み"
  );
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
    <div className=" top-0  left-0 z-20 pointer-events-none inline-block">
      <h1 className="m-4 font-bold text-6xl text-white pointer-events-auto">
        Takeda Syuri
      </h1>
      <ul className="ml-4 mt-20 grid gap-6  font-semibold text-4xl text-white  pointer-events-auto ">
        <Link
          href="profile "
          className="hover:text-orange-400 hover:scale-110 duration-500   w-fit"
        >
          プロフィール
        </Link>
        <Link
          href="portfolio"
          className="hover:text-orange-400 hover:scale-110 duration-500  w-fit"
        >
          ポートフォリオ
        </Link>
        <Link
          href="record"
          className="hover:text-orange-400 hover:scale-110 duration-500  w-fit"
        >
          アーカイブ
        </Link>
      </ul>
      <p className="text-white">{statusMessage}</p>
    </div>
  );
};

export default TopPage;
