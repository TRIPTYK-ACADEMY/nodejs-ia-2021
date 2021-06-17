const userController = require("./controllers/users.controller");
const fs = require("fs/promises");

// le tableau de nos différentes routes
const routes = [
  {
    route: "/users",
    method: "GET",
    controller: userController.index,
  },
];

const notFound = async (res) => {
  // 404 est égal au code HTTP de NOT FOUND
  const notFoundPageHTML = await fs.readFile("./views/404.html", "utf-8");

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write(notFoundPageHTML);
  res.end();
};

module.exports = async (req, res) => {
  const parsedURL = new URL(req.url, "http://localhost:8001");

  // on va chercher dans les routes la route correspondant à l'URL que le client envoie et si la méthode HTTP correspond également
  const foundRoute = routes.find(
    (route) => route.route === parsedURL.pathname && req.method === route.method
  );

  // si on trouve la route
  if (foundRoute) {
    // on appelle la méthode que l'on a mentionnée dans le tableau du routing et on l'appelle en passant la req et la res afin de l'utiliser dans le controller
    await foundRoute.controller(req, res);
  } else {
    // on revoie un 404 si on ne trouve pas
    await notFound(res);
  }
};
