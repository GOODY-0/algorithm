const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const count = parseInt(input[0]);
const numbers = [];
let answer = '';

for(let i = 1; i < input.length; i++) {
    if(input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}

for(let i = 0; i < count; i++) {
    answer += `Case #${i+1}: ${Number(numbers[i][0])} + ${Number(numbers[i][1])} = ${Number(numbers[i][0]) + Number(numbers[i][1])}\n`
}

console.log(answer);