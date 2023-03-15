const svg = ({
  title = "",
  description = "",
  style = null,
  body = null,
  width = 300,
  height = 500,
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
      <style>${style}</style>
      ${body}
    </svg>
  `;
};

export default svg;
