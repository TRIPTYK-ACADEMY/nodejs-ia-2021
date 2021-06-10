/*
    Faire un additionneur qui additionne tous les chiffres que vous passez comme argument
    Indice : parseInt() pour transformer les chaines de caractères en nombre
*/

// fonction permettant d'additionner tous les nombres (en string) d'un tableau
function sumOfArray(arrayOfNumbers) {
  let result = 0;

  // on parcours à partir de l'index 2 jusqu'a la fin des arguments
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const nombre = parseInt(arrayOfNumbers[i]);
    result = result + nombre;
  }

  return result;
}

// slice va prendre un morceau de votre tableau, de l'index 2 jusqu'a la fin
const argumentsAfterIndex2 = process.argv.slice(2);

const result = sumOfArray(argumentsAfterIndex2);

console.log(result);

// c'est la même chose, mais différemment
// for (const nombre of [1, 2, 3]) {
//   console.log(nombre);
// }

// [1, 2, 3].forEach((nombre) => {
//   console.log(nombre);
// });
