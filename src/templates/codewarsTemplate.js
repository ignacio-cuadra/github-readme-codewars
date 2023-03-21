import baseTemplate from "./baseTemplate.js";
import hexagon from "../components/hexagon.js";
import label from "../components/label.js";
import katanas from "../components/katanas.js";
import themes from "../themes.js";

export default function codewarsTemplate({ data, style }) {
  let {
    username,
    rank,
    honor,
    leaderboardPosition,
    honorPercentile,
    totalCompletedKata,
  } = data;
  const { backgroundColor, borderColor, textColor, primaryColor } =
    applyStyle(style);

  const rankArray = rank.split(" ");
  const rankNumber = rankArray[0];
  const rankCategory = rankArray.length > 0 ? rankArray[1] : "kyu";
  leaderboardPosition = leaderboardPosition.replace("#", "");

  const width = 500;
  const height = 200;
  const padding = 30;
  const hexagonSize = 100;

  return baseTemplate({
    title: `Codewars Stats ${username}`,
    description: `Stats of ${username} rank: ${rank}, honor: ${honor}, leaderboard position: ${leaderboardPosition}, honor percentile:, ${honorPercentile}, total completed kata: ${totalCompletedKata}`,
    width: width,
    height: height,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor,
    borderColor,
    children: `
        <line x1 = "${
          (width - 2 * padding) / 3 + padding - padding
        }" y1 = "${padding}" x2 = "${
      (width - 2 * padding) / 3 + padding - padding
    }" y2="${height - padding}" stroke="${borderColor}" stroke-width="2"/>

      <line x1 = "${
        ((width - 2 * padding) / 3) * 2 + padding + padding
      }" y1 = "${padding}" x2 = "${
      ((width - 2 * padding) / 3) * 2 + padding + padding
    }" y2="${height - padding}" stroke="${borderColor}" stroke-width="2"/>

      ${hexagon({
        x: width / 2 - hexagonSize / 2,
        y: padding,
        width: hexagonSize,
        height: hexagonSize,
        fill: "transparent",
        strokeColor: primaryColor,
        strokeWidth: 4,
        topSizeToCut: 12,
      })}

      ${katanas({
        x: width / 2 - 15,
        y: padding,
        width: 30,
        height: 30,
        color: primaryColor,
      })}

      ${label({
        x: width / 2,
        y: hexagonSize / 2 + padding,
        fontSize: "2em",
        fontWeight: "bold",
        fill: textColor,
        text: rankNumber,
        style: "animation: currstreak 0.6s linear forwards",
      })}

      ${label({
        x: width / 2,
        y: hexagonSize / 2 + padding + 20,
        fontSize: "1em",
        fill: textColor,
        text: rankCategory,
        style: "animation: fadein 0.6s linear forwards",
      })}

      ${label({
        x: width / 2,
        y: hexagonSize + padding + 20,
        fontSize: "1em",
        fontWeight: "bold",
        fill: primaryColor,
        text: "Codewars Rank",
      })}

      ${label({
        x: width / 2,
        y: hexagonSize + padding + 20 + 20,
        fontSize: ".8em",
        fill: textColor,
        text: honor,
        style: "animation: fadein 0.6s linear forwards",
      })}



      ${label({
        x: width / 6 - padding / 2,
        y: height / 2 - 10,
        fontSize: "2em",
        fontWeight: "bold",
        fill: textColor,
        text: leaderboardPosition,
        style: "animation: fadein 0.6s linear forwards",
      })}

      ${label({
        x: width / 6 - padding / 2,
        y: height / 2 - 10 + 30,
        fontSize: ".8em",
        fill: textColor,
        text: "Leaderboard\nposition",
      })}


      ${label({
        x: (width / 6) * 5 + padding / 2,
        y: height / 2 - 10,
        fontSize: "2em",
        fontWeight: "bold",
        fill: textColor,
        text: totalCompletedKata,
        style: "animation: fadein 0.6s linear forwards",
      })}

      ${label({
        x: (width / 6) * 5 + padding / 2,
        y: height / 2 - 10 + 30,
        fontSize: ".8em",
        fill: textColor,
        text: "Total Completed\nkatas",
      })}
      `,
  });
}

const applyStyle = ({
  theme: themeKey,
  backgroundColor,
  borderColor,
  textColor,
  primaryColor,
}) => {
  const theme =
    themeKey && themeKey in themes ? themes[themeKey] : themes.default;
  if (!backgroundColor) backgroundColor = theme.backgroundColor;
  if (!borderColor) borderColor = theme.borderColor;
  if (!textColor) textColor = theme.textColor;
  if (!primaryColor) primaryColor = theme.primaryColor;
  return { backgroundColor, borderColor, textColor, primaryColor };
};
