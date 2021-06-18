/*
    Pour la Belgique, la France et l'Allemagne, vous devez renvoyer en sortie une string formatée de la manière suivante :

    "En {{COUNTRY}}, le taux de TVA est de {{RATE}}%".
*/
// on importe le module
const utilitaires = require("util");

const countries = [
  {
    nom: "Belgique",
    tva: 21,
  },
  {
    nom: "France",
    tva: 20,
  },
  {
    nom: "Allemagne",
    tva: 17,
  },
];

countries.forEach((country) => {
  // on utilise la fonction format du module utils
  const formatted = utilitaires.format(
    "En %s, le taux de TVA est de %d%",
    country.nom,
    country.tva
  );
  console.log(formatted);
});

console.log("=========");

for (const country of countries) {
  const formatted = utilitaires.format(
    "En %s, le taux de TVA est de %d%",
    country.nom,
    country.tva
  );
  console.log(formatted);
}
