const fsPromises = require("fs/promises");

async function mergeFiles(file1, file2) {
  const content1 = await fsPromises.readFile(file1, "utf-8");
  const content2 = await fsPromises.readFile(file2, "utf-8");

  await fsPromises.writeFile(file1 + file2, content1 + content2);
}

mergeFiles("toto.txt", "tata.txt");

// ...args indique que vous passez un nombre d'arguments non définis, il sera récupéré sous forme de tableau
async function mergeFilesUnlimited(...args) {
  // on attend que toutes les promesses de lecture de fichier aient fini
  const filesContent = await Promise.all(
    args.map((e) => fsPromises.readFile(e, "utf-8"))
  );

  // on merge le tout
  await fsPromises.writeFile(args.join(""), filesContent.join(""));
}

mergeFilesUnlimited("tata.txt", "toto.txt", "index.js", "toto.txttata.txt");
