import { div } from "framer-motion/client";

const Data = [
  {
    id: 1,
    title: "Solution Architect-Associate",
    getDate: "2025年5月30日",
    bagde_id: "ac846df1-563d-4042-a44c-1e1ea684ce84",
  },
  {
    id: 2,
    title: "Developer-Associate",
    getDate: "2025年9月17日",
    bagde_id: "687f8738-9105-4879-b8c9-fee55ef59e49",
  },
  {
    id: 3,
    title: "SysOps Administrator-Associate",
    getDate: "2025年9月29日",
    bagde_id: "b07f81f8-0431-49ee-8e50-eeb21160dd23",
  },
  {
    id: 4,
    title: "Cloud Practitioner",
    getDate: "2025年5月13日",
    bagde_id: "6c0e98bb-c1e6-4117-ad97-1392efd2eada",
  },
];

const AWSCertifedList = () => {
  return (
    <>
      <h2 className="text-xl mt-4 font-semibold">・AWS Certified</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {Data.map((item) => (
          <div
            key={item.id}
            className="py-4 flex text-center flex-col items-center justify-center"
          >
              <div>
                <p className="font-semibold min-h-[3rem] flex items-center justify-center">
                  {item.title}
                </p>
                <p className="text-sm">取得日: {item.getDate}</p>
              </div>
              <div className="flex justify-center items-center">
                <div
                  data-iframe-width="140"
                  data-iframe-height="240"
                  data-share-badge-id={item.bagde_id}
                  data-share-badge-host="https://www.credly.com"
                ></div>
              </div>
            </div>
        ))}
      </div>
    </>
  );
};
export default AWSCertifedList;
