const fs = require("fs");
const stream = fs.createReadStream("file.txt","UTF-8");
const writestream = fs.createWriteStream("file-copy.txt","UTF-8");
writestream.write("test222\n");
stream.pipe(writestream)
process.stdout.write("hello from stdout")