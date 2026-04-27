const fs = require("fs");

fs.writeFileSync("studentLog.txt", "Student Activity Log\n");
console.log("File created and initial log written");

fs.appendFileSync("studentLog.txt", "Arjun logged in\n");
console.log("File appended");

const data = fs.readFileSync("studentLog.txt", "utf8");
console.log("\nReading file: ");
console.log(data);