const https  = require("https");

const options = {
    hostname:"triptyk-api-dev.triptyk.eu",
    path:"/api/v1/posts",
    port:443,
    method:"GET"
};

let request = https.request(options, (response)=>{
    let output ="";
    response.setEncoding("utf-8");
    response.on("data",stream=>{
        output+= stream;
    });

    response.on('end', ()=>{
        const parsed = JSON.parse(output);
        // let titlesArray = parsed.data.map(post =>{
        //     return post.attributes.tilte;
        // });
        console.log(parsed.data.map(post=>post.attributes.title))
    });
});
request.end();