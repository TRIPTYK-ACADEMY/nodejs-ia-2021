// notre contrôleur des utilisateurs

// on utilise le modèle des utilisateurs
const usersModel = require("../models/users.model");
const fs = require("fs/promises");
const readRequestData = require("../utils/read-request-data");

// l'action INDEX de notre controlleur, qui va renvoyer tous nos utilisateurs
exports.index = async (req, res) => {
  const users = usersModel.getUsers();

  // on va lire le fichier de la vue
  let vueFile = await fs.readFile("./views/users-list.html", "utf-8");

  // on remplace le {{USERS_LIST}} laissé dans notre HTML par du vrai contenu
  vueFile = vueFile.replace(
    "{{USERS_LIST}}",
    users.map((e) => `<li>${e.username}</li>`).join(" ")
  );

  res.writeHead(200, { "Content-Type": "text/html" });
  // on renvoie les utilisateurs en stringifiant notre objet javascript pour qu'ils soit a format JSON
  res.write(vueFile);

  // le .end() déclenche l'envoie des données au client
  res.end();
};

exports.create = async (req, res) => {
  // on lit les données envoyées en JSON et on les parse
  const body = JSON.parse(await readRequestData(req));
  usersModel.addUser(body.username);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Utilisateur enregistré !");
  res.end();
};

exports.edit = async (req, res, parsedURL) => {
  const body = JSON.parse(await readRequestData(req));
  const id = parsedURL.searchParams.get("id");

  usersModel.editUser(id, body.username);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Utilisateur édité !");
  res.end();
};

exports.delete = async (req, res, parsedURL) => {
  const id = parsedURL.searchParams.get("id");

  usersModel.removeUser(id);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Utilisateur supprimmé !");
  res.end();
};
