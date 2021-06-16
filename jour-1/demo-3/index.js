// tout ce qui se trouve dans l'objet global est utilisable n'importe où dans votre application, tel que setTimeout etc ...
console.log(global);

global.isSebastienBald = true;

// on override une fonction déjà existante
global.setTimeout = () => console.log("Je suis remplacé");

console.log(setTimeout === global.setTimeout);

console.log("Sébastien est chauve ? : ", isSebastienBald);

// on utilise la fonction modifiée
setTimeout();
