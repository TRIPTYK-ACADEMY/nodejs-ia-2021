// par défaut, ce sont des objets javascript vides
console.log("module.exports", module.exports);
console.log("exports", exports);

console.log(module.exports === exports);

exports.tata = () => {};

module.exports = () => {
  console.log("Hello");
};

console.log(module.exports === exports);

// on ne peut pas comparer les valeurs de 2 objets comme ça car ils ont des addresses mémoires différentes et donc ce sont des objets différents
console.log({} === {});

// module.exports => notre fonction hello
// exports => c'est un objet vide
console.log("module.exports", module.exports);
console.log("exports", exports);
