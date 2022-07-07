const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is yout name: ", (name) => {
  rl.question("What is your contact: ", (number) => {
    rl.question("What is your email: ", (email) => {
      console.log(
        `\nYour name is ${name},\nwith number: ${number}, \nyour email address: ${email}`
      );

      rl.close();
    });
  });
});
