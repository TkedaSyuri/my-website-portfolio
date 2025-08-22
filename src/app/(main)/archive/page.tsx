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

const RecordPage = () => {
  return (
      <div className="relative z-20 pt-10  overflow-y-auto max-h-[95vh] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
        {/* このページの説明 */}
        <p className="text-base font-bold text-white mb-4 text-center ">
          このページでは、これまでに学習してきたプログラミング言語、フレームワーク、ライブラリなどの技術を一覧形式で紹介しています。
          途中まで取り組んだものも含めて掲載しています
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            {Data.map((items) => (
              <div
                key={items.id}
                className="flex flex-col items-center  mt-2 p-2 m-2  w-96 bg-gray-200 text-black  border-blue-500 border rounded  "
              >
                <p className="text-2xl text-center">「{items.title}」</p>
                <div className=" flex flex-col justify-center items-center break-all ">
                  <p className="mr-1 text-sm ">Git Hubへのリンク</p>
                  <Link
                    href={items.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 underline hover:text-blue-400 transition duration-200"
                  >
                    {items.url}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RecordPage;
