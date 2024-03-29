// prettier-ignore
const sadFace = ({ x, y, width, height, color, className }) => `
  <svg x = "${x}" y = "${y}" height="${height}" width="${width}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier" ${className? 'class = "' + className + '"' : ''}>
      <rect x="3" y="3" width="18.2842" height="18.2842" rx="9.14208" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
      <path d="M15.7989 17.6273C15.7989 15.6077 14.1617 13.9705 12.1421 13.9705C10.1225 13.9705 8.48526 15.6077 8.48526 17.6273" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M8 10H8.01" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M16 10H16.01" ${color ? 'stroke="' + color + '"' : ''} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </svg>
`;
export default sadFace;
