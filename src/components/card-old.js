const card = ({
  title = "",
  description = "",
  width = 300,
  height = 500,
  borderRadius = 0.5,
  backgroundColor = "rgb(255, 255, 255)",
  borderWidth = 1,
  borderColor = "rgb(0, 0, 0)",
  children = null,
} = {}) => {
  return `
    <svg
      width="${width}"
      height="${height}"
      viewBox="0 0 ${width} ${height}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    <title>${title}</title>
    <desc>${description}</desc>
    
    <style>
      @keyframes currstreak {
        0% { font-size: 3px; opacity: 0.2; }
        80% { font-size: 34px; opacity: 1; }
        100% { font-size: 28px; opacity: 1; }
      }
      @keyframes fadein {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }  
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
      stroke-width="${borderWidth}"
      stroke-opacity="1"
    />
    </g>
    ${children}
    </svg>
  `;
};

export default card;
