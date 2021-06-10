/**
 * rrrrrr
 */

// aaaaaaa

/**
 * Ceci est de la JSDOC
 * Transforme la chaine de caractères en format bob l'éponge
 * @param {string} string
 * @returns string
 */
function toSpongeBobCase(string) {
  return string
    .split("")
    .map((c, i) => {
      if (i % 2) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    })
    .join("");
}

toSpongeBobCase("string");
