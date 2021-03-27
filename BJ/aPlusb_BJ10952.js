const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
const realInput = [];


rl.on("line", function (line) {
    input.push(line);
    for (let i = 0; i < input.length; i++) {
        realInput[i] = input[i].split(" ");
    }
}).on("close", function () {
    let inputNum = [];
    for (let i = 0; i < realInput.length; i++)
        inputNum.push(convert2Num(realInput[i]));

    let answer = '';
    let idx = 0;
        while (idx < inputNum.length && inputNum[idx][0] !== 0) {
            const currAnswer = inputNum[idx][0] + inputNum[idx][1];
            answer += `${currAnswer}\n`;
            idx++;
    }
    answer = answer.slice(0, -1);
    console.log(answer);

    process.exit();
})


function convert2Num(arr) {
    let result = [];
    arr.forEach(element => result.push(Number(element)));
    return result;
}