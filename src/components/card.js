const card = ({
  width = 300,
  height = 500,
  borderRadius = 0.5,
  backgroundColor = "rgb(255, 255, 255)",
  borderWidth = 1,
  borderColor = "rgb(0, 0, 0)",
} = {}) => {
  return `
    <rect
      x="0"
      y="0"
      rx="${borderRadius}"
      height="${height}"
      width="${width}"
      fill="${backgroundColor}"
      stroke="${borderColor}"
      stroke-width="${borderWidth}"
      stroke-opacity="1"
    />
  `;
};

export default card;
