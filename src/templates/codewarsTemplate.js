import card from "../components/card.js";
import hexagon from "../components/hexagon.js";
import label from "../components/label.js";
import katanas from "../components/katanas.js";

export default function codewarsTemplate({ data, style }) {
  let {
    rank,
    honor,
    leaderboardPosition,
    honorPercentile,
    totalCompletedKata,
  } = data;
  let { backgroundColor, borderColor, textColor, primaryColor } = style;
  if (!backgroundColor) backgroundColor = "#fffefe";
  if (!borderColor) borderColor = "rgba(0, 0, 0, 0.2)";
  if (!textColor) textColor = "rgb(0,0,0)";
  if (!primaryColor) primaryColor = "#1f87e7";

  const rankArray = rank.split(" ");
  const rankNumber = rankArray[0];
  const rankCategory = rankArray.length > 0 ? rankArray[1] : "kyu";
  leaderboardPosition = leaderboardPosition.replace("#", "");

  const width = 500;
  const height = 200;
  const padding = 30;
  const hexagonSize = 100;

  return card({
    title: "Codewars Stats",
    description: "Codewars Stats",
    width: width,
    height: height,
    borderRadius: 10,
    backgroundColor,
    borderColor,
    children: `
        <line x1 = "${
          (width - 2 * padding) / 3 + padding - padding
        }" y1 = "${padding}" x2 = "${
      (width - 2 * padding) / 3 + padding - padding
    }" y2="${height - padding}" stroke="${borderColor}" stroke-width="0.5"/>

      <line x1 = "${
        ((width - 2 * padding) / 3) * 2 + padding + padding
      }" y1 = "${padding}" x2 = "${
      ((width - 2 * padding) / 3) * 2 + padding + padding
    }" y2="${height - padding}" stroke="${borderColor}" stroke-width="0.5"/>

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
      })}

      ${label({
        x: width / 2,
        y: hexagonSize / 2 + padding + 20,
        fontSize: "1em",
        fill: textColor,
        text: rankCategory,
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
      })}



      ${label({
        x: width / 6 - padding / 2,
        y: height / 2 - 10,
        fontSize: "2em",
        fontWeight: "bold",
        fill: textColor,
        text: leaderboardPosition,
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