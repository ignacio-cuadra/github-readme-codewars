export default function label({
  x,
  y,
  fontSize = "1em",
  fill = "rgb(0, 0, 0)",
  text,
}) {
  return text
    .split("\n")
    .map(
      (line, index) =>
        `<text x = "${x}" y = "${
          y + index * 20
        }" font-size = "${fontSize}" fill="${fill}" dominant-baseline="middle" text-anchor="middle" font-family="Arial">${line}</text>`
    )
    .join("");
}
