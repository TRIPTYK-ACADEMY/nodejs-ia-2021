const mydata = {
    name:"gilles",
    age:34
};

// console.log(mydata)
// console.log(JSON.stringify(mydata))
const jsonData = JSON.stringify(mydata)
console.log(typeof jsonData)
const data = JSON.parse(jsonData);
console.log(typeof data)
console.log(data.name)


// const https = require("https");
// //http port 80
// const options = {
//     hostname:"www.triptyk.eu",
//     path:"/",
//     port:443,
//     method:"GET", //POST
// }

// let request = https.request(options, (response)=>{
//     let output ="";
//     console.log("connexion");
//     console.log(response.statusCode);
//     console.log(response.headers);
//     response.setEncoding("UTF-8");
//     response.on("data", stream =>{
//         output += stream;
//     })
//     response.on("end",()=>{
//         console.log(output);
//     })
// });
// request.end()