import label from "../components/label.js";
import face from "../components/face.js";
import baseTemplate from "./baseTemplate.js";

export default function usernameIsRequeredTemplate() {
  const backgroundColor = "#fffefe";
  const borderColor = "rgba(0, 0, 0, 0.2)";
  const textColor = "rgb(0,0,0)";
  const primaryColor = "#1f87e7";

  const width = 500;
  const height = 200;
  const iconSize = 100;

  return baseTemplate({
    title: "Codewars Stats",
    description: "Codewars Stats",
    width: width,
    height: height,
    borderRadius: 10,
    backgroundColor,
    borderColor,
    style: `
      .primaryColor {
        stroke: ${primaryColor};
      }
    `,
    children: `
      ${face({
        x: width / 2 - iconSize / 2,
        y: height / 2 - iconSize / 2 - 10,
        width: iconSize,
        height: iconSize,
        className: "primaryColor",
      })}
      ${label({
        x: width / 2,
        y: height / 2 + iconSize / 2 + 10,
        fontSize: "1em",
        fill: textColor,
        text: "Username is required",
      })}
      `,
  });
}
