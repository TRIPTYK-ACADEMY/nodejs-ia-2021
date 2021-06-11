const ageModule = require("./age-converter");
const emojisModule = require("./random-emojis");

console.log(ageModule.humanAgeToCatAge(23));
console.log(ageModule.catAgeToHumanAge(5));

console.log(emojisModule());
