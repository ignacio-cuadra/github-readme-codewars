import card from "./card.js";
import hexagon from "./hexagon.js";
import label from "./label.js";

export default function template({
  rank,
  honor,
  leaderboardPosition,
  honorPercentile,
  totalCompletedKata,
}) {
  const width = 215;
  const height = 300;
  const padding = 20;
  const backgroundColor = "rgb(255, 248, 208)";
  const primaryColor = "rgb(73, 68, 40)";
  return card({
    title: "Codewars Stats Ignacio Cuadra",
    description: "Codewars Stats Ignacio Cuadra",
    width: width,
    height: height,
    borderRadius: 0.2,
    backgroundColor: backgroundColor,
    borderColor: backgroundColor,
    children: `
        <rect x = "${padding}" y = "${padding}" width = "${
      width - padding * 2
    }" height = "${
      height - padding * 2
    }" fill = "transparent" stroke = "${primaryColor}" stroke-width = "2" />

        ${hexagon({
          x: width / 2 - width / 4,
          y: padding * 2,
          width: width / 2,
          height: width / 2,
          fill: primaryColor,
        })}
      
        ${label({
          text: rank,
          x: width / 2,
          y: padding * 2 + width / 4 - 10,
          fill: backgroundColor,
          fontSize: "3em",
        })}
        ${label({
          text: "Kyu",
          x: width / 2,
          y: padding * 2 + width / 4 + 12,
          fill: backgroundColor,
          fontSize: ".5em",
        })}
        ${label({
          text: honor,
          x: width / 2,
          y: padding * 2 + width / 4 + 27,
          fill: backgroundColor,
          fontSize: ".8em",
        })}

        ${label({
          text: "Leaderboard",
          fontWeight: "bold",
          x: width / 2,
          y: height / 2 + 10 + 5,
          fontSize: ".6em",
        })}
        ${label({
          text: leaderboardPosition,
          x: width / 2,
          y: height / 2 + 22 + 5,
          fontSize: ".6em",
        })}

        ${label({
          text: "Honor",
          fontWeight: "bold",
          x: padding * 3,
          y: height / 2 + 10 + 40,
          fontSize: ".6em",
        })}
        ${label({
          text: honorPercentile,
          x: padding * 3,
          y: height / 2 + 22 + 40,
          fontSize: ".6em",
        })}

        ${label({
          text: "Katas",
          fontWeight: "bold",
          x: width - padding * 3,
          y: height / 2 + 10 + 40,
          fontSize: ".6em",
        })}
        ${label({
          text: totalCompletedKata,
          x: width - padding * 3,
          y: height / 2 + 22 + 40,
          fontSize: ".6em",
        })}
        

        <rect x = "${padding * 2}" y = "${height - padding * 3}" width = "${
      width - padding * 4
    }" height = "${
      padding * 1.5
    }" fill = "transparent" stroke = "${primaryColor}" stroke-width = "2" />

        ${label({
          text: "C O D E W A R S",
          x: width / 2,
          y: height - padding * 2 - 7,
          fontSize: "1em",
        })}
        ${label({
          text: "stats",
          x: width / 2,
          y: height - padding * 2 + 4,
          fontSize: ".5em",
        })}
      `,
  });
}
