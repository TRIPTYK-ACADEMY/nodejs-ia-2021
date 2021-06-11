const emojis = ["😺", "🕺", "👯‍♀️", "🧗"];

module.exports = () => {
  // j'arrondi sinon ça fait un nombre à virgules
  const randomNumber = Math.floor(Math.random() * emojis.length);

  return emojis[randomNumber];
};
