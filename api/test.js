import card from "../src/components/card.js";
import hexagon from "../src/components/hexagon.js";
import katanas from "../src/components/katanas.js";
import label from "../src/components/label.js";
export default async function handler(req, res) {
  const rank = "3 kyu";
  const honor = "1,250";
  let leaderboardPosition = "#16,637";
  const honorPercentile = "Top 3.276%";
  const totalCompletedKata = "85";

  const rankArray = rank.split(" ");
  const rankNumber = rankArray[0];
  const rankCategory = rankArray.length > 0 ? rankArray[1] : "kyu";
  leaderboardPosition = leaderboardPosition.replace("#", "");

  const width = 500;
  const height = 200;
  const backgroundColor = "#fffefe";
  const borderColor = "rgba(0, 0, 0, 0.5)";
  const textColor = "rgb(0,0,0)";
  const primaryColor = "#1f87e7";
  const padding = 30;
  const hexagonSize = 100;
  res.send(
    card({
      title: "Codewars Stats Ignacio Cuadra",
      description: "Codewars Stats Ignacio Cuadra",
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
      })}

      <rect x = "${
        width / 2 - 20
      }" y = "${padding}" width = "40" height = "40" fill = "${backgroundColor}"/>

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
        text: "Codewar's Rank",
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
    })
  );
}
