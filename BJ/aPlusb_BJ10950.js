const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const count = parseInt(input[0]);
const numbers = [];

for(let i = 1; i < input.length; i++) {
    numbers.push(input[i].split(' '));
}

for(let i = 0; i < count; i++) {
  const num1 = parseInt(numbers[i][0]);
  const num2 = parseInt(numbers[i][1]);

  console.log(num1 + num2);
}
