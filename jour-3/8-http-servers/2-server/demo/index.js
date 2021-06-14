const http = require('http');
const server = http.createServer((request, response)=>{
    const output = `
    <html>
    <head>
    <title>Smiley Website 😆</title>
    <meta charset="utf-8">
    </head>
    <body>
    <h1>My best page for my best website</h1>
    <p>dsqf dsqfqdsfsf dsq fsqd fqsqds </p>
    </body>
    </html>
    `;
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end(output)
});

server.listen(8001,()=>{
    console.log("le serveur écoute sur le port 8001 : http://localhost:8001")
})