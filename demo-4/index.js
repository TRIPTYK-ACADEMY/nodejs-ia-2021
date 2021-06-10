/* 
    process.argv contient par défaut 2 'arguments' :
        -1 => le chemin de votre exécutable node
        -2 => le chemin complet du fichier exécuté
        -3... => les différents arguments supplémentaires

    ex : node .\demo-4\index.js development
        -1 => C:\\Program Files\\nodejs\\node.exe
        -2 => E:\\AmauryDeflorenne\\Bureau\\cours-nodejs-ia-2021\\demo-4\\index.js
        -3 => development
*/

const nom = process.argv[2];

if (nom === undefined) {
  console.log("Oulala, vous avez oublié de renseigner un nom :(");
} else {
  console.log(`Bonjour ${nom}`);
}
