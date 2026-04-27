const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Welcome to nodeJS server");
});

server.listen(8000, 'localhost', (err)=> {
    if(err) console.log(err);
    else console.log("Server is running at http://localhost:8000/");
})