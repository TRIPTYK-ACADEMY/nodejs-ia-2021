const onlyDirectories = require("./only-directories");

onlyDirectories("..").then((directories) => {
  console.log("Voici les différents dossiers du répertoire . : ", directories);
});
