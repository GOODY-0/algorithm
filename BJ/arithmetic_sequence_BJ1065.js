const reaeline = require("readline");
const rl = reaeline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];


rl.on("line", function (line) {
    input.push(line);


}).on("close", function () {
    const num = Number(input[0]);
    if(num < 100) {
        console.log(num);
    } 
    if(num >= 100) {
        let hansu = 99;
        for(let i = 100; i <= num; i++) {
            const str = i + "";
            const arr = str.split("");
            if((arr[0] - arr[1]) === (arr[1] - arr[2])) {
                hansu++;
            }
        }
        console.log(hansu);
    }
    process.exit();
})