// on simule une source de données
const users = [
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
