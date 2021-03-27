const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];


rl.on("line", function (line) {
    input.push(line);

}).on("close", function () {
    const inputNum = input.map((e) => Number(e));
    const max = inputNum.reduce((pre,cur) => pre > cur ? pre : cur);
    const idx = inputNum.indexOf(max);

    console.log(max);
    console.log(idx+1);
   

   
    process.exit();
})



