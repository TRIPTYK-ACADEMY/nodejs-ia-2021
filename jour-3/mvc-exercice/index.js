const http = require("http");
const router = require("./router");

// on va utiliser notre module router afin d'aiguiller nos requêtes vers le bon controller
http.createServer(router).listen(
  8001,
  // dès que je suis prêt à écouter sur le port 8001, j'éxécute la fonction fléchée
  () => {
    console.log("J'écoute sur le port http://localhost:8001");
  }
);
