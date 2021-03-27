const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const num = Number(input);
let result = 0;
for(let i = 1; i <= num; i++){
    result += i;
}
console.log(result);

// 가우스 식 버전

// const result = num*(num+1)/2;