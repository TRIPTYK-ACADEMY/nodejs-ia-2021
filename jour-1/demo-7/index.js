// j'importe la librairie OS de nodejs et la stocke dans la variable os
const os = require("os");

// j'utilise la librairie
console.log(os.cpus());

const util = require("util");
console.log(util.format("%s et %s ont %d", "Amaury", "Sébastien", 21));
