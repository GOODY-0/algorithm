const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
const year = Number(input);

if((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) {
    console.log(1);
} else {
    console.log(0);
}