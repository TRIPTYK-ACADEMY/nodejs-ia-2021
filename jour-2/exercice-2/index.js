/**
 * Importez la liste de contacts du module contacts.js
 * Bouclez sur ces contacts et déclenchez un évènement 'error' lorsque le contact n'a pas d'email
 * à la fin de la boucle, déclenchez un évènement 'end'
 *
 * Lorsque l'évènement error est émis, affichez un joli message d'erreur en couleur
 * Lorsque l'évènemnt end est émis, affichez les noms des contacts valides
 */

// on importe la liste de contacts
const colors = require("colors");
const contactVerifier = require("./contact-verify");
const contacts = require("./contacts");

contactVerifier.contactEmitter.on("error", (contact) => {
  console.log(
    colors.red(`Une erreur est survenue avec le contact ${contact.name}`)
  );
});

// [{ nom : 'a'},{ nom : 'b'}].map((e) => e.nom); => ['a','b']
// ['a','b'].join(" ") => "a b"
contactVerifier.contactEmitter.on("end", (contacts) => {
  console.log(contacts.map((e) => e.name).join(" | "));
});

// NOTE : IL FAUT BIEN D ABORD SOUCSCIRE AUX EVENEMENTS AVANT DE LES DECLENCHER

// on vérifie les contacts
contactVerifier.verifyContacts(contacts);
contactVerifier.verifyContacts([
  { name: "jean patate", email: "jean@patate.com" },
]);
