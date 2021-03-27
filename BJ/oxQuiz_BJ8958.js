const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];


rl.on("line", function (line) {
    input.push(line);


}).on("close", function () {
    // const caseNum = input[0];
    const quizList = input.slice(1);
   
    for (let j = 0; j < quizList.length; j++) {
        let scoreStack = 0;
        let scoreTotal = 0;     
        const quiz = [...quizList[j]];
    
        for (let i = 0; i < quiz.length; i++) {
            if (quiz[i] === "O") {
                scoreStack++;
                scoreTotal += scoreStack;
            }
            if (quiz[i] === "X") {
                // scoreTotal += scoreStack;
                scoreStack = 0;
            }
        }
        // scoreTotal += scoreStack;
        console.log(scoreTotal);
    }
    process.exit();
})