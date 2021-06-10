const colors = require("colors");

const defaultColor = colors.bgRed;

module.exports = function (texte, color) {
  if (!color) {
    color = defaultColor;
  }
  return color(texte.toUpperCase());
};
