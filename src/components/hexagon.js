export default function hexagon({
  x = 0,
  y = 0,
  width = 10,
  height = 10,
  fill = "red",
  strokeColor = "transparent",
  strokeWidth = 0,
}) {
  const hexagonVerticalPadding = 0;
  const hexagonHorizontalPadding = 5;
  const hexagonWidth = 100;
  const hexagonHeight = 100;
  return `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="${x}"
    y="${y}"
    width="${width}"
    height="${height}"
    viewBox="${strokeWidth / -2} ${strokeWidth / -2 - strokeWidth * 0.1} ${
    hexagonWidth + strokeWidth
  } ${hexagonHeight + strokeWidth + strokeWidth * 0.2}">
  <polygon points="${hexagonWidth / 2},${hexagonVerticalPadding} ${
    hexagonWidth - hexagonHorizontalPadding
  },${hexagonHeight * 0.25} ${hexagonWidth - hexagonHorizontalPadding},${
    hexagonHeight * 0.75
  } ${hexagonWidth / 2},${
    hexagonHeight - hexagonVerticalPadding
  } ${hexagonHorizontalPadding},${
    hexagonHeight * 0.75
  } ${hexagonHorizontalPadding},${
    hexagonHeight * 0.25
  }" fill="${fill}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
</svg>
`;
}
