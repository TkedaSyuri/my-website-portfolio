import Link from "next/link";
import React from "react";

// 仮データ
const Data = [
  { id: 1, title: "TypeScript・JavaScript", url: "https://github.com/TkedaSyuri/TypeScript-JavaScript-practice" },
  { id: 2, title: "React", url: "https://github.com/TkedaSyuri/React-practice" },
  { id: 3, title: "Next.js", url: "https://github.com/TkedaSyuri/Next.js-practice" },
  { id: 4, title: "Redux", url: "https://github.com/TkedaSyuri/Redux-practice" },
  { id: 5, title: "Jotai", url: "https://github.com/TkedaSyuri/Jotai-practice" },
  { id: 6, title: "React Native", url: "https://github.com/TkedaSyuri/React-Native-practice" },
  { id: 7, title: "Node.js", url: "https://github.com/TkedaSyuri/Node.js-practice" },
  { id: 8, title: "Express.js", url: "https://github.com/TkedaSyuri/Express-practice" },
  { id: 9, title: "Hono.js", url: "https://github.com/TkedaSyuri/Hono-practice" },
  { id: 13, title: "Drizzle ORM", url: "https://github.com/TkedaSyuri/Drizzle-practice" },
  { id: 14, title: "AWS", url: "https://github.com/TkedaSyuri/AWS-practice" },
  { id: 15, title: "Docker", url: "https://github.com/TkedaSyuri/Docker-practice" },
  { id: 18, title: "Three.js", url: "https://github.com/TkedaSyuri/Threejs-practice" },
  { id: 19, title: "React Three Fiber", url: "https://github.com/TkedaSyuri/React-Three-Fiber-practice" },
  { id: 20, title: "DB", url: "https://github.com/TkedaSyuri/DB-practice" },
];

const RecordPage = () => {
  return (
    <div className="relative z-20 h-screen p-4">
      {/* このページの説明 */}
      <p className="text-white mb-4">
        このページでは、これまでに学習してきたプログラミング言語、フレームワーク、ライブラリなどの技術を一覧形式で紹介しています。完成させたものだけでなく、途中まで取り組んだものも含めて掲載しています。
      </p>

      {/* スクロール領域 */}
      <div className="flex justify-center overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300">
        <div>
          {Data.map((items) => (
            <div
              key={items.id}
              className="mt-2 p-2 w-auto text-white border border-blue-500 rounded"
            >
              <p className="text-2xl text-center">「{items.title}」</p>
              <div className="flex break-all">
                <p className="mr-1">URL：</p>
                <Link
                  href={items.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-200 transition"
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
