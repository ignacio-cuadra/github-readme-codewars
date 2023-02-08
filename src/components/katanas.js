const katanas = ({ x, y, width, height, color }) => `
  <svg x = "${x}" y = "${y}" fill="${color}" height="${height}" width="${width}" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M493.376,0.736c-2.986-1.394-6.524-0.77-8.854,1.56L456.918,29.9c-3.06,3.062-3.06,8.023,0,11.084 c3.06,3.059,8.023,3.059,11.083,0l12.372-12.372l-1.006,11.464c-1.477,16.825-8.869,32.67-20.813,44.614L339.539,203.705 c-3.06,3.062-3.06,8.023,0,11.084c1.53,1.53,3.536,2.295,5.541,2.295s4.011-0.765,5.541-2.295L469.637,95.773 c14.544-14.545,23.545-33.839,25.343-54.327l2.89-32.923C498.158,5.24,496.362,2.128,493.376,0.736z"></path> </g> </g> <g> <g> <path d="M489.763,464.579l-98.158-98.158l18.963-18.963c2.431-2.43,3.77-5.663,3.77-9.101c0-3.439-1.34-6.671-3.77-9.1 l-12.047-12.049c-5.018-5.016-13.182-5.017-18.201,0l-18.963,18.964l-66.058-66.058l23.977-23.977c3.06-3.062,3.06-8.023,0-11.084 c-3.06-3.06-8.023-3.06-11.083,0l-29.518,29.516c-0.001,0-0.002,0.001-0.002,0.002s-0.001,0.001-0.002,0.002l-28.207,28.207 c-0.001,0.001-0.003,0.003-0.005,0.004c-0.002,0.001-0.003,0.003-0.004,0.004l-71.596,71.596l-13.382-13.382l-3.748-3.748 l71.593-71.592c0.002-0.002,0.005-0.004,0.008-0.007c0.003-0.003,0.004-0.005,0.007-0.008l28.199-28.199 c0.002-0.002,0.004-0.004,0.007-0.006c0.002-0.002,0.004-0.004,0.006-0.007L443.917,65.068c3.06-3.062,3.06-8.023,0-11.084 c-3.06-3.06-8.023-3.06-11.083,0L256,230.817l-55.586-55.586c-3.06-3.06-8.023-3.06-11.083,0c-3.061,3.062-3.061,8.023,0,11.084 l55.585,55.585l-17.129,17.13L53.444,84.686c-11.938-11.927-19.326-27.769-20.805-44.61l-1.007-11.461l130.584,130.584 c3.06,3.06,8.023,3.06,11.083,0c3.061-3.062,3.061-8.023,0-11.084L27.479,2.296c-2.33-2.329-5.868-2.953-8.854-1.56 c-2.986,1.394-4.782,4.507-4.493,7.789l2.894,32.925c1.8,20.504,10.799,39.797,25.338,54.323l174.341,174.341l-66.058,66.058 l-18.964-18.964c-5.019-5.019-13.183-5.017-18.201,0.001l-12.047,12.047c-2.431,2.43-3.77,5.662-3.77,9.101 c0,3.438,1.339,6.671,3.77,9.101l18.963,18.963L22.24,464.579c-10.835,10.833-10.835,28.462-0.001,39.295 C27.655,509.292,34.771,512,41.887,512s14.232-2.708,19.648-8.125l22.241-22.241c0.014-0.014,0.027-0.027,0.041-0.041 l29.088-29.088c0.013-0.013,0.025-0.025,0.038-0.038l29.092-29.092c0.01-0.01,0.021-0.021,0.032-0.032l17.627-17.627 l18.962,18.962c2.431,2.431,5.664,3.77,9.102,3.77c3.439,0,6.672-1.339,9.101-3.77l12.048-12.048 c2.43-2.432,3.769-5.663,3.769-9.1c0-3.439-1.34-6.671-3.77-9.101l-18.963-18.963L256,309.41l66.058,66.059l-18.963,18.963 c-2.431,2.43-3.77,5.662-3.77,9.101c0,3.437,1.339,6.669,3.77,9.101l12.046,12.044c2.43,2.433,5.663,3.771,9.102,3.771 c3.438,0,6.671-1.339,9.101-3.77l18.963-18.963l17.628,17.628c0.01,0.01,0.02,0.02,0.03,0.03l29.094,29.094 c0.011,0.011,0.024,0.024,0.036,0.036l29.089,29.089c0.014,0.014,0.027,0.027,0.041,0.041l22.241,22.241 c5.417,5.417,12.533,8.125,19.648,8.125c7.116,0,14.232-2.708,19.648-8.126C500.596,493.042,500.596,475.414,489.763,464.579z M50.453,492.792c-2.288,2.287-5.33,3.548-8.565,3.548c-3.236,0-6.278-1.26-8.565-3.547c-4.723-4.724-4.723-12.408-0.001-17.13 l10.474-10.474l21.733,12.527L50.453,492.792z M77.006,466.239l-21.733-12.526l17.649-17.65l21.734,12.526L77.006,466.239z M106.132,437.111l-21.734-12.526l17.65-17.65l21.734,12.526L106.132,437.111z M135.259,407.985l-21.734-12.526l17.954-17.955 l17.13,17.13L135.259,407.985z M195.839,403.533l-8.082,8.082l-22.518-22.518c-0.002-0.002-0.003-0.003-0.005-0.005 l-28.213-28.213c-0.002-0.002-0.003-0.003-0.005-0.005l-22.518-22.518l8.083-8.082L195.839,403.533z M267.083,298.326 l17.129-17.129l66.06,66.058l-17.13,17.13L267.083,298.326z M346.765,389.094c-0.002,0.002-0.003,0.003-0.005,0.005 l-22.518,22.518l-8.082-8.082l22.429-22.429c0.032-0.031,0.067-0.057,0.098-0.089l28.213-28.213 c0.033-0.033,0.061-0.069,0.093-0.102l22.426-22.427l8.082,8.083l-22.518,22.518c-0.002,0.002-0.003,0.003-0.005,0.005 L346.765,389.094z M363.391,394.634l17.13-17.13l17.954,17.955l-21.734,12.526L363.391,394.634z M388.217,419.461l21.734-12.526 l17.65,17.65l-21.734,12.526L388.217,419.461z M417.345,448.588l21.734-12.526l17.649,17.649l-21.733,12.527L417.345,448.588z M478.678,492.792c-4.723,4.725-12.408,4.725-17.13,0l-15.076-15.076l21.733-12.527l10.473,10.473 C483.4,480.384,483.4,488.069,478.678,492.792z"></path> </g> </g> </g></svg>
`;
export default katanas;
