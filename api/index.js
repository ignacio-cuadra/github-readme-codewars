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
  const style = {};
  style.theme = req?.query?.theme;
  style.backgroundColor = parseColor(req?.query?.backgroundColor);
  style.borderColor = parseColor(req?.query?.borderColor);
  style.textColor = parseColor(req?.query?.textColor);
  style.primaryColor = parseColor(req?.query?.primaryColor);

  try {
    const data = await fetcher({ username });
    data.username = username;
    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml; charset=utf-8");
    res.send(
      codewarsTemplate({
        data,
        style,
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

function parseColor(value) {
  if (isHexadecimal(value)) return `#${value}`;
  else if (isRGB(value)) return `rgb(${value})`;
  else if (isRGBA(value)) return `rgba(${value})`;
  return undefined;
}

function isHexadecimal(value) {
  return /^([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/.test(value);
}
function isRGB(value) {
  if (!/^([0-9]{1,3},[0-9]{1,3},[0-9]{1,3})$/.test(value)) return false;
  return true;
}
function isRGBA(value) {
  if (!/^([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},([01]|0*\.[0-9]+))$/.test(value))
    return false;
  return true;
}
