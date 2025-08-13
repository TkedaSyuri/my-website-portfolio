"use client";
// import { useEffect, useState } from "react";

import Link from "next/link";
// import { startBuild } from "../lib/api/startBuild";

const TopPage = () => {
  // useEffect(() => {
  //   const BuildMyBlogApi = async () => {

  //     try {
  //       const data = await startBuild();
  //       console.log(data.status);
  //     } catch (err) {
  //       console.error("API call failed:", err);
  //     }
  //   };

  //   BuildMyBlogApi();
  // }, []);

  return (
    <div className="left-0  pointer-events-none inline-block relative z-20">
      <div className="text-5xl md:text-9xl font-bold  text-white  ">
        <h1>Takeda Syuri</h1>
      </div>
      <div>
        <ul className="ml-4 mt-20 grid gap-6 text-3xl md:text-5xl font-semibold z-20 text-white  pointer-events-auto ">
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
    </div>
  );
};

export default TopPage;
