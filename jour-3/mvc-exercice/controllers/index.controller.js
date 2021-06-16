const fs = require("fs/promises");

exports.index = async (req, res) => {
  // va lire le fichier HTML
  const htmlIndex = await fs.readFile("./views/index.html", "utf-8");

  // renvoie le fichier HTML
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(htmlIndex);
  res.end();
};
