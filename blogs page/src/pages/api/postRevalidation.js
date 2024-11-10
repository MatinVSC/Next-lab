import localData from "../data/revalidateData.json";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const responses = await Promise.all(
        localData.map((item) =>
          fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          })
        )
      );

      const results = await Promise.all(responses.map((r) => r.json()));

      res.status(200).json({
        message: "Data successfully posted",
        results,
      });
    } catch (error) {
      console.log("Error: ", error)
    }
  }
};
