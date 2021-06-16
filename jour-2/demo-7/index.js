const fsPromises = require("fs/promises");

async function main() {
  await fsPromises.mkdir("pouet");
  //await fsPromises.rename("pouet", "pouetpouet");
  // await fsPromises.rename("pouetpouet", "../pouetpouet");
  await fsPromises.rmdir("pouet");
}

main();
