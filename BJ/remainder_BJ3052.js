const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];


rl.on("line", function (line) {
    input.push(line);

 
}).on("close", function () {

    let remainders = [];
    input.forEach(element => remainders.push(element%42));

    const setRemainders = new Set(remainders);

    console.log(setRemainders.size);
  
    process.exit();
})