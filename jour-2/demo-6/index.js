const fs = require("fs/promises");

async function main() {
  // écrase le fichier et écrit dedans
  await fs.writeFile("monfichier.txt", "bonjour les ias !\n");
  // ajoute du contenu à la fin du fichier
  await fs.appendFile("monfichier.txt", "Voici la ligne numéro 2 !");
}

main();
