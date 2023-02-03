import getStatsImage from "../getStatsImage.js";
import fetcher from "../src/fetcher.js";
export default async function handler(req, res) {
  const username = req?.query?.username;
  try {
    const data = await fetcher({ username });
    res.status(200);
    // res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.send(getStatsImage(data));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
