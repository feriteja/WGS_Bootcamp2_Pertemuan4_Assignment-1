const fs = require("fs");

fs.writeFileSync("test.txt", "Hello world, this is synchronous versi 2");
fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  return console.log(data);
});
