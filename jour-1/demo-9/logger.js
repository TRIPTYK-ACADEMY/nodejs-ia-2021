/*
    Logger des messages d'erreurs avec des jolies couleurs
        - Logger un message de succès
        - Logger un message d'erreur
        - Logger un message de warning
*/
const colors = require("colors");

const defaultErrorMessage = "Oups, une erreur est survenue";

exports.defaultError = defaultErrorMessage;

exports.error = function error(message) {
  if (!message) {
    message = defaultErrorMessage;
  }
  console.log(colors.red(message));
};

exports.success = (message) => {
  console.log(colors.green(message));
};
