const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
const num = parseInt(input);

for(let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
