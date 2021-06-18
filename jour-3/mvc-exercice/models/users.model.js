// on simule une source de données
let users = [
  {
    id: 1,
    username: "Rocossi Freddi",
  },
  {
    id: 2,
    username: "Sweet home alabama",
  },
];

// renvoie tous les utilisateurs de la source de données
exports.getUsers = () => {
  return users;
};

// ajout d'un utilisateur dans la pseudo-db
exports.addUser = (username) => {
  users.push({
    username: username,
    id: users.length + 1, // le nombre d'utilisateurs + 1
  });
};

exports.editUser = (id, username) => {
  const foundUser = users.find((u) => u.id == id);
  if (foundUser) {
    foundUser.username = username;
  }
};

exports.removeUser = (id) => {
  // on va trouver la position de l'utilisateur dans le tableau via son id
  const userIndex = users.findIndex((u) => u.id === id);
  users.splice(userIndex, 1);
};
