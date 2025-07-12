import Link from "next/link";
import React from "react";

const RecordPage = () => {
  return (
    <div className="relative z-20">
      {/* このページの説明 */}
      <p className="text-white">
        このページでは、これまでに学習してきたプログラミング言語、フレームワーク、ライブラリなどの技術を一覧形式で紹介しています。完成させたものだけでなく、途中まで取り組んだものも含めて掲載しています。
      </p>
      <div className="flex justify-center ">
        <div>
          <div className="mt-2 p-2 w-96 text-white border border-blue-500">
            <p className="text-2xl">タイトル</p>
            <div className="flex">
              <p>URL：</p>
              <Link href="git.hub">git hub.example.com</Link>
            </div>
          </div>
          <div className="mt-2 p-2 w-96 text-white border border-blue-500">
            <p className="text-2xl">タイトル</p>
            <div className="flex">
              <p>URL：</p>
              <Link href="git.hub">git hub.example.com</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
