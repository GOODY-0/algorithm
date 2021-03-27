const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let round = 0;
let arr = [];
rl.on("line", function (line) {
    if (round === 0) {
        round = +line;
    } else {
        arr.push(line.split(' '))
    }

    if (arr.length === round) {

        for (let i = 0; i < arr.length; i++) {
            let a = +arr[i][0]
            let b = +arr[i][1]
            let answer = 1;
            for (let i = 0; i < b; i++) {
                answer = (answer * a) % 10
                if (answer === 0) {
                    answer = 10
                }
            }
            console.log(answer)
        }
        rl.close();
    }

}).on("close", function () {
    process.exit();
});