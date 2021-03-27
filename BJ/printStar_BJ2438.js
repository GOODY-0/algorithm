const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const num = Number(input);
let result = '';
let count = 1;

for(let j = 0; j < num; j++) {
    for(let i = 0; i < count; i++) {
        result += "*";
    }
    result += '\n';
    count++;
}

console.log(result);



// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();

// const num = Number(input);
// let result = '';

// for(let i = 0; i < num; i++) {
//     result += '*';
//     console.log(result);
// }

