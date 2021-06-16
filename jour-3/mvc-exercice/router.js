const userController = require("./controllers/users.controller");
const indexController = require("./controllers/index.controller");
const fs = require("fs/promises");

// le tableau de nos différentes routes
const routes = [
  {
    route: "/users",
    method: "GET",
    controller: userController.index,
  },
  {
    route: "/users",
    method: "POST", // method HTTP pour ajouter un élement
    controller: userController.create,
  },
  {
    route: "/users",
    method: "PATCH", // method HTTP pour mettre à jour
    controller: userController.edit,
  },
  {
    route: "/users",
    method: "DELETE", // method HTTP pour supprimer
    controller: userController.delete,
  },
  {
    route: "/",
    method: "GET", // method HTTP pour supprimer
    controller: indexController.index,
  },
];

const notFound = async (res) => {
  // 404 est égal au code HTTP de NOT FOUND
  const notFoundPageHTML = await fs.readFile("./views/404.html", "utf-8");

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(notFoundPageHTML);
  res.end();
};

const fatalError = async (res) => {
  // 500 est égal au code HTTP de fatal error
  const fatalErrorPage = await fs.readFile("./views/500.html", "utf-8");

  res.writeHead(500, { "Content-Type": "text/html" });
  res.write(fatalErrorPage);
  res.end();
};

module.exports = async (req, res) => {
  const parsedURL = new URL(req.url, "http://localhost:8001");

  // on va chercher dans les routes la route correspondant à l'URL que le client envoie et si la méthode HTTP correspond également
  const foundRoute = routes.find(
    (route) => route.route === parsedURL.pathname && req.method === route.method
  );

  try {
    // si on trouve la route
    if (foundRoute) {
      // on appelle la méthode que l'on a mentionnée dans le tableau du routing et on l'appelle en passant la req et la res afin de l'utiliser dans le controller
      await foundRoute.controller(req, res, parsedURL);
    } else {
      // on revoie un 404 si on ne trouve pas
      await notFound(res);
    }
  } catch (e) {
    await fatalError(res);
  }
};
