const child_process = require("child_process");

child_process.exec(
  "python monscript.py argument1 argument2",
  (err, stdout, stderr) => {
    if (err) {
      console.log("Une erreur est survenue");
      return;
    }
    console.log(stdout);
  }
);
