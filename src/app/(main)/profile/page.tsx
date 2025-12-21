import AWSCertifedList from "@/app/components/AWSCertifedList";
import Link from "next/link";
import { ActiveTimeline } from "../../components/ActiveTimeline";

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-20 ">
      <div
        className="text-white  w-full p-3  rounded-2xl shadow-xl backdrop-blur-xs
        overflow-y-auto max-h-[80vh] max-w-[180vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-500"
      >
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
              <p>九州産業大学 経済学部経済学科 2023年 卒業</p>
            </div>
          </div>

          <div className="font-semibold mt-8  space-y-4">
            <h2 className="text-2xl border-b border-blue-600">自己紹介</h2>
            <p>
              大学1年の春休みに他大学のプログラミングサークルに参加したことをきっかけにプログラミングをはじめました。
               そこでは合宿やハッカソンを通じて、HTML / CSS / JavaScript /
              Reactを学びました。
            </p>
            <p>大学3年ではプログラミングを取り扱ったゼミに参加し、主にPythonを用いてExcelの自動化やスクレイピング、Djangoを学びました。</p>
            <p>
              最近はインフラ（AWS、Linux等）や React Native
              に関心があり、AWS認定資格(AWS DOP,Advanced Networking)やLinuC levle1を取得することを目標に勉強しつつ、React Native
              を用いたアプリ開発に取り組んでいく予定です。
            </p>
          </div>
        </div>
        {/* スキル */}
        <div>
          <h2 className="text-2xl border-b mt-8 font-semibold  border-blue-600">
            スキル
          </h2>
          <span className="text-sm">
            ＊ポートフォリオまたは半年以上使用していた技術のみ掲載しています。
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 ">
            <div className="mt-4">
              <h3 className=" font-semibold ">プログラミング言語</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Ruby</li>
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">フレームワーク</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Express.js</li>
                <li>React Native </li>
                <li>Hono.js</li>
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
              </ul>
            </div>

            <div className="mt-4">
              <h3 className=" font-semibold ">その他(ライブラリ)</h3>
              <ul className="list-disc pl-6 mt-2 ">
                <li>Redux</li>
                <li>Jotai</li>
                <li>Prisma</li>
                <li>Three.js</li>
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
              <li className=" mt-5">
                <div>
                  <p className="text-xl mt-4 font-semibold">ITパスポート</p>
                  <p className="text-sm">取得日: 2025年2月17日</p>
                </div>
              </li>
            </ul>
          </div>

          {/* AWS Certified */}
          <div>
            <AWSCertifedList />
          </div>
        </div>

        {/* 活動 */}
        <div>
          <h2 className="text-2xl font-bold border-b border-blue-600">卒業後 2023〜2025年の活動記録</h2>

          <ActiveTimeline />
        </div>

        {/* 情報 */}
        <div className="mt-6 grid  gap-2space-x-4">
          <h2 className="text-2xl font-semibold border-b mt-8  border-blue-600">
            情報
          </h2>

          <div className="flex ">
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
