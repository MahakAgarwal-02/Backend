const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);

    const method = req.method;
    const requestUrl = req.url;
    const headers = req.headers;
    const query = parsedUrl.query;

    console.log(method);
    console.log(requestUrl);
    console.log(headers);
    console.log(query);

    if(method == "GET") {
        res.end(JSON.stringify({
            message: "GET REQ",
            method: method,
            url: requestUrl,
            query: query,
            headers: headers
        },null,2));
    }
    else if(method == "POST") {
        let body = "";

        req.on("data", chunk => {
            body+= chunk;
        });

        req.on("end", () => {
            res.end(JSON.stringify({
                message: "POST REQ",
                method: method,
                url: requestUrl,
                headers: headers,
                body: body
            },null,2));
        });
    }

    else {
        res.end(JSON.stringyfy({
            message: "OTHER REQ",
            method: method
        }));
    }
});

server.listen(3000, "localhost", (err) =>{
    if(err) console.log(err);
    else console.log("http://localhost:3000");
})