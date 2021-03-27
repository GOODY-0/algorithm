// multi line
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line.split('\n'));
    // input.forEach((e) => Number(e));
  })
  .on('close', function () {
    const caseCount = input[0];
    let numbers = input[1];
    // numbers.split("");
    numbers = numbers[0].split("");
    const newNumbers = numbers.map((e) => Number(e));
    const answer = newNumbers.reduce((acc,cur) => acc += cur);
    console.log(answer);
    process.exit();
  });