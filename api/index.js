import fetcher from "../src/fetcher.js";
import codewarsTemplate from "../src/templates/codewarsTemplate.js";
import usernameIsRequeredTemplate from "../src/templates/usernameIsRequiredTemplate.js";
import usernameNotFoundTemplate from "../src/templates/usernameNotFoundTemplate.js";
import UserNotFoundError from "../src/UserNotFoundError.js";

export default async function handler(req, res) {
  const username = req?.query?.username;

  if (!username) {
    res.status(500);
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.send(usernameIsRequeredTemplate());
    return;
  }

  const backgroundColor = req?.query?.backgroundColor;
  const borderColor = req?.query?.borderColor;
  const textColor = req?.query?.textColor;
  const primaryColor = req?.query?.primaryColor;

  try {
    const data = await fetcher({ username });
    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.send(
      codewarsTemplate({
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
    if (error instanceof UserNotFoundError) {
      res.status(404);
      res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
      res.send(usernameNotFoundTemplate());
      return;
    }
    res.status(500).json({ message: error.message });
  }
}
