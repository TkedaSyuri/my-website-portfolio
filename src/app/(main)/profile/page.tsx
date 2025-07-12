import Link from "next/link";
import Script from "next/script";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-20 ">
      <div
        className="text-white max-w-6xl w-full p-8 rounded-2xl shadow-xl backdrop-blur-xs
        overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500"
      >
        <Link href="/" className="text-white">
          戻る
        </Link>

        {/* 自己紹介 */}
        <div>
          <div className="font-semibold ">
            <div className="flex text-3xl ">
              <p>武田珠里</p>
            </div>
            <div className="flex mt-1">
              <p>生年月日：</p>
              <p>2000年10月10日</p>
            </div>
            <div className="flex mt-1">
              <p>学歴：</p>
              <p>九州産業大学 経済学部経済学科 卒業</p>
            </div>
          </div>

          <div className="font-semibold mt-8  space-y-4">
            <h2 className="text-2xl border-b border-blue-600">自己紹介</h2>
            <p>
              大学１年生の時、他大学のプログラミングサークルに参加したことをきっかけにプログラミングをはじめました。
              <br /> そこでは合宿やハッカソンを通じて、HTML / CSS / JavaScript /
              Reactを学びました。
              ものづくりの面白さを実感し、現在はNext.jsやTypeScriptを中心にWebアプリケーション開発に取り組んでいます。
            </p>
            <p>
              最近はインフラ（AWS）や React Native に関心があり、これから
              AWS認定資格を 順次取得しつつ、React Native
              を用いたアプリ開発にも取り組んでいく予定です。
            </p>
          </div>
        </div>
        {/* スキル */}
        <div>
          <h2 className="text-2xl border-b mt-8 font-semibold  border-blue-600">
            スキル
          </h2>
          <div className="grid grid-cols-3 gap-2 ">
            <div className="mt-4 ">
              <h3 className=" font-semibold ">プログラミング言語</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Ruby</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">フレームワーク</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>React.js</li>
                <li>Next.js</li>
                <li>React Native </li>
                <li>Hono.js</li>
                <li>Express.js</li>
                <li>Ruby on Rails</li>
                <li>Django</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">データベース</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>Supabase</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">インフラ / デプロイ</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>AWS</li>
                <li>Docker</li>
                <li>Vercel</li>
                <li>Render</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">その他(ライブラリ)</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>Redux</li>
                <li>Jotai</li>
                <li>Prisma</li>
                <li>Drizzle ORM</li>
                <li>Three.js</li>
                <li>React Three Fiber</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">バージョン管理</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 資格 */}
        <div>
          <h2 className="text-2xl font-semibold border-b mt-8  border-blue-600">
            資格
          </h2>
          <div>
            <ul className="list-disc pl-6">
              <li className=" mt-5">ITパスポート</li>
            </ul>
          </div>
          {/* AWS Certified */}
          <div>
            <h2 className=" mt-4 font-semibold">AWS Certified</h2>
            <div className="flex gap-5">
              <div>
                <p>Solution Architect Associate</p>
                <div>
                  <div
                    data-iframe-width="150"
                    data-iframe-height="240"
                    data-share-badge-id="ac846df1-563d-4042-a44c-1e1ea684ce84"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>
              </div>
              <div>
                <p>Cloud Practitioner</p>
                <div>
                  <div
                    data-iframe-width="150"
                    data-iframe-height="240"
                    data-share-badge-id="6c0e98bb-c1e6-4117-ad97-1392efd2eada"
                    data-share-badge-host="https://www.credly.com"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <Script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
          />
        </div>

        <div className="mt-6 grid  gap-2space-x-4">
          <h2 className="text-2xl font-semibold border-b mt-8  border-blue-600">
            情報
          </h2>

          <div className="flex">
            <p>Git Hub：</p>
            <Link
              href="https://github.com/TkedaSyuri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              https://github.com/TkedaSyuri
            </Link>
          </div>
          <div className="flex mt-1">
            <p>メールアドレス：</p>
            <p>syuritakeda1010@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
