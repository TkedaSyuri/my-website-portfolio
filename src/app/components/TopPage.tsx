"use client";

import Link from "next/link";

const TopPage = () => {
  return (
    <div className="left-0  pointer-events-none inline-block relative z-20">
      <div className="text-6xl md:text-8xl font-bold  text-white  ">
        <h1>Takeda Syuri <span className="text-6xl">ーポートフォリオー</span><span className="sr-only">武田珠里 ホームページ</span></h1>
      </div>c
      <div>
        <ul className="ml-4 mt-20 grid gap-6 text-4xl md:text-5xl font-semibold z-20 text-white  pointer-events-auto ">
          <Link
            href="/profile "
            className="hover:text-orange-400 hover:scale-110 duration-500 z-20  w-fit"
          >
            プロフィール
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-orange-400 hover:scale-110 duration-500   z-20   w-fit"
          >
            ポートフォリオ
          </Link>
          <Link
            href="/archive"
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
