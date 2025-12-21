//ブログを構築するapi

export const startBuild = async () => {
  try {
    const res = await fetch("/api/start-build", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json()
    return data;
  } catch (err) {
    console.log(err);
   throw err;
  }
};
