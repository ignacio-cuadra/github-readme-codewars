import loadFile from "./loadFile.js";
import view from "./templatingEngine.js";

const template = loadFile("./template.svg");
const getStatsImage = (data) => {
  return view(template, data);
};
export default getStatsImage;
