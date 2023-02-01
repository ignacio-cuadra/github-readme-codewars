import fs from "fs";
const loadFile = (path) => {
  return fs.readFileSync(path, { encoding: "utf-8" });
};

export default loadFile;
