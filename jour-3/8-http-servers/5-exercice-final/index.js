const http = require('http');
const fs = require("fs/promises");
const notFound = (res, message="not-found") =>{
    res.writeHead(404,{"Content-Type":"application/json"});
    res.write(JSON.stringify({message}));
    res.end();
}
const getUsers =async() =>{
    try{
        return (JSON.parse(await fs.readFile(`${process.cwd()}/data/users.json`,"utf8"))).users;   
    } catch(e){console.log(e)}
}

const readRequestData = (req) =>{
    return new Promise((resolve, reject)=>{
        let data = "";
        req.once("error",(err)=>{
            reject(err);
        });
        req.on("data",chunk=>{
            data += chunk;
        })
        req.once("end",()=>{
            resolve(data)
        })
    })
}
const server = http.createServer(async (req,res)=>{
    console.log(`${req.method} : request for ${req.url}`);
    const {pathname, searchParams} = new URL(
        req.url,"http://localhost:8001"
    )
    console.log(pathname, searchParams)
    try{
        if(pathname === '/users'){
            if(req.method === 'GET')
            { 
                const usersJson = await getUsers();
                const json = searchParams.get('id') 
                    ? usersJson.find((u)=>u.id == searchParams.get('id'))
                    : usersJson;
                    if(!json) return notFound(res,"No user found");
                res.writeHead(200,{"Content-Type":"application/json"});
                res.write(JSON.stringify(json));
                res.end();
            } else if(req.method ==="POST")
            {
                const usersJson = await getUsers();
                const body = JSON.parse(await readRequestData(req));
                body.id = usersJson.length+1;
                usersJson.push(body);
                await fs.writeFile(`${process.cwd()}/data/users.json`,JSON.stringify({users:usersJson}))
                res.writeHead(200,{"Content-Type":"application/json"});
                res.write(JSON.stringify(body));
                res.end();
            }
        }
    } catch(e){}   

});


server.listen(8001,()=>{
    console.log(
        "Server is running at http://localhost:8001"
    )
})