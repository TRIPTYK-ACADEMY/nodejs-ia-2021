const http = require("http");
const fs = require("fs/promises");

const getUsersData = async () => {
  return JSON.parse(
    await fs.readFile(`${process.cwd()}/data/users.json`, "utf-8")
  ).users;
};

const notFound = (res, message = "not found") => {
  // 404 est égal au code HTTP de NOT FOUND
  res.writeHead(404, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message }));
  res.end();
};

const serverError = (res, message = "internal server error") => {
  // 500 est égal au code HTTP d'internal server error
  res.writeHead(500, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message }));
  res.end();
};

const readRequestData = (req) => {
  return new Promise((res, rej) => {
    let data = "";
    req.once("error", (err) => {
      rej(err);
    });
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.once("end", () => {
      res(data);
    });
  });
};

const server = http.createServer(async (req, res) => {
  // on parse l'url avec new URL() et on extrait en suite les searchParams qui correspondent à la partie après le chemin de l'URL ?id=1&param2=blablah ...
  // le pathname correspond juste au chemin après notre url de base "http://localhost:8001"
  // ex : http://localhost:8001    /users         ?id =1
  //             ^ URL de base     ^ pathname      ^ searchParams (parsé en tant qu'objet ({ id : 1 }))
  const { searchParams, pathname } = new URL(req.url, "http://localhost:8001");

  try {
    // si l'url correspond à /users
    if (pathname === "/users") {
      // si la méthode HTTP utilisée est GET
      if (req.method === "GET") {
        // on lit le ficher json dans data/users.json
        const usersJson = await getUsersData();

        // on récupère le paramètre id qui était passé dans l'url et on essaie de le trouver selon l'id dans le JSON des utilisateurs, si celui-ci n'existe pas, on renvoie tous les utilisateurs par défaut
        const json = searchParams.get("id")
          ? usersJson.find((u) => u.id == searchParams.get("id"))
          : usersJson;

        // un joli not found, qui indique qu'aucun utilisateur n'a été trouvé
        if (!json) return notFound(res, "no user found");

        // écrit dans les en-têtes de la réponse HTTP et dit que le contenu que l'on envoie au client (front-end/insomnia,...) sera de type JSON
        res.writeHead(200, { "Content-Type": "application/json" });
        // on renvoie les utilisateurs en stringifiant notre objet javascript pour qu'ils soit a format JSON
        res.write(JSON.stringify(json));
        // le .end() déclenche l'envoie des données au client
        res.end();
      } else if (req.method === "POST") {
        // on lit le ficher json dans data/users.json
        const usersJson = await getUsersData();
        // on essaye de lire le contenu JSON envoyé dans notre requête (si il est invalide ça va lancer une erreur)
        const body = JSON.parse(await readRequestData(req));
        //  l'ID est censé unique , du coup on incrémente à chaque fois l'id par rapport à la longueur du JSON des utilisateurs (du coup c'est unique)
        body.id = usersJson.length + 1;
        // on ajoute dans l'objet des utilisateurs l'utilisateur inséré
        usersJson.push(body);
        // on sauvegarde cet objet dans le users.json, ce qui va ajouter notre nouvel utilisateur de manière permanente.
        await fs.writeFile(
          `${process.cwd()}/data/users.json`,
          JSON.stringify({ users: usersJson })
        );
        // écrit dans les en-têtes de la réponse HTTP et dit que le contenu que l'on envoie au client (front-end/insomnia,...) sera de type JSON
        res.writeHead(200, { "Content-Type": "application/json" });
        // on renvoie les utilisateurs en stringifiant notre objet javascript pour qu'ils soit a format JSON
        res.write(JSON.stringify(body));
        // le .end() déclenche l'envoie des données au client
        res.end();
      }
    } else {
      // si l'url /users n'a pas été trouvée alors, on renvoie un 404 au client
      return notFound(res);
    }
  } catch (e) {
    // si une erreur fatale est survenue alors on renvoie une 500 au client
    return serverError(res);
  }
});

// on écoute sur le port local 8001
server.listen(8001, () => {
  console.log("server running at http://localhost:8001");
});
