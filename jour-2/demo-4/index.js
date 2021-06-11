const fsPromise = require("fs/promises");
const fs = require("fs");

// éviter d'utiliser les commandes Sync, car elles bloquent le processus node jusqu'a leur complétion, on perd donc l'avantage de NodeJS en les utilisant
console.log(fs.readdirSync("."));

// de manière asynchrone
fsPromise.readdir(".").then((e) => {
  console.log(e);
});

fsPromise.readdir(".", { withFileTypes: true }).then((files) => {
  for (const file of files) {
    if (file.isDirectory()) {
      console.log(`${file.name} est un dossier`);
    } else {
      console.log(`${file.name} est un fichier`);
    }
  }
});
