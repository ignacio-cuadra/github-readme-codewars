import card from "../src/card.js";
import label from "../src/label.js";
import pattern from "../src/pattern.js";
export default async function handler(req, res) {
  res.send(
    card({
      title: "Codewars Stats Ignacio Cuadra",
      description: "Codewars Stats Ignacio Cuadra",
      width: 212,
      height: 331,
      borderRadius: 0.2,
      backgroundColor: "rgb(255, 248, 208)",
      borderColor: "rgb(255, 248, 208)",
      children: `
        ${pattern}
        ${label({ x: 20, y: 20, text: "IGNACIO".split("").join("\n") })}
        ${label({ x: 40, y: 100, text: "CUADRA".split("").join("\n") })}
        <circle cx = "160" cy = "50" r = "100" fill = "rgb(193, 124, 111)"/>
        ${label({ x: 160, y: 50, fontSize: "5em", text: "3" })}
        ${label({ x: 160, y: 85, fontSize: "0.8em", text: "Kyu" })}
      `,
    })
  );
}
