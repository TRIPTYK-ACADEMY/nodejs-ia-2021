const fs = require('fs');

const stream = fs.createReadStream("file.txt","UTF-8");

stream.on("data",(partialData)=>{
    console.log(`Le lis actuellement :${partialData} octets`)
})
stream.on("error", console.error);

stream.on("end",()=>{
    console.log('Chargement terminé');
})