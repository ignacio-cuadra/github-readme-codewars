import svg from "../components/svg.js";
import card from "../components/card.js";

const baseTemplate = ({
  title = "",
  description = "",
  style = ``,
  width = 300,
  height = 500,
  borderRadius = 0.5,
  backgroundColor = "rgb(255, 255, 255)",
  borderWidth = 1,
  borderColor = "rgb(0, 0, 0)",
  children = null,
} = {}) => {
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
