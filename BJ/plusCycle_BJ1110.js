const { count } = require("console");
const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input;

rl.on("line", function (line) {

    input = line;

}).on("close", function () {
    let cycleCount = 0;
    let array = [];
    array = input.split("");
    let nextNum;
    let currArray = array;
    
    while (nextNum !== input) {
        
        cycleCount++;
        const currAnswer = currArray.reduce((a,b) => Number(a)+Number(b), 0) + '';
        nextNum = currArray[currArray.length-1] + currAnswer[currAnswer.length - 1];
        if(nextNum[0] === "0") nextNum = nextNum[1];
        currArray = nextNum.split("");
    }
    console.log(cycleCount);
    process.exit();
});


