const fsPromises = require("fs/promises");

fsPromises.readFile("index.js", "utf-8").then((e) => {
  console.log(e);
});
