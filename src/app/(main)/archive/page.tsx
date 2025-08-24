import Link from "next/link";
import React from "react";

// 仮データ
const Data = [
  {
    id: 1,
    title: "TypeScript・JavaScript",
    url: "https://github.com/TkedaSyuri/TypeScript-JavaScript-practice",
  },
  {
    id: 2,
    title: "React",
    url: "https://github.com/TkedaSyuri/React-practice",
  },
  {
    id: 3,
    title: "Next.js",
    url: "https://github.com/TkedaSyuri/Next.js-practice",
  },
  {
    id: 4,
    title: "Redux",
    url: "https://github.com/TkedaSyuri/Redux-practice",
  },
  {
    id: 5,
    title: "Jotai",
    url: "https://github.com/TkedaSyuri/Jotai-practice",
  },
  {
    id: 6,
    title: "React Native",
    url: "https://github.com/TkedaSyuri/React-Native-practice",
  },
  {
    id: 7,
    title: "Node.js",
    url: "https://github.com/TkedaSyuri/Node.js-practice",
  },
  {
    id: 8,
    title: "Express.js",
    url: "https://github.com/TkedaSyuri/Express-practice",
  },
  {
    id: 9,
    title: "Hono.js",
    url: "https://github.com/TkedaSyuri/Hono-practice",
  },
  {
    id: 13,
    title: "Drizzle ORM",
    url: "https://github.com/TkedaSyuri/Drizzle-practice",
  },
  { id: 14, title: "AWS", url: "https://github.com/TkedaSyuri/AWS-practice" },
  {
    id: 15,
    title: "Docker",
    url: "https://github.com/TkedaSyuri/Docker-practice",
  },
  {
    id: 16,
    title: "GO",
    url: "https://github.com/TkedaSyuri/Go-practice",
  },
  {
    id: 17,
    title: "Three.js",
    url: "https://github.com/TkedaSyuri/Threejs-practice",
  },
  {
    id: 18,
    title: "React Three Fiber",
    url: "https://github.com/TkedaSyuri/React-Three-Fiber-practice",
  },
  { id: 19, title: "DB", url: "https://github.com/TkedaSyuri/DB-practice" },
];

const ArchivePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-20 ">
      <div
        className="text-white max-w-6xl w-full p-2 rounded-2xl shadow-xl backdrop-blur-xs
        overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500"
      >
        <div className="flex justify-center">
        <p className="text-sm md:text-base font-bold pb-4 text-white ">
          このページでは、これまでに学習してきたプログラミング言語、フレームワーク、ライブラリなどの技術を一覧形式で紹介しています。
          途中まで取り組んだものも含めて掲載しています。
        </p>

        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
            {Data.map((items) => (
              <div
                key={items.id}
                className="flex flex-col items-center p-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-xl shadow-md hover:shadow-xl hover:border-blue-400 transition duration-300"
              >
                <p className="text-xl font-bold text-center mb-2">
                  {items.title}
                </p>
                <div className="flex flex-col items-center text-sm text-gray-600">
                  <p className="mb-1">GitHub リポジトリ</p>
                  <Link
                    href={items.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline hover:text-blue-500 transition-colors"
                  >
                    {items.url}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
