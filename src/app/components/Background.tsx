import React from "react";


const activityData = [
  {
    year: 2023,
    activities: [
      { month: "1月", description: "Next.jsを勉強" },
      { month: "2月", description: "Next.jsを勉強" },
      { month: "3月", description: "ゼミの先生のホームページを制作" },
      { month: "4月", description: "ゼミの先生のホームページを完成" },
    ],
  },
  {
    year: 2024,
    activities: [
      { month: "1月", description: "React Hooksの理解を深める" },
      { month: "2月", description: "ポートフォリオサイト制作" },
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
  data: YearlyActivities[];
};

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ data }) => {
  return (
    <div className="space-y-12">
      {data.map((yearData) => (
        <div key={yearData.year}>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2">
            {yearData.year}年
          </h2>
          <div className="divide-y divide-gray-200">
            {yearData.activities.map((activity, index) => (
              <div key={index} className="py-2 flex items-start">
                <div className="w-16 text-gray-500 font-medium">{activity.month}</div>
                <div className="flex-1 text-gray-800">{activity.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
