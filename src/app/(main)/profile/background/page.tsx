import React from "react";


const activityData = [
  {
    year: 2023,
    activities: [
      { month: "1月", description: "Next.js 12を学習" },
      { month: "2月", description: "〃" },
      { month: "3月", description: "Next.jsとヘッドレスCMSでゼミの先生のホームページを開発" },
      { month: "4月", description: "ゼミの先生のホームページを完成" },
      { month: "5月", description: "基本情報技術者試験を勉強" },
      { month: "6月", description: "〃" },
      { month: "7月", description: "〃" },
      { month: "8月", description: "バックエンド(Laravel,Express.js)を学習" },
      { month: "9月", description: "Three.jsとExpress.jsを学習" },
      { month: "10月", description: "ゼミの先生のホームページ(フロントエンド)をNext.js × Three.jsで開発" },
      { month: "11月", description: "ゼミの先生のホームページ(バックエンド)をExpress.jsで開発"},
      { month: "12月", description: "ゼミの先生のホームページ 完成、Next.js 13とReduxを学習、ゼミの先生のホームページをNext.js 13で作り直し"},
    ],
  },
  {
    year: 2024,
    activities: [
      { month: "1月", description: "ゼミの先生のホームページ(Next.js 13) 完成" },
      { month: "2月", description: "リネンシステムを開発、TypeScriptを学習" },
      { month: "3月", description: "リネンシステムを開発" },
      { month: "4月", description: "TypeScriptを学習" },
      { month: "5月", description: "ReduxとTypeScriptを学習" },
      { month: "6月", description: "ReduxとTypeScriptを学習、リネンシステム 開発" },
      { month: "7月", description: "リネンシステム 主要機能完成" },
      { month: "8月", description: "RubyとRuby on Railsを学習、個人開発" },
      { month: "9月", description: "Dockerの学習、個人開発" },
      { month: "10月", description: "Next.js 15を学習、Ruby on RailsとNext.jsでブログを開発" },
      { month: "11月", description: "AWSを学習、ブログを開発"},
      { month: "12月", description: "AWS(ECS,Fargate)の学習、ITパスポートを勉強、個人開発"},
    ],
  },
  {
    year: 2025,
    activities: [
      { month: "1月", description: "AWS(ECS,Fargate)を学習、ITパスポート取得" },
      { month: "2月", description: "AWS(ECS,Fargate)とLinuxとDockerを学習" },
      { month: "3月", description: "LinuxとReact Nativeを学習、基本情報技術者試験の勉強" },
      { month: "4月", description: "React Nativeでリネンシステム(アプリ)を開発・完成" },
      { month: "5月", description: "AWS Cloud Practitioner・Solution Architect Sssociateを勉強・取得、個人開発" },
      { month: "6月", description: "ECS on Fargateを利用したブログ環境を構築、AWS CDKを学習、自分のホームページを開発" },
      { month: "7月", description: "ECS on Fargateを利用したブログ環境の自動構築・削除をAWS サービス・CDKで実装" },
      { month: "8月", description: "AWS Developer Associateを勉強、個人開発" },
      { month: "9月", description: "AWS Developer Associateを取得、AWS Certified SysOps Administrator Associateを勉強・取得、個人開発" },
      { month: "10月", description: "個人開発、AWS Solution Architect Professionalを勉強" },
      { month: "11月", description: "AWS Solution Architect Professionalを勉強、個人開発"},
      { month: "12月", description: ""},
    ],
  },
];
type Activity = {
  month: string;
  description: string;
};

type YearlyActivities = {
  year: number;
  activities: Activity[];
};

type ActivityTimelineProps = {
  activityData: YearlyActivities[];
};

export const ActivityTimeline: React.FC<ActivityTimelineProps> = () => {
  return (
<div className="relative z-20 text-white flex flex-col items-center h-[90vh] overflow-y-auto space-y-12 px-4 pt-20">
  {activityData.map((yearData) => (
    <div key={yearData.year} className="w-full max-w-6xl text-center ">
      <h2 className="text-2xl text-white font-bold mb-4 border-b border-gray-600 pb-2 pl-24">
        {yearData.year}年
      </h2>
      <div className="divide-y divide-gray-700 bg-gray-800/50 rounded-xl shadow-md overflow-hidden">
        {yearData.activities.map((activity, index) => (
          <div
            key={index}
            className="py-3 flex items-center justify-center gap-6"
          >
            <div className="w-20 text-white font-medium">
              {activity.month}
            </div>
            <div className="flex-1 text-gray-100 ">
              {activity.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
  );
};

export default ActivityTimeline

