const emojis = ["๐บ", "๐บ", "๐ฏโโ๏ธ", "๐ง"];

module.exports = () => {
  // j'arrondi sinon รงa fait un nombre ร  virgules
  const randomNumber = Math.floor(Math.random() * emojis.length);

  return emojis[randomNumber];
};
