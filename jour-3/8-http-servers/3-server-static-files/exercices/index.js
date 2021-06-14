const http = require('http')
const {createReadStream, stat} = require("fs");

const imagesTypes = ["jpg","png","ico","jpeg"];

const server = http.createServer((req,res)=>{
    let type;
    let output;
    let status= 200;

    let extension = req.url.split('.').pop().toLowerCase();

    if(req.url === '/'){
        output = createReadStream('index.html');
        type = "text/html"
    }else  if(imagesTypes.includes(extension)){
        console.log(req.url)
        output = createReadStream(`./public${req.url}`);
        type = `image/${extension}`
    }else  if(extension==="css"){
        output = createReadStream(`./public${req.url}`);
        type = `text/${extension}`
    }else  if(extension==="js"){
        output = createReadStream(`./public${req.url}`);
        type = "application/javascript"
    } else {
        output = createReadStream('404.html');
        type = "text/html"
        status=404;
    }
    res.writeHead(status,{"Content-Type":type});
    output.pipe(res);

})

server.listen(8001, ()=>{
    console.log('the server is runnong at port 8001: http://localhost:8001')
})