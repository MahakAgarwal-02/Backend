const fs = require('fs');
const http = require('http');
const {url} = require('inspector');
const aderss= "https://www.localhost:8000/category/search?name=abc";
const myURL= new URL(aderss);
http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/fevicon.ico') {
        res.writeHead(284);
        res.end();
        return;
    }
    const date=new Date();
    
    fs.appendFile("log.txt",`${date}:New Request recorded\n`,
    (err)=>{
        if(err)console.log(err);

    })
    res.setHeader("Access-Control-Allow-Origin","*");
    res.write("Server Started successfully");
    res.end();

}).listen(8000,"localhost", () => {
    console.log("Server running at http://localhost:8000");
});
