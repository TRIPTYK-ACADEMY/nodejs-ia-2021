const http = require('http');
const {createReadStream} = require("fs");

const server = http.createServer((request,response)=>{
    let output;
    console.log(request.url)
    let extension = request.url.split(".").pop()
    console.log(extension)
    if(request.url === "/test"){
        response.writeHead(200,{"Content-Type":"text/html"})
        output = createReadStream("index.html")
    } else if(extension ==='css'){
        output = createReadStream(`./assets${request.url}`);
        response.writeHead(200,{"Content-Type":"text/css"})
    }else if(extension ==='jpg'){
            output = createReadStream(`./assets${request.url}`);
            response.writeHead(200,{"Content-Type":"image/jpg"})
    }else{
        response.writeHead(404)
        return response.end();
    }
  
    output.pipe(response)
});
server.listen(8001,()=>{
    console.log(
        "Le serveur node écoute sur le port 8001 : http://localhost:8001"
    );
} )