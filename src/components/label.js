export default function label({
  x,
  y,
  fontSize = "1em",
  fill = "rgb(0, 0, 0)",
  text,
  fontWeight = 500,
}) {
  return text
    .split("\n")
    .map(
      (line, index) =>
        `<text x = "${x}" y = "${
          y + index * 20
        }" font-size = "${fontSize}" fill="${fill}" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-weight="${fontWeight}">${line}</text>`
    )
    .join("");
}
