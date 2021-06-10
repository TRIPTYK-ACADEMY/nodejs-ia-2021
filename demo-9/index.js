// importe le module logger.js
const logger = require("./logger");
const uppercase = require("./uppercase");
const colors = require("colors");

console.log(uppercase("Le texte", colors.bgCyan));

logger.success("Ceci est un grand succès");
logger.error();
