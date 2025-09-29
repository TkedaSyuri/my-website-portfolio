const Data = [
  {
    id: 1,
    title: "Solution Architect-Associate",
    getDate: "2025年5月30日",
    width: "150",
    height: "240",
    bagde_id: "ac846df1-563d-4042-a44c-1e1ea684ce84",
  },
  {
    id: 2,
    title: "Developer-Associate",
    getDate: "2025年9月17日",
    width: "150",
    height: "240",
    bagde_id: "687f8738-9105-4879-b8c9-fee55ef59e49",
  },
  {
    id: 3,
    title: "SysOps Administrator-Associate",
    getDate: "2025年9月29日",
    width: "150",
    height: "240",
    bagde_id: "b07f81f8-0431-49ee-8e50-eeb21160dd23",
  },
  {
    id: 4,
    title: "Cloud Practitioner",
    getDate: "2025年5月13日",
    width: "150",
    height: "240",
    bagde_id: "6c0e98bb-c1e6-4117-ad97-1392efd2eada",
  },
];


const AWSCertifedList = () => {
  return (
    <div className="mt-2 flex grid-cols-2 gap-5">
      {Data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>取得日: {item.getDate}</p>
          <div>
            <div
              data-iframe-width={item.width}
              data-iframe-height={item.height}
              data-share-badge-id={item.bagde_id}
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AWSCertifedList;
