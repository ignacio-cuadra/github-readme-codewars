import svg from "../../^/git-graph/ts-nul-authority/file";

const baseTemplate = ({
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
  const style = `
  @keyframes currstreak {
    0% { font-size: 3px; opacity: 0.2; }
    80% { font-size: 34px; opacity: 1; }
    100% { font-size: 28px; opacity: 1; }
  }
  @keyframes fadein {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }  
  `;
  const body = `${card({
    width,
    height,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderColor,
  })}${children}`;
  return svg({
    title,
    description,
    style,
    body,
    width,
    height,
  });
};

export default baseTemplate;
