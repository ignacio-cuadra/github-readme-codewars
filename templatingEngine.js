const view = (template, data = {}) => {
  Object.entries(data).forEach(([key, value]) => {
    template = template.replaceAll(`\${${key}}`, value);
  });
  return template;
};
export default view;
