import fetcher from "../src/fetcher.js";
import template from "../src/template.js";
export default async function handler(req, res) {
  const username = req?.query?.username;
  const backgroundColor = req?.query?.backgroundColor;
  const borderColor = req?.query?.borderColor;
  const textColor = req?.query?.textColor;
  const primaryColor = req?.query?.primaryColor;
  try {
    const data = await fetcher({ username });
    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.send(
      template({
        data,
        style: {
          backgroundColor,
          borderColor,
          textColor,
          primaryColor,
        },
      })
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
