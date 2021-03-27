const { read } = require("fs");
const { stdin, stdout } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input:stdin,
    output:stdout
});

let input = [];
rl.on("line", function(line) {
    input = line.split("");
}).on("close", function() {
    const ABC = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    for(let i = 0; i < ABC.length; i++) {
        answer += input.indexOf(ABC[i]) + " ";
    }

    console.log(answer);
    // console.log(input);
    process.exit();
});