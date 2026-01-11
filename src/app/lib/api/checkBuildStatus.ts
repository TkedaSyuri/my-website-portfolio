//構築の進捗状況を確認するapi
export const checkBuildStatus = async () => {
  try {
    const res = await fetch("/api/check-build-status", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
