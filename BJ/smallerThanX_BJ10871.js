const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
const realInput = [];


rl.on("line", function(line) {
    input.push(line);
    for(let i = 0; i < input.length; i++) {
        realInput[i] = input[i].split(" ");
    }
}).on("close", function() {
    const nx = convert2Num(realInput[0]);
    const a = convert2Num(realInput[1]);
    
    const n = nx[0];
    const x = nx[1];

    let answer = a.filter(num => num < x);
    answer = answer.join(" ");
    console.log(answer);
    process.exit();
})

function convert2Num(arr) {
    let result = [];
    arr.forEach(element => result.push(Number(element)));
    return result;
}