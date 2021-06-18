const http = require('http');
const {createReadStream} = require('fs');
const {parse} = require("url");

const readPostData = (req) =>{
    return new Promise((res,rej)=>{
        let data = "";
        req.once('error',err=>{rej(err)});

        req.on("data", chunk =>{
            data += chunk;
        })
        req.once('end',()=>{
            res(data)
        })
    })
}

const server = http.createServer(async (req,res)=>{
   
    let output;
    let type;
    let status =200;

    let pathName = parse(req.url,true).pathname
    console.log(pathName)
    let query = parse(req.url,true).query
    if(pathName === '/')
    {
       type="text/html",
       output = createReadStream("index.html")
    } else if(pathName === '/results')
    {
       type="text/html";
       if(req.method === "GET"){
       output=`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Results are the following</h1>
            ${JSON.stringify(query)}
        </body>
    </html> 
       `
    }else {
        let data = await readPostData(req);
        output=`
        <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta http-equiv="X-UA-Compatible" content="IE=edge">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Document</title>
         </head>
         <body>
             <h1>Results are the following</h1>
            This was a post send
            ${JSON.stringify(data)}
         </body>
     </html> `
    }
       res.writeHead(status,{"Content-Type":type})
       return res.end(output)
    }
    res.writeHead(status,{"Content-Type":type})
    output.pipe(res)
})

server.listen(8001, () =>{
    console.log("server running a t http://localhost:8001")
})