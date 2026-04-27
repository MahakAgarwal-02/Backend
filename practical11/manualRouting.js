const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    switch(path) {
        case "/home":
            res.end("HOME Page");
            break;
        
        case "/about":
            res.end("About page");
            break;

            case "/contact":
                res.end("Contact page");
                break;

                default:
                    res.end("404 page not found");
    }
});

server.listen(8000, "localhost", (err) => {
    if(err) console.log(err);
    else console.log("http://localhost:8000");
})