const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is yout name: ", (name) => {
  console.log(`Thank you ${name}`);

  rl.close();
});
