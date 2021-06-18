const events = require("events");
const play = require("audio-play");
const load = require("audio-loader");

const game = new events.EventEmitter();
let playerHealth = 100;
let gameLevel = 0;
let monsterHealth = 10;

// 1 évènement qui se déclenche quand on passe de niveau
// 1 évènement qui se déclenche quand le jeu se fini
// 1 évènement qui se déclenche quand on meurt

function askQuestions() {
  console.log("Que voulez-vous faire ?");
  console.log("1- attaquer le monstre");
  console.log("2- boire une potion de vie (+30hp)");
  console.log("3- quitter le jeu");
}

askQuestions();

process.stdin.on("data", (input) => {
  askQuestions();
  input = input.toString().trim();
  if (input === "1") {
    monsterHealth -= 10;
  }
  if (input === "2") {
    playerHealth += 30;
  }
  if (input === "3") {
    game.emit("game-finished");
  }

  if (monsterHealth >= 0) {
    playerHealth -= 30;
    if (playerHealth <= 0) {
      game.emit("player-dead");
    }
  } else {
    gameLevel++;
    // pour déclencher un évènement, on utilise la fonction emit()
    game.emit("level-change", gameLevel);
    monsterHealth = 10 * gameLevel;
  }
});

// on souscris à l'évènement level-change, vu qu'on passe dans le emit() l'argument gameLevel, on peut le récupérer dans le on()
game.on("level-change", (gameLevel) => {
  console.log(
    "Le joueur a changé de niveau, il est maintenant au niveau ",
    gameLevel
  );
});

game.on("player-dead", () => {
  load("./death.mp3").then(play);
  console.log("Le joueur est mort, RIP");
});

// le once n'écoute qu'une fois l'évènement
game.once("game-finished", () => {
  console.log("Le jeu est fini, je ferme le programme ...");
  process.exit(0);
});
