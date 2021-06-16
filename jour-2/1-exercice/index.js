// on définit dès le début le nombre qu'il nous faut
const randomNumber = Math.floor(Math.random() * 1000);
const essaisMax = 10;
let nombreDessaisActuels = 0;

process.stdin.on("data", (data) => {
  const leNombre = parseInt(data.toString());

  if (randomNumber > leNombre) {
    console.log("C'est plus !");
  } else if (randomNumber < leNombre) {
    console.log("C'est moins !");
    // si c'est pas supérieur ou inférieur, c'est forcément égal
  } else {
    console.log("Vous avez trouvé le juste prix, félicitations !");
    process.exit(0);
  }

  nombreDessaisActuels++;

  if (nombreDessaisActuels > essaisMax) {
    console.log("Vous avez perdu !");
    process.exit(0);
  }
});
