// notre contrôleur des utilisateurs

// on utilise le modèle des utilisateurs
const usersModel = require("../models/users.model");
const fs = require("fs/promises");

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
