// on importe la liste de contacts
const events = require("events");

const contactEmitter = new events.EventEmitter();

function verifyContacts(contacts = []) {
  const correctContacts = [];

  for (const contact of contacts) {
    if (contact.email === undefined) {
      // on émet une erreur
      contactEmitter.emit("error", contact);
    } else {
      // on ajoute dans la liste des contacts corrects
      correctContacts.push(contact);
    }
  }

  contactEmitter.emit("end", correctContacts);
}

exports.contactEmitter = contactEmitter;
exports.verifyContacts = verifyContacts;
