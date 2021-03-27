const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const count = parseInt(input[0]);
const numbers = [];

for(let i = 1; i < input.length; i++) {
    numbers.push(input[i].split(' '));
}


for(let j = 0; j < count; j++) {
        let a = Number(numbers[j][0]);
        const b = Number(numbers[j][1]);
        if(a >= 10) {
            a = a-10;
        }

        let smallB = b % 4;
        if(smallB === 0) {
            smallB = 4;
        }

        let result = a**smallB;
        result += ''; 
        result = Number(result[result.length-1]);
        if(result === 0) {
            result += 10;
            console.log(result);
        } else {
            console.log(result);
        }
}


