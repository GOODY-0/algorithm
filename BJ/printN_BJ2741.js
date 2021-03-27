const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const num = Number(input);
let answer = '';

for(let i = 1; i <= num; i++) {
    answer += i + '\n';
}

console.log(answer);
