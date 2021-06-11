const imageJS = require("image-js");

async function main() {
  // charge l'image dans le dossier courant
  const image = await imageJS.Image.load("cat.jpg");
  // on redimensionne et retourne l'image
  const resizeAndRotated = image.resize({ width: 200 }).rotate(180);
  // on sauvegarde les modifications
  await resizeAndRotated.save("cat.png");
}

main().catch((e) => console.log("Une erreur est survenue", e));
