// multi line
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    const caseCount = input[0];
    const caseLine = input.slice(1);

    for(let i = 0; i < caseLine.length; i++) {
        const arr = caseLine[i].split(" ");
        const count = arr[0];
        const str = arr[1];
        // console.log(str);
        let answer = "";
        for(let j = 0; j < str.length; j++) {
            for(let k = 0; k < count; k++) {
                answer += str[j];
            }
        }
        console.log(answer);
    }

    process.exit();
  });