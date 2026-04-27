const fs = require("fs");
const os = require("os");
const path = require("path");
const url = require("url");

console.log(os.platform());
console.log(os.arch());
console.log(os.freemem());
console.log(os.freemem());

const filepath = path.join(__dirname, "student.txt");
console.log("Joined path:", filepath);

const myUrl = new URL("http://example.com:8000/profile?name=arjun&course=node");
console.log("Host:", myUrl.host);
console.log("Pathname:", myUrl.pathname);
console.log("Query Name", myUrl.searchParams.get("name"));

