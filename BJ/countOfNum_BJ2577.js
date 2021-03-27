const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];


rl.on("line", function (line) {
    input.push(line);

}).on("close", function () {

    const multiply = Number(input[0]) * Number(input[1]) * Number(input[2]) + '';
    const arr = multiply.split("");
    let answerArr = [0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < arr.length; i++) {
        answerArr[Number(arr[i])]++;
    }

    let answer = "";

    for(let i = 0; i < answerArr.length; i++) {
        answer += answerArr[i] + '\n';
    }

    answer = answer.slice(0, -1);
    console.log(answer);
    process.exit();
})