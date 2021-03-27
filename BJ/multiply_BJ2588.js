
const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const a = parseInt(input[0]);   //472
const b = input[1];             //385

const three = a * b[2];
const four = a * b[1];
const five = a * b[0];
const result = a * b;

console.log(three);
console.log(four);
console.log(five);
console.log(result);