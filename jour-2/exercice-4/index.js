const fsPromises = require("fs/promises");

async function readFileAndCount(filePath) {
  const fileContent = await fsPromises.readFile(filePath, "utf-8");
  // let counter = 0;

  // décomposer en un tableau avec tous les caractères de notre fichier
  // ensuite on retire les chaînes de caractères qui sont vides du tableau
  // for (const char of fileContent.split("").filter((e) => e !== " ")) {
  //   counter++;
  // }

  // for (const char of fileContent.split("")) {
  //   if (char !== " ") {
  //     counter++;
  //   }
  // }

  const numberOfChars = fileContent.split("").filter((e) => e !== " ").length;

  return numberOfChars;
}

readFileAndCount("index.js").then((e) =>
  console.log("Le nombre de caractères dans ce fichier est de : ", e)
);
