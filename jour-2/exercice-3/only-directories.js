const fsPromises = require("fs/promises");

module.exports = async (directory) => {
  const filesAndDirectories = await fsPromises.readdir(directory, {
    withFileTypes: true,
  });

  // on filtre le tableau de dossiers/fichiers en ne prenant que ceux qui sont des dossiers, et ensuite on ne récupère que le nom du dossier
  return filesAndDirectories.filter((e) => e.isDirectory()).map((e) => e.name);
};
