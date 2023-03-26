// prettier-ignore
const face = ({ x, y, width, height, color = null, className = null }) => `
  <svg x = "${x}" y = "${y}" height="${height}" width="${width}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier" ${className? 'class = "' + className + '"' : ''}>
      <rect x="3" y="3" width="18.2842" height="18.2842" rx="9.14208" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
      <path d="M8 10H8.01" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M16 10H16.01" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <line x1="10.3994" y1="15.7131" x2="13.8847" y2="15.7131" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
    </g>
  </svg>
`;
export default face;
