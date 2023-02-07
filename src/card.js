const card = ({
  title = "",
  description = "",
  width = 300,
  height = 500,
  borderRadius = 0.5,
  backgroundColor = "rgb(255, 255, 255)",
  borderColor = "rgb(0, 0, 0)",
  children = null,
} = {}) => {
  return `
    <svg
      width="${width * 1.5}"
      height="${height * 1.5}"
      viewBox="0 0 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    <title>${title}</title>
    <desc>${description}</desc>
    
    <style>
    </style>
    <g >
    <rect
      x="0"
      y="0"
      rx="${borderRadius}"
      height="${height}"
      width="${width}"
      fill="${backgroundColor}"
      stroke="${borderColor}"
      stroke-opacity="1"
    />
    </g>
    ${children}
    </svg>
  `;
};

export default card;
